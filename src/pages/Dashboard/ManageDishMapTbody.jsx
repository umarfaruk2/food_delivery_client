import React from "react";
import { Link } from "react-router-dom";

const ManageDishMapTbody = (props) => {
  const { name, description, restaurant_name, price } = props.item;
  const limit = 2;
 
const new_description = description.split(' ').slice(0, limit).join(' ');
  return (
    <tbody>
      <tr className="font-medium">
        <td className="py-4 px-6">{name}</td>
        <td className="py-4 px-6">{new_description}...</td>
        <td className="py-4 px-6">{restaurant_name}</td>
        <td className="py-4 px-6">{price}</td>
        <td className="py-4 px-6">
            <Link className="text-white bg-cyan-400 text-sm rounded-md p-1">Update</Link>
            <button className="text-white bg-red-400 rounded-md p-1 ml-1 text-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageDishMapTbody;
