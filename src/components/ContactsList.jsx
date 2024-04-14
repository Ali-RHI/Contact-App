import React from 'react'

function ContactsList({ contacts }) {
    return (
        <div>
            <h3>Contacts List</h3>
            <ul>
                { contacts.map((contact) => (
                    <li key={ contact.id }>{ contact.firstName }</li>
                )) }
            </ul>
        </div>
    )
}

export default ContactsList