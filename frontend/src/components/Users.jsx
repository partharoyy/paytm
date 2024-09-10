import { useCallback, useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import { debounce } from "../utils/debounce";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterOnChange = (e) => {
    setFilter(e.target.value);
  };

  const debouncedOnChange = useCallback(debounce(handleFilterOnChange, 300), []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/user/search?filter=` + filter)
      .then((response) => setUsers(response.data.users));
  }, [filter]);

  return (
    <>
      <div className='font-bold mt-6 text-lg'>Users</div>
      <div className='my-2'>
        <input
          type='text'
          placeholder='Search users...'
          className='w-full px-2 py-1 border rounded border-slate-200'
          onChange={debouncedOnChange}
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </>
  );
};

export default Users;
