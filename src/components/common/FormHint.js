import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';

const FormHint = () => {
  return (
    <Box
      bg="#12112712" 
      display={["none", "none", "none", "block"]}
      borderRadius="10px"
      textAlign="left"
      p="10px"
    >
      <Text
        fontSize="14px"
        lineHeight="24px"
        fontWeight="500"
        color="txt.muted"
      >
        Please ensure that all the text fields with * are filled as they are required.
      </Text>
      <Text
        fontSize="14px"
        lineHeight="24px"
        fontWeight="500"
        color="txt.muted"
      >
        You will not be able to proceed if they are not filled
      </Text>
    </Box>
  );
};

export default FormHint;
