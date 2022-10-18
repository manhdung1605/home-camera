import { Route, Routes } from 'react-router-dom';
import Customers from '../pages/customers/customers.jsx';
import Devices from '../pages/devices/devices.jsx';
import Firmware from '../pages/firmwares.jsx';
import Error from '../pages/error/error.jsx';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home.jsx';

const Content = () => {
    return <div>
        <Routes>
            <Route path='devices' element={<Devices />}></Route>
            <Route path='/firmware' element={<Firmware />}></Route>
            <Route path='/error' element={<Error />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/' element={<Customers />}></Route>
        </Routes>
    </div>
}

export default Content;