// SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, setError } from '../Components/Global/feature';
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";
import {
  MainBody,
  Mainwrapper,
  Select,
  SignUpForm,
  SignUpWrapper,
  CreateAcct,
  Button,
  InputDiv,
  Label,
  Input,
  PasswordCheck,
  Div,
  Text
} from "./Auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../global/Slice";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordErrorLow, setPasswordErrorLow] = useState(false);
  const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
  const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
  const [emailErrorShow, setEmailErrorShow] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const { error } = useSelector(state => state);

const User = z.object({
  email: z.string().email({message: "must be a valid email"}),
  name: z.string(),
  role: z.string(),
  password: z.string({message:"must be a string"}).min(5, {message: "must be more than 5 characters"})
  .regex(/^(?=.*\d)(?=.*[!@#$%^&])[a-zA-Z\d!@#$%^&]+$/, {message: "wrong format"})
})
// ^(?=.*\d)(?=.*[!@#$%^&])[a-zA-Z\d!@#$%^&]{8,}$


const {register,handleSubmit,formState : {errors}, setError}= useForm({
  resolver: zodResolver(User),
})

const onSubmit =(data) => {
  dispatch(signUp(data))
  navigate('/')
  console.log(data);
  
}





   


  return (
    <MainBody>
      <Toaster />
      <Mainwrapper>
        <SignUpForm>
          <SignUpWrapper onSubmit={handleSubmit(onSubmit)}>
            <CreateAcct><h2>Create Your Account</h2></CreateAcct>
            <InputDiv>
              <Label>Fullname*</Label>
              <Input type="text" placeholder="Enter name" name="name"{...register("name")} required={true} />
            </InputDiv>
          {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}

            <InputDiv>
              <Label>Email address*</Label>
              <Input type="email" placeholder="Enter email"  name ="email" required ={true} {...register("email")}/>
           
            </InputDiv>
          {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}

            <InputDiv>
            <Label>Role</Label>
            <Div>
                <Select {...register("role")} required={true}>
                    <option value="Role">Role</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Buyer">Buyer</option>
                </Select>
            </Div>
          {errors.role && <span style={{color:"red"}}>{errors.role.message}</span>}

              <Label style={{marginTop: "20px"}}>Password</Label>
              <Div >
                <Input type={showPassword ? 'password' : 'text'} placeholder="Create a password" name="password" width outline height border {...register("password")}/>
                {showPassword ? <FaRegEye size={20} onClick={() => setShowPassword(false)} /> : <FaRegEyeSlash size={20} onClick={() => setShowPassword(true)} />}
              </Div>
            </InputDiv>


         
            
            <Button Bg disabled={isLoading} type="submit" >
              {isLoading ? <ClipLoader size="20px" color="#ffffff" /> : "Sign Up"}
            </Button>
            {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}

            {/* <p style={{ color: "red", fontSize: "8px" }}>{error}</p> */}
            <Text> Already have account  <span onClick={(()=> navigate("/"))}>Login</span></Text>
          </SignUpWrapper>
        </SignUpForm>
      </Mainwrapper>
    </MainBody>
  );
};

export default SignUp
