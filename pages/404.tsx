import Link from "next/link";
import styles from "../styles/error.module.scss";

const ErrorPage = () => {
  return (
    <>
      <h1 className={styles.error__title}>Error 404</h1>

      <p className={styles.error}>Please <Link href="/">go back</Link> to safety</p>
    </>
  );
};

export default ErrorPage;
