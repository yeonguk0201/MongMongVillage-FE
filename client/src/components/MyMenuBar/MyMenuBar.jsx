import { Container, Line, MenuButton, MenuContainer } from './styles';
import { myActivityMenus } from '../../libs';

const MyMenuBar = ({ setMenu, menu }) => {
  return (
    <Container>
      <MenuContainer>
        <MenuButton
          onClick={() => setMenu(myActivityMenus.post)}
          selected={menu === myActivityMenus.post ? true : false}
        >
          <span>{myActivityMenus.post}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(myActivityMenus.comment)}
          selected={menu === myActivityMenus.comment ? true : false}
        >
          <span>{myActivityMenus.comment}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(myActivityMenus.like)}
          selected={menu === myActivityMenus.like ? true : false}
        >
          <span>{myActivityMenus.like}</span>
        </MenuButton>
        <MenuButton
          onClick={() => setMenu(myActivityMenus.review)}
          selected={menu === myActivityMenus.review ? true : false}
        >
          <span>{myActivityMenus.review}</span>
        </MenuButton>
      </MenuContainer>
      <Line />
    </Container>
  );
};

export default MyMenuBar;
