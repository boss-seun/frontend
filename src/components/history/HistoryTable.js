import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { context as modalContext } from "../../context/modal";
import { context as userContext } from "../../context/user";

const HistoryTable = () => {
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
    },
    {
      name: "action",
      label: "Action"
    }
  ];

  useEffect(() => {
    axios.get("/history")
      .then((res) => {
        const { data = [] } = res;
        const newData = data.map((d) => {
          if (d.class === "death") {
            return {
              _id: d._id,
              class: d.class,
              registrar: d.registrar,
              status: d.approved ? "approved" : d.deactivated ? "deactivated" : "pending",
              "data_time": `${d.firstName} ${d.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`,
              "action": <Button onClick={handlePrintCertificate.bind(this, d._id, d.approved, d.class)} disabled={!d.approved}>{ d.approved ? "Print Certificate" : "Awaiting approval" }</Button>
            }
          } else {
            return {
              _id: d._id,
              class: d.class,
              registrar: d.registrar,
              status: d.approved ? "approved" : d.deactivated ? "deactivated" : "pending",
              "data_time": `${d.child?.firstName} ${d.child?.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`,
              "action": <Button onClick={handlePrintCertificate.bind(this, d._id, d.approved, d.class)} disabled={!d.approved}>{ d.approved ? "Print Certificate" : "Awaiting approval" }</Button>
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

  const handlePrintCertificate = (id, approved, cls) => {
    if (!approved) {
      return;
    }
    let url = `${process.env.REACT_APP_BACKEND_URL}/${cls}/certificate/${id}`
    window.open(url, "_blank");
    return;
  };

  return (
    <Box>
      <Text
        fontWeight="600" 
        fontSize="20px"
        lineHeight="40px"
      >
        History
      </Text>
      <MUIDataTable
        columns={columns}
        data={actions}
      />
    </Box>
  );
};

export default HistoryTable;
