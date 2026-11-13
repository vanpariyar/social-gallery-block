# Getting Started

**Social Gallery Block** is a lightweight, high-performance WordPress plugin that embeds media feeds into responsive, customizable grid layouts.

It includes dedicated blocks for:
- **Instagram Gallery:** Display the latest media and follower count from any public Instagram profile.
- **Twitter (X) Gallery:** Showcase media tweets from any public X (Twitter) handle without a paid developer API.
- **RSS Gallery (Facebook):** Render media items from any RSS feed, perfect for displaying Facebook Page updates via RSS bridges.

---

## Requirements

- **WordPress:** 6.0 or higher
- **PHP:** 7.4 or higher
- **Browsers:** Modern Evergreen browsers (Chrome, Firefox, Safari, Edge)

---

## Installation

### Method 1: WordPress Plugin Directory (Recommended)
1. Go to your WordPress Dashboard $\rightarrow$ **Plugins** $\rightarrow$ **Add New Plugin**.
2. Search for **"Social Gallery Block"**.
3. Click **Install Now**, then click **Activate**.

### Method 2: Manual ZIP Upload
1. Download the latest `.zip` release from [WordPress.org](https://wordpress.org/plugins/social-gallery-block/) or GitHub.
2. In your WordPress admin, go to **Plugins** $\rightarrow$ **Add New Plugin** $\rightarrow$ **Upload Plugin**.
3. Choose the `.zip` file and click **Install Now**.
4. Activate the plugin upon installation.

### Method 3: Via WP-CLI
```bash
wp plugin install social-gallery-block --activate
```

---

## Quick Usage

### In the Block Editor (Gutenberg)
1. Open any page or post in the WordPress Block Editor.
2. Click the **+** (Add block) button.
3. Search for:
   - **"Instagram"** $\rightarrow$ *Social Gallery (Instagram)*
   - **"Twitter"** $\rightarrow$ *Twitter Gallery*
   - **"RSS"** $\rightarrow$ *RSS Gallery*
   *(or simply search **"Social Gallery"** to view all three blocks)*.
4. Enter your account username or feed URL in the block inspector sidebar.
5. Customize columns, count, and appearance settings in the right sidebar.

![Social Gallery Block Settings](https://user-images.githubusercontent.com/26689210/76748799-66c7ff00-67a1-11ea-83a3-d24205d2fa56.png)

### Via Shortcode
For page builders (Elementor, Divi, Beaver Builder), widgets, or Classic Editor:

```text
[instagram_post_grid username="instagram" columns="4" count="12" cropped="yes" showFollowers="true"]
```

See the [Shortcode Guide](/guide/shortcode) for full parameter details.

---

## Local Development

If you wish to contribute to or customize the plugin:

### 1. Clone & Install
```bash
git clone https://github.com/vanpariyar/gutenberg-instagram-post-grid.git
cd gutenberg-instagram-post-grid
npm install
```

### 2. Available NPM Scripts
- `npm run build`: Compiles production assets for all blocks into `build/`.
- `npm start`: Starts webpack development mode with file watching.
- `npm run format`: Automatically formats JavaScript files using `@wordpress/scripts`.
- `npm run docs:dev`: Launches the VitePress documentation server locally.
- `npm run docs:build`: Builds the static documentation site for deployment.

### 3. Docker Environment
A pre-configured `docker-compose.yml` is provided for rapid local WordPress testing:
```bash
docker-compose up -d
```
Once started, visit `http://localhost:8080/` in your browser.
