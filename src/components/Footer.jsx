import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>FARHAN</span>CODES</h3>
                            <p>Thanks for visiting my project ,if you want to know more about it's wroking and code then i will recommend you to click on youtube icon given below</p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com/profile.php?id=100028314135553"><i class="fa-brands fa-facebook"></i></a>
                               <a href="https://x.com/farhanmmb2004"><i class="fa-brands fa-twitter"></i></a> 
                               <a href="https://github.com/farhanmmb2004/Movie-search-app"><i class="fa-brands fa-github"></i></a>
                                <i class="fa-brands fa-youtube"></i>
                                <a href="https://www.linkedin.com/in/mohd-farhan-khan-7840a7247/"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>More Projects</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="https://farhanmmb2004.github.io/Spotfy-clon/">Spotify Clone</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="https://farhanmmb2004.github.io/Simon-s-game/">simons game</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="https://main--weather-app1-mfkhan.netlify.app/">weather App</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="https://farhanmmb2004.github.io/portfolio/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 7376784844</p>
                            <p><i class="fa-solid fa-envelope"></i> farhankhanmmb2004@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Lucknow,India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>created By Farhan Khan</p>
            </div>
        </>
    )
}

export default Footer