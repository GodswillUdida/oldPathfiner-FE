import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaVideo,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [videos, setVideos] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEnrollments: 0,
    completions: 0,
  });
  const token = localStorage.getItem("token");

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "videos") {
          const res = await axios.get("http://localhost:5000/api/videos", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setVideos(res.data);
        } else if (activeTab === "users") {
          const res = await axios.get("http://localhost:5000/api/users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUsers(res.data);
        } else if (activeTab === "stats") {
          const res = await axios.get("http://localhost:5000/api/stats", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setStats(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [activeTab, token]);

  // Chart data
  const chartData = {
    labels: ["Users", "Enrollments", "Completions"],
    datasets: [
      {
        label: "Statistics",
        data: [stats.totalUsers, stats.totalEnrollments, stats.completions],
        backgroundColor: ["#1e3c72", "#2a5298", "#00ddeb"],
        borderColor: ["#1e3c72", "#2a5298", "#00ddeb"],
        borderWidth: 1,
      },
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64  bg-gradient-to-b from-[#1e3c72] to-[#2a5298] text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl bg-red-700 font-bold mb-32">
            Admin Dashboard
          </h2>
          <ul>
            <li
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
                activeTab === "videos"
                  ? "bg-white text-[#1e3c72]"
                  : "hover:bg-[#2a5298]"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              <FaVideo className="mr-3" /> Video Management
            </li>
            <li
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
                activeTab === "users"
                  ? "bg-white text-[#1e3c72]"
                  : "hover:bg-[#2a5298]"
              }`}
              onClick={() => setActiveTab("users")}
            >
              <FaUsers className="mr-3" /> User Management
            </li>
            <li
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
                activeTab === "stats"
                  ? "bg-white text-[#1e3c72]"
                  : "hover:bg-[#2a5298]"
              }`}
              onClick={() => setActiveTab("stats")}
            >
              <FaChartBar className="mr-3" /> Statistics
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center p-3 bg-[#2a5298] rounded-lg hover:bg-[white] hover:text-[#2a5298] duration-300 ease-in-out "
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold text-[green] mb-6">
          Welcome, Admin!
        </h1>

        {/* Video Management */}
        {activeTab === "videos" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#2a5298]">
                Video Management
              </h2>
              <button className="flex items-center px-4 py-2 bg-[#1e3c72] text-white rounded-lg hover:bg-[#2a5298]">
                <FaPlus className="mr-2" /> Add Video
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200 text-[#1e3c72]">
                  <th className="p-3">Title</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{video.title}</td>
                    <td className="p-3">{video.course.title}</td>
                    <td className="p-3">{video.duration} sec</td>
                    <td className="p-3 flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* User Management */}
        {activeTab === "users" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2a5298] mb-4">
              User Management
            </h2>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200 text-[#1e3c72]">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3 flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Statistics */}
        {activeTab === "stats" && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2a5298] mb-6">
              Overall Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#1e3c72] text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium">Total Users</h3>
                <p className="text-3xl font-bold">{stats.totalUsers}</p>
              </div>
              <div className="bg-[#2a5298] text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium">Total Enrollments</h3>
                <p className="text-3xl font-bold">{stats.totalEnrollments}</p>
              </div>
              <div className="bg-[#00ddeb] text-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium">Course Completions</h3>
                <p className="text-3xl font-bold">{stats.completions}</p>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "top" } },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
