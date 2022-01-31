import { FC } from 'react';
import { ButtonDarkFilled, ButtonFilled } from '../components/Buttons';

const ContactUs: FC = () => {
    return (
        <main>
            {/* section contact us form */}
            <section className='position-relative section-top bg-image-contact-us'>
                <div className='container-sm py-5'>
                    <div className='py-5 my-5'>
                        <div className='py-5'>
                            <div className='rounded-5 p-5 px-xxl-5 px-3 bg-white'>
                                <div className='d-lg-flex justify-content-between'>
                                    <div className='px-lg-5 px-3 col-lg-6'>
                                        {/* contact info title */}
                                        <p className='h1 display-5 fw-bold text-dark'>
                                            Contact Information
                                        </p>
                                        {/* contact info title */}
                                        <div className='py-5 border-bottom'>
                                            <div className='d-flex align-items-center'>
                                                <div className=''>
                                                    <div className='p-4 rounded-circle border-red text-red d-flex align-items-center justify-content-center'>
                                                        {/* phone icon */}
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='24'
                                                            height='24'
                                                            fill='currentColor'
                                                            className='bi bi-telephone'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                                                        </svg>
                                                        {/* phone icon */}
                                                    </div>
                                                </div>
                                                <div className='ps-5'>
                                                    <p className='text-red'>
                                                        Phone No.
                                                    </p>
                                                    {/* company phone number */}
                                                    <a
                                                        className='d-block text-decoration-none h3 text-dark fw-bold'
                                                        href='tel:+254000000000'
                                                    >
                                                        +254 000 000 000
                                                    </a>
                                                    {/* company phone number */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-5 border-bottom'>
                                            <div className='d-flex align-items-center'>
                                                <div className=''>
                                                    <div className='p-4 text-red border-red rounded-circle  d-flex align-items-center justify-content-center'>
                                                        {/* email icon */}
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='24'
                                                            height='24'
                                                            fill='currentColor'
                                                            className='bi bi-envelope'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
                                                        </svg>
                                                        {/* email icon */}
                                                    </div>
                                                </div>
                                                <div className='ps-5'>
                                                    <p className='text-red'>
                                                        Email.
                                                    </p>
                                                    {/* company email */}
                                                    <a
                                                        className='d-block text-decoration-none h3 text-dark fw-bold'
                                                        href='mail:info@ubuntu-hospitality.com'
                                                    >
                                                        info@ubuntu-hospitality.com
                                                    </a>
                                                    {/* company email */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-5'>
                                            <div className='d-flex align-items-center'>
                                                <div className=''>
                                                    <div className='p-4 text-red border-red rounded-circle d-flex align-items-center justify-content-center'>
                                                        {/* location icon */}
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width='24'
                                                            height='24'
                                                            fill='currentColor'
                                                            className='bi bi-geo-alt'
                                                            viewBox='0 0 16 16'
                                                        >
                                                            <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
                                                            <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                                                        </svg>
                                                        {/* location icon */}
                                                    </div>
                                                </div>
                                                <div className='ps-5'>
                                                    <p className='text-red'>
                                                        Available in:
                                                    </p>
                                                    {/* company locations */}
                                                    <span className='d-block  h3 text-dark fw-bold'>
                                                        Kenya Zimbabwe &
                                                        Tanzania
                                                    </span>
                                                    {/* company locations */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* styling border */}
                                    <div className='border-start border-2 border-dark d-none d-lg-block'></div>
                                    {/* styling border */}
                                    <div className='col-lg-6'>
                                        <div className='px-lg-5 px-3'>
                                            {/* send message heading */}
                                            <p className='h1 display-5 fw-bold text-dark'>
                                                Send us a Message
                                            </p>
                                            {/* send message heading */}
                                            {/* send message form */}
                                            <form
                                                onSubmit={(e) =>
                                                    e.preventDefault()
                                                }
                                                method='post'
                                                className='pt-5'
                                            >
                                                <div className='mb-5'>
                                                    <label
                                                        htmlFor='name'
                                                        className='form-label text-gray'
                                                    >
                                                        Your Name Here
                                                    </label>
                                                    {/* contact name input */}
                                                    <input
                                                        type='text'
                                                        className='form-control bg-gray-2 form-control-lg'
                                                        id='name'
                                                    />
                                                    {/* contact name input */}
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
                                                        className='form-control bg-gray-2 form-control-lg'
                                                        id='email'
                                                    />
                                                    {/* contact email/ phone input */}
                                                </div>
                                                <div className='mb-5'>
                                                    <label
                                                        htmlFor='message'
                                                        className='form-label text-gray'
                                                    >
                                                        Message (200 words)
                                                    </label>
                                                    {/* message input area */}
                                                    <textarea
                                                        className='form-control bg-gray-2 form-control-lg'
                                                        id='message'
                                                        rows={4}
                                                    ></textarea>
                                                    {/* message input area */}
                                                </div>

                                                <div className='d-flex'>
                                                    {/* send message form button */}
                                                    <ButtonFilled
                                                        text={
                                                            'Yes Please, Contact Me'
                                                        }
                                                        className={
                                                            'h5 flex-fill'
                                                        }
                                                    />
                                                    {/* send message form button */}
                                                </div>
                                            </form>
                                            {/* send message form */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section contact us form */}
            {/* section request a brochure */}
            <section
                className='position-relative section-top bg-image-contact-us-circles'
                id={'brochure'}
            >
                <div className='py-5 container-sm'>
                    <div className='py-5'>
                        {/* section heading */}
                        <p className='text-center h1 display-5  text-white fw-bold'>
                            Request a Brochure
                        </p>
                        {/* section heading */}
                        <div className='py-5'>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                method='post'
                            >
                                <div className='d-lg-flex justify-content-evenly'>
                                    <div className='col-lg-5 mb-5'>
                                        {/* contact name input */}
                                        <input
                                            type='text'
                                            className='form-control form-control-lg'
                                            id='name'
                                            placeholder='Full Names Here'
                                        />
                                        {/* contact name input */}
                                    </div>
                                    <div className='col-lg-5 mb-5'>
                                        {/* contact email input */}
                                        <input
                                            type='email'
                                            className='form-control form-control-lg'
                                            id='email'
                                            placeholder='Email adress here'
                                        />
                                        {/* contact email input */}
                                    </div>
                                </div>
                                {/* submit form button */}
                                <div className='text-center'>
                                    <ButtonDarkFilled
                                        text={'Submit'}
                                        className={'h4'}
                                    />
                                    <span className='border-0 bg-pink-2 rounded-circle btn-left p-1 '>
                                        <i className='bi bi-arrow-right-short text-red fw-bold h5'></i>
                                    </span>
                                </div>
                                {/* submit form button */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* section request a brochure */}
        </main>
    );
};

export default ContactUs;
