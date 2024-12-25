import React from 'react'
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
const data = [
  {
    id: 1,
    //image: Image1,
    title: "Frontend Development",
    description:
      "Developing immersive interfaces for optimal user engagement and satisfaction.",
  },
  {
    id: 2,
    //image: Image2,
    title: "Backend Development",
    description:
      "Developing dynamic webapps with precision, innovation, and a focus on success.",
  },
  {
    "id": 3,
    "//image": Image3,
    "title": "Golang Development",
    "description": "Implementing robust and scalable web apis with a focus on innovation."
  }
  
];

const Services = () => {
  return (
   <section className='services container section' id='services'>
    <h2 className='section__title'>Services</h2>


    <div className="service__container grid">
      {data.map(({id,title,description})=>{
        return (
          <div className="services__card" key={id}>
            
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
   </section>
  )
}

export default Services