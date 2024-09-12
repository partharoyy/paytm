import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/signup`, data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        alert(response.data.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className='bg-green-50 min-h-screen flex items-center justify-center'>
      <div className='animate-fadeIn bg-white shadow-lg rounded-lg p-8 md:w-96 w-full'>
        <form onSubmit={handleSignUp} className='text-center'>
          {/* Heading */}
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />

          {/* First Name Input */}
          <InputBox
            placeholder='John'
            label={"First Name"}
            name='firstName'
            value={data.firstName}
            onChange={handleOnChange}
            type='text'
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Last Name Input */}
          <InputBox
            placeholder='Doe'
            label={"Last Name"}
            name='lastName'
            value={data.lastName}
            onChange={handleOnChange}
            type='text'
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Email Input */}
          <InputBox
            placeholder='johndoe@gmail.com'
            label={"Email"}
            name='email'
            value={data.email}
            onChange={handleOnChange}
            type='email'
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Password Input */}
          <InputBox
            placeholder='********'
            label={"Password"}
            name='password'
            value={data.password}
            onChange={handleOnChange}
            type='password'
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Sign Up Button */}
          <div className='pt-6'>
            <Button
              label={"Sign up"}
              type='submit'
              className='bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-md font-semibold transition duration-300 transform hover:scale-105'
            />
          </div>

          {/* Bottom Warning */}
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} className='mt-6' />
        </form>
      </div>
    </div>
  );
};

export default Signup;
