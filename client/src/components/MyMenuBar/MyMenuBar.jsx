import { Container, Line, MenuButton, MenuContainer } from './styles';
import { menus } from '../../libs';

const MyMenuBar = ({ setMenu, menu }) => {
  return (
    <Container>
      <MenuContainer>
        <MenuButton
          onClick={() => setMenu(menus.작성글)}
          className={menu === menus.작성글 ? 'selected' : ''}
        >
          <span>{menus.작성글}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(menus.작성댓글)}
          className={menu === menus.작성댓글 ? 'selected' : ''}
        >
          <span>{menus.작성댓글}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(menus.좋아요)}
          className={menu === menus.좋아요 ? 'selected' : ''}
        >
          <span>{menus.좋아요}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(menus.작성리뷰)}
          className={menu === menus.작성리뷰 ? 'selected' : ''}
        >
          <span>{menus.작성리뷰}</span>
        </MenuButton>
      </MenuContainer>
      <Line />
    </Container>
  );
};

export default MyMenuBar;
