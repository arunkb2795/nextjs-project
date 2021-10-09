import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function MainPage() {
  return (
    <div className={styles.Container}>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href="/home">Home Page</Link>
        </li>
        <li>
          <Link href="/lists">List Page</Link>
        </li>
      </ul>
    </div>
  );
}

//we cannot use normal <a> tag for next page because a tag refresh the page and wipe out all the saved states.
