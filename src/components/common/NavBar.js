import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

// components
import {
  Image,
  HStack,
  Box,
  Text,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react';

// asset
import logo_light from '../../assets/logo_light.svg';

const NavBar = () => {
  return (
    <HStack 
      bg="white" 
      px={["2rem", "2rem", "2rem", "8rem"]}
      align="center"
      justify="space-between"
    >
      <Box py="3" mr="4">
        <Image 
          src={logo_light}
        />
      </Box>

      <Box
        display={["block", "block", "block", "none"]}
      >
        <Menu 
          py="3"
          mr="4"
        >
          <MenuButton>
            <HamburgerIcon
              fontSize="32px"
              color="txt.primary"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>
              {/* statistics route */}
              <Link to="/statistics">
                <Text
                  fontSize="16px" 
                  lineHeight="40px"
                  color="txt.muted"
                  fontWeight="700"
                >
                  Statistics
                </Text>
              </Link>
            </MenuItem>

            <MenuDivider />

            <MenuItem>
              <Link to="/history">
                <Text
                  fontSize="16px" 
                  lineHeight="40px"
                  color="txt.muted"
                  fontWeight="700"
                >
                  History
                </Text>
              </Link>
            </MenuItem>

            <MenuDivider />

            <MenuItem>
              {/* birth_reg route */}
              <Link to="/birth-reg">
                <Text
                  fontSize="16px" 
                  lineHeight="40px"
                  color="txt.muted"
                  fontWeight="700"
                >
                  Birth Registration
                </Text>
              </Link>
            </MenuItem>

            <MenuDivider />

            <MenuItem>
              {/* death_reg route */}
              <Link to="/death-reg">
                <Text
                  fontSize="16px" 
                  lineHeight="40px"
                  color="txt.muted"
                  fontWeight="700"
                >
                  Death Registration
                </Text>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <HStack
        align="center"  
        justify="space-between"
        h="100%"
        spacing="8"
        display={["none", "none", "none", "flex"]}
      >
        {/* statistics route */}
        <Link to="/statistics">
          <Text
            fontSize="16px" 
            lineHeight="40px"
            color="txt.muted"
            fontWeight="700"
          >
            Statistics
          </Text>
        </Link>

        {/* history route */}
        <Link to="/history">
          <Text
            fontSize="16px" 
            lineHeight="40px"
            color="txt.muted"
            fontWeight="700"
          >
            History
          </Text>
        </Link>

        {/* birth_reg route */}
        <Link to="/birth-reg">
          <Text
            fontSize="16px" 
            lineHeight="40px"
            color="txt.muted"
            fontWeight="700"
          >
            Birth Registration
          </Text>
        </Link>

        {/* death_reg route */}
        <Link to="/death-reg">
          <Text
            fontSize="16px" 
            lineHeight="40px"
            color="txt.muted"
            fontWeight="700"
          >
            Death Registration
          </Text>
        </Link>
      </HStack>

      <HStack
        align="center"  
        justify="space-between"
        h="100%"
        display={["none", "none", "none", "flex"]}
      >
        <Text
          fontSize="16px" 
          lineHeight="40px"
          color="txt.muted"
          fontWeight="700"
        >
          +225678901
        </Text>

        <Circle
          bg="txt.primary" 
          fontWeight="900"
          color="white"
          size="34px"
        >
          ?
        </Circle>
      </HStack>

    </HStack>
  );
};

export default NavBar;
