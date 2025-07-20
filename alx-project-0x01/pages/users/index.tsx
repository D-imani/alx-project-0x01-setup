import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

const UsersPage: React.FC = () => {
  return (
    <div className="p-6">
        <Header />
      <h1 className="text-2xl font-semibold">Users</h1>
      <p>This is a placeholder for the users page.</p>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default UsersPage;