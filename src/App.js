import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <header>
            <nav>
              <a href="/#" Logo></a>
              <ul>
                <li>
                  <a>
                    <h1>
                      <span class="highlight"> &lt;h1&gt;</span>:wave: I'm
                      &#123;name&#125;, an award-winning multidisciplinary
                      designer based in &#123;location&#125;, with a focus on
                      &#123;ability&#125; and a love of &#123;creative
                      quirk&#125;<span class="highlight"> &lt;/h1&gt;</span>
                    </h1>
                  </a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
              </ul>
              <div></div>
            </nav>
          </header>
        </section>
        <section>section2</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
