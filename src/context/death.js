import React, { createContext, useState } from 'react';

export const context = createContext({});

export const DeathProvider = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const [victim, setVictim] = useState({
    gender: 'male',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    dod: '', // date of death
    deathAddress: '',
    deathState: '',
    deathLga: '',
    deathTown: '',
    state: '',
    lga: '',
    causeOfDeath: ''
  });

  const isVictimComplete = () => victim.firstName
  && victim.middleName
  && victim.lastName
  && victim.dob
  && victim.dod
  && victim.deathAddress
  && victim.deathState
  && victim.deathLga
  && victim.deathTown
  && victim.state
  && victim.lga
  && victim.causeOfDeath;

  return (
    <context.Provider value={{
      victim,
      setVictim,
      isVictimComplete,
      tabIndex,
      setTabIndex
    }}>
      { props.children }
    </context.Provider>
  );
};
