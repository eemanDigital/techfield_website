"use client";
import { useEffect, useRef, useState } from "react";

export default function TechBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !vantaRef.current) return;

    let isMounted = true;

    // Dynamic import to avoid SSR issues
    const loadVanta = async () => {
      try {
        // Import THREE first
        const THREE = await import("three");
        // Then import Vanta
        const VANTA = await import("vanta/dist/vanta.net.min");

        if (!isMounted || !vantaRef.current) return;

        // Destroy existing effect before creating new one
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff1a1a, // soft red glow
          backgroundColor: 0x0a0a0a, // dark background
          points: 4.0, // fewer points for cleaner look
          maxDistance: 10.0,
          spacing: 7.0,
          showDots: false, // hide dots for a sleek wire-only style
        });
      } catch (error) {
        console.error("Vanta loading error:", error);
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="absolute inset-0 z-0 bg-secondary opacity-30 pointer-events-none" />
    );
  }

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 opacity-30 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
