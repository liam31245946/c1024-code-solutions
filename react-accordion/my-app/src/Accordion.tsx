import React, { useState } from 'react';

// Type for accordion items
type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Toggle between open/close
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <h3>{item.title}</h3>
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
