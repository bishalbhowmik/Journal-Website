import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import ReactSliderBasic from "../../Pages/Home/ReactSlider";
import ArticleDetails from "../../Pages/Home/Articles/ArticleDetails/ArticleDetails";
import Editors from "../../Pages/Information/Editors/Editors";
import Reviewers from "../../Pages/Information/Reviewers/Reviewers";
import Authors from "../../Pages/Information/Authors/Authors";
import InformationLayout from "../../Layout/InformationLayout/InformationLayout";
import AboutLayout from "../../Layout/AboutLayout/AboutLayout";
import AboutJournal from "../../Pages/About/AboutJournal/AboutJournal";
import EditorialBoard from "../../Pages/About/EditorialBoard/EditorialBoard";
import Indexing from "../../Pages/About/Indexing/Indexing";
import FeesPayment from "../../Pages/About/FeesPayment/FeesPayment";
import Contact from "../../Pages/About/Contact/Contact";
import Announcement from "../../Pages/Announcement/Announcement";
import Articles from "../../Pages/Home/Articles/Article/Articles";
import Special from "../../Pages/Special/Special";
import EditorialLayout from "../../Layout/EditorialLayout/EditorialLayout";



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

            },
            {
                path: '/about',
                element: <AboutLayout></AboutLayout>,
                children: [
                    {
                        path: '/about',
                        element: <AboutJournal></AboutJournal>
                    },
                    {
                        path: '/about/editorial',
                        element: <EditorialBoard></EditorialBoard>
                    },
                    {
                        path: '/about/indexing',
                        element: <Indexing></Indexing>
                    },
                    {
                        path: '/about/fees',
                        element: <FeesPayment></FeesPayment>
                    },
                    {
                        path: '/about/contact',
                        element: <Contact></Contact>
                    }

                ]
            },
            {
                path:'/announcement',
                element: <Announcement></Announcement>
            },
            {
                path: '/articles',
                element: <Articles></Articles>
            },
            {
                path: '/special',
                element: <Special></Special>
            },
            {
                path: '/editorial',
                element: <EditorialLayout></EditorialLayout>,
                children: [
                    {
                        path: '/editorial',
                        element: <EditorialBoard></EditorialBoard>
                    }
                ]
            },
            



        ]
    },


])