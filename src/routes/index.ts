import HomePage from "../pages/home";


const siteRoutes = [
    {
        key: 'home',
        component: HomePage,
        exact: true,
        path: '/',
        title: 'Events-Tickets',
        subTitle: 'Dashboard',
    },
];

const getRoute = (pathname: any) => {
    return [...siteRoutes].find(route => {
        return route.path === pathname || `${route.path}/` === pathname;
    })
};

export {
    siteRoutes,
    getRoute,
};
