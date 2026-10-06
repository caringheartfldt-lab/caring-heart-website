# Caring Heart Foundation - Security Deployment Notes

This package is hardened for a static website. The HTML/CSS/JavaScript must remain public because browsers need to download them. No passwords, API secrets, database credentials, or payment secrets should ever be placed in these files.

Changes in this package:
- Added a Content Security Policy to every HTML page.
- Removed inline JavaScript from the donation placeholders.
- Replaced social.js innerHTML rendering with DOM APIs.
- Replaced inline spacing styles with CSS classes.
- Added .htaccess security headers for Apache/Hostinger deployments.

Before production launch:
1. Keep the Git repository private if the source/design should not be publicly reusable.
2. Connect contact/volunteer forms to a secure backend or reputable hosted form service; never expose service secrets in JavaScript.
3. Connect donations through a reputable hosted payment/donation processor; never put payment secret keys in the website.
4. Verify HTTPS works everywhere before relying on HSTS.
5. Review the CSP whenever adding YouTube, analytics, maps, payment widgets, or other third-party resources.

Note: source code cannot be made secret on a static website. These measures protect the site and reduce attack surface; they do not prevent visitors from viewing or downloading frontend code.
