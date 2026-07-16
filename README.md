# LZT-Developers Community

<p>
  <a href="https://calendar.app.google/XR7FkZXWVwfmZ57x6"><img src="https://img.shields.io/badge/Schedule_a_Meeting-34A853?style=flat-square&logo=googlecalendar&logoColor=white" alt="Schedule a Meeting (Google Calendar)"/></a>
  <a href="https://www.linkedin.com/company/loust/"><img src="https://img.shields.io/badge/LOUST_PRO-0A66C2?style=flat-square&logo=linkedin" alt="LOUST LinkedIn"></a>
  <a href="https://github.com/louzt"><img src="https://img.shields.io/badge/Founder_&_CTO-louzt-181717?style=flat-square&logo=github" alt="Founder"></a>
</p>

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README-es.md)

Welcome to the **LZT-Developers** hub! This is the official community platform and developer directory for the LOUST-PRO engineering ecosystem.

🌐 **Live Directory:** [devs-github.loust.pro](https://devs-github.loust.pro)

## 🤝 Why Join?

By adding your profile here, you become visible within our engineering network. 

**For Developers:** We often review this directory when sourcing talent for our open-source initiatives, our internal CRM, or B2B enterprise contracts. We do not guarantee placement, but it is the best way to get on our radar.
**For Recruiters:** If you see a developer you like and want to coordinate a connection, feel free to **[Schedule a Call](https://calendar.app.google/XR7FkZXWVwfmZ57x6)** with our team.

## 🚀 How to Join

We use a declarative, zero-conflict approach. Instead of editing a monolithic JSON file, you just add your own YAML file to the `/members` directory and submit a Pull Request.

**Ready? Just click here to auto-generate your PR:**
<a href="https://github.com/LOUST-PRO/LZT-Developers/new/main/members?filename=your-username.yml&value=username%3A%20your-username%0Aname%3A%20Your%20Name%0Arole%3A%20Software%20Engineer%0Askills%3A%20%0A%20%20-%20Next.js%0A%20%20-%20Rust%0Agithub%3A%20%22https%3A%2F%2Fgithub.com%2Fyour-username%22%0Awebsite%3A%20%22%22">
  <img src="https://img.shields.io/badge/Join_LZT_Developers-Click_Here_to_Add_Your_Profile-1E293B?style=for-the-badge&logo=github&logoColor=white" alt="Join LZT Developers">
</a>

Or do it manually:
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
