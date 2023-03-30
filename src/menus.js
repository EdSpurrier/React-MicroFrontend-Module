import { rootRoute, getRouteByLabel } from './routes';

const menus = [{
    label: 'boilerplate',
    routeRoot: rootRoute,
    links: [
        getRouteByLabel('Home')
    ]
}]


export const getMenuByLabel = (label) => {
    let menu = null
    menu = menus.find(menu => {
        if (menu.label === label) return menu;
    });
    return menu;

}


export default menus;