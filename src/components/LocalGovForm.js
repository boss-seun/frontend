import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';
import { LgaSelect, StateSelect } from './common/Select';


const LocalGovForm = () => {
  const navigate = useNavigate()
  const showAlert = useContext(modalContext);
  const [state, setState] = useState('lagos');

  const handleSubmit = () => {
    showAlert({
      t: 'Sign up Successful',
      tp: 'success',
      d: 'Proceed to carry out any registration',
      bc: 'GOT IT',
      bClick: () => {
        // do all api logic here
        navigate('/birth-reg');
      } 
    });
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
              onChange={(e) => setState(e.target.value)}
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <LgaSelect
              state={state}
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
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Role"
            />
          </WrapItem>
        </Wrap>

        <MainInput
          placeholder="Local Government unique ID"
        />

        <MainButton
          title="LOGIN"
          alignSelf="flex-start"
          onClick={handleSubmit}
        />

      </VStack>

    </Box> 
 )
}

export default LocalGovForm
