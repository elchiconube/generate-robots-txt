import { Container, Flex, Separator } from "@radix-ui/themes";

import CONSTANTS from "@/constants";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container px="6" py="2" size="4">
        <Flex gap="2" justify="between" align="center">
          <a
            className={styles.logo}
            href="/"
            title="Generate robots.txt dot com"
          >
            <img
              alt="Generate robots.txt logo"
              loading="lazy"
              width="28"
              height="28"
              src="/images/logo.png"
            />
          </a>
          <Flex gap="5" align="center">
            <a className={styles.nav} href="/" title="Generate your robots.txt">
              Generator
            </a>
            <a
              className={styles.nav}
              href="/validator"
              title="Validate your robots.txt"
            >
              Validator
            </a>

            <a
              className={styles.nav}
              href="/analyze-robots"
              title="Analyze robots.txt from a website"
            >
              Analyze Robots
            </a>
            <a
              className={styles.nav}
              href="#faqs"
              title="Frequently Asked Questions"
            >
              FAQs
            </a>

            <Separator orientation="vertical" size="1" />

            <a
              className={styles.link}
              href={CONSTANTS.repository}
              rel="noreferrer"
              target="_blank"
              title="Check the project on GitHub"
            >
              <img
                alt="GitHub Logo"
                loading="lazy"
                width="28"
                height="21"
                src="/images/github.svg"
              />
            </a>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
