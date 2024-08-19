import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";
import {
  MainBody,
  Mainwrapper,
  SignUpForm,
  SignUpWrapper,
  CreateAcct,
  Button,
  InputDiv,
  Label,
  Input,
  Div,
  Text
} from "./Auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyerLogin } from "../global/Slice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
const Nav= useNavigate()
const dispatch= useDispatch()

//   const handleLogin = () => {
//     setIsLoading(true);

//     if (!email || !password) {
    
const User = z.object({
  email: z.string().email({message: "must be a valid email"}),
  password: z.string({message: "Invalid Password"}),
})
const {register,handleSubmit,formState : {errors}, setError}= useForm({
  resolver: zodResolver(User),
})
  
const onSubmit = (data)=> {
  dispatch(buyerLogin( data))
Nav('/app/home')
}

  return (
    <MainBody>
      <Toaster />
      <Mainwrapper>
        <SignUpForm>
          <SignUpWrapper onSubmit={handleSubmit(onSubmit)}>
            <CreateAcct><h2>Login to Your Account</h2></CreateAcct>
            <InputDiv>
              <Label>Email address*</Label>
              <Input type="email" placeholder="Enter email" name="email" {...register("email")} required={true}/>
            </InputDiv>
          {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}

            <InputDiv>
              <Label>Password</Label>
              <Div>
                <Input type={showPassword ? 'password' : 'text'} placeholder="Enter your password" {...register("password")}required={true}  />
                {showPassword ? <FaRegEye size={20} onClick={() => setShowPassword(false)} /> : <FaRegEyeSlash size={20} onClick={() => setShowPassword(true)} />}
              </Div>
            </InputDiv>
          {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}

            <Button Bg disabled={isLoading} type="submit" >
              {isLoading ? <ClipLoader size="20px" color="#ffffff" /> : "Login"}
            </Button>
            <Text> Dont have an account  <span onClick={(()=> Nav("/signup"))}>SignUp</span></Text>
            
          </SignUpWrapper>
        </SignUpForm>
      </Mainwrapper>
    </MainBody>
  );
};

export default Login
