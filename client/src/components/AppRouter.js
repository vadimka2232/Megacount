import React from 'react'
import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import ErrorFound from '../pages/ErrorFound'

function AppRouter() {
    const isAuth = false
    return (
        <Routes>
            { isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            { publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<ErrorFound/>}/>
        </Routes>
    )
}

export default AppRouter
