import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import axios from "axios";
import MainButton from './common/Button';
import MainInput, { PasswordInput } from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';
import { context as userContext } from '../context/user';

export const Register = () => {
  const navigate = useNavigate();
  const showAlert = useContext(modalContext);
  const { login } = useContext(userContext);
  const [view, setView] = useState("register");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    regNumber: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const isValuesComplete = () =>
    values.name.length &&
    values.regNumber.length &&
    values.phoneNumber.length &&
    values.email.length &&
    values.address.length &&
    values.password.length &&
    values.confirmPassword.length;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (values.password !== values.confirmPassword) {
        throw new Error('passwords do not match');
      }

      const res = await axios.post("/auth/register/hospital", values);
      login(res.data.token, res.data.details);
      setLoading(false);
      showAlert({
        t: 'Sign up Successful',
        tp: 'success',
        d: 'Proceed to carry out any registration',
        bc: 'PROCEED',
        bClick: () => {
          navigate('/birth-reg');
        } 
      });
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        d: e?.response?.data?.message || e?.message,
        tp: 'error',
        bc: 'RETRY',
      });
    }
    setLoading(false);
  }

  if (view !== "register") {
    return <Login /> 
  }

  return (
    <Box
      w="100%"
    >
      <AuthFormTitle
        black="Sign up as"
        blue="Medical Center"
      />

      <VStack
        spacing="8" 
      >
        <MainInput
          placeholder="Hospital Name"
          onChange={(e) => setValues(p => ({ ...p, name: e.target.value }))}
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Registration Number"
              onChange={(e) => setValues(p => ({ ...p, regNumber: e.target.value }))}
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Mobile Number"
              type="number"
              onChange={(e) => setValues(p => ({ ...p, phoneNumber: e.target.value }))}
            />
          </WrapItem>
        </Wrap>

        <MainInput
          placeholder="Official e-mail"
          onChange={(e) => setValues(p => ({ ...p, email: e.target.value }))}
        />

        <MainInput
          placeholder="Address"
          onChange={(e) => setValues(p => ({ ...p, address: e.target.value }))}
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <PasswordInput
              placeholder="Password"
              onChange={(e) => setValues(p => ({ ...p, password: e.target.value }))}
            />
          </WrapItem>

          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <PasswordInput
              placeholder="Confirm password"
              onChange={(e) => setValues(p => ({ ...p, confirmPassword: e.target.value }))}
            />
          </WrapItem>
        </Wrap>

        <Text color="txt.muted" alignSelf="flex-start">
          By clicking 'sign up' it means you agree with our {" "}
          <Text 
            as="a" 
            textDecoration="underline" 
            cursor="pointer"
          >
            terms and conditions
          </Text>
        </Text>

        <MainButton
          title="Sign up"
          alignSelf="flex-start"
          disabled={!isValuesComplete()}
          isLoading={loading}
          onClick={handleSubmit}
        />

        <Text color="black" alignSelf="flex-start">
          Already have an account? {" "}
          <Text
            color="txt.primary"  
            fontWeight="700"
            as="button"
            onClick={() => setView("login")}
          >
            Log in
          </Text>
        </Text>
      </VStack>

    </Box> 
  );
};

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(userContext);
  const [view, setView] = useState("login");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const showAlert = useContext(modalContext);

  const isValuesComplete = () =>
    values.email.length &&
    values.password.length;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/login/hospital", values);
      login(res.data.token, res.data.details);
      setLoading(false);
      showAlert({
        t: 'Login Successful',
        tp: 'success',
        d: 'Proceed to carry out any registration',
        bc: 'PROCEED',
        bClick: () => {
          navigate('/birth-reg');
        } 
      });
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        d: e?.response?.data?.message || e?.message,
        tp: 'error',
        bc: 'RETRY',
      });
    }
    setLoading(false);
  }

  if (view !== "login") {
    return <Register />
  }

  return (
    <Box
      w="100%"
    >
      <AuthFormTitle
        black="Log in as"
        blue="Medical Center"
      />

      <VStack spacing="8">
        <MainInput
          placeholder="Official e-mail"
          onChange={(e) => setValues(p => ({ ...p, email: e.target.value}))}
        />

        <PasswordInput
          placeholder="Password"
          onChange={(e) => setValues(p => ({ ...p, password: e.target.value}))}
        />

        <MainButton
          title="Login"
          alignSelf="flex-start"
          disabled={!isValuesComplete()}
          isLoading={loading}
          onClick={handleSubmit}
        />

        <Text color="black" alignSelf="flex-start">
          Don't have an account? {" "}
          <Text
            color="txt.primary"  
            fontWeight="700"
            as="button"
            onClick={() => setView("register")}
          >
            Sign up 
          </Text>
        </Text>
      </VStack>
    </Box> 
  );
};
