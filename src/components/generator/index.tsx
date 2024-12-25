"use client";

import { useState, useEffect } from "react";
import {
  Grid,
  Text,
  Inset,
  Card,
  Container,
  Heading,
  Radio,
  Flex,
} from "@radix-ui/themes";
import { PackageOpen, AppWindow } from "lucide-react";
import { defaults, apps, aiBots } from "@/configs";

import Terminal from "@/components/terminal";
import Sitemap from "@/components/sitemap";
import Aibots from "@/components/aibots";

import styles from "./generator.module.css";

export interface Configuration {
  title: string;
  code: string;
  description?: string;
}

export default function Generator() {
  const [value, setValue] = useState("User-agent: *\nDisallow:");
  const [selectedBots, setSelectedBots] = useState({});
  const [blockAllBots, setBlockAllBots] = useState(false);

  const onClickSelection = (title: string) => {
    const configuration = [...defaults, ...apps].find(
      (item) => item.title === title
    );

    if (configuration) {
      setValue(configuration.code);
    }

    setSelectedBots({});
    setBlockAllBots(false);
  };

  const onChangeAiBots = (bot: string, checked: boolean) => {
    setSelectedBots((prev) => ({
      ...prev,
      [bot]: checked,
    }));
  };

  const updateValue = () => {
    let updatedValue = value || "";

    Object.entries(selectedBots).forEach(([bot, checked]) => {
      const botCode = aiBots.find((item) => item.title === bot)?.code;
      if (checked) {
        if (botCode && !updatedValue.includes(botCode)) {
          updatedValue += `\n${botCode}`;
        }
      } else {
        if (botCode) {
          updatedValue = updatedValue.replace(`\n${botCode}`, "");
        }
      }
    });

    setValue(updatedValue.trim());
  };

  useEffect(() => {
    updateValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBots]);

  const onChangeSitemap = (url: string) => {
    setValue((prev) => {
      const newValue = prev
        ? prev
            .split("\n")
            .filter((line) => !line.startsWith("Sitemap:"))
            .join("\n")
        : "";

      return url ? `${newValue}\nSitemap: ${url}` : newValue;
    });
  };

  const onBlockAllAIBots = (val: boolean) => {
    const bots = aiBots.reduce<{ [key: string]: boolean }>((acc, { title }) => {
      acc[title] = val;
      return acc;
    }, {});

    setBlockAllBots(val);
    setSelectedBots(bots);
  };

  const onReset = () => {
    setValue("");
    setSelectedBots({});
    setBlockAllBots(false);
  };

  return (
    <Container p="2">
      <Grid columns="2" gap="6" width="auto" py="6">
        <Grid columns="1" gap="6">
          <Heading as="h2" align="center">
            Start selecting a default configuration
          </Heading>

          <Card variant="classic">
            <Inset
              clip="padding-box"
              side="top"
              p="current"
              style={{ backgroundColor: "var(--accent-3)" }}
            >
              <Heading as="h4" size="3">
                <Flex gap="1">
                  <PackageOpen strokeWidth={1.25} />
                  Based on your requirements
                </Flex>
              </Heading>
            </Inset>
            <Flex direction="column" pt="2" gap="2" align="start">
              {defaults.map(({ title }) => (
                <Flex asChild gap="2" key={title}>
                  <Text as="label" size="2">
                    <Radio
                      name="robot"
                      value="1"
                      onClick={() => onClickSelection(title)}
                    />
                    {title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Card>
          <Card variant="classic">
            <Inset
              clip="padding-box"
              side="top"
              p="current"
              style={{ backgroundColor: "var(--accent-3)" }}
            >
              <Heading as="h4" size="3">
                <Flex gap="1">
                  <AppWindow strokeWidth={1.25} />
                  Based on your project
                </Flex>
              </Heading>
            </Inset>
            <Flex direction="column" pt="2" gap="2" align="start">
              {apps.map(({ title }) => (
                <Flex asChild gap="2" key={title}>
                  <Text as="label" size="2">
                    <Radio
                      name="robot"
                      value="1"
                      onClick={() => onClickSelection(title)}
                    />
                    robots.txt for {title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Card>

          <Heading as="h2" align="center">
            Optional configurations
          </Heading>
          <Aibots
            onChangeAiBots={onChangeAiBots}
            selectedBots={selectedBots}
            blockAllBots={blockAllBots}
            onBlockAllAIBots={onBlockAllAIBots}
            aiBots={aiBots}
          />

          <Sitemap onChangeSitemap={onChangeSitemap} />
        </Grid>
        <div>
          <div className={styles.sticky}>
            <Heading as="h2" align="center">
              Your <span className={styles.code}>robots.txt</span> file
            </Heading>
            <Text as={"p"} align={"center"} mb="4">
              Your raw file, feel free to create it by your own or download it
            </Text>

            <Terminal
              value={value}
              onChangeValue={(value: string) => setValue(value)}
              onClear={onReset}
            />
          </div>
        </div>
      </Grid>
    </Container>
  );
}
