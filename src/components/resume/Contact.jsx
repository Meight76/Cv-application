import PhoneIcon from '../../icons/Phone.jsx';
import Email from '../../icons/Email.jsx';
import Location from '../../icons/Location.jsx';
import Linkedin from '../../icons/Linkedin.jsx';

export default function Contact({ contactInfo }) {
  const { phone, email, location, linkedin } = contactInfo;
  return (
    <ul className="contact-items">
      <li className="phone">
        <PhoneIcon />
        <strong>Phone:</strong>
        {phone || <span className="blank-camp">[Your Number]</span>}
      </li>
      <li className="email">
        <Email />
        <strong>Email:</strong>
        {email || <span className="blank-camp">[Your Email]</span>}
      </li>
      <li className="location">
        <Location />
        <strong>Location:</strong>
        {location || <span className="blank-camp">(City, State)</span>}
      </li>
      <li className="linkedin">
        <Linkedin />
        <strong>Linkedin:</strong>
        {linkedin || <span className="blank-camp">[Your Profile]</span>}
      </li>
    </ul>
  );
}
