import { FC, useEffect, useState, ReactNode } from 'react';
import ReactPaginate from 'react-paginate';

interface CoursesProps {
    currentCourses: ReactNode[];
}

interface PaginatedCoursesProps {
    coursesPerPage: number;
    courses: ReactNode[];
}

const Courses: FC<CoursesProps> = ({ currentCourses }) => {
    return (
        <>
            {currentCourses &&
                currentCourses.map((course) => (
                    <div className='col-auto'>{course}</div>
                ))}
        </>
    );
};

const PaginatedCourses: FC<PaginatedCoursesProps> = ({
    coursesPerPage,
    courses,
}) => {
    const [currentCourses, setCurrentCourses] = useState<ReactNode[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [courseOffset, setCourseOffset] = useState<number>(0);

    useEffect(() => {
        const endOffset = courseOffset + coursesPerPage;
        setCurrentCourses(courses.slice(courseOffset, endOffset));
        setPageCount(Math.ceil(courses.length / coursesPerPage));
    }, [courseOffset, coursesPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * coursesPerPage) % courses.length;
        setCourseOffset(newOffset);
    };

    return (
        <>
            <div className='row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5 pb-5'>
                <Courses currentCourses={currentCourses} />
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
                containerClassName='d-flex justify-content-between align-items-center pagination px-1 px-md-0'
                activeClassName='filled-pink py-1 px-2'
                activeLinkClassName=''
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default PaginatedCourses;
