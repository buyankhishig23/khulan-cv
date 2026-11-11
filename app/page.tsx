/* type: service (site-kind other)
   deal: hero split, nav nav-centre, close close-type (close-photo dealt again: the one photograph
   is the hero's), footer footer-columns, rhythm dark-band, buttons block, mark initial
   palette three-stones, type source-serif (the first pairings have no Cyrillic)
   moments: word-highlight in #about */

const MAIL = "mailto:hulanm765@gmail.com";

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="nav__logo" href="#top">
      Мөнхбат Хулан
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav nav--centre">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">
            Агуулга руу очих
          </a>
          <Logo />
          <nav className="nav__links" aria-label="Үндсэн цэс">
            <div className="nav__item">
              <a className="nav__link" href="#experience">
                Туршлага
              </a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#about">
                Тухай
              </a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#skills">
                Чадвар
              </a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#education">
                Боловсрол
              </a>
            </div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href={MAIL}>
              Имэйл бичих
            </a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Цэс">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true"></span>
                  МУИС, нийгмийн ажлын бакалавр, 2024
                </p>
                <h1 id="hero-h">Зээлийн менежер Мөнхбат Хулан</h1>
                <p className="hero__lead">
                  Тус Финтек ББСБ-д хугацаа хэтэрсэн зээлийг бууруулах ажлыг хариуцдаг. Өмнө нь Жүр Үр ХХК-д хүний
                  нөөцийг нэг жил хариуцсан.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href={MAIL}>
                    Имэйл бичих
                  </a>
                  <a className="btn btn--secondary" href="#experience">
                    Туршлага үзэх
                  </a>
                </div>
                <dl className="hero-facts">
                  <div>
                    <dt>Одоо</dt>
                    <dd>Тус Финтек ББСБ</dd>
                  </div>
                  <div>
                    <dt>Өмнө нь</dt>
                    <dd>Жүр Үр ХХК</dd>
                  </div>
                  <div>
                    <dt>Хэл</dt>
                    <dd>Англи, солонгос</dd>
                  </div>
                </dl>
              </div>
              <div className="hero__media span-6 start-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  srcSet="/profile-800.jpg 800w, /profile.jpg 1364w"
                  sizes="(max-width: 1023px) 100vw, 628px"
                  alt="Мөнхбат Хулан номын тавиурын өмнө сандал дээр сууж байна"
                  width={1364}
                  height={2048}
                  style={{ ["--ly-pos" as string]: "50% 22%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="Мөнхбат Хулангийн хөрөг"
                />
                <div className="ly-float">
                  <div className="ly-float__row">
                    <span className="ly-live">Одоогийн ажил</span>
                    <span>2025.07-оос</span>
                  </div>
                  <div className="ly-float__title">Тус Финтек ББСБ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <div className="section-head">
                <h2 id="experience-h">Ажлын туршлага</h2>
                <p>2024 оны 6-р сараас хойш хоёр байгууллагад ажилласан.</p>
              </div>
              <ul className="rows">
                <li>
                  <span className="rows__name">
                    Зээлийн эргэн төлөлтийн менежер
                    <small>Тус Финтек ББСБ · 2025.07 – одоо</small>
                  </span>
                  <p>Зээлийн эргэн төлөлтийг хянаж, хугацаа хэтэрсэн зээлийг бууруулах арга хэмжээ авдаг.</p>
                  <p>Чанаргүй зээлийн түвшинг бууруулж, мөнгөн урсгалыг тогтвортой байлгахад оролцдог.</p>
                  <p>Харилцагчийн төлбөрийн сахилга, санхүүгийн хариуцлагыг сайжруулах ажил хийдэг.</p>
                </li>
                <li>
                  <span className="rows__name">
                    Хүний нөөцийн мэргэжилтэн
                    <small>Жүр Үр ХХК · 2024.06 – 2025.06</small>
                  </span>
                  <p>Бүрдүүлэлт, сонгон шалгаруулалт, хөдөлмөрийн харилцааг бие даан хариуцсан.</p>
                  <p>Ажлын байрны тодорхойлолт боловсруулж, тушаал гаргаж, баримт бичгийг хөтөлсөн.</p>
                </li>
              </ul>
            </div>
            <div className="frame frame--fill logo-frame span-6 start-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tusfintech.jpg"
                alt="Тус Финтек ББСБ-ын «Тус зээлийн апп» лого"
                width={1200}
                height={630}
                loading="lazy"
                data-source="client"
                data-subject="Тус Финтек ББСБ-ын лого"
              />
            </div>
          </div>
        </section>

        {/* word-highlight: one statement in its own section, on the page's one dark band */}
        <section
          className="section statement ground-inverse"
          id="about"
          data-moment="word-highlight"
          aria-label="Миний тухай"
        >
          <div className="wrap">
            <p className="t-label">Миний тухай</p>
            <p className="mo-wh__text">
              Хүний нөөцийн бүрдүүлэлт, сонгон шалгаруулалт, хөдөлмөрийн харилцааг бие даан хариуцаж байсан. Одоо{" "}
              <strong>чанаргүй зээлийг</strong> бууруулж, мөнгөн урсгалыг тогтвортой байлгах ажил хийж байна.
            </p>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-h">
          <div className="wrap grid grid--top">
            <div className="span-5">
              <div className="section-head">
                <h2 id="skills-h">Ур чадвар</h2>
                <p>Хоёр ажлын байранд өдөр тутам хэрэглэсэн мэдлэг, хэл, програм.</p>
              </div>
              <ul className="rows">
                <li>
                  <span className="rows__name">Мэргэжлийн</span>
                  <p>Хүний нөөц, хөдөлмөрийн хууль, зээлийн эргэн төлөлтийн хяналт, баримт бичиг</p>
                </li>
                <li>
                  <span className="rows__name">Гадаад хэл</span>
                  <p>Англи, солонгос</p>
                </li>
                <li>
                  <span className="rows__name">Хувийн</span>
                  <p>Багаар ажиллах, манлайлал, шинжилгээ, асуудал шийдвэрлэх, цаг баримтлах</p>
                </li>
                <li>
                  <span className="rows__name">Програм</span>
                  <p>Word, Excel, PowerPoint, Figma, Canva, CapCut</p>
                </li>
              </ul>
            </div>
            <div
              className="frame frame--fill tools span-6 start-7"
              role="img"
              aria-label="Word, Excel, PowerPoint, Figma програмын тэмдэг"
            >
              <ul>
                <li>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ic" data-icon="docx" src="/assets/icons/docx.svg" alt="" width={72} height={72} />
                  <span>Word</span>
                </li>
                <li>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ic" data-icon="xlsx" src="/assets/icons/xlsx.svg" alt="" width={72} height={72} />
                  <span>Excel</span>
                </li>
                <li>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ic" data-icon="pptx" src="/assets/icons/pptx.svg" alt="" width={72} height={72} />
                  <span>PowerPoint</span>
                </li>
                <li>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ic ic-tall" data-icon="figma" src="/assets/icons/figma.svg" alt="" width={48} height={72} />
                  <span>Figma</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="education-h">Боловсрол, шагнал</h2>
              <p>Монгол Улсын Их Сургуулийг 2024 онд төгссөн. Спортын тэмцээнд дөрвөн удаа шагналт байр эзэлсэн.</p>
            </div>
            <div className="grid grid--top">
              <ul className="rows span-5">
                <li>
                  <span className="rows__name">
                    Нийгмийн ажлын бакалавр
                    <small>МУИС, Нийгмийн ухааны салбар сургууль</small>
                  </span>
                  <span className="rows__value">2020–2024</span>
                </li>
                <li>
                  <span className="rows__name">
                    Голч дүн
                    <small>Бакалаврын хөтөлбөр</small>
                  </span>
                  <span className="rows__value">3.3</span>
                </li>
                <li>
                  <span className="rows__name">
                    «Залуу нийгмийн ажилтан» клубийн дэд тэргүүн
                    <small>Монгол Улсын Их Сургууль</small>
                  </span>
                </li>
              </ul>
              <ul className="rows span-6 start-7" id="awards">
              <li>
                <span className="rows__name">
                  Тэргүүн байр
                  <small>МУИС-ийн Нийгмийн ухааны салбар сургуулийн спортын баг наадам</small>
                </span>
                <span className="rows__value">2022</span>
              </li>
              <li>
                <span className="rows__name">
                  Дэд байр
                  <small>МУИС-ийн Нийгмийн ухааны салбар сургуулийн спортын баг наадам</small>
                </span>
                <span className="rows__value">2023</span>
              </li>
              <li>
                <span className="rows__name">
                  Тэргүүн байр
                  <small>Орхон аймгийн идэрчүүдийн аварга шалгаруулах тэмцээн</small>
                </span>
                <span className="rows__value">2019</span>
              </li>
              <li>
                <span className="rows__name">
                  Тэргүүн байр
                  <small>Орхон аймгийн идэрчүүдийн аварга шалгаруулах тэмцээн</small>
                </span>
                <span className="rows__value">2018</span>
              </li>
              <li>
                <span className="rows__name">
                  Волейболын 1-р зэрэг
                  <small>Мөн сагсан бөмбөг тоглодог</small>
                </span>
              </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Ажлын саналаа имэйлээр илгээнэ үү</h2>
              <p className="t-small muted">Утсаар холбогдох бол доорх дугаарт залгана уу.</p>
            </div>
            <a className="btn btn--primary btn--xl" href={MAIL}>
              Имэйл бичих
              <Arrow />
            </a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-6 stack-4">
                <Logo />
                <p className="footer__lede">Зээлийн эргэн төлөлт, хүний нөөцийн мэргэжилтэн.</p>
              </div>
              <div className="span-3 start-7 footer__col">
                <h3>Танилцуулга</h3>
                <ul>
                  <li>
                    <a href="#experience">Туршлага</a>
                  </li>
                  <li>
                    <a href="#about">Тухай</a>
                  </li>
                  <li>
                    <a href="#skills">Чадвар</a>
                  </li>
                  <li>
                    <a href="#education">Боловсрол</a>
                  </li>
                </ul>
              </div>
              <div className="span-3 footer__col">
                <h3>Холбоо барих</h3>
                <ul>
                  <li>
                    <a href={MAIL}>hulanm765@gmail.com</a>
                  </li>
                  <li>
                    <a href="tel:+97695619882">+976 9561 9882</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Мөнхбат Хулан</span>
              <span>Бүтээгдэхүүний нэр, лого нь эзэмшигчдийнхээ барааны тэмдэг.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
