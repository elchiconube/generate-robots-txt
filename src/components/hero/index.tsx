import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./hero.module.css";
import Robot from "../robot";
import GridDecoration from "../grid-decoration";

interface HeroProps {
  feature: string;
}

export default function Hero({ feature }: HeroProps) {
  return (
    <article className={styles.container}>
      
      <GridDecoration />

      <Container px="2" py="9">
        <Flex gap="2" direction="column" align="center">
          <Robot />
          <Heading size="9" mb="4">
            {feature} your <Text className={styles.text}>robots.txt</Text>
          </Heading>
          <Text as="p" size="7" color="gray">
            The right robots.txt file for your project
          </Text>
        </Flex>
        <Text as="p" align="center" mt="5">
          <a
            href="https://www.producthunt.com/posts/robots-txt-generator-3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ph}
            title="Robots.txt Generator was ranked daily #2 for May 24th, 2024 on Product Hunt"
          >
            <Image
              src="/images/ph.svg"
              alt="Product Hunt Badge"
              width="150"
              height="45"
            />
          </a>
        </Text>
      </Container>
    </article>
  );
}
