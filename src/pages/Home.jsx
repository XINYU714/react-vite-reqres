import React, { useEffect, useState } from "react";
import Number from "../components/Number";
const Home = () => {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="row justify-content-between g-5">
      {users.map((numberData) => {
        return (
          <Number
            key={numberData.id}
            {...numberData}
          />
        );
      })}
    </div>
  );
};

export default Home;
