import React, { useState, useContext } from 'react';
import {
  Box,
  Badge,
  VStack, 
  Text,
  Stack,
  HStack
} from '@chakra-ui/react';

import MainInput from '../common/Input';
import MainButton from '../common/Button';
import { LgaSelect, StateSelect } from '../common/Select';

import { context as birthContext } from '../../context/birth';

const FatherDetailsForm = () => {
  const {
    isFatherComplete,
    setFather,
    setTabIndex
  } = useContext(birthContext);

  // birth type state
  const [condition, setCondition] = useState("alive");

  // legality state
  const [legality, setLegality] = useState("biological");

  // lga input state
  const [state, setState] = useState("lagos");

  return (
    <VStack
      align="flex-start"
      spacing="6"
    >
      <Box>
        <Text
          fontSize="16px" 
          fontWeight="500"
          lineHeight="28.8px"
        >
          Condition
        </Text>
        <Stack direction="row">
          {
            [
              "alive",
              "deceased"
            ].map(s => (
              <Badge
                key={s}
                variant={condition !== s ? 'outline' : 'solid'}
                colorScheme={condition !== s ? "gray" : "blue"}
                fontSize="16px"
                borderRadius="5px"
                textTransform="capitalize"
                py="1"
                px="2"
                onClick={() => {
                  setCondition(s);
                  setFather(f => ({ ...f, condition: s }));
                }}
              >
                { s }
              </Badge>
            ))
          }
        </Stack>
      </Box>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <MainInput
          placeholder="Father's name*"
          onChange={(e) => setFather(f => ({ ...f, firstName: e.target.value }))}
        />
        <MainInput
          placeholder="Surname*"
          onChange={(e) => setFather(f => ({ ...f, lastName: e.target.value }))}
        />
        <MainInput
          placeholder="Middle name*"
          onChange={(e) => setFather(f => ({ ...f, middleName: e.target.value }))}
        />
      </Stack>

      <Box w={["100%", "100%", "32%"]}>
        <MainInput 
          type="date"
          placeholder="Date of Birth*"
          onChange={(e) => setFather(f => ({ ...f, dob: e.target.value }))}
        />
      </Box>

      <Box>
        <Text
          fontSize="16px" 
          fontWeight="500"
          lineHeight="28.8px"
        >
          Legality
        </Text>
        <Stack direction="row">
          {
            [
              "biological",
              "foster"
            ].map(s => (
              <Badge
                key={s}
                variant={legality !== s ? 'outline' : 'solid'}
                colorScheme={legality !== s ? "gray" : "blue"}
                fontSize="16px"
                borderRadius="5px"
                textTransform="capitalize"
                py="1"
                px="2"
                onClick={() => {
                  setLegality(s);
                  setFather(f => ({ ...f, legality: s }));
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
          flex="1" 
        >
          <MainInput
            placeholder="Occupation*"
            onChange={(e) => setFather(f => ({ ...f, occupation: e.target.value }))}
          />
        </Box>

        <Box
          flex="2"
        >
          <MainInput
            placeholder="Residential address*"
            onChange={(e) => setFather(f => ({ ...f, address: e.target.value }))}
          />
        </Box>
      </Stack>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <StateSelect
          placeholder="State of origin"
          onChange={(e) => {
            setState(e.target.value);
            setFather(f => ({ ...f, state: e.target.value }));
          }} 
        />
        <LgaSelect
          state={state}
          onChange={(e) => setFather(f => ({ ...f, lga: e.target.value }))}
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
      <HStack
        w="100%" 
      >
        <MainButton
          title="go back"
          bgColor="white"
          color="txt.primary"
          borderColor="txt.primary"
          borderWidth="1px"
          w={["100%", "100%", "30%"]}
          onClick={() => setTabIndex(1)}
        />

        <MainButton
          title="proceed"
          w={["100%", "100%", "30%"]}
          disabled={!isFatherComplete()}
          onClick={() => setTabIndex(3)}
        />
      </HStack>
    </VStack>
  );
};

export default FatherDetailsForm;
