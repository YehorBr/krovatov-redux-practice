import React from "react";

import logo from "../../svg/logo-footer.png"
import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  LogoSection,
  Columns,
  Column,
  ContactInfo,
  SocialIcons,
} from "./Footer.styled";
import { Facebook, Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <LogoSection>
          <img src={logo}
           
            alt="Krovato Logo"
           
          />
          <SocialIcons>
            <a href=""><Facebook /></a>
            <a href=""><Instagram /></a>
            <a href=""><MessageCircle /></a>
          </SocialIcons>
        </LogoSection>

        <Columns>
          <Column>
            <h4>Інформація</h4>
            <ul>
              <li>Про нас</li>
              <li>Оплата</li>
              <li>Доставка та збірка</li>
              <li>Відгуки</li>
              <li>Блог</li>
              <li>Контакти</li>
              <li>Мапа сайту</li>
            </ul>
          </Column>

          <Column>
            <h4>Категорії</h4>
            <ul>
              <li>Ліжка</li>
              <li>Матраци</li>
              <li>М’які меблі</li>
              <li>Шафи</li>
              <li>Комоди</li>
              <li>Стільці</li>
              <li>Кухні</li>
            </ul>
          </Column>

          <Column>
            <h4>Клієнтам</h4>
            <ul>
              <li>Акції</li>
              <li>Розпродаж</li>
              <li>Купити в кредит</li>
              <li>Обмін і повернення</li>
              <li>Політика конфіденційності</li>
            </ul>
          </Column>

          <Column>
            <ContactInfo>
              <div>
                <Phone /> 
                <p>+38 067 929-45-45<br/>+38 050 133-45-45</p>
              </div>
              <div>
                <MapPin />
                <p>м. Київ, провулок Ізяславський 52, поверх 2</p>
              </div>
              <div>
                <Clock />
                <p>Працюємо щодня<br/>з 9:00 до 18:00</p>
              </div>
            </ContactInfo>
          </Column>
        </Columns>
      </FooterTop>

      <FooterBottom>
        © KROVATO — Технології сну. 2025. Всі права захищені.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
