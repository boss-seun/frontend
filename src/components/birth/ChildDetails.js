import React, { useState } from 'react';
import {
  Box,
  Badge,
  VStack, 
  Text,
  Stack,
  Select
} from '@chakra-ui/react';

import MainInput from '../common/Input';
import MainButton from '../common/Button';

const ChildDetailsForm = () => {
  // birth type state
  const [gender, setGender] = useState("M");

  return (
    <VStack
      align="flex-start"
      spacing="6"
    >
      <MainInput
        placeholder="Given Name*"
      />

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <MainInput
          placeholder="Surname*"
        />
        <MainInput
          placeholder="Middle name*"
        />
        <MainInput
          placeholder="Other names"
        />
      </Stack>

      <Box>
        <Text
          fontSize="16px" 
          fontWeight="500"
          lineHeight="28.8px"
        >
          Child's gender
        </Text>
        <Stack direction="row">
          {
            [
              "M",
              "F"
            ].map(s => (
              <Badge
                key={s}
                variant={gender !== s ? 'outline' : 'solid'}
                colorScheme={gender !== s ? "gray" : "blue"}
                fontSize="16px"
                borderRadius="5px"
                textTransform="none"
                py="1"
                px="2"
                onClick={() => setGender(s)}
              >
                { s }
              </Badge>
            ))
          }
        </Stack>
      </Box>
      <hr />

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <Box
          flex="2"
        >
          <MainInput
            placeholder="Place of birth*"
          />
        </Box>

        <Box
          flex="1" 
        >
          <MainInput
            placeholder="Registration center*"
          />
        </Box>
      </Stack>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <Select 
          placeholder='Select State' 
          textColor="txt.muted"
          iconColor="txt.primary"
        >
          <option value='option1'>Lagos</option>
          <option value='option2'>China</option>
          <option value='option3'>Benue</option>
        </Select>
        <Select 
          placeholder='Local govt area' 
          textColor="txt.muted"
          iconColor="txt.primary"
        >
          <option value='option1'>Lagos</option>
          <option value='option2'>China</option>
          <option value='option3'>Benue</option>
        </Select>
        <MainInput
          placeholder="Town*"
        />
      </Stack>

      <Text
        fontSize="16px" 
        lineHeight="19.2px"
        color="txt.muted"
        fontWeight="500"
      >
        Please ensure that all the above stated data is accurate as any error will require you to restart the whole registration process.
      </Text>

      <hr />
      <MainButton
        title="proceed"
        w={["100%", "100%", "30%"]}
      />
    </VStack>
  );
};

export default ChildDetailsForm;
