module.exports = {
  apps: [
    {
      name: 'kutchtravel',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '3072M', // Restart if memory usage exceeds 3GB (leaving 1GB for OS)
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      time: true
    },
  ],
};
