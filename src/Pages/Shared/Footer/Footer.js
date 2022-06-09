import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className='footer-container'>
                    <h2 className='title-logo'>Magic Manik</h2>
                    {/* <div className='d-flex'> */}
                    <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">About</a></p>
                    <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Contact me</a></p>
                    <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Manik Blogs</a></p>
                    {/* </div> */}
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='footer-text pb-2'>Company</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Career</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Privacy Policy</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='footer-text pb-2'>Others</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Blogs</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Crash Course</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='footer-text pb-2'>I am on social media</h5>
                    <p className='footer-text'>Contact: <span className='footer-span'>+8801682440404</span> (24X7)</p>
                    <p className='footer-text'>SMS: +8801682440404 (24X7)</p>
                    <p className='footer-text'>Email: <span className='footer-span'>support@magicmanik.com</span></p>

                    <div className='social-icon-container'>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaFacebook className='social-icon' /></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaInstagram className='social-icon'></FaInstagram></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaTwitter className='social-icon'></FaTwitter></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaYoutube className='social-icon'></FaYoutube></a>
                    </div>

                </div>

            </div>

            <div className='text-center py-4'>Copyright &copy; 2022 magicmanik.com</div>

        </footer>
    );
};

export default Footer;