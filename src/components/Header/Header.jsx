import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <nav
        style={{
          background: "#002926",
          padding: 20,
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}>
        <Link
          to="/home"
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            fontFamily: "Josefin Sans",
          }}>
          Home
        </Link>
        <Link
          to="/post"
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            fontFamily: "Josefin Sans",
          }}>
          Post
        </Link>
        <Link
          to="/about"
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            fontFamily: "Josefin Sans",
          }}>
          About
        </Link>
        <Link
          to="/contact"
          style={{
            margin: "0 10px",
            color: "white",
            textDecoration: "none",
            fontFamily: "Josefin Sans",
          }}>
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Header;
