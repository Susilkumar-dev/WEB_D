// frontend/src/data/cssNotes.jsx
import {
  BookOpen, FileText, Code, Palette, Type, Box, Layout, Target
} from 'lucide-react';

export const cssNotesData = [
  {
    id: 'css-introduction',
    title: 'Introduction to CSS',
    icon: <BookOpen />,
    difficulty: 'beginner',
    estimatedTime: 10,
    category: 'fundamentals',
    order: 1,
    sections: [
      'What is CSS?',
      'Why CSS is used?',
      'CSS vs HTML',
      'How CSS works?',
      'CSS Versions'
    ],
    content: `
      <h1>🎨 Introduction to CSS</h1>
      <p>CSS (Cascading Style Sheets) is like the <strong>fashion designer</strong> for your website. While HTML builds the structure (skeleton), CSS adds the style (clothes, makeup, accessories)!</p>
      
      <div class="css-concept-box">
        <div class="concept-icon">🏗️</div>
        <h3>Real World Analogy:</h3>
        <p><strong>HTML = House Structure</strong> (walls, doors, rooms)</p>
        <p><strong>CSS = Interior Design</strong> (paint, furniture, decor)</p>
      </div>
      
      <h2>✨ What is CSS?</h2>
      <p>CSS is a <strong>stylesheet language</strong> that controls how HTML elements look on screen. Think of it as giving instructions to the browser about colors, layouts, fonts, and animations.</p>
      
      <div class="interactive-demo">
        <h4>💡 Quick Demo: See CSS in Action!</h4>
        <div class="demo-container">
          <div class="html-box" id="htmlDemo">
            <h3>HTML Only</h3>
            <p>Plain text with no style</p>
          </div>
          <div class="arrow">+ CSS Magic →</div>
          <div class="css-box" id="cssDemo">
            <h3>With CSS</h3>
            <p>Styled beautifully!</p>
          </div>
        </div>
      </div>
      
      <h2>🎯 Why CSS is Used?</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🎨</div>
          <h4>Separation of Concerns</h4>
          <p>Keep HTML for structure, CSS for style. Cleaner code!</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">⚡</div>
          <h4>Faster Websites</h4>
          <p>CSS files can be cached, making pages load faster</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">📱</div>
          <h4>Responsive Design</h4>
          <p>Make websites work on phones, tablets, and desktops</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🎭</div>
          <h4>Consistent Styling</h4>
          <p>Change one CSS file to update entire website</p>
        </div>
      </div>
      
      <h2>🤔 CSS vs HTML - The Perfect Duo!</h2>
      <div class="comparison-3d">
        <div class="comparison-card html-card">
          <h3>HTML</h3>
          <ul>
            <li>📝 Creates structure</li>
            <li>🏗️ Defines content</li>
            <li>🔤 Text, images, links</li>
            <li>🎯 Semantic meaning</li>
          </ul>
        </div>
        <div class="vs">VS</div>
        <div class="comparison-card css-card">
          <h3>CSS</h3>
          <ul>
            <li>🎨 Adds style</li>
            <li>💅 Colors, fonts, spacing</li>
            <li>🎬 Animations, effects</li>
            <li>📱 Responsive layouts</li>
          </ul>
        </div>
      </div>
      
      <h2>🔄 How CSS Works? (The Magic Process)</h2>
      <div class="process-timeline">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Browser loads HTML</h4>
            <p>Reads your HTML document structure</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Creates DOM Tree</h4>
            <p>Builds a tree of all elements</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Loads CSS</h4>
            <p>Finds and reads CSS files</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Creates CSSOM</h4>
            <p>Builds style rules tree</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Renders Page</h4>
            <p>Combines DOM + CSSOM to display</p>
          </div>
        </div>
      </div>
      
      <h2>📜 CSS Versions Timeline</h2>
      <div class="timeline-3d">
        <div class="timeline-item-3d">
          <div class="year-badge">1996</div>
          <h4>CSS1</h4>
          <p>First baby steps - basic fonts, colors, spacing</p>
        </div>
        <div class="timeline-item-3d">
          <div class="year-badge">1998</div>
          <h4>CSS2</h4>
          <p>Added positioning, z-index, media types</p>
        </div>
        <div class="timeline-item-3d">
          <div class="year-badge">2011</div>
          <h4>CSS2.1</h4>
          <p>Cleaned up and standardized</p>
        </div>
        <div class="timeline-item-3d">
          <div class="year-badge">2012+</div>
          <h4>CSS3</h4>
          <p>Modular - animations, grids, flexbox, variables!</p>
        </div>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Student Tip:</h4>
          <p>Don't try to memorize everything! CSS is about <strong>understanding concepts</strong>. Start with basics, practice regularly, and you'll naturally learn advanced topics.</p>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Your First CSS Magic!',
        code: `/* CSS makes HTML beautiful! */
/* This is a CSS comment - it won't show on page */

/* Make all paragraphs blue and bigger */
p {
    color: #0066cc;      /* Blue color */
    font-size: 18px;     /* Text size */
    line-height: 1.6;    /* Space between lines */
    padding: 15px;       /* Space inside */
    background: #f0f8ff; /* Light blue background */
    border-radius: 8px;  /* Rounded corners */
}

/* Style headings like a pro */
h1 {
    color: #333;
    text-align: center;
    font-family: 'Arial', sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* Add a nice background to entire page */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

/* Style links with hover effect */
a {
    color: #ff6b6b;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #ff4757;
    text-decoration: underline;
}`,
        explanation: 'This shows how CSS transforms plain HTML into a beautiful webpage. Notice how we control colors, spacing, and effects!'
      }
    ],
    resources: [
      { title: 'MDN CSS Basics - The Best Resource!', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
      { title: 'CSS-Tricks - Practical Examples', url: 'https://css-tricks.com/' },
      { title: 'FreeCodeCamp CSS Course', url: 'https://www.freecodecamp.org/learn/responsive-web-design/' }
    ],
    prerequisites: ['html-basics'],
    nextTopics: ['css-syntax']
  },
  {
    id: 'css-syntax',
    title: 'CSS Syntax & Basics',
    icon: <FileText />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'fundamentals',
    order: 2,
    sections: [
      'CSS Syntax Rules',
      'Selectors Deep Dive',
      'CSS Comments',
      'Case Sensitivity',
      'CSS Units Explained'
    ],
    content: `
      <h1>📝 CSS Syntax - Learning the Language!</h1>
      <p>CSS has a simple but powerful syntax. Think of it as giving <strong>instructions</strong> to the browser about how to style elements.</p>
      
      <div class="syntax-anatomy">
        <h2>🔬 Anatomy of a CSS Rule</h2>
        <div class="syntax-demo">
          <div class="selector-part">h1</div>
          <div class="curly-open">{</div>
          <div class="property-part">color</div>
          <div class="colon">:</div>
          <div class="value-part">blue</div>
          <div class="semicolon">;</div>
          <div class="property-part">font-size</div>
          <div class="colon">:</div>
          <div class="value-part">32px</div>
          <div class="semicolon">;</div>
          <div class="curly-close">}</div>
        </div>
        <div class="syntax-explanation">
          <div class="explanation-item">
            <span class="label">Selector</span>
            <span class="desc">Which HTML element to style</span>
          </div>
          <div class="explanation-item">
            <span class="label">Property</span>
            <span class="desc">What to change (color, size, etc.)</span>
          </div>
          <div class="explanation-item">
            <span class="label">Value</span>
            <span class="desc">How to change it (blue, 32px, etc.)</span>
          </div>
        </div>
      </div>
      
      <h2>🎯 CSS Selectors - The Target Practice!</h2>
      <p>Selectors help you <strong>target exactly</strong> which elements to style. Here are the main types:</p>
      
      <div class="selectors-grid">
        <div class="selector-card">
          <h3>Element Selector</h3>
          <code>p { color: red; }</code>
          <p>Selects all &lt;p&gt; elements</p>
        </div>
        <div class="selector-card">
          <h3>Class Selector</h3>
          <code>.warning { color: orange; }</code>
          <p>Selects elements with class="warning"</p>
        </div>
        <div class="selector-card">
          <h3>ID Selector</h3>
          <code>#header { background: blue; }</code>
          <p>Selects element with id="header"</p>
        </div>
        <div class="selector-card">
          <h3>Universal Selector</h3>
          <code>* { margin: 0; }</code>
          <p>Selects EVERY element on page</p>
        </div>
      </div>
      
      <h2>💬 CSS Comments - Your Notes!</h2>
      <div class="comment-example">
        <p>Comments help you and others understand your code. They're ignored by the browser.</p>
        <pre><code>/* This is a single-line comment */
/* 
   This is a 
   multi-line 
   comment 
*/
p {
    color: blue; /* Makes text blue */
    /* font-size: 16px; - This line is disabled */
}</code></pre>
      </div>
      
      <h2>🔠 Case Sensitivity - Important Note!</h2>
      <div class="case-sensitivity">
        <div class="case-example correct">
          <h4>✅ Correct (Recommended)</h4>
          <code>.button { }<br>#main-nav { }<br>p { }</code>
          <p>Use lowercase for consistency</p>
        </div>
        <div class="case-example warning">
          <h4>⚠️ Works but confusing</h4>
          <code>.Button { }<br>#MAIN-NAV { }<br>P { }</code>
          <p>Avoid uppercase - it can cause issues</p>
        </div>
      </div>
      
      <h2>📏 CSS Units - Measurement System</h2>
      <div class="units-comparison">
        <div class="unit-card">
          <h3>Absolute Units</h3>
          <ul>
            <li><strong>px</strong> - Pixels (screen dots)</li>
            <li><strong>pt</strong> - Points (1/72 inch)</li>
            <li><strong>cm/mm/in</strong> - Real world units</li>
          </ul>
        </div>
        <div class="unit-card">
          <h3>Relative Units</h3>
          <ul>
            <li><strong>%</strong> - Percentage of parent</li>
            <li><strong>em</strong> - Relative to font-size</li>
            <li><strong>rem</strong> - Relative to root font</li>
            <li><strong>vw/vh</strong> - Viewport width/height</li>
          </ul>
        </div>
      </div>
      
      <div class="practice-exercise">
        <h3>🧪 Try It Yourself!</h3>
        <p>Create a CSS rule that:</p>
        <ol>
          <li>Selects all elements with class "highlight"</li>
          <li>Gives them yellow background</li>
          <li>Adds 10px padding</li>
          <li>Makes text bold</li>
          <li>Adds rounded corners</li>
        </ol>
        <button class="show-solution">Show Solution</button>
        <div class="solution hidden">
          <code>.highlight {<br>  background-color: yellow;<br>  padding: 10px;<br>  font-weight: bold;<br>  border-radius: 5px;<br>}</code>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete CSS Rule Example',
        code: `/* Different types of selectors */
/* Element selector */
h1 {
    color: #2c3e50;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 20px;
}

/* Class selector - can be used multiple times */
.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 20px;
    margin: 15px 0;
}

/* ID selector - should be unique */
#main-header {
    background: linear-gradient(90deg, #667eea, #764ba2);
    color: white;
    padding: 30px;
    text-align: center;
}

/* Multiple elements */
h1, h2, h3 {
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Child selector */
nav > ul {
    list-style: none;
    padding: 0;
}

/* Descendant selector */
article p {
    line-height: 1.8;
    color: #555;
}

/* Attribute selector */
input[type="text"] {
    border: 2px solid #ddd;
    padding: 10px;
    width: 100%;
}

/* Pseudo-class */
a:hover {
    color: #ff6b6b;
    text-decoration: none;
}

/* Using units */
.container {
    width: 90%;           /* Percentage of parent */
    max-width: 1200px;    /* Maximum width in pixels */
    margin: 0 auto;       /* Auto margins for centering */
    padding: 20px;        /* Padding in pixels */
    font-size: 1rem;      /* Relative to root font */
}

.responsive-text {
    font-size: 1.2em;     /* Relative to parent font */
    line-height: 1.6em;   /* Relative to current font */
}

.full-screen {
    width: 100vw;         /* 100% of viewport width */
    height: 100vh;        /* 100% of viewport height */
}`,
        explanation: 'This comprehensive example shows various selectors, properties, and units working together. Notice how each selector targets different elements!'
      }
    ],
    resources: [
      { title: 'CSS Selectors Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors' },
      { title: 'CSS Units Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units' }
    ],
    prerequisites: ['css-introduction'],
    nextTopics: ['css-ways']
  },
  {
    id: 'css-ways',
    title: 'Ways to Add CSS',
    icon: <Code />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'fundamentals',
    order: 3,
    sections: [
      'Inline CSS',
      'Internal CSS',
      'External CSS',
      'CSS Priority Order'
    ],
    content: `
      <h1>🎯 3 Ways to Add CSS to Your Website</h1>
      <p>Just like there are multiple ways to wear clothes (casual, formal, sporty), there are multiple ways to add CSS to your HTML!</p>
      
      <div class="methods-comparison">
        <h2>1. Inline CSS - Quick Fix</h2>
        <div class="method-card inline">
          <div class="method-header">
            <span class="method-badge">💨 Quick</span>
            <span class="method-badge">🚫 Not Recommended</span>
          </div>
          <p>Add CSS directly to HTML element using <code>style</code> attribute</p>
          
          <div class="code-example">
            <h4>Example:</h4>
            <pre><code>&lt;h1 style="color: blue; font-size: 24px;"&gt;
  Hello World!
&lt;/h1&gt;</code></pre>
          </div>
          
          <div class="pros-cons">
            <div class="pros">
              <h5>✅ Pros:</h5>
              <ul>
                <li>Quick for testing</li>
                <li>Highest priority</li>
                <li>No extra files needed</li>
              </ul>
            </div>
            <div class="cons">
              <h5>❌ Cons:</h5>
              <ul>
                <li>Hard to maintain</li>
                <li>No reusability</li>
                <li>Mixes HTML & CSS</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2>2. Internal CSS - Page Specific</h2>
        <div class="method-card internal">
          <div class="method-header">
            <span class="method-badge">📄 Single Page</span>
            <span class="method-badge">🎯 Specific</span>
          </div>
          <p>Add CSS inside <code>&lt;style&gt;</code> tags in HTML <code>&lt;head&gt;</code></p>
          
          <div class="code-example">
            <h4>Example:</h4>
            <pre><code>&lt;head&gt;
  &lt;style&gt;
    h1 {
      color: blue;
      font-size: 24px;
    }
    p {
      color: gray;
      line-height: 1.6;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
          </div>
          
          <div class="pros-cons">
            <div class="pros">
              <h5>✅ Pros:</h5>
              <ul>
                <li>Good for single pages</li>
                <li>Cleaner than inline</li>
                <li>Page-specific styles</li>
              </ul>
            </div>
            <div class="cons">
              <h5>❌ Cons:</h5>
              <ul>
                <li>Not reusable across pages</li>
                <li>Increases HTML file size</li>
                <li>Can't be cached</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2>3. External CSS - Professional Way</h2>
        <div class="method-card external">
          <div class="method-header">
            <span class="method-badge">🏆 Recommended</span>
            <span class="method-badge">♻️ Reusable</span>
          </div>
          <p>Create separate <code>.css</code> file and link it to HTML</p>
          
          <div class="code-example">
            <h4>Example:</h4>
            <div class="two-files">
              <div class="file">
                <h5>📄 style.css</h5>
                <pre><code>h1 {
  color: blue;
  font-size: 24px;
}
p {
  color: gray;
  line-height: 1.6;
}</code></pre>
              </div>
              <div class="file">
                <h5>📄 index.html</h5>
                <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" 
        href="style.css"&gt;
&lt;/head&gt;</code></pre>
              </div>
            </div>
          </div>
          
          <div class="pros-cons">
            <div class="pros">
              <h5>✅ Pros:</h5>
              <ul>
                <li>Clean separation of concerns</li>
                <li>Reusable across multiple pages</li>
                <li>Can be cached by browser</li>
                <li>Easier maintenance</li>
              </ul>
            </div>
            <div class="cons">
              <h5>❌ Cons:</h5>
              <ul>
                <li>Extra HTTP request</li>
                <li>Need to manage multiple files</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🎪 CSS Priority Order - The Cascade Rule</h2>
      <p>When multiple styles conflict, CSS uses this priority order (from highest to lowest):</p>
      
      <div class="priority-pyramid">
        <div class="priority-level" style="background: #ff6b6b;">
          <div class="level-number">1</div>
          <div class="level-content">
            <h4>!important Rule</h4>
            <code>color: red !important;</code>
            <p>Overrides everything (use sparingly!)</p>
          </div>
        </div>
        <div class="priority-level" style="background: #ffa502;">
          <div class="level-number">2</div>
          <div class="level-content">
            <h4>Inline Styles</h4>
            <code>&lt;p style="color: blue;"&gt;</code>
            <p>Styles in HTML tag</p>
          </div>
        </div>
        <div class="priority-level" style="background: #2ed573;">
          <div class="level-number">3</div>
          <div class="level-content">
            <h4>ID Selectors</h4>
            <code>#header { color: green; }</code>
            <p>Most specific selectors</p>
          </div>
        </div>
        <div class="priority-level" style="background: #1e90ff;">
          <div class="level-number">4</div>
          <div class="level-content">
            <h4>Class/Attribute Selectors</h4>
            <code>.button { color: purple; }</code>
            <p>Classes, attributes, pseudo-classes</p>
          </div>
        </div>
        <div class="priority-level" style="background: #a55eea;">
          <div class="level-number">5</div>
          <div class="level-content">
            <h4>Element Selectors</h4>
            <code>p { color: black; }</code>
            <p>Least specific - HTML tags</p>
          </div>
        </div>
      </div>
      
      <h2>🧪 Interactive Example - See Priority in Action!</h2>
      <div class="interactive-priority">
        <div class="code-blocks">
          <div class="code-block">
            <h5>HTML:</h5>
            <pre><code>&lt;p id="text" class="highlight" 
     style="color: orange;"&gt;
  Which color wins?
&lt;/p&gt;</code></pre>
          </div>
          <div class="code-block">
            <h5>CSS:</h5>
            <pre><code>p { color: black; }
.highlight { color: blue; }
#text { color: green; }</code></pre>
          </div>
        </div>
        <div class="result">
          <p class="result-text" style="color: orange;">Result: Orange wins! (Inline style)</p>
          <p class="explanation">Inline (orange) > ID (green) > Class (blue) > Element (black)</p>
        </div>
      </div>
      
      <div class="best-practice">
        <h3>🏆 Best Practice Summary</h3>
        <div class="practice-tips">
          <div class="tip">
            <div class="tip-icon">✅</div>
            <p><strong>Always use External CSS</strong> for production websites</p>
          </div>
          <div class="tip">
            <div class="tip-icon">✅</div>
            <p><strong>Use Internal CSS</strong> for quick prototypes or single pages</p>
          </div>
          <div class="tip">
            <div class="tip-icon">❌</div>
            <p><strong>Avoid Inline CSS</strong> except for quick debugging</p>
          </div>
          <div class="tip">
            <div class="tip-icon">⚠️</div>
            <p><strong>Never use !important</strong> unless absolutely necessary</p>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Project Structure',
        code: `/* 📁 Project Structure */
project-folder/
├── 📄 index.html
├── 📄 about.html
├── 📄 contact.html
└── 📂 css/
    ├── 📄 style.css      # Main styles
    ├── 📄 layout.css     # Layout specific
    └── 📄 components.css # Reusable components

/* 📄 style.css - Main stylesheet */
/* Reset some default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Define color variables for easy theming */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f8f9fa;
}

