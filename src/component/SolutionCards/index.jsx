import React from 'react';
import SolutionCard from '../SolutionCard';
import Capture from '../../assets/images/Capture.png';
import Button from '../../atoms/Button';

const SolutionCards = () => {
  const solutionData = [
    {
      title: 'Managed Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.',
      image:Capture
      
    },
    {
      title: 'IT Consulting & Advisory',
      description: 'The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth ',
      image:Capture
    },
    {
      title: 'Cyber Security',
      description: 'Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data ',
      image:Capture
    },
    {
      title: 'Web Development',
      description: 'Our web development services can help you establish an impactful online presence and reach your target audience effectively. ',
      image:Capture
    },
    {
      title: 'Mobile Development',
      description: 'We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms. ',
      image:Capture
    },
    {
      title: 'Cloud Services',
      description: 'With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.',
      image:Capture
    }
    
  ];

  return (
    <div>
      <div className="solution-title">
        <span>HOW WE DO</span>
        <h2>Solutions</h2>
      </div>
      <div className="cards">
        {solutionData.map((solution, index)=>(
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
            image={solution.image} 
          />
        ))}
      </div>
      <div className='solution-btn'>
      <Button >View All Solutions</Button>
      </div>
    </div>
  );
};

export default SolutionCards;
