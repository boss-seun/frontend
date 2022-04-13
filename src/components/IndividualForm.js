import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';
import { StateSelect, LgaSelect } from './common/Select';
import { OtpModal } from "./common/Modal";

import { context as modalContext } from '../context/modal';
import { context as userContext } from '../context/user';
import axios from 'axios';


const IndividualForm = () => {
  const navigate = useNavigate();
  const showAlert = useContext(modalContext);
  const { login } = useContext(userContext)
  const [state, setState] = useState('lagos');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    state: '',
    lga: ''
  });

  const isValuesComplete = () =>
    values.firstName.length &&
    values.lastName.length &&
    values.phoneNumber.length &&
    values.email.length &&
    values.state.length &&
    values.lga.length;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("/auth/login/individual", values)
      setLoading(false);
      setIsOpen(true);
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        tp: 'error',
        d: e?.response?.data?.message  || e?.message,
        bc: 'RETRY',
      });
    }
    setLoading(false);
  }

  const handleOtpSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/otp", { otp, phoneNumber: values.phoneNumber })
      login(res.data.token, res.data.details);
      setLoading(false);
      setIsOpen(false);
      showAlert({
        t: 'Login Successful',
        tp: 'success',
        d: 'Proceed to carry out any registration',
        bc: 'PROCEED',
        bClick: () => {
          navigate("/birth-reg");
        }
      })
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        tp: 'error',
        d: e?.response?.data?.message  || e?.message,
        bc: 'RETRY',
      });
    }
    setLoading(false);
    setIsOpen(false);
  }
 return (
    <Box
      w="100%"
    >
      <AuthFormTitle
        black="Login as"
        blue="Individual Citizen"
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
            <MainInput
              placeholder="First name"
              onChange={(e) => setValues(p => ({ ...p, firstName: e.target.value }))}
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Surname"
              onChange={(e) => setValues(p => ({ ...p, lastName: e.target.value }))}
            />
          </WrapItem>
        </Wrap>


        <MainInput
          placeholder="Phone Number"
          type="number"
          onChange={(e) => setValues(p => ({ ...p, phoneNumber: e.target.value }))}
        />

        <MainInput
          placeholder="Email Address"
          onChange={(e) => setValues(p => ({ ...p, email: e.target.value }))}
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <StateSelect
              onChange={(e) => {
                setState(e.target.value);
                setValues(p => ({ ...p, state: e.target.value }));
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


        <MainButton
          title="CONTINUE"
          alignSelf="flex-start"
          disabled={!isValuesComplete()}
          isLoading={loading}
          onClick={handleSubmit}
        />

      </VStack>
      <OtpModal
        isOpen={isOpen}
        onChange={(e) => setOtp(e.target.value)}
        onClose={() => setIsOpen(false)}
        btnClick={handleOtpSubmit}
      />
    </Box> 
 )
}

export default IndividualForm;
