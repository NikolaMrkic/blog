import { React, NavLink, Input, Link } from "../../global";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <div className="headerNav">
          <div className="headerNav-left">
            <NavLink exact activeClassName="active" to="/">
              My Blog
            </NavLink>
          </div>
          <div className="headerNav-right">
            <Input
              className="headerNav-search"
              size="small"
              icon="search"
              placeholder="Search..."
            />
            <NavLink activeClassName="active" to="/link-1">
              <a href="#">Link 1</a>
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
    </div>
  );
};

export default Header;
