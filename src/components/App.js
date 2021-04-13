import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    apiFacade.getPersons((data)=>{
      console.log('DATA:',data);
      setPersons(data);
    });
  },[]);

  const storeAddEditPerson = (person) => {
    apiFacade.addEditPerson(person, (dataPerson)=>{
      //setPersons([...persons,dataPerson]);
      apiFacade.getPersons((data)=>{
        setPersons(data);
      });
    });
  }

  const deletePerson = (id) => {
    apiFacade.deletePerson(id, ()=>{
      apiFacade.getPersons((data)=>{
        setPersons(data);
      });
    });
  }

  const editPerson = (person) => {
    //Call thisfrom the AllPerson control with the  person to edit
    //Set the state variable personToAddEdit with this person (a clone) to make the new value flow down via props
    console.log('from edit method',person);
    setPersonToAddEdit({...person});
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
