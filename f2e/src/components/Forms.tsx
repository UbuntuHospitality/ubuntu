import { FC } from 'react';

interface Props {
    className: string;
}

export const SearchForm: FC<Props> = ({ className }) => {
    const classes: string =
        'rounded-5 px-lg-5 px-3 py-sm-5 py-3 bg-white ' + className;
    return (
        <div className={classes}>
            <div className='px-xxl-5 px-3 pt-5'>
                <p className='h3 fw-bold text-dark'>Ready to move forward</p>
                <p className='h1 text-red fw-bold'>In your Career?</p>
                <p className='text-gray'>
                    Get cutting-edge courses for as little as $12.99{' '}
                </p>
                <form
                    action=''
                    method='post'
                    onSubmit={(e) => e.preventDefault()}
                    className='bg-pink ps-3 py-2 mb-5 rounded-4 d-flex justify-content-between'
                >
                    <input
                        className='text-gray fw-bold ps-3 bg-pink w-75'
                        type='search'
                        name='search'
                        id='search'
                        placeholder='Search Courses Here'
                    />
                    <button type='submit' className='border-0 bg-pink pe-3'>
                        <i className='bi bi-search text-gray'></i>
                    </button>
                </form>
            </div>
        </div>
    );
};
