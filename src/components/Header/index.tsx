import { Container, HeaderLinks, HeaderMenu } from "./styles";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logoHeader.svg";

interface linksMenu {
  home?: string;
  login?: string;
}

export function Header({ home, login }: linksMenu) {
  return (
    <Container>
      <HeaderMenu>
        <img src={Logo} />

        <HeaderLinks>
        <NavLink to="/">
            {home ="Home"}
          </NavLink>
          <NavLink to="/login">
            {login = "Login"}
          </NavLink>
        </HeaderLinks>
      </HeaderMenu>
    </Container>
  );
}
