import Image from "next/image";
import Link from "next/link";
import { Container, Flex, Separator } from "@radix-ui/themes";

import CONSTANTS from "@/constants";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container px="6" py="2" size="4">
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
            <Link className={styles.nav} href="/" title="Generate your robots.txt">
              Generator
            </Link>
            <Link
              className={styles.nav}
              href="/validator"
              title="Validate your robots.txt"
            >
              Validator
            </Link>
            <Link className={styles.nav} href="#faqs" title="Frequently Asked Questions">
              FAQs
            </Link>

            <Separator orientation="vertical" size="1" />

            <Link
              className={styles.link}
              href={CONSTANTS.repository}
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
