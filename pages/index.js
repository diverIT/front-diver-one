// import { Main } from "next/document";

import Link from "next/link";
import Title from "../components/title/Title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
   

      <main className={styles.main}>
        <Link href="/login">
          <a>
            <Title styles={styles.title} />
          </a>
        </Link>
      </main>
    </div>
  );
}
