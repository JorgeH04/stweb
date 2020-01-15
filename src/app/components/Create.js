import React, { Component } from 'react'
//import axios from 'axios'

export default class Create extends Component {

  
    

    render() {
        return (
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
             </ol>
         <div className="carousel-inner">
           <div className="carousel-item active">
            <img className="d-block w-100" src="img/im1.jpg" alt="First slide"/>
      
      <div className="carousel-caption d-none d-md-block">
         <h1>Explore the new template.</h1><br/>
         <btn className="btn btn-lg btn-danger">KNOW MORE</btn>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/im2.jpg" alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
         <h1>Creative. Innovative.Intuitive.</h1><br/>
         <btn className="btn btn-lg btn-danger">KNOW MORE</btn>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/im2.jpg" alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
         <h1>A new experience.</h1><br/>
         <btn className="btn btn-lg btn-danger">KNOW MORE</btn>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   

        )
    }
}