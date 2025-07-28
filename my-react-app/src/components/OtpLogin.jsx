import { useRef, useState, useEffect } from "react";

const OtpLogin = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]); // useRef is saved in inputRefs variable
  console.log(inputRefs);
  // console.log(otp);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1); // 123 012  23 -1
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
  };

  const handleClick = () => {};
  const handleKeyDown = () => {};
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
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
