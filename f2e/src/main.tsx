import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import Home from './Routes/Home';
import Courses from './Routes/Courses';
import AboutUs from './Routes/AboutUs';
import Cart from './Routes/Cart';
import CreateAccount from './Routes/CreateAccount';
import ContactUs from './Routes/ContactUs';
import BookCourse from './Routes/BookCourse';
import Course from './Routes/Course';
import SignIn from './Routes/SignIn';
import ThankYou from './Routes/ThankYou';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='about-us' element={<AboutUs />} />
                <Route path='/book-course' element={<BookCourse />} />
                <Route path='cart' element={<Cart />} />
                <Route index element={<Home />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/course' element={<Course />} />
                <Route path='courses' element={<Courses />} />
                <Route path='/sign-up' element={<CreateAccount />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/thank-you' element={<ThankYou />} />
            </Route>
            <Route
                path='*'
                element={
                    <main style={{ padding: '1rem' }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    rootElement
);
