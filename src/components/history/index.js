import React from "react";
import {
  VStack,
  Box
} from "@chakra-ui/react";
import PendingActions from "./PendingActions";
import HistoryTable from "./HistoryTable";

const Submissions = () => {
  return (
    <VStack
      align="flex-start"
    >
      <PendingActions />
      <Box
        h="2rem"
      />
      <HistoryTable />
    </VStack>
  );
}

export default Submissions;
