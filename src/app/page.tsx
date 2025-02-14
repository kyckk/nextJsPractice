import Link from "next/link"

import  style  from "./style.module.css"
import { getCurrentWeather } from "./utils/getCurrentWeather";
import { getTime } from "./getTime";
import RevalidateButton from "./components/RevaildateButton";


export default async function Home() {
  const res = await getCurrentWeather('seoul');
  const time =await getTime(res.location.tz_id);
  console.log(time);
  return <>
          <h1>날씨 앱</h1>
          <h3>{time.dateTime}</h3>
          <ul className={style.list}>
            <li>
              <Link href={"/seoul"}>서울</Link>
              <span>{res.current.condition.text}</span>
            </li>
            <li>
            <Link href={"/newyork"}>뉴옥</Link>
            
            </li>
            <li>
              <Link href={"/london"}>런던</Link>
          </li>

          </ul>
          <RevalidateButton tag={'time'}></RevalidateButton>
        </>
}
