import { Link } from "@tanstack/react-router";
const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/lists">Lists</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
    </ul>
  );
};

export default Menu;
