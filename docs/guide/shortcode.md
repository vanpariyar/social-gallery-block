# Shortcode Guide

The `[instagram_post_grid]` shortcode allows you to embed your Instagram gallery anywhere in WordPress—including classic editors, widgets, theme templates, and popular visual page builders.

---

## 📌 Basic Usage

Place the shortcode anywhere with your desired public Instagram handle:

```text
[instagram_post_grid username="nasa"]
```

---

## ⚙️ Available Attributes

| Attribute | Description | Accepted Values | Default |
| :--- | :--- | :--- | :--- |
| `username` | **(Required)** Your public Instagram handle. | Valid username (with or without `@`) | - |
| `columns` | Number of columns in the grid. | `1` to `8` | `4` |
| `count` | Number of posts to display. | `1` to `12` | `12` |
| `cropped` | Square-crop photos to a 1:1 aspect ratio. | `yes`, `no` | `yes` |
| `showFollowers` | Display a follower count badge above the gallery. | `true`, `false` | `false` |

---

## 📋 Examples

### 1. 3-Column Grid with Follower Count
Display the latest 6 posts across 3 columns with follower count enabled:
```text
[instagram_post_grid username="nasa" columns="3" count="6" showFollowers="true"]
```

### 2. Compact Sidebar / Footer Widget
A 2-column layout showing 4 recent posts:
```text
[instagram_post_grid username="natgeo" columns="2" count="4"]
```

### 3. Uncropped Photos in Original Aspect Ratio
Preserve the natural aspect ratio of photos instead of square cropping:
```text
[instagram_post_grid username="google" columns="4" count="8" cropped="no"]
```

### 4. Direct PHP Theme Template Integration
To include the gallery inside a theme template file (such as `footer.php` or `sidebar.php`):

```php
<?php echo do_shortcode( '[instagram_post_grid username="nasa" columns="4" count="8" showFollowers="true"]' ); ?>
```

---

## 🛠️ Page Builder Compatibility

The shortcode is compatible with all major WordPress page builders:

- **Elementor:** Drag the **Shortcode** widget into any column and paste your shortcode.
- **Divi Builder:** Insert a **Code** or **Text** module and paste your shortcode.
- **WPBakery:** Add a **Raw HTML** or **Text Block** element with the shortcode.
- **Classic Editor:** Paste the shortcode directly into the visual or text editor.
- **Gutenberg:** Insert a standard **Shortcode** core block.
