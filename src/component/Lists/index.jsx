import React from 'react'; // Don't forget to import React
import List from '../List';

const menuList = ["H.", "Solutions", "Company", "Case studies", "Blog", "Resources"];

const Lists = () => {
  return (
    <nav className='desktop-navbar'>
        <ul>
      {menuList.map((list, index) => (
        <List key={index} {...{ list }} />
      ))}
    </ul>
    </nav>
  );
};

;

export default Lists;
