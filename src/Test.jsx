import React, { useLayoutEffect, useState } from "react";
import Search from "./Search";

const Test = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    {
      id: null,
      name: null,
      username: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: {
          lat: null,
          lng: null,
        },
      },
      phone: null,
      website: null,
      company: {
        name: null,
        catchPhrase: null,
        bs: null,
      },
    },
  ]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[100svh] p-10 bg-[#e2e2e2]">
      <div className="mb-10 w-[80%] border border-1 border-[#4e4e4e] rounded-md bg-transparent px-5 flex items-center gap-3">
        <Search />
        <input 
          placeholder="Search users..."
          className="w-full h-10 bg-transparent border-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="border-1 border-[#000000] border w-[80%] h-96 shadow-md">
        <thead>
          <tr className="bg-[#ddd]">
            <th className="p-2">SN</th>
            <th className="p-2">FULL NAME</th>
            <th className="p-2">PHONE NUMBER</th>
            <th className="p-2">EMAIL ADDRESS</th>
            <th className="p-2">STREET</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              return (
                user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email?.toLowerCase().includes(searchTerm.toLowerCase())
              );
            })
            .map((user, index) => (
              <tr key={user.id} className="border border-1 border-black">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.phone?.split(" ")[0]}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.address?.street}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
