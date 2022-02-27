import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';

const SelectionHint = () => {
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
        Please endeavor to input the correct data here as it is important for accurate statistical analysis 
      </Text>
    </Box>
  );
};

export default SelectionHint;
