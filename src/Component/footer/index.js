import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <img src="img/logo.png" />
                <h3>About<span>Eduonix</span></h3>

                <p className="footer-links">
                    <a href="#">Home</a>
                    |
                    <a href="#">Blog</a>
                    |
                    <a href="#">About</a>
                    |
                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">© 2019 Eduonix Learning Solutions Pvt. Ltd.</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>309 - Rupa Solitaire,
                        Bldg. No. A - 1, Sector - 1</span>
                        Mahape, Navi Mumbai - 400710</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 22-27782183</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@eduonix.com">support@eduonix.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer