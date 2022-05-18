import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Button,
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from "@chakra-ui/react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

import { context as modalContext } from "../../context/modal";
import { context as userContext } from "../../context/user";

const PendingActions = () => {
  const showAlert = useContext(modalContext);
  const { user } = useContext(userContext);

  const [ignored_keys] = useState([
    "approved",
    "disapproved",
    "__v",
    "_id",
    "userId",
    "updatedAt",
    "otp",
    "password"
  ]);

  const [trigger, setTrigger] = useState(false);
  const [focus_data, setFocusData] = useState({});
  const [form_modal, setFormModal] = useState({
    open: false,
  });
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
              "data_time": `${d.firstName} ${d.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`,
              action: <Button onClick={handleAction.bind(this, d)}>Actions</Button>
            }
          } else {
            return {
              _id: d._id,
              class: d.class,
              registrar: d.registrar,
              status: d.approved ? "approved" : d.deactivated ? "deactivated" : "pending",
              "data_time": `${d.child?.firstName} ${d.child?.lastName}\n${new Date(d.createdAt || Date.now()).toDateString()}`,
              action: <Button onClick={handleAction.bind(this, d)}>Actions</Button>
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
  }, [user, showAlert, trigger])

  const handleAction = (row) => {
    console.log(row);
    setFocusData(row);
    setFormModal((prev) => ({
      ...prev,
      open: true
    }));
  };

  const handleFormModalClose = () => {
    setFormModal((prev) => ({
      ...prev,
      open: false
    }));
  };

  const handleApprove = async (id, cls) => {
    try {
      const res = await axios.post(`/${cls}/approve/${id}`);
      showAlert({
        tp: "success",
        t: "Success",
        d: res.message,
        bc: "CLOSE",
      });
    } catch (error) {
      showAlert({
        tp: "error",
        t: "An Error Occurred",
        bc: "RETRY",
        d: error?.response?.data?.message || error?.message,
      });
    }
    // trigger data refetch
    setTrigger(prev => !prev);
    // close the modal
    setFormModal((prev) => ({
      ...prev,
      open: false
    }));
  };

  const handleDisapprove = async (id, cls) => {
    try {
      const res = await axios.post(`/${cls}/approve/${id}`);
      showAlert({
        tp: "success",
        t: "Success",
        d: res.message,
        bc: "CLOSE",
      });
    } catch (error) {
      showAlert({
        tp: "error",
        t: "An Error Occurred",
        bc: "RETRY",
        d: error?.response?.data?.message || error?.message,
      });
    }
    // trigger data refetch
    setTrigger(prev => !prev);
    // close the modal
    setFormModal((prev) => ({
      ...prev,
      open: false
    }));
  };

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
      <Modal
        isOpen={form_modal.open}
        onClose={handleFormModalClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader> Perform Action </ModalHeader>
          <ModalCloseButton/>

          <ModalBody>
            {
              Object.entries(focus_data).map(([key, value]) => {
                if (ignored_keys.includes(key)) {
                  return <></>
                }
                if (typeof value === "object") {
                  return Object.entries(value).map(([k, v]) => {
                    if (ignored_keys.includes(k)) {
                      return <></>
                    }
                    return (
                      <Text
                        fontWeight="500" 
                        fontSize="14px"
                        lineHeight="40px"
                      >
                        <strong>
                          { `${key}'s ${k}` }: {"  "}
                        </strong>
                        { 
                          new Date(v).toString() === "Invalid Date" ? v : new Date(v).toDateString()
                        }
                      </Text>
                    );
                  });
                }
                return (
                  <Text
                    fontWeight="500" 
                    fontSize="14px"
                    lineHeight="40px"
                  >
                    <strong>
                      { key }: {"  "}
                    </strong>
                        { 
                          new Date(value).toString() === "Invalid Date" ? value : new Date(value).toDateString()
                        }
                  </Text>
                );
              })
            }
          </ModalBody>

          <ModalFooter>
            <Button bg="txt.primary" mr={3} onClick={handleApprove.bind(this, focus_data._id, focus_data.class)}>
              Approve
            </Button>
            <Button bg="red.400" onClick={handleDisapprove.bind(this, focus_data._id, focus_data.class)}>
              Disapprove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PendingActions;
