import {NavRoute} from "@app-core/interfaces/nav-route.interface";

export const CATEGORY_ROUTES: NavRoute[] = [
  {
    name: 'creatures',
    path: '../category/creatures',
    icon: 'bug'
  },
  {
    name: 'equipment',
    path: '../category/equipment',
    icon: 'sword'
  },
  {
    name: 'materials',
    path: '../category/materials',
    icon: 'carrot'
  },
  {
    name: 'monsters',
    path: '../category/monsters',
    icon: 'skull'
  },
  {
    name: 'treasure',
    path: '../category/treasure',
    icon: 'chest'
  },
]

export const NAV_ROUTES: NavRoute[] = [
  {
    name: 'categories',
    path: './categories',
    icon: 'zelda'
  },
  ...CATEGORY_ROUTES,
  {
    name: 'search',
    path: './search',
    icon: 'search'
  },
]
