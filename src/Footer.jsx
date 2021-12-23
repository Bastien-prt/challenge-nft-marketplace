import './Footer.scss';

import { BsFillHandbagFill } from 'react-icons/bs';
import { AiFillCreditCard } from 'react-icons/ai';
import { AiFillFire } from 'react-icons/ai';

function Footer() {
  const commercialAdd = [
    {
      icon: <AiFillFire />,
      text: 'Trusted with 10 Achievement',
    },
    {
      icon: <BsFillHandbagFill />,
      text: 'Easy Buy & Submit Best NFT Art',
    },
    {
      icon: <AiFillCreditCard />,
      text: 'Get Discount Pro Membership',
    },
  ];

  return (
    <div className="footer-container">
      {commercialAdd.map((item) => (
        <div className="commercial-div">
          <span className="icon"> {item.icon} </span>
          <p className="text"> {item.text} </p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
