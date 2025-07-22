// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");

      setFormData((prev) => {
        const updated = { ...prev };

        if (keys[0] === "address") {
          if (keys[1] === "geo") {
            updated.address.geo = {
              ...prev.address.geo,
              [keys[2]]: value,
            };
          } else {
            updated.address = {
              ...prev.address,
              [keys[1]]: value,
            };
          }
        } else if (keys[0] === "company") {
          updated.company = {
            ...prev.company,
            [keys[1]]: value,
          };
        }

        return updated;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        {/* Top-level fields */}
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Address fields */}
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Street"
          name="address.street"
          value={formData.address.street}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Suite"
          name="address.suite"
          value={formData.address.suite}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="City"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Zipcode"
          name="address.zipcode"
          value={formData.address.zipcode}
          onChange={handleChange}
        />

        {/* Geo fields */}
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Latitude"
          name="address.geo.lat"
          value={formData.address.geo.lat}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Longitude"
          name="address.geo.lng"
          value={formData.address.geo.lng}
          onChange={handleChange}
        />

        {/* Company fields */}
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Company Name"
          name="company.name"
          value={formData.company.name}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="Catch Phrase"
          name="company.catchPhrase"
          value={formData.company.catchPhrase}
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          placeholder="BS"
          name="company.bs"
          value={formData.company.bs}
          onChange={handleChange}
        />

        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

