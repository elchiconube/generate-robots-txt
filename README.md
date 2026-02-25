# Robots.txt Generator

Welcome to the **Robots.txt Generator**! This tool helps you create a `robots.txt` file easily. The project is built with [Astro](https://astro.build/) and [React](https://react.dev/) (islands) and uses [Radix UI](https://radix-ui.com/) for the interface. The **analyze** feature uses a server-side API to fetch robots.txt (no CORS issues). Generator and validator run in the browser.

[Check it out here!](https://generaterobotstxt.com/) · [Validator](https://generaterobotstxt.com/validator) · [Analyze robots.txt](https://generaterobotstxt.com/analyze-robots)

![Robots.txt Generator](https://generaterobotstxt.com/images/og_image.png)

## Features

- **Easy Configuration**: Choose from a variety of default configurations optimized for popular platforms like WordPress, Shopify, Magento, and more.
- **Custom AI Bot Blocking**: Select specific AI bots to block from accessing your site.
- **Sitemap Integration**: Add your sitemap URL to the `robots.txt` file.
- **Downloadable Output**: Generate and download your custom `robots.txt` file.
- **Validator**: [Validate](https://generaterobotstxt.com/validator) your `robots.txt` file and find errors.
- **Analyze**: [Analyze](https://generaterobotstxt.com/analyze-robots) the robots.txt of any website (via server API to avoid CORS).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Build for production with `npm run build` and preview with `npm run preview`.

To test the analyze API locally (server-side fetch), use the Cloudflare runtime: run `npx astro build && npx wrangler pages dev ./dist` (requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/) and a `wrangler.jsonc` with a KV namespace for `SESSION`; see [Deploy on Cloudflare Pages](docs/DEPLOY-CLOUDFLARE-PAGES.md)).

## Contributing

Contributions are welcome!

This project is open source and you can see it live [here](https://generaterobotstxt.com/). Feel free to open an issue or create a pull request if you want to collaborate.

If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

If you have any questions or feedback, feel free to open an issue or contact me at [Twitter/X](https://twitter.com/elchiconube).
