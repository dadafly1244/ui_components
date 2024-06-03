import Accordion from './components/accordion'
import Test2React from './components/test2/react'
import Test2Vanilla from './components/test2/vanilla'
import TabMenus from './components/tabMenus'

const routePaths = [
  '/',
  '/accordion',
  '/tabMenu',
  'test2',
  'test2/vanilla',
  'test2/react',
]

export type ROUTE_PATH = (typeof routePaths)[number]

type BaseRoute = {
  key: ROUTE_PATH
  link: ROUTE_PATH
  name: string
}
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[]
}

export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null
}

export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    name: 'root',
    children: ['/accordion', '/tabMenu', '/test2'],
  },
  '/accordion': {
    key: '/accordion',
    link: '/accordion',
    name: '01. 아코디언',
    children: Accordion,
  },
  '/tabMenu': {
    key: '/tabMenu',
    link: '/tabMenu',
    name: '02. 탭메뉴',
    children: TabMenus,
  },
  '/test2': {
    key: '/test2',
    link: '/test2/vanilla', // text2페이지를 따로 두지 않고 바로 자식 컴포넌트로 넘어가게 하기 위해서!
    name: 'test2',
    children: ['/test2/vanilla', '/test2/react'],
  },
  '/test2/vanilla': {
    key: '/test2/vanilla',
    link: '/test2/vanilla',
    name: 'test2 Vanilla',
    children: Test2Vanilla,
  },
  '/test2/react': {
    key: '/test2/react',
    link: '/test2/react',
    name: 'test2 React',
    children: Test2React,
  },
}

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(
  r => routes[r],
)
