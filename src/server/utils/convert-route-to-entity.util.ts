const mapping: Record<string, string> = {
  invites: 'invite',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
