# Random Quote Machine

A dynamic web application that displays random inspirational quotes with smooth animations and color transitions.

## Features

- Random quote generation from local JSON database
- Dynamic color transitions
- Smooth fade animations
- Social media sharing buttons
- Responsive design

## Tech Stack

- HTML/CSS
- JavaScript
- Bun.js server
- Font Awesome icons

## Project Structure

```
Random quote machine/
├── index.html
├── styles.css
├── script.js
├── server.js
└── quotes.json
```

## Core Application Logic

### 1. Quote Generation Flow

```javascript
// When "New Quote" button is clicked:
btn.addEventListener("click", update);

async function update() {
  // 1. Disable button to prevent spam clicks
  // 2. Fetch new quote from server
  // 3. Generate new random color
  // 4. Update DOM with new content
  // 5. Re-enable button
}
```

### 2. Server-Side Processing

- Server loads quotes from `quotes.json` at startup
- When `/quote` endpoint is hit:
  1. Randomly selects quote from array
  2. Returns JSON response
  3. No database needed - everything in memory

### 3. Animation Sequence

1. **Initial State:**

   - Quote card visible with current content
   - Background color set

2. **When Update Triggered:**
   ```
   → Remove animation classes
   → Force browser reflow
   → Add animation classes back
   → Update content during transition
   → Update colors for new theme
   ```

### 4. Color Management

```javascript
// Random RGB color generation
colorGen() → rgb(r,g,b)
↓
Apply to:
- Background
- Quote text
- Button
- Icons
```

### 5. Performance Considerations

- Local JSON storage for fast quote retrieval
- Minimal DOM operations
- Forced reflow only when necessary
- Disabled button during transitions

### 6. Error Handling

- Button disabled during updates
- Animations reset properly between transitions

## Setup Instructions

1. Clone the repository
2. Start the server:

```bash
bun run server.js
```

4. Open `http://localhost:8080` in your browser
