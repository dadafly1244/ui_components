'use client'

import { ROUTE_PATH, isParentRoute, routes } from '@/routes'

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/') as ROUTE_PATH
  const route = routes[path]

  if (!route?.children || isParentRoute(route)) return null

  const { children: Component } = route

  return <Component />
}

export default ItemPage
