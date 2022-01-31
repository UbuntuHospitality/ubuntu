import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { ButtonPinkFilled } from '../components/Buttons';
import { Card4 } from '../components/Cards';
// images
import WhatWeDoImage1 from '../assets/What-we-do.jpg';
import WhatWeDoImage2 from '../assets/what-we-do-patch.svg';
import OfferImage1 from '../assets/Icon-1.svg';
import OfferImage2 from '../assets/Icon-2.svg';
import OfferImage3 from '../assets/Icon-3.svg';
import AboutUbuntuImage from '../assets/Badge.png';

interface reason {
    icon: string;
    heading: string;
    text: string;
}

const reasons: Array<reason> = [
    {
        icon: OfferImage1,
        heading: 'Top Instructors',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic neque ab nemo veritatis alias excepturi sunt tempora nihil eaque magnam voluptatum, beatae atque molestiae, tenetur accusantium velit quasi ducimus.',
    },
    {
        icon: OfferImage2,
        heading: 'Certified Courses',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic neque ab nemo veritatis alias excepturi sunt tempora nihil eaque magnam voluptatum, beatae atque molestiae, tenetur accusantium velit quasi ducimus.',
    },
    {
        icon: OfferImage3,
        heading: 'Flexible Curriculum',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic neque ab nemo veritatis alias excepturi sunt tempora nihil eaque magnam voluptatum, beatae atque molestiae, tenetur accusantium velit quasi ducimus.',
    },
];

const AboutUs: FC = () => {
    const navigate = useNavigate();
    return (
        <main>
            {/* section what we do */}
            <section
                className='bg-gray-2 rounded-bottom-6 position-relative section-top'
                style={{ zIndex: 3 }}
            >
                <div className='container-sm py-5'>
                    <div className='py-5 my-md-5'>
                        <div className='d-md-flex justify-content-between align-items-center px-3 px-md-0'>
                            <div className='d-lg-flex d-none  align-items-center'>
                                <div className='d-none d-lg-block'>
                                    {/* section what we do big image */}
                                    <img
                                        src={WhatWeDoImage1}
                                        alt='What we Do Image'
                                        className='img-fluid rounded-5'
                                    />
                                    {/* section what we do big image */}
                                </div>
                                <div className='col-3 image-right-1'>
                                    {/* section what we do small image */}
                                    <img
                                        src={WhatWeDoImage2}
                                        alt='What we Do Image'
                                        className='img-fluid rounded-5'
                                    />
                                    {/* section what we do small image */}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                {/* small section heading */}
                                <p className='text-red h1 fw-bold'>
                                    What we do
                                </p>
                                {/* small section heading */}
                                {/* big section heading */}
                                <p className='h1 display-5 fw-bold'>
                                    We upgrade your skill for your
                                    <span className='text-red'>
                                        {' '}
                                        bright future
                                    </span>
                                </p>
                                {/* big section heading */}
                                {/* section paragraph */}
                                <p className='text-gray col-10 py-3'>
                                    Ubuntu offers a chance for you to upskill in
                                    the current setting you are in, as well as
                                    re-skill any abilities that need to be
                                    polished and provides you with the required
                                    online programs to make an educated career
                                    change.
                                </p>
                                {/* section paragraph */}
                                <div className='py-3'>
                                    {/* start course button */}
                                    <ButtonPinkFilled
                                        text={'Start a Course'}
                                        className={'h4'}
                                        onClick={() => navigate('/courses')}
                                    />
                                    <span className='border-0 bg-red rounded-circle btn-left p-1 '>
                                        <i className='bi bi-arrow-right-short text-white fw-bold h5'></i>
                                    </span>
                                    {/* start course button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section what we do */}
            {/* section why choose Us */}
            <section
                className='bg-image-about-us rounded-bottom-6 position-relative section-top-2'
                style={{ zIndex: 2 }}
            >
                <div className='py-5 container-sm'>
                    <div className='pb-5'>
                        {/* section heading */}
                        <div className='py-5 my-5'>
                            <p className='h1 display-5 fw-bold text-center text-white'>
                                Why Choose Us
                            </p>
                        </div>
                        {/* section heading */}
                        {/* section cards */}
                        <div className='row row-cols-1 row-cols-lg-3 g-lg-5 g-3 text-center'>
                            {reasons.map((reason) => (
                                <div className='col'>
                                    <Card4
                                        heading={reason.heading}
                                        icon={
                                            <img
                                                src={reason.icon}
                                                className='img-fluid'
                                                alt='Card Image'
                                            />
                                        }
                                        text={reason.text}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* section cards */}
                    </div>
                </div>
            </section>
            {/* section why choose Us */}
            {/* section about ubuntu */}
            <section
                className='position-relative section-top-3 bg-pink rounded-bottom-6'
                style={{ zIndex: 1 }}
            >
                <div className='py-5 px-5 px-md-0 container-sm text-center'>
                    {/* section heading */}
                    <div className='py-lg-5 pt-5'>
                        <p className='h1 display-5 fw-bold text-dark'>
                            About Ubuntu?
                        </p>
                    </div>
                    {/* section heading */}
                    {/* section image */}
                    <div className='col-lg-4 col-6 mx-auto'>
                        <img
                            src={AboutUbuntuImage}
                            alt='Certificate Image'
                            className='img-fluid'
                        />
                    </div>
                    {/* section image */}
                    {/* section paragraph */}
                    <div className='py-5 px-lg-5'>
                        <p className='text-gray px-lg-5'>
                            Our company seeks to deliver high class hospitality
                            training right to your doorstep. With Ubuntu we will
                            guide you through the application process and help
                            connect you to the right course for you. Choose from
                            the wide variety of classes, from bartending to
                            hotel management, and with the click of a button
                            bring hospitality to your home.
                        </p>
                    </div>
                    {/* section paragraph */}
                    {/* section sub heading */}
                    <div>
                        <p className='h1 fw-bold'>View Accreditation</p>
                    </div>
                    {/* section sub heading */}
                    <div className='py-5'>
                        {/* more about us button */}
                        <ButtonPinkFilled
                            text={'Get in Touch'}
                            className={'h4'}
                            onClick={() => navigate('/contact-us')}
                        />
                        {/* more about us button */}
                    </div>
                </div>
            </section>
            {/* section about ubuntu */}
        </main>
    );
};

export default AboutUs;
