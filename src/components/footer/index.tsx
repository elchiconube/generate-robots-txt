import { Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./footer.module.css";
import CONSTANTS from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container p="2">
        <Flex gap="4" align="center" justify="between">
          <Text className={styles.text} weight={"bold"}>
            © {currentYear} Generate robots.txt dot com
          </Text>
          <Flex gap="4" align="center">
            <a
              className={styles.link}
              aria-label="GitHub"
              href={CONSTANTS.repository}
              rel="noopener"
              target="_blank"
            >
              <Image
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
              <Image
                alt="X Logo"
                loading="lazy"
                width="21"
                height="21"
                src="/images/x.svg"
                style={{ position: "relative", top: "2px" }}
              />
            </a>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}
