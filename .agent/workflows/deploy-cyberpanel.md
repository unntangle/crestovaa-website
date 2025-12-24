---
description: How to deploy the Next.js application on a Hostinger CyberPanel VPS
---

To deploy your Next.js application on a Hostinger CyberPanel VPS, follow these steps:

### 1. Server Preparation
Log in to your VPS via SSH and ensure Node.js is installed.

```bash
# Update packages
sudo apt update

# Install Node.js (version 18 or higher recommended)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally to manage your application process
sudo npm install -g pm2
```

### 2. Create Website in CyberPanel
1. Access your CyberPanel dashboard (usually `https://your-ip:8090`).
2. Go to **Websites** > **Create Website**.
3. Fill in your domain details and select the PHP version (any version is fine as we are using Node.js).
4. Click **Create Website**.

### 3. Upload and Prepare Application
1. Upload your code to the website's directory (usually `/home/yourdomain.com/public_html`) using FTP or Git.
2. Navigate to the project directory:
```bash
cd /home/yourdomain.com/public_html
```
3. Install dependencies and build:
```bash
npm install
npm run build
```

### 4. Start Application with PM2
Start your Next.js app in production mode.
```bash
pm2 start npm --name "crestovaa-website" -- start
# To ensure it starts on reboot:
pm2 save
pm2 startup
```

### 5. Configure Reverse Proxy (OpenLiteSpeed)
Since OpenLiteSpeed listens on port 80/443 and your app is on port 3000, you need a reverse proxy:
1. In CyberPanel, go to **Websites** > **List Websites** > **Manage** (next to your domain).
2. Click on **Rewrite Rules**.
3. Add the following rule to redirect traffic to your Node.js app:
```
REWRITERULE ^(.*)$ http://127.0.0.1:3000/$1 [P]
```
4. Click **Save Rewrite Rules**.

### 6. SSL Configuration
In CyberPanel, go to **SSL** > **Manage SSL** and issue a Let's Let's Encrypt SSL for your domain.

Your application should now be live at your domain!
