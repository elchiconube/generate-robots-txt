"use client";

import { useState } from "react";
import { Container, Heading, Text } from "@radix-ui/themes";

import Code from "@/components/code";

import styles from "./validate.module.css";

export default function Validate() {
  const [value, setValue] = useState("");

  const onReset = () => {
    setValue("");
  };

  return (
    <Container maxWidth="var(--container-2)" className={styles.container}>
      <Heading as="h2" align="center" mb="3" size="8">
        Check your <span className={styles.code}>robots.txt</span> file
      </Heading>
      <Text as="p" align="center" mb="3" size="5">
        Validate your file syntax to ensure it's correctly formatted.
      </Text>

      <Code
        value={value}
        onChangeValue={(value: string) => setValue(value)}
        onClear={onReset}
      />
    </Container>
  );
}
