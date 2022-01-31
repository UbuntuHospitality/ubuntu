import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Header-Logo.svg';

const Header: FC = () => {
    // Header
    return (
        <header className='fw-bold'>
            {/* header top */}
            <div className='d-sm-flex justify-content-between align-items-center py-3 rounded-bottom-6 bg-red text-white px-md-5 px-2'>
                <div className='d-flex justify-content-center justify-content-sm-start'>
                    {/* <span>Accreditation</span> */}
                    {/* <div className='px-1'>|</div> */}
                    {/* header contact us links */}
                    <NavLink
                        to='contact-us'
                        className='text-decoration-none text-decoration-underline text-reset'
                    >
                        Contact Us
                    </NavLink>
                    {/* header contact us links */}
                </div>
                <a
                    className='text-decoration-none text-white d-flex  justify-content-center justify-content-sm-start btn fw-bold'
                    onClick={() =>
                        window.location.replace('/contact-us/#brochure')
                    }
                >
                    Request a Brochure
                </a>
                <div className='d-flex  justify-content-center justify-content-sm-start'>
                    <span>Find us on Social Media</span>
                    {/* header social links */}
                    <div className=''>
                        <a
                            href='https://facebook.com'
                            className='text-decoration-none text-reset'
                        >
                            <i className='bi bi-facebook px-2'></i>
                        </a>

                        <a
                            href='https://instagram.com'
                            className='text-decoration-none text-reset'
                        >
                            <i className='bi bi-instagram px-2'></i>
                        </a>
                        <a
                            href='https://twitter.com'
                            className='text-decoration-none text-reset'
                        >
                            <i className='bi bi-twitter ps-2'></i>
                        </a>
                    </div>
                    {/* header social links */}
                </div>
            </div>
            {/* header top */}
            {/* header bottom */}
            <div
                className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 rounded-bottom-6 px-md-5 bg-white position-relative'
                style={{ zIndex: 4 }}
            >
                {/* Logo */}
                <div className='d-flex align-items-center col-12 col-md-3 mb-2 mb-md-0'>
                    <div className='col-xxl-6 col-md-10 col-8 mx-auto mx-md-0'>
                        <NavLink to='/'>
                            {' '}
                            <img src={Logo} alt='Logo' className='img-fluid' />
                        </NavLink>
                    </div>
                </div>
                {/* Logo */}
                <div className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
                    {/* Home link */}
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-red text-decoration-none h3 fw-bold'
                                : 'text-decoration-none text-reset h3 fw-bold'
                        }
                        // className='text-decoration-none text-reset h3 fw-bold'
                    >
                        Home
                    </NavLink>
                    {/* Home link */}
                    {/* About Us link */}
                    <NavLink
                        to='/about-us'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-red text-decoration-none h3 fw-bold px-md-5 px-3'
                                : 'text-decoration-none text-reset h3 fw-bold px-md-5 px-3'
                        }
                    >
                        About Us
                    </NavLink>
                    {/* About Us link */}
                    {/* Courses link */}
                    <NavLink
                        to='/courses'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-red text-decoration-none h3 fw-bold'
                                : 'text-decoration-none text-reset h3 fw-bold'
                        }
                    >
                        Courses
                    </NavLink>
                    {/* Courses link */}
                </div>
                <div className='col-md-3 text-end text-gray'>
                    {/* header Account links */}
                    <div className='d-inline pe-3'>
                        <i className='bi bi-person pe-3'></i>
                        <div className='dropdown d-inline'>
                            <a
                                className='text-decoration-none text-reset dropdown-toggle'
                                href='#'
                                role='button'
                                id='dropdownMenuNavLink'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Account
                            </a>

                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuNavLink'
                            >
                                <li>
                                    <NavLink
                                        className='dropdown-item'
                                        to='sign-up'
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdown-item'
                                        to='course'
                                    >
                                        Course
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdown-item'
                                        to='book-course'
                                    >
                                        Book Course
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdown-item'
                                        to='sign-in'
                                    >
                                        Log In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className='dropdown-item'
                                        to='thank-you'
                                    >
                                        Thank You
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* header Account links */}
                    {/* header cart link */}
                    <div className='d-inline'>
                        <i className='bi bi-cart4 pe-3'></i>
                        <NavLink
                            to='/cart'
                            className='text-decoration-none text-reset'
                        >
                            Cart
                        </NavLink>
                    </div>
                    {/* header cart link */}
                </div>
            </div>
            {/* header bottom */}
        </header>
    );
};

export default Header;