/* Base styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--background-color);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

/* Links */
a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--primary-color);
    text-decoration: underline;
}

/* 📄 index.html - Linking CSS */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <!-- External CSS Files -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    
    <!-- Internal CSS for page-specific styles -->
    <style>
        /* Hero section only on home page */
        .hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 80px 20px;
            text-align: center;
        }
        
        .hero h1 {
            color: white;
            font-size: 3rem;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <!-- Inline CSS for quick adjustments (avoid when possible) -->
    <div class="hero" style="min-height: 400px;">
        <h1>Welcome!</h1>
        <p>This is styled with all three methods!</p>
    </div>
</body>
</html>`,
        explanation: 'This shows a professional project structure using external CSS files, with internal and inline CSS used appropriately for specific cases.'
      }
    ],
    resources: [
      { title: 'CSS Cascade & Inheritance', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade' },
      { title: 'CSS Specificity Calculator', url: 'https://specificity.keegan.st/' }
    ],
    prerequisites: ['css-syntax'],
    nextTopics: ['css-selectors']
  },
  {
    id: 'css-selectors',
    title: 'CSS Selectors Masterclass',
    icon: <Target />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'fundamentals',
    order: 4,
    sections: [
      'Basic Selectors',
      'Combinator Selectors',
      'Attribute Selectors',
      'Pseudo-classes',
      'Pseudo-elements'
    ],
    content: `
      <h1>🎯 CSS Selectors - The Art of Targeting</h1>
      <p>Selectors are like <strong>laser pointers</strong> that help you target exactly which elements you want to style. Master them to become a CSS ninja!</p>
      
      <div class="selector-visual">
        <h2>🎯 What Are Selectors?</h2>
        <p>Selectors <strong>find HTML elements</strong> and tell CSS what to style. Think of them as search queries for your HTML!</p>
        <div class="selector-example">
          <div class="html-structure">
            &lt;div class="container"&gt;
              <br>&nbsp;&nbsp;&lt;h1 class="title"&gt;Hello&lt;/h1&gt;
              <br>&nbsp;&nbsp;&lt;p&gt;World&lt;/p&gt;
              <br>&lt;/div&gt;
          </div>
          <div class="arrow">↓</div>
          <div class="css-selector">
            <code>.title { color: red; }</code>
          </div>
          <div class="arrow">→</div>
          <div class="result">
            <h1 style="color: red;" class="title-demo">Hello</h1>
          </div>
        </div>
      </div>
      
      <h2>🎪 Basic Selectors Family</h2>
      <div class="selectors-family">
        <div class="family-member">
          <div class="member-icon">🔤</div>
          <h3>Element Selector</h3>
          <code>p { }</code>
          <p>Selects all &lt;p&gt; tags</p>
          <div class="example">
            <strong>Example:</strong>
            <code>p { color: blue; }</code>
          </div>
        </div>
        <div class="family-member">
          <div class="member-icon">🏷️</div>
          <h3>Class Selector</h3>
          <code>.class-name { }</code>
          <p>Selects class="class-name"</p>
          <div class="example">
            <strong>Example:</strong>
            <code>.button { background: green; }</code>
          </div>
        </div>
        <div class="family-member">
          <div class="member-icon">🆔</div>
          <h3>ID Selector</h3>
          <code>#id-name { }</code>
          <p>Selects id="id-name" (unique)</p>
          <div class="example">
            <strong>Example:</strong>
            <code>#header { height: 100px; }</code>
          </div>
        </div>
        <div class="family-member">
          <div class="member-icon">⭐</div>
          <h3>Universal Selector</h3>
          <code>* { }</code>
          <p>Selects ALL elements</p>
          <div class="example">
            <strong>Example:</strong>
            <code>* { margin: 0; }</code>
          </div>
        </div>
      </div>
      
      <h2>🔗 Combinator Selectors - The Relationship Experts</h2>
      <p>These selectors target elements based on their <strong>relationships</strong> with other elements.</p>
      
      <div class="combinator-grid">
        <div class="combinator-card">
          <h3>Descendant Selector</h3>
          <div class="space">(space)</div>
          <code>div p { }</code>
          <p>Selects all &lt;p&gt; inside &lt;div&gt;</p>
          <div class="visual">
            <div class="parent">div</div>
            <div class="child">p</div>
          </div>
        </div>
        <div class="combinator-card">
          <h3>Child Selector</h3>
          <div class="greater">&gt;</div>
          <code>div > p { }</code>
          <p>Selects direct children only</p>
          <div class="visual">
            <div class="parent">div</div>
            <div class="direct-child">p</div>
          </div>
        </div>
        <div class="combinator-card">
          <h3>Adjacent Sibling</h3>
          <div class="plus">+</div>
          <code>h1 + p { }</code>
          <p>Selects &lt;p&gt; right after &lt;h1&gt;</p>
          <div class="visual">
            <div class="sibling">h1</div>
            <div class="next-sibling">p</div>
          </div>
        </div>
        <div class="combinator-card">
          <h3>General Sibling</h3>
          <div class="tilde">~</div>
          <code>h1 ~ p { }</code>
          <p>Selects all &lt;p&gt; after &lt;h1&gt;</p>
          <div class="visual">
            <div class="sibling">h1</div>
            <div class="all-siblings">p</div>
          </div>
        </div>
      </div>
      
      <h2>📋 Attribute Selectors - The Detail-Oriented</h2>
      <p>Target elements based on their <strong>attributes</strong> and <strong>attribute values</strong>.</p>
      
      <div class="attribute-table">
        <table>
          <thead>
            <tr>
              <th>Selector</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>[attribute]</code></td>
              <td><code>[target]</code></td>
              <td>Elements with target attribute</td>
            </tr>
            <tr>
              <td><code>[attribute="value"]</code></td>
              <td><code>[type="text"]</code></td>
              <td>Exact value match</td>
            </tr>
            <tr>
              <td><code>[attribute^="value"]</code></td>
              <td><code>[href^="https"]</code></td>
              <td>Starts with "value"</td>
            </tr>
            <tr>
              <td><code>[attribute$="value"]</code></td>
              <td><code>[src$=".jpg"]</code></td>
              <td>Ends with "value"</td>
            </tr>
            <tr>
              <td><code>[attribute*="value"]</code></td>
              <td><code>[class*="btn"]</code></td>
              <td>Contains "value" anywhere</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>🎭 Pseudo-classes - The State Watchers</h2>
      <p>Select elements based on their <strong>state</strong> or <strong>position</strong>.</p>
      
      <div class="pseudo-grid">
        <div class="pseudo-category">
          <h4>🔗 Link States</h4>
          <div class="pseudo-item">
            <code>:link</code>
            <span>Unvisited links</span>
          </div>
          <div class="pseudo-item">
            <code>:visited</code>
            <span>Visited links</span>
          </div>
          <div class="pseudo-item">
            <code>:hover</code>
            <span>Mouse over element</span>
          </div>
          <div class="pseudo-item">
            <code>:active</code>
            <span>Element being clicked</span>
          </div>
        </div>
        
        <div class="pseudo-category">
          <h4>📋 Form States</h4>
          <div class="pseudo-item">
            <code>:focus</code>
            <span>Focused element</span>
          </div>
          <div class="pseudo-item">
            <code>:checked</code>
            <span>Checked inputs</span>
          </div>
          <div class="pseudo-item">
            <code>:disabled</code>
            <span>Disabled elements</span>
          </div>
          <div class="pseudo-item">
            <code>:required</code>
            <span>Required fields</span>
          </div>
        </div>
        
        <div class="pseudo-category">
          <h4>📊 Position-based</h4>
          <div class="pseudo-item">
            <code>:first-child</code>
            <span>First child element</span>
          </div>
          <div class="pseudo-item">
            <code>:last-child</code>
            <span>Last child element</span>
          </div>
          <div class="pseudo-item">
            <code>:nth-child(n)</code>
            <span>Specific child position</span>
          </div>
          <div class="pseudo-item">
            <code>:not(selector)</code>
            <span>Everything except selector</span>
          </div>
        </div>
      </div>
      
      <h2>✨ Pseudo-elements - The Style Magicians</h2>
      <p>Style <strong>specific parts</strong> of an element.</p>
      
      <div class="pseudo-elements">
        <div class="pseudo-element-card">
          <h3>::before</h3>
          <p>Insert content BEFORE element</p>
          <div class="demo">
            <code>p::before { content: "📝 "; }</code>
            <div class="result">📝 Text here</div>
          </div>
        </div>
        <div class="pseudo-element-card">
          <h3>::after</h3>
          <p>Insert content AFTER element</p>
          <div class="demo">
            <code>p::after { content: " ✅"; }</code>
            <div class="result">Text here ✅</div>
          </div>
        </div>
        <div class="pseudo-element-card">
          <h3>::first-letter</h3>
          <p>Style first letter</p>
          <div class="demo">
            <code>p::first-letter { font-size: 2em; }</code>
            <div class="result"><span style="font-size: 2em;">T</span>ext here</div>
          </div>
        </div>
        <div class="pseudo-element-card">
          <h3>::selection</h3>
          <p>Style selected text</p>
          <div class="demo">
            <code>::selection { background: yellow; }</code>
            <div class="result selectable">Try selecting this text!</div>
          </div>
        </div>
      </div>
      
      <h2>🧠 Selector Specificity - Who Wins?</h2>
      <div class="specificity-pyramid">
        <div class="specificity-level">
          <div class="level-label">Inline Styles</div>
          <div class="level-score">1-0-0-0</div>
          <code>&lt;p style="color: red;"&gt;</code>
        </div>
        <div class="specificity-level">
          <div class="level-label">ID Selectors</div>
          <div class="level-score">0-1-0-0</div>
          <code>#header { }</code>
        </div>
        <div class="specificity-level">
          <div class="level-label">Class/Attribute/Pseudo-class</div>
          <div class="level-score">0-0-1-0</div>
          <code>.button, [type], :hover</code>
        </div>
        <div class="specificity-level">
          <div class="level-label">Element/Pseudo-element</div>
          <div class="level-score">0-0-0-1</div>
          <code>p, ::before</code>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Real-World Selector Examples',
        code: `/* Navigation styling */
/* Main navigation */
nav#main-nav {
    background: #333;
    padding: 1rem;
}

/* Navigation items */
nav#main-nav > ul > li {
    display: inline-block;
    margin: 0 10px;
}

/* Links in navigation */
nav#main-nav a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

/* Hover effect */
nav#main-nav a:hover {
    background: #4CAF50;
    transform: translateY(-2px);
}

/* Active link */
nav#main-nav a.active {
    background: #2196F3;
    font-weight: bold;
}

/* Card component */
/* All cards */
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 15px;
    transition: transform 0.3s ease;
}

/* Hover effect on card */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Featured card */
.card.featured {
    border-color: #FF9800;
    background: #FFF3E0;
}

/* Card with images */
.card[data-type="image"] {
    overflow: hidden;
}

/* First card in container */
.card-container > .card:first-child {
    margin-top: 0;
}

/* Every other card */
.card-container > .card:nth-child(odd) {
    background: #f9f9f9;
}

/* Form styling */
/* Required fields */
input[required] {
    border-left: 3px solid #FF9800;
}

/* Valid inputs */
input:valid {
    border-color: #4CAF50;
}

/* Invalid inputs */
input:invalid {
    border-color: #F44336;
}

/* Focused inputs */
input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
}

/* Checkbox styling */
input[type="checkbox"]:checked + label {
    font-weight: bold;
    color: #4CAF50;
}

/* Disabled buttons */
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Table styling */
/* Striped table rows */
table tr:nth-child(even) {
    background: #f2f2f2;
}

/* Hover effect on rows */
table tr:hover {
    background: #e3f2fd;
}

/* First cell in each row */
table tr td:first-child {
    font-weight: bold;
}

/* Last row */
table tr:last-child {
    border-bottom: 2px solid #333;
}

/* Custom content with pseudo-elements */
/* Add icon before external links */
a[href^="http"]::before {
    content: "🔗 ";
}

/* Add asterisk after required labels */
label.required::after {
    content: " *";
    color: #F44336;
}

/* Style first paragraph in article */
article > p:first-of-type {
    font-size: 1.2em;
    font-style: italic;
    color: #666;
}

/* Drop cap for first letter */
article > p:first-of-type::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    margin-right: 8px;
    color: #2196F3;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}`,
        explanation: 'This example shows practical applications of various selectors in real-world scenarios like navigation, cards, forms, and tables.'
      }
    ],
    resources: [
      { title: 'MDN CSS Selectors', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors' },
      { title: 'CSS Selectors Game', url: 'https://flukeout.github.io/' },
      { title: 'Selector Specificity Calculator', url: 'https://specificity.keegan.st/' }
    ],
    prerequisites: ['css-ways'],
    nextTopics: ['css-box-model']
  },
  {
    id: 'css-box-model',
    title: 'CSS Box Model',
    icon: <Box />,
    difficulty: 'beginner',
    estimatedTime: 25,
    category: 'fundamentals',
    order: 5,
    sections: [
      'What is Box Model?',
      'Content Area',
      'Padding',
      'Border',
      'Margin'
    ],
    content: `
      <h1>📦 CSS Box Model - Everything is a Box!</h1>
      <p>Every HTML element is treated as a <strong>rectangular box</strong> by CSS. Understanding the box model is crucial for layout and spacing.</p>
      
      <div class="box-model-visual">
        <h2>🎯 The Four Layers of a Box</h2>
        <div class="box-model-3d">
          <div class="layer margin">
            <div class="layer-label">Margin</div>
            <div class="layer-desc">Space outside</div>
          </div>
          <div class="layer border">
            <div class="layer-label">Border</div>
            <div class="layer-desc">Edge of element</div>
          </div>
          <div class="layer padding">
            <div class="layer-label">Padding</div>
            <div class="layer-desc">Space inside</div>
          </div>
          <div class="layer content">
            <div class="layer-label">Content</div>
            <div class="layer-desc">Your actual content</div>
          </div>
        </div>
      </div>
      
      <h2>📏 Content Area - The Heart</h2>
      <div class="content-section">
        <p>The <strong>content area</strong> contains your actual content - text, images, videos, etc. Its size is controlled by:</p>
        <div class="properties-grid">
          <div class="property-card">
            <h4>width</h4>
            <code>width: 300px;</code>
            <p>Sets horizontal size</p>
          </div>
          <div class="property-card">
            <h4>height</h4>
            <code>height: 200px;</code>
            <p>Sets vertical size</p>
          </div>
          <div class="property-card">
            <h4>min-width</h4>
            <code>min-width: 100px;</code>
            <p>Minimum width</p>
          </div>
          <div class="property-card">
            <h4>max-width</h4>
            <code>max-width: 100%;</code>
            <p>Maximum width</p>
          </div>
        </div>
      </div>
      
      <h2>🛡️ Padding - The Protective Cushion</h2>
      <div class="padding-section">
        <p><strong>Padding</strong> creates space <strong>inside</strong> the element, between the content and border.</p>
        
        <div class="shorthand-explanation">
          <h3>Padding Shorthand - 4 Ways!</h3>
          <div class="shorthand-examples">
            <div class="example">
              <code>padding: 20px;</code>
              <p>All sides = 20px</p>
            </div>
            <div class="example">
              <code>padding: 10px 20px;</code>
              <p>Top/Bottom = 10px<br>Left/Right = 20px</p>
            </div>
            <div class="example">
              <code>padding: 10px 20px 15px;</code>
              <p>Top = 10px<br>Left/Right = 20px<br>Bottom = 15px</p>
            </div>
            <div class="example">
              <code>padding: 10px 20px 15px 5px;</code>
              <p>Top = 10px<br>Right = 20px<br>Bottom = 15px<br>Left = 5px</p>
            </div>
          </div>
        </div>
        
        <div class="individual-properties">
          <h3>Individual Properties</h3>
          <div class="property-list">
            <div class="property">
              <code>padding-top</code>
              <span>Top padding only</span>
            </div>
            <div class="property">
              <code>padding-right</code>
              <span>Right padding only</span>
            </div>
            <div class="property">
              <code>padding-bottom</code>
              <span>Bottom padding only</span>
            </div>
            <div class="property">
              <code>padding-left</code>
              <span>Left padding only</span>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🚧 Border - The Protective Wall</h2>
      <div class="border-section">
        <p>The <strong>border</strong> surrounds the padding (if any) and content. It has three properties:</p>
        
        <div class="border-properties">
          <div class="border-property">
            <h4>border-width</h4>
            <div class="examples">
              <code>border-width: 2px;</code>
              <code>border-width: thin medium thick 1px;</code>
            </div>
          </div>
          <div class="border-property">
            <h4>border-style</h4>
            <div class="style-examples">
              <div class="style solid">solid</div>
              <div class="style dashed">dashed</div>
              <div class="style dotted">dotted</div>
              <div class="style double">double</div>
              <div class="style groove">groove</div>
            </div>
          </div>
          <div class="border-property">
            <h4>border-color</h4>
            <div class="color-examples">
              <div class="color-example" style="border-color: red;">red</div>
              <div class="color-example" style="border-color: #4CAF50;">#4CAF50</div>
              <div class="color-example" style="border-color: rgb(33, 150, 243);">rgb</div>
              <div class="color-example" style="border-color: rgba(0,0,0,0.5);">rgba</div>
            </div>
          </div>
        </div>
        
        <div class="border-shorthand">
          <h3>Border Shorthand</h3>
          <div class="shorthand-card">
            <code>border: 2px solid red;</code>
            <p>Sets width, style, and color together</p>
          </div>
        </div>
      </div>
      
      <h2>🌌 Margin - The Personal Space</h2>
      <div class="margin-section">
        <p><strong>Margin</strong> creates space <strong>outside</strong> the element, between this element and others.</p>
        
        <div class="margin-examples">
          <div class="margin-demo">
            <div class="box box1">Box 1</div>
            <div class="box box2">Box 2</div>
            <div class="margin-space">← Margin →</div>
          </div>
        </div>
        
        <div class="margin-collapse">
          <h3>⚠️ Margin Collapse</h3>
          <p>When two vertical margins meet, they <strong>collapse</strong> into a single margin (the larger one wins!).</p>
          <div class="collapse-demo">
            <div class="element top" style="margin-bottom: 30px;">Margin-bottom: 30px</div>
            <div class="element bottom" style="margin-top: 20px;">Margin-top: 20px</div>
            <div class="result">Actual space = 30px (not 50px!)</div>
          </div>
        </div>
        
        <div class="margin-values">
          <h3>Special Margin Values</h3>
          <div class="value-cards">
            <div class="value-card">
              <code>margin: 0 auto;</code>
              <p>Centers element horizontally</p>
            </div>
            <div class="value-card">
              <code>margin: auto;</code>
              <p>Centers in both directions</p>
            </div>
            <div class="value-card">
              <code>margin: -10px;</code>
              <p>Negative margin - overlaps!</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🧮 Calculating Total Size</h2>
      <div class="calculation">
        <div class="formula">
          <h3>Total Width Formula</h3>
          <div class="math">
            <code>
              Total Width = <br>
              margin-left + border-left + padding-left +<br>
              width +<br>
              padding-right + border-right + margin-right
            </code>
          </div>
        </div>
        
        <div class="example-calculation">
          <h3>Example Calculation</h3>
          <div class="numbers">
            <div class="number-item">
              <span>Width:</span>
              <code>200px</code>
            </div>
            <div class="number-item">
              <span>Padding:</span>
              <code>20px (both sides)</code>
            </div>
            <div class="number-item">
              <span>Border:</span>
              <code>1px (both sides)</code>
            </div>
            <div class="number-item">
              <span>Margin:</span>
              <code>10px (both sides)</code>
            </div>
            <div class="number-item total">
              <span>Total Width:</span>
              <code>200 + 40 + 2 + 20 = <strong>262px</strong></code>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🔄 box-sizing Property - Game Changer!</h2>
      <div class="box-sizing">
        <div class="box-sizing-card">
          <h3>content-box (Default)</h3>
          <code>box-sizing: content-box;</code>
          <p>Width/height = content only<br>Padding/border ADD to total size</p>
          <div class="demo-box content-box-demo">
            <div class="label">width: 200px</div>
            <div class="actual">Actual: 262px</div>
          </div>
        </div>
        
        <div class="box-sizing-card recommended">
          <h3>border-box (Recommended!)</h3>
          <code>box-sizing: border-box;</code>
          <p>Width/height = content + padding + border<br>Total size stays what you set!</p>
          <div class="demo-box border-box-demo">
            <div class="label">width: 200px</div>
            <div class="actual">Actual: 200px</div>
          </div>
        </div>
      </div>
      
      <div class="best-practice">
        <h3>🏆 Best Practice</h3>
        <div class="practice-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <p><strong>Always use this at the start of your CSS:</strong></p>
            <code>* { box-sizing: border-box; }</code>
            <p>Makes layout calculations much easier!</p>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Practical Box Model Examples',
        code: `/* Reset box-sizing for easier calculations */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Card component with proper spacing */
.card {
    /* Total width will be 300px exactly */
    width: 300px;
    padding: 20px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    margin: 20px;
    background: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    
    /* With border-box, the total width is:
       300px = content + padding + border */
}

/* Button with different states */
.button {
    /* Base button */
    display: inline-block;
    padding: 12px 24px;
    border: 2px solid transparent;
    border-radius: 6px;
    background: #4CAF50;
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    /* Space between buttons */
    margin: 8px;
    
    /* Prevent text selection */
    user-select: none;
}

/* Hover effect - changes padding and border */
.button:hover {
    padding: 14px 26px;
    border-color: #45a049;
    margin: 6px; /* Adjust margin to compensate */
    background: #45a049;
}

/* Active/clicked state */
.button:active {
    padding: 11px 23px;
    margin: 9px;
    background: #3d8b40;
}

/* Outlined button variant */
.button.outlined {
    background: transparent;
    border-color: #4CAF50;
    color: #4CAF50;
}

/* Container with proper spacing */
.container {
    max-width: 1200px;
    margin: 0 auto; /* Centers the container */
    padding: 0 20px; /* Prevents content from touching edges */
}

/* Navigation with proper spacing */
.navbar {
    background: #333;
    padding: 15px 0;
    margin-bottom: 30px;
}

.navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px; /* Modern way to space items */
}

