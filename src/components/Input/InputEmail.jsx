/* eslint-disable react/prop-types */
const InputEmail = ({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  errorMessage = "",
}) => {
  const hasError = errorMessage.length > 0;

  return (
    <div className="relative mb-2" data-twe-input-wrapper-init>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`
          peer block w-full rounded border px-3 mt-5 py-[0.50rem] outline-none transition-all 
          duration-200 ease-linear min-h-[auto]
          ${hasError ? "border-red-500" : "border-gray-300"}
          focus:placeholder:opacity-100 peer-focus:text-gray-800
          data-[twe-input-state-active]:placeholder:opacity-100
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
        ${
          value || hasError
            ? "peer-focus:text-gray-800"
            : "peer-focus:text-gray-800"
        }
        motion-reduce:transition-none
      `}
      >
        {label}
      </label>
      {hasError && (
        <div className="text-red-500 flex text-base">{errorMessage}</div>
      )}
    </div>
  );
};

export default InputEmail;
