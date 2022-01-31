import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Image from '../assets/course-placeholder.png';
import { ButtonFilled, ButtonOutlined } from '../components/Buttons';

interface Course {
    image?: string;
    category?: string;
    title?: string;
    description?: string;
    curriculum?: string;
    certification?: string;
    certificationType?: string;
    price?: string;
    duration?: string;
    lectures?: number;
    durationHours?: string;
}

const Course: FC<Course> = ({
    image = Image,
    category = 'Business',
    title = 'How to Start & Market a Food Business from Your Home Kitchen',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus.',
    curriculum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus.',
    certification = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo exercitationem non, nisi saepe atque. Magnam, vitae deserunt fugit nulla veniam cupiditate placeat nesciunt excepturi corrupti voluptatem inventore molestiae repellendus.',
    price = '$420.38',
    duration = '6 Months',
    lectures = 20,
    durationHours = '2h 30min',
    certificationType,
}) => {
    const navigate = useNavigate();
    return (
        <main>
            {/* section course information */}
            <section className='position-relative section-top'>
                <div className='bg-gray-2 py-5'>
                    <div className='py-5 container'>
                        <div className='d-lg-flex justify-content-between'>
                            <div className='rounded-5 bg-white col-lg-8 me-lg-5'>
                                {/* course image */}
                                <div className=''>
                                    <img
                                        src={image}
                                        alt='course image'
                                        className='img-fluid rounded-5'
                                    />
                                </div>
                                {/* course image */}
                                <div className='text-center p-5'>
                                    <div className='px-xxl-5'>
                                        {/* course category */}
                                        <p className='h1 text-red fw-bold'>
                                            {category}
                                        </p>
                                        {/* course category */}
                                        {/* course name */}
                                        <p className='h1 display-3 fw-bold'>
                                            {title}
                                        </p>
                                        {/* course name */}
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-5 bg-white col-lg-4 p-md-5 px-3 py-5 mt-5 mt-lg-0'>
                                <div className='text-center border-bottom'>
                                    {/* course price */}
                                    <p className='pb-5 h1 display-3 fw-bold'>
                                        {price}
                                    </p>
                                    {/* course price */}
                                </div>
                                <div className='border-bottom'>
                                    <div className='py-5 d-flex justify-content-between'>
                                        {/* course duration */}
                                        <div className='text-red h3'>
                                            <i className='bi bi-clock'></i>
                                            <span className='ps-3 fw-bold'>
                                                Duration
                                            </span>
                                        </div>
                                        <div className='h3'>
                                            <span className='text-gray'>
                                                {duration}
                                            </span>
                                        </div>
                                        {/* course duration */}
                                    </div>
                                </div>
                                <div className='border-bottom'>
                                    <div className='py-5 d-flex justify-content-between'>
                                        {/* course duration in hrs */}
                                        <div className='text-red h3'>
                                            <i className='bi bi-clock'></i>
                                            <span className='ps-3 fw-bold'>
                                                Duration
                                            </span>
                                        </div>
                                        <div className='h3'>
                                            <span className='text-gray'>
                                                {durationHours}
                                            </span>
                                        </div>
                                        {/* course duration in hrs */}
                                    </div>
                                </div>
                                <div className='border-bottom'>
                                    <div className='py-5 d-flex justify-content-between'>
                                        {/* number of lectures */}
                                        <div className='text-red h3'>
                                            <i className='bi bi-clock'></i>
                                            <span className='ps-3 fw-bold'>
                                                Lectures
                                            </span>
                                        </div>
                                        <div className='h3'>
                                            <span className='text-gray'>
                                                {lectures}
                                            </span>
                                        </div>
                                        {/* number of lectures */}
                                    </div>
                                </div>
                                <div className='border-bottom'>
                                    <div className='py-5 d-flex justify-content-between'>
                                        {/* certification type */}
                                        <div className='text-red h3'>
                                            <i className='bi bi-clock'></i>
                                            <span className='ps-3 fw-bold'>
                                                Certification
                                            </span>
                                        </div>
                                        <div className='h3'>
                                            <span className='text-gray'>
                                                {certificationType}
                                            </span>
                                        </div>
                                        {/* certification type */}
                                    </div>
                                </div>
                                <div className='pt-5 d-flex justify-content-between flex-column flex-sm-row'>
                                    {/* add course to whitelist button */}
                                    <ButtonOutlined
                                        text={'Add to Whitelist'}
                                        className={'h6'}
                                    />
                                    {/* add course to whitelist button */}
                                    {/* add course to cart button */}
                                    <ButtonOutlined
                                        text={'+'}
                                        icon={<i className='bi bi-cart4'></i>}
                                        className={'fw-bold h6'}
                                    />
                                    {/* add course to cart button */}
                                </div>
                                <div className='pt-3 d-flex'>
                                    {/* enroll in course button */}
                                    <ButtonFilled
                                        text={'Enroll Now'}
                                        className='flex-fill fw-bold h3'
                                    />
                                    {/* enroll in course button */}
                                </div>
                            </div>
                        </div>
                        <div className='py-5 px-3 px-lg-0 d-lg-flex'>
                            <div className='col-lg-8'>
                                <div className='pt-5'>
                                    <div className='h1 fw-bold pb-3'>
                                        Description:
                                    </div>
                                    {/* course description */}
                                    <div className='text-gray'>
                                        <div className=''>{description}</div>
                                    </div>
                                    {/* course description */}
                                </div>
                                <div className='pt-5'>
                                    <div className='h1 fw-bold py-3'>
                                        Curriculum:
                                    </div>
                                    {/* course curriculum description */}
                                    <div className='text-gray'>
                                        <div className=''>{curriculum}</div>
                                    </div>
                                    {/* course curriculum description */}
                                </div>
                                <div className='py-5'>
                                    <div className='h1 fw-bold py-3'>
                                        Certification:
                                    </div>
                                    {/* course certification description */}
                                    <div className='text-gray'>
                                        <div className=''>{certification}</div>
                                    </div>
                                    {/* course certification description */}
                                </div>
                                <div className='rounded-5 bg-white py-5 px-md-5 px-3'>
                                    <div className='d-sm-flex justify-content-between align-items-center'>
                                        <div className='h1 fw-bold text-center text-sm-start pb-3 pb-sm-0'>
                                            Share Course:
                                        </div>
                                        {/* social share links */}
                                        <div className='text-red text-center text-sm-start h1'>
                                            {/* facebook link */}
                                            <a
                                                href='https://facebook.com'
                                                className='text-decoration-none text-reset border-red p-1 rounded-4 '
                                            >
                                                <i className='bi bi-facebook px-2'></i>
                                            </a>
                                            {/* facebook link */}
                                            {/* instagram link */}
                                            <a
                                                href='https://instagram.com'
                                                className='text-decoration-none text-reset border-red p-1 rounded-4 mx-3'
                                            >
                                                <i className='bi bi-instagram px-2'></i>
                                            </a>
                                            {/* instagram link */}
                                            {/* twitter link */}
                                            <a
                                                href='https://twitter.com'
                                                className='text-decoration-none text-reset border-red p-1 rounded-4'
                                            >
                                                <i className='bi bi-twitter ps-2'></i>
                                            </a>
                                            {/* twitter link */}
                                        </div>
                                        {/* social share links */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section course information */}
            {/* section request a meeting */}
            <section className='position-relative section-top bg-image-course'>
                <div className='py-5 container-sm'>
                    <div className='py-5 px-3 px-lg-0 d-lg-flex justify-content-between align-items-center'>
                        <div className='py-xxl-5 col-lg-6'>
                            {/* section heading */}
                            <p className='h1 display-6 text-red fw-bold'>
                                Ready to Get Started?
                            </p>
                            {/* section heading */}
                            {/* section details */}
                            <p className='h1 display-5 text-dark fw-bold'>
                                Get in Touch & we will have you set up
                                immediately
                            </p>
                            {/* section details */}
                        </div>
                        <div className=''>
                            {/* let's talk button */}
                            <ButtonFilled
                                text={"Let's Talk"}
                                className={'h3'}
                                onClick={() => navigate('/contact-us')}
                            />
                            {/* let's talk button */}
                        </div>
                    </div>
                </div>
            </section>
            {/* section request a meeting */}
        </main>
    );
};

export default Course;
