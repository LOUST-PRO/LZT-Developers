# Comunidad LZT-Developers

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/LOUST-PRO/LZT-Developers/blob/main/README.md)

¡Bienvenido al hub de **LZT-Developers**! Esta es la plataforma oficial de la comunidad y el directorio de desarrolladores del ecosistema de ingeniería de LOUST-PRO.

## 🚀 Cómo unirte

Usamos un enfoque declarativo y sin conflictos. En lugar de editar un archivo JSON monolítico, simplemente agregas tu propio archivo YAML al directorio `/members` y envías un Pull Request.

1. Haz un **Fork** de este repositorio.
2. Crea un archivo llamado `tu-usuario-de-github.yml` dentro de la carpeta `/members`.
3. Llénalo usando esta plantilla:
   ```yaml
   username: tu-usuario
   name: Tu Nombre Completo
   role: Full Stack Developer
   skills: 
     - Next.js
     - Rust
     - TypeScript
   github: "https://github.com/tu-usuario"
   ```
4. **Envía un Pull Request**.

Una vez que se apruebe (merge), los Server Components de Next.js analizarán dinámicamente los archivos YAML en tiempo de compilación y renderizarán tu perfil en el sitio de la comunidad. **Cero endpoints de API públicos, 100% de protección contra la extracción (scraping) masiva de datos.**

## 🛠 Arquitectura

- **Framework:** Next.js (App Router)
- **Despliegue:** Standalone Multi-Tenant (Listo para Docker/K3s)
- **Fuente de Datos:** Sistema de Archivos Local (parsing de `yaml` vía `fs`)
- **Licencia:** GNU AGPLv3 (Asegurando que la plataforma permanezca verdaderamente de código abierto, incluso como SaaS)
