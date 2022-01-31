import { FC, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

import Image from '../assets/Create-Account-patch.svg';
import { ButtonFilled, ButtonOutlined } from '../components/Buttons';

const SignIn: FC = () => {
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
                                            Log{' '}
                                            <span className='text-red'>In</span>
                                        </p>
                                        {/* section heading */}
                                        <form
                                            onSubmit={(e) => e.preventDefault()}
                                            method='post'
                                        >
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
                                                    Password
                                                </label>
                                                {/* contact password input */}
                                                <input
                                                    type='password'
                                                    className='form-control bg-gray-2 '
                                                    id='password'
                                                />
                                                {/* contact password input */}
                                            </div>

                                            <div className='d-flex'>
                                                {/* Login form button */}
                                                <ButtonOutlined
                                                    text={'Log In'}
                                                    className={'h5 flex-fill'}
                                                />
                                                {/* Login form button */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section create account */}
        </main>
    );
};

export default SignIn;