.navbar li {
    /* No margin needed with gap property */
}

.navbar a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background 0.3s;
}

.navbar a:hover {
    background: rgba(255,255,255,0.1);
}

/* Form inputs with proper spacing */
.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

.form-input {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-input:focus {
    outline: none;
    border-color: #4CAF50;
    /* Add some space when focused */
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

/* Grid layout with proper gutters */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px; /* Space between grid items */
    margin: 30px 0;
}

.grid-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Handling margin collapse */
/* Parent with padding to avoid child margin collapsing */
.parent {
    background: #f0f0f0;
    padding: 1px; /* Small padding prevents margin collapse */
}

.child {
    background: white;
    margin: 20px 0;
    padding: 15px;
}

/* Using negative margins for creative layouts */
.hero {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 80px 20px;
    margin: -20px -20px 40px -20px; /* Negative margins to extend beyond container */
}

/* Card stack effect with negative margins */
.card-stack .card {
    margin-bottom: -20px; /* Overlap cards */
    position: relative;
    z-index: 1;
}

.card-stack .card:hover {
    z-index: 2; /* Bring hovered card to front */
    margin-bottom: 0;
}

/* Centering techniques */
/* Method 1: Auto margins */
.center-auto {
    width: 300px;
    margin: 40px auto; /* Top/bottom = 40px, Left/right = auto */
}

/* Method 2: Flexbox */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

/* Method 3: Grid */
.center-grid {
    display: grid;
    place-items: center;
    height: 200px;
}

/* Spacing utility classes */
/* Padding utilities */
.p-0 { padding: 0; }
.p-4 { padding: 1rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }

/* Margin utilities */
.m-0 { margin: 0; }
.m-4 { margin: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.mt-8 { margin-top: 2rem; }`,
        explanation: 'These examples show practical applications of the box model in real components like cards, buttons, navigation, and forms.'
      }
    ],
    resources: [
      { title: 'MDN Box Model Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' },
      { title: 'Box Model Interactive Tool', url: 'https://box-model.vercel.app/' },
      { title: 'CSS Box Sizing Explained', url: 'https://css-tricks.com/box-sizing/' }
    ],
    prerequisites: ['css-selectors'],
    nextTopics: ['css-colors-backgrounds']
  },
  {
    id: 'css-colors-backgrounds',
    title: 'Colors & Backgrounds',
    icon: <Palette />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'fundamentals',
    order: 6,
    sections: [
      'Color Values',
      'Background Properties',
      'Gradients',
      'Opacity & Transparency'
    ],
    content: `
      <h1>🎨 CSS Colors & Backgrounds - Painting Your Website!</h1>
      <p>Colors and backgrounds are what make your website <strong>visually appealing</strong> and <strong>engaging</strong>. Let's learn how to use them effectively!</p>
      
      <div class="color-intro">
        <h2>🌈 Color is Everywhere!</h2>
        <p>In CSS, you can specify colors in <strong>multiple ways</strong>. Each has its own use case.</p>
        <div class="color-rainbow">
          <div class="color-swatch" style="background: red;">Red</div>
          <div class="color-swatch" style="background: orange;">Orange</div>
          <div class="color-swatch" style="background: yellow; color: black;">Yellow</div>
          <div class="color-swatch" style="background: green;">Green</div>
          <div class="color-swatch" style="background: blue;">Blue</div>
          <div class="color-swatch" style="background: indigo;">Indigo</div>
          <div class="color-swatch" style="background: violet;">Violet</div>
        </div>
      </div>
      
      <h2>🎯 Color Value Systems</h2>
      <div class="color-systems">
        <div class="system-card">
          <h3>1. Named Colors</h3>
          <code>color: red;</code>
          <p>Simple but limited (140+ colors)</p>
          <div class="color-examples">
            <span style="color: red;">red</span>
            <span style="color: blue;">blue</span>
            <span style="color: green;">green</span>
            <span style="color: purple;">purple</span>
          </div>
        </div>
        
        <div class="system-card">
          <h3>2. HEX Colors</h3>
          <code>color: #FF5733;</code>
          <p>6-digit hex code (most common)</p>
          <div class="color-examples">
            <span style="color: #FF0000;">#FF0000</span>
            <span style="color: #00FF00;">#00FF00</span>
            <span style="color: #0000FF;">#0000FF</span>
            <span style="color: #FFC300;">#FFC300</span>
          </div>
        </div>
        
        <div class="system-card">
          <h3>3. RGB Colors</h3>
          <code>color: rgb(255, 87, 51);</code>
          <p>Red, Green, Blue (0-255 each)</p>
          <div class="color-examples">
            <span style="color: rgb(255,0,0);">rgb(255,0,0)</span>
            <span style="color: rgb(0,255,0);">rgb(0,255,0)</span>
            <span style="color: rgb(0,0,255);">rgb(0,0,255)</span>
          </div>
        </div>
        
        <div class="system-card">
          <h3>4. RGBA Colors</h3>
          <code>color: rgba(255, 87, 51, 0.5);</code>
          <p>RGB + Alpha (transparency 0-1)</p>
          <div class="color-examples transparent">
            <span style="color: rgba(255,0,0,0.5);">50% Red</span>
            <span style="color: rgba(0,255,0,0.3);">30% Green</span>
            <span style="color: rgba(0,0,255,0.7);">70% Blue</span>
          </div>
        </div>
        
        <div class="system-card">
          <h3>5. HSL Colors</h3>
          <code>color: hsl(12, 100%, 60%);</code>
          <p>Hue, Saturation, Lightness</p>
          <div class="color-examples">
            <span style="color: hsl(0, 100%, 50%);">Red</span>
            <span style="color: hsl(120, 100%, 50%);">Green</span>
            <span style="color: hsl(240, 100%, 50%);">Blue</span>
          </div>
        </div>
        
        <div class="system-card">
          <h3>6. HSLA Colors</h3>
          <code>color: hsla(12, 100%, 60%, 0.5);</code>
          <p>HSL + Alpha (transparency)</p>
          <div class="color-examples transparent">
            <span style="color: hsla(0,100%,50%,0.5);">Semi-red</span>
            <span style="color: hsla(120,100%,50%,0.3);">Light green</span>
          </div>
        </div>
      </div>
      
      <h2>🎨 Color Properties</h2>
      <div class="color-properties">
        <div class="property-card">
          <h3>color</h3>
          <code>color: #333;</code>
          <p>Sets text color</p>
          <div class="demo" style="color: #333;">This text is dark gray</div>
        </div>
        
        <div class="property-card">
          <h3>background-color</h3>
          <code>background-color: #f0f0f0;</code>
          <p>Sets background color</p>
          <div class="demo" style="background-color: #f0f0f0; padding: 10px;">Gray background</div>
        </div>
        
        <div class="property-card">
          <h3>border-color</h3>
          <code>border: 2px solid #4CAF50;</code>
          <p>Sets border color</p>
          <div class="demo" style="border: 2px solid #4CAF50; padding: 10px;">Green border</div>
        </div>
      </div>
      
      <h2>🌄 Background Properties - Beyond Just Color!</h2>
      <div class="background-properties">
        <div class="bg-property-card">
          <h3>background-image</h3>
          <code>background-image: url('image.jpg');</code>
          <p>Sets an image as background</p>
        </div>
        
        <div class="bg-property-card">
          <h3>background-repeat</h3>
          <code>background-repeat: no-repeat;</code>
          <div class="options">
            <span>repeat</span>
            <span>repeat-x</span>
            <span>repeat-y</span>
            <span>no-repeat</span>
          </div>
        </div>
        
        <div class="bg-property-card">
          <h3>background-position</h3>
          <code>background-position: center;</code>
          <div class="options">
            <span>top left</span>
            <span>center</span>
            <span>bottom right</span>
            <span>50% 50%</span>
          </div>
        </div>
        
        <div class="bg-property-card">
          <h3>background-size</h3>
          <code>background-size: cover;</code>
          <div class="options">
            <span>auto</span>
            <span>cover</span>
            <span>contain</span>
            <span>100% 100%</span>
          </div>
        </div>
        
        <div class="bg-property-card">
          <h3>background-attachment</h3>
          <code>background-attachment: fixed;</code>
          <div class="options">
            <span>scroll</span>
            <span>fixed</span>
            <span>local</span>
          </div>
        </div>
      </div>
      
      <div class="background-shorthand">
        <h3>🎪 Background Shorthand</h3>
        <div class="shorthand-example">
          <code>background: #333 url('bg.jpg') no-repeat center/cover fixed;</code>
          <p>Sets all background properties at once!</p>
        </div>
      </div>
      
      <h2>🌈 Gradients - Smooth Color Transitions</h2>
      <div class="gradients-section">
        <div class="gradient-card">
          <h3>Linear Gradient</h3>
          <code>background: linear-gradient(to right, red, blue);</code>
          <div class="gradient-preview linear"></div>
          <div class="directions">
            <div class="direction">to right</div>
            <div class="direction">to bottom</div>
            <div class="direction">45deg</div>
            <div class="direction">to top right</div>
          </div>
        </div>
        
        <div class="gradient-card">
          <h3>Radial Gradient</h3>
          <code>background: radial-gradient(circle, red, blue);</code>
          <div class="gradient-preview radial"></div>
          <div class="shapes">
            <div class="shape">circle</div>
            <div class="shape">ellipse</div>
          </div>
        </div>
        
        <div class="gradient-card">
          <h3>Conic Gradient</h3>
          <code>background: conic-gradient(red, yellow, green);</code>
          <div class="gradient-preview conic"></div>
          <p>Color wheel effect!</p>
        </div>
      </div>
      
      <div class="gradient-examples">
        <h3>🎨 Popular Gradient Combinations</h3>
        <div class="gradient-combos">
          <div class="combo" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            Purple Gradient
          </div>
          <div class="combo" style="background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);">
            Ocean Breeze
          </div>
          <div class="combo" style="background: linear-gradient(to right, #ff7e5f, #feb47b);">
            Sunset
          </div>
          <div class="combo" style="background: linear-gradient(45deg, #ff9a9e, #fad0c4);">
            Cotton Candy
          </div>
        </div>
      </div>
      
      <h2>🌫️ Transparency & Opacity</h2>
      <div class="transparency-section">
        <div class="transparency-card">
          <h3>opacity</h3>
          <code>opacity: 0.5;</code>
          <p>Makes entire element transparent (0-1)</p>
          <div class="opacity-demos">
            <div class="opacity-demo" style="opacity: 1;">100%</div>
            <div class="opacity-demo" style="opacity: 0.7;">70%</div>
            <div class="opacity-demo" style="opacity: 0.4;">40%</div>
            <div class="opacity-demo" style="opacity: 0.1;">10%</div>
          </div>
        </div>
        
        <div class="transparency-card">
          <h3>RGBA/HSLA</h3>
          <code>background: rgba(255,0,0,0.5);</code>
          <p>Transparent background only</p>
          <div class="rgba-demos">
            <div class="rgba-demo" style="background: rgba(255,0,0,0.8);">80%</div>
            <div class="rgba-demo" style="background: rgba(0,255,0,0.6);">60%</div>
            <div class="rgba-demo" style="background: rgba(0,0,255,0.4);">40%</div>
          </div>
        </div>
      </div>
      
      <div class="transparency-tip">
        <h3>💡 Pro Tip: When to Use Which?</h3>
        <div class="tip-content">
          <p><strong>Use opacity</strong> when you want the entire element (including content) to be transparent.</p>
          <p><strong>Use RGBA/HSLA</strong> when you only want the background to be transparent, but keep text/content solid.</p>
        </div>
      </div>
      
      <h2>🎭 Blend Modes - Advanced Color Magic!</h2>
      <div class="blend-modes">
        <p>Blend modes control how colors mix when layers overlap.</p>
        <div class="blend-examples">
          <div class="blend-card">
            <h4>background-blend-mode</h4>
            <code>background-blend-mode: multiply;</code>
          </div>
          <div class="blend-card">
            <h4>mix-blend-mode</h4>
            <code>mix-blend-mode: screen;</code>
          </div>
        </div>
        <div class="blend-types">
          <span>normal</span>
          <span>multiply</span>
          <span>screen</span>
          <span>overlay</span>
          <span>darken</span>
          <span>lighten</span>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Color & Background Examples',
        code: `/* Modern color system using CSS variables */
:root {
    /* Primary colors */
    --primary: #667eea;
    --primary-dark: #5a67d8;
    --primary-light: #a3bffa;
    
    /* Secondary colors */
    --secondary: #764ba2;
    --secondary-dark: #553c9a;
    
    /* Neutral colors */
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Semantic colors */
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    --info: #3b82f6;
}

/* Base styles with color variables */
body {
    background-color: var(--gray-50);
    color: var(--gray-900);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
}

/* Button component with color variants */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

/* Primary button */
.btn-primary {
    background: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    background: var(--primary-dark);
    box-shadow: 0 4px 6px rgba(102, 126, 234, 0.4);
}

/* Secondary button */
.btn-secondary {
    background: var(--secondary);
    color: var(--white);
}

.btn-secondary:hover {
    background: var(--secondary-dark);
}

/* Outline button */
.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: var(--white);
}

/* Card with gradient background */
.gradient-card {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--white);
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    margin: 30px 0;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* Hero section with multiple backgrounds */
.hero {
    position: relative;
    min-height: 500px;
    padding: 80px 20px;
    color: var(--white);
    text-align: center;
    overflow: hidden;
}

/* Background image with overlay */
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    z-index: -2;
}

/* Gradient overlay */
.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.9),
        rgba(118, 75, 162, 0.8)
    );
    z-index: -1;
}

/* Navigation with transparent background that becomes solid on scroll */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 1);
    padding: 15px 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Pricing cards with color accents */
.pricing-card {
    background: var(--white);
    border-radius: 12px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-top: 4px solid transparent;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.pricing-card.popular {
    border-top-color: var(--primary);
    position: relative;
}

.pricing-card.popular::before {
    content: 'Most Popular';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: var(--white);
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

/* Badge system */
.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-success {
    background: rgba(16, 185, 129, 0.1);
    color: var(--success);
    border: 1px solid rgba(16, 185, 129, 0.2);
}

.badge-warning {
    background: rgba(245, 158, 11, 0.1);
    color: var(--warning);
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.badge-error {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error);
    border: 1px solid rgba(239, 68, 68, 0.2);
}

/* Background patterns */
.pattern-dots {
    background-color: var(--gray-100);
    background-image: radial-gradient(var(--gray-300) 1px, transparent 1px);
    background-size: 20px 20px;
}

.pattern-grid {
    background-color: var(--white);
    background-image: linear-gradient(var(--gray-200) 1px, transparent 1px),
                      linear-gradient(90deg, var(--gray-200) 1px, transparent 1px);
    background-size: 20px 20px;
}

/* Testimonial with gradient text */
.testimonial-text {
    font-size: 1.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 20px 0;
}

/* Animated gradient background */
.animated-gradient {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Glassmorphism effect */
.glass-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    :root {
        --gray-50: #111827;
        --gray-100: #1f2937;
        --gray-900: #f9fafb;
    }
    
    body {
        background-color: var(--gray-50);
        color: var(--gray-900);
    }
    
    .glass-card {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
}`,
        explanation: 'These examples show modern, production-ready color and background techniques including CSS variables, gradients, transparency effects, and dark mode support.'
      }
    ],
    resources: [
      { title: 'CSS Colors Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' },
      { title: 'CSS Gradients Generator', url: 'https://cssgradient.io/' },
      { title: 'Color Palette Generator', url: 'https://coolors.co/' },
      { title: 'WebGradients Collection', url: 'https://webgradients.com/' }
    ],
    prerequisites: ['css-box-model'],
    nextTopics: ['css-typography']
  },
  {
    id: 'css-typography',
    title: 'CSS Typography',
    icon: <Type />,
    difficulty: 'beginner',
    estimatedTime: 25,
    category: 'fundamentals',
    order: 7,
    sections: [
      'Font Properties',
      'Text Properties',
      'Web Fonts',
      'Typography Best Practices'
    ],
    content: `
      <h1>🔤 CSS Typography - The Art of Beautiful Text!</h1>
      <p>Typography is <strong>90% of web design</strong>. Good typography makes your content readable, accessible, and beautiful.</p>
      
      <div class="typography-intro">
        <h2>🎯 Why Typography Matters</h2>
        <div class="typography-impact">
          <div class="impact-card">
            <div class="impact-icon">👁️</div>
            <h4>Readability</h4>
            <p>Easy to read = better UX</p>
          </div>
          <div class="impact-card">
            <div class="impact-icon">🎨</div>
            <h4>Visual Hierarchy</h4>
            <p>Guides users through content</p>
          </div>
          <div class="impact-card">
            <div class="impact-icon">📱</div>
            <h4>Accessibility</h4>
            <p>Everyone can read your content</p>
          </div>
          <div class="impact-card">
            <div class="impact-icon">🏢</div>
            <h4>Brand Identity</h4>
            <p>Fonts convey personality</p>
          </div>
        </div>
      </div>
      
      <h2>🔤 Font Properties - Choosing Your Typeface</h2>
      <div class="font-properties">
        <div class="font-property-card">
          <h3>font-family</h3>
          <code>font-family: 'Roboto', sans-serif;</code>
          <p>Specifies the typeface</p>
          <div class="font-stack">
            <p><strong>Font Stack Example:</strong></p>
            <code>font-family: 'Roboto', Arial, Helvetica, sans-serif;</code>
            <p>Browser tries each font until it finds one available</p>
          </div>
        </div>
        
        <div class="font-property-card">
          <h3>font-size</h3>
          <code>font-size: 16px;</code>
          <p>Controls text size</p>
          <div class="size-examples">
            <div class="size-example" style="font-size: 12px;">12px - Small</div>
            <div class="size-example" style="font-size: 16px;">16px - Normal</div>
            <div class="size-example" style="font-size: 24px;">24px - Large</div>
            <div class="size-example" style="font-size: 32px;">32px - XL</div>
          </div>
        </div>
        
        <div class="font-property-card">
          <h3>font-weight</h3>
          <code>font-weight: bold;</code>
          <p>Controls thickness</p>
          <div class="weight-examples">
            <div class="weight-example" style="font-weight: 100;">100 - Thin</div>
            <div class="weight-example" style="font-weight: 300;">300 - Light</div>
            <div class="weight-example" style="font-weight: 400;">400 - Normal</div>
            <div class="weight-example" style="font-weight: 700;">700 - Bold</div>
            <div class="weight-example" style="font-weight: 900;">900 - Black</div>
          </div>
        </div>
        
        <div class="font-property-card">
          <h3>font-style</h3>
          <code>font-style: italic;</code>
          <p>Controls slant</p>
          <div class="style-examples">
            <div class="style-example" style="font-style: normal;">Normal</div>
            <div class="style-example" style="font-style: italic;">Italic</div>
            <div class="style-example" style="font-style: oblique;">Oblique</div>
          </div>
        </div>
        
        <div class="font-property-card">
          <h3>font-variant</h3>
          <code>font-variant: small-caps;</code>
          <p>Special text variations</p>
          <div class="variant-examples">
            <div class="variant-example" style="font-variant: normal;">Normal Text</div>
            <div class="variant-example" style="font-variant: small-caps;">Small Caps</div>
          </div>
        </div>
        
        <div class="font-property-card">
          <h3>line-height</h3>
          <code>line-height: 1.6;</code>
          <p>Space between lines</p>
          <div class="lineheight-examples">
            <div class="lineheight-example" style="line-height: 1;">Tight (1)</div>
            <div class="lineheight-example" style="line-height: 1.5;">Normal (1.5)</div>
            <div class="lineheight-example" style="line-height: 2;">Loose (2)</div>
          </div>
        </div>
      </div>
      
      <h2>📝 Text Properties - Styling Your Text</h2>
      <div class="text-properties">
        <div class="text-property-card">
          <h3>color</h3>
          <code>color: #333333;</code>
          <p>Text color</p>
          <div class="color-example" style="color: #333;">Dark Gray Text</div>
        </div>
        
        <div class="text-property-card">
          <h3>text-align</h3>
          <code>text-align: center;</code>
          <p>Horizontal alignment</p>
          <div class="alignment-examples">
            <div class="align-example" style="text-align: left;">← Left</div>
            <div class="align-example" style="text-align: center;">Center</div>
            <div class="align-example" style="text-align: right;">Right →</div>
            <div class="align-example" style="text-align: justify;">Justified text fills the entire width of the container.</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>text-decoration</h3>
          <code>text-decoration: underline;</code>
          <p>Line decorations</p>
          <div class="decoration-examples">
            <div class="decoration-example" style="text-decoration: none;">None</div>
            <div class="decoration-example" style="text-decoration: underline;">Underline</div>
            <div class="decoration-example" style="text-decoration: overline;">Overline</div>
            <div class="decoration-example" style="text-decoration: line-through;">Line-through</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>text-transform</h3>
          <code>text-transform: uppercase;</code>
          <p>Changes text case</p>
          <div class="transform-examples">
            <div class="transform-example" style="text-transform: none;">None</div>
            <div class="transform-example" style="text-transform: uppercase;">UPPERCASE</div>
            <div class="transform-example" style="text-transform: lowercase;">lowercase</div>
            <div class="transform-example" style="text-transform: capitalize;">Capitalize Each Word</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>text-indent</h3>
          <code>text-indent: 2em;</code>
          <p>First line indent</p>
          <div class="indent-example" style="text-indent: 2em;">
            This paragraph has a 2em indent on the first line. The rest of the text continues normally.
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>letter-spacing</h3>
          <code>letter-spacing: 2px;</code>
          <p>Space between letters</p>
          <div class="letterspacing-examples">
            <div class="letterspacing-example" style="letter-spacing: -1px;">Tight (-1px)</div>
            <div class="letterspacing-example" style="letter-spacing: normal;">Normal</div>
            <div class="letterspacing-example" style="letter-spacing: 2px;">Loose (2px)</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>word-spacing</h3>
          <code>word-spacing: 10px;</code>
          <p>Space between words</p>
          <div class="wordspacing-examples">
            <div class="wordspacing-example" style="word-spacing: normal;">Normal spacing</div>
            <div class="wordspacing-example" style="word-spacing: 10px;">Wide spacing</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>text-shadow</h3>
          <code>text-shadow: 2px 2px 4px rgba(0,0,0,0.3);</code>
          <p>Adds shadow to text</p>
          <div class="shadow-examples">
            <div class="shadow-example" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">Subtle</div>
            <div class="shadow-example" style="text-shadow: 3px 3px 0px #ff6b6b;">Colorful</div>
            <div class="shadow-example" style="text-shadow: 0 0 10px #4CAF50;">Glow</div>
          </div>
        </div>
        
        <div class="text-property-card">
          <h3>white-space</h3>
          <code>white-space: nowrap;</code>
          <p>Controls line breaks</p>
          <div class="whitespace-examples">
            <div class="whitespace-example" style="white-space: normal; width: 200px;">
              Normal: Text wraps to next line when needed.
            </div>
            <div class="whitespace-example" style="white-space: nowrap; width: 200px;">
              Nowrap: Text stays on one line, no matter what.
            </div>
            <div class="whitespace-example" style="white-space: pre; width: 200px;">
              Pre:     Preserves
              spaces
              and
              line breaks
            </div>
          </div>
        </div>
      </div>
      
      <h2>🌐 Web Fonts - Beyond System Fonts</h2>
      <div class="web-fonts">
        <div class="web-font-method">
          <h3>1. Google Fonts (Easiest)</h3>
          <div class="method-code">
            <h4>In HTML:</h4>
            <code>&lt;link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"&gt;</code>
            <h4>In CSS:</h4>
            <code>font-family: 'Roboto', sans-serif;</code>
          </div>
        </div>
        
        <div class="web-font-method">
          <h3>2. @font-face (Custom Fonts)</h3>
          <div class="method-code">
            <code>@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}</code>
          </div>
        </div>
        
        <div class="web-font-method">
          <h3>3. Font Loading Strategies</h3>
          <div class="strategies">
            <div class="strategy">
              <h4>FOUT</h4>
              <p>Flash of Unstyled Text</p>
            </div>
            <div class="strategy">
              <h4>FOIT</h4>
              <p>Flash of Invisible Text</p>
            </div>
            <div class="strategy">
              <h4>font-display: swap;</h4>
              <p>Use system font first, then swap</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🎨 Font Shorthand - One Line Magic!</h2>
      <div class="font-shorthand">
        <div class="shorthand-example">
          <code>font: italic small-caps bold 24px/1.5 'Roboto', sans-serif;</code>
          <p>Sets all font properties in one line!</p>
          <div class="shorthand-breakdown">
            <div class="breakdown-item">
              <span>font-style:</span>
              <code>italic</code>
            </div>
            <div class="breakdown-item">
              <span>font-variant:</span>
              <code>small-caps</code>
            </div>
            <div class="breakdown-item">
              <span>font-weight:</span>
              <code>bold</code>
            </div>
            <div class="breakdown-item">
              <span>font-size/line-height:</span>
              <code>24px/1.5</code>
            </div>
            <div class="breakdown-item">
              <span>font-family:</span>
              <code>'Roboto', sans-serif</code>
            </div>
          </div>
        </div>
      </div>
      
      <h2>📊 Typography Scale - The Golden Ratio</h2>
      <div class="typography-scale">
        <p>Use a consistent scale for harmonious typography:</p>
        <div class="scale-example">
          <div class="scale-item" style="font-size: 12px;">
            <span class="size-label">12px</span>
            <span class="type-label">Caption</span>
          </div>
          <div class="scale-item" style="font-size: 14px;">
            <span class="size-label">14px</span>
            <span class="type-label">Small Text</span>
          </div>
          <div class="scale-item" style="font-size: 16px;">
            <span class="size-label">16px</span>
            <span class="type-label">Body Text</span>
          </div>
          <div class="scale-item" style="font-size: 20px;">
            <span class="size-label">20px</span>
            <span class="type-label">Subheading</span>
          </div>
          <div class="scale-item" style="font-size: 24px;">
            <span class="size-label">24px</span>
            <span class="type-label">Heading 3</span>
          </div>
          <div class="scale-item" style="font-size: 32px;">
            <span class="size-label">32px</span>
            <span class="type-label">Heading 2</span>
          </div>
          <div class="scale-item" style="font-size: 40px;">
            <span class="size-label">40px</span>
            <span class="type-label">Heading 1</span>
          </div>
        </div>
      </div>
      
      <h2>🎯 Typography Best Practices</h2>
      <div class="best-practices">
        <div class="practice-card">
          <h3>1. Limit Font Families</h3>
          <p>Use 2-3 fonts max (1 for headings, 1 for body)</p>
        </div>
        <div class="practice-card">
          <h3>2. Use REM for Sizes</h3>
          <p><code>font-size: 1rem;</code> for accessibility</p>
        </div>
        <div class="practice-card">
          <h3>3. Line Height Matters</h3>
          <p>1.5-1.6 for body text, 1.2-1.3 for headings</p>
        </div>
        <div class="practice-card">
          <h3>4. Contrast Ratio</h3>
          <p>Minimum 4.5:1 for normal text</p>
        </div>
        <div class="practice-card">
          <h3>5. Responsive Typography</h3>
          <p>Use relative units and media queries</p>
        </div>
      </div>
      
      <div class="typography-tip">
        <h3>💡 Pro Tip: CSS Clamp()</h3>
        <div class="tip-content">
          <code>font-size: clamp(1rem, 2.5vw, 2rem);</code>
          <p>Creates responsive font sizes that scale between minimum and maximum values!</p>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Typography System',
        code: `/* Modern Typography System with CSS Variables */
:root {
    /* Font families */
    --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
    
    /* Typography scale using REM (1rem = 16px) */
    --text-xs: 0.75rem;    /* 12px */
    --text-sm: 0.875rem;   /* 14px */
    --text-base: 1rem;     /* 16px */
    --text-lg: 1.125rem;   /* 18px */
    --text-xl: 1.25rem;    /* 20px */
    --text-2xl: 1.5rem;    /* 24px */
    --text-3xl: 1.875rem;  /* 30px */
    --text-4xl: 2.25rem;   /* 36px */
    --text-5xl: 3rem;      /* 48px */
    
    /* Line heights */
    --leading-tight: 1.25;
    --leading-normal: 1.5;
    --leading-loose: 1.75;
    
    /* Font weights */
    --font-thin: 100;
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-black: 900;
    
    /* Letter spacing */
    --tracking-tight: -0.025em;
    --tracking-normal: 0;
    --tracking-wide: 0.025em;
}

/* Base typography */
body {
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    font-weight: var(--font-normal);
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    margin-top: 0;
    margin-bottom: 0.5em;
}

h1 {
    font-size: var(--text-5xl);
    letter-spacing: var(--tracking-tight);
}

h2 {
    font-size: var(--text-4xl);
}

h3 {
    font-size: var(--text-3xl);
}

h4 {
    font-size: var(--text-2xl);
}

h5 {
    font-size: var(--text-xl);
}

h6 {
    font-size: var(--text-lg);
}

/* Paragraphs */
p {
    margin-top: 0;
    margin-bottom: 1.5em;
    line-height: var(--leading-normal);
}

.lead {
    font-size: var(--text-lg);
    line-height: var(--leading-loose);
    color: #666;
}

/* Links */
a {
    color: #0066cc;
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: #004499;
    text-decoration: underline;
}

/* Lists */
ul, ol {
    margin: 1em 0;
    padding-left: 1.5em;
}

li {
    margin-bottom: 0.5em;
    line-height: var(--leading-normal);
}

/* Code blocks */
code, pre {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
}

code {
    background: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    color: #d63384;
}

pre {
    background: #1a1a1a;
    color: #f8f8f8;
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
    line-height: var(--leading-normal);
}

/* Blockquotes */
blockquote {
    border-left: 4px solid #ddd;
    margin: 1.5em 0;
    padding-left: 1.5em;
    font-style: italic;
    color: #666;
}

blockquote footer {
    font-style: normal;
    font-size: var(--text-sm);
    color: #999;
    margin-top: 0.5em;
}

/* Text utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

.font-thin { font-weight: var(--font-thin); }
.font-light { font-weight: var(--font-light); }
.font-normal { font-weight: var(--font-normal); }
.font-medium { font-weight: var(--font-medium); }
.font-semibold { font-weight: var(--font-semibold); }
.font-bold { font-weight: var(--font-bold); }
.font-black { font-weight: var(--font-black); }

.text-xs { font-size: var(--text-xs); }
.text-sm { font-size: var(--text-sm); }
.text-base { font-size: var(--text-base); }
.text-lg { font-size: var(--text-lg); }
.text-xl { font-size: var(--text-xl); }
.text-2xl { font-size: var(--text-2xl); }
.text-3xl { font-size: var(--text-3xl); }
.text-4xl { font-size: var(--text-4xl); }
.text-5xl { font-size: var(--text-5xl); }

.leading-tight { line-height: var(--leading-tight); }
.leading-normal { line-height: var(--leading-normal); }
.leading-loose { line-height: var(--leading-loose); }

.tracking-tight { letter-spacing: var(--tracking-tight); }
.tracking-normal { letter-spacing: var(--tracking-normal); }
.tracking-wide { letter-spacing: var(--tracking-wide); }

/* Text decorations */
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }

