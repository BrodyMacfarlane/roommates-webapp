module.exports = {
  apps: [
    {
      name: 'Prod Backend',
      script: '/root/roommates-webapp/current/backend/build/server.js',
      watch: ['/root/roommates-webapp/current/backend'],
      ignore_watch: ['/root/roommates-webapp/current/backend/node_modules'],
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '159.223.192.156',
      ref: 'origin/main',
      repo: 'git@github.com:BrodyMacfarlane/roommates-webapp.git',
      path: '/root/roommates-webapp',
      'pre-deploy-local': '',
      'post-deploy':
        'cd /root/roommates-webapp/current/backend && npm install && npm run build && cd build && cp /root/roommates-webapp/backend/.env .env && npm ci --production && pm2 startOrRestart /root/roommates-webapp/current/ecosystem.config.js',
      'pre-setup': '',
    },
  },
}
