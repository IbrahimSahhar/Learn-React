import { NavLink } from "react-router-dom";
import "./style.css";
const Header = ({ logOut }) => {
  const items = JSON.parse(localStorage.getItem("items"));
  const firstName = items.firstName;
  const lastName = items.lastName;
  return (
    <div className="header">
      <h2 className="log">
        Hi{" "}
        <span style={{ color: "darkred" }}>{`${firstName} ${lastName}`}</span>
      </h2>

      <ul>
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/TodoList">TodoList</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/Counters">Counters</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/Posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/Tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/Langs">Langs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/PostsRedux">PostsRedux</NavLink>
        </li>
        <li>
          <button
            style={{ padding: "5px", fontSize: "15px", fontWeight: "bold" }}
            onClick={logOut}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
