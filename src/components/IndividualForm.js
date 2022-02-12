import React, { useContext } from 'react'
import { Box, VStack, Select, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';

import { context as modalContext } from '../context/modal';


const IndividualForm = () => {
  const showAlert = useContext(modalContext);

  const handleSubmit = () => {
    showAlert({
      t: 'Sign up Successful',
      tp: 'success',
      d: 'Proceed to carry out any registration',
      bc: 'GOT IT'
    });
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
            />
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <MainInput
              placeholder="Surname"
            />
          </WrapItem>
        </Wrap>


        <MainInput
          placeholder="NIN"
        />

        <MainInput
          placeholder="Email Address"
        />

        <Wrap
          w="100%"
          direction="row"
          spacing={["8", "8", "8", "2.5"]}
        >
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <Select 
              placeholder='Select State' 
              textColor="txt.muted"
              iconColor="txt.primary"
            >
              <option value='option1'>Lagos</option>
              <option value='option2'>China</option>
              <option value='option3'>Benue</option>
            </Select>
          </WrapItem>
          <WrapItem w={["100%", "100%", "100%", "47%"]}>
            <Select 
              placeholder='Local govt area' 
              textColor="txt.muted"
              iconColor="txt.primary"
            >
              <option value='option1'>Lagos</option>
              <option value='option2'>China</option>
              <option value='option3'>Benue</option>
            </Select>
          </WrapItem>
        </Wrap>


        <MainButton
          title="CONTINUE"
          alignSelf="flex-start"
          onClick={handleSubmit}
        />

      </VStack>
    </Box> 
 )
}

export default IndividualForm;
