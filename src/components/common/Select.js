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
      { data.map(({ state, alias }) => (
        <option value={alias}>
          { state }
        </option>
      ))}
    </Select>
  );
};

const LgaSelect = (props) => {
  const { 
    state = 'lagos'
  } = props;

  const { lgas } = data.find(({ alias }) => alias === state)
  return (
    <Select
      placeholder="Local govt area" 
      textColor="txt.muted"
      iconColor="txt.primary"
      {...props}
    >
      { lgas.map((lga) => (
        <option value={lga.toLowerCase()}>
          { lga }
        </option>
      ))}
    </Select>
  );
};

export { StateSelect, LgaSelect };
