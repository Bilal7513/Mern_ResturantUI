import React from 'react'
import {data} from '../restApi.json'

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nulla porro sunt nihil expedita culpa ut animi ullam facere officiis?</p>
            </div>
            <div className="team_container">
                {data[0].team.map(e => {
                    return(
                        <div className="card" key={e.id}>
                            <img src={e.image} alt={e.name} />
                            <h3>{e.name}</h3>
                            <p>{e.designation}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Team