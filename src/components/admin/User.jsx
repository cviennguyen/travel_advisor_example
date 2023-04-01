import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../apis/axios";
import { toast } from "react-toastify";

const USER_URL = "/user";
const User = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(USER_URL, config);
      setUsers(data?.data?.users);
      console.log(data?.data?.users);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (id) => {
    try {
      if (confirm("Are you sure to delete?") == true) {
        await axios.delete(`user/${id}`, config);
        getData();
        toast.success("Delete user successfully");
      } else {
        toast.error("You cancel delete user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="relative overflow-x-auto py-10">
      <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Phone
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} class="bg-white border-b  ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 ">
                {user?.name}
              </th>
              <td class="px-6 py-4">{user?.email}</td>
              <td class="px-6 py-4">{user?.phone}</td>
              <td class="px-6 py-4">{user?.role}</td>
              <td class="px-6 py-4">{user?.website}</td>
              <td class="px-6 py-4">
                <button
                  onClick={() => deleteUser(user?.id)}
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                <Link
                  to={`/admin-panel/users/userprofile/${user?.id}`}
                  class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-5 rounded"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
