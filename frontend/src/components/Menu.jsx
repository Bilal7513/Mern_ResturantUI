import React from 'react'
import {data} from "../restApi.json"

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti placeat reprehenderit accusamus, necessitatibus fugiat iure quis quos consequuntur minima!
                </p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map((e) => {
                    return(
                        <div className="card" key={e.id}>
                            <img src={e.image} alt={e.title} />
                            <h3>{e.title}</h3>
                            <button>{e.category}</button>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Menu