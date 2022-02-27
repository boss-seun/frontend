import React from 'react';
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

const Statistics = () => {
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
              {
                title: "Submissions",
                disabled: false
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
            {/* component go dey here */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Statistics;
