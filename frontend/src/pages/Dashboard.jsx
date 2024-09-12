import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className='bg-green-50 min-h-screen p-10'>
      <div className='animate-fadeIn bg-white shadow-lg rounded-lg p-6 md:p-8'>
        {/* Balance Component */}
        <div className='mb-8'>
          <Balance value={"10,000"} />
        </div>

        {/* Users Component */}
        <div className='bg-green-100 rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-bold text-green-900 mb-4 animate-slideUp'>Users</h2>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
