# Aiwanose's 22nd Birthday Invitation Website

A beautiful, interactive birthday invitation website with an elegant pink, burgundy, and leopard-print theme.

## Features

✨ **Interactive Design**
- Animated envelope opening on the home page
- Smooth transitions and hover effects
- Responsive design for all devices

📄 **Multiple Pages**
1. **Home** - Welcome page with interactive envelope
2. **Details** - Party information, date, time, location, dress code, and activities
3. **RSVP** - Interactive form to confirm attendance
4. **Gift Ideas** - Gift suggestions and wishlist link

🎨 **Design Elements**
- Elegant pink (#f5d7d7) and burgundy (#8b4c5c) color scheme
- Leopard print accents
- Decorative ribbons and bows
- Heart decorations
- Professional typography

## Party Details

**Date:** October 24th
**Time:** 1:00 PM
**Location:** Freedom Way, Lagos

### Activities
- Sip & Paint
- Karaoke
- Games
- Good Music
- Good Food
- Great Energy

### Dress Code
Pretty & Party-Ready
Think pink, burgundy, neutrals & prints ♥

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/AiwanoseGold/birthday-invitation-website.git
cd birthday-invitation-website
```

2. Open in your browser:
- Simply open `index.html` in your web browser, or
- Use a local server:
```bash
python -m http.server 8000
# or
npm install -g http-server
http-server
```

3. Visit `http://localhost:8000` in your browser

## Hosting on GitHub Pages

1. The repository is already configured for GitHub Pages
2. Visit: `https://AiwanoseGold.github.io/birthday-invitation-website`
3. The site will be automatically deployed when you push to the `main` branch

## File Structure

```
birthday-invitation-website/
├── index.html          # Home page with envelope
├── details.html        # Party details and activities
├── rsvp.html          # RSVP form
├── gifts.html         # Gift ideas page
├── styles.css         # All styling
├── script.js          # Interactive features
└── README.md          # This file
```

## Customization

### Change Party Details
Edit the HTML files to update:
- Date and time in `details.html`
- Location information
- Activities list
- Dress code requirements

### Update Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-pink: #f5d7d7;
    --burgundy: #8b4c5c;
    --deep-burgundy: #6b2c3b;
    /* etc... */
}
```

### Integrate RSVP Form
To send RSVP responses to your email:
1. Uncomment the fetch request in `script.js`
2. Set up a backend service (Firebase, Node.js, etc.)
3. Update the form submission endpoint

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript** - Interactivity
- **GitHub Pages** - Free hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - Feel free to customize and use for your birthday celebration!

## Contact

Created for Aiwanose's 22nd Birthday Celebration 🎉

---

**See you on October 24th!** 💗
