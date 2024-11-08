/* eslint-disable react/prop-types */
const InputEmail = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-2 relative">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
    </div>
  );
};

export default InputEmail;
