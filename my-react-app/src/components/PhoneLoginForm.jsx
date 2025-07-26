import { useState } from "react";

const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Phone Number Validation

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    setShowOtpInput(true);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            placeholder="Enter your phone number."
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>OTP sent to {phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneLoginForm;
