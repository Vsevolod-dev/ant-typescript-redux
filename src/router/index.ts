import {ComponentType, ReactNode} from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export  interface IRoute {
    path: string,
    component: ReactNode,
    exact?: boolean
}

export enum RoutesNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes = [
    {path: RoutesNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes = [
    {path: RoutesNames.EVENT, exact: true, component: Event}
]