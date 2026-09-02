# LZT-Developers Community

<p>
  <a href="https://github.com/LOUST-PRO/LZT-Developers/issues/2"><img src="https://img.shields.io/badge/Good_First_Issue-Add_Your_Profile-22C55E?style=flat-square&logo=github&logoColor=white" alt="Good First Issue"/></a>
  <a href="https://devs-github.loust.pro"><img src="https://img.shields.io/badge/Live_Directory-devs--github.loust.pro-3B82F6?style=flat-square&logo=vercel&logoColor=white" alt="Live Directory"/></a>
  <a href="https://calendar.app.google/XR7FkZXWVwfmZ57x6"><img src="https://img.shields.io/badge/Schedule_a_Meeting-34A853?style=flat-square&logo=googlecalendar&logoColor=white" alt="Schedule a Meeting (Google Calendar)"/></a>
  <a href="https://www.linkedin.com/company/loust/"><img src="https://img.shields.io/badge/LOUST_PRO-0A66C2?style=flat-square&logo=linkedin" alt="LOUST LinkedIn"></a>
  <a href="https://github.com/louzt"><img src="https://img.shields.io/badge/Founder_&_CTO-louzt-181717?style=flat-square&logo=github" alt="Founder"></a>
</p>

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README-es.md)

Welcome to the **LZT-Developers** hub! This is the curated developer directory and public showcase platform built and maintained by **LOUST-PRO**.

🌐 **Live Directory Platform:** [devs-github.loust.pro](https://devs-github.loust.pro)

---

## 🎯 Why Get Featured on LZT-Developers?

The **LZT-Developers Directory** gives independent builders, systems engineers, and open-source contributors a permanent, high-signal public showcase card:

- 🌟 **Public Discovery:** Showcase your engineering role, technical bio, core skills, and personal project links to founders, tech leads, recruiters, and peer contributors who follow our ecosystem.
- 🔗 **High-Authority Backlinks:** Your card features direct, permanent links to your personal website, GitHub repositories, and LinkedIn profile.
- 🔒 **Zero Scraping & Zero Tracking:** Built with pure static Next.js Server Components. No hidden tracking scripts, no public database to scrape, and zero telemetry.
- ⚡ **Git-Native & Declarative:** You retain 100% control over your data. Updating your bio, skills, or links is as simple as opening a git commit on your YAML file.

> [!NOTE]
> Submitting your profile publishes your developer card to our public web directory at **[devs-github.loust.pro](https://devs-github.loust.pro)**. It is an open platform showcase designed to highlight your personal projects and expertise to the world.

---

## 💻 Tech Stack & Platform Architecture

LZT-Developers is built with modern, local-first engineering principles:

- **Framework:** Next.js 16 (App Router) with React 19 Server Components.
- **Styling:** Tailwind CSS with dark glassmorphic cards and responsive mobile grid.
- **Storage Layer:** Declarative, zero-conflict file system (`/members/*.yml` parsed at build time via `yaml`).
- **Deployment:** Standalone multi-tenant containerized on Docker & K3s substrate.
- **License:** GNU AGPLv3 (Ensuring the platform remains sovereign and open-source).

---

## 🚀 How to Add Your Profile (Takes 2 Minutes)

We use a declarative, zero-conflict approach. Instead of editing a monolithic JSON file, you simply add your own YAML file to the `/members` directory.

**Ready? Just click here to auto-generate your profile PR:**
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

Once your PR is merged, our CI build automatically regenerates the directory and publishes your live card on **[devs-github.loust.pro](https://devs-github.loust.pro)**.

## Open-Source Ecosystem

Discover our core open-source repositories and infrastructure systems:

| Project | Stack | Description | Technical Focus |
| :--- | :--- | :--- | :--- |
| **[SnapPipe](https://github.com/LOUST-PRO/SnapPipe)** | Rust | Identity-based QUIC transport toolkit and self-hosted relay scaffolding | Ed25519 identity tickets, carrier-grade NAT traversal, zero vendor lock-in |
| **[LinkMarks](https://github.com/LOUST-PRO/LinkMarks)** | Rust | Local-first, single-binary bookmark manager with TUI and SQLite | Deterministic deduplication, Chromium/Firefox/HTML parsers, offline-first |
| **[PaperForge](https://github.com/LOUST-PRO/paperforge)** | Rust | Linux workspace and frontend for Wallpaper Engine Workshop scenes | Per-monitor playlists, POSIX audio controls, Wayland process isolation |
| **[TaxonRouter](https://github.com/LOUST-PRO/TaxonRouter)** | Go | GitHub Projects (v2) board automation daemon and MCP server | Webhook event classifier, GraphQL card synchronization, agent tool provider |
| **[storage-mountguardian](https://github.com/LOUST-PRO/storage-mountguardian)** | Rust | Linux daemon preventing kernel D-state freezes on failing block devices | Real-time `/dev/kmsg` monitoring, surgical lazy unmounting, ~4 MB RSS |
| **[NetBoozt](https://github.com/LOUST-PRO/NetBoozt_InternetUpgrade)** | Rust · Tauri | Cross-platform TCP network optimization and latency diagnostic utility | BBR congestion tuning, failover management, sub-10ms bufferbloat mitigation |
| **[lzt-virtuoso-tools](https://github.com/LOUST-PRO/lzt-virtuoso-tools)** | Python | RDF dataset ingestion pipeline and SPARQL knowledge graph tooling | Deterministic N-Triples and JSONL processing, graph provenance verification |

## Platform Architecture

- **Framework:** Next.js 16 (App Router)
- **Deployment:** Standalone multi-tenant containerized on Docker & K3s
- **Data Source:** Local file system (`yaml` parsing via `fs` at build time)
- **License:** GNU AGPLv3 (Ensuring the platform remains sovereign and open-source)
