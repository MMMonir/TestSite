import React from 'react';

const Banner = () => {
    return (
        <section id="home">
        <div class="overlay vh-100 d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-20 mx-auto text-center text-white">
                        <h1 class="my-3" data-aos="zoom-in">We Will Build Responsive Website<br /> for you and your company</h1>
                        <p class="text-white" data-aos="fade-up">We Will Build Responsive Website By HTML, Css, Bootstrap, Javascript, React, Mongobd, Nodejs, <br />Firebase authentication, emailjs contact form, mailchimp Subscribe Form and so on.</p>
                        <button class="btn btn-warning" data-aos="fade-up">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;