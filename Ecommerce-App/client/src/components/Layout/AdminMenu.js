import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h1>Admin Panel</h1>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            create category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            create product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            users
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
