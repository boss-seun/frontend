import React, { useState, useContext } from 'react';
import {
  Box,
  Badge,
  VStack, 
  Text,
  Stack,
  Checkbox
} from '@chakra-ui/react';

import MainInput from '../common/Input';
import MainButton from '../common/Button';
import { LgaSelect, StateSelect } from '../common/Select';

import { context as deathContext } from '../../context/death';

const VictimDetailsForm = () => {
  const {
    isVictimComplete,
    setVictim,
    victim,
    setTabIndex
  } = useContext(deathContext);

  // birth type state
  const [gender, setGender] = useState("Male");
  // lga input state
  const [state, setState] = useState("lagos");
  const [deathState, setDeathState] = useState("lagos");

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
          Gender
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
                cursor="pointer"
                textTransform="none"
                py="1"
                px="2"
                onClick={() => {
                  setGender(s)
                  setVictim(c => ({ ...c, gender: s.toLowerCase() }))
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
          placeholder="First Name*"
          onChange={(e) => setVictim(c => ({ ...c, firstName: e.target.value }))}
        />
        <MainInput
          placeholder="Surname*"
          onChange={(e) => setVictim(c => ({ ...c, lastName: e.target.value }))}
        />
        <MainInput
          placeholder="Middle name*"
          onChange={(e) => setVictim(c => ({ ...c, middleName: e.target.value }))}
        />
      </Stack>

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w={["100%", "100%", "50%"]}
      >
        <MainInput 
          type="date"
          placeholder="Date of Birth*"
          onChange={(e) => setVictim(c => ({ ...c, dob: e.target.value }))}
        />
        <MainInput 
          type="date"
          placeholder="Date of Death*"
          onChange={(e) => setVictim(c => ({ ...c, dod: e.target.value }))}
        />
      </Stack>

      <hr />

      <MainInput
        placeholder="Residential address*"
        onChange={(e) => setVictim(c => ({ ...c, deathAddress: e.target.value }))}
      />


      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <StateSelect
          onChange={(e) => {
            setDeathState(e.target.value);
            setVictim(c => ({ ...c, deathState: e.target.value }));
          }} 
        />
        <LgaSelect
          state={deathState}
          onChange={(e) => setVictim(c => ({ ...c, deathLga: e.target.value }))}
        />
      </Stack>

      <Box w={["100%", "100%", "50%"]}>
        <MainInput
          placeholder="Town*"
          onChange={(e) => setVictim(c => ({ ...c, deathTown: e.target.value }))}
        />
      </Box>

      <hr />

      <Stack
        direction={[ "column", "column", "row"]}
        spacing={["5", "5", "3"]}
        w="100%"
      >
        <StateSelect
          placeholder="State of Origin"
          onChange={(e) => {
            setState(e.target.value);
            setVictim(c => ({ ...c, state: e.target.value }));
          }} 
        />
        <LgaSelect
          state={state}
          onChange={(e) => setVictim(c => ({ ...c, lga: e.target.value }))}
        />
      </Stack>

      <Checkbox onChange={(e) => {
        if (e.target.checked) {
          setVictim(c => ({
            ...c,
            lga: victim?.deathLga,
            state: victim?.deathState
          }));
        }
      }}>
        Same as above
      </Checkbox>
      <hr />

      <Text
        fontSize="24px" 
        lineHeight="43.2px"
        fontWeight="700"
      >
        Cause of death
      </Text>

      <Stack 
        flexWrap="wrap"
        direction="row"
        justify="flex-start"
      >
            {
              [
                "fire accident",
                "cancer",
                "malaria",
                "covid-19",
                "motorcycle accident",
                "plane crash",
                "car accident",
                "diabetes",
                "homicide/suicide",
                "influenza",
                "heart disease",
                "natural causes",
                "child birth",
                "ageing"
              ].map(i => (
                <Text
                  key={i}
                  cursor="pointer"
                  textTransform="capitalize"
                  color="txt.primary"
                  onClick={() => setVictim(c => ({ ...c, causeOfDeath: i.toLowerCase()}))}
                >
                  { i } {"    "}
                </Text> 
              ))
            }
      </Stack>
      <MainInput
        placeholder="Other (not listed above)"
        onChange={(e) => setVictim(c => ({ ...c, causeOfDeath: e.target.value }))}
      />

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
        disabled={!isVictimComplete()}
        onClick={() => setTabIndex(1)}
      />
    </VStack>
  );
};

export default VictimDetailsForm;
