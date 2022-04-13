import React, { useState } from 'react';
import {
  Wrap,
  WrapItem,
  Image,
  Box,
  VStack,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import SelectView from '../components/SelectView';
import { Register } from '../components/MedicalCenterForm';
import LocalGovForm from '../components/LocalGovForm';
import IndividualForm from '../components/IndividualForm';

import logo from '../assets/logo.svg';
import items from '../utils/items';

const Home = () => {
  const [selected, setSelected] = useState("lg");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const forms = Object.freeze({
    "mc": Register,
    "lg": LocalGovForm,
    "i": IndividualForm,
  });

  const CurrentForm = forms[selected];

  return (
    <Wrap
      spacing="0px"
      align="stretch"
      w="100vw"
    >
      <WrapItem
        bgGradient="linear(to-r, bg.100, bg.200, bg.300)"
        w={["100vw", "100vw", "50vw"]}
        flexDirection="column"
        borderBottomRadius={[
          !show && "20px",
          !show && "20px",
          "0px"
        ]}
      >
        <HStack
          p="5" 
          w="100%"
          justify="space-between"
          align="center"
        >
          <Image
            src={logo}
            alt="logo"
          />

          <Box
            display={["block", "block", "none"]} 
            onClick={() => setShow(s => !s)}
          >
            <HamburgerIcon
              color="white"
              boxSize={10}
              mb={4}
            />
          </Box>
        </HStack>

        <Box
          p={["5", "5", "10"]} 
        >
          <VStack>
            { items.map((i) => (
              <Box
                pb="20px"
                key={i.ticker}
                onClick={() => {
                  if (i.ticker === "vs") {
                    navigate("/statistics");
                  } else {
                    setSelected(i.ticker);
                    setShow(false);
                  }
                }}
                display={!show ? [
                  selected === i.ticker ? "block" : "none",
                  selected === i.ticker ? "block" : "none",
                  "block"
                ] : "block"}
              >
                <SelectView
                  {...i}
                  selected={i.ticker === selected ? true: false}
                />
              </Box>
            )) }          
          </VStack>
        </Box>
      </WrapItem>
      <WrapItem
        w={["100vw", "100vw", "50vw"]}
        flexDirection="column"
        alignItems="center"
        p={[
          "5",
          "5",
          "20"
        ]}
      >
        <CurrentForm />
      </WrapItem>
    </Wrap>
  );
};

export default Home;
