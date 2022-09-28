import { Route, Routes } from 'react-router-dom';
import Custommers from '../pages/customers';
import Devices from '../pages/devices';
import Firmware from '../pages/firmwares';
import Error from '../pages/error';
import Dashboard from '../pages/dashboard';

const Content = () => {
    return <div>
        <Routes>
            <Route path='/' element={<Custommers />}></Route>
            <Route path='/devices' element={<Devices />}></Route>
            <Route path='/firmware' element={<Firmware />}></Route>
            <Route path='/error' element={<Error />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
    </div>
}

export default Content;