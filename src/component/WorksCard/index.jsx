import React from 'react'

const WorksCard = ({image,title,description,subTitle}) => {
  return (
    <div className="works-card">
    <figure className='works-figure'>
      <img src={image} alt="" />
    </figure>

    <div className="works-card-title">
        <span>{subTitle}</span>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      
    </div>
    <h4>✔︎ Modern infrastructure</h4>
    <h4>✔︎ Consulting services</h4>
    <div className="works-card-link">
      <a href="#">Learn more</a>
    </div>
  </div>
  )
}

export default WorksCard