import React, { useRef, useEffect } from "react";

const FadingText = ({ text }) => {
  const elementsRef = text.split(/(?<=,)/g).map(() => useRef(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("initial-hidden");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-300px" }
    );
    elementsRef.forEach((elementRef) => {
      if (elementRef.current) observer.observe(elementRef.current);
    });

    return () => {
      elementsRef.forEach((elementRef) => {
        if (elementRef.current) observer.unobserve(elementRef.current);
      });
    };
  }, [elementsRef]);

  return (
    <div className="bg-black">
      {text.split(/(?<=,)/g).map((substring, index) => (
        <p key={index} className="initial-hidden text" ref={elementsRef[index]}>
          {substring.trim()}
        </p>
      ))}
    </div>
  );
};

export default FadingText;
