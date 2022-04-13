import React, { createContext, useState } from 'react';

export const context = createContext({}); // initial state

export const BirthProvider = (props) => {
  const [child, setChild] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    otherNames: '',
    dob: '',
    gender: 'male',
    placeOfBirth: '',
    registrationCenter: '',
    state: '',
    lga: '',
    town: ''
  });

  const [mother, setMother] = useState({
    condition: 'alive',
    firstName: '',
    lastName: '',
    maidenName: '',
    dob: '',
    occupation: '',
    address: '',
    state: '',
    lga: ''
  });

  const [father, setFather] = useState({
    condition: 'alive',
    legality: 'biological',
    firstName: '',
    lastName: '',
    middleName: '',
    dob: '',
    occupation: '',
    address: '',
    state: '',
    lga: ''
  });

  const isChildComplete = () => child.firstName.length 
    && child.lastName.length 
    && child.middleName.length
    && child.dob
    && child.gender.length
    && child.placeOfBirth.length
    && child.registrationCenter.length
    && child.state.length
    && child.lga.length
    && child.town.length;

  const isMotherComplete = () => mother.firstName.length 
    && mother.lastName.length 
    && mother.maidenName.length
    && mother.dob
    && mother.occupation.length
    && mother.address.length
    && mother.state.length
    && mother.lga.length
    && mother.condition.length;

  const isFatherComplete = () => father.firstName.length 
    && father.legality.length
    && father.lastName.length 
    && father.dob
    && father.occupation.length
    && father.address.length
    && father.state.length
    && father.lga.length
    && father.condition.length;

  const [tabIndex, setTabIndex] = useState(0);
  return (
    <context.Provider value={{
      child,
      mother,
      father,
      setChild,
      setMother,
      setFather,
      isChildComplete,
      isMotherComplete,
      isFatherComplete,
      tabIndex,
      setTabIndex
    }}>
      {props.children}
    </context.Provider>
  );
}