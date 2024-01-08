import Link from 'next/link'
import scss from './join.module.scss'
import Image from 'next/image'

const page = () => {
  return (
    <main>
      <section className={scss.hero}>
        <div className={scss.hero__container}>
          <div className={scss.hero__content}>
            <h1>Aitim Trading</h1>
            <p>Гарантия вашего успеха в мире финансовых возможностей!</p>
            <Link href='#'>Я начинаю</Link>
          </div>
        </div>
        <div className={scss.hero__right}>
          <Image src='/joinHero.png' width={720} height={762} alt='hero img' />
        </div>
      </section>
      <section className={scss.join}>
        <div className={scss.join__container}>
          <h2>Присоединяйтесь к нашему комьюнити</h2>
          <p>Наше сообщество предоставляет все инструменты, необходимые для упрощения процесса обучения дневной торговле.  Общайтесь с нашей командой и другими трейдерами со всего мира в нашем торговом чате.</p>
          <p>Продолжай скролить чтобы узнать больше</p>
        </div>
      </section>
      <section className={scss.info}>
        <Image src='/joinInfo.png' width={645} height={798} alt='img' />
        <div className={scss.info__container}>
          <h3>Обучайся. Инвестируй. Расти вместе с нами!</h3>
          <div>
            <div>
              <h4>Финансовая грамотность</h4>
              <p>Обучение трейдингу помогает развить финансовую грамотность, понимание рынков, инструментов и экономических процессов.</p>
            </div>
            <div>
              <h4>Возможность заработка</h4>
              <p>Успешные трейдеры имеют возможность зарабатывать на финансовых рынках, что может стать дополнительным источником дохода.</p>
            </div>
            <div>
              <h4>Понимание рисков и управление капиталом</h4>
              <p>Обучение трейдингу научит понимать риски и эффективно управлять капиталом, что важно для успешной торговли.</p>
            </div>
            <div>
              <h4>Коммуникация и аналитические навыки</h4>
              <p>Трейдинг требует аналитического мышления и умения эффективно коммуницировать свои идеи и решения.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={scss.quote}>
          <h1>"Обучение — это единственное богатство, которое нельзя украсть." </h1>
          <p>Альберт Эйнштейн</p>
      </section>
      <section className={scss.ready}>
        <h1>Готов стать успешным трейдером ?</h1>
        <div className={scss.ready__container}>
          <div className={scss.ready__card}>
            <Link href=''>Присоединиться</Link>
          </div>
          <div className={scss.ready__card}>
            <Link href=''>Присоединиться</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page