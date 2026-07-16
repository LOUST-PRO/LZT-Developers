module.exports = {
  apps: [
    {
      name: "lzt-developers",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3005
      }
    }
  ]
};
