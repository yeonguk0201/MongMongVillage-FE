import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Container,
  Navbar,
  Navitem,
  Space,
  NavitemContainer,
  MenuButton,
  Logo,
} from './Header.styles';
import { ROUTE } from '../../routes/Routes';
import { showAlert } from '../../util/showAlert';
import { getCheckTokenValid } from '../../hooks/getCheckTokenValid';
import { TbMenu2 } from 'react-icons/tb';

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('role') === 'ADMIN';

  const location = useLocation();

  const [activeHeader, setActiveHeader] = useState(location.pathname);
  const [hideSideMenu, setHideSideMenu] = useState(true);
  const sideMenuRef = useRef(null);

  const handleClick = (route) => {
    setActiveHeader(route);
    setHideSideMenu(true);
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = useCallback(() => {
    showAlert('로그아웃', '로그아웃 되었습니다.', 'success', () => {
      localStorage.clear();
      navigate(ROUTE.MAIN_PAGE.link);
      window.location.reload();
    });
  }, [navigate]);

  const toggleSideMenu = () => {
    setHideSideMenu(!hideSideMenu);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        !hideSideMenu &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target)
      )
        setHideSideMenu(true);
    };

    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [hideSideMenu, sideMenuRef]);

  // 토큰 검증
  useEffect(() => {
    const checkAndHandleLogout = async () => {
      if (token) {
        const isValid = await getCheckTokenValid();

        if (!isValid) {
          showAlert(
            '',
            '토큰이 유효하지 않습니다. 재로그인이 필요합니다.',
            'error',
            () => {
              navigate(ROUTE.LOGIN_PAGE.link);
              handleLogout();
            },
          );
        }
      }
    };

    checkAndHandleLogout();
  }, [handleLogout, navigate, token]);

  // 주소창의 주소가 바뀌면 헤더아이템 active
  useEffect(() => {
    setActiveHeader(`/${location.pathname.split('/')[1]}`);
  }, [location.pathname]);

  return (
    <Container>
      <Navbar>
        <Logo
          src={`${process.env.PUBLIC_URL}/logo.png`}
          onClick={() => {
            handleClick(ROUTE.MAIN_PAGE.link);
          }}
        />

        {hideSideMenu && (
          <MenuButton>
            <TbMenu2 size={'30px'} onClick={toggleSideMenu} />
          </MenuButton>
        )}

        <NavitemContainer
          className={!hideSideMenu ? 'side' : ''}
          ref={sideMenuRef}
        >
          {hideSideMenu || (
            <MenuButton className="side">
              <TbMenu2 size={'30px'} onClick={toggleSideMenu} />
            </MenuButton>
          )}
          <Navitem
            id="home"
            className={activeHeader === ROUTE.MAIN_PAGE.link ? 'active' : ''}
            onClick={() => {
              handleClick(ROUTE.MAIN_PAGE.link);
            }}
          >
            홈
          </Navitem>
          <Navitem
            id="community"
            className={
              activeHeader.includes(ROUTE.COMMUNITY_PAGE.link) ? 'active' : ''
            }
            onClick={() => {
              handleClick(ROUTE.COMMUNITY_PAGE.link);
            }}
          >
            커뮤니티
          </Navitem>
          <Navitem
            id="information"
            className={activeHeader.includes('cafe') ? 'active' : ''}
            onClick={() => {
              handleClick(ROUTE.CAFE_MAP_PAGE.link);
            }}
          >
            애견카페찾기
          </Navitem>
          <Navitem
            id="review"
            className={
              activeHeader === ROUTE.REVIEW_LIST_PAGE.link ? 'active' : ''
            }
            onClick={() => {
              handleClick(ROUTE.REVIEW_LIST_PAGE.link);
            }}
          >
            리뷰
          </Navitem>
          {token ? (
            <>
              <Space />
              {isAdmin && <span className="admin">관리자님, 반갑습니다.</span>}
              {!isAdmin && (
                <Navitem
                  id="mypage"
                  className={
                    activeHeader === ROUTE.MY_PAGE.link ? 'active' : ''
                  }
                  onClick={() => {
                    handleClick(ROUTE.MY_PAGE.link);
                  }}
                >
                  마이페이지
                </Navitem>
              )}
              <Navitem
                id="logout"
                onClick={() => {
                  handleLogout();
                }}
              >
                로그아웃
              </Navitem>
            </>
          ) : (
            <>
              <Space />
              <Navitem
                id="login"
                className={
                  activeHeader === ROUTE.LOGIN_PAGE.link ? 'active' : ''
                }
                onClick={() => {
                  handleClick(ROUTE.LOGIN_PAGE.link);
                }}
              >
                로그인
              </Navitem>
              <Navitem
                id="signup"
                className={
                  activeHeader === ROUTE.SIGNUP_PAGE.link ? 'active' : ''
                }
                onClick={() => {
                  handleClick(ROUTE.SIGNUP_PAGE.link);
                }}
              >
                회원가입
              </Navitem>
            </>
          )}
        </NavitemContainer>
      </Navbar>
    </Container>
  );
};

export default Header;
