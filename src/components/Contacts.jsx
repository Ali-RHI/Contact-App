import { useState } from "react";
import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js";
import { v4 } from "uuid";
import styles from '../components/Contacts.module.css'

export function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        id: ""
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) { setAlert("Please enter valid data!"); return }

        setAlert("")
        const newContact = { ...contact, id: v4() }
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            id: ""
        });
    };

    const deleteHandler = id => {
        const newContacts = contacts.filter((contact) => contact.id != id)
        setContacts(newContacts)
    }


    return (
        <div className={ styles.container }>
            <div className={ styles.form }>{ inputs.map((input, index) => (<input key={ index } type={ input.type } placeholder={ input.placeholder } name={ input.name } value={ contact[input.name] } onChange={ changeHandler } />)) }
                <button onClick={ addHandler }>Add Contact</button>
            </div>
            <div
                className={ styles.alert }>{ alert && <p>{ alert }</p> }</div>
            <ContactsList contacts={ contacts } deleteHandler={ deleteHandler } />
        </div>
    );
};

export default Contacts;
