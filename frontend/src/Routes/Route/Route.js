import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ReactSliderBasic from "../../Pages/Home/ReactSlider";
import ArticleDetails from "../../Pages/Home/Articles/ArticleDetails/ArticleDetails";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/articleDetails/:id',
                element: <ArticleDetails></ArticleDetails>,
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            }

        ]
    }
])