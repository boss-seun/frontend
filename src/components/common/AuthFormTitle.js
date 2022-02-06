import React from "react";
import { Text, Box } from "@chakra-ui/react";

const AuthFormTitle = ({black, blue}) => {
  return (
    <Box
      justify="start" 
      align="start"
      spacing="0px"
      my="5"
    >
      <Text
        fontWeight="700"
        fontSize="28px"
        lineHeight="50.4px"
        color="black"
      >
        {black}
      </Text>
      <Text
        fontWeight="700"
        fontSize="34px"
        lineHeight="30px"
        color="txt.primary"
      >
        {blue}
      </Text>
      <Box
        bgColor="#12112712"
        h="10px"  
        w="70px"
        mt="12px"
        borderRadius="10px"
      />
    </Box>
  );
};

export default AuthFormTitle;
