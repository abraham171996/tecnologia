import React from 'react'
import WorksCard from '../WorksCard'
import nespresso from "../../assets/images/nespresso.webp"
import Insurance from "../../assets/images/Insurance.webp"
import undergroup from "../../assets/images/undergroup.webp"
const WorksCards = () => {
    const worksData = [
        {
          subTitle:"CLOUD HOSTING",  
          title: 'Major Insurance Provider Saves $750k per Month With Big Data Migration',
          description: 'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
          image:nespresso
          
        },
        {
          subTitle:"IT CONSULTING",   
          title: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story',
          description: 'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
          image:Insurance
        },
        {
          subTitle:"MOBILE DEVELOPMENT",   
          title: 'Strategic Move to an AI-supported application for Public Safety Travel App in London',
          description: 'Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.',
          image:undergroup
        }
        
      ];
  return (
    <div>
        <div className="works-title">
        <span>WHERE WE DO</span>
        <h2>Success Stories</h2>
      </div>
      <div className="works-cards">
        {
            worksData.map((works,index)=>(
                <WorksCard
                key={index}
                title={works.title}
                description={works.description}
                image={works.image} 
                subTitle={works.subTitle}
                />
            ))
        }
        
      </div>
    </div>
  )
}

export default WorksCards