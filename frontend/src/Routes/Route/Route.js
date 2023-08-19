import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ReactSliderBasic from "../../Pages/Home/ReactSlider";
import ArticleDetails from "../../Pages/Home/Articles/ArticleDetails/ArticleDetails";
import Editors from "../../Pages/Information/Editors/Editors";
import Reviewers from "../../Pages/Information/Reviewers/Reviewers";
import Authors from "../../Pages/Information/Authors/Authors";
import InformationLayout from "../../Layout/InformationLayout/InformationLayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/articleDetails/:id',
                element: <ArticleDetails></ArticleDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/article/${params.id}`)
            },

            {
                path: '/info',
                element: <InformationLayout></InformationLayout>,
                children: [
                    {
                        path: '/info',
                        element: <Authors></Authors>
                    },
                    {
                        path: '/info/reviewers',
                        element: <Reviewers></Reviewers>
                    },
                    {
                        path: '/info/editors',
                        element: <Editors></Editors>
                    }
                ]

            }



        ]
    },


])