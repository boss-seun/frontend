import React, { useState } from 'react';
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

const MotherDetailsForm = () => {
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
                onClick={() => setCondition(s)}
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
        />
        <MainInput
          placeholder="Surname*"
        />
        <MainInput
          placeholder="Maiden name"
        />
      </Stack>

      <Box w={["100%", "100%", "32%"]}>
        <MainInput 
          type="date"
          placeholder="Date of Birth"
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
          />
        </Box>

        <Box
          flex="2"
        >
          <MainInput
            placeholder="Residential address*"
          />
        </Box>
      </Stack>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <StateSelect
          onChange={(e) => setState(e.target.value)} 
        />
        <LgaSelect
          state={state}
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
        />

        <MainButton
          title="proceed"
          w={["100%", "100%", "30%"]}
        />
      </HStack>
    </VStack>
  );
};

export default MotherDetailsForm;