/* Text shadows */
.text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.text-shadow-md {
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Truncation */
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Responsive typography */
@media (max-width: 768px) {
    :root {
        --text-5xl: 2.25rem;  /* 36px on mobile */
        --text-4xl: 1.875rem; /* 30px on mobile */
        --text-3xl: 1.5rem;   /* 24px on mobile */
    }
    
    h1 {
        font-size: var(--text-4xl);
    }
    
    h2 {
        font-size: var(--text-3xl);
    }
}

/* Fluid typography with clamp() */
.fluid-heading {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.2;
}

.fluid-body {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
}

/* Google Fonts implementation */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Custom @font-face for premium fonts */
@font-face {
    font-family: 'CustomFont';
    src: url('/fonts/customfont-regular.woff2') format('woff2'),
         url('/fonts/customfont-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'CustomFont';
    src: url('/fonts/customfont-bold.woff2') format('woff2'),
         url('/fonts/customfont-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* Gradient text effect */
.gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: var(--font-bold);
}

/* Text with background */
.text-highlight {
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
}

/* Drop cap */
.drop-cap::first-letter {
    float: left;
    font-size: 3.5em;
    line-height: 0.8;
    margin-right: 0.1em;
    margin-top: 0.1em;
    font-weight: var(--font-bold);
    color: #667eea;
}

/* Price styling */
.price {
    font-family: var(--font-mono);
    font-weight: var(--font-bold);
    color: #10b981;
}

.price-old {
    text-decoration: line-through;
    color: #999;
    font-weight: var(--font-normal);
}`,
        explanation: 'This comprehensive typography system shows how to create a scalable, maintainable typography foundation for any project using CSS variables, modern units, and best practices.'
      }
    ],
    resources: [
      { title: 'Google Fonts', url: 'https://fonts.google.com/' },
      { title: 'Type Scale Calculator', url: 'https://type-scale.com/' },
      { title: 'MDN Typography Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text' },
      { title: 'Font Pairing Guide', url: 'https://www.fontpair.co/' }
    ],
    prerequisites: ['css-colors-backgrounds'],
    nextTopics: ['css-display-position']
  },
  {
    id: 'css-display-position',
    title: 'Display & Position',
    icon: <Layout />,
    difficulty: 'intermediate',
    estimatedTime: 30,
    category: 'layout-design',
    order: 8,
    sections: [
      'Display Property',
      'Position Property',
      'Z-index',
      'Float Property',
      'Visibility & Opacity'
    ],
    content: `
      <h1>🎯 CSS Display & Position - Controlling Layout</h1>
      <p>These properties control <strong>how elements flow</strong> on the page and <strong>where they're placed</strong>. Master these to create complex layouts!</p>
      
      <div class="layout-intro">
        <h2>🎪 The Display Property - How Elements Behave</h2>
        <p>The <code>display</code> property determines if/how an element is displayed and how it interacts with other elements.</p>
      </div>
      
      <h2>📦 Common Display Values</h2>
      <div class="display-values">
        <div class="display-card">
          <h3>block</h3>
          <code>display: block;</code>
          <div class="visual">
            <div class="block-box">Block Element</div>
            <div class="block-box">Takes full width</div>
            <div class="block-box">Starts on new line</div>
          </div>
          <div class="characteristics">
            <p>✅ Full width</p>
            <p>✅ New line</p>
            <p>✅ Can set width/height</p>
          </div>
          <div class="examples">
            <code>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;</code>
          </div>
        </div>
        
        <div class="display-card">
          <h3>inline</h3>
          <code>display: inline;</code>
          <div class="visual inline-visual">
            <span class="inline-box">Inline</span>
            <span class="inline-box">Elements</span>
            <span class="inline-box">Flow</span>
            <span class="inline-box">Together</span>
          </div>
          <div class="characteristics">
            <p>✅ Only needed width</p>
            <p>✅ Same line</p>
            <p>❌ No width/height</p>
          </div>
          <div class="examples">
            <code>&lt;span&gt;, &lt;a&gt;, &lt;strong&gt;</code>
          </div>
        </div>
        
        <div class="display-card">
          <h3>inline-block</h3>
          <code>display: inline-block;</code>
          <div class="visual inlineblock-visual">
            <div class="inlineblock-box">Inline</div>
            <div class="inlineblock-box">Block</div>
            <div class="inlineblock-box">Best of</div>
            <div class="inlineblock-box">Both!</div>
          </div>
          <div class="characteristics">
            <p>✅ Only needed width</p>
            <p>✅ Same line</p>
            <p>✅ Can set width/height</p>
          </div>
          <div class="examples">
            <p>Perfect for buttons, nav items</p>
          </div>
        </div>
        
        <div class="display-card">
          <h3>none</h3>
          <code>display: none;</code>
          <div class="visual none-visual">
            <div class="visible-box">Visible</div>
            <div class="hidden-box">Hidden (none)</div>
            <div class="visible-box">Visible</div>
          </div>
          <div class="characteristics">
            <p>✅ Completely removed</p>
            <p>✅ No space taken</p>
            <p>✅ Not accessible</p>
          </div>
          <div class="examples">
            <p>Hiding elements completely</p>
          </div>
        </div>
        
        <div class="display-card">
          <h3>flex</h3>
          <code>display: flex;</code>
          <div class="visual flex-visual">
            <div class="flex-item">Flex</div>
            <div class="flex-item">Items</div>
            <div class="flex-item">Awesome!</div>
          </div>
          <div class="characteristics">
            <p>✅ One-dimensional layout</p>
            <p>✅ Powerful alignment</p>
            <p>✅ Modern solution</p>
          </div>
          <div class="examples">
            <p>Navbars, card layouts, forms</p>
          </div>
        </div>
        
        <div class="display-card">
          <h3>grid</h3>
          <code>display: grid;</code>
          <div class="visual grid-visual">
            <div class="grid-item">Grid</div>
            <div class="grid-item">Two-dimensional</div>
            <div class="grid-item">Layout</div>
            <div class="grid-item">Power!</div>
          </div>
          <div class="characteristics">
            <p>✅ Two-dimensional layout</p>
            <p>✅ Rows & columns</p>
            <p>✅ Most powerful</p>
          </div>
          <div class="examples">
            <p>Page layouts, galleries</p>
          </div>
        </div>
      </div>
      
      <h2>📍 Position Property - Where Elements Go</h2>
      <div class="position-types">
        <div class="position-card">
          <h3>static (Default)</h3>
          <code>position: static;</code>
          <div class="position-visual">
            <div class="doc-flow">Document Flow →</div>
            <div class="pos-box static">Static</div>
            <div class="pos-box static">Normal Flow</div>
          </div>
          <div class="properties">
            <p>✅ Normal flow</p>
            <p>❌ Ignores top/right/bottom/left</p>
            <p>❌ No z-index</p>
          </div>
        </div>
        
        <div class="position-card">
          <h3>relative</h3>
          <code>position: relative;</code>
          <div class="position-visual">
            <div class="original-pos">Original Position</div>
            <div class="pos-box relative" style="top: 20px; left: 20px;">Relative</div>
            <div class="space-preserved">Space preserved</div>
          </div>
          <div class="properties">
            <p>✅ Normal flow position</p>
            <p>✅ Can offset from itself</p>
            <p>✅ Space preserved</p>
          </div>
        </div>
        
        <div class="position-card">
          <h3>absolute</h3>
          <code>position: absolute;</code>
          <div class="position-visual">
            <div class="parent-relative" style="position: relative; height: 120px;">
              <div class="pos-box absolute" style="top: 10px; left: 10px;">Absolute</div>
              <div class="parent-label">Relative Parent</div>
            </div>
          </div>
          <div class="properties">
            <p>✅ Removed from flow</p>
            <p>✅ Positioned relative to nearest positioned ancestor</p>
            <p>✅ No space preserved</p>
          </div>
        </div>
        
        <div class="position-card">
          <h3>fixed</h3>
          <code>position: fixed;</code>
          <div class="position-visual fixed-visual">
            <div class="viewport">Viewport</div>
            <div class="pos-box fixed">Fixed<br>(stays here)</div>
            <div class="scroll-content">Scroll content...</div>
          </div>
          <div class="properties">
            <p>✅ Relative to viewport</p>
            <p>✅ Stays on screen while scrolling</p>
            <p>✅ Perfect for navbars, modals</p>
          </div>
        </div>
        
        <div class="position-card">
          <h3>sticky</h3>
          <code>position: sticky;</code>
          <div class="position-visual sticky-visual">
            <div class="scroll-container">
              <div class="content">Content...</div>
              <div class="pos-box sticky">Sticky Header</div>
              <div class="content">More content...</div>
            </div>
          </div>
          <div class="properties">
            <p>✅ Hybrid of relative + fixed</p>
            <p>✅ Sticks when scrolling</p>
            <p>✅ Modern solution</p>
          </div>
        </div>
      </div>
      
      <h2>🎯 Offset Properties (top, right, bottom, left)</h2>
      <div class="offset-properties">
        <div class="offset-card">
          <h3>How They Work</h3>
          <div class="offset-demo">
            <div class="box-container">
              <div class="offset-box" style="top: 20px; left: 30px;">
                top: 20px<br>left: 30px
              </div>
              <div class="original-position">Original Position</div>
            </div>
          </div>
          <div class="offset-rules">
            <p><strong>For relative:</strong> Offset from original position</p>
            <p><strong>For absolute/fixed:</strong> Offset from containing block</p>
            <p><strong>For sticky:</strong> Becomes fixed when crossing threshold</p>
          </div>
        </div>
      </div>
      
      <h2>🔼 Z-index - The Stacking Order</h2>
      <div class="z-index-section">
        <div class="z-index-visual">
          <div class="z-layer" style="z-index: 1; background: #ff6b6b;">z-index: 1</div>
          <div class="z-layer" style="z-index: 2; background: #4ecdc4; top: 20px; left: 20px;">z-index: 2</div>
          <div class="z-layer" style="z-index: 3; background: #45b7d1; top: 40px; left: 40px;">z-index: 3</div>
          <div class="z-layer" style="z-index: 9999; background: #96ceb4; top: 60px; left: 60px;">z-index: 9999</div>
        </div>
        
        <div class="z-index-rules">
          <h3>Stacking Rules</h3>
          <div class="stacking-order">
            <div class="stack-item">
              <span class="number">1</span>
              <span>Elements with position & z-index (highest wins)</span>
            </div>
            <div class="stack-item">
              <span class="number">2</span>
              <span>Positioned elements without z-index (source order)</span>
            </div>
            <div class="stack-item">
              <span class="number">3</span>
              <span>Non-positioned elements (normal flow)</span>
            </div>
          </div>
        </div>
        
        <div class="z-index-tips">
          <h3>💡 Z-index Tips</h3>
          <ul>
            <li>Only works on <strong>positioned</strong> elements (not static)</li>
            <li>Higher number = closer to user</li>
            <li>Can be negative!</li>
            <li>Creates stacking context</li>
          </ul>
        </div>
      </div>
      
      <h2>🌊 Float Property (Legacy but Still Useful)</h2>
      <div class="float-section">
        <div class="float-demo">
          <div class="float-left">Float Left</div>
          <p>Text wraps around floated elements. This is how magazines and newspapers layout text around images. Float was originally for images but was abused for layout before Flexbox/Grid.</p>
          
          <div class="float-right">Float Right</div>
          <p>Notice how text flows around the floated element. The float property takes elements out of normal flow but allows content to wrap around them.</p>
        </div>
        
        <div class="float-values">
          <div class="float-value">
            <code>float: left;</code>
            <p>Element floats to left</p>
          </div>
          <div class="float-value">
            <code>float: right;</code>
            <p>Element floats to right</p>
          </div>
          <div class="float-value">
            <code>float: none;</code>
            <p>Default - no floating</p>
          </div>
        </div>
        
        <div class="clear-property">
          <h3>clear Property - Stopping Floats</h3>
          <div class="clear-demo">
            <div class="float-box">Float</div>
            <div class="clear-box" style="clear: both;">Clear: both</div>
            <p>This element clears all floats above it.</p>
          </div>
          <div class="clear-values">
            <code>clear: left;</code>
            <code>clear: right;</code>
            <code>clear: both;</code>
            <code>clear: none;</code>
          </div>
        </div>
      </div>
      
      <h2>👁️ Visibility vs Display vs Opacity</h2>
      <div class="hiding-comparison">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Code</th>
              <th>Visibility</th>
              <th>Space Occupied</th>
              <th>Accessibility</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>display: none;</td>
              <td><code>display: none;</code></td>
              <td>❌ Completely hidden</td>
              <td>❌ No space</td>
              <td>❌ Not accessible</td>
              <td>Remove element completely</td>
            </tr>
            <tr>
              <td>visibility: hidden;</td>
              <td><code>visibility: hidden;</code></td>
              <td>❌ Invisible</td>
              <td>✅ Space kept</td>
              <td>❌ Not accessible</td>
              <td>Hide but keep layout</td>
            </tr>
            <tr>
              <td>opacity: 0;</td>
              <td><code>opacity: 0;</code></td>
              <td>❌ Invisible</td>
              <td>✅ Space kept</td>
              <td>✅ Accessible</td>
              <td>Fade animations</td>
            </tr>
            <tr>
              <td>height: 0;<br>overflow: hidden;</td>
              <td><code>height: 0;<br>overflow: hidden;</code></td>
              <td>❌ Hidden</td>
              <td>❌ No space</td>
              <td>❌ Not accessible</td>
              <td>Collapsible menus</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="practical-examples">
        <h2>🏗️ Practical Layout Examples</h2>
        
        <div class="example">
          <h3>1. Centering Techniques</h3>
          <div class="centering-methods">
            <div class="method">
              <h4>Text Centering</h4>
              <code>text-align: center;</code>
            </div>
            <div class="method">
              <h4>Block Centering (Old)</h4>
              <code>margin: 0 auto;</code>
            </div>
            <div class="method">
              <h4>Absolute Centering</h4>
              <code>position: absolute;<br>top: 50%; left: 50%;<br>transform: translate(-50%, -50%);</code>
            </div>
            <div class="method">
              <h4>Flexbox Centering</h4>
              <code>display: flex;<br>justify-content: center;<br>align-items: center;</code>
            </div>
          </div>
        </div>
        
        <div class="example">
          <h3>2. Sticky Navigation</h3>
          <div class="sticky-nav-demo">
            <code>.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}</code>
          </div>
        </div>
        
        <div class="example">
          <h3>3. Modal Overlay</h3>
          <div class="modal-demo">
            <code>.modal {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.5);
}</code>
          </div>
        </div>
      </div>
      
      <div class="best-practices">
        <h2>🎯 Best Practices Summary</h2>
        <div class="practices-grid">
          <div class="practice">
            <h4>✅ Use Flexbox/Grid</h4>
            <p>For modern layouts instead of float</p>
          </div>
          <div class="practice">
            <h4>✅ Limit Z-index Values</h4>
            <p>Use 10, 20, 30 instead of random numbers</p>
          </div>
          <div class="practice">
            <h4>✅ Prefer Sticky over Fixed</h4>
            <p>When you need elements to stick during scroll</p>
          </div>
          <div class="practice">
            <h4>✅ Use Opacity for Animations</h4>
            <p>Instead of visibility for fade effects</p>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Layout Examples',
        code: `/* Modern Layout System with Display & Position */

/* 1. Navigation Bar with Sticky Positioning */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 2rem;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-item {
    display: inline-block;
}

.nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #333;
    background: #f5f5f5;
}

/* Dropdown Menu */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-radius: 8px;
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1001;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* 2. Hero Section with Absolute Positioning */
.hero {
    position: relative;
    height: 500px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    overflow: hidden;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
    width: 90%;
    max-width: 800px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 3. Card Layout with Display Properties */
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-image {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem;
}

.card-title {
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.card-text {
    display: block;
    flex: 1;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

/* 4. Modal with Fixed Positioning */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal {
    position: relative;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    transform: translateY(-20px);
    transition: transform 0.3s ease;
}

.modal-overlay.active .modal {
    transform: translateY(0);
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
}

/* 5. Tooltip with Absolute Positioning */
.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;
}

.tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #333;
}

.tooltip-container:hover .tooltip {
    opacity: 1;
    visibility: visible;
}

/* 6. Badge with Relative Positioning */
.badge {
    position: relative;
    display: inline-block;
}

.badge-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff4757;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px;
}

/* 7. Sidebar with Sticky Positioning */
.sidebar {
    position: sticky;
    top: 80px; /* Below navbar */
    height: calc(100vh - 80px);
    overflow-y: auto;
    padding: 1rem;
    background: #f8f9fa;
    border-right: 1px solid #e9ecef;
}

/* 8. Loading Overlay */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* 9. Responsive Navigation Toggle */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .nav-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: 999;
    }
    
    .nav-menu.active {
        transform: translateX(0);
    }
    
    .nav-item {
        display: block;
        margin: 1rem 0;
    }
}

/* 10. Image Gallery with Float (Legacy Example) */
.image-gallery-legacy {
    overflow: hidden; /* Clearfix */
}

.image-gallery-legacy img {
    float: left;
    width: calc(33.333% - 1rem);
    margin: 0.5rem;
    border-radius: 8px;
}

/* Clearfix for floated layouts */
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}

/* 11. Notification System */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 1rem;
    min-width: 300px;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    z-index: 10000;
}

.notification.show {
    transform: translateX(0);
}

/* 12. Progress Bar */
.progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #f0f0f0;
    z-index: 1001;
}

.progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #667eea;
    width: 0%;
    transition: width 0.3s ease;
}`,
        explanation: 'These examples demonstrate practical applications of display and position properties in real-world scenarios like navigation, modals, tooltips, and responsive layouts.'
      }
    ],
    resources: [
      { title: 'MDN Display Property', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display' },
      { title: 'MDN Position Property', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position' },
      { title: 'CSS Positioning Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning' }
    ],
    prerequisites: ['css-typography'],
    nextTopics: ['css-flexbox']
  },
  {
    id: 'css-flexbox',
    title: 'Flexbox Layout',
    icon: <Layout />,
    difficulty: 'intermediate',
    estimatedTime: 35,
    category: 'layout-design',
    order: 9,
    sections: [
      'Flex Container',
      'Flex Items',
      'Alignment & Justification',
      'Flex Direction',
      'Flex Wrap'
    ],
    content: `
      <h1>🎯 CSS Flexbox - The Modern Layout Savior!</h1>
      <p>Flexbox is a <strong>one-dimensional layout</strong> system that makes aligning and distributing space among items in a container much easier.</p>
      
      <div class="flexbox-intro">
        <div class="flexbox-benefits">
          <div class="benefit">
            <div class="benefit-icon">✨</div>
            <h3>Easy Alignment</h3>
            <p>Center elements with one line</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">📱</div>
            <h3>Responsive</h3>
            <p>Adapts to different screen sizes</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">⚡</div>
            <h3>Powerful</h3>
            <p>Handles complex layouts easily</p>
          </div>
        </div>
      </div>
      
      <h2>🎪 The Two Axes of Flexbox</h2>
      <div class="flex-axes">
        <div class="axis-card">
          <h3>Main Axis</h3>
          <div class="axis-visual main-axis">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
          </div>
          <p>Defined by <code>flex-direction</code></p>
          <p>Controls <strong>justify-content</strong></p>
        </div>
        
        <div class="axis-card">
          <h3>Cross Axis</h3>
          <div class="axis-visual cross-axis">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
          </div>
          <p>Perpendicular to main axis</p>
          <p>Controls <strong>align-items</strong></p>
        </div>
      </div>
      
      <h2>📦 Flex Container Properties</h2>
      <div class="container-properties">
        <div class="property-card">
          <h3>display: flex</h3>
          <code>display: flex;</code>
          <p>Turns element into flex container</p>
          <div class="demo-container">
            <div class="demo-flex">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>flex-direction</h3>
          <div class="direction-options">
            <div class="option">
              <code>row</code>
              <div class="direction-demo row">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="option">
              <code>column</code>
              <div class="direction-demo column">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="option">
              <code>row-reverse</code>
              <div class="direction-demo row-reverse">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="option">
              <code>column-reverse</code>
              <div class="direction-demo column-reverse">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>flex-wrap</h3>
          <div class="wrap-options">
            <div class="option">
              <code>nowrap</code>
              <p>All items on one line (default)</p>
            </div>
            <div class="option">
              <code>wrap</code>
              <p>Items wrap to multiple lines</p>
            </div>
            <div class="option">
              <code>wrap-reverse</code>
              <p>Items wrap in reverse</p>
            </div>
          </div>
          <div class="wrap-demo">
            <div class="wrap-container nowrap">
              <div class="item wide">Item 1</div>
              <div class="item wide">Item 2</div>
              <div class="item wide">Item 3</div>
            </div>
            <div class="wrap-container wrap">
              <div class="item wide">Item 1</div>
              <div class="item wide">Item 2</div>
              <div class="item wide">Item 3</div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>justify-content</h3>
          <p>Aligns items along <strong>main axis</strong></p>
          <div class="justify-options">
            <div class="justify-demo">
              <code>flex-start</code>
              <div class="justify-container flex-start">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="justify-demo">
              <code>center</code>
              <div class="justify-container center">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="justify-demo">
              <code>flex-end</code>
              <div class="justify-container flex-end">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="justify-demo">
              <code>space-between</code>
              <div class="justify-container space-between">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="justify-demo">
              <code>space-around</code>
              <div class="justify-container space-around">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="justify-demo">
              <code>space-evenly</code>
              <div class="justify-container space-evenly">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>align-items</h3>
          <p>Aligns items along <strong>cross axis</strong></p>
          <div class="align-options">
            <div class="align-demo">
              <code>stretch</code>
              <div class="align-container stretch">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="align-demo">
              <code>flex-start</code>
              <div class="align-container flex-start">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="align-demo">
              <code>center</code>
              <div class="align-container center">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="align-demo">
              <code>flex-end</code>
              <div class="align-container flex-end">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
              </div>
            </div>
            <div class="align-demo">
              <code>baseline</code>
              <div class="align-container baseline">
                <div class="item" style="font-size: 24px;">Big</div>
                <div class="item" style="font-size: 16px;">Medium</div>
                <div class="item" style="font-size: 12px;">Small</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>align-content</h3>
          <p>Aligns <strong>multiple lines</strong> along cross axis</p>
          <div class="align-content-demo">
            <div class="content-demo">
              <code>space-between</code>
              <div class="content-container space-between">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">5</div>
                <div class="item">6</div>
              </div>
            </div>
            <div class="content-demo">
              <code>center</code>
              <div class="content-container center">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">5</div>
                <div class="item">6</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="property-card">
          <h3>gap</h3>
          <code>gap: 20px;</code>
          <p>Space between flex items (modern!)</p>
          <div class="gap-demo">
            <div class="gap-container">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
              <div class="item">4</div>
            </div>
          </div>
          <div class="gap-variants">
            <code>gap: 10px;</code>
            <code>row-gap: 20px;</code>
            <code>column-gap: 30px;</code>
          </div>
        </div>
      </div>
      
      <h2>🎯 Flex Item Properties</h2>
      <div class="item-properties">
        <div class="item-property-card">
          <h3>order</h3>
          <code>order: 2;</code>
          <p>Controls display order (default: 0)</p>
          <div class="order-demo">
            <div class="order-container">
              <div class="item" style="order: 3">1 (order: 3)</div>
              <div class="item" style="order: 1">2 (order: 1)</div>
              <div class="item" style="order: 2">3 (order: 2)</div>
            </div>
          </div>
        </div>
        
        <div class="item-property-card">
          <h3>flex-grow</h3>
          <code>flex-grow: 1;</code>
          <p>Ability to grow (default: 0)</p>
          <div class="grow-demo">
            <div class="grow-container">
              <div class="item" style="flex-grow: 1">grow: 1</div>
              <div class="item" style="flex-grow: 2">grow: 2</div>
              <div class="item" style="flex-grow: 1">grow: 1</div>
            </div>
          </div>
        </div>
        
        <div class="item-property-card">
          <h3>flex-shrink</h3>
          <code>flex-shrink: 0;</code>
          <p>Ability to shrink (default: 1)</p>
          <div class="shrink-demo">
            <div class="shrink-container">
              <div class="item wide" style="flex-shrink: 1">shrink: 1</div>
              <div class="item wide" style="flex-shrink: 0">shrink: 0</div>
              <div class="item wide" style="flex-shrink: 1">shrink: 1</div>
            </div>
          </div>
        </div>
        
        <div class="item-property-card">
          <h3>flex-basis</h3>
          <code>flex-basis: 200px;</code>
          <p>Initial size before growing/shrinking</p>
          <div class="basis-demo">
            <div class="basis-container">
              <div class="item" style="flex-basis: 100px">100px</div>
              <div class="item" style="flex-basis: 200px">200px</div>
              <div class="item" style="flex-basis: 150px">150px</div>
            </div>
          </div>
        </div>
        
        <div class="item-property-card">
          <h3>flex (shorthand)</h3>
          <code>flex: 1 0 auto;</code>
          <div class="flex-shorthand">
            <div class="shorthand-breakdown">
              <div class="part">
                <code>flex-grow</code>
                <span>First number</span>
              </div>
              <div class="part">
                <code>flex-shrink</code>
                <span>Second number</span>
              </div>
              <div class="part">
                <code>flex-basis</code>
                <span>Third value</span>
              </div>
            </div>
            <div class="common-values">
              <code>flex: 1;</code> = <code>flex: 1 1 0;</code>
              <br>
              <code>flex: auto;</code> = <code>flex: 1 1 auto;</code>
              <br>
              <code>flex: none;</code> = <code>flex: 0 0 auto;</code>
            </div>
          </div>
        </div>
        
        <div class="item-property-card">
          <h3>align-self</h3>
          <code>align-self: center;</code>
          <p>Overrides align-items for single item</p>
          <div class="align-self-demo">
            <div class="self-container">
              <div class="item">normal</div>
              <div class="item" style="align-self: flex-start">start</div>
              <div class="item" style="align-self: center">center</div>
              <div class="item" style="align-self: flex-end">end</div>
              <div class="item">normal</div>
            </div>
          </div>
        </div>
      </div>
      
      <h2>🏗️ Practical Flexbox Patterns</h2>
      <div class="flexbox-patterns">
        <div class="pattern-card">
          <h3>1. Perfect Centering</h3>
          <code>.center {
  display: flex;
  justify-content: center;
  align-items: center;
}</code>
          <div class="pattern-demo center-demo">
            <div class="item">Centered!</div>
          </div>
        </div>
        
        <div class="pattern-card">
          <h3>2. Navigation Bar</h3>
          <code>.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code>
          <div class="pattern-demo nav-demo">
            <div class="logo">Logo</div>
            <div class="nav-items">
              <div class="nav-item">Home</div>
              <div class="nav-item">About</div>
              <div class="nav-item">Contact</div>
            </div>
          </div>
        </div>
        
        <div class="pattern-card">
          <h3>3. Card Layout</h3>
          <code>.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}</code>
          <div class="pattern-demo card-demo">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
          </div>
        </div>
        
        <div class="pattern-card">
          <h3>4. Holy Grail Layout</h3>
          <code>.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}</code>
          <div class="pattern-demo layout-demo">
            <div class="header">Header</div>
            <div class="main">Main Content</div>
            <div class="footer">Footer</div>
          </div>
        </div>
      </div>
      
      <h2>🎯 Flexbox vs Other Layout Methods</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Best For</th>
              <th>Dimensions</th>
              <th>Browser Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Flexbox</strong></td>
              <td>One-dimensional layouts</td>
              <td>1D (row OR column)</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>CSS Grid</td>
              <td>Two-dimensional layouts</td>
              <td>2D (rows AND columns)</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>Float</td>
              <td>Text wrapping around images</td>
              <td>1D</td>
              <td>Perfect</td>
            </tr>
            <tr>
              <td>Table</td>
              <td>Tabular data</td>
              <td>2D</td>
              <td>Perfect</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="flexbox-cheatsheet">
        <h2>📋 Flexbox Cheat Sheet</h2>
        <div class="cheatsheet-grid">
          <div class="cheat-item">
            <h4>Parent (Container)</h4>
            <code>display: flex;</code>
            <code>flex-direction: row;</code>
            <code>flex-wrap: wrap;</code>
            <code>justify-content: center;</code>
            <code>align-items: center;</code>
            <code>gap: 20px;</code>
          </div>
          <div class="cheat-item">
            <h4>Child (Items)</h4>
            <code>order: 1;</code>
            <code>flex: 1;</code>
            <code>flex-grow: 1;</code>
            <code>flex-shrink: 0;</code>
            <code>flex-basis: 200px;</code>
            <code>align-self: center;</code>
          </div>
        </div>
      </div>
      
      <div class="best-practices">
        <h2>💡 Best Practices</h2>
        <div class="practices">
          <div class="practice">
            <h4>✅ Use gap instead of margins</h4>
            <p>Modern browsers support it</p>
          </div>
          <div class="practice">
            <h4>✅ Combine with CSS Grid</h4>
            <p>Use Flexbox for components, Grid for pages</p>
          </div>
          <div class="practice">
            <h4>✅ Start mobile-first</h4>
            <p><code>flex-direction: column</code> on mobile</p>
          </div>
          <div class="practice">
            <h4>✅ Use flex: 1 for equal distribution</h4>
            <p>Simplest way to make items equal width</p>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Flexbox Examples',
        code: `/* Modern Flexbox Layout System */

/* 1. Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
}

.nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #333;
    background: #f5f5f5;
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    .nav-menu {
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
}

/* 2. Card Grid Layout */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, basis */
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card-image {
    height: 200px;
    object-fit: cover;
}

.card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.card-text {
    flex: 1;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

/* 3. Pricing Cards */
.pricing-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    padding: 3rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.pricing-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 16px;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.pricing-card.popular {
    border-color: #667eea;
    position: relative;
    transform: scale(1.05);
}

.pricing-card.popular::before {
    content: 'Most Popular';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #667eea;
    color: white;
    padding: 0.25rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.pricing-header {
    margin-bottom: 2rem;
}

.pricing-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
}

.pricing-price {
    font-size: 3rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 0.5rem;
}

.pricing-period {
    color: #666;
    font-size: 0.875rem;
}

.pricing-features {
    flex: 1;
    margin: 2rem 0;
    text-align: left;
}

.pricing-feature {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #666;
}

.pricing-feature::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #e9ecef;
    border-radius: 50%;
    margin-right: 1rem;
    font-size: 0.75rem;
    color: #667eea;
}

.pricing-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.pricing-button:hover {
    background: transparent;
    color: #667eea;
    border-color: #667eea;
}

/* 4. Dashboard Layout */
.dashboard {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px;
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    color: white;
    padding: 2rem 0;
}

.sidebar-header {
    padding: 0 1.5rem 2rem;
    border-bottom: 1px solid #333;
}

.sidebar-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    color: #999;
    text-decoration: none;
    transition: all 0.3s ease;
}

.menu-item:hover,
.menu-item.active {
    color: white;
    background: #333;
    border-left: 4px solid #667eea;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f8f9fa;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-area {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
}

/* 5. Form Layout */
.form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-row .form-group {
    flex: 1;
}

.form-label {
    font-weight: 600;
    color: #333;
}

.form-input {
    padding: 0.75rem 1rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn {
    flex: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #667eea;
    color: white;
}

.btn-primary:hover {
    background: #5a67d8;
}

.btn-secondary {
    background: #e9ecef;
    color: #333;
}

.btn-secondary:hover {
    background: #dee2e6;
}

/* 6. Stats Grid */
.stats-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 2rem 0;
}

.stat-card {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.stat-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3f2fd;
    border-radius: 12px;
    color: #2196f3;
    font-size: 1.5rem;
}

.stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}

