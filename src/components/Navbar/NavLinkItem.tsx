import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
import { NavItem } from "./navData";
import clsx from "clsx";

interface Props {
    item: NavItem;
    scrolling: boolean;
}

export default function NavLinkItem({ item, scrolling }: Props) {
    const location = useLocation();

    const isActive = location.pathname === item.path;

    const baseClass = clsx(
        "text-sm xl:text-base font-semibold transition-colors duration-300",
        scrolling
            ? isActive
                ? "text-blue-600"
                : "text-gray-800"
            : isActive
                ? "text-white"
                : "text-blue-100"
    );

    return (
        <Link to={item.path} className={baseClass}>
            {item.label}
        </Link>
    );
}
