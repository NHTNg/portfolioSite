"use client";
import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
    return () => {
      window.addEventListener("mousemove", (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);
  return mousePos;
};

export default useMousePosition;
