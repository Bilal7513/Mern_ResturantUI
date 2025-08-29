import React from 'react'
import { data } from "../restApi.json"

const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
        <div className="container">
            {data[0].ourQualities.map((e) => (
                <div className='card' key={e.id}>
                    <img src={e.image} alt={e.title} />
                    <p className="title">{e.title}</p>
                    <p className="description">{e.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Qualities