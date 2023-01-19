import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignIn } from '../pages/SignIn';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<SignIn/>} />
        </Routes>
    )
}