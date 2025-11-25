# Deployment Guide

This guide details how to deploy the Kutch Travel website to your VPS (72.61.172.175) using Git.

## Prerequisites

- SSH access to the server.
- Node.js (v18 or higher) and npm installed on the server.
- Git installed on the server.
- A process manager like `pm2` (recommended) to keep the app running.

## Initial Setup (First Time)

Run these commands on your server:

1.  **SSH into the server:**
    ```bash
    ssh root@72.61.172.175
    ```

2.  **Install Node.js and Git (if not installed):**
    *Ubuntu/Debian:*
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs git
    ```

3.  **Install PM2 (Process Manager):**
    ```bash
    sudo npm install -g pm2
    ```

4.  **Clone the Repository:**
    Navigate to where you want the site to live (e.g., `/var/www`).
    ```bash
    mkdir -p /var/www
    cd /var/www
    git clone https://github.com/nrbhai/kutchtravel.git
    cd kutchtravel
    ```

5.  **Install Dependencies & Build:**
    ```bash
    npm install
    npm run build
    ```

6.  **Start the Application:**
    ```bash
    pm2 start npm --name "kutchtravel" -- start
    ```

7.  **Save PM2 List (so it restarts on reboot):**
    ```bash
    pm2 save
    pm2 startup
    ```

## Updating the Site (Subsequent Deploys)

When you have pushed new changes to Git, run these commands on the server:

```bash
cd /var/www/kutchtravel

# 1. Pull latest changes
git pull origin main

# 2. Install new dependencies (if any)
npm install

# 3. Rebuild the application
npm run build

# 4. Restart the server
pm2 restart kutchtravel
```

## Troubleshooting

-   **Check Logs:** `pm2 logs kutchtravel`
-   **Check Status:** `pm2 status`
-   **Port Issues:** By default, Next.js starts on port 3000. You may need to configure Nginx as a reverse proxy to serve it on port 80/443.
