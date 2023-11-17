import { MainPage, LoginPage, CafeMapPage, CafeDetailPage } from '../pages';

export const ROUTE = {
  MAIN_PAGE: {
    path: '/',
    link: '/',
    element: <MainPage />,
  },
  LOGIN_PAGE: {
    path: '/login',
    link: '/login',
    element: <LoginPage />,
  },
  CAFE_MAP_PAGE: {
    path: '/cafemap',
    link: '/cafemap',
    element: <CafeMapPage />,
  },
  CAFE_DETAIL_PAGE: {
    path: '/cafedetail',
    link: '/catedetail',
    element: <CafeDetailPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
