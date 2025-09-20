import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import DoctorView from "./components/DoctorView";
import PatientView from "./components/PatientView";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserRole = localStorage.getItem("userRole");
    const storedUserId = localStorage.getItem("userId");

    if (token && storedUserRole && storedUserId) {
      setIsLoggedIn(true);
      setUserRole(storedUserRole);
      setUserId(storedUserId);
    }
  }, []);

  const handleLoginSuccess = (token, email, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userId", email);
    setIsLoggedIn(true);
    setUserRole(role);
    setUserId(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserRole(null);
    setUserId(null);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
      {userRole && userRole === "patient" ? (
        <PatientView userRole={userRole} userId={userId} />
      ) : (
        <DoctorView userRole={userRole} />
      )}
    </div>
  );
};

export default App;
