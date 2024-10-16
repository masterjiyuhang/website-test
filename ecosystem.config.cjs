module.exports = {
  apps: [
    {
      name: 'nuxt server',
      exec_mode: 'cluster',
      instance: 1,
      port: 3000,
      args: 'start',
      host: '0.0.0.0',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
