import React from "react";
import { Link, useLocation } from "react-router-dom";

const truncateText = (text, maxLength = 20) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-100 py-3 px-6 md:px-12 shadow-sm rounded-md">
      <ul className="flex space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="breadcrumb-text" title={value}>
                  {value}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-blue-500 hover:underline capitalize"
                >
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
