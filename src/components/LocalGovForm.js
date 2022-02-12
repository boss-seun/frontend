import React from 'react'
import { Box, VStack, Select, Wrap, WrapItem } from '@chakra-ui/react';
import MainButton from './common/Button';
import MainInput from './common/Input';
import AuthFormTitle from './common/AuthFormTitle';


const LocalGovForm = () => {
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
        />

      </VStack>

    </Box> 
 )
}

export default LocalGovForm
