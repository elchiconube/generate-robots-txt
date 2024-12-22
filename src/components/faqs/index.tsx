'use client';

import {
  Heading,
  Card,
  Grid,
  Code,
  Text,
  Box,
  Container,
} from "@radix-ui/themes";
import { motion } from "framer-motion";

import {
  CodeBlockProps,
  ListItemsProps,
  LinksProps,
  AnimatedFaqCardProps,
} from "./types";
import styles from "./faqs.module.css";
import Link from "next/link";

const faqData = [
  {
    title: "How do I submit a robots.txt file to search engines?",
    text: "You don't need to submit a robots.txt file to search engines. Crawlers look for a robots.txt file before crawling a site. If they find one, they read it first before scanning your site.",
    additionalText: "If you make changes to your robots.txt file and want to notify Google, you can submit it to Google Search Console. Use the Robots.txt Tester to paste the text file and click Submit."
  },
  {
    title: "How do I add the generated robots.txt file to my website?",
    text: "Search engines and other crawling bots look for a robots.txt file in the main directory of your website. After generating the robots.txt file, add it to the root folder of your website, which can be found at https://yoursite.com/robots.txt.",
    additionalText: "The method of adding a robots.txt file depends on the server and CMS you are using. If you can't access the root directory, contact your web hosting provider."
  },
  {
    title: "How do I add my Sitemap to the robots.txt file?",
    text: "You can add your Sitemap to the robots.txt file to make it easier for bots to crawl your website content. The Sitemap file is located at http://yourwebsite/sitemap.xml. Add a directive with the URL of your Sitemap like this:",
    code: "User-agent: *\nDisallow: /folder1/\nAllow: /image1/\nSitemap: https://your-site.com/sitemap.xml"
  },
  {
    title: "How do I use the Allow directive properly?",
    text: "The Allow directive counteracts the Disallow directive. Using Allow and Disallow together, you can tell search engines to access a specific folder, file, or page within a disallowed directory.",
    additionalText: "Example: search engines are not allowed to access the /album/ directory",
    code: "Disallow: /album/"
  },
  {
    title: "How do I use the Disallow directive properly?",
    text: "After filling in the User-agent directive, specify the behavior of certain (or all) bots by adding crawl instructions. Here are some tips:",
    listItems: [
      "Don't leave the Disallow directive without a value. In this case, the bot will crawl all of the site's content.",
      "Do not list every file you want to block from crawling. Just disallow access to a folder, and all files in it will be blocked from crawling and indexing.",
      "Don't block access to the whole website unless necessary:"
    ],
    codeBlocks: [
      {
        code: "Disallow: / # allow to crawl the entire website",
        label: "Example 1"
      },
      {
        code: "Disallow: /folder/",
        label: "Example 2"
      },
      {
        code: "Disallow: / # block access to the entire website",
        label: "Example 3"
      }
    ],
    additionalText: "Make sure essential website pages are not blocked from crawling: the home page, landing pages, product pages, etc."
  },
  {
    title: "How do I define the User-agent?",
    text: "Specify the name of the bot to which you're giving crawl instructions using the User-agent directive.",
    additionalText: "To block or allow all crawlers from accessing some of your content, use an asterisk (*):",
    code: "User-agent: *",
    secondaryText: "To allow only Google to crawl your pages, use:",
    secondaryCode: "User-agent: Googlebot",
    listTitle: "Keep in mind that each search engine has its own bots, which may differ in name. For example, Yahoo's bot is Slurp. Google has several bots for different purposes:",
    listItems: [
      "Googlebot News—crawls news",
      "Google Mobile—crawls mobile pages",
      "Googlebot Video—crawls videos",
      "Googlebot Images—crawls images",
      "Google AdSense—crawls websites to determine content and provide relevant ads"
    ]
  },
  {
    title: "Robots.txt syntax",
    text: "The robots.txt syntax consists of directives, parameters, and special characters. Follow these rules for proper functionality:",
    listItems: [
      "Each directive must start on a new line with only one parameter per line.",
      "Robots.txt is case-sensitive. Match the case of folder names exactly.",
      "Do not use quotation marks, spaces at the beginning of lines, or semicolons after lines."
    ],
    codeBlocks: [
      {
        code: "User-agent: *\nDisallow: /folder1/\nDisallow: /folder2/",
        label: "Example of correct syntax"
      },
      {
        code: "Disallow: /folder/",
        label: "Correct case sensitivity"
      },
      {
        code: "Disallow: /Folder/",
        label: "Incorrect if the actual folder name is lowercase",
        isError: true
      },
      {
        code: "Disallow: /folder1/;\nDisallow: /\"folder2\"/",
        label: "Incorrect syntax with semicolons and quotes",
        isError: true
      },
      {
        code: "Disallow: /folder1/\nDisallow: /folder2/",
        label: "Correct syntax"
      }
    ]
  },
  {
    title: "Full documentation",
    text: "For more information on the robots.txt file, visit:",
    links: [
      {
        text: "Wikipedia's Robots.txt page",
        url: "https://en.wikipedia.org/wiki/Robots.txt"
      },
      {
        text: "Google's Robots.txt specifications",
        url: "https://developers.google.com/search/docs/advanced/robots/intro"
      },
      {
        text: "The Robots Exclusion Protocol",
        url: "https://www.robotstxt.org/robotstxt.html"
      }
    ]
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, label, isError }) => (
  <div>
    {label && <p className={styles.text}>{label}</p>}
    <pre className={styles.pre}>
      <Code 
        className={`${styles.code} ${isError ? styles.errorCode : ''}`}
        style={isError ? { color: 'var(--red-11)' } : undefined}
      >
        {code}
      </Code>
    </pre>
  </div>
);

