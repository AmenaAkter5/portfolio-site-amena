import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className='footer-container'>
                    <h2 className='title-logo'>Amena Akter</h2>
                    {/* <div className='d-flex'> */}
                    <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">About</a></p>
                    <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Contact me</a></p>
                    <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Blogs</a></p>
                    {/* </div> */}
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='footer-text pb-2'>Company</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Career</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Privacy Policy</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='footer-text pb-2'>Others</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Blogs</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Crash Course</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/amena-akter/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='footer-text pb-2'>I am on social media</h5>
                    <p className='footer-text'>Contact: <span className='footer-span'>+8801682440404</span> (24X7)</p>
                    <p className='footer-text'>SMS: +8801718340089 (24X7)</p>
                    <p className='footer-text'>Email: <span className='footer-span'>amenaakter1952@gmail.com</span></p>

                    <div className='social-icon-container'>
                        <a href="https://www.linkedin.com/in/amena-akter/"><FaFacebook className='social-icon' /></a>
                        <a href="https://www.linkedin.com/in/amena-akter/"><FaInstagram className='social-icon'></FaInstagram></a>
                        <a href="https://www.linkedin.com/in/amena-akter/"><FaTwitter className='social-icon'></FaTwitter></a>
                        <a href="https://www.linkedin.com/in/amena-akter/"><FaYoutube className='social-icon'></FaYoutube></a>
                    </div>

                </div>

            </div>

            <div className='text-center py-4'>Copyright &copy; 2022 amenaakter.com</div>

        </footer>
    );
};

export default Footer;