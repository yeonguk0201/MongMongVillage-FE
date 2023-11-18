import {
  SignUpPage,
  CommunityPage,
  MainPage,
  LoginPage,
  MyPage,
  MyActivityPage,
} from '../pages';
import MyInfoEditPage from '../pages/MyInfoEditPage/MyInfoEditPage';

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
    path: '/signUp',
    link: '/signUp',
    element: <SignUpPage />,
  },
  MY_PAGE: {
    path: '/mypage',
    link: '/mypage',
    element: <MyPage />,
  },
  MY_INFO_EDIT_PAGE: {
    path: '/mypage/info-edit',
    link: '/mypage/info-edit',
    element: <MyInfoEditPage />,
  },
  MY_ACTIVITY_PAGE: {
    path: '/mypage/activity',
    link: '/mypage/activity',
    element: <MyActivityPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
