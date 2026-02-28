// Button.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Default ui settings of the buttons are already passed by default as props

const Button = ({ label = "", href = "#", b_radius = "rounded-full", bg_color = "#ff6b6b", border = true, hov_bg="white", hov_text="black" }) => {

  const borderClass = border ? "border border-white" : "";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;



    if (!button || !flair) return;

    // Register SplitText plugin
    gsap.registerPlugin(SplitText);

    // ✅ CHANGE 1: target only the text span (not the icon)
    const labelSpan = button.querySelector(".button-label");

    let labelTimeline;
    let split;
    if (labelSpan) {
      // ✅ CHANGE 2: keep whitespace intact
      split = new SplitText(labelSpan, {
        type: "chars", // (use "words" if you want word-by-word animation)
        reduceWhiteSpace: false,
      });

      labelTimeline = gsap.timeline({ paused: true });
      labelTimeline.to(split.chars, {
        duration: 0.1,
        yPercent: -150,
        ease: "power2.in",
        stagger: 0.005,
      });
      labelTimeline.set(split.chars, { yPercent: 150 });
      labelTimeline.to(split.chars, {
        duration: 0.2,
        yPercent: 0,
        ease: "power2.out",
        stagger: 0.005,
      });
    }

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const onEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      if (labelTimeline) labelTimeline.play(0);
    };

    const onLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mouseleave", onLeave);
    button.addEventListener("mousemove", onMove);

    return () => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mouseleave", onLeave);
      button.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Link
      onClick={handleScrollTop}
      to={href}
      ref={buttonRef}
      className={`relative group inline-flex items-center justify-center gap-2 px-4 py-2 text-white ${b_radius} ${borderClass} overflow-hidden transition-colors duration-150 hover:text-${hov_text} bg-[${bg_color}]`}
    >
      <span
        ref={flairRef}
        className="absolute inset-0 pointer-events-none scale-0 origin-top-left will-change-transform"
      >
        <span className={`absolute block bg-${hov_bg} rounded-full w-[170%] aspect-square -translate-x-1/2 -translate-y-1/2`} />
      </span>

      {/* ✅ CHANGE 3: Wrap only the label text in a dedicated span */}
      <span className="relative flex items-center justify-center">
        <span className="button-label">{label}</span>
        <ArrowUpRight className="rotate-45 group-hover:rotate-0 transition-all duration-300 ml-2" />
      </span>
    </Link>
  );
};

export default Button;
