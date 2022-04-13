import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';
import { context as userContext } from '../context/user';
import { LgaSelect, StateSelect } from './common/Select';

const LocalGovForm = () => {
  const navigate = useNavigate()
  const showAlert = useContext(modalContext);
  const { login } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState('lagos');
  const [values, setValues] = useState({
    state: '',
    lga: '',
    lgaID: '',
    role: '',
    employeeName: ''
  });

  const isValuesComplete = () =>
    values.state.length &&
    values.lga.length &&
    values.lgaID.length &&
    values.role.length &&
    values.employeeName.length;

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
          navigate('/statistics');
        }
      })
      console.log(res);
    } catch (e) {
      setLoading(false);
      showAlert({
        t: 'An Error Occurred',
        tp: 'error',
        d: e?.response?.data?.message,
        bc: 'RETRY'
      });
    }
    setLoading(false);
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
        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <StateSelect
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

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Employee name"
              onChange={(e) => setValues(p => ({ ...p, employeeName: e.target.value }))}
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Role"
              onChange={(e) => setValues(p => ({ ...p, role: e.target.value }))}
            />
          </WrapItem>
        </Wrap>

        <MainInput
          placeholder="Local Government unique ID"
          onChange={(e) => setValues(p => ({ ...p, lgaID: e.target.value }))}
        />

        <MainButton
          title="LOGIN"
          alignSelf="flex-start"
          isLoading={loading}
          disabled={!isValuesComplete()}
          onClick={handleSubmit}
        />

      </VStack>

    </Box> 
 )
}

export default LocalGovForm
