

export const CatalogMenu = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("catalog-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  const categories = [
    "Ліжка",
    "Матраци",
    "М’які меблі",
    "Шафи",
    "Комоди",
    "Тумби",
    "Столи",
    "Стільці",
    "Меблеві стіни",
    "Кухні",
  ];

  return (
    <div>

      <button
        onClick={toggleMenu}
      >
        Каталог
      </button>
      <div
        id="catalog-menu"
      >
        {categories.map((item, index) => (
          <div
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
