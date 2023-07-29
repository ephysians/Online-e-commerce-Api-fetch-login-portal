import React, { useEffect, useState } from "react";
import Search from "./Search";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: null,
      title: null,
      price: null,
      category: null,
      description: null,
      image: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch();
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[4rem_1fr] lg:grid-cols-[15rem_1fr]">
      <nav className="shadow-sm hidden md:block"></nav>
      <main className="grid grid-rows-[5rem_1fr]">
        <header className="shadow-sm z-10 flex items-center justify-start px-5">
          <h1 className="font-bold text-3xl">ALL USERS</h1>
        </header>
        <section className="bg-teal p-10">
          <div className="mb-10 border border-1 border-[#c4c4c4] rounded-md bg-transparent px-5 flex items-center gap-3">
          <Search />
            <input
              placeholder="Search products..."
              className="w-full h-10 bg-transparent border-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <section className="flex flex-wrap gap-10 bg-[teal] justify-evenly">
            {users
              .filter((user) => {
                return user.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
              })
              .map(({ id, image, title, price }) => (
                <section
                  key={id}
                  className="rounded-md h-72 w-56 shadow-sm bg-white p-3"
                >
                  <img src={image} alt="" className="h-36 mx-auto" />
                  <hr className="my-2" /> 
                  <h3 title={title} className="text-center">{title?.slice(0, 20)}</h3>
                  <p className="font-extrabold">NGN {price}</p>
                </section>
              ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from "react";
import Search from "./Search";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: null,
      title: null,
      price: null,
      category: null,
      description: null,
      image: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch();
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[4rem_1fr] lg:grid-cols-[15rem_1fr]">
      <nav className="shadow-sm hidden md:block"></nav>
      <main className="grid grid-rows-[5rem_1fr]">
        <header className="shadow-sm z-10 flex items-center justify-start px-5">
          <h1 className="font-bold text-3xl">ALL USERS</h1>
        </header>
        <section className="bg-teal p-10">
          <div className="mb-10 border border-1 border-[#c4c4c4] rounded-md bg-transparent px-5 flex items-center gap-3">
          <Search />
            <input
              placeholder="Search products..."
              className="w-full h-10 bg-transparent border-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <section className="flex flex-wrap gap-10 bg-[teal] justify-evenly">
            {users
              .filter((user) => {
                return user.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
              })
              .map(({ id, image, title, price }) => (
                <section
                  key={id}
                  className="rounded-md h-72 w-56 shadow-sm bg-white p-3"
                >
                  <img src={image} alt="" className="h-36 mx-auto" />
                  <hr className="my-2" /> 
                  <h3 title={title} className="text-center">{title?.slice(0, 20)}</h3>
                  <p className="font-extrabold">NGN {price}</p>
                </section>
              ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
