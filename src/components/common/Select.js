import React from 'react';
import { 
  Select
} from '@chakra-ui/react';
import data from '../../utils/states_and_lgas.json';

const StateSelect = (props) => {
  return (
    <Select
      placeholder="Select State" 
      textColor="txt.muted"
      iconColor="txt.primary"
      {...props}
    >
      { !props.isLagos ? data.map(({ state, alias }) => (
        <option value={alias} key={alias}>
          { state }
        </option>
      )): (
        <option value="lagos" key="lagos">
          Lagos
        </option>
      )}
    </Select>
  );
};

const LgaSelect = (props) => {
  const { 
    state
  } = props;

  const { lgas = [] } = data?.find(({ alias }) => alias === state) || { lgas: [] };
  return (
    <Select
      placeholder="Local govt area" 
      textColor="txt.muted"
      iconColor="txt.primary"
      {...props}
    >
      { lgas?.map((lga) => (
        <option value={lga.toLowerCase()} key={lga.toLowerCase()}>
          { lga }
        </option>
      ))}
    </Select>
  );
};

export { StateSelect, LgaSelect };
