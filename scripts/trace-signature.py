"""Extract centerline paths from the signature alpha channel for SVG animation."""
import json
import numpy as np
from PIL import Image

im = np.array(Image.open('src/assets/signature.png'))
a = np.pad((im[:, :, 3] > 60).astype(np.uint8), 1)
while True:
    changed = False
    for step in (0, 1):
        p = [a[:-2,1:-1], a[:-2,2:], a[1:-1,2:], a[2:,2:], a[2:,1:-1], a[2:,:-2], a[1:-1,:-2], a[:-2,:-2]]
        count = sum(p)
        transitions = sum(((p[i] == 0) & (p[(i+1)%8] == 1)).astype(np.uint8) for i in range(8))
        if step == 0:
            cond = (p[0]*p[2]*p[4] == 0) & (p[2]*p[4]*p[6] == 0)
        else:
            cond = (p[0]*p[2]*p[6] == 0) & (p[0]*p[4]*p[6] == 0)
        remove = (a[1:-1,1:-1] == 1) & (count >= 2) & (count <= 6) & (transitions == 1) & cond
        if remove.any():
            a[1:-1,1:-1][remove] = 0
            changed = True
    if not changed:
        break
points = set((int(x), int(y)) for y, x in np.argwhere(a[1:-1,1:-1]))
neighbors = {p: [(p[0]+dx,p[1]+dy) for dx in (-1,0,1) for dy in (-1,0,1) if (dx or dy) and (p[0]+dx,p[1]+dy) in points] for p in points}
edges = set()
paths = []
for start in sorted(points, key=lambda p: (len(neighbors[p]) == 2, p[0], p[1])):
    for nxt in neighbors[start]:
        edge = frozenset((start,nxt))
        if edge in edges:
            continue
        path = [start,nxt]
        edges.add(edge)
        while len(neighbors[path[-1]]) == 2:
            options = [p for p in neighbors[path[-1]] if frozenset((path[-1],p)) not in edges]
            if not options:
                break
            p = options[0]
            edges.add(frozenset((path[-1],p)))
            path.append(p)
        if len(path) >= 4:
            paths.append(path)
# Join nearby fragments in approximate pen order, starting at the left.
ordered = []
cursor = (0,160)
while paths:
    index, reverse = min(((i,r) for i in range(len(paths)) for r in (False,True)), key=lambda v: (paths[v[0]][-1 if v[1] else 0][0]-cursor[0])**2 + (paths[v[0]][-1 if v[1] else 0][1]-cursor[1])**2)
    path = paths.pop(index)
    if reverse:
        path.reverse()
    ordered.append(path)
    cursor = path[-1]
total = sum(len(p) for p in ordered)
elapsed = 0.25
result = []
for path in ordered:
    duration = len(path) / total * 3.6
    sample = path[::2]
    if sample[-1] != path[-1]:
        sample.append(path[-1])
    result.append({'d': 'M'+' L'.join(f'{x},{y}' for x,y in sample), 'delay':round(elapsed,4), 'duration':round(duration,4)})
    elapsed += duration
print(json.dumps(result, separators=(',',':')))
