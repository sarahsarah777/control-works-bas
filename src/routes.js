/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui icons
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// Pages
import Home from "./layouts/pages/home";
import About from "./layouts/pages/about";
import Services from "./layouts/pages/services";
import Solutions from "./layouts/pages/solutions";
import Contact from "./layouts/pages/contact";

const routes = [
  {
    name: "home",
    route: "/home",
    component: <Home />,
    icon: <HomeIcon/>,
  },
  {
    name: "services",
    route: "/services",
    component: <Services />,
    icon: <HomeRepairServiceIcon/>,
  },
  {
    name: "solutions",
    route: "/solutions",
    component: <Solutions />,
    icon: <EmojiObjectsIcon/>,
  },
  {
    name: "about",
    route: "/about",
    component: <About />,
    icon: <PeopleAltIcon/>,
  },
  {
    name: "contact",
    route: "/contact",
    component: <Contact />,
    icon: <PermContactCalendarIcon/>,
  },
];

export default routes;
