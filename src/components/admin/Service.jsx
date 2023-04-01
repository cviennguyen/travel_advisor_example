import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../apis/axios";
import { toast } from "react-toastify";

const SERVICE_URL = "/service";
const Service = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [services, setServices] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(SERVICE_URL, config);
      setServices(data?.data?.services);
      console.log(data?.data?.services);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteService = async (id) => {
    try {
      if (confirm("Are you sure to delete?") == true) {
        await axios.delete(`service/${id}`, config);
        getData();
        toast.success("Delete service successfully");
      } else {
        toast.error("You cancel delete service");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto py-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service) => (
              <tr key={service.key} class="bg-white border-b  ">
                <td class="px-6 py-4">{service?.name}</td>
                <td class="px-6 py-4">{service?.category}</td>
                <td class="px-6 py-4">{service?.location}</td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => deleteService(service.id)}
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin-panel/services/servicedetail/${service?.id}`}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 rounded"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Service;
