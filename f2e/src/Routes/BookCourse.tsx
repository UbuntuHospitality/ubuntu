import { FC, useState } from 'react';
import Select from 'react-select';
import ReactFlagsSelect from 'react-flags-select';

import { ButtonFilled } from '../components/Buttons';

interface course {
    value: string;
    label: string;
}

export const courses: course[] = [
    { value: 'course 1', label: 'Course 1' },
    { value: 'course 2', label: 'Course 2' },
    { value: 'course 3', label: 'Course 3' },
];

const BookCourse: FC = () => {
    const [selected, setSelected] = useState('');
    return (
        <main>
            {/* section book course */}
            <section className='position-relative section-top bg-image-book-course'>
                <div className='container-sm py-5'>
                    <div className='py-5'>
                        <div className='d-lg-flex justify-content-end'>
                            <div className='col-lg-7'>
                                <div className='rounded-5 py-xxl-5 px-xxl-5 px-3 bg-white'>
                                    <div className='py-5 px-3 px-lg-5'>
                                        {/* section heading */}
                                        <p className='pb-5 h1 display-5 fw-bold text-center'>
                                            Book a Course{' '}
                                            <span className='text-red'>
                                                Today
                                            </span>
                                        </p>
                                        {/* section heading */}
                                        <form
                                            onSubmit={(e) => e.preventDefault()}
                                            method='post'
                                        >
                                            <div className='d-lg-flex justify-content-between'>
                                                <div className='mb-5 me-lg-3'>
                                                    {/* contact first name input */}
                                                    <input
                                                        type='text'
                                                        className='form-control bg-gray-2 '
                                                        placeholder='First Name'
                                                    />
                                                    {/* contact first name input */}
                                                </div>
                                                <div className='mb-5 ms-lg-3'>
                                                    {/* contact second name input */}
                                                    <input
                                                        type='text'
                                                        className='form-control bg-gray-2'
                                                        placeholder='Second Name'
                                                    />
                                                    {/* contact second name input */}
                                                </div>
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    htmlFor='email'
                                                    className='form-label text-gray'
                                                >
                                                    Email/Phone
                                                </label>
                                                {/* contact email/ phone input */}
                                                <input
                                                    type='text'
                                                    className='form-control bg-gray-2 '
                                                    id='email'
                                                />
                                                {/* contact email/ phone input */}
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    htmlFor='course'
                                                    className='form-label text-gray'
                                                >
                                                    Im Interested in:
                                                </label>
                                                <Select
                                                    options={courses}
                                                    className='bg-gray-2  '
                                                    classNamePrefix='text-gray bg-gray-2 '
                                                    placeholder='Select Course Here'
                                                />
                                                {/* select course input */}
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    htmlFor='country'
                                                    className='form-label text-gray'
                                                >
                                                    Country of Residence
                                                </label>
                                                {/* select country input */}
                                                <ReactFlagsSelect
                                                    className='bg-gray-2 text-gray'
                                                    selected={selected}
                                                    onSelect={(code) =>
                                                        setSelected(code)
                                                    }
                                                    placeholder='Select Country'
                                                    searchable
                                                />
                                                {/* select county input */}
                                            </div>
                                            <div className='d-flex'>
                                                {/* send message form button */}
                                                <ButtonFilled
                                                    text={
                                                        'Yes Please, Contact Me'
                                                    }
                                                    className={
                                                        'h5 flex-fill text-wrap'
                                                    }
                                                />
                                                {/* send message form button */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section book course */}
        </main>
    );
};

export default BookCourse;
