import { React, NavLink, Input } from "../../global";
import { Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <nav>
      <div className="headerNav">
        <div className="headerNav-left">
          <NavLink exact activeClassName="active" to="/">
            My Blog
          </NavLink>
        </div>
        <div className="headerNav-right">
          <Input
            className="headerNav-test"
            size="small"
            icon="search"
            placeholder="Search..."
          />

          <NavLink activeClassName="active" to="/link-1">
            Link 1
          </NavLink>
          <NavLink activeClassName="active" to="/link-2">
            Link 2
          </NavLink>
          <NavLink activeClassName="active" to="/link-3">
            Link 3
          </NavLink>
          <NavLink activeClassName="active" to="/my-profile">
            My profile
          </NavLink>
          <NavLink activeClassName="active" to="/logout">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
