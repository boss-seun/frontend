import React, { useContext } from 'react';
import {
  HStack,
  Text,
  VStack,
  Stack
} from '@chakra-ui/react';

import MainButton from '../common/Button';

import { context as modalContext } from '../../context/modal';
import { context as birthContext } from '../../context/birth';

const BirthConfirmation = () => {
  const showAlert = useContext(modalContext);
  const {
    setTabIndex,
    child,
    father,
    mother
  } = useContext(birthContext);
  

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
              Child's details
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
              { child?.firstName } { child?.middleName } { child?.lastName }
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
                { child?.dob }
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
                { child?.gender }
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
                textTransform="capitalize"
              >
                { child?.state }
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
                { child?.lga }
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
                textTransform="capitalize"
              >
                { child?.placeOfBirth }
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
              cursor="pointer"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
              onClick={() => setTabIndex(2)}
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
              { father?.firstName } { father?.middleName } { father?.lastName }
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
                { father?.dob }
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
                textTransform="capitalize"
              >
                { father?.occupation }
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
                textTransform="capitalize"
              >
                { father?.state }
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
                { father?.lga }
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
            onClick={() => setTabIndex(2)}
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
              cursor="pointer"
              color="txt.primary"
              lineHeight="28.8px"
              fontWeight="500"
              fontSize="16px"
              display={["block", "block", "none"]}
              onClick={() => setTabIndex(1)}
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
              { mother?.firstName } { mother?.lastName }
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
                { mother?.dob }
              </Text>
            </HStack>
            <HStack>
              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                textTransform="capitalize"
              >
                Occupation
              </Text>

              <Text
                lineHeight="40px"
                fontWeight="700"
                fontSize="12px"
                color="txt.muted"
              >
                { mother?.occupation }
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
                textTransform="capitalize"
              >
                { mother?.state }
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
                { mother?.lga }
              </Text>
            </HStack>
          </VStack>

          <Text 
            as="a"
            color="txt.primary"
            cursor="pointer"
            lineHeight="28.8px"
            fontWeight="500"
            fontSize="16px"
            display={["none", "none", "block"]}
            onClick={() => setTabIndex(1)}
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
