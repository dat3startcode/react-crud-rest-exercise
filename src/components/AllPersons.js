import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {/*Add the rows here */}
          {persons.map(person=><tr key={person.id}><td>{person.age}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.email}</td><td>
<a href="xx" onClick={(e)=>{
  e.preventDefault(); 
  editPerson(person)
  }}>edit</a> / 
  <a href="xx" onClick={(e)=>{
    e.preventDefault();
    deletePerson(person.id)
    }}>delete</a>
</td>
</tr>)}
        </tbody>
      </table>
      
      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
