import { FC } from "react";
import { Link } from "react-router-dom";

interface iNavLinkProps {
  navLink: string;
  route: string
}

const NavLink: FC<iNavLinkProps> = ({ navLink, route }) => {
  return (
    <Link
      className="mx-5 hover:underlin hover:text-white duration-300 transition-all text-[19px]"
      to={route}
    >
      {navLink}
    </Link>
  );
};

export default NavLink;
