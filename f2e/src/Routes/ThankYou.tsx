import { FC, ReactNode } from 'react';

import { ButtonFilled, ButtonOutlined } from '../components/Buttons';
// images
import Image from '../assets/Thank-You-Star.png';
import { useNavigate } from 'react-router-dom';

const ThankYou: FC = () => {
    const navigate = useNavigate();
    return (
        <main>
            {/* section thank you */}
            <section
                className='bg-gray-2 position-relative section-top'
                style={{ zIndex: 3 }}
            >
                <div className='container-sm py-5'>
                    <div className='py-5 my-md-5'>
                        <div className='d-md-flex justify-content-center align-items-center px-3 px-md-0'>
                            <div className='rounded-6 p-5 bg-white'>
                                <div className='col-6 mx-auto'>
                                    {/* thank you image */}
                                    <img
                                        className='img-fluid'
                                        src={Image}
                                        alt='thank you image'
                                    />
                                    {/* thank you image */}
                                </div>
                                <div className='text-center'>
                                    {/* thank you heading */}
                                    <div className='h1 display-3 fw-bold'>
                                        <span>Thank </span>
                                        <span className='text-red'>You</span>
                                    </div>
                                    {/* thank you heading */}
                                    {/* thank you message */}
                                    <div className='py-3'>
                                        <p className='text-gray'>
                                            For your Feedback, our team will
                                            reach out shortly
                                        </p>
                                    </div>
                                    {/* thank you message */}
                                </div>
                                <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                                    {/* go back button */}
                                    <div className='me-sm-5 pb-3 pb-sm-0'>
                                        <ButtonFilled
                                            text={'Go Back'}
                                            className={'text-nowrap'}
                                        />
                                    </div>
                                    {/* go back button */}
                                    {/* go home button */}
                                    <div className='ms-sm-5'>
                                        <ButtonOutlined
                                            text={'Go Home'}
                                            onClick={() => navigate('/')}
                                        />
                                    </div>
                                    {/* go home button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section thank you */}
        </main>
    );
};

export default ThankYou;
