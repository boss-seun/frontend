import React, { useContext } from 'react';
import {
  HStack,
  Text,
  VStack,
  Stack
} from '@chakra-ui/react';

import MainButton from '../common/Button';

import { context as modalContext } from '../../context/modal';

const BirthConfirmation = () => {
  const showAlert = useContext(modalContext);

  const handleSubmit = () => {
    showAlert({
      t: 'Successfully Submitted',
      tp: 'success',
      d: 'You will receive a notification when your submission has been approved',
      bc: 'GOT IT',
      bClick: () => {
        // do all api logic here
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
              Child's details
            </Text>

            <Text 
              as="a"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
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
            >
              Katola Kehinde Oladega
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
                04/October/2001
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
              >
                Male
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                State
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Lagos
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
              >
                Ikorodu
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Place of birth
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Ikorodu General hospital
              </Text>
            </HStack>
          </VStack>

          <Text 
            as="a"
            color="txt.primary"
            lineHeight="28.8px"
            fontWeight="500"
            fontSize="16px"
            display={["none", "none", "block"]}
          >
            Edit data
          </Text>
        </Stack>

        <hr />

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
              Father's details
            </Text>

            <Text 
              as="a"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
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
            >
              Jimoh Afolabi Katola 
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
                04/October/2001
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Occupation
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Civil servant
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                State of origin
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Lagos
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
              >
                Ikorodu
              </Text>
            </HStack>
          </VStack>

          <Text 
            as="a"
            color="txt.primary"
            lineHeight="28.8px"
            fontWeight="500"
            fontSize="16px"
            display={["none", "none", "block"]}
          >
            Edit data
          </Text>
        </Stack>

        <hr />

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
              Mother's details
            </Text>

            <Text 
              as="a"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
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
            >
              Mojisola Alogba
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
                04/October/2001
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                Occupation
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Civil servant
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
              >
                State of origin
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                Lagos
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
              >
                Ikorodu
              </Text>
            </HStack>
          </VStack>

          <Text 
            as="a"
            color="txt.primary"
            lineHeight="28.8px"
            fontWeight="500"
            fontSize="16px"
            display={["none", "none", "block"]}
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

export default BirthConfirmation;
