import { useState } from "react";

// Components
import Cart from "../cart/index";
import { useSelector, useDispatch } from "react-redux";

// Styles
import * as Styles from "./styles";
import { UserActionTypes } from "../../redux/user/action-types";
import { userLogin, userLogout } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispachar = useDispatch();
  console.log({ currentUser });

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispachar(userLogin({ user: "Emanuel", email: "emanribeiro13@gmail.com" }));
  };
  const handleLogoutClick = () => {
    dispachar(userLogout());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser != null ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
