import React from "react";
import Card from "./card"
let Stay = ()=>{
    return (
      <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row" >
          <div className="col-4">
           <Card buttonText="The underdog"/>
          </div>
          <div className="col-4">
            <Card title="Next.js" buttonText="The leader" para="The leader of JS industry" img="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div className="col-4">
            <Card title="Redux.js" buttonText="The best" para="The best in class with react" img="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Stay;