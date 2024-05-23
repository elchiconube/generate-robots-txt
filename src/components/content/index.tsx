import Image from "next/image";
import { Container, Heading, Link } from "@radix-ui/themes";

import styles from "./content.module.css";
import CONSTANTS from "@/constants";

export default function Content() {
  return (
    <Container className={styles.container} maxWidth="var(--container-3)">
      <article className={styles.article}>
        <figure>
          <Image
            src="/images/code.svg"
            width={400}
            height={400}
            alt="<span className={styles.code}>Robots.txt</span>"
          />
        </figure>
        <div>
          <Heading size="8" className={styles.title}>
            Why to use this generator?
          </Heading>
          <p className={styles.text}>
            I developed this free{" "}
            <span className={styles.code}>robots.txt</span> generator and{" "}
            <Link
              href="/validator"
              title="Robots.txt validator tool"
              underline="always"
              weight="bold"
            >
              validator tool
            </Link>{" "}
            to help webmasters, SEO experts, and marketers quickly and easily
            create this required file.
          </p>

          <p className={styles.text}>
            You can start using the ready-made suggestions. In the first case,
            you customize the file by setting up directives (allow or disallow
            crawling), the path (specific pages and files), and the bots that
            should follow the directives. Or you can choose a ready-made{" "}
            <span className={styles.code}>robots.txt</span> template containing
            a set of the most common general and CMS directives. You may also
            add a sitemap to the file.
          </p>

          <p className={styles.text}>
            This is an open-source project, and everyone is welcome to
            participate. You can contribute to the project on our{" "}
            <Link
              href={CONSTANTS.repository}
              title="Github project"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              weight="bold"
            >
              GitHub repository
            </Link>
            .
          </p>
        </div>
      </article>
    </Container>
  );
}
