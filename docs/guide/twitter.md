# Twitter (X) Gallery

The **Twitter Gallery** block fetches and showcases the latest image and media tweets from any public X (formerly Twitter) profile into a clean, responsive gallery grid.

---

## ✨ Features

- **No Paid API Required:** Uses syndication endpoints to retrieve public media without needing a paid X / Twitter Developer subscription.
- **Visual & Media-Focused:** Automatically filters tweets to display only those containing photo or image attachments.
- **Server-Side Rendered:** Gutenberg displays a real-time live preview of the actual gallery using WordPress's `ServerSideRender` engine.
- **Responsive Layouts:** Configure from 1 to 6 columns with adaptive layouts for tablets and mobile viewports.
- **Privacy First:** External Twitter media assets (`twimg.com`) are securely routed through the plugin's local image proxy to prevent third-party tracking.
- **Transient Caching:** Results are cached in WordPress transients for 1 hour to prevent rate limiting and optimize page speed.

---

## 🛠️ How to Use in Gutenberg

1. Open a page or post in the Block Editor.
2. Click **+** and search for **"Twitter"** or **"Social Gallery"**.
3. Insert the **Twitter Gallery** block.
4. In the block settings panel in the right sidebar:
   - **Twitter Username:** Enter the public screen name (e.g., `nasa` or `wordpress`, without `@`).
   - **Columns:** Set the number of columns (from 1 to 6).
   - **Post Count:** Set how many media tweets to display (from 1 to 12).
5. The block will automatically load a live preview of the tweets directly in the editor canvas.

---

## ⚙️ Block Settings Reference

| Setting | Type | Range / Options | Description | Default |
| :--- | :--- | :--- | :--- | :--- |
| **Twitter Username** | Text | Public username | Profile handle without the `@` symbol. | `""` |
| **Columns** | Slider | 1 – 6 columns | Number of columns in the desktop grid. | `3` |
| **Post Count** | Slider | 1 – 12 tweets | Maximum number of media tweets to display. | `6` |

---

## 🔍 Important Notes

::: tip Public Profiles Only
This block only functions with public X/Twitter profiles. If an account is protected (private), or if the account has posted no tweets with image attachments, the gallery will appear empty.
:::

::: info Media Filtering
Only tweets containing embedded photos or image attachments are retrieved. Retweets without native media or purely text-based tweets are skipped to keep your gallery visually focused.
:::
