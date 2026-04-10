# HNG Stage 0 - Testable Todo Card

A high-fidelity, accessible, and fully testable Todo Item Card built for the **HNG i14 Frontend Wizards** Stage 0 task. This project demonstrates the use of semantic HTML5, modern CSS3, and Vanilla JavaScript to create a component that meets professional web standards.

**[View Live Demo](https://hng-task-0-odielijah.netlify.app/)**

## ✨ Key Features

### Automated Testability
- Implements all required `data-testid` attributes (e.g., `test-todo-card`, `test-todo-complete-toggle`) to ensure compatibility with automated grading bots.

### Accessibility
- **Semantic HTML:** Built using `<article>`, `<header>`, `<time>`, and `<button>` elements.
- **Keyboard Navigation:** Fully navigable via `Tab`. The checkbox can be toggled using the `Spacebar`.
- **Screen Reader Support:** Includes `aria-label` for icon-only buttons and `aria-live="polite"` for dynamic time updates.
- **Visible Focus:** Custom `:focus-visible` styles to ensure high visibility for keyboard users.

### Responsive Design
- **Fluid Layout:** Works perfectly from **320px to 1200px**.
- **Flexbox Spacing:** Uses `flex-wrap` and `gap` to ensure tags and buttons stack beautifully on small screens without horizontal overflow.

### Interactive Logic
- **Real-time Countdown:** Calculates time remaining from a fixed due date, updating every 60 seconds.
- **State Management:** Toggling completion visually strikes through the title and updates the "Status" badge dynamically via Vanilla JS.

---

## 🛠️ Tech Stack

- **HTML5** (Structural integrity)
- **CSS3** (Custom properties & Flexbox)
- **Vanilla JavaScript** (ES6+ logic)

---

## 📂 Project Structure

```text
├── index.html   # Semantic structure & Test IDs
├── style.css    # Responsive styling & Focus states
├── script.js    # Countdown & Interaction logic
└── README.md    # Documentation
