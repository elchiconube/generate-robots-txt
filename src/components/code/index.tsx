import { useState, useEffect } from "react";
import { Container, Button, Flex, Text, TextArea } from "@radix-ui/themes";
import { RotateCcw, CloudDownload, ShieldCheck, ShieldX } from "lucide-react";

import styles from "./code.module.css";

interface CodeProps {
  readonly value: string;
  readonly onClear: () => void;
  readonly onChangeValue: (value: string) => void;
}

export default function Code({ value, onClear, onChangeValue }: CodeProps) {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validateRobotsTxt(robotsTxt: string) {
    const lines = robotsTxt.split("\n");

    const userAgentRegex = /^User-agent:\s*(\*|[a-zA-Z0-9_-]+)$/i;
    const disallowAllowRegex = /^(Disallow|Allow):\s*(\/.*)?$/i;
    const sitemapRegex = /^Sitemap:\s*https?:\/\/[^\s]+$/i;
    const commentRegex = /^#.*$/;

    let hasUserAgent = false;

    for (const line of lines) {
      const cleanLine = line.trim();

      if (cleanLine === "") {
        continue;
      }

      if (line.startsWith(" ")) {
        return {
          isValid: false,
          error: `Line starts with an invalid space: "${line}"`,
        };
      }

      if (cleanLine.endsWith(";")) {
        return {
          isValid: false,
          error: `Line ends with an invalid semicolon: "${cleanLine}"`,
        };
      }

      if (cleanLine.includes('"')) {
        return {
          isValid: false,
          error: `Line contains invalid quotation marks: "${cleanLine}"`,
        };
      }

      if (commentRegex.test(cleanLine)) {
        continue;
      }

      if (userAgentRegex.test(cleanLine)) {
        hasUserAgent = true;
        continue;
      }

      if (disallowAllowRegex.test(cleanLine)) {
        if (!hasUserAgent) {
          return {
            isValid: false,
            error: "Disallow/Allow found before any User-agent",
          };
        }
        continue;
      }

      if (sitemapRegex.test(cleanLine)) {
        continue;
      }

      return { isValid: false, error: `Invalid line: "${cleanLine}"` };
    }

    if (!hasUserAgent) {
      return { isValid: false, error: "No User-agent specified" };
    }

    return { isValid: true, error: null };
  }

  useEffect(() => {
    if (!value) {
      setIsValid(false);
      setError(null);
      return;
    }
    const { isValid, error } = validateRobotsTxt(value);
    setIsValid(isValid);

    if (!isValid) {
      setError(error);
    } else {
      setError(null);
    }
  }, [value]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([value || ""], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "robots.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container maxWidth="var(--container-2)" className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          robots.txt
        </p>
        <div className={styles.terminal}>
          <i className={`${styles.terminal__button} ${styles.red}`} />
          <i className={`${styles.terminal__button} ${styles.yellow}`} />
          <i className={`${styles.terminal__button} ${styles.green}`} />
        </div>        
        <TextArea
          className={styles.textarea}
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
          variant="soft"
        />
      </div>
      {value && (
        <div
          className={`${styles.status} ${
            isValid ? styles.valid : styles.error
          }`}
        >
          {isValid ? (
            <ShieldCheck strokeWidth={1.25} />
          ) : (
            <ShieldX strokeWidth={1.25} />
          )}
        </div>
      )}

      {!isValid && error && value && (
        <Text as="p" className={styles.msg}>
          {error}
        </Text>
      )}

      <Flex gap="2" justify="center" mt="4">
        <Button size="4" onClick={handleDownload} disabled={!value}>
          <CloudDownload strokeWidth={1.25} />
          Download
        </Button>
        <Button size="4" variant="outline" onClick={onClear}>
          <RotateCcw strokeWidth={1.25} />
          Reset
        </Button>
      </Flex>
    </Container>
  );
}
