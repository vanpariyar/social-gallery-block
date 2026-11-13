=== Social Gallery Block ===
Contributors: vanpariyar
Tags: instagram, gallery, twitter, rss, facebook, gutenberg, social gallery, shortcode
Requires at least: 5.0
Requires PHP: 7.0
Tested up to: 7.2
Stable tag: 2.2.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Embed your public Instagram, Twitter (X), and RSS media feeds into your website using beautiful grid layouts. Works as Gutenberg Blocks or Shortcodes.

== Description ==

Social Gallery Block is a lightweight and powerful WordPress plugin designed to showcase your social media content effortlessly. It supports Instagram, Twitter (X), and RSS feeds (perfect for Facebook Pages).

### Key Features:
* **Multi-Platform:** Dedicated blocks for Instagram, Twitter, and RSS Gallery.
* **No App Hassle:** Fetch public profile details from Instagram and Twitter without needing to create complex API Apps.
* **RSS/Facebook Support:** Use any RSS feed (or FB-to-RSS bridge) to display a media gallery.
* **Performance First:** Features built-in 1-hour transient caching to speed up your site and avoid rate-limiting.
* **Dynamic Rendering:** Galleries update automatically on the frontend without needing to re-save posts.
* **Privacy & Security:** Uses a server-side proxy to serve images, preventing CORS issues and protecting your visitors' privacy.
* **Highly Customizable:** Control columns, post counts, and image cropping directly from the editor.

== Changelog ==

= 2.2.0 =
* NEW: Added Twitter Gallery block (No API key required).
* NEW: Added RSS Gallery block (Support for Facebook pages via RSS bridges).
* NEW: Refactored Instagram block to be Dynamic (PHP-rendered).
* IMPROVED: Unified design system and shared styles for all social grids.
* IMPROVED: Expanded image proxy to support Twitter and Facebook media domains.

= 2.1.0 =
* NEW: Added `[instagram_post_grid]` shortcode support.
* NEW: Images now link to original Instagram posts.
* NEW: Added 1-hour server-side caching for better performance.
* IMPROVED: Refined API headers to prevent 401/429 errors.
* IMPROVED: Better error reporting in the Gutenberg editor.
* FIX: Resolved image proxying and loading issues.
* CHORE: Updated metadata and documentation for WordPress.org submission.

= 2.1 =
- Fix the plugin name and working on gallery not showing
= 2.0 =
- Fix the gallery is not rendering after Update
= 1.8 =
- Minor Changes (Typo and Name Fix)
= 1.0 =
- Initial: First Version

== Upgrade Notice ==
Please update to 2.1.0 for significantly improved performance, clickable images, and shortcode support.
