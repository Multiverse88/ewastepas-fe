import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import SideBar from "../components/SideBar";
import StatusOrder from "../components/Track/StatusOrder";
import CourierInfo from "../components/Track/CourierInfo";
import Address from "../components/Track/Address";
import ListOrder from "../components/Track/ListOrder";

const TrackPage = () => {
  const [status, setStatus] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row pt-24 sm:pt-36 px-4 lg:px-10 ">
      <div className="h-auto lg:h-screen sticky top-0 lg:w-1/4">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-full bg-white p-6 rounded-xl border shadow lg:ml-8 mt-6 lg:mt-0 ">
        <div className="flex items-center mb-4">
          <Link to="/OrderPage" className="flex items-center text-gray-600">
            <IoIosArrowBack className="mr-1" />
            Back
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-6">Status Pesanan</h2>

        <StatusOrder status={status} handleStatusChange={setStatus} />

        {/* Content Layout */}
        <div className="w-full mt-8 grid lg:grid-cols-2 gap-6">
          <div className="order-2 lg:order-1">
            <CourierInfo />
          </div>
          <div className="order-1 lg:order-2">
            <ListOrder className="order-2 lg:order-1" />
          </div>
          <div className="order-3 lg:order-3">
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
