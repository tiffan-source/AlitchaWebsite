import Acceuil from "../views/Acceuil/Acceuil";
import Services from "../views/Services/Services";
import APropos from "../views/APropos/APropos";
import Blog from "../views/Blog/Blog";
import Contact from "../views/Contact/Contact";
import Realisations from "../views/Realisations/Realisations";
import Evenements from "../views/Evenements/Evenements";

let Navlist = [
    {
        name: "Acceuil",
        path: "/",
        element : <Acceuil/>
    },
    {
        name: "Services",
        path: "/services",
        element : <Services/>
    },
    {
        name: "A propos",
        path: "/apropos",
        element : <APropos/>
    },
    {
        name: "Blog",
        path: "/blog",
        element : <Blog/>
    },
    {
        name: "Contact",
        path: "/contact",
        element : <Contact/>
    },
    {
        name: "Realisations",
        path: "/realisations",
        element : <Realisations/>
    },
    {
        name: "Evenements",
        path: "/events",
        element : <Evenements/>
    }
]

export default Navlist;