import React from 'react';
import NavigationBar from '../Pages/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLayout = () => {
    return (
        <div>
            
            <NavigationBar>

            </NavigationBar>

            <Outlet></Outlet>

        </div>
    );
};

export default LogInLayout;