# Richard Anderson — Personal Website

> Personal website built with React and Vite. Sits behind a Cloudflare Proxy/WAF.

## Quick Start

```bash
npm install
npm start
```

## Scripts

- `npm start` – Start development server
- `npm test` – Run tests
- `npm run build` – Build for production

## Structure

```
src/        # Source code
public/     # Static files
```


## Configure Vultr Container Registry

To deploy or use this project with Vultr Container Registry, set the following secrets in your deployment environment or CI/CD pipeline:

| Secret | Description |
|---|---|
| `VULTR_API_KEY` | Your Vultr API key |
| `VULTR_REGISTRY_URL` | Registry URL (e.g. `us-east1.vultrcr.com`) |
| `VULTR_REGISTRY_NAME` | Registry name |
| `VULTR_USER` | Vultr username (UUID format) |

Do not commit these values to version control.

## Security

See [SECURITY.md](SECURITY.md) for the security policy and supported versions.

## License

MIT — see [LICENSE](LICENSE)