import React from 'react'
import {data} from '../restApi.json'

const WhoAreWe = () => {
  return (
    <section className='who_are_we' id='who_are_we'>
        <div className="container">
            <div className="text_banner">
                {
                    data[0].who_we_are.slice(0,2).map(e => {
                        return(
                            <div className='card' key={e.id}>
                                <h1 style={{fontWeight: "300"}}>{e.number}</h1>
                                <p>{e.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="image_banner">
                <img src="/center.svg" alt="center" className='gradient_bg'/>
                <img src="/whoweare.png" alt="who" />
            </div>
            <div className="text_banner">
                {
                    data[0].who_we_are.slice(2).map(e => {
                        return(
                            <div className='card' key={e.id}>
                                <h1 style={{fontWeight: "300"}}>{e.number}</h1>
                                <p>{e.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default WhoAreWe