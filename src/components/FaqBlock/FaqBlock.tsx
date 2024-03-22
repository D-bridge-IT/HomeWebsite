import "./FaqBlock.scss";
import React, { useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const FaqBlock: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    console.log("Height for ", title, ": ", height);
  }, [height, title]);

  const toggleAccordion = () => {
    setActive(!active);
    setHeight(active ? "0px" : `${contentRef.current?.scrollHeight}px`);
  };

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default FaqBlock;
