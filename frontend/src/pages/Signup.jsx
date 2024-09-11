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
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <form className='rounded-lg bg-white w-80 text-center p-2 h-max px-4' onSubmit={handleSignUp}>
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder='John'
            label={"First Name"}
            name='firstName'
            value={data.firstName}
            onChange={handleOnChange}
            type={"text"}
          />
          <InputBox
            placeholder='Doe'
            label={"Last Name"}
            name='lastName'
            value={data.lastName}
            onChange={handleOnChange}
            type={"text"}
          />
          <InputBox
            placeholder='johndoe@gmail.com'
            label={"Email"}
            name='email'
            value={data.email}
            onChange={handleOnChange}
            type={"email"}
          />
          <InputBox
            placeholder='123456'
            label={"Password"}
            name='password'
            value={data.password}
            onChange={handleOnChange}
            type={"password"}
          />
          <div className='pt-4'>
            <Button label={"Sign up"} type={"submit"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
