import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  VStack,
  Text,
  Box,
  Circle,
  Input
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

import MainButton from './Button';

const AppModal = (props) => {
  const {
    title = "Sign up Successful",
    description = "Proceed to carry out any registration",
    type = "success",
    btnContent = "GOT IT",
    isOpen = false,
    onClose = () => {},
    btnClick = () => {} 
  } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignItems="center" alignSelf="center">
        <ModalHeader
          color={type === "success" ? "txt.green" : "txt.red"}
          fontSize="24px"
          lineHeight="32px" 
          fontWeight="500"
        >
          { title }
        </ModalHeader>
        <ModalBody>
          <VStack>
            <Box>
              <Circle
                bg={type === "success" ? "txt.lg" : "txt.lr"}
                size="80px"
              >
                  <Circle
                    borderColor={type === "success" ? "txt.green" : "txt.red"}
                    borderWidth="1px"
                    size="40px"
                    zIndex="popover"
                  >
                    {
                      type === "success" ? (
                        <CheckIcon 
                          boxSize="20px"
                          color="txt.green"
                        /> 
                      ) : (
                        <CloseIcon 
                          boxSize="20px"
                          color="txt.red"
                        />
                      )
                    }
                  </Circle>
              </Circle>
            </Box>
            <Text
              fontSize="16px"
              lineHeight="22px" 
              fontWeight="500"
              color="txt.muted"
              textAlign="center"
            >
              {description }
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter w="60%">
          <MainButton
            w="100%"
            title={btnContent}
            onClick={btnClick}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const OtpModal = (props) => {
 const {
    isOpen = false,
    onClose = () => {},
    btnClick = () => {},
    onChange = () => {} 
  } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignItems="center" alignSelf="center">
        <ModalHeader
          color="black"
          fontSize="24px"
          lineHeight="32px" 
          fontWeight="500"
        >
          Verification
        </ModalHeader>
        <ModalBody>
          <VStack>
            <Text
              fontWeight="500" 
              color="GrayText"
            >
              An OTP was sent to your phone number.
            </Text>
            <Input
              type="number"
              bg="gray.100"
              borderColor="GrayText"
              onChange={onChange}
            />
          </VStack>
        </ModalBody>

        <ModalFooter w="60%">
          <MainButton
            w="100%"
            title="PROCEED"
            onClick={btnClick}
          />
        </ModalFooter>
      </ModalContent>
    </Modal> 
  );
};

export default AppModal;
export { OtpModal };

