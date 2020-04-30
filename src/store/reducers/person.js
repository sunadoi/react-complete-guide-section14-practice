import * as actionType from '../actions';

const initialState = {
  persons: []
}

const person = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDPERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor( Math.random() * 40 )
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionType.DELETEPERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
  }
  return state;
}

export default person;