interface NavRoute {
  path: string;
  icon: string;
}

export const NAV_ROUTES: NavRoute[] = [
  {
    path: './categories',
    icon: 'zelda'
  },
  {
    path: '../category/creatures',
    icon: 'bug'
  },
  {
    path: '../category/equipment',
    icon: 'sword'
  },
  {
    path: '../category/materials',
    icon: 'carrot'
  },
  {
    path: '../category/monsters',
    icon: 'skull'
  },
  {
    path: '../category/treasure',
    icon: 'chest'
  },
  {
    path: './search',
    icon: 'search'
  },
]
