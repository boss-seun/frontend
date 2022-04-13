import React, { useContext } from 'react';
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  VStack,
  Spacer
} from '@chakra-ui/react';

import FormHint from '../components/common/FormHint';
import SelectionHint from '../components/common/SelectionHint';
import VictimDetailsForm from '../components/death/VictimDetails';

import { context as deathContext } from '../context/death';
import DeathConfirmation from '../components/death/DeathConfirmation';

const DeathReg = () => {
  const { 
    isVictimComplete,
    tabIndex,
    setTabIndex
  } = useContext(deathContext);

  return (
    <Box>
      <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
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
              {
                title: "Victim Details",
                disabled: false
              },
              {
                title: "Confirmation",
                disabled: !isVictimComplete() 
              }
            ].map(c => (
              <Tab 
                key={c.title}
                pl={0}
                mr={[2, 2, 2, 6]}
                flexShrink={0}
                _selected={{
                  borderBottomWidth: '6px',
                  borderBottomColor: 'white'
                }}
                isDisabled={c.disabled}
              >
                <Text
                  fontSize={["14px", "14px", "14px", "16px"]} 
                  lineHeight="40px"
                  fontWeight="700"
                  color="white"
                >
                  { c.title }
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
              <VictimDetailsForm />
              <VStack
                justify="space-between" 
                h="115vh"
              >
                <FormHint />
                <Spacer/>
                <SelectionHint />
              </VStack>
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack
              align="flex-start" 
              spacing="9"
              justify="space-between"
            >
              <DeathConfirmation />
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DeathReg;

