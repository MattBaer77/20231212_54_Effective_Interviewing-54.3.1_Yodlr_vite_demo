
import {Route, Routes, Navigate} from "react-router-dom"

import Home from './Home'
import Admin from './Admin'
import SignUpForm from "./SignUpForm"

const Router = () => {

    return (

        <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/admin" element={<Admin/>} />
            <Route exact path="/sign-up" element={<SignUpForm/>} />

            <Route path="*" element={<Navigate to='/' />}/>

        </Routes>

    )

}

export default Router