import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

export const Help = () => {
  return (
    <>
      <p>Допомога і консультація:</p>
      <ul>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaTelegram />
        </li>
        <li>
          <FaViber />
        </li>
      </ul>
    </>
  );
};
