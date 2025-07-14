"use client";
import React, { useState } from 'react';
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const accordions = [
  {
    "title": "What is Accordion Maker?",
    "content": "It lets you customize and copy accordion code in React + Tailwind."
  },
  {
    "title": "Can I style it?",
    "content": "Yes! Choose colors, font size, marker position, and auto-close."
  },
  {
    "title": "How do I use the code?",
    "content": "Just click \"Copy\" and paste it into your React project."
  }
];

  return (
    <div className="text-base rounded p-4" style={{ backgroundColor: '#ffffff', color: '#222222' }}>
      {accordions.map((acc, i) => {
        const isOpen = true ? openIndex === i : undefined;
        return (
          <details
            key={i}
            open={isOpen}
            onClick={(e) => {
              if (!true) return;
              e.preventDefault();
              setOpenIndex(isOpen ? null : i);
            }}
            className="group p-4 rounded-lg mb-4 relative"
            style={{ backgroundColor: '#ffffff' }}
          >
            <summary className="cursor-pointer font-semibold list-none flex items-center justify-between">
              {acc.title}
              <span
                className="w-5 h-5 flex items-center justify-center text-sm font-bold select-none"
                style={{ color: '#ffffff', backgroundColor: 'transparent' }}
              >
                <span className="group-open:hidden"></span>
                <span className="hidden group-open:inline"></span>
              </span>
            </summary>
            <div className="mt-2" style={{ textAlign: 'left' }}>
              {acc.content}
            </div>
          </details>
        );
      })}
    </div>
  );
}
