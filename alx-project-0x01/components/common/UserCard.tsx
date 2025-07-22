
import React from "react";
import { UserProps } from "@/interfaces"; // adjust path as needed


const UserCard: React.FC<UserProps> = ({ name, email, username, address, company }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-500">City: {address?.city}</p>
      <p className="text-sm text-gray-500">Company: {company?.name}</p>
    </div>
  );
};

export default UserCard;

 