import React, { useState, useContext } from 'react';
import { Box, VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput, { PasswordInput } from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';

export const Register = () => {
  const [view, setView] = useState("register");
  const showAlert = useContext(modalContext);

  const handleSubmit = () => {
    showAlert({
      t: 'Sign up Successful',
      tp: 'success',
      d: 'Proceed to carry out any registration',
      bc: 'GOT IT'
    });
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
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Registration Number"
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Mobile Number"
            />
          </WrapItem>
        </Wrap>

        <MainInput
          placeholder="Official e-mail"
        />

        <MainInput
          placeholder="Address"
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <PasswordInput
              placeholder="Password"
            />
          </WrapItem>

          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <PasswordInput
              placeholder="Confirm password"
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
  const [view, setView] = useState("login");
  const showAlert = useContext(modalContext);

  const handleSubmit = () => {
    showAlert({
      t: 'Invalid Data',
      tp: 'error',
      d: 'Cannot login with the provided credentials',
      bc: 'GOT IT'
    });
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
          placeholder="Hospital Name"
        />

        <MainInput
          placeholder="Official e-mail"
        />

        <PasswordInput
          placeholder="Password"
        />

        <MainButton
          title="Login"
          alignSelf="flex-start"
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
