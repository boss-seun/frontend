import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Text
} from "@chakra-ui/react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { context as modalContext } from "../../context/modal";
import { context as userContext } from "../../context/user";

const PendingActions = () => {
  const showAlert = useContext(modalContext);
  const { user } = useContext(userContext);

  // array of arrays
  const [actions, setActions] = useState([]);
  const columns = [
    {
      name: "data_time",
      label: "Data/Time"
    },
    {
      name: "class",
      label: "Class"
    },
    {
      name: "registrar",
      label: "Registrar"
    },
    {
      name: "status",
      label: "Status"
    }
  ];

  useEffect(() => {
    if (user?.role !== "lga") {
      return;
    }

    axios.get("/history/pending")
      .then((res) => {
        const { data = [] } = res;
        const newData = data.map((d) => {
          if (d.class === "death") {
            return {
              _id: d._id,
              class: d.class,
              registrar: d.registrar,
              status: d.approved ? "approved" : d.deactivated ? "deactivated" : "pending",
              "data_time": `${d.firstName} ${d.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`
            }
          } else {
            return {
              _id: d._id,
              class: d.class,
              registrar: d.registrar,
              status: d.approved ? "approved" : d.deactivated ? "deactivated" : "pending",
              "data_time": `${d.child?.firstName} ${d.child?.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`
            }
          }
        })
        setActions(newData);
      })
      .catch((error) => {
        showAlert({
          tp: "error",
          t: "An Error Occurred",
          bc: "RELOAD",
          d: error?.response?.data?.message || error?.message,
          bClick: () => {
            window.location.reload();
          }
        })
      })
  }, [user, showAlert])

  if (user?.role !== "lga") {
    return <></>
  }
  return (
    <Box>
      <Text
        fontWeight="600" 
        fontSize="20px"
        lineHeight="40px"
      >
        Pending Actions
      </Text>
      <MUIDataTable
        columns={columns}
        data={actions}
      />
    </Box>
  );
};

export default PendingActions;
