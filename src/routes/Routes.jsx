import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layout/Main';
import Categorry from '../components/Category/Categorry';
import Home from '../components/Pages/Home/Home';
import NewsLayout from '../components/layout/NewsLayout';
import News from '../components/Pages/News/News';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: 'category/:id',
                element: <Categorry></Categorry>,
                loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }

])

export default router;