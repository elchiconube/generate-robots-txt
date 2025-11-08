export const defaults = [
  {
    title: "Allow all robots to access the entire site",
    description:
      "This `robots.txt` file allows all search engines to index the entire content of the website.",
    code: `User-agent: *\nDisallow:`,
  },
  {
    title: "Block all robots from the entire site",
    description:
      "This `robots.txt` file prevents all search engines from indexing any part of the website.",
    code: `User-agent: *\nDisallow: /`,
  },
  {
    title: "Block a specific directory",
    description:
      "This `robots.txt` file prevents all search engines from indexing a specific directory of the website, such as `/private`.",
    code: `User-agent: *\nDisallow: /private/`,
  },
  {
    title: "Block a specific file",
    description:
      "This `robots.txt` file prevents all search engines from indexing a specific file of the website, such as `secret.html`.",
    code: `User-agent: *\nDisallow: /secret.html`,
  },
  {
    title: "Allow only a specific robot (e.g., Googlebot) and block all others",
    description:
      "This `robots.txt` file allows only Googlebot to index the website while blocking all other search engines.",
    code: `User-agent: Googlebot\nDisallow:\n\nUser-agent: *\nDisallow: /`,
  },
  {
    title: "Block specific URL parameters",
    description:
      "This `robots.txt` file prevents all search engines from indexing URLs with specific parameters, such as those containing `?sessionid=`.",
    code: `User-agent: *\nDisallow: /*?sessionid=`,
  },
  {
    title: "Allow crawling of a specific directory and block everything else",
    description:
      "This `robots.txt` file allows all search engines to index only the content of a specific directory, such as `/public`, and blocks everything else.",
    code: `User-agent: *\nAllow: /public/\nDisallow: /`,
  },
  {
    title: "Block images from a specific directory",
    description:
      "This `robots.txt` file prevents all search engines from indexing images in a specific directory, such as `/images/private`.",
    code: `User-agent: *\nDisallow: /images/private/`,
  },
  {
    title: "Block access to CSS and JS files",
    description:
      "This `robots.txt` file prevents all search engines from indexing CSS and JS files.",
    code: `User-agent: *\nDisallow: /*.css$\nDisallow: /*.js$`,
  },
];

export const apps = [
  {
    title: "WordPress",
    description:
      "This `robots.txt` file is optimized for WordPress sites, blocking sensitive directories while allowing access to important content.",
    code: `User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Allow: /wp-admin/admin-ajax.php
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Shopify",
    description:
      "This `robots.txt` file is optimized for Shopify stores, allowing access to all important content while blocking admin and checkout pages.",
    code: `User-agent: *
Disallow: /admin/
Disallow: /checkout/
Disallow: /cart/
Disallow: /orders/
Disallow: /account/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Magento",
    description:
      "This `robots.txt` file is optimized for Magento stores, blocking sensitive directories and files.",
    code: `User-agent: *
Disallow: /admin/
Disallow: /downloader/
Disallow: /includes/
Disallow: /pkginfo/
Disallow: /var/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Drupal",
    description:
      "This `robots.txt` file is optimized for Drupal sites, blocking sensitive directories while allowing access to important content.",
    code: `User-agent: *
Disallow: /core/
Disallow: /includes/
Disallow: /misc/
Disallow: /modules/
Disallow: /profiles/
Disallow: /scripts/
Disallow: /themes/
Disallow: /update.php
Disallow: /xmlrpc.php
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Joomla",
    description:
      "This `robots.txt` file is optimized for Joomla sites, blocking sensitive directories while allowing access to important content.",
    code: `User-agent: *
Disallow: /administrator/
Disallow: /bin/
Disallow: /cache/
Disallow: /cli/
Disallow: /components/
Disallow: /includes/
Disallow: /installation/
Disallow: /language/
Disallow: /layouts/
Disallow: /libraries/
Disallow: /logs/
Disallow: /modules/
Disallow: /plugins/
Disallow: /tmp/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "PrestaShop",
    description:
      "This `robots.txt` file is optimized for PrestaShop stores, blocking sensitive directories and files.",
    code: `User-agent: *
Disallow: /admin/
Disallow: /app/
Disallow: /bin/
Disallow: /config/
Disallow: /download/
Disallow: /mails/
Disallow: /modules/
Disallow: /translations/
Disallow: /upload/
Disallow: /var/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Wix",
    description:
      "This `robots.txt` file is optimized for Wix sites, allowing access to all important content.",
    code: `User-agent: *
Disallow: /_api/
Disallow: /files/
Disallow: /site-assets/
Disallow: /_partials/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "BigCommerce",
    description:
      "This `robots.txt` file is optimized for BigCommerce stores, blocking sensitive directories and files.",
    code: `User-agent: *
Disallow: /cart.php
Disallow: /checkout/
Disallow: /account.php
Disallow: /search.php
Disallow: /product_images/
Disallow: /admin/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Squarespace",
    description:
      "This `robots.txt` file is optimized for Squarespace sites, allowing access to all important content.",
    code: `User-agent: *
Disallow: /api/
Disallow: /config/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
  {
    title: "Weebly",
    description:
      "This `robots.txt` file is optimized for Weebly sites, allowing access to all important content.",
    code: `User-agent: *
Disallow: /ajax/
Disallow: /api/
Sitemap: https://www.yoursite.com/sitemap.xml`,
  },
];

export const aiBots = [
  {
    title: "GPTBot",
    code: `User-agent: GPTBot\nDisallow: /`,
  },
  {
    title: "ChatGPT-User",
    code: `User-agent: ChatGPT-User\nDisallow: /`,
  },
  {
    title: "Google-Extended",
    code: `User-agent: Google-Extended\nDisallow: /`,
  },
  {
    title: "PerplexityBot",
    code: `User-agent: PerplexityBot\nDisallow: /`,
  },
  {
    title: "Amazonbot",
    code: `User-agent: Amazonbot\nDisallow: /`,
  },
  {
    title: "ClaudeBot",
    code: `User-agent: ClaudeBot\nDisallow: /`,
  },
  {
    title: "Omgilibot",
    code: `User-agent: Omgilibot\nDisallow: /`,
  },
  {
    title: "FacebookBot",
    code: `User-agent: FacebookBot\nDisallow: /`,
  },
  {
    title: "Applebot",
    code: `User-agent: Applebot\nDisallow: /`,
  },
  {
    title: "anthropic-ai",
    code: `User-agent: anthropic-ai\nDisallow: /`,
  },
  {
    title: "Bytespider",
    code: `User-agent: Bytespider\nDisallow: /`,
  },
  {
    title: "Claude-Web",
    code: `User-agent: Claude-Web\nDisallow: /`,
  },
  {
    title: "Diffbot",
    code: `User-agent: Diffbot\nDisallow: /`,
  },
  {
    title: "ImagesiftBot",
    code: `User-agent: ImagesiftBot\nDisallow: /`,
  },
  {
    title: "Omgili",
    code: `User-agent: Omgili\nDisallow: /`,
  },
  {
    title: "YouBot",
    code: `User-agent: YouBot\nDisallow: /`,
  },
];
