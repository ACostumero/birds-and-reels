import {NavRoute} from "@app-core/interfaces/nav-route.interface";
import { HTTP_STATUS_CODE } from "@app-core/enums/http-error-code.enum";

export const CATEGORY_ROUTES: NavRoute[] = [
  {
    name: 'creatures',
    path: '/category/creatures',
    icon: 'bug'
  },
  {
    name: 'equipment',
    path: '/category/equipment',
    icon: 'sword'
  },
  {
    name: 'materials',
    path: '/category/materials',
    icon: 'carrot'
  },
  {
    name: 'monsters',
    path: '/category/monsters',
    icon: 'skull'
  },
  {
    name: 'treasure',
    path: '/category/treasure',
    icon: 'chest'
  },
]

export const ENTRY_PATH: string = 'entry';

export const FALLBACK_ROUTES = {
[HTTP_STATUS_CODE.FORBIDDEN]: 'forbidden',
[HTTP_STATUS_CODE.NOT_FOUND]: 'not-found',
[HTTP_STATUS_CODE.SERVER_ERROR]: 'error'
}

export const NAVBAR_ROUTES: NavRoute[] = [
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
