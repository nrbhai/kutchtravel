# Hostinger VPS Deployment Guide for Kutch Travel

## 📋 Prerequisites
- ✅ Hostinger VPS purchased
- ✅ Domain name (optional but recommended)
- ✅ SSH access to your VPS
- ✅ Code already on GitHub: https://github.com/nrbhai/kutchtravel

---

## 🚀 Step-by-Step Deployment

### Step 1: Connect to Your VPS

```bash
# Get your VPS IP from Hostinger panel
# SSH into your VPS (password will be in your Hostinger email)
ssh root@YOUR_VPS_IP_ADDRESS
```

**First time login:** You'll be asked to change the root password. Choose a strong password.

---

### Step 2: Update System & Install Node.js

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js v20 using NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load NVM
source ~/.bashrc

# Install Node.js v20 (LTS)
nvm install 20
nvm use 20
nvm alias default 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x

# Install Git
sudo apt install git -y
```

---

### Step 3: Install PM2 (Process Manager)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Verify PM2 installation
pm2 --version
```

---

### Step 4: Clone Your Project

```bash
# Navigate to home directory
cd ~

# Clone your repository
git clone https://github.com/nrbhai/kutchtravel.git

# Navigate into project
cd kutchtravel

# Install dependencies (this will take a few minutes)
npm install
```

---

### Step 5: Build Your Project

```bash
# Build the production version
npm run build

# This will create optimized production files in .next folder
# Wait for "Compiled successfully" message
```

---

### Step 6: Start Your Application

```bash
# Start with PM2
pm2 start npm --name "kutchtravel" -- start

# Check if it's running
pm2 list

# View logs to ensure no errors
pm2 logs kutchtravel

# Make PM2 restart on server reboot
pm2 startup
pm2 save
```

**Your site is now running on http://YOUR_VPS_IP:3000**

---

### Step 7: Install & Configure Nginx (Web Server)

```bash
# Install Nginx
sudo apt install nginx -y

# Create configuration file
sudo nano /etc/nginx/sites-available/kutchtravel
```

**Paste this configuration** (press Ctrl+Shift+V):

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    client_max_body_size 100M;
}
```

**Save and exit:** Press `Ctrl+X`, then `Y`, then `Enter`

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/kutchtravel /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

---

### Step 8: Configure Firewall

```bash
# Allow necessary ports
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Check firewall status
sudo ufw status
```

---

### Step 9: Point Your Domain to VPS

**In your domain registrar (GoDaddy, Namecheap, etc.):**

1. Go to DNS settings
2. Add/Update these records:
   - **A Record:** `@` → `YOUR_VPS_IP`
   - **A Record:** `www` → `YOUR_VPS_IP`

**Wait 5-30 minutes for DNS propagation**

---

### Step 10: Install SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Choose to redirect HTTP to HTTPS (option 2)

# Auto-renewal test
sudo certbot renew --dry-run
```

**🎉 Your site is now live with HTTPS at https://yourdomain.com**

---

## 🔧 Common Commands

### View Application Status
```bash
pm2 list                    # List all running apps
pm2 logs kutchtravel        # View real-time logs
pm2 monit                   # Monitor CPU/Memory usage
```

### Restart Application
```bash
pm2 restart kutchtravel
```

### Stop Application
```bash
pm2 stop kutchtravel
```

### Update Your Site
```bash
cd ~/kutchtravel
git pull origin main
npm install
npm run build
pm2 restart kutchtravel
```

### View Nginx Logs
```bash
sudo tail -f /var/log/nginx/access.log   # Access logs
sudo tail -f /var/log/nginx/error.log    # Error logs
```

---

## 🐛 Troubleshooting

### Site not accessible
```bash
# Check if app is running
pm2 list

# Check if Nginx is running
sudo systemctl status nginx

# Check firewall
sudo ufw status

# Check logs
pm2 logs kutchtravel
```

### Port 3000 already in use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 PID
```

### Out of memory
```bash
# Check memory usage
free -h

# Restart application
pm2 restart kutchtravel
```

### SSL Certificate Issues
```bash
# Renew certificate manually
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

---

## 📊 Performance Optimization

### Enable Nginx Caching
```bash
sudo nano /etc/nginx/sites-available/kutchtravel
```

Add inside `server` block:
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|woff|woff2)$ {
    proxy_pass http://localhost:3000;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Increase PM2 Memory Limit
```bash
pm2 start npm --name "kutchtravel" --max-memory-restart 500M -- start
pm2 save
```

---

## 🔐 Security Best Practices

1. **Change SSH Port** (optional but recommended)
2. **Disable root login** after creating sudo user
3. **Keep system updated**: `sudo apt update && sudo apt upgrade -y`
4. **Enable automatic security updates**
5. **Regular backups** of your site

---

## 📞 Need Help?

- **PM2 Documentation:** https://pm2.keymetrics.io/docs/usage/quick-start/
- **Nginx Documentation:** https://nginx.org/en/docs/
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Hostinger Support:** https://www.hostinger.com/tutorials/vps

---

## ✅ Deployment Checklist

- [ ] Connected to VPS via SSH
- [ ] Installed Node.js v20
- [ ] Installed PM2
- [ ] Cloned repository from GitHub
- [ ] Ran `npm install`
- [ ] Ran `npm run build` successfully
- [ ] Started app with PM2
- [ ] Installed and configured Nginx
- [ ] Configured firewall
- [ ] Pointed domain to VPS IP
- [ ] Installed SSL certificate
- [ ] Site is live and accessible

---

**🎉 Congratulations! Your Kutch Travel website is now live!**

**Your live site:** https://yourdomain.com
**Repository:** https://github.com/nrbhai/kutchtravel
