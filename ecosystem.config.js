module.exports = {
  apps: [{
    script: '/root/roommates/current/backend/build/server.js',
    watch: ['/root/roommates/current/backend'],
    ignore_watch: ['/root/roommates/current/backend/node_modules']
  }],
  deploy: {
    production: {
      user: 'root',
      host: '159.223.192.156',
      ref: 'origin/main',
      repo: 'git@github.com:BrodyMacfarlane/roommates-webapp.git',
      path: '/root/roommates',
      'pre-deploy-local': '',
      'post-deploy': 'cd /root/roommates/current/backend && npm install && npm run build && cd build && cp /root/roommates/backend/.env .env && pm2 stop all && pm2 delete all && pm2 start /root/roommates/current/ecosystem.config.js',
      'pre-setup': ''
    }
  }
};