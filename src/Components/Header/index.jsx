import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <h2 className="log">Logo</h2>

      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/TodoList">TodoList</NavLink>
        </li>

        <li>
          <NavLink to="/Posts">Posts</NavLink>
        </li>

        <li>
          <NavLink to="/Langs">Langs</NavLink>
        </li>
        <li>
          <NavLink to="/Counters">Counters</NavLink>
        </li>
        <li>
          <NavLink to="/Tasks">Tasks</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
