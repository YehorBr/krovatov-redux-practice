export const CatalogMenu = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("catalog-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };

  const toggleSubMenu = (index) => {
    const subMenu = document.getElementById(`sub-${index}`);
    if (subMenu) {
      subMenu.style.display =
        subMenu.style.display === "block" ? "none" : "block";
    }
  };

  const categories = [
    {
      name: "Ліжка",
      sub: ["Односпальні ліжка", "Двоспальні ліжка", "З підйомним механізмом"],
    },
    {
      name: "Матраци",
      sub: [
        "Односпальні матраци",
        "Двоспальні матраци",
        "Пружинний блок Bonnel",
        "Пружинний блок Pocket Spring",
        "Безпружинні матраци",
        "Матраци з ефектом Зима-Літо",
        "Футони",
        "Дитячі матраци",
        "Матраци Економ",
      ],
    },
    { name: "М’які меблі", sub: ["Дивани", "Крісла", "Пуфи", "Кутки"] },
    { name: "Шафи", sub: ["Шафи-купе", "Розпашні шафи", "Кутові шафи"] },
    { name: "Комоди", sub: ["Дерев’яні комоди", "Комоди з МДФ"] },
    { name: "Тумби", sub: ["Під ТВ", "Для спальні", "Для передпокою"] },
    { name: "Столи", sub: ["Обідні", "Письмові", "Журнальні"] },
    { name: "Стільці", sub: ["Кухонні", "Барні", "Офісні"] },
    { name: "Меблеві стіни", sub: ["Для вітальні", "Модульні", "Сучасні"] },
    { name: "Кухні", sub: ["Під замовлення", "Готові гарнітури"] },
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
        {categories.map((cat, index) => (
          <div key={index}>
            <div
              onClick={() => toggleSubMenu(index)}
            >
              <span>{cat.name}</span>
              {Array.isArray(cat.sub) && (
                <span style={{ fontSize: "12px", color: "#555" }}>➤</span>
              )}
            </div>

            {Array.isArray(cat.sub) && (
              <div
                id={`sub-${index}`}
              >
                {cat.sub.map((subItem, i) => (
                  <div key={i}>
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
