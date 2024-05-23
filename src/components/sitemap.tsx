import { Card, Flex, Heading, Inset, TextField } from "@radix-ui/themes";
import { Newspaper } from "lucide-react";

interface SitemapProps {
  onChangeSitemap: (value: string) => void;
}

export default function Sitemap({ onChangeSitemap }: SitemapProps) {
  return (
    <Card variant="classic">
      <Inset
        clip="padding-box"
        side="top"
        p="current"
        style={{ backgroundColor: "var(--accent-3)" }}
      >
        <Heading as="h4" size="3">
          <Flex gap="1">
            <Newspaper strokeWidth={1.25} />
            Sitemap url
          </Flex>
        </Heading>
      </Inset>
      <TextField.Root
        placeholder="https://yoursite.com/sitemap.xml"
        mt="3"
        onChange={(e) => onChangeSitemap(e.target.value)}
      >
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
    </Card>
  );
}
