import { useState } from "react";
export function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        setContacts((contacts) => [...contacts, contact]);
        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
    };


    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="firstName"
                    name="firstName"
                    value={ contact.firstName }
                    onChange={ changeHandler }
                />
                <input
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={ contact.lastName }
                    onChange={ changeHandler }
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={ contact.email }
                    onChange={ changeHandler }
                />
                <input
                    type="number"
                    placeholder="phone"
                    name="phone"
                    value={ contact.phone }
                    onChange={ changeHandler }
                />
                <button onClick={ addHandler }>Add Contact</button>
            </div>
        </div>
    );
};

export default Contacts;
