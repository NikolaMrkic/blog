import { React, NavLink, Input, isMobile } from "../../global";
import DesktopMenu from "../Menu/DesktopMenu";
import Burger from "../Menu/Burger";

const Header = (props) => {
  return (
    <div className="header-container">
      <nav>
        <div className="headerNav">
          <div className="headerNav-logo">
            <NavLink exact activeClassName="active" to="/">
              My Blog
            </NavLink>
          </div>
          <div className="headerNav-menu">
            {!isMobile ? <DesktopMenu /> : <Burger />}
          </div>
          <div className="headerNav-search">
            <Input
              size="mini"
              type="text"
              value={props.search}
              onChange={props.updateSearch}
              placeholder="Search Blog..."
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
