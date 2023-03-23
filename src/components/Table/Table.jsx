import React, { useState } from 'react'
import Contact from '../Contacts/Contact'
import contactsData from "../../contacts.json"

const restContacts = contactsData.map( x => x );

for(let i = 0; i < 5; i++){
  restContacts.shift();
}

function Table() {
  const contactsArray = contactsData.slice(0,5);
  const [contacts, setContacts] = useState(contactsArray);
  
  

  function handleAddRandomContact() {
    if(restContacts.length !== 0) {
      const index = (Math.floor(Math.random()*restContacts.length))
      setContacts([...new Set([restContacts[index], ...contacts])])
    
      restContacts.splice(index, 1);
    } else {
      return
    }
  }
  

 

  return (
    <div>
      <h1 className="mt-3 mb-3 fw-bold">IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <table className="m-3">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>{contacts.map(contact => <Contact contact={contact} key={contact.id} />)}</tbody>
      </table>
    </div>
  )
}

export default Table