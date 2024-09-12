import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [data, setData] = useState({
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

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/signin`, data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        alert(response.data.message || "Sign in failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className='bg-green-50 min-h-screen flex items-center justify-center'>
      <div className='animate-fadeIn bg-white shadow-lg rounded-lg p-8 md:w-96 w-full'>
        {/* Form */}
        <form onSubmit={handleSignIn} className='text-center'>
          {/* Heading */}
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />

          {/* Email Input */}
          <InputBox
            placeholder='johndoe@john.com'
            label={"Email"}
            onChange={handleOnChange}
            name='email'
            value={data.email}
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Password Input */}
          <InputBox
            placeholder='********'
            label={"Password"}
            onChange={handleOnChange}
            name='password'
            value={data.password}
            type='password'
            className='my-4 border border-green-200 focus:ring-2 focus:ring-green-500 transition-all'
          />

          {/* Sign In Button */}
          <div className='pt-6'>
            <Button
              label={"Sign in"}
              type='submit'
              className='bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-md font-semibold transition duration-300 transform hover:scale-105'
            />
          </div>

          {/* Bottom Warning */}
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} className='mt-6' />
        </form>
      </div>
    </div>
  );
};

export default Signin;
