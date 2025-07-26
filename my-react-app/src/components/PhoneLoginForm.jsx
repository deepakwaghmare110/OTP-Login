import { useState } from "react";

const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handlePhoneNumber}
          value={phoneNumber}
          placeholder="Enter your phone number."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhoneLoginForm;
