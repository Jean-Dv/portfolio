import { Head } from "$fresh/runtime.ts";
import ThemeChange from "../islands/Theme.tsx";

export function Header() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/components/header.min.css" />
      </Head>
      <header class="header__container">
        <div class="left__content">
          <img src="/images/triangle.png" class="header__logo" alt="Logo" />
          <a href="#projects">View Projects</a>
        </div>
        <div class="right__content">
          <div class="settings__buttons">
            <ThemeChange />
          </div>
          <div className="hireme__button">
            <img src="/images/chat.png" class="header__icon" alt="chat" />
            <a href="mailto:mrjunior127@gmail.com">Hire me</a>
          </div>
        </div>
      </header>
    </>
  );
}
