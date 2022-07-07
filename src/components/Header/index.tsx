import { Link } from "react-router-dom";
import { HeaderS, LinkS } from "./style";
export const Header = () => {

  return (
    <>
      <HeaderS>
        <h1>Logo</h1>
        <nav>
          <ul>
            <LinkS to="">CONFIGURAÇÔES</LinkS>
            <LinkS to="/">SAIR</LinkS>
          </ul>
        </nav>
      </HeaderS>
      <hr />
    </>
  );
};
