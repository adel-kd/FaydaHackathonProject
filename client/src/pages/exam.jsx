import React, { useState } from "react";

// Full list of exam events across months
const examEvents = [
  // August
  { date: "2025-08-01", type: "Orientation", location: "Main Hall A", available: true },
  { date: "2025-08-03", type: "Mock Theory Test", location: "Center B", available: true },
  { date: "2025-08-05", type: "Theory Exam", location: "Center A", available: false }, // unavailable
  { date: "2025-08-08", type: "Simulator Session", location: "Lab Room 1", available: true },
  { date: "2025-08-12", type: "Practical Exam", location: "Driving Field B", available: false },
  { date: "2025-08-16", type: "Retake Theory", location: "Center C", available: true },
  { date: "2025-08-19", type: "Final Practical", location: "Driving Field A", available: true },
  { date: "2025-08-30", type: "Result Publication", location: "Online Portal", available: true },

  // September
  { date: "2025-09-04", type: "Orientation", location: "Main Hall A", available: true },
  { date: "2025-09-07", type: "Theory Exam", location: "Center B", available: true },
  { date: "2025-09-10", type: "Simulator", location: "Lab 2", available: false }, // unavailable
  { date: "2025-09-15", type: "Practical Exam", location: "Driving Field A", available: true },
  { date: "2025-09-19", type: "Final Practical", location: "Driving Field B", available: true },
  { date: "2025-09-30", type: "Results Day", location: "Online Portal", available: true },

  // October
  { date: "2025-10-03", type: "Theory Exam", location: "Center A", available: false }, // unavailable
  { date: "2025-10-07", type: "Simulator Session", location: "Lab 3", available: true },
  { date: "2025-10-12", type: "Practical Test", location: "Driving Field C", available: true },
  { date: "2025-10-20", type: "Final Practical", location: "Driving Field A", available: true },
];

export default function ExamSchedule() {
  const [reservedIndex, setReservedIndex] = useState(null);
  const [message, setMessage] = useState("");

  const handleReserve = (index) => {
    const selected = examEvents[index];
    if (!selected.available) return;

    if (reservedIndex !== null) {
      setMessage("✅ You have already reserved an exam. One seat per applicant.");
      return;
    }

    setReservedIndex(index);
    setMessage(`🎉 Reserved "${selected.type}" on ${selected.date} at ${selected.location}.`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md mt-10 rounded-xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🚗 Driving License Exam Schedule</h1>
      <p className="mb-4 text-gray-600">
        Click an available schedule to reserve. Grayed-out dates are not open for reservation.
      </p>

      {message && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md border border-green-300">
          {message}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-blue-100 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4 border">Date</th>
              <th className="py-3 px-4 border">Event</th>
              <th className="py-3 px-4 border">Location</th>
              <th className="py-3 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {examEvents.map((event, index) => (
              <tr
                key={index}
                onClick={() => handleReserve(index)}
                className={`cursor-pointer transition ${
                  !event.available ? "opacity-40 cursor-not-allowed blur-[1px]" : ""
                } ${reservedIndex === index ? "bg-green-100 font-semibold" : "hover:bg-gray-100"}`}
              >
                <td className="py-2 px-4 border">{event.date}</td>
                <td className="py-2 px-4 border">{event.type}</td>
                <td className="py-2 px-4 border">{event.location}</td>
                <td className="py-2 px-4 border text-green-600">
                  {reservedIndex === index
                    ? "✔ Reserved"
                    : event.available
                    ? "Available"
                    : "Unavailable"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-center">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={reservedIndex === null}
        >
          {reservedIndex !== null ? "Reservation Confirmed" : "Select a Schedule to Reserve"}
        </button>
      </div>
    </div>
  );
}
