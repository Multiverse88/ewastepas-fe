import React, { useState, useEffect } from "react";
import Address from "../components/Checkout/Address";
import Summary from "../components/Checkout/Summary";
import Schedule from "../components/Checkout/Schedule";
import PickUp from "../components/Checkout/PickUp";

const CheckoutPage = () => {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [pickupTime, setPickupTime] = useState("09:00");

  useEffect(() => {
    const today = new Date();
    const weekFromToday = new Date();
    weekFromToday.setDate(today.getDate() + 7);

    const formatDate = (date) => date.toISOString().split("T")[0];
    setMinDate(formatDate(today));
    setMaxDate(formatDate(weekFromToday));
  }, []);

  const timeOptions = Array.from({ length: 9 }, (_, i) => {
    const hour = (9 + i).toString().padStart(2, "0");
    return `${hour}:00`;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-8 pt-32">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-5 ml-24">Penjemputan</h2>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Address />
          <PickUp />
        </div>
        <div className="space-y-6">
          <Schedule
            minDate={minDate}
            maxDate={maxDate}
            pickupTime={pickupTime}
            setPickupTime={setPickupTime}
            timeOptions={timeOptions}
          />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
