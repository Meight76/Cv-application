import InputSetup from './Input-setup.jsx';

export default function ContactInputs({contact, setContact}) {

    function changeContact(prop, newValue) {
        const newContact = {...contact};
        newContact[prop] = newValue;
        setContact(newContact);
    }
    return (
        <>
            <InputSetup id='phone' value={contact.phone || ''} type='tel' placeholder='111-111-1111' onChange={e => changeContact('phone', e.target.value)}/>
            <InputSetup id='email' value={contact.email || ''} type='email' placeholder='someone@example.com' onChange={e => changeContact('email', e.target.value)}/>
            <InputSetup id='location' value={contact.location || ''} placeholder='City, state' onChange={e => changeContact('location', e.target.value)}/>
            <InputSetup id='linkedin' value={contact.linkedin || ''} placeholder='username' onChange={e => changeContact('linkedin', e.target.value)}/>
        </>
    );
}
