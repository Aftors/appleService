import React from 'react'
import classes from './footerbox.module.scss'

const FooterBox = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.contacts}>

      </div>
      <div className={classes.copyright}>
        <p>
        © 2015-2024 Сервисный центр AppleService ("Эпл сервис"). Название и логотип являются товарным знаком на территории РФ. Все права защищены.
        </p>
        <p>
        ИП Слиш В.С. | ИНН: 345987154326 | ОГРНИП: 300056934005936
        </p>
        <p>
        Условия пользования сайтом | <a href="">Политика конфиденциальности</a>
        </p>
      </div>
    </div>
  )
}

export default FooterBox
