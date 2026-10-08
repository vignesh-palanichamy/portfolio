import { useEffect, useRef, useState } from 'react';

interface UnicornStudioBackgroundProps {
  projectId: string;
  className?: string;
}

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export const UnicornStudioBackground = ({ 
  projectId, 
  className = "" 
}: UnicornStudioBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log('UnicornStudio: Initializing background animation with project ID:', projectId);

    let pollTimer: number | undefined;
    let pollStart = Date.now();
    const POLL_TIMEOUT = 8000;
    const POLL_INTERVAL = 150;

    const tryInit = () => {
      if (window.UnicornStudio) {
        if (!window.UnicornStudio.isInitialized) {
          console.log('UnicornStudio: Found global, calling init()');
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        } else {
          console.log('UnicornStudio: Global already initialized');
        }
        setIsLoaded(true);
        // Debug canvas presence and size
        setTimeout(() => {
          const scope = containerRef.current;
          const canvas = scope?.querySelector('canvas');
          console.log('UnicornStudio: Canvas in container?', Boolean(canvas), {
            container: !!scope,
            canvasSize: canvas ? { w: (canvas as HTMLCanvasElement).width, h: (canvas as HTMLCanvasElement).height } : null,
          });
        }, 0);
        return true;
      }
      return false;
    };

    const startPolling = () => {
      console.log('UnicornStudio: Polling for library...');
      pollTimer = window.setInterval(() => {
        if (tryInit()) {
          if (pollTimer) clearInterval(pollTimer);
        } else if (Date.now() - pollStart > POLL_TIMEOUT) {
          if (pollTimer) clearInterval(pollTimer);
          console.error('UnicornStudio: Poll timeout - falling back');
          setHasError(true);
        }
      }, POLL_INTERVAL);
    };

    try {
      if (tryInit()) return;

      const existingScript = document.querySelector('script[src*="unicornstudio"]') as HTMLScriptElement | null;
      if (existingScript) {
        console.log('UnicornStudio: Script tag exists; waiting for global...');
        startPolling();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js';
      script.type = 'text/javascript';
      script.async = true;

      script.onload = () => {
        console.log('UnicornStudio: Script loaded');
        if (!tryInit()) {
          console.warn('UnicornStudio: Global missing after load, starting polling');
          startPolling();
        }
      };

      script.onerror = (error) => {
        console.error('UnicornStudio: Failed to load script', error);
        setHasError(true);
      };

      (document.head || document.body).appendChild(script);
    } catch (error) {
      console.error('UnicornStudio: Error during setup', error);
      setHasError(true);
    }

    return () => {
      if (pollTimer) clearInterval(pollTimer);
      console.log('UnicornStudio: Component unmounted, cleaned up');
    };
  }, [projectId]);

  if (hasError) {
    console.warn('UnicornStudio: Falling back to static background due to error');
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 ${className}`}
        style={{ zIndex: 0 }}
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`${className}`}
      style={{ zIndex: 0 }}
    >
      <div 
        data-us-project={projectId}
        className="absolute inset-0"
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '100%'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse" />
      )}
    </div>
  );
};