.stat-label {
    color: #666;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.stat-change {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    margin-top: 0.5rem;
}

.stat-change.positive {
    color: #10b981;
}

.stat-change.negative {
    color: #ef4444;
}

/* 7. Media Object Pattern */
.media {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.media-image {
    flex: 0 0 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
}

.media-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.media-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.media-text {
    flex: 1;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.media-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: #999;
}

/* 8. Responsive Image Gallery */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.gallery-item {
    flex: 1 1 200px;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* 9. FAQ Accordion */
.faq-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
}

.faq-question::after {
    content: '+';
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.faq-item.active .faq-question::after {
    transform: rotate(45deg);
}

.faq-answer {
    padding: 0 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
    padding: 0 1.5rem 1.5rem;
    max-height: 500px;
}

/* 10. Flexbox Order Example */
.featured-products {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.product-card {
    flex: 1 1 300px;
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.product-card.featured {
    order: -1; /* Show featured product first */
    flex: 1 1 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

@media (min-width: 768px) {
    .product-card.featured {
        order: 0;
        flex: 2 1 600px;
    }
}`,
        explanation: 'These comprehensive examples show how Flexbox can be used to create modern, responsive layouts for various components like navigation, cards, dashboards, forms, and more.'
      }
    ],
    resources: [
      { title: 'Flexbox Froggy Game', url: 'https://flexboxfroggy.com/' },
      { title: 'CSS Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
      { title: 'MDN Flexbox Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox' }
    ],
    prerequisites: ['css-display-position'],
    nextTopics: ['css-grid']
  }
];

// Additional helper data
export const cssTopics = cssNotesData.map(note => ({
  id: note.id,
  title: note.title,
  icon: note.icon,
  sections: note.sections || []
}));

export const cssStats = {
  totalTopics: 28,
  completedTopics: 1,
  estimatedTime: 400,
  difficulty: 'beginner to advanced'
};