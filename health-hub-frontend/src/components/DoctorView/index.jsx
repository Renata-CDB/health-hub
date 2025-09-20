import { Home } from "lucide-react";
import React, { useState } from "react";
import DoctorDashboard from "../DoctorDashboard";
import { MenuItem } from "../SharedComponents";

const DoctorView = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      default:
        return <DoctorDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">HealthHub</h1>
          <p className="text-sm text-gray-600">Logged in as: {userRole}</p>
        </div>
        <div className="space-y-2">
          <MenuItem
            icon={Home}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
        </div>
      </nav>
      <main className="flex-grow p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
};

export default DoctorView;
