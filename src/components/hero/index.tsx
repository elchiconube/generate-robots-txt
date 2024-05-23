import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import styles from "./hero.module.css";

interface HeroProps {
  feature: string;
}

export default function Hero({ feature }: HeroProps) {
  return (
    <article className={styles.container}>
      <Container px="2" py="9">
        <Flex gap="2" direction="column" align="center">
          <Heading size="9" mb="4">
            {feature} your <Text className={styles.text}>robots.txt</Text>
          </Heading>
          <Text as="p" size="7" color="gray">
            The right robots.txt file for your project
          </Text>
        </Flex>
      </Container>
    </article>
  );
}
