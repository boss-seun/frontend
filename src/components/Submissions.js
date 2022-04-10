import React, { useState, useEffect } from "react";
import {
  HStack,
  VStack,
  Box,
  Text,
  Badge,
  Circle,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import { PieChart, Pie, Tooltip } from "recharts";

import { LgaSelect, StateSelect } from "../components/common/Select";

const Submissions = () => {
  const [years, setYears]  = useState([]);
  const [selectedYear, selectYear] = useState(2022);
  const [state, setState] = useState("lagos");
  const [, setLga] = useState("ikeja");
  // age data
  const [data, setData] = useState([]);
  // sex dirth rate 
  const [sexData, setSexData] = useState([]);
  // cardiovascular data by age
  const [cardioData, setCardioData] = useState([]);
  // cancer data by age
  const [cancerData, setCancerData] = useState([]);
  // set age - sex count and percentage
  const [ageData, setAgeData] = useState([]);

  const generateYears = () => {
    const yrs = []
    const currentYear = new Date().getFullYear()
    // Go 20 years backwards
    for (let i = 0; i <= 20; i++) {
      yrs.push(currentYear - i);
    }

    return yrs;
  };

  const generateData = () => {
    // make api call here
    setData([
      {
        name: "unknown",
        fill: "#636363",
        value: 0
      },
      {
        name: "75+",
        fill: "#E84744",
        value: 755
      },
      {
        name: "55-75",
        fill: "#168EC7",
        value: 302
      },
      {
        name: "35-56",
        fill: "#90C946",
        value: 171
      },
      {
        name: "25-34",
        fill: "#5FC2E5",
        value: 0
      },
      {
        name: "15-23",
        fill: "#FEBC21",
        value: 33
      },
      {
        name: "5-14",
        fill: "#A5A5A5",
        value: 0
      },
      {
        name: "1-4",
        fill: "#56A8AF",
        value: 0
      },
      {
        name: "<1",
        fill: "#9F577F",
        value: 50
      }
    ])

    // set cancer data
    setCancerData([
      {
        name: "unknown",
        fill: "#636363",
        value: 0
      },
      {
        name: "75+",
        fill: "#E84744",
        value: 948
      },
      {
        name: "55-75",
        fill: "#168EC7",
        value: 194
      },
      {
        name: "35-56",
        fill: "#90C946",
        value: 651
      },
    ])

    // set cardio data
    setCardioData([
      {
        name: "unknown",
        fill: "#636363",
        value: 0
      },
      {
        name: "75+",
        fill: "#E84744",
        value: 748
      },
      {
        name: "55-75",
        fill: "#168EC7",
        value: 433
      },
      {
        name: "35-56",
        fill: "#90C946",
        value: 55
      },
    ])

    // set sex data
    setSexData([
      {
        name: "Males",
        fill: "#168EC7",
        value: 40
      },
      {
        name: "Females",
        fill: "#E84744",
        value: 60
      },
      {
        name: "Unknown sex",
        fill: "#636363",
        value: 0
      },
    ])

    // set age Data
    setAgeData([
      {
        name: "<1",
        male: {
          count: 55,
          percent: 1
        },
        female: {
          count: 22,
          percent: 0.2
        },
        unknown: {
          count: 0,
          percent: 0
        }
      },
      {
        name: "unknown",
        male: {
          count: 0,
          percent: 0
        },
        female:  {
          count: 0,
          percent: 0
        },
        unknown: {
          count: 0,
          percent: 0
        }
      },
    ]);
  };

  useEffect(() => {
    if (!years?.length) {
      setYears(generateYears());
    }

    if (!data.length) {
      generateData()
    }
  }, [years, data]);

  return (
    <HStack
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={[2, 2, 5, 5]}
      flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <VStack>
        <Text
          fontWeight="500"
          color="black"
        >
          Year
        </Text>
        { years.map((year) => (
          <Badge
           key={year.toString()} 
            variant={selectedYear !== year ? 'outline' : 'solid'}
            colorScheme={selectedYear !== year ? "gray" : "blue"}
            fontSize="16px"
            borderRadius="5px"
            cursor="pointer"
            p="1"
            onClick={() => selectYear(year)}
          >
            {year}
          </Badge>
        ))}
      </VStack>
      <Box>
        <HStack mt="2rem">
          <StateSelect
            onChange={(e) => setState(e.target.value)}
          />
          <LgaSelect
            state={state}
            onChange={(e) => setLga(e.target.value)} 
          />
        </HStack>

        <VStack
          alignItems="flex-end" 
        >
          <HStack>
            <Text
              color="black"
              fontWeight="900"
              fontSize="24px"
            >
              Total number of deaths
            </Text>
            <Text
              color="black"
              fontWeight="900"
              fontSize="24px"
            >
              25,253
            </Text>
          </HStack>
          <HStack>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              Males
            </Text>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              16,256
            </Text>
          </HStack>
          <HStack>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              Females
            </Text>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              9,556
            </Text>
          </HStack>
          <HStack>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              Unknown sex
            </Text>
            <Text
              color="GrayText"
              fontWeight="500"
              fontSize="18px"
            >
              300
            </Text>
          </HStack>
        </VStack>
        <HStack mt="3rem" alignItems="flex-start" spacing="8">
          <VStack alignItems="flex-start">
            {data.map(({ fill, name }) => (
              <HStack key={name}>
                <Circle 
                  bg={fill}
                  size="12px"
                />
                <Text
                  fontWeight="500" 
                  color="GrayText"
                >
                  Age {name}
                </Text>
              </HStack>
            ))}
          </VStack>
          <Box>
            <Text
              fontWeight="700" 
              color="black"
              fontSize="24px"
              textAlign="center"
            >
              By Age
            </Text>
            <PieChart width={250} height={250}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                label
              />
              <Tooltip/>
            </PieChart>
          </Box>
        </HStack>
        <HStack mt="3rem" alignItems="flex-start" spacing="8">
          <VStack alignItems="flex-start">
            {sexData.map(({ fill, name }) => (
              <HStack key={name}>
                <Circle 
                  bg={fill}
                  size="12px"
                />
                <Text
                  fontWeight="500" 
                  color="GrayText"
                >
                  {name}
                </Text>
              </HStack>
            ))}
          </VStack>
          <Box>
            <Text
              fontWeight="700" 
              color="black"
              fontSize="24px"
              textAlign="center"
            >
              By Sex
            </Text>
            <PieChart width={250} height={250}>
              <Pie
                data={sexData}
                dataKey="value"
                nameKey="name"
                label
              />
              <Tooltip/>
            </PieChart>
          </Box>
        </HStack>
      </Box>
      <Box>
        <VStack>
          <Box h="250px" display={["none", "none", "none", "block"]} />
          <HStack>
            <Box>
              <Text
                fontWeight="700" 
                color="black"
                fontSize="24px"
                textAlign="center"
              >
                Cardiovascular Disease
              </Text>
              <PieChart width={250} height={250}>
                <Pie
                  data={cardioData}
                  dataKey="value"
                  nameKey="name"
                  label
                />
                <Tooltip/>
              </PieChart>
            </Box>
            <Box>
              <Text
                fontWeight="700" 
                color="black"
                fontSize="24px"
                textAlign="center"
              >
                Cancer
              </Text>
              <PieChart width={250} height={250}>
                <Pie
                  data={cancerData}
                  dataKey="value"
                  nameKey="name"
                  label
                />
                <Tooltip/>
              </PieChart>
            </Box>
          </HStack>


          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Age (Years)</Th>
                  <Th>Males</Th>
                  <Th>Females</Th>
                  <Th>Unknown sex</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  ageData.map(({name, male, female, unknown}) => (
                    <Tr key={name}>
                      <Td>Age {name}</Td>
                      <Td>{male?.count} {male?.percent}%</Td>
                      <Td>{female?.count} {female?.percent}%</Td>
                      <Td>{unknown?.count} {unknown?.percent}%</Td>
                    </Tr>
                  ))
                }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>All Ages</Th>
                  <Th>
                    {
                      ageData.length && ageData.reduce((acc, { male }) => (
                        acc + male?.count
                      ), 0)
                    }
                    {" "}
                    {
                      ageData.length && ageData.reduce((acc, { male }) => (
                        acc + male?.percent
                      ), 0)
                    }%
                  </Th>
                  <Th>
                    {
                      ageData.length && ageData.reduce((acc, { female }) => (
                        acc + female?.count
                      ), 0)
                    }
                    {" "}
                    {
                      ageData.length && ageData.reduce((acc, { female }) => (
                        acc + female?.percent
                      ), 0)
                    }%
                  </Th>
                  <Th>
                    {
                      ageData.length && ageData.reduce((acc, { unknown }) => (
                        acc + unknown?.count
                      ), 0)
                    }
                    {" "}
                    {
                      ageData.length && ageData.reduce((acc, { unknown }) => (
                        acc + unknown?.percent
                      ), 0)
                    }%
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Submissions;
