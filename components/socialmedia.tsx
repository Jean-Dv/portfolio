import { Head } from "$fresh/runtime.ts";
import { SocialMediaProps } from "../types/types.d.ts";

export function SocialMedia({ social }: SocialMediaProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/components/socialmedia.min.css" />
      </Head>
      <div class="social__container">
        {social.map(({ name, url }: { name: string; url: string }) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={url}
            class={`fa-brands fa-${name.toLowerCase()} icon-3d`}
          />
        ))}
      </div>
    </>
  );
}
