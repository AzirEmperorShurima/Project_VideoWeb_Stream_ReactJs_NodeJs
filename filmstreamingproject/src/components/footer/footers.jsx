import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styles
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
const Footer = ({darkLight}) => {
    return (
        <footer className={`new_footer_area bg_color ${darkLight ? 'dark-mode' : 'light-mode' }`}>
            <div className="new_footer_top">
                <div className="footer-container">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}   >
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget company_widget wow fadeInLeft"
                                data-wow-delay="0.2s"
                                style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                    <button className="btn btn_get btn_get_two" type="button">
                                        Subscribe
                                    </button>
                                    <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                                    <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" >
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.4s"
                                style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.6s"
                                style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget social-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.8s"
                                style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" >
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="fab fa-twitter">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="fab fa-linkedin">
                                        <FaLinkedin />
                                    </a>
                                    <a href="#" className="fab fa-pinterest">
                                        <FaPinterest />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer-bottom-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© CodeLord Inc.. 2024 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>
                                Made with <i className="icon_heart"></i> in <a href="http://vlxx.mobi" target="_blank" rel="noopener noreferrer">CodeLord</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
