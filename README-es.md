# Comunidad LZT-Developers

<p>
  <a href="https://calendar.app.google/XR7FkZXWVwfmZ57x6"><img src="https://img.shields.io/badge/Agendar_Llamada-34A853?style=flat-square&logo=googlecalendar&logoColor=white" alt="Schedule a Meeting (Google Calendar)"/></a>
  <a href="https://www.linkedin.com/company/loust/"><img src="https://img.shields.io/badge/LOUST_PRO-0A66C2?style=flat-square&logo=linkedin" alt="LOUST LinkedIn"></a>
  <a href="https://github.com/louzt"><img src="https://img.shields.io/badge/Founder_&_CTO-louzt-181717?style=flat-square&logo=github" alt="Founder"></a>
</p>

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README.md)

¡Bienvenido al hub de **LZT-Developers**! Esta es la plataforma oficial de la comunidad y el directorio de desarrolladores para el ecosistema de ingeniería de LOUST-PRO.

🌐 **Directorio en Vivo:** [devs.github.loust.pro](https://devs.github.loust.pro)

## 🤝 ¿Por qué Unirte?

Al añadir tu perfil aquí, te vuelves visible dentro de nuestra red de ingeniería.

**Para Desarrolladores:** A menudo revisamos este directorio cuando buscamos talento para nuestras iniciativas open-source, nuestro CRM interno, o contratos empresariales B2B. No prometemos colocación, pero es la mejor manera de estar en nuestro radar.
**Para Reclutadores:** Si ves a un desarrollador que te gusta y quieres coordinar una conexión o reclutar talento, no dudes en **[Agendar una Llamada](https://calendar.app.google/XR7FkZXWVwfmZ57x6)** con nuestro equipo.

## 🚀 Cómo Unirte

Usamos un enfoque declarativo y sin conflictos. En lugar de editar un archivo JSON enorme, simplemente añades tu propio archivo YAML al directorio `/members` y envías un Pull Request.

**¿Listo? Simplemente haz clic aquí para auto-generar tu PR:**
<a href="https://github.com/LOUST-PRO/LZT-Developers/new/main/members?filename=tu-usuario.yml&value=username%3A%20tu-usuario%0Aname%3A%20Tu%20Nombre%0Arole%3A%20Software%20Engineer%0Askills%3A%20%0A%20%20-%20Next.js%0A%20%20-%20Rust%0Agithub%3A%20%22https%3A%2F%2Fgithub.com%2Ftu-usuario%22%0Awebsite%3A%20%22%22">
  <img src="https://img.shields.io/badge/Unete_a_LZT_Developers-Click_Aqui_para_Agregar_tu_Perfil-1E293B?style=for-the-badge&logo=github&logoColor=white" alt="Join LZT Developers">
</a>

O hazlo manualmente:
1. Haz un **Fork** de este repositorio.
2. Crea un archivo llamado `tu-usuario-github.yml` dentro de la carpeta `/members`.
3. Llénalo usando esta plantilla:
   ```yaml
   username: tu-usuario-github
   name: Tu Nombre Completo
   role: Full Stack Developer
   skills: 
     - Next.js
     - Rust
     - TypeScript
   github: "https://github.com/tu-usuario-github"
   ```
4. **Envía un Pull Request**.

Una vez que se fusione tu PR, nuestros Server Components de Next.js procesarán dinámicamente los YAMLs al momento del build y renderizarán tu perfil en el sitio de la comunidad. **Cero endpoints públicos (APIs), 100% de protección contra el robo de datos.**

## 🛠 Arquitectura

- **Framework:** Next.js (App Router)
- **Despliegue:** Standalone Multi-Tenant (Listo para Docker/K3s)
- **Fuente de Datos:** Sistema de Archivos Local (procesamiento de `yaml` vía `fs`)
- **Licencia:** GNU AGPLv3 (Asegurando que la plataforma siga siendo verdaderamente open-source incluso como SaaS)
