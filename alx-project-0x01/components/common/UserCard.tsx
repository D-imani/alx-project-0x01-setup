import React from "react";
import {UserProps} from "@/interfaces"


const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-md mx-auto bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-purple-600">{name}</h2>
      <p className="text-sm text-gray-700">📧 {email}</p>
      <p className="text-sm text-gray-700">📱 {phone}</p>
      <p className="text-sm text-gray-700">🌐 {website}</p>
      <p className="text-sm text-gray-700">🏢 {company}</p>
      <p className="text-sm text-gray-700">📍 {address}</p>
    </div>
  );
};

export default UserCard;