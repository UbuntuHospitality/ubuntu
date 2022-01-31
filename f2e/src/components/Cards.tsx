import { FC, ReactNode } from 'react';

interface PropsCard1 {
    icon: ReactNode;
    text: string;
    className?: string;
}

interface PropsCard2 {
    image?: string;
    title?: string;
    subTitle?: string;
    price?: string;
    previousPrice?: string;
    button: ReactNode;
    className?: string;
    bestSeller?: boolean;
}

interface PropsCard3 {
    image?: string;
    title: string;
    numberOfCourses: number;
    className?: string;
    carousel?: Boolean;
}

interface PropsCard4 {
    icon: ReactNode;
    heading: string;
    text: string;
    className?: string;
}

interface PropsCard5 {
    image?: string;
    title?: string;
    subTitle?: string;
    price?: string;
    previousPrice?: string;
    button1: ReactNode;
    button2: ReactNode;
    className?: string;
}

interface PropsCard6 {
    image?: string;
    title?: string;
    duration?: number;
    button: ReactNode;
}

export const Card1: FC<PropsCard1> = ({ icon, text, className }) => {
    return (
        <div className='rounded-5 bg-white px-4 py-4 mb-3 mb-lg-0 card-hover'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='rounded-circle bg-pink p-4 col-3 col-lg-5 col-xl-4 col-xxl-3 d-flex align-items-center justify-content-center'>
                    {icon}
                </div>
                <div className='col-8'>
                    <p className='h3 fw-bold'>{text}</p>
                </div>
            </div>
        </div>
    );
};

export const Card2: FC<PropsCard2> = ({
    image,
    title = 'How to Start & Market Food from Your Home Kitchen',
    subTitle = 'Duration: 6 Months',
    price = '$12.99',
    previousPrice = '$18.00',
    button,
    className,
    bestSeller,
}) => {
    return (
        <div className='mx-2 rounded-4 card-hover'>
            <div className='rounded-4'>
                <img
                    src={image}
                    className='rounded-4 img-fluid'
                    alt='Card Image'
                />
                {bestSeller && (
                    <button
                        className='filled-yellow text-nowrap py-1 px-4 position-absolute'
                        style={{ top: '1rem', right: '1rem' }}
                    >
                        BestSeller
                    </button>
                )}
            </div>
            <div className='p-3'>
                <p className='h5 fw-bold'>{title}</p>
                <p className='mb-2 fw-bold text-red'>{subTitle}</p>
                <div className='d-flex align-items-center'>
                    <span className='fw-bold h4 m-0'>{price}</span>
                    <span className='text-gray fw-bold ps-4'>
                        From:
                        <span className='text-decoration-line-through'>
                            {previousPrice}
                        </span>
                    </span>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-between px-3'>
                {button}
                <span className='text-gray'>
                    <i className='bi bi-award'></i>
                    Certification Available
                </span>
            </div>
        </div>
    );
};

export const Card3: FC<PropsCard3> = ({
    image,
    title,
    numberOfCourses,
    className,
}) => {
    return (
        <div className='rounded-5 shadow bg-white card-hover'>
            <div className='d-flex align-items-center'>
                <div className='col-lg-4 col-md-3 col-4'>
                    <img
                        src={image}
                        alt='Courses Card'
                        className='img-fluid rounded-start-5'
                    />
                </div>
                <div className='ps-sm-4 ps-3 py-sm-4'>
                    <p className='h5 fw-bold'>{title}</p>
                    <p className='h5 fw-bold text-gray'>
                        {numberOfCourses} Courses
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Card4: FC<PropsCard4> = ({ icon, heading, text, className }) => {
    return (
        <div className='rounded-5 bg-white py-5 px-md-5 px-lg-3 px-xl-5 px-3 mb-3 mb-lg-0'>
            <div className='px-xxl-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='rounded-circle bg-pink p-4 col-4 col-sm-3 col-lg-4 d-flex align-items-center justify-content-center'>
                        {icon}
                    </div>
                    <div className='col-8'>
                        <p className='h3 fw-bold'>{heading}</p>
                    </div>
                </div>
                <div className='pt-5 text-gray'>
                    <p style={{ textAlign: 'justify' }}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export const Card5: FC<PropsCard5> = ({
    image,
    title = 'How to Start & Market Food from Your Home Kitchen',
    subTitle = 'Duration: 6 Months',
    price = '$12.99',
    previousPrice = '$18.00',
    button1,
    button2,
    className,
}) => {
    return (
        <div className='bg-white rounded-5 d-flex align-items-center'>
            <div className='col-lg-4 d-none d-lg-block'>
                <img
                    src={image}
                    className='rounded-5 img-fluid'
                    alt='Card Image'
                />
            </div>
            <div className='py-3 py-lg-3 py-xxl-5 px-md-5 px-3 d-lg-flex align-items-center'>
                <div>
                    <p className='h2 fw-bold'>{title}</p>
                    <p className='mb-3 fw-bold text-red'>{subTitle}</p>
                    <div className='d-flex align-items-center'>
                        <span className='fw-bold h4 m-0'>{price}</span>
                        <span className='text-gray fw-bold ps-4'>
                            From:
                            <span className='text-decoration-line-through'>
                                {previousPrice}
                            </span>
                        </span>
                    </div>
                </div>
                <div className='align-self-end pt-4 pt-lg-0'>
                    <div className='d-flex align-items-center flex-column flex-sm-row'>
                        <div className='pe-md-3 pe-1 pb-3 pb-sm-0'>
                            {button1}
                        </div>
                        <div className='ps-md-3 ps-1'>{button2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Card6: FC<PropsCard6> = ({
    image,
    title = 'How to Start & Market a Food Business from Your Home Kitchen',
    duration = 6,
    button,
}) => {
    return (
        <div className='shadow bg-white p-3 rounded-5'>
            <div className=''>
                <img
                    src={image}
                    className='img-fluid rounded-5'
                    alt='Card Image'
                />
            </div>
            <div className='px-4 px-lg-1'>
                <div className='pt-5'>
                    <p className='h4 fw-bold pb-3'>{title}</p>
                    <p className='fw-bold text-red'>Duration</p>
                    <p className='text-gray h4'>{duration} Months</p>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='text-red fw-bold d-flex align-items-center'>
                        <i className='bi bi-award h3'></i>
                        <span className='ps-2'>Certification Available</span>
                    </div>
                    {button}
                </div>
            </div>
        </div>
    );
};

export const Card7: FC<PropsCard3> = ({
    image,
    title,
    numberOfCourses,
    className,
}) => {
    const breakLine: ReactNode = (
        <span>
            {title}
            <br />
            <br />
        </span>
    );
    return (
        <div className='rounded-5 shadow bg-white card-hover'>
            <div className='d-flex align-items-center'>
                <div className='col-5'>
                    <img
                        src={image}
                        alt='Courses Card'
                        className='img-fluid rounded-start-5'
                    />
                </div>
                <div className='px-lg-2 px-3 py-4 p-xxl-2 col-auto'>
                    <span className='h6 fw-bold'>{title}</span>
                    <span className='h6 fw-bold text-gray d-block'>
                        {numberOfCourses} Courses
                    </span>
                </div>
            </div>
        </div>
    );
};
