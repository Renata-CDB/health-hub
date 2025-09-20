import React, { useState, useEffect } from "react";
import { patientService, appointmentService } from "../../services/api";

const PatientDashboard = ({ userId }) => {
  const [patient, setPatient] = useState(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setError("User ID is missing");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const patientResponse = await patientService.getPatient(userId);
        setPatient(patientResponse.data);

        const appointmentsResponse = await appointmentService.getAppointments({
          patientId: userId,
          status: "scheduled",
        });
        setUpcomingAppointments(appointmentsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setError("Failed to load patient data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>No patient data available</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Welcome, {patient.firstName}
      </h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Your Information</h3>
        <p>
          Name: {patient.firstName} {patient.lastName}
        </p>
        <p>
          Date of Birth: {new Date(patient.dateOfBirth).toLocaleDateString()}
        </p>
        <p>Contact: {patient.contactNumber}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Upcoming Appointments</h3>
        {upcomingAppointments.length > 0 ? (
          <ul>
            {upcomingAppointments
              .sort(
                (a, b) =>
                  new Date(a.dateTime).getDate() -
                  new Date(b.dateTime).getDate()
              )
              .map((appointment) => (
                <li key={appointment.id} className="mb-2">
                  {new Date(appointment.dateTime).toLocaleString()}
                </li>
              ))}
          </ul>
        ) : (
          <p>No upcoming appointments</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
