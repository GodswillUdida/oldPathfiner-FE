import React from "react";
import { FaVideo, FaUsers, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { id: "videos", label: "Video Management", icon: <FaVideo /> },
    { id: "users", label: "User Management", icon: <FaUsers /> },
    { id: "stats", label: "Statistics", icon: <FaChartBar /> },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-[#1e3c72] to-[#2a5298] text-white p-6 flex flex-col justify-between min-h-screen md:w-72 lg:w-80">
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">
          Pathfinder Admin
        </h2>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-white text-[#1e3c72]"
                  : "hover:bg-[#35568c]"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center p-3 rounded-lg hover:bg-[#35568c] transition-colors duration-200"
      >
        <FaSignOutAlt className="mr-3" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
