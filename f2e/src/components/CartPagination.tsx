import { FC, useEffect, useState, ReactNode } from 'react';
import ReactPaginate from 'react-paginate';

interface CoursesInCartProps {
    currentCourses: ReactNode[];
}

interface PaginatedCoursesInCartProps {
    coursePerPage: number;
    courses: ReactNode[];
}

const CoursesInCart: FC<CoursesInCartProps> = ({ currentCourses }) => {
    return (
        <>
            {currentCourses &&
                currentCourses.map((course) => (
                    <div className='py-4'>{course}</div>
                ))}
        </>
    );
};

const PaginatedCoursesInCart: FC<PaginatedCoursesInCartProps> = ({
    coursePerPage,
    courses,
}) => {
    const [currentCourses, setCurrentCourses] = useState<ReactNode[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [courseOffset, setCourseOffset] = useState<number>(0);

    useEffect(() => {
        const endOffset = courseOffset + coursePerPage;
        setCurrentCourses(courses.slice(courseOffset, endOffset));
        setPageCount(Math.ceil(courses.length / coursePerPage));
    }, [courseOffset, coursePerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * coursePerPage) % courses.length;
        setCourseOffset(newOffset);
    };

    return (
        <>
            <div className='pb-5'>
                <CoursesInCart currentCourses={currentCourses} />
            </div>

            <ReactPaginate
                nextLabel='Next'
                onPageChange={handlePageClick}
                onPageActive={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel='Prev'
                pageClassName=''
                pageLinkClassName='text-decoration-none text-reset'
                previousClassName=''
                previousLinkClassName='fw-bold text-decoration-none btn filled-pink'
                nextClassName=''
                nextLinkClassName='fw-bold text-decoration-none btn filled-pink '
                breakLabel='...'
                breakClassName=''
                breakLinkClassName='text-decoration-none'
                containerClassName='d-flex justify-content-evenly align-items-center pagination'
                activeClassName='filled-pink py-1 px-2'
                activeLinkClassName=''
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginatedCoursesInCart;
