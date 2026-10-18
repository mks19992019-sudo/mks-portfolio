import { useEffect, useRef } from 'react';

/**
 * Soft ambient glow that follows the cursor with a smooth lerp lag.
 * Inspired by Vercel / DeepEval / Linear UI patterns.
 *
 * - Completely pointer-events: none — won't interfere with any clicks.
 * - Uses requestAnimationFrame + linear interpolation for smooth GPU compositing.
 * - Hidden on touch devices and when prefers-reduced-motion is set.
 */
export function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Hide on touch-primary devices (no cursor)
    if (window.matchMedia('(hover: none)').matches) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Current rendered positions
    const outerPos = { x: -600, y: -600 };
    const innerPos = { x: -600, y: -600 };

    // Target position (raw mouse)
    const target = { x: -600, y: -600 };

    let rafId = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        // Snap to cursor on first move so it doesn't slide in from off-screen
        outerPos.x = target.x;
        outerPos.y = target.y;
        innerPos.x = target.x;
        innerPos.y = target.y;
        outer.style.opacity = '1';
        visible = true;
      }
    };

    const onLeave = () => {
      outer.style.opacity = '0';
      visible = false;
    };

    const tick = () => {
      // Outer glow: slow, dreamy follow
      outerPos.x += (target.x - outerPos.x) * 0.07;
      outerPos.y += (target.y - outerPos.y) * 0.07;

      // Inner dot: slightly faster
      innerPos.x += (target.x - innerPos.x) * 0.14;
      innerPos.y += (target.y - innerPos.y) * 0.14;

      // Outer: 600px glow, centred on cursor
      outer.style.transform = `translate3d(${outerPos.x - 300}px, ${outerPos.y - 300}px, 0)`;

      // Inner: 6px dot, centred on cursor
      inner.style.transform = `translate3d(${innerPos.x - 3}px, ${innerPos.y - 3}px, 0)`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // Wrapper covers the full viewport, sits above content but below interactive elements
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {/* Large ambient glow — the "spotlight" */}
      <div
        ref={outerRef}
        className="absolute top-0 left-0 opacity-0 transition-opacity duration-500"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at center, rgba(59,130,246,0.07) 0%, rgba(99,102,241,0.04) 35%, transparent 70%)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Small precise dot — the "cursor accent" */}
      <div
        ref={innerRef}
        className="absolute top-0 left-0"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'rgba(59,130,246,0.5)',
          willChange: 'transform',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
