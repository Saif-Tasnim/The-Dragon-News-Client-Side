import {createBrowserRouter} from 'react-router-dom';
import Main from '../components/layout/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>
    }
])

export default router;