ye# 🚀 Quick Deployment Steps - Hostinger VPS

## Copy-Paste Commands (Run in order)

### 1️⃣ Connect to VPS
```bash
ssh root@YOUR_VPS_IP
```

### 2️⃣ Install Node.js & Dependencies
```bash
sudo apt update && sudo apt upgrade -y

# Install Node.js v20 using official method
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Verify Node.js installation
node --version
npm --version

# Install Git and PM2
sudo apt install -y git
sudo npm install -g pm2
```

### 3️⃣ Clone & Build Project
```bash
cd ~
git clone https://github.com/nrbhai/kutchtravel.git
cd kutchtravel
npm install
npm run build
```

### 4️⃣ Start Application
```bash
pm2 start npm --name "kutchtravel" -- start
pm2 startup
pm2 save
```

### 5️⃣ Install Nginx
```bash
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/kutchtravel
```

**Paste this config (change YOUR_DOMAIN.com):**
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
    }
}
```

**Save:** Ctrl+X → Y → Enter

```bash
sudo ln -s /etc/nginx/sites-available/kutchtravel /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 6️⃣ Configure Firewall
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 7️⃣ Install SSL (after domain points to VPS)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🔄 Update Site Later
```bash
cd ~/kutchtravel
git pull
npm install
npm run build
pm2 restart kutchtravel
```

---

## 🆘 Emergency Commands
```bash
pm2 logs kutchtravel          # View errors
pm2 restart kutchtravel       # Restart app
sudo systemctl restart nginx  # Restart web server
sudo reboot                   # Restart VPS
```

---

**✅ Your site will be live at:** `http://YOUR_VPS_IP:3000` (before Nginx)
**✅ After Nginx+SSL:** `https://yourdomain.com`
