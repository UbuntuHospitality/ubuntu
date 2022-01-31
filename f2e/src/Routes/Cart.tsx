import { FC, ReactNode } from 'react';
import { ButtonFilled, ButtonOutlined } from '../components/Buttons';
import { Card5 } from '../components/Cards';
import CardImage from '../assets/Courses-Placeholder.jpg';
import PaginatedCoursesInCart from '../components/CartPagination';

const Cart: FC = () => {
    // sample courses in cart
    const items: ReactNode[] = [
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
        <Card5
            button1={<ButtonFilled text={'Remove'} className={'px-5'} />}
            button2={<ButtonOutlined text={'Buy Now'} />}
            image={CardImage}
        />,
    ];
    // sample courses in cart

    return (
        <main>
            <section className='position-relative section-top'>
                <div className='py-5 bg-gray-2'>
                    <div className='py-5 container-sm '>
                        {/* section heading */}
                        <p className='h1 display-5 fw-bold text-center text-dark pb-5'>
                            Cart/Wishlist
                        </p>
                        {/* section heading */}
                        {/* section pagination */}
                        <div className=''>
                            <PaginatedCoursesInCart
                                coursePerPage={3}
                                courses={items}
                            />
                        </div>

                        {/* section pagination */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
