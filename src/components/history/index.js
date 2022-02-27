import React from "react";
import {
  VStack
} from "@chakra-ui/react";
import PendingActions from "./PendingActions";

const Submissions = () => {
  return (
    <VStack
      align="flex-start"
    >
      <PendingActions />
    </VStack>
  );
}

export default Submissions;
