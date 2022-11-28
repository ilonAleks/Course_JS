// core components
import Main from "./page/main";
import AppsIcon from "@mui/icons-material/Apps";
import OneToManyPage from "./page/dataRelationship/oneToMany/oneToMany";
import ManyToManyPage from "./page/dataRelationship/manyToMany/manyToMany";
import OneToOnePage from "./page/dataRelationship/oneToOne/oneToOne";

const routes = [
    {
        path: "/index",
        name: "Main",
        icon: AppsIcon,
        iconColor: "Primary",
        layout: "/",
        component: Main
    },
    {
        divider: true
    },
    {
        title: "Data Relationship"
    },
    {
        path: "/onetoone",
        name: "One-to-One",
        icon: AppsIcon,
        iconColor: "Primary",
        layout: "/relationship",
        component: OneToOnePage
    },
    {
        path: "/onetomany",
        name: "One-to-Many",
        icon: AppsIcon,
        iconColor: "Primary",
        layout: "/relationship",
        component: OneToManyPage
    },
    {
        path: "/manytomany",
        name: "Many-to-Many",
        icon: AppsIcon,
        iconColor: "Primary",
        layout: "/relationship",
        component: ManyToManyPage
    }
];
export default routes;
