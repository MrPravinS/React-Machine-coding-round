import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [showContent, setShowContent] = useState(null);
  const handleToggleContent = (index) => {
    setShowContent(showContent === index ? null : index);
  };
  return !items || items.length === 0 ? (
    "No items available."
  ) : (
    <div className="accordion">
      {items.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <button
              onClick={() => handleToggleContent(index)}
              className="accordion-title"
            >
              {item.title}
              {showContent == index ? (
                <FaChevronUp className="right" />
              ) : (
                <FaChevronDown className="right" />
              )}
            </button>
            {showContent == index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
