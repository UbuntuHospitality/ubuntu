import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { SearchForm } from '../components/Forms';
import { ButtonFilled, ButtonPinkFilled } from '../components/Buttons';
import { Card1, Card2, Card3 } from '../components/Cards';
// images
import CardImage from '../assets/Courses-Placeholder.jpg';
import CoursesImage from '../assets/hero-patch.svg';
import OfferImage1 from '../assets/Icon-1.svg';
import OfferImage2 from '../assets/Icon-2.svg';
import OfferImage3 from '../assets/Icon-3.svg';
import ExploreImage1 from '../assets/Explore-1.jpg';
import ExploreImage2 from '../assets/Explore-2.jpg';
import ExploreImage3 from '../assets/Explore-3.jpg';
import ExploreImage4 from '../assets/Explore-4.jpg';
import ExploreImage5 from '../assets/Explore-5.jpg';
import ExploreImage6 from '../assets/Explore-6.jpg';
import ExploreImage7 from '../assets/Explore-7.jpg';
import AccreditedCoursesImage1 from '../assets/Get-Started.jpg';
import AccreditedCoursesImage2 from '../assets/get-started-patch.svg';
import { useNavigate } from 'react-router-dom';

export interface course {
    title: string;
    number: number;
    image: string;
}
export interface offer {
    name: string;
    icon: string;
}

const offers: offer[] = [
    { name: 'Top Instructors', icon: OfferImage1 },
    { name: 'Certified Courses', icon: OfferImage2 },
    { name: 'Flexible Curriculum', icon: OfferImage3 },
];

export const courses: Array<course> = [
    {
        title: 'Business',
        number: 22,
        image: ExploreImage1,
    },
    {
        title: 'Club Management',
        number: 22,
        image: ExploreImage2,
    },
    {
        title: 'Conference & Events',
        number: 22,
        image: ExploreImage3,
    },
    {
        title: 'Food & Beverage',
        number: 22,
        image: ExploreImage4,
    },
    {
        title: 'Hospitality Management',
        number: 22,
        image: ExploreImage5,
    },
    {
        title: 'Human Resources',
        number: 22,
        image: ExploreImage6,
    },
    {
        title: 'Spa Management',
        number: 22,
        image: ExploreImage7,
    },
];

