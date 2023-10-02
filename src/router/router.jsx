import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navlist from "./Navlist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            ...Navlist.map(({path, element}) => ({
                path,
                element
            }))
        ]
    }
])

export default router;