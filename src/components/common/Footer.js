import React, { useContext } from "react";
import {
  Text,
  Image,
  HStack,
  Box
} from "@chakra-ui/react";

// context
import { context as userContext } from "../../context/user";
// asset
import logo_light from '../../assets/logo_light.svg';
import logout_icon from '../../assets/Logout.svg';

const Footer = () => {
  const { logout } = useContext(userContext);
  return (
    <Box
      display={["none", "none", "none", "block"]}
      px={["1rem", "2rem", "2rem", "8rem"]}
      py="2rem"
    >
      <HStack
        alignItems="center"
        justifyContent="space-between"
        borderTopColor="grey.100"
        borderTopWidth="2px"
      >
        <Box py="3" mr="4">
          <Image 
            src={logo_light}
          />
        </Box>

        <HStack
          as="button"
          onClick={logout}
        >
          <Text
            textTransform="uppercase" 
            color="GrayText"
            fontWeight="700"
          >
            Log out
          </Text>
          <Image
            src={logout_icon}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
