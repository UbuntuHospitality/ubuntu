import { FC, ReactNode } from 'react';
import Select from 'react-select';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router';
import 'react-multi-carousel/lib/styles.css';

import CardImage from '../assets/Courses-Placeholder.jpg';
import { courses as options } from './BookCourse';
import { courses } from './Home';
import { Card6, Card7 } from '../components/Cards';
import {
    ButtonPinkFilled,
    ButtonWhiteFilled,
    ButtonFilled,
    ButtonOutlined,
} from '../components/Buttons';
import PaginatedCourses from '../components/CoursesPagination';

const Courses: FC = () => {
    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1921 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 1920, min: 1600 },
            items: 5,
        },
        desktopMedium: {
            breakpoint: { max: 1600, min: 1400 },
            items: 4,
        },
        desktopSmall: {
            breakpoint: { max: 1400, min: 1024 },
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

    // sample courses
    const items: ReactNode[] = [
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
        <Card6 button={<ButtonPinkFilled text={'View'} />} image={CardImage} />,
    ];
    // sample courses

    interface Filter {
        name: string;
    }

    const categoryFilters: Filter[] = [
        { name: 'Business' },
        { name: 'Club Management' },
        { name: 'Conference & Events' },
        { name: 'Food & Beverage' },
        { name: 'Hospitality Management' },
        { name: 'Human Resources' },
        { name: 'Spa Management' },
    ];

    const durationFilters: Filter[] = [
        { name: '0-6 Months' },
        { name: '1-2 Years' },
        { name: '3+ Years' },
    ];

    return (
        <main>
            {/* section courses carousel */}
            <section
                className='position-relative section-top'
                style={{ zIndex: 2 }}
            >
                <div className='py-5 bg-gray-2 rounded-bottom-6'>
                    <div className='px-sm-5 py-md-5 pt-4'>
                        {/* courses carousel */}
                        <Carousel responsive={responsive}>
                            {/* Courses offered cards */}
                            {courses.map((course) => (
                                <div className='col mx-3'>
                                    <Card7
                                        title={course.title}
                                        numberOfCourses={course.number}
                                        image={course.image}
                                        carousel={true}
                                    />
                                </div>
                            ))}
                            {/* Courses offered cards */}
                        </Carousel>
                        {/* courses carousel */}
                    </div>
                </div>
            </section>
            {/* section courses carousel */}
            {/* section courses list */}
            <section className='position-relative section-top-2'>
                <div className='py-xxl-5 pt-5 bg-pink'>
                    <div className='py-5'>
                        <div className='d-lg-flex container'>
                            <div className='pe-lg-5'>
                                <div className='p-5 bg-white rounded-5'>
                                    <p className='text-red fw-bold'>
                                        Choose Course Category
                                    </p>
                                    <div className=''>
                                        <form
                                            action=''
                                            method='post'
                                            onSubmit={(e) => e.preventDefault()}
                                            className='d-md-flex justify-content-between align-items-center'
                                        >
                                            {/* select course input */}
                                            <Select
                                                options={options}
                                                className='col-md-7 me-md-4 mb-3 mb-md-0 '
                                                // classNamePrefix='text-gray bg-gray-2 '
                                                placeholder='All Courses'
                                            />
                                            {/* select course input */}
                                            {/* search course */}
                                            <div className='col-md-4 bg-gray-2 ps-3 py-2 rounded-4 d-flex justify-content-between'>
                                                {/* search course input */}
                                                <input
                                                    className='text-gray fw-bold ps-3 bg-gray-2 w-75'
                                                    type='search'
                                                    name='search'
                                                    id='search'
                                                    placeholder='Search Here'
                                                />
                                                {/* search course input */}
                                                {/* search course button */}
                                                <button
                                                    type='submit'
                                                    className='border-0 bg-gray-2 pe-3'
                                                >
                                                    <i className='bi bi-search text-gray'></i>
                                                </button>
                                                {/* search course button */}
                                            </div>
                                            {/* search course */}
                                        </form>
                                    </div>
                                </div>
                                {/* courses pagination */}
                                <div className='py-5'>
                                    <div>
                                        <PaginatedCourses
                                            coursesPerPage={6}
                                            courses={items}
                                        />
                                    </div>
                                </div>
                                {/* courses pagination */}
                            </div>
                            <div
                                className='rounded-5 bg-white p-md-5 px-3 py-5 mt-5 mt-lg-0 h-50'
                                // style={{ right: '5rem' }}
                            >
                                <div className='border-red-bottom'>
                                    {/* filters heading */}
                                    <p className='pb-3 h1 display-5 fw-bold text-red'>
                                        Filters
                                    </p>
                                    {/* filters heading */}
                                </div>
                                <div>
                                    <form
                                        onSubmit={(e) => e.preventDefault()}
                                        method='post'
                                    >
                                        <div className=''>
                                            <p className='h2 fw-bold py-3'>
                                                Category
                                            </p>
                                            {categoryFilters.map((filter) => (
                                                <div className='border-light-red-bottom py-3 d-flex align-items-center'>
                                                    <input
                                                        className='me-3'
                                                        type='checkbox'
                                                    />
                                                    <label className='text-gray'>
                                                        {filter.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className=''>
                                            <p className='h2 fw-bold py-3'>
                                                Duration
                                            </p>
                                            {durationFilters.map((filter) => (
                                                <div className='border-light-red-bottom py-3 d-flex align-items-center'>
                                                    <input
                                                        className='me-3'
                                                        type='checkbox'
                                                    />
                                                    <label className='text-gray'>
                                                        {filter.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='pt-5 d-flex justify-content-between'>
                                            {/* apply filter button */}
                                            <ButtonFilled
                                                text={'Clear'}
                                                className={'h6 me-md-3'}
                                            />
                                            {/* apply filters button */}
                                            {/* clear filters button */}
                                            <ButtonOutlined
                                                text={'Apply'}
                                                className={'fw-bold h6'}
                                            />
                                            {/* clear filters button */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section courses list */}
            {/* section request a meeting */}
            <section className='position-relative section-top-2 bg-image-courses rounded-bottom-6'>
                <div className='py-5 container-sm'>
                    <div className='py-xxl-5 px-3 px-lg-0 d-lg-flex justify-content-between align-items-center text-white'>
                        <div className='py-5 col-lg-6'>
                            {/* section heading */}
                            <p className='h1 display-6 fw-bold'>
                                Ready to Get Started?
                            </p>
                            {/* section heading */}
                            {/* section details */}
                            <p className='h1 display-5 fw-bold'>
                                Get in Touch & we will have you set up
                                immediately
                            </p>
                            {/* section details */}
                        </div>
                        <div className=''>
                            {/* let's talk button */}
                            <ButtonWhiteFilled
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

export default Courses;
