import React, { useContext } from 'react';
import {
  HStack,
  Text,
  VStack,
  Stack
} from '@chakra-ui/react';

import MainButton from '../common/Button';

import { context as modalContext } from '../../context/modal';
import { context as deathContext } from '../../context/death';

const DeathConfirmation = () => {
  const showAlert = useContext(modalContext);
  const {
    setTabIndex,
    victim
  } = useContext(deathContext);
  
  const age = () => {
    const birthDate = new Date(victim?.dob);
    const deathDate = new Date(victim?.dod);

    return Math.abs(deathDate.getUTCFullYear() - birthDate.getUTCFullYear());
  }

  const handleSubmit = () => {
    // do api call here
    showAlert({
      t: 'Successfully Submitted',
      tp: 'success',
      d: 'You will receive a notification when your submission has been approved',
      bc: 'GOT IT',
      bClick: () => {
        alert('why you dey click me madam 😒');
      } 
    });
  };

  return (
    <VStack
      align="flex-start" 
      w="100%"
    >
      <Text
        fontSize={["18px", "18px", "18px", "20px"]} 
        lineHeight="40px"
        fontWeight="700"
      >
        Review your data
      </Text>

      <VStack
        w="100%" 
        align="space-between"
        spacing="5"
        borderRadius="10px"
        shadow="md"
        p="5"
      >
        <Stack
          align="flex-start" 
          direction={["column", "column", "row"]}
        >
          <HStack
            justify="space-between" 
            w={["100%", "100%", "fit-content"]}
          >
            <Text
              lineHeight="40px"
              fontWeight="700"
              fontSize="12px"
            >
              Victim's details
            </Text>

            <Text 
              as="a"
              cursor="pointer"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
              onClick={() => setTabIndex(0)}
            >
              Edit data
            </Text>
          </HStack>

          <VStack
            flex="2" 
            align="flex-start"
            spacing="0"
            px={["0", "0", "3"]}
          >
            <Text
              lineHeight="40px"
              fontWeight="700"
              fontSize="18px"
              textTransform="capitalize"
            >
              { victim?.firstName } { victim?.middleName } { victim?.lastName }
            </Text>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Date of birth
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                { victim?.dob }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Date of death
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                { victim?.dod }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Age
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                { age() }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Sex
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
                textTransform="capitalize"
              >
                { victim?.gender }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                State of Origin
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
                textTransform="capitalize"
              >
                { victim?.state }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Local government
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
                textTransform="capitalize"
              >
                { victim?.lga }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Place of death
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
                textTransform="capitalize"
              >
                { victim?.deathState } { victim?.deathLga }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Residence of deceased
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
                textTransform="capitalize"
              >
                { victim?.deathAddress }
              </Text>
            </HStack>
          </VStack>

          <Text 
            as="a"
            cursor="pointer"
            color="txt.primary"
            lineHeight="28.8px"
            fontWeight="500"
            fontSize="16px"
            display={["none", "none", "block"]}
            onClick={() => setTabIndex(0)}
          >
            Edit data
          </Text>
        </Stack>
      </VStack>

      <hr />

      <MainButton
        title="submit"
        onClick={handleSubmit}
      />
    </VStack>
  );
};

export default DeathConfirmation;
