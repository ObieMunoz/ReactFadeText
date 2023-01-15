import React, { useRef, useEffect } from "react";

interface Props {
  text: string;
}

const FadingTextSegment: React.FC<Props> = ({ text }) => {
  const elementRef = useRef<null>(null);

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

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  return (
    <p className="initial-hidden text" ref={elementRef}>
      {text}
    </p>
  );
};

export default FadingTextSegment;
