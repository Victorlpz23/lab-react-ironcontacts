import React from 'react'


function Contact({ contact }) {
  return (
    <tr className="">
        <td><img  className="m-2" src={contact.pictureUrl} alt="pictureUrl" style={{ width: 60 }} /></td>
        <td className="m-2">{contact.name}</td>
        <td className="m-2">{contact.popularity.toFixed(2)}</td>
        <td>{contact.wonOscar ? "🏆" : "" }</td>
        <td>{contact.wonEmmy ? "🏆" : "" }</td>
    </tr>
  )
}

export default Contact