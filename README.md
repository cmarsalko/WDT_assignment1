# Assignment 1 - Hand-coded HTML, CSS, and JavaScript Website  

## Project Overview  
For this assignment, I created a website titled **“Pittsburgh Sports Greats — Past and Present”**. The site highlights legendary athletes across different Pittsburgh sports teams, featuring their bios, photos, and year-by-year statistics.  

I chose this topic because Pittsburgh has a rich sports history, and I wanted to build a site that blends personal interest with good examples of HTML, CSS, and JavaScript structure.  

---

## Website Structure  
The website contains **7 total HTML pages**:  

1. **index.html** – Home page with cards linking to individual athletes.  
2. **football.html** – Section for professional football players.  
3. **cfb.html** – Section for college football players.  
4. **baseball.html** – Section for professional baseball players.  
5. **hockey.html** – Section for professional hockey players.  
6. **Individual athlete pages** – Each athlete (e.g., Sidney Crosby, T.J. Watt, LeSean McCoy, Mario Lemieux, Andrew McCutchen, Aaron Donald, Antonio Brown, Paul Skenes) has a dedicated page with bio, image, and stats table.  

All pages are connected by a consistent **navigation bar** at the top.  

---

## HTML Elements Used  
- **Semantic tags**: `<header>`, `<footer>`, `<section>`, `<nav>`, `<figure>`, `<figcaption>` to make the site accessible and structured.  
- **Lists**: The nav bar is coded as an unordered list (`<ul><li>`).  
- **Tables**: Athlete stats are displayed dynamically in tables using JavaScript.  
- **Images**: Athlete images included with descriptive `alt` text.  
- **Links**: Internal links connect all pages.  

Validated using the **[W3C Markup Validator](https://validator.w3.org/)** 

https://validator.w3.org/nu/?doc=https%3A%2F%2Fcmarsalko.github.io%2FWDT_assignment1%2Findex.html

---

## CSS Styles Applied  
- Created **styles.css** with consistent design across all pages.  
- At least **6 declaration blocks** and **12+ unique rules** applied.  
- Examples:  
  - Styled navigation bar (`.nav`) with hover and active pseudo-classes.  
  - Changed text fonts, colors, and spacing for readability.  
  - Centered images and captions within `<figure>`.  
  - Styled tables (borders, alignment, spacing).  
  - Improved link states (`:hover`, `:visited`).  
  - Added consistent padding/margins for layout balance.  

Validated using the **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**

https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcmarsalko.github.io%2FWDT_assignment1%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

---

## JavaScript Functionality  
- **Athlete data storage**: A `window.ATHLETES` object stores stats for each player.  
- **Dynamic table rendering**:  
  - Function `renderTable()` builds a `<table>` dynamically based on athlete stats.  
  - Function `renderAthletePage()` inserts the correct table based on the `data-athlete` attribute in `<body>`.  
- **Event listeners**:  
  - Runs `renderAthletePage()` on `DOMContentLoaded`.  
  - Right-aligns numerical table values automatically.  

All JavaScript passes inspection — no console errors.  

---

## Resources Consulted  
- [MDN Web Docs](https://developer.mozilla.org/) for HTML, CSS, and JavaScript syntax reference.  
- [Stack Overflow](https://stackoverflow.com/) for guidance on column inference in tables.  

No code was copied directly; all was hand-written and adapted.  

---

## Summary  
This assignment helped me:  
- Practice structuring a **multi-page website** with semantic HTML.  
- Style consistently with **CSS layouts and typography**.  
- Add **interactivity and dynamic content** using JavaScript.  
- Validate my code with W3C tools to ensure standards compliance.  
