import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
    return (
        <div className=''>
            <Header />
            <div className='container-fluid px-0'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
