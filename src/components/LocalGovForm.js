import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, VStack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput, { PasswordInput } from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';
import { context as userContext } from '../context/user';
import { LgaSelect, StateSelect } from './common/Select';

export const Register = () => {
  const [view, setView] = useState("register");
  const navigate = useNavigate()
  const showAlert = useContext(modalContext);
  const { login } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState('');
  const [values, setValues] = useState({
    state: '',
    lga: '',
    lgaID: '',
    password: '',
    confirmPassword: ''
  });

  const isValuesComplete = () =>
    values.state.length &&
    values.lga.length &&
    values.lgaID.length &&
    values.password.length &&
    values.confirmPassword.length;

  const handleSubmit = async () => {
    setLoading(true);
    // do api call here
    try {
      if (values.password !== values.confirmPassword) {
        throw new Error('passwords do not match');
      }

      const res = await axios.post("/auth/register/lga", values);
      login(res.data.token, res.data.details);
      setLoading(false);
      showAlert({
        t: 'Sign up Successful',
        tp: 'success',
        d: 'Proceed to carry out any registration',
        bc: 'CONTINUE',
        bClick: () => {
          navigate('/history');
        }
      });
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        tp: 'error',
        d: e?.response?.data?.message || e?.message,
        bc: 'RETRY'
      });
    }
    setLoading(false);
  }

  if (view === "login") {
    return <Login />;
  }

  return (
    <Box
      w="100%"
    >
      <AuthFormTitle
        black="Register as"
        blue="Local Government"
      />

      <VStack
        spacing="8" 
      >
        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <StateSelect
              isLagos
              onChange={(e) => { 
                setState(e.target.value); 
                setValues(p => ({ ...p, state: e.target.value }))
              }}
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <LgaSelect
              state={state}
              onChange={(e) => setValues(p => ({ ...p, lga: e.target.value }))}
            />
          </WrapItem>
        </Wrap>

        <MainInput
          placeholder="Local Government unique ID"
          onChange={(e) => setValues(p => ({ ...p, lgaID: e.target.value }))}
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
          title="SIGN UP"
          alignSelf="flex-start"
          isLoading={loading}
          disabled={!isValuesComplete()}
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

const Login = () => {
  const [view, setView] = useState("login");
  const navigate = useNavigate()
  const showAlert = useContext(modalContext);
  const { login } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    lgaID: '',
    password: ''
  });

  const isValuesComplete = () =>
    values.lgaID.length &&
    values.password.length;

  const handleSubmit = async () => {
    setLoading(true);
    // do api call here
    try {
      const res = await axios.post("/auth/login/lga", values);
      login(res.data.token, res.data.details);
      setLoading(false);
      showAlert({
        t: 'Login Successful',
        tp: 'success',
        d: 'Proceed to carry out any registration',
        bc: 'CONTINUE',
        bClick: () => {
          navigate('/history');
        }
      });
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        tp: 'error',
        d: e?.response?.data?.message || e?.message,
        bc: 'RETRY'
      });
    }
    setLoading(false);
  }

  if (view === "register") {
    return <Register />;
  }

  return (
    <Box
      w="100%"
    >
      <AuthFormTitle
        black="Login as"
        blue="Local Government"
      />

      <VStack
        spacing="8" 
      >
        <MainInput
          placeholder="Local Government unique ID"
          onChange={(e) => setValues(p => ({ ...p, lgaID: e.target.value }))}
        />

        <PasswordInput
          placeholder="Password"
          onChange={(e) => setValues(p => ({ ...p, password: e.target.value}))}
        />

        <MainButton
          title="LOGIN"
          alignSelf="flex-start"
          isLoading={loading}
          disabled={!isValuesComplete()}
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

const LocalGovForm = () => {
  return <Register />;
}

export default LocalGovForm
