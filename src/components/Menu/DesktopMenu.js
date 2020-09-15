import { React, NavLink } from "../../global";

const DesktopMenu = () => {
  return (
    <div className="headerNav-menu">
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
  );
};

export default DesktopMenu;
