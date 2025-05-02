// import React, { useState } from "react";
// import { useVideos, useUsers, useStats, logout } from "../services/apiService";
// import {
//   FaVideo,
//   FaUsers,
//   FaChartBar,
//   FaSignOutAlt,
//   FaPlus,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";
// // import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminDashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("videos");

//   // Fetch data using React Query
//   const {
//     data: videos = [],
//     isLoading: loadingVideos,
//     error: errorVideos,
//   } = useVideos();
//   const {
//     data: users = [],
//     isLoading: loadingUsers,
//     error: errorUsers,
//   } = useUsers();
//   const {
//     data: stats,
//     isLoading: loadingStats,
//     error: errorStats,
//   } = useStats();

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gradient-to-b from-[#1e3c72] to-[#2a5298] text-white p-6 flex flex-col justify-between">
//         <div>
//           <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
//           <ul>
//             {["videos", "users", "stats"].map((tab) => (
//               <li
//                 key={tab}
//                 className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
//                   activeTab === tab
//                     ? "bg-white text-[#1e3c72]"
//                     : "hover:bg-[#2a5298]"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === "videos" && <FaVideo className="mr-3" />}
//                 {tab === "users" && <FaUsers className="mr-3" />}
//                 {tab === "stats" && <FaChartBar className="mr-3" />}
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <button
//           onClick={logout}
//           className="flex items-center p-3 rounded-lg hover:bg-[#2a5298]"
//         >
//           <FaSignOutAlt className="mr-3" /> Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto">
//         <h1 className="text-3xl font-bold text-green-700 mb-6">
//           Welcome, Admin!
//         </h1>

//         {/* Video Management */}
//         {activeTab === "videos" && (
//           <div className="bg-white p-6 rounded-xl shadow-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold text-[#2a5298]">
//                 Video Management
//               </h2>
//               <button className="flex items-center px-4 py-2 bg-[#1e3c72] text-white rounded-lg hover:bg-[#2a5298]">
//                 <FaPlus className="mr-2" /> Add Video
//               </button>
//             </div>

//             {loadingVideos ? (
//               <p>Loading videos...</p>
//             ) : errorVideos ? (
//               <p className="text-red-500">{errorVideos.message}</p>
//             ) : videos.length === 0 ? (
//               <p className="text-gray-500">No videos available.</p>
//             ) : (
//               <table className="w-full text-left">
//                 <thead>
//                   <tr className="bg-gray-200 text-[#1e3c72]">
//                     <th className="p-3">Title</th>
//                     <th className="p-3">Course</th>
//                     <th className="p-3">Duration</th>
//                     <th className="p-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videos.map((video) => (
//                     <tr key={video.id} className="border-b hover:bg-gray-50">
//                       <td className="p-3">{video.title}</td>
//                       <td className="p-3">{video.course?.title || "N/A"}</td>
//                       <td className="p-3">{video.duration} sec</td>
//                       <td className="p-3 flex space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         )}

//         {/* User Management */}
//         {activeTab === "users" && (
//           <div className="bg-white p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-semibold text-[#2a5298] mb-4">
//               User Management
//             </h2>
//             {loadingUsers ? (
//               <p>Loading users...</p>
//             ) : errorUsers ? (
//               <p className="text-red-500">{errorUsers.message}</p>
//             ) : users.length === 0 ? (
//               <p className="text-gray-500">No users found.</p>
//             ) : (
//               <table className="w-full text-left">
//                 <thead>
//                   <tr className="bg-gray-200 text-[#1e3c72]">
//                     <th className="p-3">Name</th>
//                     <th className="p-3">Email</th>
//                     <th className="p-3">Role</th>
//                     <th className="p-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id} className="border-b hover:bg-gray-50">
//                       <td className="p-3">{user.name}</td>
//                       <td className="p-3">{user.email}</td>
//                       <td className="p-3">{user.role}</td>
//                       <td className="p-3 flex space-x-2">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         )}

//         {/* Statistics */}
//         {activeTab === "stats" && (
//           <div className="bg-white p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-semibold text-[#2a5298] mb-4">
//               Platform Statistics
//             </h2>
//             {loadingStats ? (
//               <p>Loading statistics...</p>
//             ) : errorStats ? (
//               <p className="text-red-500">{errorStats.message}</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
//                   <p className="text-xl font-bold text-[#1e3c72]">
//                     {stats?.totalUsers || 0}
//                   </p>
//                   <p className="text-gray-600">Total Users</p>
//                 </div>
//                 <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
//                   <p className="text-xl font-bold text-green-700">
//                     {stats?.totalEnrollments || 0}
//                   </p>
//                   <p className="text-gray-600">Total Enrollments</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
