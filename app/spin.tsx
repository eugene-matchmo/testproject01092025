"use client";
import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";

interface CarouselProps {
  items: string[]; // list of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const itemCount = items.length;

  useEffect(() => {
    const track = trackRef.current;
    const dotsContainer = dotsRef.current;
    if (!track || !dotsContainer) return;

    const itemElements = Array.from(track.children) as HTMLImageElement[];

    // Create navigation dots
    dotsContainer.innerHTML = "";
    itemElements.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = "carousel-dot";
      dot.addEventListener("click", () => setCurrentIndex(idx));
      dotsContainer.appendChild(dot);
    });
    const dotElements = Array.from(dotsContainer.children);

    function updateCarousel(idx: number) {
      itemElements.forEach((item, i) => {
        item.className = "carousel-item";
        item.style.opacity = "0";
        item.style.pointerEvents = "none";
      });

      // Center
      const center = itemElements[idx];
      center.classList.add("active");
      center.style.opacity = "1";
      center.style.pointerEvents = "auto";

      // Left
      const left = itemElements[(idx - 1 + itemCount) % itemCount];
      left.classList.add("left");
      left.style.opacity = "0.7";
      left.style.pointerEvents = "auto";

      // Right
      const right = itemElements[(idx + 1) % itemCount];
      right.classList.add("right");
      right.style.opacity = "0.7";
      right.style.pointerEvents = "auto";

      // Update dots
      dotElements.forEach((dot, i) => {
        dot.classList.toggle("active", i === idx);
      });
    }

    // Initial render
    updateCarousel(currentIndex);

    // Auto-spin
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [itemCount]);

  // Update carousel whenever currentIndex changes
  useEffect(() => {
    const track = trackRef.current;
    const dotsContainer = dotsRef.current;
    if (!track || !dotsContainer) return;

    const itemElements = Array.from(track.children) as HTMLImageElement[];
    const dotElements = Array.from(dotsContainer.children);

    const idx = currentIndex;

    itemElements.forEach((item, i) => {
      item.className = "carousel-item";
      item.style.opacity = "0";
      item.style.pointerEvents = "none";
    });

    // Center
    const center = itemElements[idx];
    center.classList.add("active");
    center.style.opacity = "1";
    center.style.pointerEvents = "auto";

    // Left
    const left = itemElements[(idx - 1 + itemCount) % itemCount];
    left.classList.add("left");
    left.style.opacity = "0.7";
    left.style.pointerEvents = "auto";

    // Right
    const right = itemElements[(idx + 1) % itemCount];
    right.classList.add("right");
    right.style.opacity = "0.7";
    right.style.pointerEvents = "auto";

    // Update dots
    dotElements.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);
    });
  }, [currentIndex, itemCount]);

  return (
    <div id="carousel-slider" className="relative w-full max-w-3xl mx-auto">
      <div ref={trackRef} className="carousel-track relative">
        {items.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="carousel-item"
          />
        ))}
      </div>

      <div
        ref={dotsRef}
        className="carousel-dots flex justify-center mt-4 gap-2"
      />
    </div>
  );
};

export default Carousel;
