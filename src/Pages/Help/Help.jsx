import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import './style.css'

export const Help = () => {
  return (
    <>
    <div className='Help-block'>
      <p className='Help'>Допомога і консультація:</p>
      <ul className='Help-icon-block'>
        <li className="bali">
          <FaWhatsapp className='Help-icon-wa' />
        </li>
        <li className="bali">
          <FaTelegram className='Help-icon-tg' />
        </li>
        <li className="bali">
          <FaViber className='Help-icon-vb' />
        </li>
      </ul>
      </div>
    </>
  );
};
