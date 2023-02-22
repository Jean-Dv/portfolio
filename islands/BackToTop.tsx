import { useEffect, useState } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const { scrollY } = window;
    setIsVisible(scrollY > 100);
  };

  useEffect(() => {
    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/islands/backtotop.min.css" />
      </Head>
      <div class={`backtop__container ${isVisible ? "isVisible" : ""}`}>
        <i onClick={scrollToTop} class="fa fa-arrow-up icon-3d"></i>
      </div>
    </>
  );
}
