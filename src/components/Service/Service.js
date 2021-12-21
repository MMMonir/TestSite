import React from 'react';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';
const Service = () => {
    return (
<>
   <section id="service">
       <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-md-18 text-center">
               <h1>Our Services</h1>
                    <div class="divider"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias necessitatibus a repellat tenetur
                        eaque aperiam voluptas eligendi ratione voluptates totam? Minus tenetur nostrum mollitia rem.
                    </p>
               </div>
           </div>
           <div className="row">
               <div className="col-md-8 col-sm-6">
                   <div className="service">
                       <div className="service-img">
                            <img src={service1} alt=""/>
                            <div class="icon">
                                <i class='bx bxl-html5'></i>
                            </div>
                       </div>
                       <h5 className="mt-5 pb-1">Service Name</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                   </div>
               </div>
               <div className="col-md-8 col-sm-6">
                   <div className="service">
                       <div className="service-img">
                            <img src={service2} alt=""/>
                            <div class="icon">
                                <i class='bx bxl-html5'></i>
                            </div>
                       </div>
                       <h5 className="mt-5 pb-1">Service Name</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                   </div>
               </div>
               <div className="col-md-8 col-sm-6">
                   <div className="service">
                       <div className="service-img">
                            <img src={service3} alt=""/>
                            <div class="icon">
                                <i class='bx bxl-html5'></i>
                            </div>
                       </div>
                       <h5 className="mt-5 pb-1">Service Name</h5>
                       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                   </div>
               </div>
           </div>
       </div>
    </section> 
</>
    );
};

export default Service;