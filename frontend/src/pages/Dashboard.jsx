import React from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className='p-10'>
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
