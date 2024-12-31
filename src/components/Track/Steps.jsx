import React from "react";
import {
  FaFileInvoice,
  FaMoneyBillWave,
  FaTruck,
  FaDownload,
} from "react-icons/fa";

const Steps = () => {
  const steps = [
    { icon: <FaFileInvoice className="text-lg" />, label: "Pesanan Dibuat" },
    {
      icon: <FaMoneyBillWave className="text-lg" />,
      label: "Pesanan Dibayarkan",
    },
    { icon: <FaTruck className="text-lg" />, label: "Pesanan Dikirimkan" },
    { icon: <FaDownload className="text-lg" />, label: "Pesanan Diterima" },
  ];

  return steps;
};

export default Steps;
