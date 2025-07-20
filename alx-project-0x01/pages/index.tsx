import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces"; // Optional: create and use a proper type/interface for user

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]); // ✅ State to hold users

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // ✅ Fetch user data
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 overflow-y-auto">
        <div className="text-center my-8">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
              city={user.address.city}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Home;