const Home: FC = () => {
    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        },
    };

    return (
        <main>
            {/* section introduction */}
            <section className='bg-pink-2 bg-image-home py-5 section-height position-relative section-top'>
                <div className='d-lg-flex py-5'>
                    <div className='col-sm-5'></div>
                    <div className='col-lg-7 py-5 px-3 px-sm-0 d-lg-flex align-items-center'>
                        {/* search courses form */}
                        <SearchForm
                            className={
                                'col-lg-8 col-md-8 col-sm-10 mx-auto mx-lg-0'
                            }
                        />
                        {/* search courses form */}
                        <div className='col-2 image-right d-none d-lg-block'>
                            {/* section get started with courses image */}
                            <img
                                src={CoursesImage}
                                alt='Accredited Courses Image'
                                className='img-fluid'
                            />
                            {/* section get started with courses image */}
                        </div>
                    </div>
                </div>
            </section>
            {/* section introduction */}

            {/* section courses offered */}
            <section className='bg-gray-2 py-5 position-relative section-top'>
                <div className='container-sm pt-5 mt-5'>
                    <div className='cards-position container-lg'>
                        {/* offers cards */}
                        <div className='row row-cols-1 row-cols-lg-3 px-sm-5 px-lg-3 px-xl-5 mx-lg-5'>
                            {offers.map((offer) => (
                                <div className='col'>
                                    <Card1
                                        text={offer.name}
                                        icon={
                                            <img
                                                src={offer.icon}
                                                className='img-fluid'
                                                alt='Card Image'
                                            />
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                        {/* offers cards */}
                    </div>

                    {/* section heading */}
                    <p className='text-dark h1 fw-bold text-center'>
                        Learn Without <span className='text-red'>Limits</span>
                    </p>
                    {/* section heading */}
                    <p className='text-center text-gray pb-3'>
                        Choose from 100+ online video courses with new additions
                        published every month
                    </p>
                    <div className='p-md-5 px-3 py-5 rounded-5 bg-white'>
                        <div className='py-5'>
                            {/* section sub heading */}
                            <p className='h4 fw-bold'>
                                Analyze and Measure Customer Satisfaction
                            </p>
                            {/* section sub heading */}
                            <div className='d-lg-flex justify-content-between align-items-center'>
                                {/* section description */}
                                <p className='col-lg-10 text-gray pe-lg-5'>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl ut
                                    aliquip
                                </p>
                                {/* section description */}
                                {/* explore business button */}
                                <ButtonFilled text={'Explore Business'} />
                                {/* explore business button */}
                            </div>
                            <div className='border my-5'></div>
                            <div className='d-lg-flex'>
                                <div className='col-lg-3 text-gray'>
                                    {/* Courses list */}
                                    <ul className='p-0'>
                                        <li className='pb-3 filter-hover'>
                                            Business
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Club Management
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Conference & Events
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Food & Beverage
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Hospitality Management
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Human Resources
                                        </li>
                                        <li className='py-3 filter-hover'>
                                            Spa Management
                                        </li>
                                    </ul>
                                    {/* Courses list */}
                                </div>
                                <div className='col-lg-9'>
                                    {/* Courses Carousel */}
                                    <Carousel responsive={responsive}>
                                        {/* courses cards */}
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                            bestSeller={true}
                                        />
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                        />
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                        />
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                        />
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                        />
                                        <Card2
                                            button={
                                                <ButtonFilled text={'View'} />
                                            }
                                            image={CardImage}
                                        />
                                        {/* courses cards */}
                                    </Carousel>
                                    {/* Courses Carousel */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section courses offered */}
            {/* section explore ubuntu */}
            <section className='position-relative section-top'>
                <div className='container-sm py-5'>
                    {/* section heading */}
                    <p className='text-dark h1 fw-bold'>
                        Explore <span className='text-red'>Ubuntu</span>
                    </p>
                    {/* section heading */}
                    {/* section paragraph */}
                    <p className='text-gray pb-3'>
                        Choose from 155,000 online video courses with new
                        additions published every month
                    </p>
                    {/* section paragraph */}

                    <div className='container'>
                        <div className='row gy-4 row-cols-1 row-cols-lg-2 row-cols-xxl-3'>
                            {/* Courses offered cards */}
                            {courses.map((course) => (
                                <div className='col'>
                                    <Card3
                                        title={course.title}
                                        numberOfCourses={course.number}
                                        image={course.image}
                                    />
                                </div>
                            ))}
                            {/* Courses offered cards */}
                        </div>
                    </div>
                    {/* explore all course categories button */}
                    <div className='text-md-center pt-4'>
                        <ButtonFilled text={'Explore All Categories'} />
                    </div>
                    {/* explore all course categories button */}
                </div>
            </section>
            {/* section explore ubuntu */}
            {/* section get started with courses */}
            <section className='bg-pink position-relative section-top'>
                <div className='container-sm py-5'>
                    <div className='d-lg-flex align-items-center'>
                        <div className='border border-dark p-3 col-lg-8 bg-white'>
                            <div className='border'>
                                <div className='py-5 px-md-5 px-3 mx-md-5'>
                                    {/* section heading */}
                                    <div className='h1 fw-bold text-center'>
                                        <p>Get Started with Our</p>
                                        <p className='text-red'>
                                            Professional Courses
                                        </p>
                                    </div>
                                    {/* section heading */}
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='border-bottom col-5'></div>
                                        <i className='bi bi-bell px-lg-5 px-3 h3'></i>
                                        <div className='border-bottom col-5'></div>
                                    </div>
                                    {/* section description */}
                                    <p className='text-gray py-5 my-3'>
                                        Ubuntu offers a chance for you to
                                        upskill in the current setting you are
                                        in, as well as re-skill any abilities
                                        that need to be polished and provides
                                        you with the required online programs to
                                        make an educated career change.
                                    </p>
                                    {/* section description */}
                                    <div className='text-center'>
                                        {/* view course list button */}
                                        <ButtonPinkFilled
                                            text={'View Course List'}
                                            onClick={() => navigate('/courses')}
                                        />

                                        <span className='border-0 bg-red rounded-circle btn-left p-1 '>
                                            <i className='bi bi-arrow-right-short text-white fw-bold h5'></i>
                                        </span>
                                        {/* view course list button */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='image-right d-none d-lg-block'>
                            {/* section get started with courses image */}
                            <img
                                src={AccreditedCoursesImage1}
                                alt='Accredited Courses Image'
                                className='img-fluid rounded-5'
                            />
                            {/* section get started with courses image */}
                            <div className='col-5 image-right-2'>
                                {/* section get started with courses image */}
                                <img
                                    src={AccreditedCoursesImage2}
                                    alt='Accredited Courses Image'
                                    className='img-fluid'
                                />
                                {/* section get started with courses image */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section get started with courses */}
        </main>
    );
};

export default Home;
