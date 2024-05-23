import Image from "next/image";
import { Container, Flex, Link, Separator } from "@radix-ui/themes";

import CONSTANTS from "@/constants";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container p="2">
        <Flex gap="2" justify="between" align="center">
          <Link
            className={styles.logo}
            href="/"
            title="Generate robots.txt dot com"
          >
            <Image
              alt="Generate robots.txt logo"
              loading="lazy"
              width="28"
              height="28"
              src="/images/logo.png"
            />
          </Link>
          <Flex gap="5" align="center">
            <Link className={styles.nav} href="/" size="3" weight="bold">
              Generator
            </Link>
            <Link
              className={styles.nav}
              href="/validator"
              size="3"
              weight="bold"
            >
              Validator
            </Link>
            <Link className={styles.nav} href="#faqs" size="3" weight="bold">
              FAQs
            </Link>

            <Separator orientation="vertical" size="1" />

            <Link
              className={styles.link}
              href={CONSTANTS.repository}
              size="3"
              weight="bold"
              rel="noreferrer"
              target="_blank"
              title="Check the project on GitHub"
            >
              <Image
                alt="GitHub Logo"
                loading="lazy"
                width="28"
                height="21"
                src="/images/github.svg"
              />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
