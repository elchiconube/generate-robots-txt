import { Theme, Container, Heading } from "@radix-ui/themes";
import styles from "./contribute.module.css";
import CONSTANTS from "@/constants";

export default function Contribute() {
  return (
    <Theme>
      <Container className={styles.container} maxWidth="var(--container-3)">
        <article className={styles.article}>
          <figure>
            <img
              src="/images/contribute.svg"
              width={400}
              height={400}
              alt="Robots.txt"
            />
          </figure>
          <div>
            <Heading size="8" className={styles.title}>
              Do you want to contribute?
            </Heading>
            <p className={styles.text}>
              I know sometimes it's hard to contribute on open source projects but
              I'm here to help you. You can contribute to this project by adding
              new features, fixing bugs, or improving the existing code creating a
              pull request or issue on our{" "}
              <a
                href={CONSTANTS.repository}
                title="Github project"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub repository
              </a>{" "}
              .
            </p>

            <p className={styles.text}>
              Contributing to open source projects is a great way to learn new
              things, improve your skills, and help the community. You can start
              by reading the project's documentation, checking the issues, and
              creating a pull request. If you have any questions, feel free to
              contact me on{" "}
              <a
                href={CONSTANTS.twitter}
                title="Twitter profile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter / X
              </a>{" "}
            </p>

            <p className={styles.text}>
              Thanks for your interest in contributing to this project. I'm
              looking forward to seeing your contributions. Let's make this
              project even better together .
            </p>
          </div>
        </article>
      </Container>
    </Theme>
  );
}
