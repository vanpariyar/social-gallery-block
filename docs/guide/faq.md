# Frequently Asked Questions (FAQ)

### Do I need a Facebook, Instagram, or Twitter Developer account?
**No.** One of the primary advantages of Social Gallery Block is that it does not require creating Meta Developer Apps, verifying business identities, or purchasing expensive Twitter Developer API subscriptions. It works with public accounts out of the box.

---

### Can I display media from private accounts?
**No.** Social platforms strictly protect non-public accounts behind login walls. The plugin can only retrieve and display content from **public** Instagram profiles, public X (Twitter) accounts, and public RSS feeds.

---

### How often does the feed update? (Caching Policy)
To ensure your WordPress site loads as quickly as possible and to prevent rate-limiting by social networks, queries are cached in WordPress transients:
- **Instagram Block:** Caches profile and post data for **1 hour** (`HOUR_IN_SECONDS`).
- **Twitter Block:** Caches media tweets for **1 hour** (`HOUR_IN_SECONDS`).
- **RSS Block:** Caches feed items for **12 hours** (using WordPress core's `fetch_feed()` default).

Once the cache expires, the next visitor to your page will automatically trigger a fresh fetch.

---

### How can I force a cache refresh immediately?
If you recently posted new media and want it to appear immediately:
1. Edit the page in Gutenberg, change any block setting or re-click **Fetch Details**, and save the page.
2. Alternatively, use any transient manager plugin (such as *Transients Manager*) to clear transients starting with `insta_grid_` or `twitter_grid_`.

---

### Why does the plugin use a server-side image proxy?
Social platforms like Instagram and Twitter protect their CDN image URLs with dynamic cross-origin policies (CORP/CORS) and referer checks. If external websites link directly to CDN URLs, browsers frequently block the images from displaying.

Our built-in image proxy (`/wp-json/instagram-post-grid/v1/proxy-image`):
- Eliminates CORS/CORP blocked image issues.
- Protects user privacy by preventing social networks from tracking your site's visitors.
- Employs strict domain allowlists to ensure security.

---

### How do I display a Facebook Page?
Use the **RSS Gallery** block:
1. Generate an RSS feed for your public Facebook Page using an RSS bridge like [RSS.app](https://rss.app/) or a self-hosted [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge).
2. Paste the resulting feed URL into the RSS Gallery block.
3. The plugin will automatically parse and display the latest media updates.

---

### Can I use this with Elementor, Divi, or Classic Editor?
**Yes!** Use the `[instagram_post_grid]` shortcode. For example:
```text
[instagram_post_grid username="nasa" columns="3" count="6" showFollowers="true"]
```
See the [Shortcode Guide](/guide/shortcode) for full details.

---

### How can I customize the gallery styling with CSS?
You can target the following CSS classes in your theme stylesheet or in **Appearance** $\rightarrow$ **Customize** $\rightarrow$ **Additional CSS**:

```css
/* Instagram Block Container */
.wp-block-vanpariyar-instagram-post-grid {
    margin: 2rem 0;
}

/* Follower Count Badge */
.wp-block-vanpariyar-instagram-post-grid .instagram-follower-count {
    font-size: 1rem;
    font-weight: 600;
}

/* Gallery Grid */
.wp-block-vanpariyar-instagram-post-grid .wp-block-gallery {
    gap: 15px !important;
}

/* Individual Grid Items */
.wp-block-vanpariyar-instagram-post-grid .blocks-gallery-item img {
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.wp-block-vanpariyar-instagram-post-grid .blocks-gallery-item img:hover {
    transform: scale(1.05);
}

/* Twitter Block Container */
.wp-block-vanpariyar-twitter-post-grid {
    margin: 2rem 0;
}

/* RSS Block Container */
.wp-block-vanpariyar-rss-post-grid {
    margin: 2rem 0;
}
```

---

### What if I see "Could not find Instagram data"?
This message occurs when:
1. The username was misspelled.
2. The account is set to private.
3. The account has no public posts.
4. Your server IP has been temporarily rate-limited by Instagram. (Wait a few minutes and the connection will restore).
