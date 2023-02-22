import moment from "moment";
import { Head } from "$fresh/runtime.ts";
import { ExperienceItemProps } from "../types/types.d.ts";

export default function ExperienceItem(props: ExperienceItemProps) {
  const monthsString: Record<number, string> = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const from = `${monthsString[new Date(props.from).getMonth()]}. ${
    new Date(props.from).getFullYear()
  }`;
  const to = props.to === "Present"
    ? "Present"
    : `${monthsString[new Date(props.to).getMonth()]}. ${
      new Date(props.to).getFullYear()
    }`;
  const duration = moment(props.to).diff(moment(props.from), "months") + 1;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/styles/islands/experience-item.min.css"
        />
      </Head>
      <div class="experience__item__card">
        <h4>{props.title}</h4>
        <div class="experience__item__date">
          <span>{from} - {to} · {duration} months</span>
        </div>
        <div class="experience__item__location">
          <span>{props.location}</span>
        </div>
        <div class="experience__item__technologies">
          {props.technologies.map((technology) => (
            <i class={`fa-brands fa-${technology.toLowerCase()}`} />
          ))}
        </div>
      </div>
    </>
  );
}
