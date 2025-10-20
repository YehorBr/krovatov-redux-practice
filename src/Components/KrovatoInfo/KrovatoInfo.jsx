
import { SectionWrapper, TextSection, IconsSection, IconCard } from "./KrovatoInfo.styled";
import { Truck, Package, Wrench, Gift } from "lucide-react";


const KrovatoInfo = () => {
  return (
    <SectionWrapper>
      <TextSection>
        <h2>KROVATO — коли потрібні якісні меблі за доступною ціною!</h2>
        <p>
          Якщо в пошуковий рядок браузера ввести запит: «Куплю ліжко, шафу,
          диван», система видасть сотні продавців, що спеціалізуються з продажу
          цього товару. Але далеко не всі магазини та сайти в інтернеті можуть
          запропонувати такий самий різноманітний асортимент, як наша компанія.
        </p>
        <p>
          Ми співпрацюємо лише з найкращими вітчизняними та зарубіжними
          фабриками. Для нас важливо, щоб товар відповідав міжнародним
          стандартам якості, був довговічним, красивим та екологічно чистим.
        </p>
      </TextSection>

      <IconsSection>
        <IconCard>
          <Truck />
          <h4>Безкоштовна доставка</h4>
          <p>Швидко і зручно по всій Україні</p>
        </IconCard>

        <IconCard>
          <Package />
          <h4>Безкоштовна збірка</h4>
          <p>Наші фахівці зберуть усе якісно</p>
        </IconCard>

        <IconCard>
          <Wrench />
          <h4>Післягарантійне обслуговування</h4>
          <p>Підтримка після покупки</p>
        </IconCard>

        <IconCard>
          <Gift />
          <h4>Знижки клієнтам</h4>
          <p>Постійним клієнтам — бонуси</p>
        </IconCard>
      </IconsSection>
    </SectionWrapper>
  );
};

export default KrovatoInfo;
