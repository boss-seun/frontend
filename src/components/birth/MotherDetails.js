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

const MotherDetailsForm = () => {
  const {
    isMotherComplete,
    setMother,
    setTabIndex
  } = useContext(birthContext);

  // birth type state
  const [condition, setCondition] = useState("alive");
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
                  setMother(m => ({ ...m, condition: s }))
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
          placeholder="Mother's name*"
          onChange={(e) => setMother(m => ({ ...m, firstName: e.target.value }))}
        />
        <MainInput
          placeholder="Surname*"
          onChange={(e) => setMother(m => ({ ...m, lastName: e.target.value }))}
        />
        <MainInput
          placeholder="Maiden name*"
          onChange={(e) => setMother(m => ({ ...m, maidenName: e.target.value }))}
        />
      </Stack>

      <Box w={["100%", "100%", "32%"]}>
        <MainInput 
          type="date"
          placeholder="Date of Birth*"
          onChange={(e) => setMother(m => ({ ...m, dob: e.target.value }))}
        />
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
            onChange={(e) => setMother(m => ({ ...m, occupation: e.target.value }))}
          />
        </Box>

        <Box
          flex="2"
        >
          <MainInput
            placeholder="Residential address*"
            onChange={(e) => setMother(m => ({ ...m, address: e.target.value }))}
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
            setMother(m => ({ ...m, state: e.target.value }));
          }} 
        />
        <LgaSelect
          state={state}
          onChange={(e) => setMother(m => ({ ...m, lga: e.target.value }))}
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
          onClick={() => setTabIndex(0)}
        />

        <MainButton
          title="proceed"
          w={["100%", "100%", "30%"]}
          disabled={!isMotherComplete()}
          onClick={() => setTabIndex(2)}
        />
      </HStack>
    </VStack>
  );
};

export default MotherDetailsForm;
