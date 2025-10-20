import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import './style.css'

export const Help = () => {
  return (
    <>
      <p className='Help'>Допомога і консультація:</p>
      <ul>
        <li>
          <FaWhatsapp className='Help-icon-wa' />
        </li>
        <li>
          <FaTelegram className='Help-icon-tg' />
        </li>
        <li>
          <FaViber className='Help-icon-vb' />
        </li>
      </ul>
    </>
  );
};
