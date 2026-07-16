# LZT-Developers Community

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README-es.md)

Welcome to the **LZT-Developers** hub! This is the official community platform and developer directory for the LOUST-PRO engineering ecosystem.

## 🚀 How to Join

We use a declarative, zero-conflict approach. Instead of editing a monolithic JSON file, you just add your own YAML file to the `/members` directory and submit a Pull Request.

1. **Fork** this repository.
2. Create a file named `your-github-username.yml` inside the `/members` folder.
3. Fill it out using this template:
   ```yaml
   username: your-github-username
   name: Your Full Name
   role: Full Stack Developer
   skills: 
     - Next.js
     - Rust
     - TypeScript
   github: "https://github.com/your-github-username"
   ```
4. **Submit a Pull Request**.

Once your PR is merged, our Next.js Server Components dynamically parse the YAMLs at build time and render your profile on the community site. **Zero public API endpoints, 100% protection against data scraping.**

## 🛠 Architecture

- **Framework:** Next.js (App Router)
- **Deployment:** Standalone Multi-Tenant (Docker/K3s ready)
- **Data Source:** Local File System (`yaml` parsing via `fs`)
- **License:** GNU AGPLv3 (Ensuring the platform remains truly open-source even as a SaaS)
