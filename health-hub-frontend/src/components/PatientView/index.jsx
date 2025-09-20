import { Calendar, Home } from "lucide-react";
import React, { useState } from "react";
import Appointments from "../Appointment";
import PatientDashboard from "../PatientDashboard";

const MenuItem = ({ icon: Icon, label, active, onClick }) => (
  <div
    className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-colors ${
      active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"
    }`}
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </div>
);

const PatientView = ({ userRole, userId }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <PatientDashboard userId={userId} />;

      case "appointments":
        return <Appointments userId={userId} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">HealthHub</h1>
          <p className="text-sm text-gray-600">Welcome, Patient</p>
        </div>
        <div className="space-y-2">
          <MenuItem
            icon={Home}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <MenuItem
            icon={Calendar}
            label="Appointments"
            active={activeTab === "appointments"}
            onClick={() => setActiveTab("appointments")}
          />
        </div>
      </nav>
      <main className="flex-grow p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
};

export default PatientView;
