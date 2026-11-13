# Instagram Gallery

The **Instagram Gallery** block embeds a grid of recent media from any public Instagram profile into your WordPress posts and pages.

---

## ✨ Features

- **No API Key / Meta App Required:** Works with public Instagram profiles out of the box without complicated Facebook App verification or expiring access tokens.
- **Editor Previews:** Edit settings in Gutenberg with a live visual preview.
- **Follower Count:** Optional display of the account's total follower count formatted compactly (e.g., `12.5K`, `1.8M`).
- **Responsive Grid:** Select anywhere from 1 to 8 columns with built-in responsive styling on tablets and mobile devices.
- **Image Cropping:** Toggle between 1:1 square cropped thumbnails and natural photo dimensions.
- **High Performance:** Queries are cached locally for 1 hour using WordPress transients to keep page loads fast and avoid Instagram rate limits.
- **Privacy & CORS-Safe:** Images are served through a server-side proxy to prevent cross-origin media blocks and referrer tracking.
- **Shortcode Included:** Can also be embedded anywhere using `[instagram_post_grid]`.

---

## 🛠️ How to Use in Gutenberg

1. In the Block Editor, click **+** and search for **"Social Gallery"** or **"Instagram"**.
2. Select the **Social Gallery (Instagram)** block.
3. In the right sidebar settings panel (or within the block placeholder):
   - Enter your **Instagram Username** (e.g. `nasa` or `@nasa`).
   - Click **Fetch Details** (or press <kbd>Enter</kbd>).
4. Customize display controls:
   - **Show follower count:** Toggles the follower count banner above the grid.
   - **Crop images?:** Crops all photos to square 1:1 aspect ratio.
   - **Column Settings:** Choose from 1 to 8 columns.
   - **Post Count:** Choose how many posts to display (up to 12).
5. Publish or update your page.

---

## ⚙️ Block Settings Reference

| Setting | Type | Range / Options | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| **Instagram Username** | Text | Any public username | Account handle (with or without `@`). | `""` |
| **Show follower count** | Toggle | On / Off | Displays formatted follower count above grid. | `Off` |
| **Crop images?** | Toggle | On / Off | Crops gallery thumbnails to square 1:1 aspect ratio. | `On` |
| **Column Settings** | Slider | 1 – 8 columns | Number of columns in desktop view. | `4` |
| **Post Count** | Slider | 1 – 12 posts | Number of recent posts to show. | `12` |

---

## 🏷️ Shortcode Usage

You can also display the Instagram grid in the Classic Editor, page builders, or theme templates using the `[instagram_post_grid]` shortcode:

```text
[instagram_post_grid username="nasa" columns="4" count="12" cropped="yes" showFollowers="true"]
```

### Shortcode Attributes

| Attribute | Description | Options | Default |
| :--- | :--- | :--- | :--- |
| `username` | **(Required)** The Instagram handle. | Valid username | - |
| `columns` | Number of columns in the grid. | `1` to `8` | `4` |
| `count` | Number of posts to show. | `1` to `12` | `12` |
| `cropped` | Square crop images to 1:1. | `yes`, `no` | `yes` |
| `showFollowers` | Display the follower count. | `true`, `false` | `false` |

---

## 🔍 Important Considerations & Troubleshooting

### Public Accounts Only
Instagram allows media access only for public profiles. If an account is set to private, the block will safely display an informative message and will not expose private media.

### Rate Limiting & Transient Cache
Instagram limits repetitive automated queries from single IP addresses. To prevent blocks, our plugin automatically caches profile and media data in WordPress transients for **1 hour** (`3600 seconds`). 

If you publish new posts to Instagram, they will appear in your gallery automatically after the 1-hour cache expires.

### Image Proxying
Instagram image URLs on CDN hosts (`cdninstagram.com`, `fbcdn.net`) are secured with temporary tokens and strict CORS/CORP headers. The plugin includes a server proxy (`/wp-json/instagram-post-grid/v1/proxy-image`) that safely fetches and caches images to ensure your gallery never displays broken image placeholders.
