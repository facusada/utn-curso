function InputField({ label, name, type = "text", placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
          style={{ color: "black", display: 'flex' }}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ color: "black" }}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default InputField