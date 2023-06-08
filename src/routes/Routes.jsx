import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../components/layout/Main';
import Categorry from '../components/Category/Categorry';
import Home from '../components/Pages/Home/Home';
import NewsLayout from '../components/layout/NewsLayout';
import News from '../components/Pages/News/News';
import LogInLayout from '../components/layout/LogInLayout';
import LogIn from '../components/Pages/LogIn/LogIn/LogIn';
import Register from '../components/Pages/LogIn/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms_Condition from '../components/Pages/Share/Terms_Conditions/Terms_Condition';

const router = createBrowserRouter([
    {
       path: "/",
       element: <LogInLayout></LogInLayout>,
       children:[
        {
            path: "/",
            element: <Navigate to='category/0'></Navigate>
           
        },
        {
            path:'login',
            element: <LogIn></LogIn>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path:'terms',
            element: <Terms_Condition></Terms_Condition>
        }
       ]
    },
    
     {
        path: "category",
        element: <Main></Main>,
        children: [
          {
                path: ':id',
                element: <Categorry></Categorry>,
                loader : ({params}) => fetch(`https://the-dragon-news-server-silk-eight.vercel.app/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader : ({params}) => fetch(`https://the-dragon-news-server-silk-eight.vercel.app/news/${params.id}`)
            }
        ]
    }

])

export default router;