/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const InputPassword = ({ label, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2 relative">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-10 text-black"
      >
        {showPassword ? (
          <IoMdEye size={18} /> // Ubah ukuran sesuai keinginan
        ) : (
          <IoIosEyeOff size={18} /> // Ubah ukuran sesuai keinginan
        )}
      </button>
    </div>
  );
};

export default InputPassword;
