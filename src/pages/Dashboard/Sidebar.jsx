import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="grid grid-flow-row md:grid-cols-5 grid-cols-1">
      {/* dashboard sidebar */}
      <div className="bg-gray-700 md:h-screen md:py-0 py-5">
        <div className="md:mt-10 ml-10">
          <ul className="md:space-y-5 space-y-3">
            <li className="text-white flex items-center space-x-2">
              {/* <MdArrowBack />{" "} */}
              <Link to="/" className="text-lg">
                Home
              </Link>
            </li>
            <li className="text-white flex items-center space-x-2">
              {/* <MdDashboard />{" "} */}
              <Link to="/dashboard" className="text-lg">
                Create New Dish
              </Link>
            </li>
            <li className="text-white flex items-center space-x-2">
              {/* <BsJournalMedical />{" "} */}
              <Link to="" className="text-lg">
                Order List
              </Link>
            </li>
            <li className="text-white flex items-center space-x-2">
              {/* <AiOutlineUsergroupAdd />{" "} */}
              <Link to="" className="text-lg">
                Manage Dish
              </Link>
            </li>
            <li className="text-white flex items-center space-x-2">
              {/* <AiOutlineUsergroupAdd />{" "} */}
              <Link to="" className="text-lg">
                Manage Order
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* dashboard main  content */}
      <div className="bg-[#F4FDFB] w-full col-span-4 ">
        <div className="w-[90%] mx-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
