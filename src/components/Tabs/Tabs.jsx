import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='lg:flex'>
      <ul className='flex justify-between border-b border-gray-400 pb-4 lg:flex-col lg:border-b-0 lg:border-r lg:min-w-[16rem] lg:justify-start'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => {
              if(!tab.disabled)
                handleTabClick(index)
            }}
            className={"lg:pb-8" + ( activeTab === index ? ' font-bold text-primary' : '')}
          >

            {(activeTab === index) && <FontAwesomeIcon icon={faArrowRight}/>}
            {tab.title}
          </li>
        ))}
      </ul>
      <div className='lg:p-4'>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
