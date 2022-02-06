import React from "react";
import { Button } from "@chakra-ui/react";

const MainButton = (props) => {
  const {
    title,
  } = props;

  return (
    <Button
      bgColor="txt.primary"
      textTransform="uppercase"
      color="white"
      w={[
        "100%",
        "100%",
        "40%"
      ]}
      { ...props }
    >
      { title }
    </Button>
  );
};

export default MainButton;
