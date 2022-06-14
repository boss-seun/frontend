import React, { useState, useContext } from 'react';
import {
  Box,
  Badge,
  VStack, 
  Text,
  Stack
} from '@chakra-ui/react';

import MainInput from '../common/Input';
import MainButton from '../common/Button';
import { LgaSelect, StateSelect } from '../common/Select';

import { context as birthContext } from '../../context/birth';

const ChildDetailsForm = () => {
  const {
    setChild,
    isChildComplete,
    setTabIndex
  } = useContext(birthContext);
  // birth type state
  const [gender, setGender] = useState("Male");
  // lga input state
  const [state, setState] = useState("");

  return (
    <VStack
      align="flex-start"
      spacing="6"
    >
      <Box w={["100%", "100%", "32%"]}>
        <MainInput 
          placeholder="First Name*"
          onChange={(e) => setChild(c => ({ ...c, firstName: e.target.value }))}
        />
      </Box>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <MainInput
          placeholder="Surname*"
          onChange={(e) => setChild(c => ({ ...c, lastName: e.target.value }))}
        />
        <MainInput
          placeholder="Middle name*"
          onChange={(e) => setChild(c => ({ ...c, middleName: e.target.value }))}
        />
        <MainInput
          placeholder="Other names"
          onChange={(e) => setChild(c => ({ ...c, otherNames: e.target.value }))}
        />
      </Stack>

      <Box w={["100%", "100%", "32%"]}>
        <MainInput 
          type="date"
          placeholder="Date of Birth*"
          onChange={(e) => setChild(c => ({ ...c, dob: e.target.value }))}
        />
      </Box>

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
              "Male",
              "Female"
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
                onClick={() => {
                  setGender(s)
                  setChild(c => ({ ...c, gender: s.toLowerCase() }))
                }}
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
            onChange={(e) => setChild(c => ({ ...c, placeOfBirth: e.target.value }))}
          />
        </Box>

        <Box
          flex="1" 
        >
          <MainInput
            placeholder="Registration center*"
            fontSize="12px"
            onChange={(e) => setChild(c => ({ ...c, registrationCenter: e.target.value }))}
          />
        </Box>
      </Stack>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <StateSelect
          isLagos
          onChange={(e) => {
            setState(e.target.value);
            setChild(c => ({ ...c, state: e.target.value }));
          }} 
        />
        <LgaSelect
          state={state}
          onChange={(e) => setChild(c => ({ ...c, lga: e.target.value }))}
        />
        <MainInput
          placeholder="Town*"
          onChange={(e) => setChild(c => ({ ...c, town: e.target.value }))}
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
        disabled={!isChildComplete()}
        onClick={() => setTabIndex(1)}
      />
    </VStack>
  );
};

export default ChildDetailsForm;
