import { useState } from "react";

const OtpLogin = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp);

  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={() => handleKeyDown(index, e)}
            className="otp-input"
          />
        );
      })}
    </div> // 1 2 3 4
  );
};

export default OtpLogin;
