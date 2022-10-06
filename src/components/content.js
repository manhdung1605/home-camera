import { Route, Routes } from 'react-router-dom';
import Custommers from '../pages/customers.jsx';
import Devices from '../pages/devices.jsx';
import Firmware from '../pages/firmwares.jsx';
import Error from '../pages/error.jsx';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login.jsx'
import Home from '../pages/home.jsx';

const Content = () => {
    return <div>
        <Routes>
            <Route path='devices' element={<Devices />}></Route>
            <Route path='/firmware' element={<Firmware />}></Route>
            <Route path='/error' element={<Error />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/' element={<Custommers />}></Route>
        </Routes>
    </div>
}

export default Content;