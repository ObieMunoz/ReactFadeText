import React from "react";
import FadingTextSegment from "./FadingTextSegment";

interface Props {
  text: string;
}

const FadingText: React.FC<Props> = ({ text }) => {
  const MAX_CHARS_PER_SEGMENT = 30;
  let currentSegment = "";
  let currentSegmentLength = 0;
  const segments = [];
  const words = text.match(/[^\s]{1,29}(?:\s|$)/g);

  if (!words) return <div></div>;
  for (const word of words) {
    if (currentSegmentLength + word.length <= MAX_CHARS_PER_SEGMENT) {
      currentSegment += word + " ";
      currentSegmentLength += word.length + 1;
    } else {
      segments.push(currentSegment);
      currentSegment = word;
      currentSegmentLength = word.length;
    }
  }
  segments.push(currentSegment);

  return (
    <div className="bg-black">
      {segments.map((segment: string, index: number) => (
        <FadingTextSegment key={index} text={segment} />
      ))}
    </div>
  );
};

export default FadingText;
