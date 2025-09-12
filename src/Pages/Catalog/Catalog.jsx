

import { useState } from "react";
export const Catalog = () => {
  <h2>Каталог</h2>;
};



export const CatalogMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Ліжка", icon: "" },
    { name: "Матраци", icon: "" },
    { name: "М’які меблі", icon: "" },
    { name: "Шафи", icon: "" },
    { name: "Комоди", icon: "" },
    { name: "Тумби", icon: "" },
    { name: "Столи", icon: "" },
    { name: "Стільці", icon: "" },
    { name: "Меблеві стіни", icon: "" },
    { name: "Кухні", icon: "" },
  ];
  return(
  <div >
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        Каталог
      </button>
      </div>
  )
      }
       
