import { Head } from "$fresh/runtime.ts";
import ExperienceItem from "../islands/experience-item.tsx";
import { ExperienceItemsProps } from "../types/types.d.ts";

export function ExperiencesList({ experience }: ExperienceItemsProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/styles/components/experiences-list.min.css"
        />
      </Head>
      <div class="experiences__list">
        <div class="experiences__list__container">
          <div class="experiences__item__lines">
            {experience.map((_) => (
              <>
                <div class="experiences__item__dot"></div>
                <div class="experiences__item__line"></div>
              </>
            ))}
          </div>
          <div class="experiences__item__cards">
            {experience.map((
              { title, company, from, to, technologies, location },
            ) => (
              <>
                <ExperienceItem
                  title={title}
                  company={company}
                  from={from}
                  to={to}
                  technologies={technologies}
                  location={location}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
