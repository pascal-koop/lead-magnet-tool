<template>
  <div>
    <header class="header">
      <img class="header-logo-image" src="/logo-example.svg" alt="example logo" />
    </header>

    <slot />

    <footer class="footer">
      <div class="footer-inner">
        <ul class="footer-link-list">
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/leistungen/">Leistungen</a></li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/projekte/">Projekte</a></li>
          <li class="footer-link">
            <a target="_blank" href="https://www.example.com/de/team/">Team</a>
          </li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/jobs/">Jobs</a></li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/blog/">Blog</a></li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/kontakt/">Kontakt</a></li>
          <li class="footer-link">
            <a target="_blank" href="https://www.example.com/de/datenschutzerklaerung/">Datenschutz</a>
          </li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/de/impressum/">Impressum</a></li>
          <li class="footer-link"><a target="_blank" href="https://www.example.com/en/">English</a></li>
        </ul>
        <p class="footer-copyright">© 2023 example GmbH</p>
      </div>
      <div class="socials">
        <h2 class="socials-title">folge uns auf</h2>
        <ul class="social-list">
          <li class="social-item">
            <a
              class="social-link"
              href="https://twitter.com/example"
              target="_blank"
              title="Twitter-Account unter twitter.com/example"
            >
              Twitter
            </a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              href="https://github.com/example"
              target="_blank"
              title="Github Organisation unter github.com/example"
            >
              Github
            </a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              href="https://www.linkedin.com/company/example"
              target="_blank"
              title="Unternehmensseite auf LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              href="https://www.xing.com/companies/example"
              target="_blank"
              title="Unternehmensseite bei Xing"
            >
              Xing
            </a>
          </li>
          <li class="social-item">
            <a
              class="social-link"
              href="https://social.example.net/@example "
              target="_blank"
              title="Mastodon unter social.example.net"
            >
              Mastodon
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
