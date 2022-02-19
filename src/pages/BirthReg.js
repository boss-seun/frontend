import React from 'react';
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack
} from '@chakra-ui/react';

import ChildDetailsForm from '../components/birth/ChildDetails';
import MotherDetailsForm from '../components/birth/MotherDetails';
import FatherDetailsForm from '../components/birth/FatherDetail';

import FormHint from '../components/common/FormHint';
import BirthConfirmation from '../components/birth/BirthConfirmation';

const BirthReg = () => {
  return (
    <Box>
      <Tabs>
        <Text
          bg="txt.primary" 
          px={["1rem", "2rem", "2rem", "8rem"]}
          pt={6}
          pb={4}
          fontSize={["24px", "24px", "24px", "28px"]}
          lineHeight="40px"
          fontWeight="500"
          color="white"
        >
          Digitized registration system
        </Text>

        <TabList
          bg="txt.primary" 
          px={["1rem", "2rem", "2rem", "8rem"]}
          scrollBehavior="smooth"
          overflowX="scroll"
          overflowY="hidden"
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {
            [
              "Child's Details",
              "Mother's Details",
              "Father's Details",
              "Confirmation"
            ].map(c => (
              <Tab 
                key={c}
                pl={0}
                mr={[2, 2, 2, 6]}
                flexShrink={0}
                _selected={{
                  borderBottomWidth: '6px',
                  borderBottomColor: 'white'
                }}
              >
                <Text
                  fontSize={["14px", "14px", "14px", "16px"]} 
                  lineHeight="40px"
                  fontWeight="700"
                  color="white"
                >
                  { c }
                </Text>
              </Tab>
            ))
          }
        </TabList>

        <TabPanels
          px={["2rem", "2rem", "2rem", "8rem"]}
        >
          <TabPanel>
            <HStack
              align="flex-start" 
              spacing="9"
              justify="space-between"
            >
              <ChildDetailsForm />
              <FormHint />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack
              align="flex-start" 
              spacing="9"
              justify="space-between"
            >
              <MotherDetailsForm />
              <FormHint />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack
              align="flex-start" 
              spacing="9"
              justify="space-between"
            >
              <FatherDetailsForm />
              <FormHint />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack
              align="flex-start" 
              spacing="9"
              justify="space-between"
            >
              <BirthConfirmation />
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BirthReg;

