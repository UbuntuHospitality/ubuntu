import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../assets/Footer-Logo.svg';

import { ButtonFilled } from './Buttons';

const Footer: FC = () => {
    const navigate = useNavigate();
    return (
        <footer id='footer'>
            <div className='container-sm'>
                {/* footer top */}
                <div className='d-lg-flex justify-content-between py-5'>
                    <div className='col-lg-2 col-md-6'>
                        <div className='col-6 col-lg-10'>
                            {/* Footer Logo */}
                            <img
                                src={Logo}
                                alt='Footer Logo'
                                className='img-fluid'
                            />
                            {/* Footer Logo */}
                        </div>
                    </div>
                    {/* footer description */}
                    <p className='col-md-8 text-gray mx-lg- text-lg-center align-self-end px-lg-5 py-3 py-lg-0'>
                        Ubuntu offers a chance for you to upskill in the current
                        setting you are in, as well as re-skill any abilities
                        that need to be polished and provides you with the
                        required online programs to make an educated career
                        change.
                    </p>
                    {/* footer description */}
                    <div className='align-self-center'>
                        {/* more about us button */}
                        <ButtonFilled
                            text={'More About Us'}
                            onClick={() => navigate('/about-us')}
                        />
                        {/* more about us button */}
                    </div>
                </div>
                {/* footer top */}
                <div className='border'></div>
                {/* footer middle */}
                <div className='d-lg-flex justify-content-between text-gray mt-4 mb-5 pt-4 pb-5'>
                    <div>
                        <div className='text-dark fw-bold h5'>Quick Links</div>
                        <div className='d-sm-flex col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
                            {/* Home link */}
                            <Link
                                to='/'
                                className='text-decoration-none text-reset'
                            >
                                Home
                            </Link>
                            {/* Home link */}
                            {/* About Us link */}
                            <Link
                                to='/about-us'
                                className='text-decoration-none text-reset px-md-5 px-3'
                            >
                                About Us
                            </Link>
                            {/* About Us link */}
                            {/* Courses link */}
                            <Link
                                to='/courses'
                                className='text-decoration-none text-reset'
                            >
                                Our Courses
                            </Link>
                            {/* Courses link */}
                        </div>
                    </div>
                    <div>
                        <div className='text-dark fw-bold h5'>Contact Us</div>
                        <div>
                            {/* contact number */}
                            <a
                                href='tel:+254742355400'
                                className='text-decoration-none text-reset pe-5'
                            >
                                Phone: +254 742 355 400
                            </a>
                            {/* contact number */}
                            {/* contact email */}
                            <a
                                href='mailto:info@ubuntu-hospitality.com'
                                className='text-decoration-none text-reset d-block d-md-inline'
                            >
                                E-mail: info@ubuntu-hospitality.com
                            </a>
                            {/* contact email */}
                        </div>
                        <div>
                            {/* operating locations */}
                            <span className='fw-bold'>
                                Available in: Kenya, Zimbabwe, Tanzania
                            </span>
                            {/* operating locations */}
                        </div>
                    </div>
                    <div>
                        <div className='h3 fw-bold text-red'>Subscribe</div>
                        <div className='h3 fw-bold text-dark to our Newsletter'>
                            to our Newsletter
                        </div>
                        {/* newsletter form */}
                        <form
                            className='pt-3'
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            method='post'
                        >
                            {/* news letter email input */}
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Your E-mail here'
                                className='rounded-pill bg-pink border-0 py-2 ps-4 fw-bold'
                            />
                            {/* news letter email input */}
                            {/* news letter form submit button */}
                            <button className='border-0 bg-red rounded-circle btn-left'>
                                <i className='bi bi-arrow-right-short text-white fw-bold h5'></i>
                            </button>
                            {/* news letter form submit button */}
                        </form>
                        {/* newsletter form */}
                    </div>
                </div>
                {/* footer middle */}
            </div>
            {/* footer bottom */}
            <div className='bg-black d-flex justify-content-between text-white px-md-5 px-3 py-3'>
                {/* Business com Link */}
                <div>
                    Powered By{' '}
                    <a
                        href='https://businesscom.africa/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-decoration-none text-reset'
                    >
                        BusinessCom Consulting
                    </a>
                </div>
                {/* Business com Link */}
                {/* Ubuntu Copy right */}
                <div className='text-end text-sm-start'>
                    &copy;2021 Ubuntu Hospitality. All Rights Reserved
                </div>
                {/* Ubuntu Copy right */}
            </div>
            {/* footer bottom */}
        </footer>
    );
};

export default Footer;
