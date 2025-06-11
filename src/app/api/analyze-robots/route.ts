import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No robots.txt found');
    }
    
    const content = await response.text();

    const cleanedContent = cleanRobotsTxt(content);

    // Parse and analyze robots.txt
    
    return NextResponse.json({ 
      content: cleanedContent,
      analysis: analyzeRobotsTxt(content)
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to analyze robots.txt' },
      { status: 500 }
    );
  }
}

function cleanRobotsTxt(content: string): string {
  const lines = content.split('\n');
  const cleanedLines = [];
  
  for (const line of lines) {
    const [directive, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();
    
    if (!directive || !value) continue;
    
    const cleanDirective = directive.trim();
    if (cleanDirective.toLowerCase() === 'user-agent') {
      cleanedLines.push(`${cleanDirective}: ${value}`);
    } else if (['disallow', 'allow', 'sitemap'].includes(cleanDirective.toLowerCase())) {
      const cleanValue = value.startsWith('*') ? '/' + value : value;
      cleanedLines.push(`${cleanDirective}: ${cleanValue}`);
    }
  }
  
  return cleanedLines.join('\n');
}

function analyzeRobotsTxt(content: string): string {
  const lines = content.split('\n');
  let analysis = [];
  let currentAgent = '*';

  const rules: {[key: string]: {allow: string[], disallow: string[]}} = {};
  let sitemaps: string[] = [];
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;
    
    if (!trimmedLine.includes(':')) continue;
    
    const [directive, value] = trimmedLine.replace(':','|').split('|').map(part => part.trim().toLowerCase());
    
    switch(directive) {
      case 'user-agent':
        currentAgent = value;
        if (!rules[currentAgent]) {
          rules[currentAgent] = { allow: [], disallow: [] };
        }
        break;
      case 'disallow':
        if (value) rules[currentAgent].disallow.push(value);
        break;
      case 'allow':
        if (value) rules[currentAgent].allow.push(value);
        break;
      case 'sitemap':
        if (value) sitemaps.push(value);
        break;
    }
  }

  // Generate human-readable analysis
  Object.entries(rules).forEach(([agent, ruleSet], index) => {
    analysis.push(`\n\nAgent rules ${index + 1}: ${agent} - `);
    
    if (ruleSet.disallow.length) {
      analysis.push('Blocked from crawling:');
      analysis.push('PATHS_START');
      ruleSet.disallow.forEach(path => analysis.push(path));
      analysis.push('PATHS_END');
    }
    
    if (ruleSet.allow.length) {
      analysis.push('Explicitly allowed:');
      analysis.push('PATHS_START');
      ruleSet.allow.forEach(path => analysis.push(path));
      analysis.push('PATHS_END');
    }
  });

  if (sitemaps.length) {
    analysis.push(`\n\nSitemaps declared:`);
    analysis.push('PATHS_START')
    sitemaps.forEach(path => analysis.push(path));
    analysis.push('PATHS_END');
  }

  return analysis.join('\n');
}
