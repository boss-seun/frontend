import React from 'react';
import {
  HStack,
  Square,
  Image,
  Spacer,
  VStack,
  Text
} from '@chakra-ui/react';

const SelectView = (props) => {
  const {
    icon = "",
    title = "",
    note = "",
    selected = false
  } = props

  return (
    <HStack
      bgColor={selected ? "bg.500" : "transparent"}
      borderEndRadius="15px"
      py="6"
      px="2"
    >
      <Square
        size={["16", "16", "24"]} 
        bgColor="bg.400"
        rounded="5px"
        p="4"
      >
        <Image
          src={icon}
          alt="medical_icon"
        />
      </Square>

      <Spacer/>

      <VStack
        align="start"
        color="white"
      >
        <Text
          fontWeight="700" 
          fontSize="20px"
          lineHeight="36px"
        >
          { title }
        </Text>
        <Text
          fontWeight="400" 
          fontSize="14px"
          lineHeight="17.5px"
        >
          { note }
        </Text>
      </VStack>
    </HStack>
  );
};

export default SelectView;
