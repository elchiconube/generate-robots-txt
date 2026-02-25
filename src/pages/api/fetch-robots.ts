import type { APIRoute } from 'astro';

export const prerender = false;

function isValidTargetUrl(input: string | null): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();
  let url: URL;
  try {
    const withProtocol = trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;
    url = new URL(withProtocol);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  return url.origin;
}

export const GET: APIRoute = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get('url');
  const origin = isValidTargetUrl(urlParam);

  if (!origin) {
    return new Response(
      JSON.stringify({ error: 'Invalid or missing URL' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const robotsUrl = `${origin}/robots.txt`;

  try {
    const res = await fetch(robotsUrl, {
      headers: { 'User-Agent': 'RobotsTxtGenerator/1.0 (https://generaterobotstxt.com)' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      const message = res.status === 404 ? 'No robots.txt found at this URL' : 'Could not fetch robots.txt (server error)';
      return new Response(
        JSON.stringify({ error: message }),
        { status: res.status === 404 ? 404 : 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const content = await res.text();
    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Could not fetch or analyze robots.txt';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
