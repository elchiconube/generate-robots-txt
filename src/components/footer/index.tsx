import styles from "./footer.module.css";
import CONSTANTS from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <span className={styles.text}>
            © {currentYear} Generate robots.txt dot com
          </span>
          <div className={styles.icons}>
            <a
              className={styles.link}
              aria-label="GitHub"
              href={CONSTANTS.repository}
              rel="noopener"
              target="_blank"
            >
              <img
                alt="GitHub Logo"
                loading="lazy"
                width="28"
                height="21"
                src="/images/github.svg"
              />
            </a>
            <a
              className={styles.link}
              aria-label="Twitter"
              href={CONSTANTS.twitter}
              rel="noopener"
              target="_blank"
            >
              <img
                alt="X Logo"
                loading="lazy"
                width="21"
                height="21"
                src="/images/x.svg"
                style={{ position: "relative", top: "2px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
