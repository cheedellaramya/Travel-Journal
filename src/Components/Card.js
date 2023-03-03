import React from 'react'

const Card = (props) => {
  return (
        
      <div className='card-container'>
        <div className='left-container'>
          <img className='card-left-image' src={props.details.imageUrl} alt='loading'/>
        </div>
        <div className='right-container'>
          <div className='first-location'>
            <div className='location'>
              <img className='image' src={props.point} alt=''/>
              <span className='location-city'>{props.details.location}</span>
              <a href='/'>{props.details.googleMapsUrl}</a>
            </div>
          </div>
          <div className='location-heading'>
            <h2>{props.details.title}</h2>
          </div>
          <div className='location-content'>
            <h4>{props.details.startDate} - {props.details.endDate}</h4>
            <p>{props.details.description}</p>
          </div>
        </div>
      </div>
    
  )
}

export default Card;
