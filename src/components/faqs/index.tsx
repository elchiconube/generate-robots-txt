import {
  Heading,
  Card,
  Grid,
  Code,
  Text,
  Box,
  Container,
} from "@radix-ui/themes";

import styles from "./faqs.module.css";

export default function Faqs() {
  return (
    <Container id="faqs" className={styles.container}>
      <Heading as="h2" size="8" align="center" mb="2">
        Frequenly asked questions
      </Heading>
      <Text as="p" align="center" size="4">
        Here are some common questions about robots.txt files and how to use
        them.
      </Text>
      <Grid columns="3" gap="6" mt="5">
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I submit a robots.txt file to search engines?
            </Heading>

            <p className={styles.text}>
              You don't need to submit a robots.txt file to search engines.
              Crawlers look for a robots.txt file before crawling a site. If
              they find one, they read it first before scanning your site.
            </p>
            <p className={styles.text}>
              If you make changes to your robots.txt file and want to notify
              Google, you can submit it to Google Search Console. Use the
              Robots.txt Tester to paste the text file and click Submit.
            </p>
          </Box>
        </Card>
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I add the generated robots.txt file to my website?
            </Heading>
            <p className={styles.text}>
              Search engines and other crawling bots look for a robots.txt file
              in the main directory of your website. After generating the
              robots.txt file, add it to the root folder of your website, which
              can be found at <strong>https://yoursite.com/robots.txt</strong>.
            </p>
            <p className={styles.text}>
              The method of adding a robots.txt file depends on the server and
              CMS you are using. If you can't access the root directory, contact
              your web hosting provider.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I add my Sitemap to the robots.txt file?
            </Heading>

            <p className={styles.text}>
              You can add your Sitemap to the robots.txt file to make it easier
              for bots to crawl your website content. The Sitemap file is
              located at http://yourwebsite/sitemap.xml. Add a directive with
              the URL of your Sitemap like this:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                User-agent: * <br />
                Disallow: /folder1/ <br />
                Allow: /image1/ <br />
                Sitemap: https://your-site.com/sitemap.xml
              </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I use the Allow directive properly?
            </Heading>

            <p className={styles.text}>
              The Allow directive counteracts the Disallow directive. Using
              Allow and Disallow together, you can tell search engines to access
              a specific folder, file, or page within a disallowed directory.
            </p>
            <p className={styles.text}>
              Example: search engines are not allowed to access the /album/
              directory
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /album/ </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I use the Disallow directive properly?
            </Heading>

            <p className={styles.text}>
              After filling in the User-agent directive, specify the behavior of
              certain (or all) bots by adding crawl instructions. Here are some
              tips:
            </p>
            <p className={styles.text}>
              1. Don't leave the Disallow directive without a value. In this
              case, the bot will crawl all of the site's content.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # allow to crawl the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              2. Do not list every file you want to block from crawling. Just
              disallow access to a folder, and all files in it will be blocked
              from crawling and indexing.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              3. Don't block access to the whole website unless necessary:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # block access to the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              Make sure essential website pages are not blocked from crawling:
              the home page, landing pages, product pages, etc.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I define the User-agent?
            </Heading>

            <p className={styles.text}>
              Specify the name of the bot to which you're giving crawl
              instructions using the User-agent directive.
            </p>
            <p className={styles.text}>
              To block or allow all crawlers from accessing some of your
              content, use an asterisk (*):
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: *</Code>
            </pre>
            <p className={styles.text}>
              To allow only Google to crawl your pages, use:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: Googlebot</Code>
            </pre>
            <p className={styles.text}>
              Keep in mind that each search engine has its own bots, which may
              differ in name. For example, Yahoo's bot is Slurp. Google has
              several bots for different purposes:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>Googlebot News—crawls news</li>
              <li className={styles.item}>Google Mobile—crawls mobile pages</li>
              <li className={styles.item}>Googlebot Video—crawls videos</li>
              <li className={styles.item}>Googlebot Images—crawls images</li>
              <li className={styles.item}>
                Google AdSense—crawls websites to determine content and provide
                relevant ads
              </li>
            </ul>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              Robots.txt syntax
            </Heading>

            <p className={styles.text}>
              The robots.txt syntax consists of directives, parameters, and
              special characters. Follow these rules for proper functionality:
            </p>
            <p className={styles.text}>
              1. Each directive must start on a new line with only one parameter
              per line.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                User-agent: * <br />
                Disallow: /folder1/ <br />
                Disallow: /folder2/
              </Code>
            </pre>
            <p className={styles.text}>
              2. Robots.txt is case-sensitive. Match the case of folder names
              exactly.
            </p>
            <p className={styles.text}>Correct</p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              Incorrect if the actual folder name is lowercase
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code} color="crimson">
                Disallow: /Folder/
              </Code>
            </pre>
            <p className={styles.text}>
              3. Do not use quotation marks, spaces at the beginning of lines,
              or semicolons after lines.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code} color="crimson">
                Disallow: /folder1/; <br />
                Disallow: /“folder2”/
              </Code>
            </pre>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: /folder1/
                <br />
                Disallow: /folder2/
              </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              Full documentation
            </Heading>

            <p className={styles.text}>
              For more information on the robots.txt file, visit:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  href="https://en.wikipedia.org/wiki/Robots.txt"
                  rel="noopener"
                  target="_blank"
                >
                  Wikipedia's Robots.txt page
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://developers.google.com/search/docs/advanced/robots/intro"
                  rel="noopener"
                  target="_blank"
                >
                  Google's Robots.txt specifications
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://www.robotstxt.org/robotstxt.html"
                  rel="noopener"
                  target="_blank"
                >
                  The Robots Exclusion Protocol
                </a>
              </li>
            </ul>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}
