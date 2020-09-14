import { React, NavLink, Input } from "../../global";

const Header = (props) => {
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
              type="text"
              value={props.search}
              onChange={props.updateSearch}
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
    </div>
  );
};

export default Header;
