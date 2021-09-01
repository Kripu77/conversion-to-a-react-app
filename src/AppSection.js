import react from "react";

let AppSection = ()=>{
    return(
        <div>
           <div className="bg-success text-center">
      <p className="display-4 text-white p-4">Discover the amazing new app</p>
      <p className="text-white">
      Thank you for your visit!!
      </p>
      <div className="row  p-4">
        <div className="col-6 text-right">
          <button className="btn btn-warning btn-lg">Loved it?</button>
        </div>
        <button className="btn btn-warning btn-lg">Nahhh</button>
        <div className="col-6 text-center"></div>
      </div>
    </div>
   
        </div>
    )
}

export default AppSection;