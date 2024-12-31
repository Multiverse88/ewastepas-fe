/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const InputPassword = ({
  label,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative mb-2" data-twe-input-wrapper-init>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`
          peer block w-full rounded border px-3 py-[0.50rem] outline-none transition-all  mt-5
          duration-200 ease-linear min-h-[auto]
          border-gray-300
          focus:placeholder:opacity-100 peer-focus:ring-2 peer-focus:ring-primary
          motion-reduce:transition-none
          [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
        `}
      />
      <label
        className={`
        pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate 
        text-gray-700 transition-all duration-200 ease-out bg-white text-sm 
        ${
          value
            ? "-translate-y-[0.9rem]"
            : "mt-[0.57rem] peer-focus:mt-0 peer-focus:-translate-y-[0.9rem]"
        }
        ${value ? "peer-focus:text-gray-700" : "peer-focus:text-gray-700"}
        motion-reduce:transition-none
      `}
      >
        {label}
      </label>
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-3 text-black focus:outline-none"
      >
        {showPassword ? <IoMdEye size={18} /> : <IoIosEyeOff size={18} />}
      </button>
    </div>
  );
};

export default InputPassword;
