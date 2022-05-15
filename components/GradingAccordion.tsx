import React, { useState } from 'react';

type AccordionProps = {title:string, content:string}

const Accordion = ({ title, content }:AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item  border border-gray-200">
      <div className="accordion-title accordion-button relative flex items-center w-full py-4 px-5 text-base text-left border-0 rounded-none transition focus:outline-none collapsed" onClick={() => setIsActive(!isActive)}>
        <div><strong>{title}</strong></div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content py-4 px-5">{content}</div>}
    </div>
  );
};


type Props = {}

const accordionData = [
    {
      title: 'Stage 0:',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Stage 1:',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Stage 2:',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'Stage 3:',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'Research Updates (6 points)',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

const GradingAccordion = (props: Props) => {
  return (
    <div className="accordion">
    {accordionData.map(({ title, content }) => (
      <Accordion title={title} content={content} />
    ))}
  </div>
  )
}

export default GradingAccordion;