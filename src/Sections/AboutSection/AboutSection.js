import React from 'react'
import "./AboutSection.css"
import { techSkill } from "../../MainData/MainData"
import { platForms } from "../../MainData/MainData"
import { experience } from "../../MainData/MainData"
import { projects,alsoKnow } from "../../MainData/MainData"
import ExperienceBlock from '../../Components/ExperienceBlock/ExperienceBlock'
// import SkillBlock from '../../Components/SkillBlock/SkillBlock'
const AboutSection = () => {
  return (
    <div>
      {/* <SkillBlock/> */}
      <div className='skill'>
        <h1>Technical Skill</h1>
        <div>
          {
            techSkill.map((i) => (

              <label className='hoverEffect'>{i.label}</label>

            ))
          }
        </div>
      </div>
      <div className='skill'>
        <h1>Also have Knoweledge of</h1>
        <div>
          {
            alsoKnow.map((i) => (

              <label className='hoverEffect'>{i.label}</label>

            ))
          }
        </div>
      </div>
      <div className='skill'>
        <h1>PlatForms Used</h1>
        <div>
          {
            platForms.map((i) => (

              <label>{i.label}</label>

            ))
          }
        </div>
      </div>

      {/* <div className='experience'>
        <h1>Experience </h1>
        <div>
          {
            experience.map((i) => (
              <div className='experienceBlock'>
                <h3>{i.title}</h3>
                <label>{i.duration}</label>
                <p>{i.company}</p>
              </div>
            ))
          }
        </div>
      </div> */}

      <div className='experience'>
        <h1>Projects </h1>
        <div>
          {
            projects.map((i) => (
              <div className='experienceBlock'>
                <h3>{i.title}</h3>
                <label>Technologies:-&nbsp;&nbsp;{i.technology}</label>
                <p>Customer's Product:-&nbsp;&nbsp;{i.customerProduct}</p>
                <p>PlatForms Used:-&nbsp;&nbsp;{i.platformUsed}</p>
               {i.features && <p>Features:-&nbsp;&nbsp;{i.features}</p>}
              </div>
            ))
          }
        </div>
      </div>
      <div className='experience'>
        <h1>Experience </h1>
        <ExperienceBlock experience={experience}/>
      </div>
    </div>
  )
}

export default AboutSection