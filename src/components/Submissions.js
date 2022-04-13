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
import axios from "axios";

import { LgaSelect, StateSelect } from "../components/common/Select";

const Submissions = () => {
  const [years, setYears]  = useState([]);
  const [selectedYear, selectYear] = useState(new Date().getFullYear());
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  // age data
  const [data, setData] = useState([]);
  // sex dirth rate 
  const [sexData, setSexData] = useState([]);
  const [sexSummary, setSexSummary] = useState({});
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

  const generateData = async () => {
    // make api call here
    const { data: summary = {} } = await axios.get(`/statistics/death-summary?year=${selectedYear}&state=${state}&lga=${lga}`);
    const _sexData = [];
    const _sexSummary = {};

    Object.entries(summary).forEach(([key, value]) => {
      // set required states
      if (key !== "total") {
        _sexData.push(
          {
            name: key,
            value: value?.value,
            fill: value?.fill,
          }
        );
      }

      _sexSummary[key] = value?.value || 0
    });

    const { data: ageSummary = [] } = await axios.get(`/statistics/age-death-summary?year=${selectedYear}&state=${state}&lga=${lga}`);
    const { data: cancerSummary } = await axios.get(`/statistics/disease-death-summary?year=${selectedYear}&state=${state}&lga=${lga}&disease=cancer`);
    const { data: malariaSummary } = await axios.get(`/statistics/disease-death-summary?year=${selectedYear}&state=${state}&lga=${lga}&disease=malaria`);
   
    const _cancerData = ageData.map(d => {
      const value = cancerSummary.find(c => c.name === d.name);
      if (value) {
        return {
          name: d?.name,
          value: value?.value,
          fill: d?.fill
        }
      }
      return undefined
    }).filter(c => c !== undefined);

    const _malariaData = ageData.map(d => {
      const value = malariaSummary.find(c => c.name === d.name);
      if (value) {
        return {
          name: d?.name,
          value: value?.value,
          fill: d?.fill
        }
      }
      return undefined
    }).filter(c => c !== undefined);

    setCardioData(_malariaData);
    setCancerData(_cancerData);
    setData(ageData.map(d => ({
      name: d?.name,
      fill: d?.fill,
      value: d?.total?.count || 0
    })));
    // set age data
    setAgeData(ageSummary);
    // set sex data
    setSexData(_sexData);
    setSexSummary(_sexSummary);
  };

  useEffect(() => {
    if (!years?.length) {
      setYears(generateYears());
    }
    generateData()

    // eslint-disable-next-line
  }, [years, state, lga, selectedYear]);

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
              { parseInt(sexSummary?.total || 0).toLocaleString() }
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
              { parseInt(sexSummary?.male || 0).toLocaleString() }
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
              { parseInt(sexSummary?.female || 0).toLocaleString() }
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
              { parseInt(sexSummary?.unknown || 0).toLocaleString() }
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
                Malaria
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
                      ), 0) / 100
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
                      ), 0) / 100
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
                      ), 0) / 100
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
