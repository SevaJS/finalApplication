import Admin from "../pages/Admin"
import {ADMIN_ROUTE, COLLECTION_ROUTE, DEFAULT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import CollItem from "../pages/CollItem";
import Auth from "../components/Auth";

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
        Component: CollItem
    },
    {

        path: COLLECTION_ROUTE + '/:id',
        Component: CollItem
    }


]