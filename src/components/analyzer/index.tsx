"use client";

import { JSX, useState, FormEvent } from 'react';
import { TextField, Button, Card, Box, Text, Container, Code, Grid, Heading } from '@radix-ui/themes';
import Terminal from '@/components/terminal';
import GridDecoration from '@/components/grid-decoration';
import Showcase from '@/components/showcase';
import RobotCss from '@/components/robot';

import styles from './analyzer.module.css';

const RobotsAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [robotsContent, setRobotsContent] = useState('');

  const validateUrl = (url: string) => {
    // Si la URL no tiene protocolo, añadimos https://
    let urlToTest = url.trim();
    if (!urlToTest.startsWith('http://') && !urlToTest.startsWith('https://')) {
      urlToTest = `https://${urlToTest}`;
    }

    try {
      new URL(urlToTest);
      return urlToTest;
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const websiteUrl = validateUrl(url);
    if (!websiteUrl) {
      setError('Please enter a valid domain');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const robotsUrl = new URL('/robots.txt', websiteUrl).href;
      const response = await fetch('/api/analyze-robots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: robotsUrl })
      });

      if (!response.ok) throw new Error('Failed to fetch robots.txt');
      
      const data = await response.json();
      setAnalysis(data.analysis);
      setRobotsContent(data.content);
    } catch (err) {
      setError('Could not fetch or analyze robots.txt');
    } finally {
      setLoading(false);
    }
  };

  const onClickSuggestion = (url: string) => {
    setUrl(url);
    const validUrl = validateUrl(url);
    if (validUrl) {
      setUrl(validUrl);
      handleSubmit();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const renderPaths = (lines: string[]) => {
    let content: JSX.Element[] = [];
    let pathsContent: JSX.Element[] = [];
    let inPathsBlock = false;
    let blockId = 0;
  
    lines.forEach((line, j) => {
      if (line === 'PATHS_START') {
        inPathsBlock = true;
        blockId++;
      } else if (line === 'PATHS_END') {
        if (pathsContent.length) {
          content.push(
            <Box key={`paths-block-${blockId}`} mt="2" p="4" style={{ background: 'var(--accent-3)' }}>
              {pathsContent}
            </Box>
          );
        }
        inPathsBlock = false;
        pathsContent = [];
      } else if (inPathsBlock) {
        pathsContent.push(
          <pre key={`path-${blockId}-${j}`} className={styles.pre}>
            <Code className={styles.code} mb="1">{line}</Code>
          </pre>
        );
      } else {
        content.push(
          <Text key={`text-${blockId}-${j}`} mb="2" size="2" weight={j === 0 ? "bold" : "regular"}>
            {line}
          </Text>
        );
      }
    });
  
    return content;
  };

  return (
    <Container className={styles.container} size="2">
      <GridDecoration />
      <Box className={styles.box}>
        <Heading size="8" align="center">
          <Text className={styles.text}>Analyze Robots.txt of any website</Text>
        </Heading>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrapper}>
          <TextField.Root
            placeholder="Enter website URL (e.g., example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyPress}
          />          
          <Button type="submit" disabled={loading}>
            Analyze Robots.txt
          </Button>
          </div>
          {error && <Text color="red" size="2">{error}</Text>}
        </form>
        {loading && <RobotCss isLoading />}
        {analysis && (
          <div className="space-y-4">
            <Terminal value={robotsContent} />
          </div>
        )}
        {analysis && (
          <Container className={styles.analysis}>
            <Heading as="h2" size="7" align="center" mb="2">Result</Heading>
            <Text as="p" size="3" align="center" mb="5">
              Below is the analysis of the robots.txt file from {url}.
            </Text>
            <Grid gap="4">
              <Card>
                <Box p="4">
                  {analysis.split('\n\n').map((section, sectionIndex) => (
                    <Box key={`section-${sectionIndex}`} mb="4">
                      {renderPaths(section.split('\n'))}
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Container>
        )}
        <Showcase onClickWebsite={onClickSuggestion} />
      </Box>
    </Container>
  );
};

export default RobotsAnalyzer;