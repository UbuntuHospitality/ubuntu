import { FC, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useNavigate } from 'react-router-dom';

import Image from '../assets/Create-Account-patch.svg';
import { ButtonFilled, ButtonOutlined } from '../components/Buttons';

const CreateAccount: FC = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('');
    return (
        <main>
            {/* section create account */}
            <section className='position-relative section-top bg-image-create-account'>
                <div className='container-sm py-5'>
                    <div className='py-5'>
                        <div className='d-lg-flex justify-content-end'>
                            <div className='col-lg-7'>
                                <div className='rounded-5 py-5 px-xxl-5 px-3 bg-white'>
                                    <div className='px-3 px-lg-5'>
                                        {/* section heading */}
                                        <p className='pb-5 h1 display-5 fw-bold text-center'>
                                            Create{' '}
                                            <span className='text-red'>
                                                Account
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
                                                    Email
                                                </label>
                                                {/* contact email input */}
                                                <input
                                                    type='email'
                                                    className='form-control bg-gray-2 '
                                                    id='email'
                                                />
                                                {/* contact email input */}
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    htmlFor='phone'
                                                    className='form-label text-gray'
                                                >
                                                    Phone
                                                </label>
                                                {/* contact phone input */}
                                                <input
                                                    type='tel'
                                                    className='form-control bg-gray-2 '
                                                    id='phone'
                                                />
                                                {/* contact phone input */}
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
                                            <div className='d-flex mb-3'>
                                                {/* create account form button */}
                                                <ButtonFilled
                                                    text={'Create Account'}
                                                    className={'h5 flex-fill'}
                                                />
                                                {/* create account form button */}
                                            </div>
                                            <div className='d-flex'>
                                                {/* Login form button */}
                                                <ButtonOutlined
                                                    text={'Log In'}
                                                    className={'h5 flex-fill'}
                                                    onClick={() =>
                                                        navigate('/sign-in')
                                                    }
                                                />
                                                {/* Login form button */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-1 d-none d-xxl-block image-right-3'>
                            {/* section create account image */}
                            <img
                                src={Image}
                                alt='Accredited Courses Image'
                                className='img-fluid'
                                style={{
                                    filter: 'drop-shadow(3px 3px 10px #000000)',
                                }}
                            />
                            {/* section create account image */}
                        </div>
                    </div>
                </div>
            </section>
            {/* section create account */}
        </main>
    );
};

export default CreateAccount;
