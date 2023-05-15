import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/foo'>Foo</Link>
        <Link to='/bar'>Bar</Link>
      </div>
    );
  };