import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only initialize cursor on non-touch devices
    if (window.matchMedia("(pointer:coarse)").matches) {
      return;
    }

    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    const cursorElements = document.querySelectorAll("[data-cursor]");
    const eventListeners = new Map<Element, { mouseover: (e: MouseEvent) => void; mouseout: () => void }>();

    cursorElements.forEach((item) => {
      const element = item as HTMLElement;

      const onMouseOver = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const onMouseOut = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      eventListeners.set(element, { mouseover: onMouseOver, mouseout: onMouseOut });

      element.addEventListener("mouseover", onMouseOver as EventListener);
      element.addEventListener("mouseout", onMouseOut as EventListener);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      cursorElements.forEach((item) => {
        const element = item as HTMLElement;
        const listeners = eventListeners.get(element);
        if (listeners) {
          element.removeEventListener("mouseover", listeners.mouseover as EventListener);
          element.removeEventListener("mouseout", listeners.mouseout as EventListener);
        }
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
