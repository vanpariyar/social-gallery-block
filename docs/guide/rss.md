# RSS Gallery (Facebook Pages)

The **RSS Gallery** block is a media grid block capable of turning any standard RSS or Atom feed into an interactive gallery.

It is particularly popular as the primary, developer-friendly way to display **Facebook Page** posts without complex Meta Graph API or Business App setups.

---

## ✨ Features

- **Universal Feed Compatibility:** Works with any valid RSS 2.0 or Atom feed URL (WordPress blogs, Substack, Medium, YouTube, News outlets, etc.).
- **Smart Image Extraction:**
  1. Inspects feed `<enclosure>` metadata for image attachments.
  2. Parses `<content:encoded>` and `<description>` HTML bodies to extract `<img>` sources.
  3. Provides a clean typographic title card fallback when an entry contains no image.
- **Facebook Integration:** Easily display media updates from public Facebook Pages via an RSS bridge.
- **Live Preview:** Instant server-side rendering preview inside the Gutenberg editor.
- **Configurable Layouts:** Adjustable column counts (1 to 6) and item counts (1 to 12).
- **Proxy Protection:** External social media domains embedded in the feed are proxied securely to prevent hotlinking restrictions and CORS errors.

---

## 📘 How to Display a Facebook Page Grid

Meta does not provide direct public RSS feeds for Facebook Pages, but you can generate one in seconds using free or self-hosted RSS bridges:

### Step 1: Generate an RSS Feed for your Facebook Page
1. Visit a feed generation service such as [RSS.app](https://rss.app/) or a self-hosted [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) instance.
2. Enter your public Facebook Page URL (e.g., `https://www.facebook.com/YourPage/`).
3. Copy the generated RSS XML feed link (e.g., `https://rss.app/feeds/abcdef123456.xml`).

### Step 2: Add the RSS Gallery Block
1. In the WordPress Block Editor, click **+** and search for **"RSS Gallery"**.
2. Paste your RSS Feed URL into the **RSS Feed URL** input in the settings sidebar.
3. Choose your desired **Columns** (1–6) and **Post Count** (1–12).
4. The live media grid will render automatically.

---

## ⚙️ Block Settings Reference

| Setting | Type | Range / Options | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| **RSS Feed URL** | URL | Valid HTTP/HTTPS feed URL | The public RSS or Atom feed address. | `""` |
| **Columns** | Slider | 1 – 6 columns | Number of columns in the desktop grid. | `3` |
| **Post Count** | Slider | 1 – 12 items | Number of feed items to retrieve and display. | `6` |

---

## 💡 Tips & Best Practices

::: tip Valid Feeds
Ensure the RSS feed address is publicly accessible and returns valid XML. You can test your feed by opening the URL in a browser or using the [W3C Feed Validation Service](https://validator.w3.org/feed/).
:::

::: info Caching
WordPress's built-in `fetch_feed()` engine caches RSS feeds for 12 hours by default (`12 * HOUR_IN_SECONDS`) to maintain fast page load performance.
:::
