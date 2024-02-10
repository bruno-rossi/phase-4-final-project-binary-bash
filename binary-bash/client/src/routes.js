import App from "./components/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";

const routes = [
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup/',
                element: <Signup />
            },
            {
                path: '/dashboard/',
                element: <Dashboard />
            },
            {
                path: '/create-event/',
                element: <CreateEvent />
            },
            {
                path: '/events/:id',
                element: <EventPage />
            }
        ]
    }
]

export default routes;