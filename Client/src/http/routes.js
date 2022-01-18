import Admin from "../pages/Admin"
import {ADMIN_ROUTE, DEFAULT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import Collections from "../pages/Collections";
import Auth from "../components/Auth";
import CollItem from "../components/CollItem";

export const authRoutes = [
    {

        path: ADMIN_ROUTE,
        Component: Admin
    }


]

export const publicRoutes = [
    {

        path: REGISTER_ROUTE,
        Component: Auth
    },
    {

        path: LOGIN_ROUTE,
        Component: Auth
    },
    {

        path: DEFAULT_ROUTE,
        Component: Collections
    },
    {

        path: '/collections' + '/:id',
        Component: CollItem
    }


]