const ListItems: React.FC<ListItemsProps> = ({ items, title }) => (
  <>
    {title && <p className={styles.text}>{title}</p>}
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>{item}</li>
      ))}
    </ul>
  </>
);

const Links: React.FC<LinksProps> = ({ links }) => (
  <ul className={styles.list}>
    {links.map((link) => (
      <li key={link.url} className={styles.item}>
        <Link
          href={link.url} 
          rel="noopener noreferrer" 
          target="_blank"
          className={styles.link}
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

const AnimatedFaqCard: React.FC<AnimatedFaqCardProps> = ({ faq, index }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={index}
    >
      <Card className={styles.card} variant="classic">
        <Box p="3">
          <Heading className={styles.title} as="h3" size="6">
            {faq.title}
          </Heading>

          <p className={styles.text}>{faq.text}</p>

          {faq.listItems && (
            <ListItems items={faq.listItems} title={faq.listTitle} />
          )}

          {faq.code && <CodeBlock code={faq.code} />}

          {faq.codeBlocks?.map((block) => (
            <CodeBlock 
              key={block.label} 
              code={block.code} 
              label={block.label} 
              isError={block.isError} 
            />
          ))}

          {faq.additionalText && (
            <p className={styles.text}>{faq.additionalText}</p>
          )}

          {faq.secondaryText && (
            <p className={styles.text}>{faq.secondaryText}</p>
          )}
          
          {faq.secondaryCode && (
            <CodeBlock code={faq.secondaryCode} />
          )}

          {faq.links && <Links links={faq.links} />}
        </Box>
      </Card>
    </motion.div>
  );
};

const Faqs: React.FC = () => {
  return (
    <Container id="faqs" className={styles.container}>
      <Heading as="h2" size="8" align="center" mb="2">
        Frequently asked questions
      </Heading>
      <Text as="p" align="center" size="4">
        Here are some common questions about robots.txt files and how to use them.
      </Text>
      <Grid 
        columns={{ initial: "1", sm: "2", lg: "3" }} 
        gap="6" 
        mt="5"
        className={styles.grid}
      >
        {faqData.map((faq, index) => (
          <AnimatedFaqCard key={faq.title} faq={faq} index={index} />
        ))}
      </Grid>
    </Container>
  );
}

export default Faqs;