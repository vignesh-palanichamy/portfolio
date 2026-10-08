import { useEffect, useRef, useState } from 'react';

export function LiveKnot({ animated }: { animated: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    setReady(false);
    import('three').then(async T => {
      if (disposed || !host.current) return;
      const element = host.current;
      let renderer: InstanceType<typeof T.WebGLRenderer>;
      try { renderer = new T.WebGLRenderer({ alpha: true, antialias: true }); } catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      element.appendChild(renderer.domElement);
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(36, 1, .1, 50);
      camera.position.set(0, 0, 8.6);
      const group = new T.Group(); scene.add(group);
      const orbit = new T.Mesh(new T.TorusGeometry(2.05,.012,8,100),new T.MeshBasicMaterial({color:0xe4ee19}));
      orbit.rotation.set(1.15,.35,.2);group.add(orbit);
      const satellite = new T.Mesh(new T.IcosahedronGeometry(.14,0),new T.MeshStandardMaterial({color:0xf4ff27,metalness:.3,roughness:.25}));group.add(satellite);
      const knot = new T.Mesh(new T.TorusKnotGeometry(1.25, .36, 160, 24, 2, 3), new T.MeshPhysicalMaterial({ color: 0x0749ff, metalness: .35, roughness: .18, clearcoat: 1, clearcoatRoughness: .12 }));
      knot.rotation.set(.35, -.4, -.35); group.add(knot);
      scene.add(new T.HemisphereLight(0xffffff, 0x5265ba, 3));
      const key = new T.DirectionalLight(0xffffff, 5); key.position.set(-3, 5, 4); scene.add(key);
      const rim = new T.DirectionalLight(0xa9ceff, 4); rim.position.set(4, 1, -2); scene.add(rim);
      const tile = new T.Mesh(new T.BoxGeometry(1.35, .9, .1), new T.MeshPhysicalMaterial({ color: 0xcde8ff, metalness: .15, roughness: .12, transparent: true, opacity: .65, clearcoat: 1 }));
      tile.position.set(.95, .85, 1.1); tile.rotation.set(-.08, -.25, -.12); group.add(tile);
      const labelCanvas = document.createElement('canvas'); labelCanvas.width = 256; labelCanvas.height = 128;
      const ctx = labelCanvas.getContext('2d');
      if (ctx) { ctx.fillStyle = '#112347'; ctx.font = 'bold 65px monospace'; ctx.textAlign = 'center'; ctx.fillText('</>', 128, 90); }
      const texture = new T.CanvasTexture(labelCanvas);
      const label = new T.Mesh(new T.PlaneGeometry(1.15, .58), new T.MeshBasicMaterial({map: texture, transparent: true})); label.position.z = .056; tile.add(label);
      const shape = new T.Shape(); shape.moveTo(0,.65); shape.lineTo(.65,-.05); shape.lineTo(.27,-.08); shape.lineTo(.46,-.5); shape.lineTo(.2,-.61); shape.lineTo(.02,-.2); shape.lineTo(-.25,.06); shape.closePath();
      const pointer = new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.16,bevelEnabled:true,bevelSize:.05,bevelThickness:.05,bevelSegments:3,steps:1}),new T.MeshPhysicalMaterial({color:0xff858b,roughness:.24,clearcoat:1})); pointer.position.set(1.35,-.9,1.4); pointer.rotation.z=.2; group.add(pointer);
      let frame = 0, visible = true, targetX = 0, targetY = 0, progress = 0, smoothProgress = 0;
      function scroll(){const hero=element.closest('.fk-hero');if(!hero)return;const rect=hero.getBoundingClientRect();progress=Math.max(0,Math.min(1,-rect.top/Math.max(rect.height,1)));}
      window.addEventListener('scroll',scroll,{passive:true});scroll();
      const start = performance.now();
      function draw(now: number) {
        const time = (now-start)/1000;
        group.rotation.y += (targetX-group.rotation.y)*.045;
        group.rotation.x += (targetY-group.rotation.x)*.045;
        if(animated) {
          smoothProgress+=(progress-smoothProgress)*.055;
          camera.position.z=8.6-smoothProgress*1.5;
          camera.position.x=Math.sin(smoothProgress*1.5)*.7;
          camera.lookAt(0,0,0);
          knot.rotation.y=-.4+smoothProgress*1.8+Math.sin(time*.25)*.12;
          knot.rotation.z = -.35+Math.sin(time*.45)*.13+smoothProgress*.5;
          knot.position.y=Math.sin(time*.8)*.075;
          tile.position.y=.85+Math.sin(time*.8+1)*.09;
          pointer.position.y=-.9+Math.sin(time*.7+2)*.08;
          satellite.position.set(Math.cos(time*.35)*2.05,Math.sin(time*.35)*.8,Math.sin(time*.35)*1.4);
        }
        renderer.render(scene,camera);
        if(animated && visible && !document.hidden) frame=requestAnimationFrame(draw);
      }
      function schedule(){cancelAnimationFrame(frame);draw(performance.now());}
      function resize(){const {width,height}=element.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/Math.max(height,1);camera.updateProjectionMatrix();schedule();}
      function move(e:PointerEvent){if(!animated||e.pointerType!=='mouse')return;const r=element.getBoundingClientRect();targetX=((e.clientX-r.left)/r.width-.5)*.5;targetY=((e.clientY-r.top)/r.height-.5)*.25;}
      function leave(){targetX=targetY=0;}
      const observer = new ResizeObserver(resize);observer.observe(element);
      const intersection = new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule();});intersection.observe(element);
      element.addEventListener('pointermove',move);element.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',schedule);
      const lost = (e:Event)=>{e.preventDefault();cancelAnimationFrame(frame);setReady(false);};renderer.domElement.addEventListener('webglcontextlost',lost);
      resize();setReady(true);
      cleanup=()=>{window.removeEventListener('scroll',scroll);cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();element.removeEventListener('pointermove',move);element.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',schedule);renderer.domElement.removeEventListener('webglcontextlost',lost);scene.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>m.dispose());}});texture.dispose();renderer.dispose();renderer.domElement.remove();};
    }).catch(()=>setReady(false));
    return ()=>{disposed=true;cleanup();};
  },[animated]);
  return <div className="fk-live-art"><img src="/images/funky-hero.png" alt="" style={{opacity:ready?0:1}}/><div className="fk-live-canvas" ref={host} aria-hidden="true" style={{opacity:ready?1:0}}/></div>;
}

