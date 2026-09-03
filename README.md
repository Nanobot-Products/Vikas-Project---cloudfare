# Vikas Inventory & Procurement Suite (Cloudflare Pages)

Designed for **Vikas Jeerawala** (Procurement & Vendor Lead).

---

## 🚀 How to Deploy on Cloudflare Pages (2 Easy Methods)

### Method 1: Direct Upload (Drag & Drop — No GitHub Needed, 30 Seconds!)
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, click **Compute (Workers & Pages)** -> **Workers & Pages**.
3. Click **Create application** -> select the **Pages** tab.
4. Click **Upload assets**.
5. Set Project Name (e.g. `vikas-inventory` or `vikas-procurement`).
6. Click **Select folder** or drag and drop this entire folder:
   `C:\Users\vikas\.gemini\antigravity\scratch\vikas-inventory-cloudflare`
7. Click **Deploy site**.
8. Cloudflare will provide a permanent URL like `https://vikas-inventory.pages.dev`!

---

### Method 2: Connect via GitHub (Automatic Deployment on every Commit)
1. Push this folder to a GitHub repository (e.g., `Vikas-Project-Cloudflare` or into a repository branch).
2. Go to **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages**.
3. Click **Connect to Git** and select your GitHub account and repository.
4. Set Build configuration:
   - **Framework preset**: `None`
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `.` or `/` (or leave blank)
5. Click **Save and Deploy**.
6. Every time you update `index.html` on GitHub, Cloudflare Pages will automatically deploy in seconds!

---

## 📁 Files in this Folder:
- `index.html`: Complete single-page dashboard application (v3.4).
- `initial_data.json`: Initial inventory, vendors, and procurement data seed.
- `_headers`: Cloudflare Pages HTTP header configuration (prevents browser caching, sets security headers).
- `package.json`: Project metadata.
