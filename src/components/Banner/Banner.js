import React from 'react';

const Banner = () => {
    return (
        <section className='vh-100 d-flex align-items-center' id='home'>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-14 mx-auto">
                        <h1 className='display-4 text-white'>Build robust landing pages now</h1>
                        <p className='text-white'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known</p>
                        <button className='btn btn-primary me-2'>Get Started</button>
                        <button className='btn btn-outline-light'>My Portfolio</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;