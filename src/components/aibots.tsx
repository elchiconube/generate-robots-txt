import {
  Grid,
  Text,
  Inset,
  Card,
  Heading,
  Flex,
  Checkbox,
  Switch,
} from "@radix-ui/themes";
import { Bot } from "lucide-react";

interface AibotsProps {
  onChangeAiBots: (bot: string, checked: boolean) => void;
  onBlockAllAIBots: (checked: boolean) => void;
  selectedBots: Record<string, boolean>;
  blockAllBots: boolean;
  aiBots: { title: string; code: string }[];
}

export default function Aibots({
  onChangeAiBots,
  onBlockAllAIBots,
  selectedBots,
  blockAllBots,
  aiBots,
}: AibotsProps) {
  return (
    <Card variant="classic">
      <Inset
        clip="padding-box"
        side="top"
        p="current"
        style={{ backgroundColor: "var(--accent-3)" }}
      >
        <Heading as="h4" size="3">
          <Flex gap="1" justify="between" align="center">
            <Flex gap="1">
              <Bot strokeWidth={1.25} />
              Allow/Disallow AI bots
            </Flex>

            <Text as="label" size="2" weight="light">
              <Flex gap="2">
                <Switch
                  size="2"
                  checked={blockAllBots}
                  onCheckedChange={onBlockAllAIBots}
                />{" "}
                Block all bots
              </Flex>
            </Text>
          </Flex>
        </Heading>
      </Inset>
      <Flex direction="column" pt="2" gap="2" align="start">
        <Grid columns="2" gap="3">
          {aiBots.map(({ title }, k) => (
            <Flex asChild gap="2" key={k}>
              <Text as="label" size="2">
                <Checkbox
                  checked={selectedBots[title] || false}
                  onCheckedChange={(checked: boolean) =>
                    onChangeAiBots(title, checked)
                  }
                />
                Block {title}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Card>
  );
}
