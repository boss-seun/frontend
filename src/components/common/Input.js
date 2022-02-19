import React, { useState } from 'react';
import { Input, FormLabel, Box, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const MainInput = (props) => {
  const { 
    placeholder,
    id,
    onFocus = () => {},
    onBlur = () => {},
    onChange = () => {},
    type = 'text'
  } = props;

  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Box
      w="100%" 
      pos="relative"
    >
      <FormLabel
        htmlFor={id}
        pos="absolute"
        bg="white"
        top="-3"
        left="3"
        color={active || focus ? "txt.primary": "#12112790"}
        zIndex="banner"
        fontWeight="500"
        px="2"
        display={!active && !focus && !value && "none"}
      >
        {placeholder}
      </FormLabel>
      <Input 
        placeholder={!active && !focus ? placeholder: " "}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange();
        }}
        id={id}
        bg={!active && !focus && !value ? "#1211270A": "white"}
        borderColor={active || focus ? "txt.primary": "#12112790"}
        borderWidth={active || focus || value ? "2px": "0px"}
        borderRadius="10px"
        _focus={{
          borderColor: 'txt.primary',
          borderWidth: '2px'
        }}
        _hover={{
          borderColor: 'txt.primary',
          borderWidth: '2px'
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => {
          setActive(true);
          setFocus(true);
          onFocus();
        }}
        onBlur={() => {
          setActive(false);
          setFocus(false);
          onBlur();
        }}
        type={type}
      />
      </Box>
    );
};

export const PasswordInput = (props) => {
  const { placeholder } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        bg="#1211270A"
        borderWidth="0px"
        _hover={{
          borderColor: "txt.primary",
          borderWidth: "2px"
        }}
        _focus={{
          borderColor: "txt.primary",
          borderWidth: "2px"
        }}
      />
      <InputRightElement >
        <Button
          bg="transparent"
          borderWidth="0"
          _hover={{
            background: "transparent"
          }}
          onClick={handleClick}
        >
          {
            show ?
            <ViewIcon 
              color="#12112730"
            /> : 
            <ViewOffIcon
              color="#12112730"
            />
          }
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default MainInput;
