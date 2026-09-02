# LZT-Developers Community

<p>
  <a href="https://github.com/LOUST-PRO/LZT-Developers/issues/2"><img src="https://img.shields.io/badge/Good_First_Issue-Add_Your_Profile-22C55E?style=flat-square&logo=github&logoColor=white" alt="Good First Issue"/></a>
  <a href="https://devs-github.loust.pro"><img src="https://img.shields.io/badge/Live_Directory-devs--github.loust.pro-3B82F6?style=flat-square&logo=vercel&logoColor=white" alt="Live Directory"/></a>
  <a href="https://calendar.app.google/XR7FkZXWVwfmZ57x6"><img src="https://img.shields.io/badge/Schedule_a_Meeting-34A853?style=flat-square&logo=googlecalendar&logoColor=white" alt="Schedule a Meeting (Google Calendar)"/></a>
  <a href="https://www.linkedin.com/company/loust/"><img src="https://img.shields.io/badge/LOUST_PRO-0A66C2?style=flat-square&logo=linkedin" alt="LOUST LinkedIn"></a>
  <a href="https://github.com/louzt"><img src="https://img.shields.io/badge/Founder_&_CTO-louzt-181717?style=flat-square&logo=github" alt="Founder"></a>
</p>

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README-es.md)

Welcome to the **LZT-Developers** hub! This is the official community platform and developer directory for the **LOUST-PRO** engineering ecosystem.

🌐 **Live Directory:** [devs-github.loust.pro](https://devs-github.loust.pro)

## 🤝 Why Join?

By adding your profile here, you become visible within our engineering network. 

**For Developers:** We often review this directory when sourcing talent for our open-source initiatives, our internal CRM, or B2B enterprise contracts. We do not guarantee placement, but it is the best way to get on our radar.
**For Recruiters:** If you see a developer you like and want to coordinate a connection, feel free to **[Schedule a Call](https://calendar.app.google/XR7FkZXWVwfmZ57x6)** with our team.

## 🚀 How to Join

We use a declarative, zero-conflict approach. Instead of editing a monolithic JSON file, you just add your own YAML file to the `/members` directory and submit a Pull Request.

**Ready? Just click here to auto-generate your PR:**
<a href="https://github.com/LOUST-PRO/LZT-Developers/new/main/members?filename=your-username.yml&value=username%3A%20your-username%0Aname%3A%20Your%20Name%0Arole%3A%20Software%20Engineer%0Abio%3A%20%22Passionate%20about%20building%20resilient%20systems%20and%20high-throughput%20architectures.%22%0Askills%3A%20%0A%20%20-%20Next.js%0A%20%20-%20Rust%0Agithub%3A%20%22https%3A%2F%2Fgithub.com%2Fyour-username%22%0Alinkedin%3A%20%22%22%0Awebsite%3A%20%22%22">
  <img src="https://img.shields.io/badge/Join_LZT_Developers-Click_Here_to_Add_Your_Profile-1E293B?style=for-the-badge&logo=github&logoColor=white" alt="Join LZT Developers">
</a>

Or do it manually:
1. **Fork** this repository.
2. Create a file named `your-github-username.yml` inside the `/members` folder.
3. Fill it out using this template:
   ```yaml
   username: your-github-username
   name: Your Full Name
   role: Full Stack Developer / Systems Architect
   bio: "A concise technical overview of what you build or research (generous limit up to 320 chars)."
   skills: 
     - Next.js
     - Rust
     - TypeScript
   github: "https://github.com/your-github-username"
   linkedin: "https://www.linkedin.com/in/your-profile" # Optional
   website: "https://your-site.com" # Optional
   ```
4. **Submit a Pull Request**.

Once your PR is merged, our Next.js Server Components dynamically parse the YAMLs at build time and render your profile on the community site. **Zero public API endpoints, 100% protection against data scraping.**

## 🛠️ Explore the LOUST-PRO Open-Source Ecosystem

Discover our core open-source repositories and sovereign systems:

| Project | Stack | Description | Invariant / Focus |
| :--- | :--- | :--- | :--- |
| **[SnapPipe](https://github.com/LOUST-PRO/SnapPipe)** | Rust | Zero-Trust Identity-Anchored WireGuard/QUIC Relay | Identity Tickets & Zero-Vendor Lock-in |
| **[LinkMarks](https://github.com/LOUST-PRO/LinkMarks)** | Rust | Local-First CRDT Automerge Bookmark Manager | Single binary, zero cloud dependency |
| **[PaperForge](https://github.com/LOUST-PRO/paperforge)** | Rust · GTK4 | Linux Wallpaper Engine Frontend | Multi-monitor & Wayland IPC coordination |
| **[TaxonRouter](https://github.com/LOUST-PRO/TaxonRouter)** | Go | Automated Multi-Agent PR Tagger & MCP Server | Deterministic rules & LLM agent workflows |
| **[storage-mountguardian](https://github.com/LOUST-PRO/storage-mountguardian)** | Rust | Proactive SCSI/Block Device Hang Reaper | Prevents unkillable `D`-state kernel deadlocks |
| **[NetBoozt](https://github.com/LOUST-PRO/NetBoozt_InternetUpgrade)** | Rust · Tauri | ISP Intelligence & TCP Congestion Tuning | Sub-10ms bufferbloat & latency diagnostics |
| **[lzt-virtuoso-tools](https://github.com/LOUST-PRO/lzt-virtuoso-tools)** | Python | SPARQL TriG RDF Knowledge Engine | Graph provenance & deterministic archival |

## 📐 Architecture

- **Framework:** Next.js (App Router)
- **Deployment:** Standalone Multi-Tenant (Docker/K3s ready)
- **Data Source:** Local File System (`yaml` parsing via `fs`)
- **License:** GNU AGPLv3 (Ensuring the platform remains truly open-source even as a SaaS)
