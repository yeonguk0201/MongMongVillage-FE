import { SignUpPage, CommunityPage, MainPage, LoginPage } from './pages';

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
  COMMUNITY_PAGE: {
    path: '/community',
    link: '/community',
    element: <CommunityPage />,
  },
  SIGNUP_PAGE: {
    path: '/SignUp',
    link: '/SignUp',
    element: <SignUpPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
