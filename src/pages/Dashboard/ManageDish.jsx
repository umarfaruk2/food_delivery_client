import React, { useEffect, useState } from "react";
import ManageDishMapTbody from "./ManageDishMapTbody";

const ManageDish = () => {
  const [userData, setUserData] = useState([]);

  console.log(userData)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/dish/all/search/",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data)
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mt-10 w-full h-screen mx-auto">
      <div className="overflow-x-auto">
        <div className="">
          <div className="bg-white shadow-md rounded-lg my-6 overflow-x-auto">
            <p className="text-main-color text-lg font-bold pt-4 pl-4">
              Manage Dish
            </p>
            <table className="text-left w-full border-collapse ">
              <thead>
                <tr className="">
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Name
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Description
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Restaurant Name
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Price
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Action
                  </th>
                </tr>
              </thead>
              {userData.map(item => <ManageDishMapTbody item = {item} />)}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDish;
