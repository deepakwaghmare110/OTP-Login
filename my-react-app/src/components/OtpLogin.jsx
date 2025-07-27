import { useRef, useState, useEffect } from "react";

const OtpLogin = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp);

  const handleChange = (e) => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-input"
          />
        );
      })}
    </div>
  );
};

export default OtpLogin;
