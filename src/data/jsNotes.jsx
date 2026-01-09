// frontend/src/data/jsNotes.jsx - COMPLETE 26 TOPICS WITH BEAUTIFUL CONTENT
import {
  BookOpen,
  Code,
  Filter,
  GitBranch,
  RefreshCw,
  FunctionSquare,
  Target,
  List,
  Database,
  Type,
  Hash,
  Calendar,
  Layout,
  Zap,
  Globe,
  FormInput,
  AlertTriangle,
  Cloud,
  Download,
  Cpu,
  Shield,
  Star,
  CheckCircle,
  HelpCircle,
  Settings,
  Terminal,
  Box,
  MousePointer,
  Lock,
  Play,
  Search,
  GitMerge,
  GitPullRequest,
  Layers,
  Wind,
  Sparkles,
  Server,
  FileCode,
  Brain,
  Rocket
} from 'lucide-react';

export const jsNotesData = [
  {
    id: 'js-introduction',
    title: 'Introduction to JavaScript',
    icon: <BookOpen />,
    difficulty: 'beginner',
    estimatedTime: 10,
    category: 'javascript',
    order: 1,
    sections: [
      'What is JavaScript?',
      'History & Evolution',
      'JavaScript vs HTML vs CSS',
      'JavaScript Engine',
      'How JavaScript Works?',
      'Runtime Environment'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">🌐</div>
          <h1>Introduction to JavaScript</h1>
          <p class="concept-tagline">The Language That Powers the Modern Web</p>
        </div>
        
        <div class="concept-3d">
          <div class="tech-comparison-3d">
            <div class="tech-card-3d html-card">
              <div class="tech-icon">📄</div>
              <h3>HTML</h3>
              <p><strong>Structure</strong><br>Defines page content</p>
            </div>
            <div class="tech-card-3d css-card">
              <div class="tech-icon">🎨</div>
              <h3>CSS</h3>
              <p><strong>Presentation</strong><br>Styles the content</p>
            </div>
            <div class="tech-card-3d js-card">
              <div class="tech-icon">⚡</div>
              <h3>JavaScript</h3>
              <p><strong>Behavior</strong><br>Adds interactivity</p>
            </div>
          </div>
        </div>
        
        <h2>✨ What is JavaScript?</h2>
        <p>JavaScript is a <strong>versatile, high-level programming language</strong> that makes web pages interactive. It's one of the three core technologies of the World Wide Web, alongside HTML and CSS.</p>
        
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h4>Client-side Scripting</h4>
            <p>Runs directly in the user's browser</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h4>Dynamic Typing</h4>
            <p>Variables can hold any type of data</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h4>Event-driven</h4>
            <p>Responds to user interactions</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌀</div>
            <h4>Asynchronous</h4>
            <p>Handles multiple operations concurrently</p>
          </div>
        </div>
        
        <h2>📜 History of JavaScript</h2>
        <div class="timeline-3d">
          <div class="timeline-item-3d" style="--delay: 0s">
            <div class="timeline-year">1995</div>
            <div class="timeline-content">
              <h4>Created by Brendan Eich</h4>
              <p>Developed at Netscape in just 10 days</p>
            </div>
          </div>
          <div class="timeline-item-3d" style="--delay: 0.2s">
            <div class="timeline-year">1997</div>
            <div class="timeline-content">
              <h4>ECMAScript 1</h4>
              <p>First standardized version</p>
            </div>
          </div>
          <div class="timeline-item-3d" style="--delay: 0.4s">
            <div class="timeline-year">2009</div>
            <div class="timeline-content">
              <h4>ES5 Released</h4>
              <p>Strict mode, JSON support</p>
            </div>
          </div>
          <div class="timeline-item-3d" style="--delay: 0.6s">
            <div class="timeline-year">2015</div>
            <div class="timeline-content">
              <h4>ES6/ES2015</h4>
              <p>Modern JavaScript with classes, promises</p>
            </div>
          </div>
          <div class="timeline-item-3d" style="--delay: 0.8s">
            <div class="timeline-year">Today</div>
            <div class="timeline-content">
              <h4>Continuous Evolution</h4>
              <p>Yearly updates with new features</p>
            </div>
          </div>
        </div>
        
        <h2>🚀 JavaScript Engines</h2>
        <div class="engine-comparison">
          <div class="engine-card v8">
            <div class="engine-logo">V8</div>
            <h4>Chrome / Edge / Node.js</h4>
            <p>Developed by Google</p>
            <div class="engine-stats">
              <span>⚡ Fast</span>
              <span>🎯 Optimized</span>
            </div>
          </div>
          <div class="engine-card spidermonkey">
            <div class="engine-logo">🕷️</div>
            <h4>Firefox</h4>
            <p>Developed by Mozilla</p>
            <div class="engine-stats">
              <span>🔧 Flexible</span>
              <span>🛡️ Secure</span>
            </div>
          </div>
          <div class="engine-card javascriptcore">
            <div class="engine-logo">🍎</div>
            <h4>Safari</h4>
            <p>Developed by Apple</p>
            <div class="engine-stats">
              <span>💻 Efficient</span>
              <span>🔋 Low Power</span>
            </div>
          </div>
        </div>
        
        <h2>⚙️ How JavaScript Works?</h2>
        <div class="process-flow-3d">
          <div class="flow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Code Loading</h4>
              <p>Browser loads JavaScript file</p>
            </div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Parsing</h4>
              <p>Creates Abstract Syntax Tree (AST)</p>
            </div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Compilation</h4>
              <p>JIT compiler optimizes bytecode</p>
            </div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Execution</h4>
              <p>Runs in JavaScript runtime</p>
            </div>
          </div>
        </div>
        
        <div class="runtime-architecture">
          <h3>📊 JavaScript Runtime Architecture</h3>
          <div class="architecture-grid">
            <div class="arch-component">
              <div class="arch-icon">📚</div>
              <h5>Call Stack</h5>
              <p>Tracks function calls</p>
            </div>
            <div class="arch-component">
              <div class="arch-icon">💾</div>
              <h5>Heap</h5>
              <p>Memory allocation</p>
            </div>
            <div class="arch-component">
              <div class="arch-icon">⏰</div>
              <h5>Event Loop</h5>
              <p>Manages execution</p>
            </div>
            <div class="arch-component">
              <div class="arch-icon">📨</div>
              <h5>Callback Queue</h5>
              <p>Stores async callbacks</p>
            </div>
            <div class="arch-component">
              <div class="arch-icon">🌐</div>
              <h5>Web APIs</h5>
              <p>Browser-provided APIs</p>
            </div>
          </div>
        </div>
        
        <div class="student-tip js-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Pro Tip for Beginners</h4>
            <p>JavaScript is the only programming language that runs natively in web browsers. Start by practicing in the browser console - it's the fastest way to learn!</p>
            <div class="tip-action">
              <button class="try-console">Try Console Now</button>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Your First JavaScript Program',
        code: `// Welcome to JavaScript!
console.log("🚀 Hello, World!");

// Display alert message
alert("Welcome to JavaScript Journey!");

// Write to HTML page
document.write("<h1 style='color: #f59e0b'>Let's Learn JavaScript!</h1>");

// Update element content
document.getElementById("demo").innerHTML = 
  "<span style='color: #10b981'>✅ JavaScript is Working!</span>";

// Basic calculations
const pi = 3.14159;
let radius = 7;
let area = pi * radius * radius;

console.log(\`📐 Circle Area: \${area.toFixed(2)}\`);
console.log("🎯 Type of pi:", typeof pi);
console.log("🎯 Type of radius:", typeof radius);

// String operations
const greeting = "Hello" + " " + "Developer!";
console.log("👋 " + greeting);

// Using template literals
const userName = "Alex";
console.log(\`👤 Welcome back, \${userName}!\`);

// First function
function greetUser(name) {
    return \`🌟 Hello, \${name}! Ready to code?\`;
}

// Arrow function
const calculateSum = (a, b) => a + b;

console.log(greetUser("Developer"));
console.log(\`➕ Sum: \${calculateSum(10, 20)}\`);`,
        explanation: 'This is your first step into JavaScript! These examples show basic output methods, variables, and simple functions.',
        preview: '<div class="preview-demo"><h2 style="color: #f59e0b">JavaScript Output Preview</h2><p id="demo">JavaScript content will appear here</p><button onclick="alert(\'Button clicked!\')">Try Me!</button></div>'
      }
    ],
    resources: [
      { title: 'MDN JavaScript Guide - Complete Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { title: 'JavaScript.info - Modern Tutorial', url: 'https://javascript.info/' },
      { title: 'Eloquent JavaScript - Free Book', url: 'https://eloquentjavascript.net/' },
      { title: 'ECMAScript Specifications', url: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm' }
    ],
    prerequisites: [],
    nextTopics: ['js-basics']
  },
  {
    id: 'js-basics',
    title: 'JavaScript Basics',
    icon: <Code />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'javascript',
    order: 2,
    sections: [
      'JavaScript Syntax Rules',
      'Comments',
      'Variables (var, let, const)',
      'Data Types',
      'Type Conversion',
      'typeof Operator',
      'Best Practices'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">🔤</div>
          <h1>JavaScript Basics</h1>
          <p class="concept-tagline">Mastering the Building Blocks of JavaScript</p>
        </div>
        
        <div class="syntax-3d-demo">
          <div class="code-block-3d">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="code-title">syntax.js</span>
            </div>
            <pre class="code-content">
<span class="keyword">const</span> <span class="variable">message</span> = <span class="string">"Hello JavaScript!"</span>;
<span class="keyword">let</span> <span class="variable">count</span> = <span class="number">42</span>;
<span class="keyword">var</span> <span class="variable">oldWay</span> = <span class="string">"Avoid this"</span>;

<span class="keyword">function</span> <span class="function">greet</span>(<span class="parameter">name</span>) {
    <span class="keyword">return</span> <span class="string">\`Hello, \${name}!\`</span>;
}</pre>
          </div>
        </div>
        
        <h2>📝 JavaScript Syntax</h2>
        <p>JavaScript syntax is the set of rules that define correctly structured JavaScript code.</p>
        
        <div class="syntax-rules">
          <div class="rule-card">
            <div class="rule-icon">🔤</div>
            <h4>Case Sensitive</h4>
            <code>myVariable ≠ MyVariable ≠ MYVARIABLE</code>
          </div>
          <div class="rule-card">
            <div class="rule-icon">💬</div>
            <h4>Semicolons</h4>
            <code>Optional but recommended</code>
          </div>
          <div class="rule-card">
            <div class="rule-icon">{}</div>
            <h4>Code Blocks</h4>
            <code>Use curly braces { }</code>
          </div>
          <div class="rule-card">
            <div class="rule-icon">📏</div>
            <h4>Whitespace</h4>
            <code>Ignored by JavaScript</code>
          </div>
        </div>
        
        <h2>💬 Comments in JavaScript</h2>
        <div class="comments-demo">
          <div class="comment-types">
            <div class="comment-type">
              <h4>Single-line Comment</h4>
              <pre><code class="comment">// This is a single-line comment
let price = 100; // Comment after code</code></pre>
            </div>
            <div class="comment-type">
              <h4>Multi-line Comment</h4>
              <pre><code class="comment">/*
  This is a multi-line
  comment that can span
  multiple lines
*/</code></pre>
            </div>
            <div class="comment-type">
              <h4>JSDoc Comment</h4>
              <pre><code class="comment">/**
 * Calculates the area of a circle
 * @param {number} radius - Circle radius
 * @returns {number} Area
 */
function calculateArea(radius) {
    return Math.PI * radius * radius;
}</code></pre>
            </div>
          </div>
        </div>
        
        <h2>📦 Variables: var vs let vs const</h2>
        <div class="variables-comparison-3d">
          <div class="var-card const-card">
            <div class="var-icon">🔒</div>
            <h3>const</h3>
            <div class="var-features">
              <div class="feature">✅ Block-scoped</div>
              <div class="feature">✅ Cannot be reassigned</div>
              <div class="feature">✅ Must be initialized</div>
              <div class="feature">✅ Modern standard</div>
            </div>
            <div class="use-case">
              <strong>Use for:</strong> Constants, references
            </div>
          </div>
          
          <div class="var-card let-card">
            <div class="var-icon">🔄</div>
            <h3>let</h3>
            <div class="var-features">
              <div class="feature">✅ Block-scoped</div>
              <div class="feature">✅ Can be reassigned</div>
              <div class="feature">✅ Cannot be redeclared</div>
              <div class="feature">✅ Modern standard</div>
            </div>
            <div class="use-case">
              <strong>Use for:</strong> Variables that change
            </div>
          </div>
          
          <div class="var-card var-card-old">
            <div class="var-icon">⚠️</div>
            <h3>var</h3>
            <div class="var-features">
              <div class="feature">❌ Function-scoped</div>
              <div class="feature">❌ Can be redeclared</div>
              <div class="feature">❌ Hoisting issues</div>
              <div class="feature">❌ Avoid in modern JS</div>
            </div>
            <div class="use-case">
              <strong>Avoid in:</strong> Modern JavaScript
            </div>
          </div>
        </div>
        
        <h2>🎨 Data Types in JavaScript</h2>
        <div class="data-types-visualization">
          <div class="data-types-section">
            <h3>Primitive Types (7 Types)</h3>
            <div class="primitive-types-grid">
              <div class="type-card">
                <div class="type-icon string">📝</div>
                <h4>String</h4>
                <code>"text", 'text', \`template\`</code>
              </div>
              <div class="type-card">
                <div class="type-icon number">🔢</div>
                <h4>Number</h4>
                <code>42, 3.14, NaN, Infinity</code>
              </div>
              <div class="type-card">
                <div class="type-icon boolean">✅</div>
                <h4>Boolean</h4>
                <code>true, false</code>
              </div>
              <div class="type-card">
                <div class="type-icon undefined">❓</div>
                <h4>Undefined</h4>
                <code>let x; // x is undefined</code>
              </div>
              <div class="type-card">
                <div class="type-icon null">∅</div>
                <h4>Null</h4>
                <code>let y = null;</code>
              </div>
              <div class="type-card">
                <div class="type-icon symbol">🔣</div>
                <h4>Symbol</h4>
                <code>Symbol('id')</code>
              </div>
              <div class="type-card">
                <div class="type-icon bigint">💎</div>
                <h4>BigInt</h4>
                <code>12345678901234567890n</code>
              </div>
            </div>
          </div>
          
          <div class="data-types-section">
            <h3>Reference Types</h3>
            <div class="reference-types-grid">
              <div class="type-card">
                <div class="type-icon object">📦</div>
                <h4>Object</h4>
                <code>{ key: 'value' }</code>
              </div>
              <div class="type-card">
                <div class="type-icon array">📋</div>
                <h4>Array</h4>
                <code>[1, 2, 3]</code>
              </div>
              <div class="type-card">
                <div class="type-icon function">⚙️</div>
                <h4>Function</h4>
                <code>function() {}</code>
              </div>
              <div class="type-card">
                <div class="type-icon date">📅</div>
                <h4>Date</h4>
                <code>new Date()</code>
              </div>
            </div>
          </div>
        </div>
        
        <h2>🔄 Type Conversion & Coercion</h2>
        <div class="type-conversion-demo">
          <div class="conversion-section">
            <h3>Explicit Conversion (Manual)</h3>
            <div class="conversion-examples">
              <pre><code>// String to Number
Number("123")        → 123
Number("12.34")      → 12.34
Number("123abc")     → NaN
Number("")           → 0

// Number to String
String(123)          → "123"
String(true)         → "true"
String(null)         → "null"

// Boolean conversion
Boolean(1)           → true
Boolean(0)           → false
Boolean("hello")     → true
Boolean("")          → false
Boolean([])          → true
Boolean(null)        → false</code></pre>
            </div>
          </div>
          
          <div class="conversion-section">
            <h3>Implicit Conversion (Automatic)</h3>
            <div class="conversion-examples">
              <pre><code>// String concatenation
"5" + 3              → "53"
"Hello" + 123        → "Hello123"

// Numeric operations
"5" - 3              → 2
"5" * "2"            → 10
"hello" * 2          → NaN

// Comparison
5 == "5"             → true
5 === "5"            → false

// Logical operators
"hello" && "world"   → "world"
"" || "default"      → "default"</code></pre>
            </div>
          </div>
        </div>
        
        <h2>🔍 typeof Operator</h2>
        <div class="typeof-demo">
          <div class="typeof-grid">
            <div class="typeof-item">
              <code>typeof "hello"</code>
              <span class="result">"string"</span>
            </div>
            <div class="typeof-item">
              <code>typeof 42</code>
              <span class="result">"number"</span>
            </div>
            <div class="typeof-item">
              <code>typeof true</code>
              <span class="result">"boolean"</span>
            </div>
            <div class="typeof-item">
              <code>typeof undefined</code>
              <span class="result">"undefined"</span>
            </div>
            <div class="typeof-item special">
              <code>typeof null</code>
              <span class="result">"object"</span>
              <span class="note">(historical bug)</span>
            </div>
            <div class="typeof-item">
              <code>typeof []</code>
              <span class="result">"object"</span>
            </div>
            <div class="typeof-item">
              <code>typeof {}</code>
              <span class="result">"object"</span>
            </div>
            <div class="typeof-item">
              <code>typeof function(){}</code>
              <span class="result">"function"</span>
            </div>
          </div>
          <div class="typeof-tip">
            <strong>Tip:</strong> Use <code>Array.isArray()</code> to check for arrays instead of <code>typeof</code>
          </div>
        </div>
        
        <div class="best-practices">
          <h3>🎯 Best Practices</h3>
          <div class="practice-grid">
            <div class="practice-card">
              <div class="practice-icon">✅</div>
              <h4>Use const by default</h4>
              <p>Only use let when reassignment is needed</p>
            </div>
            <div class="practice-card">
              <div class="practice-icon">✅</div>
              <h4>Avoid var</h4>
              <p>Use let/const in modern JavaScript</p>
            </div>
            <div class="practice-card">
              <div class="practice-icon">✅</div>
              <h4>Explicit over implicit</h4>
              <p>Prefer explicit type conversion</p>
            </div>
            <div class="practice-card">
              <div class="practice-icon">✅</div>
              <h4>Use === instead of ==</h4>
              <p>Strict equality prevents type coercion bugs</p>
            </div>
          </div>
        </div>
        
        <div class="interactive-demo">
          <h3>🎮 Interactive Practice</h3>
          <div class="demo-container">
            <div class="demo-input">
              <h4>Try typeof Operator:</h4>
              <input type="text" id="typeInput" placeholder='Try: "hello", 42, true, []' />
              <button onclick="checkType()">Check Type</button>
            </div>
            <div class="demo-output">
              <h4>Result:</h4>
              <div id="typeResult" class="result-box">Enter value to see its type</div>
            </div>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Basics Example',
        code: `// 🎯 VARIABLE DECLARATIONS
const PI = 3.14159;                    // Constant value
let radius = 5;                        // Can be changed
var area;                              // Legacy (avoid)

// 📐 CALCULATE CIRCLE AREA
area = PI * radius * radius;
console.log(\`📐 Circle with radius \${radius} has area: \${area.toFixed(2)}\`);

// 🔍 TYPE CHECKING
console.log("🔍 Type checking:");
console.log("  PI:", typeof PI);               // "number"
console.log("  radius:", typeof radius);       // "number"
console.log("  area:", typeof area);           // "number"

// 🔄 TYPE CONVERSION EXAMPLES
console.log("\\n🔄 Type Conversion:");
let userInput = "25";
console.log("  Original:", userInput, "Type:", typeof userInput);

// Explicit conversion
let age = Number(userInput);
console.log("  Converted to number:", age, "Type:", typeof age);

// Implicit conversion
let greeting = "You are " + age + " years old";
console.log("  String concatenation:", greeting);

// ✅ BOOLEAN CONVERSION
console.log("\\n✅ Truthy & Falsy Values:");

// Falsy values
let falsyValues = [false, 0, "", null, undefined, NaN];
console.log("  Falsy values (all false):");
falsyValues.forEach(value => {
    console.log(\`    Boolean(\${JSON.stringify(value)}) = \${Boolean(value)}\`);
});

// Truthy values
let truthyValues = [true, 1, "hello", [], {}, function(){}, -1, "0"];
console.log("  \\n  Truthy values (all true):");
truthyValues.forEach(value => {
    console.log(\`    Boolean(\${JSON.stringify(value)}) = \${Boolean(value)}\`);
});

// 🛠️ PRACTICAL TYPE CHECKING FUNCTION
console.log("\\n🛠️ Advanced Type Checking:");

function checkType(value) {
    let type = typeof value;
    
    if (type === "object") {
        if (value === null) {
            return "null";
        } else if (Array.isArray(value)) {
            return "array";
        } else if (value instanceof Date) {
            return "date";
        } else if (value instanceof RegExp) {
            return "regexp";
        }
    }
    return type;
}

// Test the function
let testValues = [
    "Hello World",
    42,
    true,
    null,
    undefined,
    [1, 2, 3],
    { name: "John" },
    function() {},
    new Date(),
    /pattern/,
    Symbol('id'),
    123n
];

testValues.forEach(value => {
    console.log(\`    \${String(value).padEnd(20)} → \${checkType(value)}\`);
});

// 📝 REAL-WORLD EXAMPLE: FORM VALIDATION
console.log("\\n📝 Form Validation Example:");

function validateFormData(formData) {
    let errors = [];
    
    // Check name (required, non-empty string)
    if (!formData.name || formData.name.trim() === "") {
        errors.push("❌ Name is required");
    }
    
    // Check age (valid number between 1-120)
    let age = Number(formData.age);
    if (isNaN(age) || age <= 0 || age > 120) {
        errors.push("❌ Age must be a valid number between 1 and 120");
    }
    
    // Check email (valid format if provided)
    if (formData.email) {
        let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.push("❌ Please enter a valid email address");
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors,
        message: errors.length === 0 ? "✅ All fields are valid!" : "⚠️ Please fix the errors above"
    };
}

// Test form validation
let testFormData = {
    name: "John Doe",
    age: "25",
    email: "john@example.com"
};

console.log("\\nTesting form validation:");
let validation = validateFormData(testFormData);
console.log("  Valid:", validation.isValid);
console.log("  Errors:", validation.errors.length);
if (validation.errors.length > 0) {
    validation.errors.forEach(error => console.log("    ", error));
}
console.log("  Message:", validation.message);

// 🎨 TYPE CONVERSION PRACTICAL USE
console.log("\\n🎨 Practical Type Conversion:");

// Safe number conversion with default
function safeNumber(value, defaultValue = 0) {
    let num = Number(value);
    return isNaN(num) ? defaultValue : num;
}

// Parse user input safely
let userValues = ["42", "3.14", "not a number", "", "100"];
console.log("  Safe number parsing:");
userValues.forEach(value => {
    console.log(\`    '\${value}' → \${safeNumber(value, 0)}\`);
});

// Format numbers for display
let prices = [19.99, 42.5, 100, 2999.99];
console.log("\\n  Formatted prices:");
prices.forEach(price => {
    console.log(\`    $\${price.toFixed(2)}\`);
});`,
        explanation: 'This comprehensive example covers all JavaScript basics: variable declarations, type checking, type conversion, and practical applications like form validation.',
        preview: '<div class="preview-demo"><h3 style="color: #10b981">Type Checking Demo</h3><p id="typeOutput">Enter values in console to see types</p><div class="result-box"><p>Open browser console (F12) to see detailed output</p></div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Variables and Data Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types' },
      { title: 'JavaScript.info: Variables', url: 'https://javascript.info/variables' },
      { title: 'Type Conversion Guide', url: 'https://javascript.info/type-conversions' },
      { title: 'typeof vs instanceof', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof' }
    ],
    prerequisites: ['js-introduction'],
    nextTopics: ['js-operators']
  },
  {
    id: 'js-operators',
    title: 'Operators',
    icon: <Hash />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'javascript',
    order: 3,
    sections: [
      'Arithmetic Operators',
      'Assignment Operators',
      'Comparison Operators',
      'Logical Operators',
      'Ternary Operator',
      'Operator Precedence'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">➕</div>
          <h1>JavaScript Operators</h1>
          <p class="concept-tagline">Master the Tools for Operations and Comparisons</p>
        </div>
        
        <div class="operator-3d-visual">
          <div class="operator-categories">
            <div class="op-category arithmetic">
              <div class="op-icon">🧮</div>
              <h3>Arithmetic</h3>
              <p>Math operations</p>
            </div>
            <div class="op-category comparison">
              <div class="op-icon">⚖️</div>
              <h3>Comparison</h3>
              <p>Compare values</p>
            </div>
            <div class="op-category logical">
              <div class="op-icon">🔀</div>
              <h3>Logical</h3>
              <p>Boolean logic</p>
            </div>
            <div class="op-category assignment">
              <div class="op-icon">📝</div>
              <h3>Assignment</h3>
              <p>Assign values</p>
            </div>
          </div>
        </div>
        
        <h2>🧮 Arithmetic Operators</h2>
        <div class="arithmetic-operators">
          <div class="operator-grid">
            <div class="operator-card">
              <code class="operator-symbol">+</code>
              <h4>Addition</h4>
              <p><code>5 + 3 → 8</code></p>
              <p class="operator-note">Also concatenates strings</p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">-</code>
              <h4>Subtraction</h4>
              <p><code>10 - 4 → 6</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">*</code>
              <h4>Multiplication</h4>
              <p><code>3 * 4 → 12</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">/</code>
              <h4>Division</h4>
              <p><code>15 / 3 → 5</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">%</code>
              <h4>Modulus</h4>
              <p><code>10 % 3 → 1</code></p>
              <p class="operator-note">Remainder after division</p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">**</code>
              <h4>Exponentiation</h4>
              <p><code>2 ** 3 → 8</code></p>
              <p class="operator-note">ES2016+</p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">++</code>
              <h4>Increment</h4>
              <p><code>let x = 5; x++ → 6</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">--</code>
              <h4>Decrement</h4>
              <p><code>let x = 5; x-- → 4</code></p>
            </div>
          </div>
        </div>
        
        <h2>📝 Assignment Operators</h2>
        <div class="assignment-operators">
          <div class="operator-grid">
            <div class="operator-card">
              <code class="operator-symbol">=</code>
              <h4>Simple Assignment</h4>
              <p><code>let x = 10</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">+=</code>
              <h4>Add & Assign</h4>
              <p><code>x += 5  // x = x + 5</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">-=</code>
              <h4>Subtract & Assign</h4>
              <p><code>x -= 3  // x = x - 3</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">*=</code>
              <h4>Multiply & Assign</h4>
              <p><code>x *= 2  // x = x * 2</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">/=</code>
              <h4>Divide & Assign</h4>
              <p><code>x /= 4  // x = x / 4</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">%=</code>
              <h4>Modulus & Assign</h4>
              <p><code>x %= 3  // x = x % 3</code></p>
            </div>
            <div class="operator-card">
              <code class="operator-symbol">**=</code>
              <h4>Power & Assign</h4>
              <p><code>x **= 2 // x = x ** 2</code></p>
            </div>
          </div>
        </div>
        
        <h2>⚖️ Comparison Operators</h2>
        <div class="comparison-table-3d">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Result</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>==</code></td>
                <td>Equal to</td>
                <td><code>5 == "5"</code></td>
                <td class="true-result">true</td>
                <td>Loose equality (with type conversion)</td>
              </tr>
              <tr>
                <td><code>===</code></td>
                <td>Strict equal</td>
                <td><code>5 === "5"</code></td>
                <td class="false-result">false</td>
                <td>Strict equality (no type conversion)</td>
              </tr>
              <tr>
                <td><code>!=</code></td>
                <td>Not equal</td>
                <td><code>5 != "6"</code></td>
                <td class="true-result">true</td>
                <td>Loose inequality</td>
              </tr>
              <tr>
                <td><code>!==</code></td>
                <td>Strict not equal</td>
                <td><code>5 !== "5"</code></td>
                <td class="true-result">true</td>
                <td>Strict inequality</td>
              </tr>
              <tr>
                <td><code>></code></td>
                <td>Greater than</td>
                <td><code>10 > 5</code></td>
                <td class="true-result">true</td>
                <td>Checks if left is greater</td>
              </tr>
              <tr>
                <td><code><</code></td>
                <td>Less than</td>
                <td><code>3 < 7</code></td>
                <td class="true-result">true</td>
                <td>Checks if left is less</td>
              </tr>
              <tr>
                <td><code>>=</code></td>
                <td>Greater or equal</td>
                <td><code>5 >= 5</code></td>
                <td class="true-result">true</td>
                <td>Checks if left is greater or equal</td>
              </tr>
              <tr>
                <td><code><=</code></td>
                <td>Less or equal</td>
                <td><code>4 <= 4</code></td>
                <td class="true-result">true</td>
                <td>Checks if left is less or equal</td>
              </tr>
            </tbody>
          </table>
          <div class="comparison-tip">
            <strong>💡 Always use <code>===</code> and <code>!==</code> for predictable results!</strong>
          </div>
        </div>
        
        <h2>🔀 Logical Operators</h2>
        <div class="logical-operators-demo">
          <div class="logical-grid">
            <div class="logical-card">
              <div class="logical-symbol">&&</div>
              <h4>Logical AND</h4>
              <p>Returns true if both operands are true</p>
              <div class="truth-table">
                <code>true && true → true</code><br>
                <code>true && false → false</code><br>
                <code>false && true → false</code><br>
                <code>false && false → false</code>
              </div>
            </div>
            <div class="logical-card">
              <div class="logical-symbol">||</div>
              <h4>Logical OR</h4>
              <p>Returns true if at least one operand is true</p>
              <div class="truth-table">
                <code>true || true → true</code><br>
                <code>true || false → true</code><br>
                <code>false || true → true</code><br>
                <code>false || false → false</code>
              </div>
            </div>
            <div class="logical-card">
              <div class="logical-symbol">!</div>
              <h4>Logical NOT</h4>
              <p>Returns the opposite boolean value</p>
              <div class="truth-table">
                <code>!true → false</code><br>
                <code>!false → true</code><br>
                <code>!!value → Boolean(value)</code>
              </div>
            </div>
          </div>
        </div>
        
        <h2>❓ Ternary Operator</h2>
        <div class="ternary-demo">
          <div class="ternary-syntax">
            <div class="syntax-visual">
              <div class="condition-part">condition</div>
              <div class="arrow">?</div>
              <div class="true-part">value if true</div>
              <div class="arrow">:</div>
              <div class="false-part">value if false</div>
            </div>
            <div class="ternary-examples">
              <h4>Examples:</h4>
              <pre><code>// Basic usage
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
// status = "Adult"

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
// grade = "B"

// Function return
function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}</code></pre>
            </div>
          </div>
        </div>
        
        <h2>📊 Operator Precedence</h2>
        <div class="precedence-chart">
          <div class="precedence-level high">
            <div class="level-label">Highest Precedence</div>
            <div class="operators">
              <code>()</code> <code>[]</code> <code>.</code> <code>new</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Unary Operators</div>
            <div class="operators">
              <code>!</code> <code>~</code> <code>++</code> <code>--</code> <code>typeof</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Multiplicative</div>
            <div class="operators">
              <code>*</code> <code>/</code> <code>%</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Additive</div>
            <div class="operators">
              <code>+</code> <code>-</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Relational</div>
            <div class="operators">
              <code><</code> <code>></code> <code><=</code> <code>>=</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Equality</div>
            <div class="operators">
              <code>==</code> <code>!=</code> <code>===</code> <code>!==</code>
            </div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Logical AND</div>
            <div class="operators"><code>&&</code></div>
          </div>
          <div class="precedence-level">
            <div class="level-label">Logical OR</div>
            <div class="operators"><code>||</code></div>
          </div>
          <div class="precedence-level low">
            <div class="level-label">Assignment</div>
            <div class="operators">
              <code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code>
            </div>
          </div>
        </div>
        
        <div class="operator-practice">
          <h3>🎮 Operator Practice</h3>
          <div class="practice-problems">
            <div class="problem">
              <h4>Problem 1: Calculate Expression</h4>
              <p>What is the value of: <code>3 + 4 * 2</code> ?</p>
              <button class="show-solution" data-problem="1">Show Solution</button>
              <div class="solution" id="solution1">
                <p>Answer: <code>11</code></p>
                <p>Explanation: Multiplication has higher precedence than addition:</p>
                <pre><code>3 + 4 * 2
3 + 8
11</code></pre>
              </div>
            </div>
            
            <div class="problem">
              <h4>Problem 2: Logical Expression</h4>
              <p>What is the value of: <code>true || false && false</code> ?</p>
              <button class="show-solution" data-problem="2">Show Solution</button>
              <div class="solution" id="solution2">
                <p>Answer: <code>true</code></p>
                <p>Explanation: AND (&&) has higher precedence than OR (||):</p>
                <pre><code>true || false && false
true || (false && false)
true || false
true</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div class="student-tip js-tip">
          <div class="tip-icon">🎯</div>
          <div class="tip-content">
            <h4>Operator Best Practices</h4>
            <ul>
              <li>Always use parentheses for complex expressions to improve readability</li>
              <li>Prefer <code>===</code> and <code>!==</code> over <code>==</code> and <code>!=</code></li>
              <li>Use ternary operator for simple conditional assignments</li>
              <li>Remember operator precedence or use parentheses explicitly</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Comprehensive Operators Example',
        code: `// 🧮 ARITHMETIC OPERATORS
console.log("=== ARITHMETIC OPERATORS ===");
console.log(\`5 + 3 = \${5 + 3}\`);           // 8
console.log(\`10 - 4 = \${10 - 4}\`);         // 6
console.log(\`3 * 4 = \${3 * 4}\`);           // 12
console.log(\`15 / 3 = \${15 / 3}\`);         // 5
console.log(\`10 % 3 = \${10 % 3}\`);         // 1 (remainder)
console.log(\`2 ** 3 = \${2 ** 3}\`);         // 8 (exponentiation)

// String concatenation
console.log(\`\\n"Hello" + " " + "World" = "\${"Hello" + " " + "World"}"\`);

// Increment/Decrement
let count = 5;
console.log(\`\\ncount = \${count}\`);
console.log(\`count++ = \${count++}\`);       // Returns 5, then sets count to 6
console.log(\`++count = \${++count}\`);       // Sets count to 7, then returns 7
console.log(\`count-- = \${count--}\`);       // Returns 7, then sets count to 6
console.log(\`--count = \${--count}\`);       // Sets count to 5, then returns 5

// 📝 ASSIGNMENT OPERATORS
console.log("\\n\\n=== ASSIGNMENT OPERATORS ===");
let x = 10;
console.log(\`Initial x = \${x}\`);

x += 5;  // x = x + 5
console.log(\`x += 5 → \${x}\`);              // 15

x -= 3;  // x = x - 3
console.log(\`x -= 3 → \${x}\`);              // 12

x *= 2;  // x = x * 2
console.log(\`x *= 2 → \${x}\`);              // 24

x /= 4;  // x = x / 4
console.log(\`x /= 4 → \${x}\`);              // 6

x %= 4;  // x = x % 4
console.log(\`x %= 4 → \${x}\`);              // 2

x **= 3; // x = x ** 3
console.log(\`x **= 3 → \${x}\`);             // 8

// ⚖️ COMPARISON OPERATORS
console.log("\\n\\n=== COMPARISON OPERATORS ===");
console.log("\\n📊 Loose Equality (==):");
console.log(\`5 == 5 → \${5 == 5}\`);           // true
console.log(\`5 == "5" → \${5 == "5"}\`);       // true (type conversion!)
console.log(\`0 == false → \${0 == false}\`);   // true
console.log(\`"" == false → \${"" == false}\`); // true

console.log("\\n📊 Strict Equality (===):");
console.log(\`5 === 5 → \${5 === 5}\`);         // true
console.log(\`5 === "5" → \${5 === "5"}\`);     // false (no type conversion!)
console.log(\`0 === false → \${0 === false}\`); // false
console.log(\`"" === false → \${"" === false}\`); // false

console.log("\\n📊 Other Comparisons:");
console.log(\`10 > 5 → \${10 > 5}\`);          // true
console.log(\`3 < 7 → \${3 < 7}\`);            // true
console.log(\`5 >= 5 → \${5 >= 5}\`);          // true
console.log(\`4 <= 4 → \${4 <= 4}\`);          // true

// 🔀 LOGICAL OPERATORS
console.log("\\n\\n=== LOGICAL OPERATORS ===");
console.log("\\n🔹 AND Operator (&&):");
console.log(\`true && true → \${true && true}\`);   // true
console.log(\`true && false → \${true && false}\`); // false
console.log(\`false && true → \${false && true}\`); // false

console.log("\\n🔹 OR Operator (||):");
console.log(\`true || true → \${true || true}\`);   // true
console.log(\`true || false → \${true || false}\`); // true
console.log(\`false || false → \${false || false}\`); // false

console.log("\\n🔹 NOT Operator (!):");
console.log(\`!true → \${!true}\`);               // false
console.log(\`!false → \${!false}\`);             // true
console.log(\`!!"hello" → \${!!"hello"}\`);       // true (double NOT for boolean conversion)

// Practical logical operations
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;
console.log(\`\\n🚗 Can drive? \${canDrive} (age: \${age}, hasLicense: \${hasLicense})\`);

let hasCash = false;
let hasCard = true;
let canPay = hasCash || hasCard;
console.log(\`💳 Can pay? \${canPay} (cash: \${hasCash}, card: \${hasCard})\`);

// ❓ TERNARY OPERATOR
console.log("\\n\\n=== TERNARY OPERATOR ===");
let userAge = 20;
let accessLevel = userAge >= 18 ? "Full Access" : "Restricted";
console.log(\`👤 Age: \${userAge}, Access: \${accessLevel}\`);

// Multiple conditions with ternary
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(\`📚 Score: \${score}, Grade: \${grade}\`);

// 📊 OPERATOR PRECEDENCE
console.log("\\n\\n=== OPERATOR PRECEDENCE ===");
console.log("Without parentheses:");
let result1 = 3 + 4 * 2;
console.log(\`3 + 4 * 2 = \${result1}\`);  // 11 (not 14!)

console.log("\\nWith parentheses:");
let result2 = (3 + 4) * 2;
console.log(\`(3 + 4) * 2 = \${result2}\`); // 14

console.log("\\nLogical operator precedence:");
let logicalResult = true || false && false;
console.log(\`true || false && false = \${logicalResult}\`);  // true

// Explanation
console.log("\\n📖 Explanation:");
console.log("Multiplication (*) has higher precedence than addition (+)");
console.log("AND (&&) has higher precedence than OR (||)");
console.log("Use parentheses to control evaluation order!");

// 🎯 PRACTICAL EXAMPLES
console.log("\\n\\n=== PRACTICAL EXAMPLES ===");

// 1. Calculate discount
let price = 100;
let isMember = true;
let discount = isMember ? 20 : 10;
let finalPrice = price - (price * discount / 100);
console.log(\`💰 Price: $\${price}, Discount: \${discount}%, Final: $\${finalPrice}\`);

// 2. Validate form data
function validateForm(username, password, email) {
    let errors = [];
    
    // Check username (not empty)
    if (!username || username.trim() === "") {
        errors.push("Username is required");
    }
    
    // Check password (min 8 chars)
    if (!password || password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    
    // Check email (basic validation)
    if (email && !email.includes("@")) {
        errors.push("Invalid email format");
    }
    
    return errors.length === 0 ? "✅ Form is valid" : \`❌ Errors: \${errors.join(", ")}\`;
}

console.log("\\n📝 Form Validation:");
console.log(validateForm("john_doe", "password123", "john@example.com"));
console.log(validateForm("", "short", "invalid-email"));

// 3. Calculate shipping cost
function calculateShipping(weight, isExpress, isInternational) {
    let baseCost = 5;
    let weightCost = weight * 0.5;
    let expressCost = isExpress ? 10 : 0;
    let internationalCost = isInternational ? 15 : 0;
    
    return baseCost + weightCost + expressCost + internationalCost;
}

console.log("\\n📦 Shipping Calculation:");
console.log(\`Standard domestic: $\${calculateShipping(2, false, false)}\`);
console.log(\`Express domestic: $\${calculateShipping(2, true, false)}\`);
console.log(\`International: $\${calculateShipping(2, false, true)}\`);`,
        explanation: 'This comprehensive example covers all JavaScript operators with practical applications and real-world scenarios.',
        preview: '<div class="preview-demo"><h3 style="color: #8b5cf6">Operators Practice</h3><p>Open browser console to see operator results</p><div class="calculator"><input type="text" placeholder="Try: 5 + 3 * 2" id="calcInput"><button onclick="calculate()">Calculate</button><div id="calcResult" class="result-box">Result will appear here</div></div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Expressions and Operators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators' },
      { title: 'JavaScript.info: Operators', url: 'https://javascript.info/operators' },
      { title: 'Operator Precedence Table', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence' },
      { title: 'Ternary Operator Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' }
    ],
    prerequisites: ['js-basics'],
    nextTopics: ['js-control-flow']
  },
  {
    id: 'js-control-flow',
    title: 'Control Flow',
    icon: <GitBranch />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'javascript',
    order: 4,
    sections: [
      'if Statement',
      'else Statement',
      'else if Statement',
      'switch Statement',
      'Conditional (Ternary) Operator'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">🎮</div>
          <h1>Control Flow</h1>
          <p class="concept-tagline">Master Decision Making in JavaScript</p>
        </div>
        
        <div class="control-flow-3d">
          <div class="flow-chart">
            <div class="flow-start">Start</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-condition">
              <div class="condition-diamond">?</div>
              <div class="condition-text">Condition</div>
            </div>
            <div class="flow-branches">
              <div class="branch true">
                <div class="branch-label">True</div>
                <div class="branch-content">Execute if block</div>
              </div>
              <div class="branch false">
                <div class="branch-label">False</div>
                <div class="branch-content">Execute else block</div>
              </div>
            </div>
            <div class="flow-end">End</div>
          </div>
        </div>
        
        <h2>🎯 if Statement</h2>
        <p>The <code>if</code> statement executes a block of code if a specified condition is true.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>if (condition) {
    // code to execute if condition is true
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Example:</h3>
          <pre><code>let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote!");
    console.log("Please proceed to registration.");
}

let score = 85;
if (score > 80) {
    console.log("Excellent work!");
    console.log("You get an A grade!");
}

// Single line (without curly braces - not recommended)
if (age >= 18) console.log("You can vote!");</code></pre>
        </div>
        
        <h2>🔄 else Statement</h2>
        <p>The <code>else</code> statement executes a block of code if the same condition is false.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Example:</h3>
          <pre><code>let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
    console.log("Stay hydrated!");
} else {
    console.log("It's pleasant outside!");
    console.log("Enjoy your day!");
}

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
    console.log("Loading your dashboard...");
} else {
    console.log("Please log in to continue.");
    console.log("Redirecting to login page...");
}</code></pre>
        </div>
        
        <h2>📊 else if Statement</h2>
        <p>The <code>else if</code> statement specifies a new condition if the first condition is false.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if all conditions are false
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Example:</h3>
          <pre><code>let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
    console.log("Excellent! You got an A!");
} else if (score >= 80) {
    grade = "B";
    console.log("Good job! You got a B!");
} else if (score >= 70) {
    grade = "C";
    console.log("Fair! You got a C.");
} else if (score >= 60) {
    grade = "D";
    console.log("You passed with a D.");
} else {
    grade = "F";
    console.log("Sorry, you failed.");
}

console.log(\`Your grade: \${grade}\`);

// Multiple conditions
let time = 14; // 2 PM

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}</code></pre>
        </div>
        
        <h2>🔀 switch Statement</h2>
        <p>The <code>switch</code> statement is used to perform different actions based on different conditions.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>switch(expression) {
    case value1:
        // code to execute
        break;
    case value2:
        // code to execute
        break;
    default:
        // code to execute if no case matches
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Example:</h3>
          <pre><code>let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = "Monday";
        console.log("Start of the work week!");
        break;
    case 2:
        dayName = "Tuesday";
        console.log("Keep going!");
        break;
    case 3:
        dayName = "Wednesday";
        console.log("Hump day!");
        break;
    case 4:
        dayName = "Thursday";
        console.log("Almost there!");
        break;
    case 5:
        dayName = "Friday";
        console.log("TGIF!");
        break;
    case 6:
        dayName = "Saturday";
        console.log("Weekend!");
        break;
    case 7:
        dayName = "Sunday";
        console.log("Relax and recharge!");
        break;
    default:
        dayName = "Invalid day";
        console.log("Please enter a number between 1 and 7");
}

console.log(\`Today is \${dayName}\`);

// Multiple cases with same code
let fruit = "apple";
let message;

switch(fruit) {
    case "apple":
    case "banana":
    case "orange":
        message = "This is a common fruit!";
        break;
    case "dragonfruit":
    case "starfruit":
        message = "This is an exotic fruit!";
        break;
    default:
        message = "Unknown fruit!";
}

console.log(message);</code></pre>
        </div>
        
        <h2>❓ Ternary Operator (Conditional Operator)</h2>
        <p>The ternary operator is a shorthand for <code>if...else</code> statements.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>condition ? expressionIfTrue : expressionIfFalse</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Example:</h3>
          <pre><code>// Basic usage
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(\`Status: \${status}\`);

// Multiple operations
let isMember = true;
let discount = isMember ? 20 : 0;
console.log(\`Discount: \${discount}%\`);

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(\`Grade: \${grade}\`);

// Function return
function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}

console.log(\`Member fee: \${getFee(true)}\`);
console.log(\`Non-member fee: \${getFee(false)}\`);</code></pre>
        </div>
        
        <h2>🎮 Practice Problems</h2>
        <div class="practice-section">
          <div class="problem">
            <h3>Problem 1: Check Number Type</h3>
            <p>Write a program that checks if a number is positive, negative, or zero.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Test cases
console.log(checkNumber(10));    // "Positive"
console.log(checkNumber(-5));    // "Negative"
console.log(checkNumber(0));     // "Zero"</code></pre>
            </div>
          </div>
          
          <div class="problem">
            <h3>Problem 2: Day of Week</h3>
            <p>Write a program that takes a number (1-7) and returns the corresponding day of the week.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function getDayOfWeek(dayNumber) {
    let day;
    
    switch(dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }
    
    return day;
}

// Test cases
console.log(getDayOfWeek(1));    // "Monday"
console.log(getDayOfWeek(5));    // "Friday"
console.log(getDayOfWeek(8));    // "Invalid day number"</code></pre>
            </div>
          </div>
        </div>
        
        <div class="student-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Best Practices for Control Flow</h4>
            <ul>
              <li>Always use curly braces <code>{}</code> even for single statements</li>
              <li>Use <code>else if</code> for multiple conditions instead of nested <code>if</code></li>
              <li>Always include <code>break</code> in <code>switch</code> cases (unless intentional fall-through)</li>
              <li>Use ternary operator for simple conditional assignments</li>
              <li>Avoid deep nesting - refactor complex conditions into functions</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Control Flow Examples',
        code: `// ========== if-else Examples ==========
console.log("=== if-else Examples ===");

// Example 1: Age verification
let userAge = 17;

if (userAge >= 18) {
    console.log("✅ Access granted! Welcome to the website.");
    console.log("📋 You can now access all features.");
} else {
    console.log("❌ Access denied! You must be 18 or older.");
    console.log("🔞 Please come back when you're older.");
}

// Example 2: Temperature check
let temperature = 35;
let clothingSuggestion;

if (temperature > 30) {
    clothingSuggestion = "Wear light clothes and stay hydrated!";
} else if (temperature > 20) {
    clothingSuggestion = "Perfect weather! A t-shirt will do.";
} else if (temperature > 10) {
    clothingSuggestion = "It's getting chilly. Wear a jacket.";
} else {
    clothingSuggestion = "Brrr! Bundle up with warm clothes!";
}

console.log(\`🌡️ Temperature: \${temperature}°C\`);
console.log(\`👕 Recommendation: \${clothingSuggestion}\`);

// ========== switch Statement Examples ==========
console.log("\\n\\n=== switch Statement Examples ===");

// Example 1: Calculator
let operator = "*";
let num1 = 10;
let num2 = 5;
let result;

switch(operator) {
    case "+":
        result = num1 + num2;
        console.log(\`\${num1} + \${num2} = \${result}\`);
        break;
    case "-":
        result = num1 - num2;
        console.log(\`\${num1} - \${num2} = \${result}\`);
        break;
    case "*":
        result = num1 * num2;
        console.log(\`\${num1} × \${num2} = \${result}\`);
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(\`\${num1} ÷ \${num2} = \${result}\`);
        } else {
            console.log("Error: Division by zero!");
        }
        break;
    default:
        console.log("Invalid operator! Use +, -, *, or /");
}

// Example 2: Traffic light system
let trafficLight = "yellow";
let action;

switch(trafficLight.toLowerCase()) {
    case "red":
        action = "STOP! Do not cross.";
        break;
    case "yellow":
        action = "CAUTION! Prepare to stop.";
        break;
    case "green":
        action = "GO! Proceed with caution.";
        break;
    default:
        action = "Invalid traffic light color!";
}

console.log(\`🚦 Traffic light: \${trafficLight.toUpperCase()}\`);
console.log(\`📢 Action: \${action}\`);

// ========== Ternary Operator Examples ==========
console.log("\\n\\n=== Ternary Operator Examples ===");

// Example 1: Simple membership check
let isPremiumMember = true;
let accessLevel = isPremiumMember ? "Premium Access" : "Basic Access";
console.log(\`👤 Membership: \${accessLevel}\`);

// Example 2: Discount calculation
let purchaseAmount = 150;
let hasCoupon = true;
let finalAmount = hasCoupon ? purchaseAmount * 0.9 : purchaseAmount;
console.log(\`💰 Original: $\${purchaseAmount}\`);
console.log(\`🎫 With discount: $\${finalAmount.toFixed(2)}\`);

// Example 3: Nested ternary for grade calculation
let studentScore = 87;
let studentGrade = studentScore >= 90 ? "A" :
                  studentScore >= 80 ? "B" :
                  studentScore >= 70 ? "C" :
                  studentScore >= 60 ? "D" : "F";
                  
console.log(\`📊 Score: \${studentScore}\`);
console.log(\`🏆 Grade: \${studentGrade}\`);

// ========== Complex Example: User Authentication ==========
console.log("\\n\\n=== Complex Example: User Authentication ===");

function authenticateUser(username, password, isAdmin) {
    // Check if username is provided
    if (!username || username.trim() === "") {
        return "❌ Error: Username is required!";
    }
    
    // Check password strength
    if (!password) {
        return "❌ Error: Password is required!";
    } else if (password.length < 8) {
        return "❌ Error: Password must be at least 8 characters!";
    } else if (!/[A-Z]/.test(password)) {
        return "❌ Error: Password must contain at least one uppercase letter!";
    } else if (!/[0-9]/.test(password)) {
        return "❌ Error: Password must contain at least one number!";
    }
    
    // Check admin privileges
    if (isAdmin) {
        return "✅ Welcome, Administrator! Full access granted.";
    } else {
        return "✅ Welcome, User! Limited access granted.";
    }
}

// Test authentication
console.log(authenticateUser("john_doe", "Password123", false));
console.log(authenticateUser("admin", "AdminPass456", true));
console.log(authenticateUser("", "weak", false));

// ========== Real-World Example: Shopping Cart ==========
console.log("\\n\\n=== Real-World Example: Shopping Cart ===");

function calculateTotal(items, isMember, couponCode) {
    let subtotal = items.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;
    
    // Apply member discount
    if (isMember) {
        discount += 10; // 10% member discount
    }
    
    // Apply coupon discount
    switch(couponCode) {
        case "SAVE10":
            discount += 10;
            break;
        case "SAVE20":
            discount += 20;
            break;
        case "FREESHIP":
            // Free shipping handled separately
            break;
        case "WELCOME25":
            discount += 25;
            break;
        default:
            // No additional coupon discount
    }
    
    // Cap discount at 40%
    discount = Math.min(discount, 40);
    
    let discountAmount = subtotal * (discount / 100);
    let total = subtotal - discountAmount;
    
    return {
        subtotal: subtotal.toFixed(2),
        discount: discount,
        discountAmount: discountAmount.toFixed(2),
        total: total.toFixed(2)
    };
}

// Test shopping cart
let cartItems = [
    { name: "T-Shirt", price: 25.99 },
    { name: "Jeans", price: 49.99 },
    { name: "Shoes", price: 79.99 }
];

let receipt = calculateTotal(cartItems, true, "WELCOME25");
console.log("🛒 Shopping Cart Summary:");
console.log(\`   Subtotal: $\${receipt.subtotal}\`);
console.log(\`   Discount: \${receipt.discount}%\`);
console.log(\`   Discount Amount: $\${receipt.discountAmount}\`);
console.log(\`   Total: $\${receipt.total}\`);`,
        explanation: 'These examples demonstrate various control flow structures in JavaScript, from basic conditionals to complex real-world scenarios.',
        preview: '<div class="preview-demo"><h3 style="color: #f59e0b">Control Flow Preview</h3><p>Enter different values in the code to see how control flow works!</p><div id="result" class="result-box">Results will appear here after running code</div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Control Flow', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
      { title: 'JavaScript.info: Conditional Operators', url: 'https://javascript.info/ifelse' },
      { title: 'Switch Statement Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch' }
    ],
    prerequisites: ['js-operators'],
    nextTopics: ['js-loops']
  },
  {
    id: 'js-loops',
    title: 'Loops',
    icon: <RefreshCw />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'javascript',
    order: 5,
    sections: [
      'for Loop',
      'while Loop',
      'do...while Loop',
      'for...in Loop',
      'for...of Loop',
      'Loop Control (break, continue)'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">🔄</div>
          <h1>JavaScript Loops</h1>
          <p class="concept-tagline">Automate Repetitive Tasks with Iteration</p>
        </div>
        
        <div class="loop-3d-visual">
          <div class="loop-cycle">
            <div class="loop-start">Start</div>
            <div class="loop-arrow">↓</div>
            <div class="loop-condition">
              <div class="condition-check">❓</div>
              <div class="condition-text">Check Condition</div>
            </div>
            <div class="loop-branches">
              <div class="loop-true">
                <div class="loop-execute">Execute Code</div>
                <div class="loop-update">Update Counter</div>
              </div>
              <div class="loop-false">
                <div class="loop-end">Exit Loop</div>
              </div>
            </div>
          </div>
        </div>
        
        <h2>🔁 for Loop</h2>
        <p>The <code>for</code> loop repeats a block of code a specific number of times.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>for (initialization; condition; increment/decrement) {
    // code to execute on each iteration
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Count from 1 to 5
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration", i);
}

// Count backwards from 10 to 1
console.log("\\nCountdown from 10:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Increment by 2
console.log("\\nEven numbers up to 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Array iteration
console.log("\\nArray elements:");
const fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}</code></pre>
        </div>
        
        <h2>⏳ while Loop</h2>
        <p>The <code>while</code> loop repeats a block of code while a condition is true.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>while (condition) {
    // code to execute while condition is true
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Count from 1 to 5
console.log("while loop - Counting from 1 to 5:");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++; // Don't forget to update the counter!
}

// User input simulation
console.log("\\nwhile loop - User input simulation:");
let userInput = "";
let attempts = 0;
const secretPassword = "password123";

while (userInput !== secretPassword && attempts < 3) {
    // Simulating user input
    userInput = attempts === 0 ? "wrong" : 
                attempts === 1 ? "alsoWrong" : "password123";
    attempts++;
    console.log(\`Attempt \${attempts}: \${userInput === secretPassword ? "✅ Access granted!" : "❌ Try again"}\`);
}

// Infinite loop prevention
console.log("\\nwhile loop - Safe iteration:");
let safeCounter = 0;
while (safeCounter < 5) {
    console.log("Safe iteration:", safeCounter);
    safeCounter++;
    // Always have a way to exit the loop!
}</code></pre>
        </div>
        
        <h2>🔄 do...while Loop</h2>
        <p>The <code>do...while</code> loop executes the code block once, then repeats while the condition is true.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>do {
    // code to execute at least once
} while (condition);</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Always executes at least once
console.log("do...while - At least one execution:");
let number = 10;
do {
    console.log("Number is:", number);
    number++;
} while (number < 5); // Condition is false from start!

// Menu system example
console.log("\\ndo...while - Menu system:");
let choice;
let menuDisplayed = false;

do {
    if (!menuDisplayed) {
        console.log("\\n=== Menu ===");
        console.log("1. View Profile");
        console.log("2. Settings");
        console.log("3. Help");
        console.log("4. Exit");
        menuDisplayed = true;
    }
    
    // Simulate user choice
    choice = Math.floor(Math.random() * 4) + 1;
    
    switch(choice) {
        case 1:
            console.log("📋 Loading profile...");
            break;
        case 2:
            console.log("⚙️ Opening settings...");
            break;
        case 3:
            console.log("❓ Displaying help...");
            break;
        case 4:
            console.log("👋 Goodbye!");
            break;
    }
    
} while (choice !== 4);</code></pre>
        </div>
        
        <h2>🔍 for...in Loop</h2>
        <p>The <code>for...in</code> loop iterates over the enumerable properties of an object.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>for (let key in object) {
    // code to execute for each property
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Iterate over object properties
console.log("for...in - Object properties:");
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Developer",
    city: "New York"
};

for (let property in person) {
    console.log(\`\${property}: \${person[property]}\`);
}

// Be careful with inherited properties
console.log("\\nfor...in - Only own properties:");
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

// Add a method
car.startEngine = function() {
    return "Vroom!";
};

for (let key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(\`Own property: \${key}\`);
    }
}

// Iterate over array indices (not recommended)
console.log("\\nfor...in - Array indices (use for...of instead):");
const colors = ["Red", "Green", "Blue"];
for (let index in colors) {
    console.log(\`Index \${index}: \${colors[index]}\`);
}</code></pre>
        </div>
        
        <h2>🎯 for...of Loop</h2>
        <p>The <code>for...of</code> loop iterates over iterable objects (arrays, strings, etc.).</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>for (let element of iterable) {
    // code to execute for each element
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Iterate over array elements
console.log("for...of - Array elements:");
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let num of numbers) {
    sum += num;
    console.log(\`Adding \${num}, current sum: \${sum}\`);
}
console.log(\`Total sum: \${sum}\`);

// Iterate over string characters
console.log("\\nfor...of - String characters:");
const message = "Hello";
for (let char of message) {
    console.log(char);
}

// Iterate over Map
console.log("\\nfor...of - Map iteration:");
const userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set("email", "alice@example.com");

for (let [key, value] of userMap) {
    console.log(\`\${key}: \${value}\`);
}

// Iterate over Set
console.log("\\nfor...of - Set iteration:");
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 3, 4, 5]);
for (let num of uniqueNumbers) {
    console.log(\`Unique number: \${num}\`);
}</code></pre>
        </div>
        
        <h2>⏸️ Loop Control: break and continue</h2>
        <div class="control-section">
          <div class="control-card">
            <h3>🔴 break Statement</h3>
            <p>Exits the loop immediately.</p>
            <pre><code>for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit loop when i is 5
    }
    console.log(i);
}
// Output: 1 2 3 4</code></pre>
          </div>
          
          <div class="control-card">
            <h3>🟢 continue Statement</h3>
            <p>Skips the current iteration and continues with the next.</p>
            <pre><code>for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i is 3
    }
    console.log(i);
}
// Output: 1 2 4 5</code></pre>
          </div>
        </div>
        
        <div class="example-section">
          <h3>Practical Examples:</h3>
          <pre><code>// Search for a value and break
console.log("Searching for a value:");
const products = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const searchItem = "Cherry";
let foundIndex = -1;

for (let i = 0; i < products.length; i++) {
    if (products[i] === searchItem) {
        foundIndex = i;
        console.log(\`✅ Found "\${searchItem}" at index \${i}\`);
        break; // Stop searching once found
    }
    console.log(\`Checking "\${products[i]}"...\`);
}

// Skip even numbers
console.log("\\nOnly odd numbers:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(\`Odd number: \${i}\`);
}

// Complex break and continue
console.log("\\nProcessing with conditions:");
const scores = [85, 92, 78, 60, 45, 95, 100, 88];

for (let score of scores) {
    if (score < 50) {
        console.log(\`❌ Score \${score}: Failed, stopping processing.\`);
        break; // Stop if anyone fails
    }
    
    if (score < 70) {
        console.log(\`⚠️ Score \${score}: Passed but needs improvement.\`);
        continue; // Skip to next score
    }
    
    console.log(\`✅ Score \${score}: Excellent!\`);
}</code></pre>
        </div>
        
        <h2>🎮 Practice Problems</h2>
        <div class="practice-section">
          <div class="problem">
            <h3>Problem 1: Multiplication Table</h3>
            <p>Create a multiplication table for a given number.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function multiplicationTable(number, limit = 10) {
    console.log(\`Multiplication table for \${number}:\`);
    for (let i = 1; i <= limit; i++) {
        console.log(\`\${number} × \${i} = \${number * i}\`);
    }
}

// Test
multiplicationTable(5);
multiplicationTable(7, 12);</code></pre>
            </div>
          </div>
          
          <div class="problem">
            <h3>Problem 2: Find Prime Numbers</h3>
            <p>Find all prime numbers up to a given limit.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function findPrimes(limit) {
    console.log(\`Prime numbers up to \${limit}:\`);
    
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        
        // Check divisibility
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            console.log(num);
        }
    }
}

// Test
findPrimes(20);</code></pre>
            </div>
          </div>
        </div>
        
        <div class="comparison-table">
          <h3>📊 Loop Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Loop Type</th>
                <th>Best For</th>
                <th>When to Use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>for</code></td>
                <td>Known number of iterations</td>
                <td>Counting, arrays with index</td>
                <td><code>for (let i = 0; i < 10; i++)</code></td>
              </tr>
              <tr>
                <td><code>while</code></td>
                <td>Unknown number of iterations</td>
                <td>Condition-based repetition</td>
                <td><code>while (condition)</code></td>
              </tr>
              <tr>
                <td><code>do...while</code></td>
                <td>At least one execution</td>
                <td>Input validation, menus</td>
                <td><code>do { } while (condition)</code></td>
              </tr>
              <tr>
                <td><code>for...in</code></td>
                <td>Object properties</td>
                <td>Iterating over object keys</td>
                <td><code>for (let key in obj)</code></td>
              </tr>
              <tr>
                <td><code>for...of</code></td>
                <td>Iterable values</td>
                <td>Arrays, strings, Maps, Sets</td>
                <td><code>for (let value of arr)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="student-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Loop Best Practices</h4>
            <ul>
              <li>Use <code>for...of</code> for arrays instead of <code>for...in</code></li>
              <li>Always update loop counters to avoid infinite loops</li>
              <li>Use meaningful variable names in loops (<code>i, j, k</code> for counters)</li>
              <li>Consider using array methods (<code>forEach, map, filter</code>) when appropriate</li>
              <li>Break complex loops into smaller functions</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Loops Examples',
        code: `// ========== for Loop Examples ==========
console.log("=== for Loop Examples ===");

// Example 1: Pattern printing
console.log("\\n🔺 Triangle Pattern:");
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

// Example 2: Factorial calculation
console.log("\\n🎯 Factorial Calculation:");
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        console.log(\`\${i}! = \${factorial}\`);
    }
    return factorial;
}

calculateFactorial(5);

// Example 3: FizzBuzz
console.log("\\n🎮 FizzBuzz Challenge:");
for (let i = 1; i <= 20; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

// ========== while Loop Examples ==========
console.log("\\n\\n=== while Loop Examples ===");

// Example 1: Number guessing game
console.log("\\n🎲 Number Guessing Game:");
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;
let attempts = 0;

while (guess !== secretNumber) {
    // Simulate guesses
    guess = attempts === 0 ? 3 : 
            attempts === 1 ? 7 : 
            attempts === 2 ? secretNumber : 0;
    attempts++;
    
    if (guess < secretNumber) {
        console.log(\`Attempt \${attempts}: \${guess} is too low!\`);
    } else if (guess > secretNumber) {
        console.log(\`Attempt \${attempts}: \${guess} is too high!\`);
    } else {
        console.log(\`🎉 Attempt \${attempts}: \${guess} is correct!\`);
    }
}

// Example 2: Password strength checker
console.log("\\n🔐 Password Strength Checker:");
function checkPasswordStrength(password) {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    let i = 0;
    
    while (i < password.length) {
        let char = password[i];
        
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        else if (char >= 'a' && char <= 'z') hasLowerCase = true;
        else if (char >= '0' && char <= '9') hasNumber = true;
        else hasSpecialChar = true;
        
        i++;
    }
    
    return {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar,
        isValid: hasUpperCase && hasLowerCase && hasNumber && password.length >= 8
    };
}

const passwordCheck = checkPasswordStrength("SecurePass123!");
console.log("Password analysis:", passwordCheck);

// ========== do...while Loop Examples ==========
console.log("\\n\\n=== do...while Loop Examples ===");

// Example 1: ATM simulation
console.log("\\n🏦 ATM Simulation:");
function simulateATM() {
    let balance = 1000;
    let choice;
    
    do {
        console.log("\\n=== ATM Menu ===");
        console.log("1. Check Balance");
        console.log("2. Deposit");
        console.log("3. Withdraw");
        console.log("4. Exit");
        
        // Simulate user choice
        choice = Math.random() > 0.7 ? 4 : Math.floor(Math.random() * 3) + 1;
        
        switch(choice) {
            case 1:
                console.log(\`💰 Current balance: $\${balance}\`);
                break;
            case 2:
                let deposit = Math.floor(Math.random() * 500) + 100;
                balance += deposit;
                console.log(\`➕ Deposited: $\${deposit}\`);
                break;
            case 3:
                let withdraw = Math.floor(Math.random() * 200) + 50;
                if (withdraw <= balance) {
                    balance -= withdraw;
                    console.log(\`➖ Withdrew: $\${withdraw}\`);
                } else {
                    console.log("❌ Insufficient funds!");
                }
                break;
            case 4:
                console.log("👋 Thank you for using our ATM!");
                break;
        }
        
    } while (choice !== 4);
}

simulateATM();

// ========== for...in Loop Examples ==========
console.log("\\n\\n=== for...in Loop Examples ===");

// Example 1: Object analysis
console.log("\\n📊 Object Property Analysis:");
const employee = {
    name: "Sarah Johnson",
    age: 28,
    department: "Engineering",
    position: "Senior Developer",
    salary: 85000,
    skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    isRemote: true
};

console.log("Employee Properties:");
for (let property in employee) {
    console.log(\`  \${property}: \${typeof employee[property] === 'object' 
        ? JSON.stringify(employee[property]) 
        : employee[property]}\`);
}

// Example 2: Nested object iteration
console.log("\\n📁 Nested Object Iteration:");
const company = {
    name: "TechCorp",
    departments: {
        engineering: { employees: 50, budget: 500000 },
        marketing: { employees: 20, budget: 200000 },
        sales: { employees: 30, budget: 300000 }
    },
    locations: ["New York", "San Francisco", "London"]
};

for (let dept in company.departments) {
    console.log(\`\${dept.toUpperCase()} Department:\`);
    for (let stat in company.departments[dept]) {
        console.log(\`  \${stat}: \${company.departments[dept][stat]}\`);
    }
}

// ========== for...of Loop Examples ==========
console.log("\\n\\n=== for...of Loop Examples ===");

// Example 1: Shopping cart total
console.log("\\n🛒 Shopping Cart:");
const cart = [
    { name: "Laptop", price: 999.99, quantity: 1 },
    { name: "Mouse", price: 25.50, quantity: 2 },
    { name: "Keyboard", price: 75.00, quantity: 1 },
    { name: "Monitor", price: 299.99, quantity: 1 }
];

let cartTotal = 0;
console.log("Cart Items:");
for (let item of cart) {
    let itemTotal = item.price * item.quantity;
    cartTotal += itemTotal;
    console.log(\`  \${item.name} x\${item.quantity}: $\${itemTotal.toFixed(2)}\`);
}
console.log(\`💰 Total: $\${cartTotal.toFixed(2)}\`);

// Example 2: Character frequency counter
console.log("\\n🔤 Character Frequency:");
function countCharacters(text) {
    const frequency = {};
    
    for (let char of text.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    
    return frequency;
}

const text = "Hello World! JavaScript is amazing!";
const charCount = countCharacters(text);
console.log("Character frequencies:");
for (let [char, count] of Object.entries(charCount)) {
    console.log(\`  '\${char}': \${count}\`);
}

// ========== break and continue Examples ==========
console.log("\\n\\n=== break and continue Examples ===");

// Example 1: Search in 2D array
console.log("\\n🔍 Search in 2D Array:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const target = 5;
let found = false;

outerLoop: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
            console.log(\`✅ Found \${target} at position [\${i}][\${j}]\`);
            found = true;
            break outerLoop; // Break out of both loops
        }
    }
}

if (!found) {
    console.log(\`❌ \${target} not found\`);
}

// Example 2: Skip invalid data
console.log("\\n📊 Data Processing with Validation:");
const data = [42, "invalid", 100, null, 75, undefined, 200, "error", 150];

let validSum = 0;
let validCount = 0;

for (let item of data) {
    // Skip non-numbers
    if (typeof item !== 'number' || isNaN(item)) {
        console.log(\`Skipping invalid value: \${item}\`);
        continue;
    }
    
    validSum += item;
    validCount++;
    console.log(\`Processing valid number: \${item}\`);
}

console.log(\`\\n📈 Valid numbers: \${validCount}\`);
console.log(\`📊 Sum of valid numbers: \${validSum}\`);
console.log(\`📐 Average: \${(validSum / validCount).toFixed(2)}\`);`,
        explanation: 'These examples demonstrate various types of loops in JavaScript, from basic iterations to complex data processing scenarios.',
        preview: '<div class="preview-demo"><h3 style="color: #3b82f6">Loops Preview</h3><p>Experiment with different loop types and see how they iterate through data!</p><div id="loopOutput" class="result-box">Loop results will appear here</div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Loops and iteration', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' },
      { title: 'JavaScript.info: Loops', url: 'https://javascript.info/while-for' },
      { title: 'for...of vs for...in Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of' }
    ],
    prerequisites: ['js-control-flow'],
    nextTopics: ['js-functions']
  },
  {
    id: 'js-functions',
    title: 'Functions',
    icon: <FunctionSquare />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'javascript',
    order: 6,
    sections: [
      'Function Declaration',
      'Function Expression',
      'Arrow Functions',
      'Parameters & Arguments',
      'Return Statement',
      'Default Parameters',
      'Rest Parameters',
      'IIFE'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">⚙️</div>
          <h1>JavaScript Functions</h1>
          <p class="concept-tagline">Reusable Code Blocks for Modular Programming</p>
        </div>
        
        <div class="function-3d-visual">
          <div class="function-flow">
            <div class="input-box">
              <div class="input-label">Input</div>
              <div class="input-values">Parameters</div>
            </div>
            <div class="arrow">→</div>
            <div class="function-box">
              <div class="function-label">Function</div>
              <div class="function-process">Processing Logic</div>
            </div>
            <div class="arrow">→</div>
            <div class="output-box">
              <div class="output-label">Output</div>
              <div class="output-values">Return Value</div>
            </div>
          </div>
        </div>
        
        <h2>📝 Function Declaration</h2>
        <p>A function declaration defines a named function that can be called anywhere in your code.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>function functionName(parameters) {
    // function body
    return value; // optional
}</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic function
function greet() {
    console.log("Hello, World!");
}

greet(); // Hello, World!

// Function with parameters
function greetPerson(name) {
    console.log(\`Hello, \${name}!\`);
}

greetPerson("Alice"); // Hello, Alice!
greetPerson("Bob");   // Hello, Bob!

// Function with return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(\`Sum: \${sum}\`); // Sum: 8

// Multiple operations
function calculateRectangleArea(width, height) {
    let area = width * height;
    let perimeter = 2 * (width + height);
    return { area, perimeter };
}

let result = calculateRectangleArea(10, 5);
console.log(\`Area: \${result.area}\`);        // Area: 50
console.log(\`Perimeter: \${result.perimeter}\`); // Perimeter: 30</code></pre>
        </div>
        
        <h2>💭 Function Expression</h2>
        <p>A function expression defines a function as part of an expression, often assigned to a variable.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>const functionName = function(parameters) {
    // function body
    return value;
};</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic function expression
const sayHello = function() {
    console.log("Hello from function expression!");
};

sayHello(); // Hello from function expression!

// Function expression with parameters
const multiply = function(x, y) {
    return x * y;
};

console.log(multiply(4, 5)); // 20

// Anonymous function assigned to variable
const findMax = function(numbers) {
    return Math.max(...numbers);
};

const nums = [10, 25, 5, 40, 15];
console.log(\`Maximum: \${findMax(nums)}\`); // Maximum: 40

// Function expression as callback
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared); // [1, 4, 9, 16, 25]</code></pre>
        </div>
        
        <h2>🏹 Arrow Functions (ES6+)</h2>
        <p>Arrow functions provide a shorter syntax and don't have their own <code>this</code> binding.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>// Multiple parameters
const functionName = (param1, param2) => {
    // function body
    return value;
};

// Single parameter (parentheses optional)
const functionName = param => {
    // function body
    return value;
};

// Single expression (implicit return)
const functionName = (a, b) => a + b;</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic arrow function
const greet = () => {
    console.log("Hello from arrow function!");
};

greet(); // Hello from arrow function!

// Single parameter (no parentheses needed)
const square = x => x * x;
console.log(square(5)); // 25

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(10, 20)); // 30

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];

// Using arrow function with map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using arrow function with filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Using arrow function with reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Multi-line arrow function
const calculate = (a, b, operation) => {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return "Invalid operation";
    }
};

console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'multiply')); // 50</code></pre>
        </div>
        
        <h2>🎯 Parameters & Arguments</h2>
        <div class="parameters-section">
          <div class="parameter-types">
            <div class="type-card">
              <h3>Default Parameters</h3>
              <p>Set default values for parameters.</p>
              <pre><code>function greet(name = "Guest") {
    console.log(\`Hello, \${name}!\`);
}

greet();           // Hello, Guest!
greet("Alice");    // Hello, Alice!</code></pre>
            </div>
            
            <div class="type-card">
              <h3>Rest Parameters</h3>
              <p>Handle an indefinite number of arguments.</p>
              <pre><code>function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3));        // 6
console.log(sumAll(1, 2, 3, 4, 5));  // 15</code></pre>
            </div>
            
            <div class="type-card">
              <h3>Destructuring Parameters</h3>
              <p>Extract values from objects/arrays.</p>
              <pre><code>function displayUser({name, age, city}) {
    console.log(\`\${name}, \${age}, from \${city}\`);
}

const user = {name: "John", age: 30, city: "NYC"};
displayUser(user); // John, 30, from NYC</code></pre>
            </div>
          </div>
        </div>
        
        <div class="example-section">
          <h3>More Parameter Examples:</h3>
          <pre><code>// Function with multiple default parameters
function createUser(name = "Anonymous", age = 18, isActive = true) {
    return {
        username: name,
        userAge: age,
        active: isActive,
        createdAt: new Date().toISOString()
    };
}

console.log(createUser());
console.log(createUser("Alice", 25));
console.log(createUser("Bob", 30, false));

// Rest parameters with other parameters
function joinStrings(separator, ...strings) {
    return strings.join(separator);
}

console.log(joinStrings("-", "apple", "banana", "cherry")); // apple-banana-cherry
console.log(joinStrings(", ", "red", "green", "blue"));     // red, green, blue

// Mixed parameter types
function processData(name, options = {}, ...data) {
    console.log(\`Processing data for \${name}\`);
    console.log("Options:", options);
    console.log("Data:", data);
    return data.length;
}

processData("John", {verbose: true}, 1, 2, 3, 4, 5);</code></pre>
        </div>
        
        <h2>↩️ Return Statement</h2>
        <p>The <code>return</code> statement stops function execution and returns a value.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Single return value
function getGreeting(name) {
    return \`Hello, \${name}!\`;
}

let greeting = getGreeting("Sarah");
console.log(greeting); // Hello, Sarah!

// Multiple return statements
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));  // Positive
console.log(checkNumber(-5));  // Negative
console.log(checkNumber(0));   // Zero

// Early return pattern
function processOrder(order) {
    // Validate order
    if (!order || !order.items || order.items.length === 0) {
        return { success: false, message: "Invalid order" };
    }
    
    // Check stock
    if (!checkStock(order.items)) {
        return { success: false, message: "Items out of stock" };
    }
    
    // Process payment
    if (!processPayment(order.total)) {
        return { success: false, message: "Payment failed" };
    }
    
    // If all checks pass
    return { 
        success: true, 
        message: "Order processed successfully",
        orderId: generateOrderId()
    };
}

// Returning multiple values (using object/array)
function getStats(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    return { sum, average: avg, maximum: max, minimum: min };
}

const stats = getStats([10, 20, 30, 40, 50]);
console.log(stats);</code></pre>
        </div>
        
        <h2>🌀 Immediately Invoked Function Expression (IIFE)</h2>
        <p>An IIFE is a function that runs as soon as it's defined.</p>
        
        <div class="syntax-box">
          <h3>Syntax:</h3>
          <pre><code>(function() {
    // code here
})();

// Arrow function IIFE
(() => {
    // code here
})();</code></pre>
        </div>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic IIFE
(function() {
    console.log("IIFE executed immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(\`Hello, \${name} from IIFE!\`);
})("Alice");

// IIFE that returns a value
const randomNumber = (function() {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(\`Random number: \${randomNumber}\`);

// IIFE for creating private scope
const counter = (function() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.reset());     // 0

// Arrow function IIFE
(() => {
    const secret = "This is private!";
    console.log(\`Secret message: \${secret}\`);
})();</code></pre>
        </div>
        
        <h2>🎮 Practice Problems</h2>
        <div class="practice-section">
          <div class="problem">
            <h3>Problem 1: Palindrome Checker</h3>
            <p>Write a function that checks if a string is a palindrome.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if string is the same forwards and backwards
    return cleaned === cleaned.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("racecar"));    // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("12321"));      // true</code></pre>
            </div>
          </div>
          
          <div class="problem">
            <h3>Problem 2: Temperature Converter</h3>
            <p>Create a function that converts between Celsius and Fahrenheit.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function convertTemperature(value, unit) {
    if (unit.toLowerCase() === 'c') {
        // Celsius to Fahrenheit
        const fahrenheit = (value * 9/5) + 32;
        return \`\${value}°C = \${fahrenheit.toFixed(1)}°F\`;
    } else if (unit.toLowerCase() === 'f') {
        // Fahrenheit to Celsius
        const celsius = (value - 32) * 5/9;
        return \`\${value}°F = \${celsius.toFixed(1)}°C\`;
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Test cases
console.log(convertTemperature(0, 'C'));    // 0°C = 32.0°F
console.log(convertTemperature(100, 'C'));  // 100°C = 212.0°F
console.log(convertTemperature(32, 'F'));   // 32°F = 0.0°C
console.log(convertTemperature(212, 'F'));  // 212°F = 100.0°C</code></pre>
            </div>
          </div>
        </div>
        
        <div class="comparison-table">
          <h3>📊 Function Types Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Function Type</th>
                <th>Hoisting</th>
                <th>this Binding</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Function Declaration</td>
                <td>✅ Yes</td>
                <td>Own <code>this</code></td>
                <td>Main functions, reusable code</td>
              </tr>
              <tr>
                <td>Function Expression</td>
                <td>❌ No</td>
                <td>Own <code>this</code></td>
                <td>Callbacks, anonymous functions</td>
              </tr>
              <tr>
                <td>Arrow Function</td>
                <td>❌ No</td>
                <td>Lexical <code>this</code></td>
                <td>Short functions, callbacks, array methods</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="student-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Function Best Practices</h4>
            <ul>
              <li>Use descriptive function names that indicate what they do</li>
              <li>Keep functions small and focused on a single task</li>
              <li>Use default parameters instead of checking for undefined</li>
              <li>Avoid side effects - prefer pure functions when possible</li>
              <li>Document complex functions with JSDoc comments</li>
              <li>Use arrow functions for callbacks and array methods</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Functions Examples',
        code: `// ========== Function Declaration Examples ==========
console.log("=== Function Declaration Examples ===");

// Example 1: Calculator functions
console.log("\\n🧮 Calculator Functions:");
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

function calculator(operation, a, b) {
    switch(operation) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return "Invalid operation";
    }
}

console.log(\`10 + 5 = \${calculator('+', 10, 5)}\`);
console.log(\`10 - 5 = \${calculator('-', 10, 5)}\`);
console.log(\`10 * 5 = \${calculator('*', 10, 5)}\`);
console.log(\`10 / 5 = \${calculator('/', 10, 5)}\`);
console.log(\`10 / 0 = \${calculator('/', 10, 0)}\`);

// Example 2: String manipulation functions
console.log("\\n🔤 String Manipulation Functions:");
function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const testString = "Hello World";
console.log(\`Original: "\${testString}"\`);
console.log(\`Reversed: "\${reverseString(testString)}"\`);
console.log(\`Capitalized: "\${capitalizeFirst(testString)}"\`);
console.log(\`Vowel count: \${countVowels(testString)}\`);

// ========== Function Expression Examples ==========
console.log("\\n\\n=== Function Expression Examples ===");

// Example 1: Array processing
console.log("\\n📊 Array Processing:");
const processArray = function(arr, operation) {
    const result = [];
    
    for (let item of arr) {
        result.push(operation(item));
    }
    
    return result;
};

const numbers = [1, 2, 3, 4, 5];

const double = function(x) { return x * 2; };
const square = function(x) { return x * x; };
const isEven = function(x) { return x % 2 === 0; };

console.log("Original array:", numbers);
console.log("Doubled:", processArray(numbers, double));
console.log("Squared:", processArray(numbers, square));
console.log("Even check:", processArray(numbers, isEven));

// Example 2: Callback pattern
console.log("\\n📞 Callback Pattern:");
function fetchData(url, onSuccess, onError) {
    console.log(\`Fetching data from \${url}...\`);
    
    // Simulate API call
    const success = Math.random() > 0.3;
    
    setTimeout(() => {
        if (success) {
            const data = { id: 1, name: "Sample Data", value: 42 };
            onSuccess(data);
        } else {
            onError("Failed to fetch data");
        }
    }, 1000);
}

const handleSuccess = function(data) {
    console.log("✅ Data received:", data);
};

const handleError = function(error) {
    console.log("❌ Error:", error);
};

fetchData("https://api.example.com/data", handleSuccess, handleError);

// ========== Arrow Function Examples ==========
console.log("\\n\\n=== Arrow Function Examples ===");

// Example 1: Modern array methods
console.log("\\n🎯 Modern Array Methods:");
const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 5 },
    { name: "Mouse", price: 25, category: "Electronics", stock: 20 },
    { name: "Book", price: 15, category: "Books", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 10 },
    { name: "Headphones", price: 99, category: "Electronics", stock: 15 }
];

// Filter electronics products
const electronics = products.filter(product => product.category === "Electronics");
console.log("📱 Electronics:", electronics);

// Map to get prices with tax
const pricesWithTax = products.map(product => ({
    name: product.name,
    priceWithTax: product.price * 1.08 // 8% tax
}));
console.log("💰 Prices with tax:", pricesWithTax);

// Reduce to get total value
const totalValue = products.reduce(
    (total, product) => total + (product.price * product.stock), 
    0
);
console.log(\`📦 Total inventory value: $\${totalValue}\`);

// Find expensive products
const expensiveProducts = products.filter(product => product.price > 100);
console.log("💎 Expensive products (>$100):", expensiveProducts);

// Example 2: Short utility functions
console.log("\\n⚡ Short Utility Functions:");
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error",
    power: (base, exponent) => base ** exponent,
    sqrt: x => Math.sqrt(x),
    abs: x => Math.abs(x)
};

console.log("Operations object:", operations);
console.log(\`add(10, 5) = \${operations.add(10, 5)}\`);
console.log(\`power(2, 3) = \${operations.power(2, 3)}\`);
console.log(\`sqrt(16) = \${operations.sqrt(16)}\`);

// ========== Parameters & Arguments Examples ==========
console.log("\\n\\n=== Parameters & Arguments Examples ===");

// Example 1: Flexible function with multiple parameter types
console.log("\\n🎛️ Flexible Function Parameters:");
function createProfile(name, options = {}) {
    const defaults = {
        age: 25,
        city: "Unknown",
        profession: "Not specified",
        isPremium: false,
        hobbies: []
    };
    
    const profile = {
        name,
        ...defaults,
        ...options,
        createdAt: new Date().toISOString(),
        id: Math.random().toString(36).substr(2, 9)
    };
    
    return profile;
}

// Different ways to call the function
console.log("Minimal profile:", createProfile("Alice"));
console.log("\\nDetailed profile:", createProfile("Bob", {
    age: 30,
    city: "New York",
    profession: "Developer",
    isPremium: true,
    hobbies: ["coding", "gaming", "reading"]
}));

// Example 2: Rest parameters and spread operator
console.log("\\n🌀 Rest Parameters & Spread Operator:");
function mergeObjects(...objects) {
    return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

console.log("Merged objects:", mergeObjects(obj1, obj2, obj3));

// Spread in function calls
function logItems(...items) {
    console.log(\`Total items: \${items.length}\`);
    items.forEach((item, index) => {
        console.log(\`  \${index + 1}. \${item}\`);
    });
}

const shoppingList = ["Milk", "Eggs", "Bread", "Butter"];
logItems(...shoppingList);

// ========== Return Statement Examples ==========
console.log("\\n\\n=== Return Statement Examples ===");

// Example 1: Complex return patterns
console.log("\\n🏗️ Complex Return Patterns:");
function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return {
            error: "Invalid input",
            message: "Please provide a non-empty array"
        };
    }
    
    const stats = {
        length: arr.length,
        sum: arr.reduce((a, b) => a + b, 0),
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        evenCount: arr.filter(n => n % 2 === 0).length,
        oddCount: arr.filter(n => n % 2 !== 0).length,
        sorted: [...arr].sort((a, b) => a - b),
        reversed: [...arr].reverse()
    };
    
    // Add derived properties
    stats.range = stats.max - stats.min;
    stats.isEmpty = arr.length === 0;
    stats.hasDuplicates = new Set(arr).size !== arr.length;
    
    return stats;
}

const data = [10, 5, 20, 15, 25, 10, 30];
const analysis = analyzeArray(data);
console.log("Array analysis:", analysis);

// Example 2: Function returning another function (closure)
console.log("\\n🔒 Function Returning Function (Closure):");
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => {
            count = initialValue;
            return count;
        },
        setValue: (newValue) => {
            count = newValue;
            return count;
        }
    };
}

const counter1 = createCounter(10);
console.log("Counter 1:");
console.log(\`Initial: \${counter1.getValue()}\`);
console.log(\`After increment: \${counter1.increment()}\`);
console.log(\`After another increment: \${counter1.increment()}\`);
console.log(\`After reset: \${counter1.reset()}\`);

const counter2 = createCounter();
console.log("\\nCounter 2 (starts at 0):");
console.log(\`Value: \${counter2.getValue()}\`);
console.log(\`After decrement: \${counter2.decrement()}\`);

// ========== IIFE Examples ==========
console.log("\\n\\n=== IIFE Examples ===");

// Example 1: Module pattern
console.log("\\n📦 Module Pattern with IIFE:");
const userModule = (function() {
    // Private variables
    let users = [];
    let nextId = 1;
    
    // Private function
    function generateId() {
        return nextId++;
    }
    
    // Public API
    return {
        addUser: function(name, email) {
            const user = {
                id: generateId(),
                name,
                email,
                createdAt: new Date().toISOString(),
                isActive: true
            };
            users.push(user);
            return user;
        },
        
        getUser: function(id) {
            return users.find(user => user.id === id);
        },
        
        getAllUsers: function() {
            return [...users]; // Return copy
        },
        
        updateUser: function(id, updates) {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                users[userIndex] = { ...users[userIndex], ...updates };
                return users[userIndex];
            }
            return null;
        },
        
        deleteUser: function(id) {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                return users.splice(userIndex, 1)[0];
            }
            return null;
        },
        
        getUserCount: function() {
            return users.length;
        },
        
        // Additional methods
        findUserByEmail: function(email) {
            return users.find(user => user.email === email);
        },
        
        getActiveUsers: function() {
            return users.filter(user => user.isActive);
        }
    };
})();

// Using the module
userModule.addUser("Alice", "alice@example.com");
userModule.addUser("Bob", "bob@example.com");
userModule.addUser("Charlie", "charlie@example.com");

console.log("All users:", userModule.getAllUsers());
console.log("User count:", userModule.getUserCount());
console.log("Active users:", userModule.getActiveUsers());

// Update a user
userModule.updateUser(1, { name: "Alice Smith" });
console.log("\\nAfter update:", userModule.getUser(1));

// Example 2: Configuration with IIFE
console.log("\\n⚙️ Configuration with IIFE:");
const appConfig = (function() {
    const config = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retryAttempts: 3,
        logging: {
            enabled: true,
            level: "info"
        },
        features: {
            darkMode: true,
            notifications: false,
            analytics: true
        }
    };
    
    return {
        get: function(key) {
            const keys = key.split('.');
            let value = config;
            
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    return undefined;
                }
            }
            
            return value;
        },
        
        set: function(key, value) {
            const keys = key.split('.');
            let current = config;
            
            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }
            
            current[keys[keys.length - 1]] = value;
            return true;
        },
        
        getAll: function() {
            return JSON.parse(JSON.stringify(config)); // Deep copy
        }
    };
})();

console.log("API URL:", appConfig.get("apiUrl"));
console.log("Logging level:", appConfig.get("logging.level"));
console.log("Dark mode feature:", appConfig.get("features.darkMode"));

// Update configuration
appConfig.set("timeout", 10000);
appConfig.set("features.notifications", true);
console.log("\\nUpdated config:", appConfig.getAll());`,
        explanation: 'These examples demonstrate various aspects of JavaScript functions, from basic declarations to advanced patterns like IIFE and closures.',
        preview: '<div class="preview-demo"><h3 style="color: #10b981">Functions Preview</h3><p>Try calling different functions with various parameters to see how they work!</p><div id="functionOutput" class="result-box">Function results will appear here</div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
      { title: 'JavaScript.info: Functions', url: 'https://javascript.info/function-basics' },
      { title: 'Arrow Functions Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' },
      { title: 'IIFE Pattern', url: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE' }
    ],
    prerequisites: ['js-loops'],
    nextTopics: ['js-scope']
  },
  {
    id: 'js-scope',
    title: 'Scope & Hoisting',
    icon: <Target />,
    difficulty: 'intermediate',
    estimatedTime: 15,
    category: 'javascript',
    order: 7,
    sections: [
      'Global Scope',
      'Function Scope',
      'Block Scope',
      'Hoisting',
      'Temporal Dead Zone',
      'Lexical Scope',
      'Closures'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">🎯</div>
          <h1>Scope & Hoisting</h1>
          <p class="concept-tagline">Understanding Variable Visibility and Declaration Behavior</p>
        </div>
        
        <div class="scope-3d-visual">
          <div class="scope-layers">
            <div class="scope-layer global">
              <div class="layer-label">🌍 Global Scope</div>
              <div class="layer-content">Accessible everywhere</div>
            </div>
            <div class="scope-layer function">
              <div class="layer-label">🏠 Function Scope</div>
              <div class="layer-content">Accessible within function</div>
            </div>
            <div class="scope-layer block">
              <div class="layer-label">📦 Block Scope</div>
              <div class="layer-content">Accessible within block {}</div>
            </div>
          </div>
        </div>
        
        <h2>🌍 Global Scope</h2>
        <p>Variables declared outside any function or block have global scope.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Global variable
const PI = 3.14159;
let globalCounter = 0;

function incrementCounter() {
    // Can access global variable
    globalCounter++;
    console.log(\`Counter inside function: \${globalCounter}\`);
}

function showPI() {
    // Can access global constant
    console.log(\`PI value: \${PI}\`);
}

incrementCounter(); // Counter inside function: 1
incrementCounter(); // Counter inside function: 2
showPI();           // PI value: 3.14159

console.log(\`Counter outside: \${globalCounter}\`); // Counter outside: 2

// Problem: Global namespace pollution
var oldGlobal = "I'm global"; // Avoid using var
console.log(oldGlobal); // Accessible everywhere

// In browser, global scope is window object
// window.globalCounter would work in browser</code></pre>
        </div>
        
        <h2>🏠 Function Scope</h2>
        <p>Variables declared inside a function are only accessible within that function.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>function createCounter() {
    // Function-scoped variable
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

// count is not accessible here
// console.log(count); // ReferenceError: count is not defined

function calculateArea(radius) {
    // Function-scoped variables
    const PI = 3.14159;
    let area = PI * radius * radius;
    
    console.log(\`Area calculated: \${area}\`);
    return area;
}

const circleArea = calculateArea(5);
// PI and area are not accessible here

// Each function call has its own scope
function processUser(name) {
    let greeting = \`Hello, \${name}!\`;
    console.log(greeting);
    
    function displayAge(age) {
        // Nested function scope
        let ageMessage = \`\${name} is \${age} years old\`;
        console.log(ageMessage);
    }
    
    displayAge(25);
    // ageMessage is not accessible here
}

processUser("Alice");</code></pre>
        </div>
        
        <h2>📦 Block Scope (ES6+)</h2>
        <p><code>let</code> and <code>const</code> have block scope (inside {}). <code>var</code> does not.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Block scope with let and const
if (true) {
    let blockScoped = "I'm block scoped";
    const blockConstant = "I'm also block scoped";
    var functionScoped = "I'm function scoped (or global)";
    
    console.log(blockScoped);    // Works
    console.log(blockConstant);  // Works
    console.log(functionScoped); // Works
}

// console.log(blockScoped);    // ReferenceError
// console.log(blockConstant);  // ReferenceError
console.log(functionScoped);    // Works - var leaked!

// Loop with block scope
for (let i = 0; i < 3; i++) {
    // Each iteration has its own i
    setTimeout(() => {
        console.log(\`let i = \${i}\`);
    }, 100);
}
// Output: 0, 1, 2

for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(\`var j = \${j}\`);
    }, 100);
}
// Output: 3, 3, 3 (because var is function-scoped)

// Block scope in switch
let direction = "north";
let distance;

switch(direction) {
    case "north": {
        let x = 0;
        let y = 1;
        distance = Math.sqrt(x*x + y*y);
        break;
    }
    case "south": {
        let x = 0;
        let y = -1;
        distance = Math.sqrt(x*x + y*y);
        break;
    }
}
// x and y are not accessible here</code></pre>
        </div>
        
        <h2>📈 Hoisting</h2>
        <p>JavaScript moves declarations to the top of their scope during compilation.</p>
        
        <div class="hoisting-section">
          <div class="hoisting-types">
            <div class="type-card">
              <h3>Variable Hoisting</h3>
              <pre><code>// What you write:
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// How JavaScript sees it:
var x; // Declaration hoisted
console.log(x); // undefined
x = 5; // Assignment stays
console.log(x); // 5</code></pre>
            </div>
            
            <div class="type-card">
              <h3>Function Hoisting</h3>
              <pre><code>// Function declarations are fully hoisted
sayHello(); // "Hello!"

function sayHello() {
    console.log("Hello!");
}

// Function expressions are NOT hoisted
// sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};

sayHi(); // "Hi!"</code></pre>
            </div>
            
            <div class="type-card">
              <h3>let/const Hoisting</h3>
              <pre><code>// let and const are hoisted but not initialized
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;</code></pre>
            </div>
          </div>
        </div>
        
        <div class="example-section">
          <h3>More Hoisting Examples:</h3>
          <pre><code>// Complex hoisting example
console.log(a);     // undefined (var hoisted)
// console.log(b); // ReferenceError (TDZ)
// console.log(c); // ReferenceError (TDZ)

var a = 1;
let b = 2;
const c = 3;

foo(); // "foo called"
// bar(); // TypeError: bar is not a function

function foo() {
    console.log("foo called");
}

var bar = function() {
    console.log("bar called");
};

bar(); // "bar called"

// Hoisting in different scopes
function testHoisting() {
    console.log(inner); // undefined (var hoisted to function top)
    
    if (true) {
        var inner = "I'm hoisted";
        let blockVar = "I'm not hoisted out of block";
    }
    
    console.log(inner);    // "I'm hoisted"
    // console.log(blockVar); // ReferenceError
}

testHoisting();</code></pre>
        </div>
        
        <h2>⏳ Temporal Dead Zone (TDZ)</h2>
        <p>The TDZ is the period between entering scope and variable declaration where the variable cannot be accessed.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// TDZ for let
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "I'm declared with let";

// TDZ for const
// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = "I'm declared with const";

// No TDZ for var
console.log(myVar); // undefined (not an error)
var myVar = "I'm declared with var";

// TDZ in different scopes
function tdzExample() {
    // Start of function scope - TDZ begins for x
    // console.log(x); // ReferenceError
    
    let x = 10; // TDZ ends
    console.log(x); // 10
}

tdzExample();

// TDZ with blocks
{
    // TDZ for blockVar starts
    // console.log(blockVar); // ReferenceError
    
    let blockVar = "in block";
    console.log(blockVar); // "in block"
    // TDZ ends
}</code></pre>
        </div>
        
        <h2>🔗 Lexical Scope (Static Scope)</h2>
        <p>Functions can access variables from their outer (parent) scopes.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Lexical scope example
let globalVar = "I'm global";

function outer() {
    let outerVar = "I'm in outer";
    
    function inner() {
        let innerVar = "I'm in inner";
        
        // Can access all three variables
        console.log(globalVar); // "I'm global"
        console.log(outerVar);  // "I'm in outer"
        console.log(innerVar);  // "I'm in inner"
    }
    
    inner();
    
    // Can access outerVar and globalVar
    console.log(globalVar); // "I'm global"
    console.log(outerVar);  // "I'm in outer"
    // console.log(innerVar); // ReferenceError
}

outer();

// console.log(outerVar); // ReferenceError
// console.log(innerVar); // ReferenceError

// Lexical scope chain
const globalLevel = "global";

function levelOne() {
    const levelOneVar = "level one";
    
    function levelTwo() {
        const levelTwoVar = "level two";
        
        function levelThree() {
            const levelThreeVar = "level three";
            
            // Can access all levels
            console.log(globalLevel);
            console.log(levelOneVar);
            console.log(levelTwoVar);
            console.log(levelThreeVar);
        }
        
        levelThree();
    }
    
    levelTwo();
}

levelOne();</code></pre>
        </div>
        
        <h2>🔒 Closures</h2>
        <p>A closure is a function that retains access to its lexical scope even when executed outside that scope.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic closure
function createGreeter(greeting) {
    // greeting is captured in closure
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHi("Bob"));      // "Hi, Bob!"

// greeting is still accessible to the returned functions
// even though createGreeter has finished executing

// Private variables with closure
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return \`Deposited $\${amount}. New balance: $\${balance}\`;
        },
        
        withdraw: function(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return \`Withdrew $\${amount}. New balance: $\${balance}\`;
        },
        
        getBalance: function() {
            return \`Current balance: $\${balance}\`;
        }
    };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.getBalance());   // "Current balance: $1000"
console.log(myAccount.deposit(500));   // "Deposited $500. New balance: $1500"
console.log(myAccount.withdraw(200));  // "Withdrew $200. New balance: $1300"

// balance is private - cannot be accessed directly
// console.log(myAccount.balance); // undefined

// Closure in loops (common pitfall)
console.log("\\nClosure in loops:");
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(\`var i = \${i}\`);
    }, 100);
}
// Output: 3, 3, 3 (all closures share the same i)

// Solution 1: Use let (block scope)
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(\`let j = \${j}\`);
    }, 100);
}
// Output: 0, 1, 2

// Solution 2: IIFE to create new scope
for (var k = 0; k < 3; k++) {
    (function(index) {
        setTimeout(function() {
            console.log(\`IIFE k = \${index}\`);
        }, 100);
    })(k);
}
// Output: 0, 1, 2</code></pre>
        </div>
        
        <h2>🎮 Practice Problems</h2>
        <div class="practice-section">
          <div class="problem">
            <h3>Problem 1: Scope Chain Analysis</h3>
            <p>What will be logged and why?</p>
            <pre><code>let a = 1;

function outer() {
    let a = 2;
    
    function inner() {
        console.log(a);
    }
    
    return inner;
}

const innerFunc = outer();
innerFunc();</code></pre>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <p>Output: <code>2</code></p>
              <p><strong>Explanation:</strong> The inner function forms a closure that captures the <code>a</code> variable from its lexical scope (the <code>outer</code> function). When <code>innerFunc</code> is called, it logs the value of <code>a</code> from the closure, which is 2, not the global <code>a</code> which is 1.</p>
            </div>
          </div>
          
          <div class="problem">
            <h3>Problem 2: Hoisting Challenge</h3>
            <p>What will this code output and why?</p>
            <pre><code>console.log(x);
var x = 10;

console.log(y);
let y = 20;

foo();

function foo() {
    console.log("foo");
}

bar();
var bar = function() {
    console.log("bar");
};</code></pre>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <p>Output:</p>
              <pre><code>undefined
ReferenceError: Cannot access 'y' before initialization
foo
TypeError: bar is not a function</code></pre>
              <p><strong>Explanation:</strong></p>
              <ol>
                <li><code>var x</code> is hoisted and initialized with <code>undefined</code></li>
                <li><code>let y</code> is hoisted but in TDZ, causing ReferenceError</li>
                <li><code>foo()</code> function declaration is fully hoisted</li>
                <li><code>bar</code> variable is hoisted as <code>undefined</code>, calling <code>undefined()</code> causes TypeError</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div class="comparison-table">
          <h3>📊 Scope & Hoisting Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Scope</th>
                <th>Hoisting</th>
                <th>TDZ</th>
                <th>Re-declaration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>var</code></td>
                <td>Function or Global</td>
                <td>✅ Yes, initialized as <code>undefined</code></td>
                <td>❌ No</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td><code>let</code></td>
                <td>Block</td>
                <td>✅ Yes, but not initialized</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><code>const</code></td>
                <td>Block</td>
                <td>✅ Yes, but not initialized</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Function Declaration</td>
                <td>Depends on where declared</td>
                <td>✅ Yes, fully hoisted</td>
                <td>❌ No</td>
                <td>Depends</td>
              </tr>
              <tr>
                <td>Function Expression</td>
                <td>Depends on variable</td>
                <td>❌ No (variable is hoisted)</td>
                <td>Depends on variable</td>
                <td>Depends</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="student-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Scope & Hoisting Best Practices</h4>
            <ul>
              <li>Use <code>const</code> by default, <code>let</code> when reassignment is needed</li>
              <li>Avoid <code>var</code> in modern JavaScript</li>
              <li>Declare variables at the top of their scope</li>
              <li>Use block scope (<code>{}</code>) to limit variable visibility</li>
              <li>Be aware of closure memory implications</li>
              <li>Use IIFE to avoid polluting global scope</li>
              <li>Understand TDZ to avoid ReferenceErrors</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Scope & Hoisting Examples',
        code: `// ========== Global Scope Examples ==========
console.log("=== Global Scope Examples ===");

// Global variables
const COMPANY_NAME = "TechCorp";
let employeeCount = 0;
var legacyGlobal = "Old way"; // Avoid this

function hireEmployee() {
    employeeCount++;
    console.log(\`Hired! Total employees: \${employeeCount}\`);
}

function fireEmployee() {
    if (employeeCount > 0) {
        employeeCount--;
        console.log(\`Fired! Total employees: \${employeeCount}\`);
    }
}

// Accessing global variables
console.log(\`Welcome to \${COMPANY_NAME}\`);
console.log(\`Initial employee count: \${employeeCount}\`);

hireEmployee(); // Hired! Total employees: 1
hireEmployee(); // Hired! Total employees: 2
fireEmployee();  // Fired! Total employees: 1

console.log(\`Final employee count: \${employeeCount}\`);

// Global function
function globalFunction() {
    console.log("I'm accessible everywhere!");
}

globalFunction();

// ========== Function Scope Examples ==========
console.log("\\n\\n=== Function Scope Examples ===");

// Each function has its own scope
function createCounter() {
    let count = 0; // Function-scoped
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA.increment()); // 1
console.log("Counter A:", counterA.increment()); // 2
console.log("Counter B:", counterB.increment()); // 1 (separate scope)
console.log("Counter A count:", counterA.getCount()); // 2
console.log("Counter B count:", counterB.getCount()); // 1

// Nested function scopes
function outerFunction() {
    const outerVar = "I'm in outer";
    
    function middleFunction() {
        const middleVar = "I'm in middle";
        
        function innerFunction() {
            const innerVar = "I'm in inner";
            
            // Can access all three
            console.log(\`Inner accessing: \${outerVar}, \${middleVar}, \${innerVar}\`);
        }
        
        innerFunction();
        // console.log(innerVar); // Error - innerVar not accessible here
    }
    
    middleFunction();
    // console.log(middleVar); // Error - middleVar not accessible here
    // console.log(innerVar); // Error - innerVar not accessible here
}

outerFunction();

// ========== Block Scope Examples ==========
console.log("\\n\\n=== Block Scope Examples ===");

// Demonstrating block scope with let/const vs var
function demonstrateBlockScope() {
    console.log("\\nBefore block:");
    console.log("varBefore (hoisted):", typeof varBefore); // undefined
    // console.log(letBefore); // ReferenceError
    // console.log(constBefore); // ReferenceError
    
    {
        // Block scope
        var varInBlock = "I'm var in block";
        let letInBlock = "I'm let in block";
        const constInBlock = "I'm const in block";
        
        console.log("\\nInside block:");
        console.log("varInBlock:", varInBlock);
        console.log("letInBlock:", letInBlock);
        console.log("constInBlock:", constInBlock);
    }
    
    console.log("\\nAfter block:");
    console.log("varInBlock (leaked):", varInBlock);
    // console.log(letInBlock); // ReferenceError
    // console.log(constInBlock); // ReferenceError
    
    var varBefore = "I'm var declared later";
    let letBefore = "I'm let declared later";
    const constBefore = "I'm const declared later";
}

demonstrateBlockScope();

// Block scope in loops
console.log("\\nLoop scope comparison:");
console.log("Using var (function scope):");
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(\`var i = \${i}\`);
    }, 100);
}

setTimeout(() => {
    console.log("\\nUsing let (block scope):");
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log(\`let j = \${j}\`);
        }, 100);
    }
}, 500);

// ========== Hoisting Examples ==========
console.log("\\n\\n=== Hoisting Examples ===");

// Variable hoisting demonstration
console.log("\\nVariable hoisting:");
console.log("a (var):", typeof a); // undefined
// console.log("b (let):", b); // ReferenceError
// console.log("c (const):", c); // ReferenceError

var a = "I'm var";
let b = "I'm let";
const c = "I'm const";

console.log("After declaration:");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Function hoisting
console.log("\\nFunction hoisting:");
// Function declaration - fully hoisted
hoistedFunction(); // Works

function hoistedFunction() {
    console.log("I'm fully hoisted!");
}

// Function expression - not hoisted
// notHoisted(); // TypeError

var notHoisted = function() {
    console.log("I'm not hoisted as a function!");
};

notHoisted(); // Works

// Complex hoisting scenario
console.log("\\nComplex hoisting:");
var x = 10;

function test() {
    console.log("x in test (before declaration):", x); // undefined, not 10!
    var x = 20;
    console.log("x in test (after declaration):", x); // 20
}

test();
console.log("x in global:", x); // 10

// ========== Temporal Dead Zone Examples ==========
console.log("\\n\\n=== Temporal Dead Zone Examples ===");

function demonstrateTDZ() {
    console.log("\\nEntering function scope");
    
    // TDZ for letVariable starts
    // console.log(letVariable); // ReferenceError
    
    console.log("varVariable (hoisted):", typeof varVariable); // undefined
    
    {
        console.log("\\nEntering block scope");
        // TDZ for blockLet starts
        // console.log(blockLet); // ReferenceError
        
        let blockLet = "I'm block let";
        const blockConst = "I'm block const";
        
        console.log("Inside block:");
        console.log("blockLet:", blockLet);
        console.log("blockConst:", blockConst);
        
        // TDZ ends for block variables
    }
    
    let letVariable = "I'm function let";
    const constVariable = "I'm function const";
    var varVariable = "I'm function var";
    
    console.log("\\nAfter declarations:");
    console.log("letVariable:", letVariable);
    console.log("constVariable:", constVariable);
    console.log("varVariable:", varVariable);
    
    // TDZ ends for function variables
}

demonstrateTDZ();

// ========== Lexical Scope Examples ==========
console.log("\\n\\n=== Lexical Scope Examples ===");

// Lexical scope chain
const globalLevel = 0;

function level1() {
    const level1Var = 1;
    console.log("Level 1 - can see:", globalLevel, level1Var);
    
    function level2() {
        const level2Var = 2;
        console.log("Level 2 - can see:", globalLevel, level1Var, level2Var);
        
        function level3() {
            const level3Var = 3;
            console.log("Level 3 - can see:", globalLevel, level1Var, level2Var, level3Var);
        }
        
        level3();
    }
    
    level2();
}

level1();

// Shadowing variables
console.log("\\nVariable shadowing:");
const shadowVar = "global";

function shadowExample() {
    const shadowVar = "function"; // Shadows global variable
    
    function inner() {
        const shadowVar = "inner"; // Shadows function variable
        console.log("Inner sees:", shadowVar); // "inner"
    }
    
    inner();
    console.log("Function sees:", shadowVar); // "function"
}

shadowExample();
console.log("Global sees:", shadowVar); // "global"

// ========== Closures Examples ==========
console.log("\\n\\n=== Closures Examples ===");

// Practical closure: Cache/memoization
console.log("\\nMemoization with closure:");
function createMemoizedFunction(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log(\`Cache hit for args: \${key}\`);
            return cache.get(key);
        }
        
        console.log(\`Cache miss for args: \${key}\`);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Expensive calculation function
function expensiveCalculation(n) {
    console.log(\`Calculating for \${n}...\`);
    // Simulate expensive calculation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += Math.random();
    }
    return result;
}

const memoizedCalc = createMemoizedFunction(expensiveCalculation);

console.log("First call (will calculate):");
console.log(memoizedCalc(5));

console.log("\\nSecond call with same input (will use cache):");
console.log(memoizedCalc(5));

console.log("\\nThird call with different input (will calculate again):");
console.log(memoizedCalc(10));

// Closure for event handlers
console.log("\\n\\nClosure in event handlers:");
function createButtonHandler(buttonId) {
    let clickCount = 0;
    
    return function() {
        clickCount++;
        console.log(\`Button \${buttonId} clicked \${clickCount} times\`);
        
        // Each button handler has its own clickCount
        return clickCount;
    };
}

const button1Handler = createButtonHandler("btn1");
const button2Handler = createButtonHandler("btn2");

// Simulate button clicks
console.log("Simulating button clicks:");
button1Handler(); // Button btn1 clicked 1 times
button1Handler(); // Button btn1 clicked 2 times
button2Handler(); // Button btn2 clicked 1 times
button1Handler(); // Button btn1 clicked 3 times
button2Handler(); // Button btn2 clicked 2 times

// Module pattern with closure
console.log("\\n\\nModule pattern:");
const userModule = (function() {
    // Private variables
    let users = [];
    let nextId = 1;
    
    // Private function
    function generateUserEmail(name) {
        return \`\${name.toLowerCase().replace(/\\s+/g, '.')}@company.com\`;
    }
    
    // Public API
    return {
        addUser: function(name, age) {
            const user = {
                id: nextId++,
                name,
                age,
                email: generateUserEmail(name),
                joinedAt: new Date().toISOString()
            };
            users.push(user);
            return user;
        },
        
        getUser: function(id) {
            return users.find(user => user.id === id);
        },
        
        getAllUsers: function() {
            return [...users]; // Return copy
        },
        
        removeUser: function(id) {
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                return users.splice(index, 1)[0];
            }
            return null;
        },
        
        getUserCount: function() {
            return users.length;
        },
        
        // Cannot access users or generateUserEmail directly
        // These are private due to closure
    };
})();

// Using the module
userModule.addUser("John Doe", 30);
userModule.addUser("Jane Smith", 25);
userModule.addUser("Bob Johnson", 35);

console.log("All users:", userModule.getAllUsers());
console.log("User count:", userModule.getUserCount());

const user = userModule.getUser(1);
console.log("User with ID 1:", user);

userModule.removeUser(2);
console.log("After removing user 2:", userModule.getAllUsers());`,
        explanation: 'These examples demonstrate various scope concepts, hoisting behavior, TDZ, and closures in JavaScript with practical applications.',
        preview: '<div class="preview-demo"><h3 style="color: #8b5cf6">Scope & Hoisting Preview</h3><p>Experiment with different variable declarations to see scope and hoisting in action!</p><div id="scopeOutput" class="result-box">Scope-related outputs will appear here</div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Scope', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope' },
      { title: 'MDN: Hoisting', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' },
      { title: 'JavaScript.info: Closures', url: 'https://javascript.info/closure' },
      { title: 'Temporal Dead Zone Explained', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz' }
    ],
    prerequisites: ['js-functions'],
    nextTopics: ['js-arrays']
  },
  {
    id: 'js-arrays',
    title: 'Arrays',
    icon: <List />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'javascript',
    order: 8,
    sections: [
      'Creating Arrays',
      'Array Methods',
      'Array Iteration',
      'map(), filter(), reduce()',
      'find(), some(), every()',
      'Array Destructuring',
      'Spread Operator with Arrays'
    ],
    content: `
      <div class="concept-box js-concept">
        <div class="concept-header">
          <div class="concept-icon">📋</div>
          <h1>JavaScript Arrays</h1>
          <p class="concept-tagline">Master Collection Management and Data Manipulation</p>
        </div>
        
        <div class="array-3d-visual">
          <div class="array-container">
            <div class="array-index">0</div>
            <div class="array-element">Apple</div>
            <div class="array-index">1</div>
            <div class="array-element">Banana</div>
            <div class="array-index">2</div>
            <div class="array-element">Cherry</div>
            <div class="array-index">3</div>
            <div class="array-element">Date</div>
            <div class="array-index">4</div>
            <div class="array-element">Elderberry</div>
          </div>
        </div>
        
        <h2>📝 Creating Arrays</h2>
        <p>Arrays are ordered collections of values that can hold any data type.</p>
        
        <div class="example-section">
          <h3>Different Ways to Create Arrays:</h3>
          <pre><code>// 1. Array literal (most common)
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["Hello", 42, true, null, { name: "John" }];
const empty = [];

// 2. Array constructor
const colors = new Array("Red", "Green", "Blue");
const sizedArray = new Array(5); // Creates array with 5 empty slots
const singleElement = new Array("Single"); // Creates ["Single"]

// 3. Array.of() - creates array from arguments
const arrayFromArgs = Array.of(1, 2, 3, 4, 5);
const single = Array.of(7); // Creates [7], not array with 7 empty slots

// 4. Array.from() - creates from array-like or iterable
const fromString = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
const fromSet = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
const fromArrayLike = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]

// 5. Using spread operator
const copiedArray = [...fruits];
const combined = [...fruits, ...colors];

console.log("Fruits:", fruits);
console.log("Colors:", colors);
console.log("From string:", fromString);
console.log("Copied array:", copiedArray);</code></pre>
        </div>
        
        <h2>🔧 Basic Array Methods</h2>
        <div class="methods-grid">
          <div class="method-card">
            <h3>📏 Length Property</h3>
            <pre><code>const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
arr.length = 3; // Truncates array
console.log(arr); // [1, 2, 3]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🔍 Access & Modify</h3>
            <pre><code>const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Orange"

fruits[1] = "Mango"; // Modify
console.log(fruits); // ["Apple", "Mango", "Orange"]

fruits[3] = "Grape"; // Add new
console.log(fruits); // ["Apple", "Mango", "Orange", "Grape"]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>➕ Add Elements</h3>
            <pre><code>const arr = [1, 2, 3];

// End of array
arr.push(4); // [1, 2, 3, 4]
arr.push(5, 6); // [1, 2, 3, 4, 5, 6]

// Beginning of array
arr.unshift(0); // [0, 1, 2, 3, 4, 5, 6]
arr.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3, 4, 5, 6]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>➖ Remove Elements</h3>
            <pre><code>const arr = [1, 2, 3, 4, 5];

// End of array
const last = arr.pop(); // Returns 5, arr = [1, 2, 3, 4]

// Beginning of array
const first = arr.shift(); // Returns 1, arr = [2, 3, 4]

// Any position
const removed = arr.splice(1, 1); // Removes at index 1
// arr = [2, 4], removed = [3]</code></pre>
          </div>
        </div>
        
        <h2>✂️ Array Manipulation Methods</h2>
        <div class="methods-grid">
          <div class="method-card">
            <h3>🔀 splice()</h3>
            <p>Add/remove elements at any position.</p>
            <pre><code>const arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
arr.splice(1, 2); // Returns [2, 3], arr = [1, 4, 5]

// Add elements at index 1
arr.splice(1, 0, 6, 7); // arr = [1, 6, 7, 4, 5]

// Replace elements
arr.splice(2, 2, 8, 9); // Returns [7, 4], arr = [1, 6, 8, 9, 5]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🔗 concat()</h3>
            <p>Merge arrays without modifying original.</p>
            <pre><code>const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = arr1.concat(arr2, arr3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Original arrays unchanged
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🔍 slice()</h3>
            <p>Extract portion without modifying original.</p>
            <pre><code>const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Extract from index 2 to 5 (5 not included)
const slice1 = arr.slice(2, 5); // [3, 4, 5]

// Extract from index 5 to end
const slice2 = arr.slice(5); // [6, 7, 8, 9, 10]

// Negative indices (from end)
const slice3 = arr.slice(-3); // [8, 9, 10]
const slice4 = arr.slice(2, -2); // [3, 4, 5, 6, 7, 8]

// Original unchanged
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🔁 reverse()</h3>
            <p>Reverse array order (mutates original).</p>
            <pre><code>const arr = [1, 2, 3, 4, 5];
arr.reverse(); // [5, 4, 3, 2, 1]

// To reverse without mutating
const original = [1, 2, 3, 4, 5];
const reversed = [...original].reverse();
// original = [1, 2, 3, 4, 5]
// reversed = [5, 4, 3, 2, 1]</code></pre>
          </div>
        </div>
        
        <h2>🔄 Array Iteration Methods</h2>
        <div class="methods-grid">
          <div class="method-card">
            <h3>📊 forEach()</h3>
            <p>Execute function for each element.</p>
            <pre><code>const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((number, index, array) => {
    console.log(\`Element \${index}: \${number}\`);
    sum += number;
});

console.log(\`Sum: \${sum}\`); // Sum: 15

// forEach with objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach(user => {
    console.log(\`\${user.name} is \${user.age} years old\`);
});</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🗺️ map()</h3>
            <p>Transform each element (returns new array).</p>
            <pre><code>const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// Convert numbers to strings
const strings = numbers.map(num => \`Number: \${num}\`);
// ["Number: 1", "Number: 2", ...]

// Extract properties
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const names = users.map(user => user.name);
// ["Alice", "Bob", "Charlie"]

const userCards = users.map(user => \`
    <div class="user-card">
        <h3>\${user.name}</h3>
        <p>ID: \${user.id}</p>
    </div>
\`);</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🎯 filter()</h3>
            <p>Select elements that pass a test.</p>
            <pre><code>const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6, 8, 10]

// Get numbers greater than 5
const greaterThan5 = numbers.filter(num => num > 5);
// [6, 7, 8, 9, 10]

// Filter objects
const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 300, inStock: true }
];

const inStockProducts = products.filter(product => product.inStock);
const affordableProducts = products.filter(product => product.price < 100);

// Complex filter
const filtered = products.filter(product => 
    product.inStock && product.price < 500
);</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🧮 reduce()</h3>
            <p>Reduce array to single value.</p>
            <pre><code>const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((total, current) => total + current, 0);
// 15

// Find maximum
const max = numbers.reduce((max, current) => 
    current > max ? current : max, numbers[0]
);
// 5

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
// { apple: 3, banana: 2, orange: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((flat, arr) => flat.concat(arr), []);
// [1, 2, 3, 4, 5, 6]</code></pre>
          </div>
        </div>
        
        <h2>🔎 Search & Test Methods</h2>
        <div class="methods-grid">
          <div class="method-card">
            <h3>🔍 find() & findIndex()</h3>
            <p>Find first element that matches condition.</p>
            <pre><code>const numbers = [5, 12, 8, 130, 44];

// Find first number > 10
const found = numbers.find(num => num > 10); // 12

// Find index of first number > 10
const foundIndex = numbers.findIndex(num => num > 10); // 1

// Find in array of objects
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(user => user.id === 2); // { id: 2, name: "Bob" }
const userIndex = users.findIndex(user => user.name === "Charlie"); // 2</code></pre>
          </div>
          
          <div class="method-card">
            <h3>✅ some() & every()</h3>
            <p>Test if some/all elements pass condition.</p>
            <pre><code>const numbers = [1, 2, 3, 4, 5];

// Check if any number is even
const hasEven = numbers.some(num => num % 2 === 0); // true

// Check if all numbers are positive
const allPositive = numbers.every(num => num > 0); // true

// Check if all numbers are greater than 3
const allGreaterThan3 = numbers.every(num => num > 3); // false

// Practical example
const formFields = [
    { name: "username", value: "john_doe", valid: true },
    { name: "email", value: "john@example.com", valid: true },
    { name: "password", value: "secret123", valid: false }
];

const allValid = formFields.every(field => field.valid); // false
const anyInvalid = formFields.some(field => !field.valid); // true</code></pre>
          </div>
          
          <div class="method-card">
            <h3>📌 includes()</h3>
            <p>Check if array contains a value.</p>
            <pre><code>const fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

// Case sensitive
console.log(fruits.includes("Apple"));  // false

// With starting index
const numbers = [1, 2, 3, 4, 5, 2];
console.log(numbers.includes(2));      // true
console.log(numbers.includes(2, 2));   // true (search from index 2)
console.log(numbers.includes(2, 5));   // false (search from index 5)

// For objects, includes checks reference equality
const objects = [{ id: 1 }, { id: 2 }];
console.log(objects.includes({ id: 1 })); // false (different reference)</code></pre>
          </div>
          
          <div class="method-card">
            <h3>🔢 indexOf() & lastIndexOf()</h3>
            <p>Find position of element in array.</p>
            <pre><code>const numbers = [1, 2, 3, 4, 2, 5, 2];

// First occurrence
console.log(numbers.indexOf(2));      // 1
console.log(numbers.indexOf(7));      // -1 (not found)

// From specific position
console.log(numbers.indexOf(2, 2));   // 4 (search from index 2)

// Last occurrence
console.log(numbers.lastIndexOf(2));  // 6
console.log(numbers.lastIndexOf(2, 3)); // 1 (search backwards from index 3)

// Strings work similarly
const fruits = ["apple", "banana", "orange", "apple"];
console.log(fruits.indexOf("apple"));     // 0
console.log(fruits.lastIndexOf("apple")); // 3</code></pre>
          </div>
        </div>
        
        <h2>🎁 Array Destructuring</h2>
        <p>Extract values from arrays into individual variables.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Basic destructuring
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // "Red"
console.log(secondColor); // "Green"
console.log(thirdColor);  // "Blue"

// Skip elements
const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers;
console.log(first, third, fifth); // 1 3 5

// Default values
const [a = 10, b = 20] = [1];
console.log(a, b); // 1 20

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Swap variables
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10

// Nested destructuring
const nested = [1, [2, 3], 4];
const [firstNum, [secondNum, thirdNum], fourthNum] = nested;
console.log(firstNum, secondNum, thirdNum, fourthNum); // 1 2 3 4

// Function parameters
function getUser() {
    return ["John", "Doe", 30, "john@example.com"];
}

const [firstName, lastName, age, email] = getUser();
console.log(\`\${firstName} \${lastName}, \${age}, \${email}\`);</code></pre>
        </div>
        
        <h2>🌀 Spread Operator with Arrays</h2>
        <p>The spread operator (<code>...</code>) expands arrays into individual elements.</p>
        
        <div class="example-section">
          <h3>Examples:</h3>
          <pre><code>// Copy array
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
console.log(original === copy); // false (different reference)

// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Add elements
const withStart = [0, ...arr1]; // [0, 1, 2, 3]
const withEnd = [...arr1, 4];   // [1, 2, 3, 4]
const withBoth = [0, ...arr1, 4]; // [0, 1, 2, 3, 4]

// Convert string to array
const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']

// Convert array-like to array
const nodeList = document.querySelectorAll('div'); // NodeList
const divArray = [...nodeList]; // Array

// Function arguments
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5
console.log(Math.min(...numbers)); // 1

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...[1, 2, 3])); // 6

// Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(duplicates)]; // [1, 2, 3, 4]</code></pre>
        </div>
        
        <h2>🎮 Practice Problems</h2>
        <div class="practice-section">
          <div class="problem">
            <h3>Problem 1: Array Statistics</h3>
            <p>Calculate statistics for an array of numbers.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>function calculateStatistics(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { error: "Invalid input" };
    }
    
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sorted = [...numbers].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    
    // Count frequencies
    const frequency = numbers.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {});
    
    const mode = Object.entries(frequency)
        .reduce((a, b) => a[1] > b[1] ? a : b)[0];
    
    return {
        count: numbers.length,
        sum,
        average: parseFloat(average.toFixed(2)),
        max,
        min,
        range: max - min,
        median,
        mode: parseInt(mode),
        frequency
    };
}

// Test
const testNumbers = [10, 5, 20, 15, 25, 10, 30];
console.log(calculateStatistics(testNumbers));</code></pre>
            </div>
          </div>
          
          <div class="problem">
            <h3>Problem 2: Array Manipulation Challenge</h3>
            <p>Perform various array operations on a dataset.</p>
            <button class="show-solution">Show Solution</button>
            <div class="solution">
              <pre><code>const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", stock: 10 },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", stock: 50 },
    { id: 3, name: "Desk", price: 250, category: "Furniture", stock: 5 },
    { id: 4, name: "Chair", price: 150, category: "Furniture", stock: 20 },
    { id: 5, name: "Monitor", price: 300, category: "Electronics", stock: 15 },
    { id: 6, name: "Keyboard", price: 75, category: "Electronics", stock: 30 }
];

// 1. Get all electronics
const electronics = products.filter(p => p.category === "Electronics");

// 2. Get product names only
const productNames = products.map(p => p.name);

// 3. Calculate total inventory value
const totalValue = products.reduce(
    (sum, p) => sum + (p.price * p.stock), 0
);

// 4. Find expensive products (> $200)
const expensiveProducts = products.filter(p => p.price > 200);

// 5. Sort by price (ascending)
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

// 6. Group by category
const groupedByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

// 7. Check if all products have stock
const allInStock = products.every(p => p.stock > 0);

// 8. Find product by ID
const findProduct = (id) => products.find(p => p.id === id);

console.log("Electronics:", electronics);
console.log("Product names:", productNames);
console.log("Total inventory value:", totalValue);
console.log("Expensive products:", expensiveProducts);
console.log("Grouped by category:", groupedByCategory);
console.log("All in stock:", allInStock);
console.log("Product with ID 3:", findProduct(3));</code></pre>
            </div>
          </div>
        </div>
        
        <div class="comparison-table">
          <h3>📊 Array Method Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Returns</th>
                <th>Mutates</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>push()</code></td>
                <td>New length</td>
                <td>✅ Yes</td>
                <td>Add to end</td>
                <td><code>arr.push(1)</code></td>
              </tr>
              <tr>
                <td><code>pop()</code></td>
                <td>Removed element</td>
                <td>✅ Yes</td>
                <td>Remove from end</td>
                <td><code>arr.pop()</code></td>
              </tr>
              <tr>
                <td><code>map()</code></td>
                <td>New array</td>
                <td>❌ No</td>
                <td>Transform each</td>
                <td><code>arr.map(x => x*2)</code></td>
              </tr>
              <tr>
                <td><code>filter()</code></td>
                <td>New array</td>
                <td>❌ No</td>
                <td>Select elements</td>
                <td><code>arr.filter(x => x>5)</code></td>
              </tr>
              <tr>
                <td><code>reduce()</code></td>
                <td>Single value</td>
                <td>❌ No</td>
                <td>Accumulate</td>
                <td><code>arr.reduce((a,b) => a+b)</code></td>
              </tr>
              <tr>
                <td><code>slice()</code></td>
                <td>New array</td>
                <td>❌ No</td>
                <td>Extract portion</td>
                <td><code>arr.slice(1,3)</code></td>
              </tr>
              <tr>
                <td><code>splice()</code></td>
                <td>Removed items</td>
                <td>✅ Yes</td>
                <td>Add/remove any</td>
                <td><code>arr.splice(1,2)</code></td>
              </tr>
              <tr>
                <td><code>concat()</code></td>
                <td>New array</td>
                <td>❌ No</td>
                <td>Merge arrays</td>
                <td><code>arr1.concat(arr2)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="student-tip">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>Array Best Practices</h4>
            <ul>
              <li>Use array methods (<code>map, filter, reduce</code>) instead of loops when possible</li>
              <li>Prefer non-mutating methods (<code>slice, concat, map</code>) to avoid side effects</li>
              <li>Use destructuring for cleaner variable assignment</li>
              <li>Use spread operator for array copying and merging</li>
              <li>Chain array methods for complex transformations</li>
              <li>Use <code>Array.isArray()</code> to check if value is an array</li>
              <li>Consider performance for large arrays (avoid nested loops)</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    examples: [
      {
        title: 'Complete Arrays Examples',
        code: `// ========== Creating and Basic Operations ==========
console.log("=== Creating and Basic Operations ===");

// Different ways to create arrays
console.log("\\n1. Different creation methods:");
const arrayLiteral = [1, 2, 3, 4, 5];
const arrayConstructor = new Array(1, 2, 3);
const arrayFrom = Array.from({ length: 5 }, (_, i) => i * 2);
const arrayOf = Array.of(7, 8, 9);

console.log("Literal:", arrayLiteral);
console.log("Constructor:", arrayConstructor);
console.log("From:", arrayFrom);
console.log("Of:", arrayOf);

// Basic operations
console.log("\\n2. Basic operations:");
const fruits = ["Apple", "Banana", "Orange"];

// Access
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modify
fruits[1] = "Mango";
console.log("After modification:", fruits);

// Add
fruits.push("Grape");
fruits.unshift("Strawberry");
console.log("After adding:", fruits);

// Remove
const lastFruit = fruits.pop();
const firstFruit = fruits.shift();
console.log("Removed:", firstFruit, "and", lastFruit);
console.log("After removal:", fruits);

// ========== Array Methods - Transformation ==========
console.log("\\n\\n=== Transformation Methods ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\\n1. map() - Transformations:");
const squared = numbers.map(n => n * n);
const doubled = numbers.map(n => n * 2);
const stringNumbers = numbers.map(n => \`Number \${n}\`);

console.log("Squared:", squared);
console.log("Doubled:", doubled);
console.log("Strings:", stringNumbers);

console.log("\\n2. filter() - Filtering:");
const evens = numbers.filter(n => n % 2 === 0);
const greaterThan5 = numbers.filter(n => n > 5);
const between3And8 = numbers.filter(n => n >= 3 && n <= 8);

console.log("Evens:", evens);
console.log("Greater than 5:", greaterThan5);
console.log("Between 3 and 8:", between3And8);

console.log("\\n3. reduce() - Aggregation:");
const sum = numbers.reduce((total, num) => total + num, 0);
const product = numbers.reduce((total, num) => total * num, 1);
const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Max:", max);

// Complex reduce example
console.log("\\n4. Complex reduce - Grouping:");
const people = [
    { name: "Alice", age: 25, department: "Engineering" },
    { name: "Bob", age: 30, department: "Marketing" },
    { name: "Charlie", age: 35, department: "Engineering" },
    { name: "Diana", age: 28, department: "Sales" },
    { name: "Eve", age: 32, department: "Marketing" }
];

const departmentStats = people.reduce((stats, person) => {
    const dept = person.department;
    
    if (!stats[dept]) {
        stats[dept] = {
            count: 0,
            totalAge: 0,
            names: []
        };
    }
    
    stats[dept].count++;
    stats[dept].totalAge += person.age;
    stats[dept].names.push(person.name);
    stats[dept].averageAge = stats[dept].totalAge / stats[dept].count;
    
    return stats;
}, {});

console.log("Department statistics:", departmentStats);

// ========== Array Methods - Searching ==========
console.log("\\n\\n=== Searching Methods ===");

const data = [10, 20, 30, 40, 50, 20, 30];

console.log("\\n1. Searching for values:");
console.log("Includes 30?", data.includes(30)); // true
console.log("Includes 100?", data.includes(100)); // false
console.log("Index of 20:", data.indexOf(20)); // 1
console.log("Last index of 20:", data.lastIndexOf(20)); // 5
console.log("Index of 30 from position 3:", data.indexOf(30, 3)); // 6

console.log("\\n2. find() and findIndex():");
const firstGreaterThan25 = data.find(num => num > 25);
const indexGreaterThan25 = data.findIndex(num => num > 25);
console.log("First > 25:", firstGreaterThan25); // 30
console.log("Index of first > 25:", indexGreaterThan25); // 2

console.log("\\n3. some() and every():");
const hasNumberGreaterThan40 = data.some(num => num > 40);
const allNumbersPositive = data.every(num => num > 0);
const allNumbersGreaterThan5 = data.every(num => num > 5);

console.log("Has number > 40?", hasNumberGreaterThan40); // true
console.log("All numbers positive?", allNumbersPositive); // true
console.log("All numbers > 5?", allNumbersGreaterThan5); // true

// ========== Array Methods - Manipulation ==========
console.log("\\n\\n=== Manipulation Methods ===");

console.log("\\n1. slice() - Extracting portions:");
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstThree = original.slice(0, 3);
const lastThree = original.slice(-3);
const middle = original.slice(3, 7);

console.log("Original:", original);
console.log("First three:", firstThree);
console.log("Last three:", lastThree);
console.log("Middle (3-7):", middle);

console.log("\\n2. splice() - In-place manipulation:");
const arr1 = [1, 2, 3, 4, 5];
const removed1 = arr1.splice(2, 2); // Remove 2 elements starting at index 2
console.log("After removing:", arr1); // [1, 2, 5]
console.log("Removed:", removed1); // [3, 4]

const arr2 = [1, 2, 3, 4, 5];
const removed2 = arr2.splice(2, 0, 6, 7); // Add at index 2
console.log("After adding:", arr2); // [1, 2, 6, 7, 3, 4, 5]
console.log("Removed:", removed2); // []

const arr3 = [1, 2, 3, 4, 5];
const removed3 = arr3.splice(1, 2, 8, 9); // Replace 2 elements
console.log("After replacing:", arr3); // [1, 8, 9, 4, 5]
console.log("Removed:", removed3); // [2, 3]

console.log("\\n3. concat() - Merging arrays:");
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const arrC = [7, 8, 9];
const merged = arrA.concat(arrB, arrC);
console.log("Merged:", merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ========== Array Destructuring ==========
console.log("\\n\\n=== Array Destructuring ===");

console.log("\\n1. Basic destructuring:");
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
const [primary, secondary, ...others] = colors;

console.log("Primary:", primary); // Red
console.log("Secondary:", secondary); // Green
console.log("Others:", others); // ["Blue", "Yellow", "Purple"]

console.log("\\n2. Skipping elements:");
const [first, , third, , fifth] = colors;
console.log("First:", first); // Red
console.log("Third:", third); // Blue
console.log("Fifth:", fifth); // Purple

console.log("\\n3. Default values:");
const [a = "defaultA", b = "defaultB"] = ["valueA"];
console.log("a:", a); // valueA
console.log("b:", b); // defaultB

console.log("\\n4. Swapping variables:");
let x = 10;
let y = 20;
console.log("Before swap:", x, y);
[x, y] = [y, x];
console.log("After swap:", x, y);

console.log("\\n5. Nested destructuring:");
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const [num1, [num2, num3], [num4, [num5, num6]]] = nestedArray;
console.log("Nested values:", num1, num2, num3, num4, num5, num6);

// ========== Spread Operator ==========
console.log("\\n\\n=== Spread Operator ===");

console.log("\\n1. Copying arrays:");
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log("Original:", originalArray);
console.log("Copy:", copiedArray);
console.log("Same reference?", originalArray === copiedArray); // false

console.log("\\n2. Merging arrays:");
const part1 = [1, 2, 3];
const part2 = [4, 5, 6];
const part3 = [7, 8, 9];
const combined = [...part1, ...part2, ...part3];
console.log("Combined:", combined);

console.log("\\n3. Adding elements:");
const base = [2, 3, 4];
const withStart = [1, ...base];
const withEnd = [...base, 5];
const withBoth = [1, ...base, 5];
console.log("With start:", withStart);
console.log("With end:", withEnd);
console.log("With both:", withBoth);

console.log("\\n4. Removing duplicates:");
const duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unique = [...new Set(duplicates)];
console.log("With duplicates:", duplicates);
console.log("Unique:", unique);

console.log("\\n5. Function arguments:");
function sumThree(a, b, c) {
    return a + b + c;
}
const numbersArray = [10, 20, 30];
console.log("Sum of array:", sumThree(...numbersArray)); // 60

// ========== Real-World Example: Shopping Cart ==========
console.log("\\n\\n=== Real-World Example: Shopping Cart ===");

const shoppingCart = [
    { id: 1, name: "Laptop", price: 999.99, quantity: 1, category: "Electronics" },
    { id: 2, name: "Mouse", price: 25.50, quantity: 2, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 75.00, quantity: 1, category: "Electronics" },
    { id: 4, name: "Desk", price: 250.00, quantity: 1, category: "Furniture" },
    { id: 5, name: "Chair", price: 150.00, quantity: 2, category: "Furniture" }
];

console.log("\\n1. Cart Summary:");
const cartSummary = shoppingCart.map(item => ({
    name: item.name,
    total: (item.price * item.quantity).toFixed(2),
    quantity: item.quantity
}));
console.log("Summary:", cartSummary);

console.log("\\n2. Total Cost:");
const totalCost = shoppingCart.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
);
console.log(\`Total: $\${totalCost.toFixed(2)}\`);

console.log("\\n3. Category Breakdown:");
const categoryBreakdown = shoppingCart.reduce((breakdown, item) => {
    const category = item.category;
    if (!breakdown[category]) {
        breakdown[category] = { items: 0, total: 0 };
    }
    breakdown[category].items += item.quantity;
    breakdown[category].total += item.price * item.quantity;
    return breakdown;
}, {});

for (const [category, data] of Object.entries(categoryBreakdown)) {
    console.log(\`\${category}: \${data.items} items, $\${data.total.toFixed(2)}\`);
}

console.log("\\n4. Most Expensive Item:");
const mostExpensive = shoppingCart.reduce((max, item) => 
    item.price > max.price ? item : max, shoppingCart[0]
);
console.log(\`Most expensive: \${mostExpensive.name} ($\${mostExpensive.price})\`);

console.log("\\n5. Items needing restock (quantity < 2):");
const lowStock = shoppingCart.filter(item => item.quantity < 2);
console.log("Low stock items:", lowStock.map(item => item.name));

console.log("\\n6. Apply discount to electronics:");
const withDiscount = shoppingCart.map(item => {
    if (item.category === "Electronics") {
        return {
            ...item,
            price: item.price * 0.9, // 10% discount
            originalPrice: item.price
        };
    }
    return item;
});
console.log("With discount:", withDiscount);

// ========== Advanced Array Operations ==========
console.log("\\n\\n=== Advanced Array Operations ===");

console.log("\\n1. Chaining array methods:");
const complexData = [15, 3, 22, 8, 17, 31, 12, 9, 25, 18];

const result = complexData
    .filter(num => num > 10)           // Keep numbers > 10
    .map(num => num * 2)               // Double them
    .sort((a, b) => a - b)             // Sort ascending
    .reduce((acc, num, index, array) => {
        // Calculate running average
        acc.sum += num;
        acc.averages.push(acc.sum / (index + 1));
        return acc;
    }, { sum: 0, averages: [] });

console.log("Chained operations result:", result);

console.log("\\n2. Matrix operations:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Transpose matrix
const transposed = matrix[0].map((_, colIndex) => 
    matrix.map(row => row[colIndex])
);
console.log("Original matrix:", matrix);
console.log("Transposed matrix:", transposed);

// Flatten matrix
const flattened = matrix.reduce((flat, row) => flat.concat(row), []);
console.log("Flattened:", flattened);

console.log("\\n3. Pagination example:");
function paginate(items, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    return {
        data: items.slice(start, end),
        page,
        itemsPerPage,
        totalItems: items.length,
        totalPages: Math.ceil(items.length / itemsPerPage),
        hasNext: end < items.length,
        hasPrevious: start > 0
    };
}

const allItems = Array.from({ length: 100 }, (_, i) => \`Item \${i + 1}\`);
const page1 = paginate(allItems, 1, 10);
const page5 = paginate(allItems, 5, 10);

console.log("Page 1:", page1.data);
console.log("Page 5:", page5.data);
console.log("Page 1 metadata:", {
    page: page1.page,
    totalPages: page1.totalPages,
    hasNext: page1.hasNext
});`,
        explanation: 'These comprehensive examples demonstrate various array operations, from basic manipulations to advanced patterns and real-world applications.',
        preview: '<div class="preview-demo"><h3 style="color: #ef4444">Arrays Preview</h3><p>Experiment with array methods and see how they transform and manipulate data!</p><div id="arrayOutput" class="result-box">Array operations results will appear here</div></div>'
      }
    ],
    resources: [
      { title: 'MDN: Array', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
      { title: 'JavaScript.info: Arrays', url: 'https://javascript.info/array' },
      { title: 'Array Methods Cheat Sheet', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods' },
      { title: 'Destructuring Assignment', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' }
    ],
    prerequisites: ['js-scope'],
    nextTopics: ['js-objects']
  } , // Continuing from topic 9 onward in jsNotes.jsx

{
  id: 'js-objects',
  title: 'Objects',
  icon: <Box />,
  difficulty: 'beginner',
  estimatedTime: 20,
  category: 'javascript',
  order: 9,
  sections: [
    'Object Creation',
    'Properties & Methods',
    'this Keyword',
    'Object Methods',
    'Object Destructuring',
    'Spread Operator with Objects',
    'Object.assign()',
    'Object.keys/values/entries()'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">📦</div>
        <h1>JavaScript Objects</h1>
        <p class="concept-tagline">Master Data Structures and Object-Oriented Programming</p>
      </div>
      
      <div class="object-3d-visual">
        <div class="object-structure">
          <div class="object-key">name</div>
          <div class="object-arrow">:</div>
          <div class="object-value">"John Doe"</div>
          <div class="object-key">age</div>
          <div class="object-arrow">:</div>
          <div class="object-value">30</div>
          <div class="object-key">email</div>
          <div class="object-arrow">:</div>
          <div class="object-value">"john@example.com"</div>
        </div>
      </div>
      
      <h2>📝 Creating Objects</h2>
      <p>Objects are collections of key-value pairs used to store and organize data.</p>
      
      <div class="example-section">
        <h3>Different Ways to Create Objects:</h3>
        <pre><code>// 1. Object literal (most common)
const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isAdmin: false,
  greet: function() {
    return \`Hello, my name is \${this.name}\`;
  }
};

// 2. Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;

// 3. Constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    return \`Hi, I'm \${this.name}, \${this.age} years old\`;
  };
}
const user1 = new User("Alice", 25);

// 4. Object.create()
const prototypeObject = { greeting: "Hello" };
const newObject = Object.create(prototypeObject);
newObject.name = "Bob";

// 5. Class syntax (ES6)
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getFormattedPrice() {
    return \`$\${this.price.toFixed(2)}\`;
  }
}
const product1 = new Product("Laptop", 999.99);

console.log("Person:", person);
console.log("Car:", car);
console.log("User:", user1);
console.log("New object:", newObject);
console.log("Product:", product1);</code></pre>
      </div>
      
      <h2>🔍 Accessing Properties</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>Dot Notation</h3>
          <pre><code>const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: "10001"
  }
};

console.log(person.name);      // "Alice"
console.log(person.age);       // 25
console.log(person.address.city); // "New York"

// Can't use with dynamic keys
// person."first name" // Syntax error</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Bracket Notation</h3>
          <pre><code>const person = {
  "first name": "John",
  "last name": "Doe",
  age: 30
};

console.log(person["first name"]); // "John"
console.log(person["last name"]);  // "Doe"
console.log(person["age"]);        // 30

// Dynamic property access
const key = "name";
console.log(person[key]); // undefined (no "name" property)

const ageKey = "age";
console.log(person[ageKey]); // 30

// With spaces or special characters
const complexKey = "first name";
console.log(person[complexKey]); // "John"</code></pre>
        </div>
      </div>
      
      <h2>✏️ Modifying Objects</h2>
      <div class="example-section">
        <h3>Adding, Updating, and Deleting Properties:</h3>
        <pre><code>const user = {
  name: "Alice",
  age: 25
};

// Adding properties
user.email = "alice@example.com";
user["isAdmin"] = true;
user.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

console.log("After adding:", user);

// Updating properties
user.age = 26;
user["email"] = "alice.new@example.com";
user.greet = function() {
  return \`Hi there! I'm \${this.name}\`;
};

console.log("After updating:", user);

// Deleting properties
delete user.isAdmin;
delete user["email"];

console.log("After deleting:", user);
console.log("email" in user); // false

// Property existence check
console.log("name" in user);    // true
console.log("email" in user);   // false
console.log(user.hasOwnProperty("age")); // true
console.log(user.hasOwnProperty("toString")); // false (inherited)</code></pre>
      </div>
      
      <h2>🔗 this Keyword</h2>
      <p>The <code>this</code> keyword refers to the object that is executing the current function.</p>
      
      <div class="example-section">
        <h3>Understanding this in Different Contexts:</h3>
        <pre><code>// 1. In object methods
const person = {
  name: "John",
  greet: function() {
    return \`Hello, my name is \${this.name}\`;
  },
  delayedGreet: function() {
    setTimeout(function() {
      console.log(this.name); // undefined (different context!)
    }, 1000);
  },
  arrowGreet: function() {
    setTimeout(() => {
      console.log(this.name); // "John" (lexical this)
    }, 1000);
  }
};

console.log(person.greet()); // "Hello, my name is John"

// 2. In constructor functions
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.display = function() {
    return \`\${this.brand} \${this.model}\`;
  };
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.display()); // "Toyota Camry"

// 3. In global context (browser)
// console.log(this); // Window object

// 4. In arrow functions
const obj = {
  value: 42,
  regularFunc: function() {
    console.log(this.value); // 42
  },
  arrowFunc: () => {
    console.log(this.value); // undefined (lexical this from outer scope)
  }
};

obj.regularFunc();
obj.arrowFunc();

// 5. Explicit binding
function introduce(lang1, lang2) {
  console.log(\`\${this.name} knows \${lang1} and \${lang2}\`);
}

const developer = { name: "Sarah" };

// call() - calls function with specified this and arguments
introduce.call(developer, "JavaScript", "Python");

// apply() - calls function with specified this and array of arguments
introduce.apply(developer, ["Ruby", "Java"]);

// bind() - creates new function with bound this
const boundIntroduce = introduce.bind(developer, "C++", "Go");
boundIntroduce();</code></pre>
      </div>
      
      <h2>⚙️ Object Methods</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>Object.assign()</h3>
          <p>Copy properties from one or more source objects to a target object.</p>
          <pre><code>const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5, e: 6 };

const result = Object.assign(target, source1, source2);
console.log(result); // { a: 1, b: 3, c: 4, d: 5, e: 6 }
console.log(target); // Also modified: { a: 1, b: 3, c: 4, d: 5, e: 6 }

// Clone object (shallow copy)
const original = { name: "John", details: { age: 30 } };
const clone = Object.assign({}, original);
clone.name = "Jane";
clone.details.age = 25;

console.log(original.name); // "John" (unchanged)
console.log(original.details.age); // 25 (changed! shallow copy)</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Object.keys/values/entries()</h3>
          <p>Get arrays of keys, values, or key-value pairs.</p>
          <pre><code>const user = {
  name: "Alice",
  age: 25,
  city: "New York",
  isAdmin: true
};

// Get keys
const keys = Object.keys(user);
console.log("Keys:", keys); // ["name", "age", "city", "isAdmin"]

// Get values
const values = Object.values(user);
console.log("Values:", values); // ["Alice", 25, "New York", true]

// Get entries (key-value pairs)
const entries = Object.entries(user);
console.log("Entries:", entries);
// [["name", "Alice"], ["age", 25], ["city", "New York"], ["isAdmin", true]]

// Iterate over entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}

// Convert to Map
const userMap = new Map(Object.entries(user));
console.log("Map:", userMap);</code></pre>
        </div>
      </div>
      
      <h2>🎁 Object Destructuring</h2>
      <p>Extract values from objects into individual variables.</p>
      
      <div class="example-section">
        <h3>Examples:</h3>
        <pre><code>// Basic destructuring
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  email: "john@example.com"
};

const { name, age, city } = person;
console.log(name, age, city); // "John Doe", 30, "New York"

// With different variable names
const { name: fullName, age: userAge } = person;
console.log(fullName, userAge); // "John Doe", 30

// Default values
const { country = "USA", phone = "N/A" } = person;
console.log(country, phone); // "USA", "N/A"

// Nested destructuring
const employee = {
  id: 1,
  personalInfo: {
    firstName: "Alice",
    lastName: "Smith",
    contact: {
      email: "alice@company.com",
      phone: "123-456-7890"
    }
  },
  department: "Engineering"
};

const {
  personalInfo: { 
    firstName, 
    lastName,
    contact: { email, phone: phoneNumber }
  }
} = employee;

console.log(firstName, lastName, email, phoneNumber);

// Rest pattern
const { name: userName, ...rest } = person;
console.log("User name:", userName);
console.log("Rest properties:", rest);

// Function parameters
function displayUser({ name, age, city }) {
  console.log(\`\${name} (\${age}) from \${city}\`);
}

displayUser(person); // "John Doe (30) from New York"

// Return value destructuring
function getUser() {
  return {
    id: 1,
    username: "johndoe",
    profile: {
      fullName: "John Doe",
      joined: "2023-01-15"
    }
  };
}

const { username, profile: { fullName } } = getUser();
console.log(username, fullName);</code></pre>
      </div>
      
      <h2>🌀 Spread Operator with Objects</h2>
      <p>The spread operator (<code>...</code>) copies properties from objects.</p>
      
      <div class="example-section">
        <h3>Examples:</h3>
        <pre><code>// Copy object (shallow copy)
const original = { a: 1, b: 2, c: 3 };
const copy = { ...original };
console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(original === copy); // false

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5, e: 6 };

const merged = { ...obj1, ...obj2, ...obj3 };
console.log(merged); // { a: 1, b: 3, c: 4, d: 5, e: 6 }

// Later properties overwrite earlier ones
const overwritten = { ...obj1, ...obj2, b: 100 };
console.log(overwritten); // { a: 1, b: 100, c: 4 }

// Add properties
const base = { x: 10, y: 20 };
const withNewProps = { ...base, z: 30, color: "red" };
console.log(withNewProps); // { x: 10, y: 20, z: 30, color: "red" }

// Update properties
const user = { name: "John", age: 30, city: "NYC" };
const updatedUser = { ...user, age: 31, country: "USA" };
console.log(updatedUser); // { name: "John", age: 31, city: "NYC", country: "USA" }

// Clone with modifications
const product = { id: 1, name: "Laptop", price: 999 };
const discountedProduct = {
  ...product,
  price: product.price * 0.9, // 10% discount
  onSale: true
};
console.log(discountedProduct);

// Nested objects (shallow copy limitation)
const nestedObj = { 
  a: 1, 
  b: { 
    c: 2, 
    d: { e: 3 } 
  } 
};
const shallowCopy = { ...nestedObj };
shallowCopy.b.c = 999;
console.log(nestedObj.b.c); // 999 (also changed!)</code></pre>
      </div>
      
      <h2>🔧 Object Utility Methods</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>Object.freeze()</h3>
          <p>Prevents modification of existing properties.</p>
          <pre><code>const obj = { name: "John", age: 30 };

Object.freeze(obj);

obj.name = "Jane"; // Silent failure in non-strict mode
obj.newProp = "test"; // Won't add
delete obj.age; // Won't delete

console.log(obj); // { name: "John", age: 30 }

// Check if object is frozen
console.log(Object.isFrozen(obj)); // true

// Shallow freeze only
const nested = { data: { value: 42 } };
Object.freeze(nested);
nested.data.value = 100; // This works! (shallow freeze)
console.log(nested.data.value); // 100</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Object.seal()</h3>
          <p>Prevents adding/removing properties but allows modifications.</p>
          <pre><code>const obj = { name: "John", age: 30 };

Object.seal(obj);

obj.name = "Jane"; // Allowed
obj.newProp = "test"; // Not allowed
delete obj.age; // Not allowed

console.log(obj); // { name: "Jane", age: 30 }

// Check if object is sealed
console.log(Object.isSealed(obj)); // true</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Object.defineProperty()</h3>
          <p>Define property with specific attributes.</p>
          <pre><code>const obj = {};

Object.defineProperty(obj, "readOnlyProp", {
  value: 42,
  writable: false,    // Cannot be changed
  enumerable: true,   // Shows up in for...in
  configurable: false // Cannot be deleted or reconfigured
});

console.log(obj.readOnlyProp); // 42
obj.readOnlyProp = 100; // Silent failure
console.log(obj.readOnlyProp); // 42

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj, "readOnlyProp");
console.log(descriptor);</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Object.hasOwn()</h3>
          <p>Check if object has property (better than hasOwnProperty).</p>
          <pre><code>const obj = { name: "John", age: 30 };

console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "toString")); // false (inherited)
console.log(Object.hasOwn(obj, "unknown")); // false

// Works with null prototype objects
const nullProtoObj = Object.create(null);
nullProtoObj.prop = "value";
console.log(Object.hasOwn(nullProtoObj, "prop")); // true
// nullProtoObj.hasOwnProperty("prop"); // Error!</code></pre>
        </div>
      </div>
      
      <h2>🏛️ Classes (ES6)</h2>
      <p>Modern class syntax for object-oriented programming.</p>
      
      <div class="example-section">
        <h3>Class Examples:</h3>
        <pre><code>// Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
  
  // Static method
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
  
  // Getter
  get birthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
  
  // Setter
  set birthYear(year) {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - year;
  }
}

// Inheritance
class Employee extends Person {
  constructor(name, age, position, salary) {
    super(name, age); // Call parent constructor
    this.position = position;
    this.salary = salary;
  }
  
  // Override method
  greet() {
    return \`\${super.greet()} and I work as a \${this.position}\`;
  }
  
  // New method
  getFormattedSalary() {
    return \`$\${this.salary.toLocaleString()}\`;
  }
}

// Using classes
const john = new Person("John Doe", 30);
console.log(john.greet()); // "Hello, my name is John Doe"
console.log(john.birthYear); // Calculated value

const alice = new Employee("Alice Smith", 28, "Developer", 85000);
console.log(alice.greet()); // "Hello, my name is Alice Smith and I work as a Developer"
console.log(alice.getFormattedSalary()); // "$85,000"

// Static method usage
console.log(Person.compareAges(john, alice)); // 2

// Private fields (ES2022)
class BankAccount {
  #balance = 0; // Private field
  
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return \`Deposited $\${amount}. New balance: $\${this.#balance}\`;
    }
    return "Invalid deposit amount";
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return \`Withdrew $\${amount}. New balance: $\${this.#balance}\`;
    }
    return "Insufficient funds or invalid amount";
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("John", 1000);
console.log(account.deposit(500)); // "Deposited $500. New balance: $1500"
// console.log(account.#balance); // SyntaxError: Private field</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Object Manipulation</h3>
          <p>Create functions to manipulate a shopping cart object.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>const shoppingCart = {
  items: [],
  total: 0,
  
  addItem(name, price, quantity = 1) {
    const existingItem = this.items.find(item => item.name === name);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
    
    this.calculateTotal();
    return this;
  },
  
  removeItem(name) {
    const itemIndex = this.items.findIndex(item => item.name === name);
    
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
      this.calculateTotal();
    }
    
    return this;
  },
  
  updateQuantity(name, quantity) {
    const item = this.items.find(item => item.name === name);
    
    if (item) {
      item.quantity = quantity;
      this.calculateTotal();
    }
    
    return this;
  },
  
  calculateTotal() {
    this.total = this.items.reduce(
      (sum, item) => sum + (item.price * item.quantity), 
      0
    );
    return this.total;
  },
  
  applyDiscount(percentage) {
    const discount = this.total * (percentage / 100);
    this.total -= discount;
    return this;
  },
  
  clearCart() {
    this.items = [];
    this.total = 0;
    return this;
  },
  
  getCartSummary() {
    return {
      itemCount: this.items.reduce((sum, item) => sum + item.quantity, 0),
      uniqueItems: this.items.length,
      total: this.total,
      items: [...this.items]
    };
  }
};

// Test the shopping cart
shoppingCart
  .addItem("Laptop", 999.99)
  .addItem("Mouse", 25.50, 2)
  .addItem("Keyboard", 75.00)
  .updateQuantity("Mouse", 1)
  .applyDiscount(10);

console.log(shoppingCart.getCartSummary());</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Deep Object Comparison</h3>
          <p>Create a function to deeply compare two objects.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function deepEqual(obj1, obj2) {
  // Handle primitive types
  if (obj1 === obj2) return true;
  
  // Check if both are objects and not null
  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  
  // Get keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if number of keys is the same
  if (keys1.length !== keys2.length) return false;
  
  // Check if all keys exist in both objects
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    
    // Recursively compare values
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

// Test cases
const objA = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ["reading", "coding"]
};

const objB = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ["reading", "coding"]
};

const objC = {
  name: "John",
  age: 30,
  address: {
    city: "Boston", // Different city
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
console.log(deepEqual(5, 5)); // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, 2, 3], [1, 2])); // false</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 Object Creation Patterns</h3>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>When to Use</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Object Literal</td>
              <td>Single instances, configuration objects</td>
              <td>Simple, readable, no constructor needed</td>
              <td>No inheritance, single instance</td>
            </tr>
            <tr>
              <td>Constructor Function</td>
              <td>Multiple instances, traditional OOP</td>
              <td>Familiar syntax, prototype inheritance</td>
              <td><code>new</code> keyword required, <code>this</code> binding issues</td>
            </tr>
            <tr>
              <td>Factory Function</td>
              <td>Encapsulation, private variables</td>
              <td>No <code>new</code> keyword, closures for privacy</td>
              <td>Memory overhead for methods</td>
            </tr>
            <tr>
              <td>Class Syntax</td>
              <td>Modern OOP, inheritance needed</td>
              <td>Clean syntax, built-in inheritance, private fields</td>
              <td>Syntactic sugar over prototypes</td>
            </tr>
            <tr>
              <td>Object.create()</td>
              <td>Prototypal inheritance, delegation</td>
              <td>Pure prototypal inheritance, no constructors</td>
              <td>Less familiar syntax</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Object Best Practices</h4>
          <ul>
            <li>Use object literals for simple data structures</li>
            <li>Prefer classes for complex objects with methods</li>
            <li>Use destructuring for clean variable extraction</li>
            <li>Use spread operator for object copying and merging</li>
            <li>Consider using Maps for dynamic key collections</li>
            <li>Use <code>Object.hasOwn()</code> instead of <code>hasOwnProperty()</code></li>
            <li>Freeze objects that shouldn't be modified</li>
            <li>Use getters/setters for computed properties</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Objects Examples',
      code: `// ========== Object Creation & Manipulation ==========
console.log("=== Object Creation & Manipulation ===");

// 1. Different creation patterns
console.log("\\n1. Object Creation Patterns:");

// Factory function pattern
function createUser(name, email, isAdmin = false) {
  return {
    name,
    email,
    isAdmin,
    lastLogin: null,
    
    login() {
      this.lastLogin = new Date();
      return \`\${this.name} logged in at \${this.lastLogin.toLocaleTimeString()}\`;
    },
    
    logout() {
      this.lastLogin = null;
      return \`\${this.name} logged out\`;
    },
    
    updateEmail(newEmail) {
      this.email = newEmail;
      return \`Email updated to \${newEmail}\`;
    }
  };
}

const user1 = createUser("Alice", "alice@example.com");
const user2 = createUser("Bob", "bob@example.com", true);

console.log(user1.login());
console.log(user2.login());
console.log(user1.updateEmail("alice.new@example.com"));

// 2. Computed property names
console.log("\\n2. Computed Property Names:");
const propName = "dynamicProperty";
const index = 1;

const objWithComputed = {
  [propName]: "This is dynamic",
  [\`item\${index}\`]: "Item 1",
  [\`total_\${propName}\`]: 100
};

console.log(objWithComputed);

// 3. Property descriptors
console.log("\\n3. Property Descriptors:");
const configurableObj = {};

Object.defineProperties(configurableObj, {
  id: {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
  },
  secret: {
    value: "hidden",
    enumerable: false, // Won't show in for...in or Object.keys
    configurable: true
  },
  counter: {
    get() {
      return this._counter || 0;
    },
    set(value) {
      if (value >= 0) {
        this._counter = value;
      }
    },
    enumerable: true
  }
});

console.log("Object keys:", Object.keys(configurableObj));
console.log("All properties:", Object.getOwnPropertyNames(configurableObj));

// ========== this Keyword Deep Dive ==========
console.log("\\n\\n=== this Keyword Deep Dive ===");

// 1. this binding in different contexts
console.log("\\n1. this Binding Scenarios:");

const company = {
  name: "TechCorp",
  employees: ["Alice", "Bob", "Charlie"],
  
  // Regular function - this refers to company
  listEmployees: function() {
    console.log("Employees at", this.name + ":");
    this.employees.forEach(function(employee) {
      // this is undefined in strict mode, window in non-strict
      console.log(" -", employee);
    });
  },
  
  // Arrow function - this is lexical (company)
  listEmployeesArrow: function() {
    console.log("Employees at", this.name + ":");
    this.employees.forEach(employee => {
      console.log(" -", employee, "(reports to", this.name + ")");
    });
  },
  
  // Method shorthand - same as regular function
  getInfo() {
    return \`Company: \${this.name}, Employees: \${this.employees.length}\`;
  }
};

company.listEmployees();
company.listEmployeesArrow();
console.log(company.getInfo());

// 2. Explicit binding
console.log("\\n2. Explicit Binding:");

function describePerson(adjective1, adjective2) {
  return \`\${this.name} is \${adjective1} and \${adjective2}\`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using call
console.log(describePerson.call(person1, "smart", "kind"));
console.log(describePerson.call(person2, "funny", "creative"));

// Using apply
console.log(describePerson.apply(person1, ["brave", "honest"]));

// Using bind
const describeAlice = describePerson.bind(person1, "intelligent");
console.log(describeAlice("hardworking"));
console.log(describeAlice("friendly"));

// 3. this in event handlers
console.log("\\n3. this in Different Contexts:");

const buttonHandler = {
  message: "Button clicked!",
  handleClick: function() {
    console.log(this.message);
  },
  handleClickArrow: () => {
    console.log(this.message); // undefined (lexical this)
  }
};

// Simulating button click
const simulatedButton = { onclick: null };
simulatedButton.onclick = buttonHandler.handleClick;
simulatedButton.onclick(); // "Button clicked!" (this = simulatedButton)

simulatedButton.onclick = buttonHandler.handleClick.bind(buttonHandler);
simulatedButton.onclick(); // "Button clicked!" (this = buttonHandler)

// ========== Object Methods & Utilities ==========
console.log("\\n\\n=== Object Methods & Utilities ===");

// 1. Object iteration
console.log("\\n1. Object Iteration Patterns:");

const product = {
  id: 101,
  name: "Wireless Headphones",
  price: 129.99,
  category: "Electronics",
  inStock: true,
  features: ["Bluetooth 5.0", "Noise Cancelling", "24h Battery"],
  ratings: {
    average: 4.5,
    count: 128
  }
};

console.log("Using for...in:");
for (const key in product) {
  if (Object.hasOwn(product, key)) {
    console.log(\`  \${key}: \${product[key]}\`);
  }
}

console.log("\\nUsing Object.entries():");
for (const [key, value] of Object.entries(product)) {
  console.log(\`  \${key}: \${value}\`);
}

console.log("\\nUsing Object.keys() and map:");
const productInfo = Object.keys(product).map(key => \`\${key}: \${product[key]}\`);
console.log(productInfo);

// 2. Object transformation
console.log("\\n2. Object Transformation:");

// Filter object properties
function filterObject(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(key, value))
  );
}

const numericProperties = filterObject(product, (key, value) => 
  typeof value === 'number'
);
console.log("Numeric properties:", numericProperties);

// Map object values
function mapObject(obj, mapper) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, mapper(value, key)])
  );
}

const stringifiedValues = mapObject(product, value => String(value));
console.log("Stringified values:", stringifiedValues);

// 3. Deep cloning
console.log("\\n3. Deep Cloning Objects:");

function deepClone(obj, visited = new Map()) {
  // Handle primitives
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }
  
  // Handle arrays
  if (Array.isArray(obj)) {
    const clone = [];
    visited.set(obj, clone);
    obj.forEach((item, index) => {
      clone[index] = deepClone(item, visited);
    });
    return clone;
  }
  
  // Handle objects
  const clone = Object.create(Object.getPrototypeOf(obj));
  visited.set(obj, clone);
  
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      clone[key] = deepClone(obj[key], visited);
    }
  }
  
  return clone;
}

const complexObj = {
  name: "Test",
  data: {
    nested: {
      values: [1, 2, 3],
      deep: {
        a: 1,
        b: 2
      }
    }
  },
  self: null // Will be circular reference
};

complexObj.self = complexObj; // Create circular reference

const clonedComplex = deepClone(complexObj);
console.log("Original === Clone?", complexObj === clonedComplex); // false
console.log("Deep equality check:", 
  complexObj.data.nested.values[0] === clonedComplex.data.nested.values[0]); // true
console.log("Circular reference handled:", clonedComplex.self === clonedComplex); // true

// ========== Real-World Object Patterns ==========
console.log("\\n\\n=== Real-World Object Patterns ===");

// 1. Module pattern with private state
console.log("\\n1. Module Pattern:");

const ShoppingModule = (function() {
  // Private state
  let cart = [];
  let discount = 0;
  
  // Private helper function
  function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  
  // Public API
  return {
    addItem(name, price, quantity = 1) {
      const existing = cart.find(item => item.name === name);
      
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ name, price, quantity });
      }
      
      return this;
    },
    
    removeItem(name) {
      cart = cart.filter(item => item.name !== name);
      return this;
    },
    
    applyDiscount(percent) {
      discount = percent;
      return this;
    },
    
    getTotal() {
      const subtotal = calculateSubtotal();
      const discountAmount = subtotal * (discount / 100);
      return subtotal - discountAmount;
    },
    
    getCartSummary() {
      return {
        items: [...cart],
        itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
        subtotal: calculateSubtotal(),
        discount: discount + "%",
        total: this.getTotal()
      };
    },
    
    clearCart() {
      cart = [];
      discount = 0;
      return this;
    }
  };
})();

// Usage
ShoppingModule
  .addItem("Laptop", 999.99)
  .addItem("Mouse", 25.50, 2)
  .addItem("Keyboard", 75.00)
  .applyDiscount(15);

console.log("Cart Summary:", ShoppingModule.getCartSummary());

// 2. Builder pattern for complex objects
console.log("\\n2. Builder Pattern:");

class UserBuilder {
  constructor() {
    this.user = {
      personalInfo: {},
      preferences: {},
      security: {}
    };
  }
  
  setName(firstName, lastName) {
    this.user.personalInfo.name = { firstName, lastName };
    return this;
  }
  
  setEmail(email) {
    this.user.personalInfo.email = email;
    return this;
  }
  
  setPreferences(theme = 'light', language = 'en', notifications = true) {
    this.user.preferences = { theme, language, notifications };
    return this;
  }
  
  setSecurity(twoFactor = false, recoveryEmail = '') {
    this.user.security = { twoFactor, recoveryEmail };
    return this;
  }
  
  build() {
    // Add metadata
    this.user.metadata = {
      created: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    };
    
    // Freeze the object to prevent modifications
    return Object.freeze(this.user);
  }
}

// Usage
const user = new UserBuilder()
  .setName("John", "Doe")
  .setEmail("john@example.com")
  .setPreferences('dark', 'en', false)
  .setSecurity(true, "recovery@example.com")
  .build();

console.log("Built user:", user);

// 3. Data validation with objects
console.log("\\n3. Data Validation Pattern:");

const Validator = {
  rules: {
    required: value => value !== undefined && value !== null && value !== '',
    email: value => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value),
    minLength: (value, min) => String(value).length >= min,
    maxLength: (value, max) => String(value).length <= max,
    numeric: value => !isNaN(parseFloat(value)) && isFinite(value),
    inRange: (value, min, max) => value >= min && value <= max,
    pattern: (value, regex) => regex.test(value)
  },
  
  validate(data, schema) {
    const errors = {};
    
    for (const [field, fieldRules] of Object.entries(schema)) {
      const value = data[field];
      
      for (const [rule, ruleConfig] of Object.entries(fieldRules)) {
        const isValid = this.rules[rule](
          value,
          ...(Array.isArray(ruleConfig) ? ruleConfig : [ruleConfig])
        );
        
        if (!isValid) {
          if (!errors[field]) errors[field] = [];
          errors[field].push(\`Failed rule: \${rule}\`);
        }
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      data
    };
  }
};

// Usage
const userSchema = {
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/
  },
  email: {
    required: true,
    email: true
  },
  age: {
    required: true,
    numeric: true,
    inRange: [18, 120]
  },
  password: {
    required: true,
    minLength: 8
  }
};

const testUser = {
  username: "john_doe",
  email: "john@example",
  age: 17,
  password: "123"
};

const validation = Validator.validate(testUser, userSchema);
console.log("Validation result:", validation);

// 4. Object pooling for performance
console.log("\\n4. Object Pool Pattern:");

class Vector2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  
  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }
  
  reset() {
    this.x = 0;
    this.y = 0;
    return this;
  }
}

class VectorPool {
  constructor() {
    this.pool = [];
    this.active = new Set();
  }
  
  acquire(x = 0, y = 0) {
    let vector;
    
    if (this.pool.length > 0) {
      vector = this.pool.pop();
      vector.set(x, y);
    } else {
      vector = new Vector2D(x, y);
    }
    
    this.active.add(vector);
    return vector;
  }
  
  release(vector) {
    if (this.active.has(vector)) {
      vector.reset();
      this.active.delete(vector);
      this.pool.push(vector);
      return true;
    }
    return false;
  }
  
  get stats() {
    return {
      poolSize: this.pool.length,
      activeCount: this.active.size,
      totalCreated: this.pool.length + this.active.size
    };
  }
}

// Usage in game-like scenario
const pool = new VectorPool();

// Simulate game frame with many vector operations
const positions = [];
for (let i = 0; i < 1000; i++) {
  const pos = pool.acquire(Math.random() * 100, Math.random() * 100);
  positions.push(pos);
}

console.log("During simulation:", pool.stats);

// Release all vectors back to pool
positions.forEach(pos => pool.release(pos));
console.log("After release:", pool.stats);`,
      explanation: 'These comprehensive examples demonstrate object creation, manipulation, patterns, and real-world applications in JavaScript.',
      preview: '<div class="preview-demo"><h3 style="color: #10b981">Objects Preview</h3><p>Experiment with object methods and patterns to see how JavaScript objects work!</p><div id="objectOutput" class="result-box">Object operations results will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Working with Objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects' },
    { title: 'JavaScript.info: Objects', url: 'https://javascript.info/object' },
    { title: 'Object Methods Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object' },
    { title: 'Classes in JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' }
  ],
  prerequisites: ['js-arrays'],
  nextTopics: ['js-strings']
},
{
  id: 'js-strings',
  title: 'Strings',
  icon: <Type />,
  difficulty: 'beginner',
  estimatedTime: 15,
  category: 'javascript',
  order: 10,
  sections: [
    'String Creation',
    'String Methods',
    'Template Literals',
    'String Interpolation',
    'Regular Expressions',
    'String Manipulation'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">🔤</div>
        <h1>JavaScript Strings</h1>
        <p class="concept-tagline">Master Text Manipulation and String Operations</p>
      </div>
      
      <div class="string-3d-visual">
        <div class="string-chars">
          <div class="char-box">H</div>
          <div class="char-box">e</div>
          <div class="char-box">l</div>
          <div class="char-box">l</div>
          <div class="char-box">o</div>
          <div class="char-box">W</div>
          <div class="char-box">o</div>
          <div class="char-box">r</div>
          <div class="char-box">l</div>
          <div class="char-box">d</div>
        </div>
      </div>
      
      <h2>📝 Creating Strings</h2>
      <p>Strings represent textual data in JavaScript and can be created in several ways.</p>
      
      <div class="example-section">
        <h3>Different Ways to Create Strings:</h3>
        <pre><code>// 1. Single quotes
const single = 'Hello World';

// 2. Double quotes
const double = "Hello World";

// 3. Backticks (Template literals)
const template = \`Hello World\`;

// 4. String constructor
const constructed = new String("Hello World");

// 5. From character codes
const fromCharCode = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"

// 6. Concatenation
const concat = "Hello" + " " + "World";

// 7. Multi-line strings
const multiLine = "Line 1\\nLine 2\\nLine 3";
const multiLineTemplate = \`
  Line 1
  Line 2
  Line 3
\`;

// 8. Special characters
const special = "Tab\\tcharacter";
const quote = "He said \\"Hello\\"";
const backslash = "Path: C:\\\\Program Files";

console.log("Single quotes:", single);
console.log("Double quotes:", double);
console.log("Template literal:", template);
console.log("Constructed:", constructed);
console.log("From char code:", fromCharCode);
console.log("Concatenated:", concat);
console.log("Multi-line:", multiLine);
console.log("Special chars:", special);</code></pre>
      </div>
      
      <h2>📏 String Properties & Basic Methods</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>length Property</h3>
          <pre><code>const str = "Hello World";
console.log(str.length); // 11

// Empty string
console.log("".length); // 0

// String with spaces
console.log("   ".length); // 3

// Unicode characters
console.log("🎉".length); // 2 (surrogate pairs)</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Accessing Characters</h3>
          <pre><code>const str = "JavaScript";

// Bracket notation
console.log(str[0]);  // "J"
console.log(str[4]);  // "S"
console.log(str[10]); // undefined

// charAt() method
console.log(str.charAt(0));  // "J"
console.log(str.charAt(4));  // "S"
console.log(str.charAt(10)); // "" (empty string)

// charCodeAt() - Unicode value
console.log(str.charCodeAt(0)); // 74 (J)
console.log(str.charCodeAt(1)); // 97 (a)

// at() method (ES2022) - supports negative indices
console.log(str.at(-1)); // "t" (last character)
console.log(str.at(-2)); // "p" (second last)</code></pre>
        </div>
        
        <div class="method-card">
          <h3>Case Conversion</h3>
          <pre><code>const mixed = "Hello World";

console.log(mixed.toUpperCase());   // "HELLO WORLD"
console.log(mixed.toLowerCase());   // "hello world"

// Locale-sensitive conversion
const turkish = "ışık";
console.log(turkish.toLocaleUpperCase('tr-TR')); // "IŞIK"

// First letter capitalization
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));      // "Hello"
console.log(capitalize("HELLO"));      // "Hello"
console.log(capitalize("hElLo WoRlD")); // "Hello world"</code></pre>
        </div>
      </div>
      
      <h2>🔍 Searching & Extracting</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>indexOf() & lastIndexOf()</h3>
          <pre><code>const str = "Hello World, welcome to the world of JavaScript";

// Find first occurrence
console.log(str.indexOf("World"));    // 6
console.log(str.indexOf("world"));    // 22 (case-sensitive)
console.log(str.indexOf("JavaScript")); // 35
console.log(str.indexOf("Python"));   // -1 (not found)

// Find from specific position
console.log(str.indexOf("o"));        // 4 (first 'o')
console.log(str.indexOf("o", 5));     // 7 (from index 5)

// Find last occurrence
console.log(str.lastIndexOf("o"));    // 29 (last 'o')
console.log(str.lastIndexOf("o", 28)); // 25 (search backwards from index 28)

// Check if string contains substring
function contains(str, substring) {
  return str.indexOf(substring) !== -1;
}

console.log(contains(str, "World")); // true
console.log(contains(str, "world")); // true
console.log(contains(str, "Python")); // false</code></pre>
        </div>
        
        <div class="method-card">
          <h3>includes(), startsWith(), endsWith()</h3>
          <pre><code>const str = "JavaScript is awesome!";

// includes() - check if contains substring
console.log(str.includes("Script"));    // true
console.log(str.includes("script"));    // false (case-sensitive)
console.log(str.includes("awesome"));   // true
console.log(str.includes("JavaScript", 1)); // false (search from index 1)

// startsWith() - check beginning
console.log(str.startsWith("Java"));    // true
console.log(str.startsWith("java"));    // false
console.log(str.startsWith("is", 11));  // true (check from index 11)

// endsWith() - check ending
console.log(str.endsWith("awesome!"));  // true
console.log(str.endsWith("awesome"));   // false
console.log(str.endsWith("is", 13));    // true (check first 13 chars)

// Practical validation
function validateFileName(filename) {
  return filename.endsWith(".js") || filename.endsWith(".ts");
}

console.log(validateFileName("app.js"));    // true
console.log(validateFileName("index.ts"));  // true
console.log(validateFileName("style.css")); // false</code></pre>
        </div>
        
        <div class="method-card">
          <h3>slice(), substring(), substr()</h3>
          <pre><code>const str = "Hello World";

// slice(start, end) - extracts section
console.log(str.slice(0, 5));      // "Hello" (index 0-4)
console.log(str.slice(6));         // "World" (from index 6 to end)
console.log(str.slice(-5));        // "World" (last 5 chars)
console.log(str.slice(2, -3));     // "llo Wo" (index 2 to -4)
console.log(str.slice(7, 5));      // "" (start > end)

// substring(start, end) - similar but no negative indices
console.log(str.substring(0, 5));  // "Hello"
console.log(str.substring(6));     // "World"
console.log(str.substring(2, 7));  // "llo W"
console.log(str.substring(7, 5));  // "Wo" (swaps parameters)

// substr(start, length) - deprecated, avoid
console.log(str.substr(6, 5));     // "World"
console.log(str.substr(-5, 3));    // "Wor" (last 5 chars, take 3)</code></pre>
        </div>
        
        <div class="method-card">
          <h3>split() & join()</h3>
          <pre><code>// split() - string to array
const csv = "apple,banana,orange,grape";
const fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

const sentence = "Hello World of JavaScript";
const words = sentence.split(" ");
console.log(words); // ["Hello", "World", "of", "JavaScript"]

const chars = "Hello".split("");
console.log(chars); // ["H", "e", "l", "l", "o"]

// Limit parameter
const limited = csv.split(",", 2);
console.log(limited); // ["apple", "banana"]

// Complex splitting
const data = "name:John|age:30|city:NYC";
const pairs = data.split("|").map(pair => pair.split(":"));
console.log(pairs); // [["name", "John"], ["age", "30"], ["city", "NYC"]]

// join() - array to string (reverse of split)
const joined = fruits.join(", ");
console.log(joined); // "apple, banana, orange, grape"

const joinedChars = chars.join("-");
console.log(joinedChars); // "H-e-l-l-o"</code></pre>
        </div>
      </div>
      
      <h2>🔄 String Manipulation</h2>
      <div class="methods-grid">
        <div class="method-card">
          <h3>trim(), trimStart(), trimEnd()</h3>
          <pre><code>const padded = "   Hello World   ";

console.log(padded.trim());        // "Hello World"
console.log(padded.trimStart());   // "Hello World   "
console.log(padded.trimEnd());     // "   Hello World"

// Multiple spaces and newlines
const messy = "\\n\\t  Hello World  \\t\\n";
console.log(messy.trim()); // "Hello World"

// Practical form validation
function cleanInput(input) {
  return input.trim().toLowerCase();
}

console.log(cleanInput("  HELLO  ")); // "hello"
console.log(cleanInput("\\n\\tTest\\t\\n")); // "test"</code></pre>
        </div>
        
        <div class="method-card">
          <h3>repeat() & padStart/padEnd()</h3>
          <pre><code>// repeat() - repeat string
console.log("Hello".repeat(3));    // "HelloHelloHello"
console.log("Hi ".repeat(2));      // "Hi Hi "
console.log("A".repeat(5));        // "AAAAA"

// padStart() - pad beginning
console.log("5".padStart(3, "0"));   // "005"
console.log("42".padStart(5, "0"));  // "00042"
console.log("Hello".padStart(10, "*")); // "*****Hello"

// padEnd() - pad ending
console.log("5".padEnd(3, "0"));     // "500"
console.log("42".padEnd(5, "0"));    // "42000"
console.log("Hello".padEnd(10, "-")); // "Hello-----"

// Formatting applications
function formatTime(hours, minutes, seconds) {
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
}

console.log(formatTime(5, 7, 3)); // "05:07:03"</code></pre>
        </div>
        
        <div class="method-card">
          <h3>replace() & replaceAll()</h3>
          <pre><code>const text = "Hello World, welcome to the World of JavaScript";

// replace() - replace first occurrence
console.log(text.replace("World", "Universe"));
// "Hello Universe, welcome to the World of JavaScript"

// replace() with regex - global replace
console.log(text.replace(/World/g, "Universe"));
// "Hello Universe, welcome to the Universe of JavaScript"

// Case-insensitive replace
console.log(text.replace(/world/gi, "Universe"));
// "Hello Universe, welcome to the Universe of JavaScript"

// replaceAll() - replace all occurrences
console.log(text.replaceAll("World", "Universe"));
// "Hello Universe, welcome to the Universe of JavaScript"

// Practical examples
function sanitizeHTML(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

console.log(sanitizeHTML('<script>alert("xss")</script>'));
// "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"</code></pre>
        </div>
        
        <div class="method-card">
          <h3>concat() & String Interpolation</h3>
          <pre><code>// concat() method
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(str1.concat(" ", str2, "!")); // "Hello World!"

// vs concatenation operator
console.log(str1 + " " + str2); // "Hello World"

// String interpolation with template literals
const name = "John";
const age = 30;
const city = "New York";

// Basic interpolation
const greeting = \`Hello, my name is \${name} and I'm \${age} years old.\`;
console.log(greeting);

// Expressions
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`;
console.log(total);

// Multi-line with interpolation
const email = \`
Dear \${name},

Thank you for your purchase of \${quantity} items.
Your total amount is $\${(price * quantity).toFixed(2)}.

Best regards,
The Store Team
\`;
console.log(email);

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}<mark>\${values[i] || ''}</mark>\`, '');
}

const highlighted = highlight\`Hello \${name}, you are \${age} years old.\`;
console.log(highlighted);</code></pre>
        </div>
      </div>
      
      <h2>🎯 Template Literals (ES6+)</h2>
      <p>Template literals provide an easy way to create strings with embedded expressions.</p>
      
      <div class="example-section">
        <h3>Advanced Template Literal Features:</h3>
        <pre><code>// 1. Basic template literals
const name = "Alice";
const age = 28;
console.log(\`\${name} is \${age} years old\`);

// 2. Multi-line strings
const multiLine = \`
  This is a
  multi-line
  string
\`;

// 3. Expression evaluation
const a = 5;
const b = 10;
console.log(\`\${a} + \${b} = \${a + b}\`);

// 4. Function calls
function double(x) { return x * 2; }
console.log(\`Double of 5 is \${double(5)}\`);

// 5. Ternary operators
const score = 85;
console.log(\`You \${score >= 60 ? 'passed' : 'failed'} the exam\`);

// 6. Nested template literals
const isMember = true;
const discount = isMember ? 20 : 10;
console.log(\`Discount: \${discount}% (\${isMember ? 'Member' : 'Non-member'})\`);

// 7. Raw strings
const path = String.raw\`C:\\Development\\project\\index.js\`;
console.log(path); // "C:\\Development\\project\\index.js"

// 8. Tagged templates
function currency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    let value = values[i];
    if (typeof value === 'number') {
      value = \`$\${value.toFixed(2)}\`;
    }
    return result + str + (value || '');
  }, '');
}

const item = "Laptop";
const price = 999.99;
const taxRate = 0.08;

const receipt = currency\`Item: \${item}
Price: \${price}
Tax: \${price * taxRate}
Total: \${price * (1 + taxRate)}\`;

console.log(receipt);

// 9. HTML templates
function createUserCard(user) {
  return \`
    <div class="user-card">
      <h2>\${user.name}</h2>
      <p>Age: \${user.age}</p>
      <p>Email: \${user.email}</p>
      <p>Status: \${user.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  \`;
}

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isActive: true
};

console.log(createUserCard(user));</code></pre>
      </div>
      
      <h2>🔍 Regular Expressions with Strings</h2>
      <div class="example-section">
        <h3>Common String Methods with Regex:</h3>
        <pre><code>const text = "The quick brown fox jumps over the lazy dog. The dog barked.";

// match() - find matches
const vowels = text.match(/[aeiou]/gi);
console.log("Vowels:", vowels);
console.log("Vowel count:", vowels?.length || 0);

// matchAll() - all matches with groups
const wordMatches = [...text.matchAll(/\\b(\\w+)\\b/g)];
console.log("Words:", wordMatches.map(m => m[1]));

// search() - find position
console.log(text.search(/fox/));    // 16
console.log(text.search(/cat/));    // -1 (not found)

// test() - boolean check
console.log(/dog/.test(text));      // true
console.log(/cat/.test(text));      // false

// exec() - regex execution
const regex = /\\b(\\w{4})\\b/g;
let match;
while ((match = regex.exec(text)) !== null) {
  console.log(\`Found: \${match[0]} at position \${match.index}\`);
}

// Practical regex patterns
function validateInput(input, pattern) {
  return pattern.test(input);
}

// Email validation
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
console.log(validateInput("test@example.com", emailRegex)); // true
console.log(validateInput("invalid-email", emailRegex));    // false

// Phone number validation (US format)
const phoneRegex = /^\\+?1?[-.\\s]?\\(?[0-9]{3}\\)?[-.\\s]?[0-9]{3}[-.\\s]?[0-9]{4}$/;
console.log(validateInput("123-456-7890", phoneRegex)); // true

// Password validation (8+ chars, 1 uppercase, 1 number)
const passwordRegex = /^(?=.*[A-Z])(?=.*\\d).{8,}$/;
console.log(validateInput("Password123", passwordRegex)); // true
console.log(validateInput("weak", passwordRegex));       // false</code></pre>
      </div>
      
      <h2>🌐 Internationalization & Unicode</h2>
      <div class="example-section">
        <h3>Working with Unicode and International Strings:</h3>
        <pre><code>// Unicode characters
const emoji = "🎉🎊🌟";
console.log("Emoji length:", emoji.length); // 6 (surrogate pairs)
console.log("Emoji code points:", [...emoji].length); // 3 (proper counting)

// Normalization
const acute1 = "café";
const acute2 = "cafe\\u0301"; // e + combining acute accent
console.log(acute1 === acute2); // false
console.log(acute1.normalize() === acute2.normalize()); // true

// Locale-sensitive comparison
const german = "straße";
const germanUpper = german.toLocaleUpperCase('de-DE');
console.log(germanUpper); // "STRASSE"

// Locale-sensitive sorting
const words = ["apple", "Zebra", "ångström", "banana"];
console.log("Default sort:", [...words].sort());
console.log("Swedish sort:", [...words].sort((a, b) => 
  a.localeCompare(b, 'sv')
));

// Number formatting
const number = 1234567.89;
console.log(number.toLocaleString('en-US')); // "1,234,567.89"
console.log(number.toLocaleString('de-DE')); // "1.234.567,89"
console.log(number.toLocaleString('ja-JP')); // "1,234,567.89"

// Currency formatting
const price = 99.99;
console.log(price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
})); // "$99.99"

console.log(price.toLocaleString('de-DE', {
  style: 'currency',
  currency: 'EUR'
})); // "99,99 €"

console.log(price.toLocaleString('ja-JP', {
  style: 'currency',
  currency: 'JPY'
})); // "￥100"</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Palindrome Checker</h3>
          <p>Write a function that checks if a string is a palindrome.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function isPalindrome(str) {
  // Clean the string: remove non-alphanumeric, convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare with reversed version
  const reversed = cleaned.split('').reverse().join('');
  
  return cleaned === reversed;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("12321")); // true</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: URL Slug Generator</h3>
          <p>Create a function that converts a title to a URL-friendly slug.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '') // Remove special chars
    .replace(/[\\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Test cases
console.log(generateSlug("Hello World!")); // "hello-world"
console.log(generateSlug("  JavaScript & TypeScript  ")); // "javascript-typescript"
console.log(generateSlug("Node.js & Express Tutorial")); // "nodejs-express-tutorial"
console.log(generateSlug("---Test---String---")); // "test-string"
console.log(generateSlug("Already-a-slug")); // "already-a-slug"</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 3: Text Statistics Analyzer</h3>
          <p>Create a function that analyzes text and returns statistics.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function analyzeText(text) {
  if (!text || text.trim() === '') {
    return { error: "Empty text provided" };
  }
  
  const words = text.trim().split(/\\s+/);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\\s/g, '').length;
  const paragraphs = text.split(/\\n\\n+/).filter(p => p.trim());
  
  // Count word frequencies
  const wordFrequency = words.reduce((freq, word) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanWord) {
      freq[cleanWord] = (freq[cleanWord] || 0) + 1;
    }
    return freq;
  }, {});
  
  // Find most common word
  const mostCommon = Object.entries(wordFrequency)
    .reduce((a, b) => a[1] > b[1] ? a : b, ['', 0]);
  
  // Calculate average word length
  const totalWordLength = words.reduce((sum, word) => 
    sum + word.replace(/[^a-z]/gi, '').length, 0);
  
  return {
    statistics: {
      characters,
      charactersNoSpaces,
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      averageWordLength: (totalWordLength / words.length).toFixed(2),
      averageSentenceLength: (words.length / sentences.length).toFixed(2)
    },
    mostCommonWord: {
      word: mostCommon[0],
      count: mostCommon[1],
      frequency: ((mostCommon[1] / words.length) * 100).toFixed(2) + '%'
    },
    readingTime: {
      wordsPerMinute: 200,
      minutes: (words.length / 200).toFixed(1)
    }
  };
}

// Test
const sampleText = \`
JavaScript is a programming language that conforms to the ECMAScript specification. 
JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, 
and first-class functions. Alongside HTML and CSS, JavaScript is one of the core 
technologies of the World Wide Web.
\`;

console.log(analyzeText(sampleText));</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 String Method Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Returns</th>
              <th>Best For</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>indexOf()</code></td>
              <td>Position or -1</td>
              <td>Finding substring position</td>
              <td><code>str.indexOf("world")</code></td>
            </tr>
            <tr>
              <td><code>includes()</code></td>
              <td>Boolean</td>
              <td>Checking if substring exists</td>
              <td><code>str.includes("world")</code></td>
            </tr>
            <tr>
              <td><code>slice()</code></td>
              <td>Substring</td>
              <td>Extracting parts (negative indices)</td>
              <td><code>str.slice(0, 5)</code></td>
            </tr>
            <tr>
              <td><code>substring()</code></td>
              <td>Substring</td>
              <td>Extracting parts (no negatives)</td>
              <td><code>str.substring(0, 5)</code></td>
            </tr>
            <tr>
              <td><code>split()</code></td>
              <td>Array</td>
              <td>Splitting into array</td>
              <td><code>str.split(" ")</code></td>
            </tr>
            <tr>
              <td><code>replace()</code></td>
              <td>New string</td>
              <td>Replacing text</td>
              <td><code>str.replace("old", "new")</code></td>
            </tr>
            <tr>
              <td><code>trim()</code></td>
              <td>Trimmed string</td>
              <td>Removing whitespace</td>
              <td><code>str.trim()</code></td>
            </tr>
            <tr>
              <td><code>toUpperCase()</code></td>
              <td>Uppercase string</td>
              <td>Case conversion</td>
              <td><code>str.toUpperCase()</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>String Best Practices</h4>
          <ul>
            <li>Use template literals for string concatenation and interpolation</li>
            <li>Prefer <code>includes()</code> over <code>indexOf()</code> for existence checks</li>
            <li>Use <code>slice()</code> instead of <code>substring()</code> for consistency</li>
            <li>Always trim user input before processing</li>
            <li>Be aware of Unicode characters and surrogate pairs</li>
            <li>Use locale-sensitive methods for international applications</li>
            <li>Consider using <code>String.raw</code> for Windows paths and regex patterns</li>
            <li>Cache regex objects when using them repeatedly</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Strings Examples',
      code: `// ========== String Creation & Basics ==========
console.log("=== String Creation & Basics ===");

// 1. Different string creation methods
console.log("\\n1. String Creation:");

const str1 = 'Single quotes';
const str2 = "Double quotes";
const str3 = \`Backticks with \${str1}\`;
const str4 = String(42); // "42"
const str5 = new String("Object"); // String object (avoid)
const str6 = String.fromCharCode(65, 66, 67); // "ABC"
const str7 = String.fromCodePoint(0x1F600); // "😀"

console.log(str1, str2, str3, str4, str5, str6, str7);

// 2. String properties and type checking
console.log("\\n2. Properties & Type Checking:");

const testStr = "Hello World";
console.log("Length:", testStr.length);
console.log("Type of string:", typeof testStr);
console.log("Type of String object:", typeof new String("test"));
console.log("Instance check:", testStr instanceof String); // false
console.log("Constructor:", testStr.constructor === String); // true

// ========== String Methods Deep Dive ==========
console.log("\\n\\n=== String Methods Deep Dive ===");

// 1. Character access and iteration
console.log("\\n1. Character Access:");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("Bracket notation:");
for (let i = 0; i < Math.min(5, alphabet.length); i++) {
  console.log(\`  alphabet[\${i}] = \${alphabet[i]}\`);
}

console.log("\\ncharAt():");
for (let i = 0; i < Math.min(5, alphabet.length); i++) {
  console.log(\`  alphabet.charAt(\${i}) = \${alphabet.charAt(i)}\`);
}

console.log("\\ncharCodeAt():");
for (let i = 0; i < Math.min(5, alphabet.length); i++) {
  console.log(\`  alphabet.charCodeAt(\${i}) = \${alphabet.charCodeAt(i)}\`);
}

console.log("\\ncodePointAt() for Unicode:");
const emoji = "🎉🎊";
console.log(\`emoji.codePointAt(0) = \${emoji.codePointAt(0).toString(16)}\`); // 1f389

console.log("\\nIterating with for...of:");
for (const char of "Hello") {
  console.log(\`  \${char}\`);
}

console.log("\\nSpread operator for proper Unicode iteration:");
console.log([..."🎉🎊🌟"]); // ['🎉', '🎊', '🌟']

// 2. Search methods in detail
console.log("\\n2. Search Methods:");

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

console.log("indexOf():");
console.log(\`  "ipsum" at: \${lorem.indexOf("ipsum")}\`);
console.log(\`  "dolor" from pos 10: \${lorem.indexOf("dolor", 10)}\`);
console.log(\`  "xyz" (not found): \${lorem.indexOf("xyz")}\`);

console.log("\\nlastIndexOf():");
console.log(\`  Last "i": \${lorem.lastIndexOf("i")}\`);
console.log(\`  Last "i" before pos 20: \${lorem.lastIndexOf("i", 20)}\`);

console.log("\\nsearch() with regex:");
console.log(\`  Word starting with "con": \${lorem.search(/\\bcon\\w*/i)}\`);
console.log(\`  Case-sensitive "Lorem": \${lorem.search(/Lorem/)}\`);

console.log("\\nmatch() with groups:");
const emailText = "Contact us at support@example.com or sales@company.org";
const emailMatches = emailText.match(/[\\w.-]+@[\\w.-]+\\.\\w+/g);
console.log("  Emails found:", emailMatches);

console.log("\\nmatchAll() for detailed matches:");
const wordRegex = /\\b(\\w+)\\b/g;
for (const match of lorem.matchAll(wordRegex)) {
  if (match.index < 20) { // Show first few
    console.log(\`  Word "\${match[1]}" at position \${match.index}\`);
  }
}

// 3. Extraction and manipulation
console.log("\\n3. Extraction & Manipulation:");

const fullText = "The quick brown fox jumps over the lazy dog";

console.log("slice() examples:");
console.log(\`  slice(4, 9): "\${fullText.slice(4, 9)}"\`); // "quick"
console.log(\`  slice(-8): "\${fullText.slice(-8)}"\`); // "lazy dog"
console.log(\`  slice(10, -10): "\${fullText.slice(10, -10)}"\`); // "brown fox jumps over the"

console.log("\\nsubstring() examples:");
console.log(\`  substring(4, 9): "\${fullText.substring(4, 9)}"\`);
console.log(\`  substring(9, 4): "\${fullText.substring(9, 4)}"\`); // Swaps parameters

console.log("\\nsubstr() examples (deprecated):");
console.log(\`  substr(4, 5): "\${fullText.substr(4, 5)}"\`); // "quick"
console.log(\`  substr(-8): "\${fullText.substr(-8)}"\`); // "lazy dog"

console.log("\\nsplit() with various delimiters:");
console.log(\`  Split by space: \${JSON.stringify(fullText.split(" "))}\`);
console.log(\`  Split by "o": \${JSON.stringify(fullText.split("o"))}\`);
console.log(\`  Split with limit: \${JSON.stringify(fullText.split(" ", 3))}\`);

// ========== Template Literals Advanced ==========
console.log("\\n\\n=== Template Literals Advanced ===");

// 1. Complex template literal examples
console.log("\\n1. Advanced Template Literals:");

function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

const products = [
  { name: "Laptop", price: 999.99, quantity: 1 },
  { name: "Mouse", price: 25.50, quantity: 2 },
  { name: "Keyboard", price: 75.00, quantity: 1 }
];

// Generate invoice using template literals
function generateInvoice(customer, items, discount = 0) {
  const subtotal = items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0);
  
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount;
  
  const invoiceDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return \`
INVOICE
===============
Date: \${invoiceDate}
Customer: \${customer}
===============

ITEMS:
\${items.map(item => \`
  \${item.quantity}x \${item.name}
      \${formatCurrency(item.price)} each
      Subtotal: \${formatCurrency(item.price * item.quantity)}
\`).join('')}

===============
Subtotal: \${formatCurrency(subtotal)}
Discount: \${discount}% (\${formatCurrency(discountAmount)})
===============
TOTAL: \${formatCurrency(total)}
===============

Thank you for your business!
\`;
}

console.log(generateInvoice("John Doe", products, 15));

// 2. Tagged templates for DSL
console.log("\\n2. Tagged Templates for Domain-Specific Languages:");

// SQL-like DSL
function sql(strings, ...values) {
  return strings.reduce((query, str, i) => {
    let value = values[i];
    
    // Handle different value types
    if (value === undefined || value === null) {
      value = 'NULL';
    } else if (typeof value === 'string') {
      value = \`'\${value.replace(/'/g, "''")}'\`;
    } else if (Array.isArray(value)) {
      value = \`('\${value.join("', '")}')\`;
    } else if (typeof value === 'object') {
      // For WHERE conditions
      const conditions = Object.entries(value)
        .map(([key, val]) => \`\${key} = '\${val}'\`)
        .join(' AND ');
      value = conditions;
    }
    
    return query + str + (value || '');
  }, '');
}

// Usage
const table = 'users';
const id = 1;
const name = "John O'Connor";
const conditions = { active: true, role: 'admin' };

const query = sql\`
  SELECT * FROM \${table}
  WHERE id = \${id}
    AND name = \${name}
    AND (\${conditions})
  LIMIT \${[10, 20]}
\`;

console.log("Generated SQL:", query);

// 3. Styled console output
console.log("\\n3. Styled Console Output:");

function styledConsole(strings, ...values) {
  const styles = [
    'background: linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'color: white',
    'padding: 5px 10px',
    'border-radius: 5px',
    'font-weight: bold'
  ];
  
  const message = strings.reduce((result, str, i) => 
    result + str + (values[i] || ''), '');
  
  console.log(\`%c\${message}\`, styles.join(';'));
}

styledConsole\`🎉 Important Message: \${"User created successfully!"}\`;

// ========== Regular Expressions Mastery ==========
console.log("\\n\\n=== Regular Expressions Mastery ===");

// 1. Common regex patterns
console.log("\\n1. Common Regex Patterns:");

const patterns = {
  email: /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i,
  phone: /^\\+?[\\d\\s-()]{10,}$/,
  url: /^https?:\\/\\/[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=]*$/,
  ipv4: /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/,
  date: /^\\d{4}-\\d{2}-\\d{2}$/,
  time: /^\\d{2}:\\d{2}(?::\\d{2})?$/,
  hexColor: /^#([a-f0-9]{3}|[a-f0-9]{6})$/i,
  username: /^[a-z0-9_]{3,20}$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/
};

// Test patterns
const testCases = {
  email: "test@example.com",
  phone: "+1 (123) 456-7890",
  url: "https://example.com/path?query=test",
  ipv4: "192.168.1.1",
  date: "2023-12-25",
  time: "14:30:00",
  hexColor: "#1a2b3c",
  username: "john_doe123",
  password: "Passw0rd!"
};

for (const [type, pattern] of Object.entries(patterns)) {
  const testValue = testCases[type];
  const isValid = pattern.test(testValue);
  console.log(\`\${type.padEnd(10)}: "\${testValue}" - \${isValid ? '✅ Valid' : '❌ Invalid'}\`);
}

// 2. String replacement with callbacks
console.log("\\n2. Advanced Replacement:");

function markdownToHTML(markdown) {
  return markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')  // Headers
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')  // Bold
    .replace(/\\*(.*?)\\*/g, '<em>$1</em>')  // Italic
    .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g, '<a href="$2">$1</a>')  // Links
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')  // Blockquotes
    .replace(/\\n\\n/g, '</p><p>')  // Paragraphs
    .replace(/^/g, '<p>')  // Start paragraph
    .replace(/$/g, '</p>');  // End paragraph
}

const markdown = \`
# Welcome to Markdown

This is **bold** and this is *italic*.

Visit [Google](https://google.com) for more.

> This is a blockquote

Regular text continues here.
\`;

console.log("Markdown to HTML:");
console.log(markdownToHTML(markdown));

// 3. Text parsing and analysis
console.log("\\n3. Text Analysis with Regex:");

function analyzeCode(code) {
  const analysis = {
    lines: code.split('\\n').length,
    characters: code.length,
    comments: 0,
    functions: 0,
    variables: 0,
    strings: 0,
    numbers: 0
  };
  
  // Count comments
  analysis.comments = (code.match(/\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//g) || []).length;
  
  // Count function declarations
  analysis.functions = (code.match(/\\bfunction\\s+\\w+\\s*\\(|\\bconst\\s+\\w+\\s*=\\s*\\(|\\blet\\s+\\w+\\s*=\\s*\\(|\\bclass\\s+\\w+/g) || []).length;
  
  // Count variable declarations
  analysis.variables = (code.match(/\\b(const|let|var)\\s+\\w+/g) || []).length;
  
  // Count strings
  analysis.strings = (code.match(/"[^"]*"|'[^']*'|\`[^\`]*\`/g) || []).length;
  
  // Count numbers
  analysis.numbers = (code.match(/\\b\\d+(\\.\\d+)?\\b/g) || []).length;
  
  // Calculate complexity
  analysis.complexity = (
    analysis.functions * 0.3 +
    analysis.variables * 0.1 +
    analysis.lines * 0.05
  ).toFixed(2);
  
  return analysis;
}

const sampleCode = \`
// This is a comment
function calculateSum(a, b) {
  const result = a + b;
  return result;
}

const multiply = (x, y) => x * y;
let counter = 0;
const MAX_VALUE = 100;
const message = "Hello, World!";
const price = 19.99;
\`;

console.log("Code analysis:", analyzeCode(sampleCode));

// ========== Real-World String Applications ==========
console.log("\\n\\n=== Real-World String Applications ===");

// 1. CSV/TSV parser
console.log("\\n1. CSV/TSV Parser:");

function parseDelimited(text, delimiter = ',') {
  const lines = text.trim().split('\\n');
  const headers = lines[0].split(delimiter);
  
  return lines.slice(1).map(line => {
    const values = [];
    let currentValue = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (char === '"' && nextChar === '"') {
        currentValue += '"';
        i++; // Skip next quote
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === delimiter && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    values.push(currentValue.trim());
    
    // Create object from headers and values
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index] || '';
      return obj;
    }, {});
  });
}

const csvData = \`
Name,Age,City,Email
John Doe,30,New York,john@example.com
"Jane Smith, Jr.",25,"Los Angeles, CA",jane@example.com
Bob Johnson,35,Boston,bob@example.com
\`;

console.log("Parsed CSV:", parseDelimited(csvData));

// 2. Text diff generator
console.log("\\n2. Text Diff Generator:");

function generateDiff(text1, text2) {
  const lines1 = text1.split('\\n');
  const lines2 = text2.split('\\n');
  const maxLength = Math.max(lines1.length, lines2.length);
  
  const diff = [];
  
  for (let i = 0; i < maxLength; i++) {
    const line1 = lines1[i] || '';
    const line2 = lines2[i] || '';
    
    if (line1 === line2) {
      diff.push(\`  \${line1}\`);
    } else {
      if (line1) diff.push(\`- \${line1}\`);
      if (line2) diff.push(\`+ \${line2}\`);
    }
  }
  
  return diff.join('\\n');
}

const original = \`
function greet(name) {
  return "Hello, " + name;
}

function add(a, b) {
  return a + b;
}
\`;

const modified = \`
function greet(name) {
  return \`Hello, \${name}!\`;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}
\`;

console.log("Text diff:");
console.log(generateDiff(original, modified));

// 3. Template engine
console.log("\\n3. Simple Template Engine:");

function createTemplateEngine(template) {
  const cache = new Map();
  
  return function(data) {
    if (cache.has(template)) {
      return cache.get(template)(data);
    }
    
    // Parse template and create function
    const code = \`
      with(data) {
        return \`\${template.replace(/\\$\\{([^}]+)\\}/g, '\${$1}')}\`
      }
    \`;
    
    try {
      const render = new Function('data', code);
      cache.set(template, render);
      return render(data);
    } catch (error) {
      throw new Error(\`Template error: \${error.message}\`);
    }
  };
}

const userTemplate = \`
<div class="user-profile">
  <h2>\${name}</h2>
  <p>Age: \${age}</p>
  <p>Email: \${email}</p>
  <p>Status: \${isActive ? 'Active' : 'Inactive'}</p>
  \${skills ? \`
    <div class="skills">
      <h3>Skills:</h3>
      <ul>
        \${skills.map(skill => \`<li>\${skill}</li>\`).join('')}
      </ul>
    </div>
  \` : ''}
</div>
\`;

const renderUser = createTemplateEngine(userTemplate);
const userData = {
  name: "Alice Smith",
  age: 28,
  email: "alice@example.com",
  isActive: true,
  skills: ["JavaScript", "React", "Node.js", "TypeScript"]
};

console.log("Rendered template:");
console.log(renderUser(userData));

// 4. String compression (basic)
console.log("\\n4. Run-Length Encoding:");

function runLengthEncode(str) {
  let encoded = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encoded += \`\${count}\${str[i]}\`;
      count = 1;
    }
  }
  
  return encoded;
}

function runLengthDecode(encoded) {
  let decoded = '';
  let count = '';
  
  for (let i = 0; i < encoded.length; i++) {
    if (/\d/.test(encoded[i])) {
      count += encoded[i];
    } else {
      decoded += encoded[i].repeat(parseInt(count, 10));
      count = '';
    }
  }
  
  return decoded;
}

const textToCompress = "AAAAABBBCCCCCCDDDDDDEEEEFFFF";
const compressed = runLengthEncode(textToCompress);
const decompressed = runLengthDecode(compressed);

console.log(\`Original: "\${textToCompress}"\`);
console.log(\`Compressed: "\${compressed}"\`);
console.log(\`Decompressed: "\${decompressed}"\`);
console.log(\`Compression ratio: \${(compressed.length / textToCompress.length * 100).toFixed(1)}%\`);`,
      explanation: 'These comprehensive examples demonstrate string manipulation, template literals, regex patterns, and real-world applications of JavaScript strings.',
      preview: '<div class="preview-demo"><h3 style="color: #3b82f6">Strings Preview</h3><p>Experiment with string methods and see how text manipulation works in JavaScript!</p><div id="stringOutput" class="result-box">String operations results will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: String', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' },
    { title: 'JavaScript.info: Strings', url: 'https://javascript.info/string' },
    { title: 'Template Literals Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals' },
    { title: 'Regular Expressions Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' }
  ],
  prerequisites: ['js-objects'],
  nextTopics: ['js-numbers-math']
  },
{
  id: 'js-numbers-math',
  title: 'Numbers & Math',
  icon: <Hash />,
  difficulty: 'beginner',
  estimatedTime: 15,
  category: 'javascript',
  order: 11,
  sections: [
    'Number Types',
    'Math Object',
    'Number Methods',
    'Arithmetic Operations',
    'Rounding & Precision',
    'Random Numbers',
    'BigInt (ES2020)'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">🔢</div>
        <h1>Numbers & Math in JavaScript</h1>
        <p class="concept-tagline">Master Numerical Operations and Mathematical Functions</p>
      </div>
      
      <div class="math-3d-visual">
        <div class="math-sphere">
          <div class="equation">π = 3.14159</div>
          <div class="equation">e = 2.71828</div>
          <div class="equation">√2 = 1.41421</div>
        </div>
      </div>
      
      <h2>🎯 Number Types in JavaScript</h2>
      <div class="number-types-3d">
        <div class="type-grid">
          <div class="type-card">
            <div class="type-icon">💎</div>
            <h3>Integers</h3>
            <code>42, -7, 0, 1000</code>
            <p>Whole numbers without fractions</p>
          </div>
          <div class="type-card">
            <div class="type-icon">📐</div>
            <h3>Floating Point</h3>
            <code>3.14, -0.5, 2.998e8</code>
            <p>Numbers with decimal points</p>
          </div>
          <div class="type-card">
            <div class="type-icon">∞</div>
            <h3>Infinity</h3>
            <code>Infinity, -Infinity</code>
            <p>Largest/smallest representable numbers</p>
          </div>
          <div class="type-card">
            <div class="type-icon">❓</div>
            <h3>NaN</h3>
            <code>NaN (Not a Number)</code>
            <p>Invalid mathematical operation</p>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Number Creation Examples:</h3>
        <pre><code>// Different number notations
const decimal = 42;
const float = 3.14159;
const scientific = 5.2e8; // 520,000,000
const hex = 0xFF; // 255 in hexadecimal
const binary = 0b1010; // 10 in binary
const octal = 0o777; // 511 in octal

// Special numbers
const infinity = Infinity;
const negativeInfinity = -Infinity;
const notANumber = NaN;

// Number constructor
const fromString = Number("123"); // 123
const invalid = Number("123abc"); // NaN

console.log("Decimal:", decimal);
console.log("Float:", float);
console.log("Scientific:", scientific);
console.log("Hexadecimal:", hex);
console.log("Binary:", binary);
console.log("Octal:", octal);
console.log("Infinity:", infinity);
console.log("NaN:", notANumber);</code></pre>
      </div>
      
      <h2>🧮 Math Object - Your Mathematical Toolkit</h2>
      <div class="math-methods-3d">
        <div class="math-category">
          <h3>🔢 Basic Operations</h3>
          <div class="method-grid">
            <div class="method-card">
              <code class="method-name">Math.abs(x)</code>
              <p>Absolute value</p>
              <code class="example">Math.abs(-5) → 5</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.sqrt(x)</code>
              <p>Square root</p>
              <code class="example">Math.sqrt(16) → 4</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.pow(x, y)</code>
              <p>Power/exponent</p>
              <code class="example">Math.pow(2, 3) → 8</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.cbrt(x)</code>
              <p>Cube root</p>
              <code class="example">Math.cbrt(27) → 3</code>
            </div>
          </div>
        </div>
        
        <div class="math-category">
          <h3>📈 Rounding & Precision</h3>
          <div class="method-grid">
            <div class="method-card">
              <code class="method-name">Math.round(x)</code>
              <p>Round to nearest integer</p>
              <code class="example">Math.round(4.7) → 5</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.floor(x)</code>
              <p>Round down</p>
              <code class="example">Math.floor(4.7) → 4</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.ceil(x)</code>
              <p>Round up</p>
              <code class="example">Math.ceil(4.2) → 5</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.trunc(x)</code>
              <p>Remove decimal part</p>
              <code class="example">Math.trunc(4.7) → 4</code>
            </div>
          </div>
        </div>
        
        <div class="math-category">
          <h3>🎲 Random & Constants</h3>
          <div class="method-grid">
            <div class="method-card">
              <code class="method-name">Math.random()</code>
              <p>Random 0-1</p>
              <code class="example">Math.random() → 0.123</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.PI</code>
              <p>π constant</p>
              <code class="example">Math.PI ≈ 3.14159</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.E</code>
              <p>Euler's number</p>
              <code class="example">Math.E ≈ 2.71828</code>
            </div>
            <div class="method-card">
              <code class="method-name">Math.SQRT2</code>
              <p>√2 constant</p>
              <code class="example">Math.SQRT2 ≈ 1.41421</code>
            </div>
          </div>
        </div>
      </div>
      
      <h2>📊 Number Methods & Precision</h2>
      <div class="example-section">
        <h3>Number Methods Examples:</h3>
        <pre><code>const num = 123.456789;

// Formatting
console.log(num.toFixed(2));      // "123.46" (2 decimal places)
console.log(num.toPrecision(5));  // "123.46" (5 total digits)
console.log(num.toExponential(2)); // "1.23e+2"

// Type checking
console.log(Number.isFinite(42));    // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN("text"));   // false (global isNaN would say true)
console.log(Number.isInteger(42));   // true
console.log(Number.isInteger(42.5)); // false

// Parsing
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseFloat("3.14em")); // 3.14
console.log(Number("0xFF"));         // 255 (hex to decimal)

// Safe integers
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.isSafeInteger(42)); // true

// Precision issues (floating point)
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false!</code></pre>
      </div>
      
      <h2>🎲 Random Number Generation</h2>
      <div class="random-3d">
        <div class="dice-animation">
          <div class="dice-face">⚀</div>
          <div class="dice-face">⚁</div>
          <div class="dice-face">⚂</div>
          <div class="dice-face">⚃</div>
          <div class="dice-face">⚄</div>
          <div class="dice-face">⚅</div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Practical Random Number Examples:</h3>
        <pre><code>// Basic random number between 0 and 1
const random = Math.random();
console.log("Random 0-1:", random);

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random float between min and max
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Random boolean
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// Random array element
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Test the functions
console.log("Random integer 1-10:", getRandomInt(1, 10));
console.log("Random float 0-100:", getRandomFloat(0, 100).toFixed(2));
console.log("Random boolean:", getRandomBoolean());

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("Random color:", getRandomElement(colors));

// Weighted random selection
function getWeightedRandom(items, weights) {
  let totalWeight = weights.reduce((a, b) => a + b, 0);
  let random = Math.random() * totalWeight;
  
  for (let i = 0; i < items.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return items[i];
    }
  }
}

const loot = ["Common", "Rare", "Epic", "Legendary"];
const lootWeights = [60, 25, 10, 5]; // Percentages
console.log("Random loot:", getWeightedRandom(loot, lootWeights));</code></pre>
      </div>
      
      <h2>💎 BigInt - Large Integer Support</h2>
      <div class="bigint-3d">
        <div class="big-number">9,007,199,254,740,991</div>
        <div class="big-arrow">↑</div>
        <div class="big-label">MAX_SAFE_INTEGER</div>
      </div>
      
      <div class="example-section">
        <h3>BigInt Examples (ES2020+):</h3>
        <pre><code>// Creating BigInt
const big1 = 12345678901234567890n;
const big2 = BigInt("12345678901234567890");
const big3 = BigInt(9007199254740991); // Max safe integer

console.log("BigInt 1:", big1);
console.log("BigInt 2:", big2);
console.log("BigInt 3:", big3);

// Operations
const a = 12345678901234567890n;
const b = 98765432109876543210n;

console.log("Addition:", a + b);
console.log("Subtraction:", b - a);
console.log("Multiplication:", a * 2n);
console.log("Division:", b / 2n);
console.log("Modulus:", b % a);
console.log("Exponentiation:", 2n ** 10n); // 1024n

// Comparisons work normally
console.log("a > b:", a > b);
console.log("a === b:", a === b);

// Cannot mix with regular numbers
// console.log(a + 1); // TypeError!
console.log(Number(a) + 1); // Convert first

// BigInt methods
console.log("toString:", a.toString());
console.log("toString(2):", a.toString(2)); // Binary
console.log("toString(16):", a.toString(16)); // Hexadecimal

// Use cases: Large IDs, cryptography, financial calculations
const userId = 9007199254740993n; // Beyond safe integer range
console.log("User ID:", userId);</code></pre>
      </div>
      
      <h2>📈 Advanced Math Operations</h2>
      <div class="example-section">
        <h3>Trigonometry, Logarithms & Advanced Functions:</h3>
        <pre><code>// Trigonometric functions (angles in radians)
const angle = 45 * (Math.PI / 180); // Convert to radians

console.log("Sine:", Math.sin(angle));
console.log("Cosine:", Math.cos(angle));
console.log("Tangent:", Math.tan(angle));

// Inverse trigonometric functions
console.log("Arcsine:", Math.asin(0.5));
console.log("Arccosine:", Math.acos(0.5));
console.log("Arctangent:", Math.atan(1));

// Hyperbolic functions
console.log("Hyperbolic sine:", Math.sinh(1));
console.log("Hyperbolic cosine:", Math.cosh(1));
console.log("Hyperbolic tangent:", Math.tanh(1));

// Logarithms
console.log("Natural log:", Math.log(Math.E)); // 1
console.log("Base 10 log:", Math.log10(100)); // 2
console.log("Base 2 log:", Math.log2(8)); // 3

// Min/Max
console.log("Minimum:", Math.min(5, 10, 2, 8)); // 2
console.log("Maximum:", Math.max(5, 10, 2, 8)); // 10

// Sign function
console.log("Sign of 5:", Math.sign(5)); // 1
console.log("Sign of -5:", Math.sign(-5)); // -1
console.log("Sign of 0:", Math.sign(0)); // 0

// Clamping values
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log("Clamp 15 between 0-10:", clamp(15, 0, 10)); // 10
console.log("Clamp -5 between 0-10:", clamp(-5, 0, 10)); // 0

// Linear interpolation
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

console.log("Lerp 0 to 100 at 0.5:", lerp(0, 100, 0.5)); // 50</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Financial Calculator</h3>
          <p>Create a compound interest calculator.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function calculateCompoundInterest(principal, rate, time, compoundsPerYear = 12) {
  // A = P(1 + r/n)^(nt)
  const n = compoundsPerYear;
  const r = rate / 100; // Convert percentage to decimal
  
  const amount = principal * Math.pow(1 + r/n, n * time);
  const interest = amount - principal;
  
  return {
    principal: principal,
    rate: rate,
    time: time,
    compoundsPerYear: n,
    finalAmount: amount,
    totalInterest: interest,
    monthlyPayment: amount / (time * 12)
  };
}

// Calculate $1000 at 5% for 5 years
const result = calculateCompoundInterest(1000, 5, 5);
console.log("Compound Interest Calculation:");
console.log(\`Principal: $\${result.principal.toFixed(2)}\`);
console.log(\`Final Amount: $\${result.finalAmount.toFixed(2)}\`);
console.log(\`Total Interest: $\${result.totalInterest.toFixed(2)}\`);
console.log(\`Monthly Payment: $\${result.monthlyPayment.toFixed(2)}\`);</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Statistics Calculator</h3>
          <p>Calculate mean, median, mode, and standard deviation.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function calculateStatistics(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  
  // Mean (average)
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
  // Median
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 0 
    ? (sorted[middle - 1] + sorted[middle]) / 2 
    : sorted[middle];
  
  // Mode
  const frequency = {};
  let maxFreq = 0;
  let modes = [];
  
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      modes = [num];
    } else if (frequency[num] === maxFreq && !modes.includes(num)) {
      modes.push(num);
    }
  });
  
  // Standard deviation
  const variance = numbers.reduce((sum, num) => 
    sum + Math.pow(num - mean, 2), 0) / numbers.length;
  const standardDeviation = Math.sqrt(variance);
  
  return {
    count: numbers.length,
    sum: numbers.reduce((a, b) => a + b, 0),
    mean: parseFloat(mean.toFixed(4)),
    median: parseFloat(median.toFixed(4)),
    mode: modes,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    range: Math.max(...numbers) - Math.min(...numbers),
    variance: parseFloat(variance.toFixed(4)),
    standardDeviation: parseFloat(standardDeviation.toFixed(4))
  };
}

// Test with sample data
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Statistics:", calculateStatistics(data));</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 Number Comparison Table</h3>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Returns</th>
              <th>Example</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Math.floor()</code></td>
              <td>Rounded down integer</td>
              <td><code>Math.floor(4.7) → 4</code></td>
              <td>Age calculation, pagination</td>
            </tr>
            <tr>
              <td><code>Math.ceil()</code></td>
              <td>Rounded up integer</td>
              <td><code>Math.ceil(4.2) → 5</code></td>
              <td>Page count, container sizing</td>
            </tr>
            <tr>
              <td><code>Math.round()</code></td>
              <td>Nearest integer</td>
              <td><code>Math.round(4.5) → 5</code></td>
              <td>General rounding, display values</td>
            </tr>
            <tr>
              <td><code>Math.trunc()</code></td>
              <td>Integer part only</td>
              <td><code>Math.trunc(4.7) → 4</code></td>
              <td>Removing decimals, timestamp conversion</td>
            </tr>
            <tr>
              <td><code>toFixed()</code></td>
              <td>Formatted string</td>
              <td><code>(3.14159).toFixed(2) → "3.14"</code></td>
              <td>Currency, precise measurements</td>
            </tr>
            <tr>
              <td><code>Math.random()</code></td>
              <td>Random 0-1 float</td>
              <td><code>Math.random() → 0.12345</code></td>
              <td>Random generation, simulations</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Numbers & Math Best Practices</h4>
          <ul>
            <li>Use <code>Number.isNaN()</code> instead of global <code>isNaN()</code></li>
            <li>Be aware of floating point precision issues (0.1 + 0.2 !== 0.3)</li>
            <li>Use <code>Math.trunc()</code> for removing decimals (faster than <code>Math.floor()</code> for positive numbers)</li>
            <li>Use <code>toFixed()</code> for displaying numbers, but remember it returns a string</li>
            <li>Consider using <code>BigInt</code> for very large integers (beyond 2^53)</li>
            <li>Cache <code>Math.random()</code> values if you need multiple related random numbers</li>
            <li>Use <code>Number.MAX_SAFE_INTEGER</code> to check for safe integer boundaries</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Numbers & Math Examples',
      code: `// ========== Number Basics ==========
console.log("=== Number Basics ===");

// Number representations
console.log("\\n1. Number Representations:");
console.log("Decimal:", 42);
console.log("Float:", 3.14159);
console.log("Scientific:", 5.2e8); // 520,000,000
console.log("Hex (0xFF):", 0xFF); // 255
console.log("Binary (0b1010):", 0b1010); // 10
console.log("Octal (0o777):", 0o777); // 511

// Special number values
console.log("\\n2. Special Number Values:");
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN:", NaN);
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.EPSILON:", Number.EPSILON);

// Number type checking
console.log("\\n3. Number Type Checking:");
console.log("typeof 42:", typeof 42);
console.log("typeof NaN:", typeof NaN);
console.log("typeof Infinity:", typeof Infinity);
console.log("Number.isFinite(42):", Number.isFinite(42));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('text'):", Number.isNaN('text'));
console.log("Number.isInteger(42):", Number.isInteger(42));
console.log("Number.isInteger(42.5):", Number.isInteger(42.5));
console.log("Number.isSafeInteger(Number.MAX_SAFE_INTEGER):", 
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

// ========== Math Object Examples ==========
console.log("\\n\\n=== Math Object Examples ===");

// Basic operations
console.log("\\n1. Basic Operations:");
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.pow(2, 10):", Math.pow(2, 10));
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // Pythagorean theorem

// Rounding methods
console.log("\\n2. Rounding Methods:");
const num = 3.14159;
console.log("Original number:", num);
console.log("Math.round():", Math.round(num));
console.log("Math.floor():", Math.floor(num));
console.log("Math.ceil():", Math.ceil(num));
console.log("Math.trunc():", Math.trunc(num));

// Constants
console.log("\\n3. Math Constants:");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.SQRT1_2:", Math.SQRT1_2);

// Trigonometric functions
console.log("\\n4. Trigonometric Functions:");
const degrees = 45;
const radians = degrees * (Math.PI / 180);
console.log(\`\${degrees}° in radians: \${radians}\`);
console.log("Math.sin(π/4):", Math.sin(Math.PI/4));
console.log("Math.cos(π/4):", Math.cos(Math.PI/4));
console.log("Math.tan(π/4):", Math.tan(Math.PI/4));
console.log("Math.asin(0.5):", Math.asin(0.5));
console.log("Math.acos(0.5):", Math.acos(0.5));
console.log("Math.atan(1):", Math.atan(1));

// Random numbers
console.log("\\n5. Random Number Generation:");
console.log("Math.random():", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Random 50-100:", Math.floor(Math.random() * 51) + 50);

// Min/Max
console.log("\\n6. Min/Max Operations:");
console.log("Math.min(5, 10, 2, 8):", Math.min(5, 10, 2, 8));
console.log("Math.max(5, 10, 2, 8):", Math.max(5, 10, 2, 8));

// Sign and absolute
console.log("\\n7. Sign Functions:");
console.log("Math.sign(5):", Math.sign(5));
console.log("Math.sign(-5):", Math.sign(-5));
console.log("Math.sign(0):", Math.sign(0));
console.log("Math.abs(-7.5):", Math.abs(-7.5));

// ========== Number Methods ==========
console.log("\\n\\n=== Number Methods ===");

// Formatting methods
console.log("\\n1. Number Formatting:");
const price = 1234.5678;
console.log("Original:", price);
console.log("toFixed(2):", price.toFixed(2));
console.log("toFixed(0):", price.toFixed(0));
console.log("toPrecision(5):", price.toPrecision(5));
console.log("toPrecision(3):", price.toPrecision(3));
console.log("toExponential(2):", price.toExponential(2));

// String conversion
console.log("\\n2. String Conversion:");
console.log("(42).toString():", (42).toString());
console.log("(42).toString(2):", (42).toString(2)); // Binary
console.log("(42).toString(8):", (42).toString(8)); // Octal
console.log("(42).toString(16):", (42).toString(16)); // Hex
console.log("(255).toString(16):", (255).toString(16)); // "ff"

// Number parsing
console.log("\\n3. Number Parsing:");
console.log("parseInt('42'):", parseInt('42'));
console.log("parseInt('42px'):", parseInt('42px'));
console.log("parseInt('0xFF'):", parseInt('0xFF'));
console.log("parseInt('1010', 2):", parseInt('1010', 2)); // Binary to decimal
console.log("parseFloat('3.14'):", parseFloat('3.14'));
console.log("parseFloat('3.14em'):", parseFloat('3.14em'));

// ========== BigInt Examples ==========
console.log("\\n\\n=== BigInt Examples (ES2020+) ===");

// Creating BigInt
console.log("\\n1. Creating BigInt:");
const big1 = 12345678901234567890n;
const big2 = BigInt("12345678901234567890");
const big3 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log("big1:", big1);
console.log("big2:", big2);
console.log("big3 (MAX_SAFE_INTEGER + 1):", big3);

// Operations with BigInt
console.log("\\n2. BigInt Operations:");
const a = 9007199254740991n; // MAX_SAFE_INTEGER
const b = 1n;
console.log("a + b:", a + b);
console.log("a - b:", a - b);
console.log("a * 2n:", a * 2n);
console.log("a ** 2n:", a ** 2n);
console.log("a / 2n:", a / 2n);
console.log("a % 3n:", a % 3n);

// Comparisons
console.log("\\n3. BigInt Comparisons:");
console.log("a > b:", a > b);
console.log("a === 9007199254740991n:", a === 9007199254740991n);
console.log("a === BigInt(9007199254740991):", a === BigInt(9007199254740991));

// Conversion
console.log("\\n4. BigInt Conversion:");
console.log("Number(a):", Number(a));
console.log("String(a):", String(a));
console.log("a.toString():", a.toString());
console.log("a.toString(2):", a.toString(2)); // Binary

// ========== Practical Applications ==========
console.log("\\n\\n=== Practical Applications ===");

// 1. Financial calculations
console.log("\\n1. Financial Calculations:");
function calculateLoan(principal, annualRate, years) {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  
  // Monthly payment formula
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1);
  
  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - principal;
  
  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    interestPercentage: ((totalInterest / principal) * 100).toFixed(2) + '%'
  };
}

console.log("Loan $200,000 at 3.5% for 30 years:");
console.log(calculateLoan(200000, 3.5, 30));

// 2. Geometry calculations
console.log("\\n2. Geometry Calculations:");
function calculateCircle(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;
  
  return {
    radius,
    area: area.toFixed(2),
    circumference: circumference.toFixed(2),
    diameter: (radius * 2).toFixed(2)
  };
}

console.log("Circle with radius 5:");
console.log(calculateCircle(5));

// 3. Physics calculations
console.log("\\n3. Physics Calculations:");
function calculateProjectile(velocity, angle) {
  const g = 9.81; // gravity
  const angleRad = angle * (Math.PI / 180);
  
  const range = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / g;
  const maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(angleRad), 2)) / (2 * g);
  const timeOfFlight = (2 * velocity * Math.sin(angleRad)) / g;
  
  return {
    velocity,
    angle,
    range: range.toFixed(2) + 'm',
    maxHeight: maxHeight.toFixed(2) + 'm',
    timeOfFlight: timeOfFlight.toFixed(2) + 's'
  };
}

console.log("Projectile at 50 m/s, 45°:");
console.log(calculateProjectile(50, 45));

// 4. Game development utilities
console.log("\\n4. Game Development Utilities:");
const GameMath = {
  // Random integer in range
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  // Random float in range
  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  },
  
  // Linear interpolation
  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  },
  
  // Clamp value between min and max
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },
  
  // Smooth step interpolation
  smoothStep(edge0, edge1, x) {
    const t = this.clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  },
  
  // Distance between two points
  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  },
  
  // Convert degrees to radians
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  },
  
  // Convert radians to degrees
  toDegrees(radians) {
    return radians * (180 / Math.PI);
  },
  
  // Normalize angle to 0-360 range
  normalizeAngle(angle) {
    angle %= 360;
    if (angle < 0) angle += 360;
    return angle;
  }
};

// Test game math functions
console.log("Game Math Examples:");
console.log("Random int 1-100:", GameMath.randomInt(1, 100));
console.log("Lerp 0 to 100 at 0.7:", GameMath.lerp(0, 100, 0.7));
console.log("Clamp 15 between 0-10:", GameMath.clamp(15, 0, 10));
console.log("Distance (0,0) to (3,4):", GameMath.distance(0, 0, 3, 4));
console.log("45° in radians:", GameMath.toRadians(45));
console.log("π/4 in degrees:", GameMath.toDegrees(Math.PI/4));

// 5. Data analysis utilities
console.log("\\n5. Data Analysis Utilities:");
const DataAnalysis = {
  // Calculate mean (average)
  mean(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  },
  
  // Calculate median
  median(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  },
  
  // Calculate mode
  mode(numbers) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];
    
    numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        modes = [num];
      } else if (frequency[num] === maxFreq) {
        modes.push(num);
      }
    });
    
    return modes.length === numbers.length ? [] : modes;
  },
  
  // Calculate standard deviation
  standardDeviation(numbers) {
    const avg = this.mean(numbers);
    const squareDiffs = numbers.map(num => Math.pow(num - avg, 2));
    const avgSquareDiff = this.mean(squareDiffs);
    return Math.sqrt(avgSquareDiff);
  },
  
  // Calculate variance
  variance(numbers) {
    const avg = this.mean(numbers);
    const squareDiffs = numbers.map(num => Math.pow(num - avg, 2));
    return this.mean(squareDiffs);
  },
  
  // Calculate correlation coefficient
  correlation(x, y) {
    if (x.length !== y.length) {
      throw new Error("Arrays must have same length");
    }
    
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, val, i) => sum + val * y[i], 0);
    const sumX2 = x.reduce((sum, val) => sum + val * val, 0);
    const sumY2 = y.reduce((sum, val) => sum + val * val, 0);
    
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    
    return numerator / denominator;
  }
};

// Test data analysis
const testData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Data Analysis:");
console.log("Mean:", DataAnalysis.mean(testData));
console.log("Median:", DataAnalysis.median(testData));
console.log("Mode:", DataAnalysis.mode(testData));
console.log("Standard Deviation:", DataAnalysis.standardDeviation(testData).toFixed(2));
console.log("Variance:", DataAnalysis.variance(testData).toFixed(2));

const xData = [1, 2, 3, 4, 5];
const yData = [2, 4, 6, 8, 10];
console.log("Correlation:", DataAnalysis.correlation(xData, yData).toFixed(2));`,
      explanation: 'These comprehensive examples demonstrate JavaScript numbers, mathematical operations, and practical applications in various domains.',
      preview: '<div class="preview-demo"><h3 style="color: #ef4444">Math & Numbers Preview</h3><p>Experiment with different mathematical operations and number methods!</p><div id="mathOutput" class="result-box">Mathematical results will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Number', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number' },
    { title: 'MDN: Math', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math' },
    { title: 'JavaScript.info: Numbers', url: 'https://javascript.info/number' },
    { title: 'BigInt Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt' }
  ],
  prerequisites: ['js-strings'],
  nextTopics: ['js-dates']
},

{
  id: 'js-dates',
  title: 'Dates & Time',
  icon: <Calendar />,
  difficulty: 'beginner',
  estimatedTime: 15,
  category: 'javascript',
  order: 12,
  sections: [
    'Date Object Creation',
    'Date Methods',
    'Date Formatting',
    'Time Zones',
    'Date Arithmetic',
    'Internationalization',
    'Timers & Intervals'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">📅</div>
        <h1>Dates & Time in JavaScript</h1>
        <p class="concept-tagline">Master Date Manipulation, Time Zones, and Scheduling</p>
      </div>
      
      <div class="date-3d-visual">
        <div class="calendar-3d">
          <div class="calendar-header">DEC 2024</div>
          <div class="calendar-grid">
            <div class="weekday">SUN</div><div class="weekday">MON</div><div class="weekday">TUE</div>
            <div class="weekday">WED</div><div class="weekday">THU</div><div class="weekday">FRI</div>
            <div class="weekday">SAT</div>
            ${Array.from({ length: 31 }, (_, i) => 
              `<div class="day ${i + 1 === 25 ? 'today' : ''}">${i + 1}</div>`
            ).join('')}
          </div>
        </div>
      </div>
      
      <h2>📅 Date Object Creation</h2>
      <div class="date-creation-3d">
        <div class="creation-methods">
          <div class="method">
            <div class="method-icon">🆕</div>
            <h3>Current Date</h3>
            <code>new Date()</code>
          </div>
          <div class="method">
            <div class="method-icon">🔢</div>
            <h3>Timestamp</h3>
            <code>new Date(timestamp)</code>
          </div>
          <div class="method">
            <div class="method-icon">📝</div>
            <h3>String</h3>
            <code>new Date("2024-12-25")</code>
          </div>
          <div class="method">
            <div class="method-icon">🎯</div>
            <h3>Components</h3>
            <code>new Date(2024, 11, 25)</code>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Creating Date Objects:</h3>
        <pre><code>// 1. Current date and time
const now = new Date();
console.log("Now:", now);

// 2. From timestamp (milliseconds since Jan 1, 1970)
const timestamp = 1703462400000; // Dec 25, 2023
const dateFromTimestamp = new Date(timestamp);
console.log("From timestamp:", dateFromTimestamp);

// 3. From date string
const dateFromString = new Date("2024-12-25");
const dateFromString2 = new Date("December 25, 2024");
const dateFromString3 = new Date("12/25/2024");
console.log("From string:", dateFromString);

// 4. From individual components
// Note: Month is 0-indexed (0 = January, 11 = December)
const dateFromComponents = new Date(2024, 11, 25); // Dec 25, 2024
const dateWithTime = new Date(2024, 11, 25, 10, 30, 0); // Dec 25, 2024 10:30:00
console.log("From components:", dateFromComponents);

// 5. Invalid date
const invalidDate = new Date("invalid string");
console.log("Invalid date:", invalidDate);
console.log("Is valid?", !isNaN(invalidDate.getTime())); // false

// 6. Using Date.now() for current timestamp
const currentTimestamp = Date.now();
console.log("Current timestamp:", currentTimestamp);</code></pre>
      </div>
      
      <h2>⏰ Date Methods - Get Information</h2>
      <div class="date-methods-3d">
        <div class="methods-grid">
          <div class="method-category">
            <h3>📅 Get Date Components</h3>
            <div class="method-list">
              <div class="method-item">
                <code>getFullYear()</code>
                <span>4-digit year (2024)</span>
              </div>
              <div class="method-item">
                <code>getMonth()</code>
                <span>Month (0-11)</span>
              </div>
              <div class="method-item">
                <code>getDate()</code>
                <span>Day of month (1-31)</span>
              </div>
              <div class="method-item">
                <code>getDay()</code>
                <span>Weekday (0-6, 0=Sunday)</span>
              </div>
            </div>
          </div>
          
          <div class="method-category">
            <h3>⏱️ Get Time Components</h3>
            <div class="method-list">
              <div class="method-item">
                <code>getHours()</code>
                <span>Hours (0-23)</span>
              </div>
              <div class="method-item">
                <code>getMinutes()</code>
                <span>Minutes (0-59)</span>
              </div>
              <div class="method-item">
                <code>getSeconds()</code>
                <span>Seconds (0-59)</span>
              </div>
              <div class="method-item">
                <code>getMilliseconds()</code>
                <span>Milliseconds (0-999)</span>
              </div>
            </div>
          </div>
          
          <div class="method-category">
            <h3>🌐 Get UTC Components</h3>
            <div class="method-list">
              <div class="method-item">
                <code>getUTCFullYear()</code>
                <span>UTC year</span>
              </div>
              <div class="method-item">
                <code>getUTCHours()</code>
                <span>UTC hours</span>
              </div>
              <div class="method-item">
                <code>getTime()</code>
                <span>Timestamp (ms)</span>
              </div>
              <div class="method-item">
                <code>getTimezoneOffset()</code>
                <span>Timezone offset (min)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Getting Date Information:</h3>
        <pre><code>const date = new Date(2024, 11, 25, 10, 30, 45, 123); // Dec 25, 2024 10:30:45.123

console.log("Original date:", date);

// Date components
console.log("\\n📅 Date Components:");
console.log("Year:", date.getFullYear());        // 2024
console.log("Month:", date.getMonth());          // 11 (December, 0-indexed!)
console.log("Date:", date.getDate());            // 25
console.log("Day:", date.getDay());              // 3 (Wednesday, 0=Sunday)

// Time components
console.log("\\n⏰ Time Components:");
console.log("Hours:", date.getHours());          // 10
console.log("Minutes:", date.getMinutes());      // 30
console.log("Seconds:", date.getSeconds());      // 45
console.log("Milliseconds:", date.getMilliseconds()); // 123

// UTC components
console.log("\\n🌐 UTC Components:");
console.log("UTC Full Year:", date.getUTCFullYear());
console.log("UTC Hours:", date.getUTCHours());
console.log("UTC Minutes:", date.getUTCMinutes());

// Timestamp and timezone
console.log("\\n📊 Other Information:");
console.log("Timestamp:", date.getTime());       // Milliseconds since Jan 1, 1970
console.log("Timezone Offset:", date.getTimezoneOffset(), "minutes");

// Using Date.now() for performance measurement
const start = Date.now();
// Simulate some work
for (let i = 0; i < 1000000; i++) {}
const end = Date.now();
console.log("\\n⏱️ Performance measurement:");
console.log("Time taken:", end - start, "milliseconds");</code></pre>
      </div>
      
      <h2>✏️ Date Methods - Set & Modify</h2>
      <div class="date-modify-3d">
        <div class="modify-methods">
          <div class="method-card">
            <h3>Set Date Components</h3>
            <pre><code>const date = new Date();

// Set individual components
date.setFullYear(2025);
date.setMonth(0); // January (0-indexed)
date.setDate(15);
date.setHours(14);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);

console.log("Modified date:", date);</code></pre>
          </div>
          
          <div class="method-card">
            <h3>Set UTC Components</h3>
            <pre><code>const date = new Date();

// Set UTC components
date.setUTCFullYear(2025);
date.setUTCMonth(0);
date.setUTCDate(15);
date.setUTCHours(14);

console.log("Modified UTC date:", date);</code></pre>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Modifying Dates:</h3>
        <pre><code>// Create a date
const date = new Date(2024, 0, 1); // Jan 1, 2024
console.log("Original:", date.toString());

// Modify individual components
console.log("\\n📝 Modifying Date Components:");
date.setFullYear(2025);
console.log("After setFullYear(2025):", date.toString());

date.setMonth(5); // June (0-indexed)
console.log("After setMonth(5):", date.toString());

date.setDate(15);
console.log("After setDate(15):", date.toString());

// Modify time components
date.setHours(14);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(123);
console.log("\\n⏱️ After setting time:", date.toString());

// Set using timestamp
const newTimestamp = Date.now() + (7 * 24 * 60 * 60 * 1000); // One week from now
date.setTime(newTimestamp);
console.log("\\n🔄 After setTime():", date.toString());

// Creating date copies
const original = new Date();
const copy = new Date(original.getTime()); // Proper copy
const copy2 = new Date(original); // Also works

// Reset to specific date
date.setFullYear(2024, 11, 25); // Year, month, date
date.setHours(0, 0, 0, 0); // Midnight
console.log("\\n🎄 Christmas 2024:", date.toString());</code></pre>
      </div>
      
      <h2>📊 Date Formatting & Display</h2>
      <div class="date-formatting-3d">
        <div class="formatting-options">
          <div class="format-card">
            <h3>toString() Methods</h3>
            <div class="format-examples">
              <div><code>toString()</code> → Full date string</div>
              <div><code>toDateString()</code> → Date portion</div>
              <div><code>toTimeString()</code> → Time portion</div>
              <div><code>toUTCString()</code> → UTC string</div>
            </div>
          </div>
          
          <div class="format-card">
            <h3>ISO & Local</h3>
            <div class="format-examples">
              <div><code>toISOString()</code> → ISO 8601 format</div>
              <div><code>toLocaleString()</code> → Localized format</div>
              <div><code>toLocaleDateString()</code> → Local date</div>
              <div><code>toLocaleTimeString()</code> → Local time</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Formatting Dates:</h3>
        <pre><code>const date = new Date(2024, 11, 25, 14, 30, 45);

console.log("📋 toString() methods:");
console.log("toString():", date.toString());
console.log("toDateString():", date.toDateString());
console.log("toTimeString():", date.toTimeString());
console.log("toUTCString():", date.toUTCString());
console.log("toISOString():", date.toISOString()); // ISO 8601 format

console.log("\\n🌍 Localized formatting:");
console.log("toLocaleString():", date.toLocaleString());
console.log("toLocaleDateString():", date.toLocaleDateString());
console.log("toLocaleTimeString():", date.toLocaleTimeString());

// Custom locale formatting
console.log("\\n🎯 Custom Locale Formatting:");
console.log("US English:", date.toLocaleString('en-US'));
console.log("British English:", date.toLocaleString('en-GB'));
console.log("German:", date.toLocaleString('de-DE'));
console.log("Japanese:", date.toLocaleString('ja-JP'));

// With options
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};

console.log("\\n⚙️ With formatting options:");
console.log("Formatted:", date.toLocaleString('en-US', options));

// Different date styles
const dateStyles = {
  dateStyle: 'full',
  timeStyle: 'long'
};
console.log("Full date style:", date.toLocaleString('en-US', dateStyles));

// Custom format function
function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

console.log("\\n🔧 Custom formatting:");
console.log("ISO format:", formatDate(date, 'YYYY-MM-DD HH:mm:ss'));
console.log("US format:", formatDate(date, 'MM/DD/YYYY HH:mm'));
console.log("EU format:", formatDate(date, 'DD.MM.YYYY'));</code></pre>
      </div>
      
      <h2>🌐 Time Zones & Internationalization</h2>
      <div class="timezone-3d">
        <div class="world-clock">
          <div class="timezone" style="--tz: -8">🌎 PST</div>
          <div class="timezone" style="--tz: -5">🇺🇸 EST</div>
          <div class="timezone" style="--tz: 0">🇬🇧 GMT</div>
          <div class="timezone" style="--tz: 1">🇪🇺 CET</div>
          <div class="timezone" style="--tz: 5.5">🇮🇳 IST</div>
          <div class="timezone" style="--tz: 9">🇯🇵 JST</div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Working with Time Zones:</h3>
        <pre><code>const date = new Date();

console.log("🌍 Time Zone Information:");
console.log("Local time:", date.toString());
console.log("UTC time:", date.toUTCString());
console.log("ISO time:", date.toISOString());
console.log("Timezone offset:", date.getTimezoneOffset(), "minutes");

// Working with specific time zones
console.log("\\n🎯 Specific Time Zones:");
console.log("New York:", date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
console.log("London:", date.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
console.log("Tokyo:", date.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
console.log("Sydney:", date.toLocaleString('en-AU', { timeZone: 'Australia/Sydney' }));

// Displaying time zone names
console.log("\\n📍 Time Zone Names:");
const timeZoneOptions = {
  timeZone: 'America/New_York',
  timeZoneName: 'long'
};
console.log("Full time zone name:", date.toLocaleString('en-US', timeZoneOptions));

// Convert between time zones
function convertTimeZone(date, fromZone, toZone) {
  const fromOptions = {
    timeZone: fromZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const toOptions = {
    timeZone: toZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const fromStr = date.toLocaleString('en-US', fromOptions);
  const toStr = date.toLocaleString('en-US', toOptions);
  
  return {
    from: \`\${fromStr} (\${fromZone})\`,
    to: \`\${toStr} (\${toZone})\`
  };
}

console.log("\\n🔄 Time Zone Conversion:");
const conversion = convertTimeZone(
  new Date(),
  'America/New_York',
  'Asia/Tokyo'
);
console.log("From:", conversion.from);
console.log("To:", conversion.to);

// Handling daylight saving time
console.log("\\n🌞 Daylight Saving Time Example:");
const winterDate = new Date('2024-01-15T12:00:00');
const summerDate = new Date('2024-07-15T12:00:00');

console.log("Winter offset (EST):", winterDate.getTimezoneOffset());
console.log("Summer offset (EDT):", summerDate.getTimezoneOffset());

// List available time zones
console.log("\\n🗺️ Available Time Zones (Intl API):");
if (Intl.supportedValuesOf) {
  const timeZones = Intl.supportedValuesOf('timeZone');
  console.log("Total time zones:", timeZones.length);
  console.log("First 5:", timeZones.slice(0, 5));
}</code></pre>
      </div>
      
      <h2>📅 Date Arithmetic & Comparisons</h2>
      <div class="date-arithmetic-3d">
        <div class="arithmetic-operations">
          <div class="operation">
            <div class="op-icon">➕</div>
            <h3>Add Days</h3>
            <code>date + days*24*60*60*1000</code>
          </div>
          <div class="operation">
            <div class="op-icon">➖</div>
            <h3>Subtract Days</h3>
            <code>date - milliseconds</code>
          </div>
          <div class="operation">
            <div class="op-icon">⚖️</div>
            <h3>Compare Dates</h3>
            <code>date1 > date2</code>
          </div>
          <div class="operation">
            <div class="op-icon">📊</div>
            <h3>Date Difference</h3>
            <code>date2 - date1</code>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Date Calculations:</h3>
<pre><code>// Date arithmetic using timestamps
console.log("📅 Date Arithmetic:");

const today = new Date();
console.log("Today:", today.toDateString());

// Add days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Add months
function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

// Add years
function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

// Test date arithmetic
console.log("\\n➕ Adding time:");
console.log("Tomorrow:", addDays(today, 1).toDateString());
console.log("Next week:", addDays(today, 7).toDateString());
console.log("Next month:", addMonths(today, 1).toDateString());
console.log("Next year:", addYears(today, 1).toDateString());

// Calculate difference between dates
function getDateDifference(date1, date2) {
  const diff = Math.abs(date2 - date1); // Difference in milliseconds
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  return {
    milliseconds: diff,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    weeks: Math.floor(days / 7),
    months: Math.floor(days / 30.44), // Average month length
    years: Math.floor(days / 365.25)  // Average year length
  };
}

const christmas = new Date(2024, 11, 25);
const difference = getDateDifference(today, christmas);
console.log("\\n📊 Days until Christmas 2024:");
console.log(\`\${difference.days} days (\${difference.weeks} weeks)\`);

// Date comparisons
console.log("\\n⚖️ Date Comparisons:");
console.log("today > christmas?", today > christmas);
console.log("today < christmas?", today < christmas);
console.log("today === new Date()?", today.toString() === new Date().toString());
console.log("Same day?", today.toDateString() === new Date().toDateString());

// Working with date ranges
function isDateInRange(date, startDate, endDate) {
  return date >= startDate && date <= endDate;
}

function getDaysBetween(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((endDate - startDate) / oneDay));
}

const start = new Date(2024, 0, 1);
const end = new Date(2024, 0, 31);
console.log("\\n🎯 Date Range Operations:");
console.log("Is today in Jan 2024?", isDateInRange(today, start, end));
console.log("Days in Jan 2024:", getDaysBetween(start, end));

// Age calculation
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

const birthDate = new Date(1990, 5, 15);
console.log("\\n🎂 Age Calculation:");
console.log("Age:", calculateAge(birthDate));</code></pre>
      </div>
      
      <h2>⏱️ Timers: setTimeout & setInterval</h2>
      <div class="timer-3d">
        <div class="timer-display">
          <div class="timer-digits">00:00:00</div>
          <div class="timer-controls">
            <button class="timer-btn start">▶️</button>
            <button class="timer-btn pause">⏸️</button>
            <button class="timer-btn reset">🔄</button>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Working with Timers:</h3>
<pre><code>// setTimeout - Execute once after delay
console.log("⏱️ setTimeout Examples:");

// Basic setTimeout
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// With parameters
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
setTimeout(greet, 1000, "Alice");

// Clear timeout
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId);
console.log("Timeout cleared");

// setInterval - Execute repeatedly
console.log("\\n🔄 setInterval Examples:");

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(\`Interval count: \${counter}\`);
  
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Animation frame for smooth animations
function animate() {
  let start = null;
  
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    
    // Update animation here
    console.log(\`Animation progress: \${progress}ms\`);
    
    if (progress < 2000) { // Animate for 2 seconds
      requestAnimationFrame(step);
    }
  }
  
  requestAnimationFrame(step);
}

// Countdown timer
class CountdownTimer {
  constructor(duration, onTick, onComplete) {
    this.duration = duration;
    this.remaining = duration;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.intervalId = null;
    this.isRunning = false;
  }
  
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.remaining -= 1000;
      this.onTick(this.remaining);
      
      if (this.remaining <= 0) {
        this.stop();
        this.onComplete();
      }
    }, 1000);
  }
  
  pause() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }
  
  stop() {
    this.pause();
    this.remaining = this.duration;
  }
  
  getFormattedTime() {
    const seconds = Math.floor(this.remaining / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
  }
}

// Usage
const timer = new CountdownTimer(
  10000, // 10 seconds
  (remaining) => {
    console.log(\`Time remaining: \${timer.getFormattedTime()}\`);
  },
  () => {
    console.log("⏰ Time's up!");
  }
);

console.log("\\n⏰ Countdown Timer:");
timer.start();</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Event Countdown Timer</h3>
          <p>Create a countdown timer for an upcoming event.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class EventCountdown {
  constructor(eventDate, eventName) {
    this.eventDate = new Date(eventDate);
    this.eventName = eventName;
    this.intervalId = null;
  }
  
  start() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }
  
  stop() {
    clearInterval(this.intervalId);
  }
  
  update() {
    const now = new Date();
    const diff = this.eventDate - now;
    
    if (diff <= 0) {
      this.stop();
      console.log(\`🎉 \${this.eventName} has started!\`);
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    console.log(
      \`\${this.eventName} in: \${days}d \${hours}h \${minutes}m \${seconds}s\`
    );
  }
  
  getTimeRemaining() {
    const now = new Date();
    const diff = this.eventDate - now;
    
    return {
      total: diff,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  }
}

// Usage
const newYearCountdown = new EventCountdown('2025-01-01T00:00:00', 'New Year 2025');
console.log("Event Countdown:");
newYearCountdown.start();</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Working Days Calculator</h3>
          <p>Calculate working days between two dates, excluding weekends.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>function getWorkingDays(startDate, endDate, holidays = []) {
  // Convert holiday strings to Date objects
  const holidayDates = holidays.map(date => new Date(date));
  
  // Ensure start date is before end date
  const start = new Date(Math.min(startDate, endDate));
  const end = new Date(Math.max(startDate, endDate));
  
  let workingDays = 0;
  const current = new Date(start);
  
  // Iterate through each day
  while (current <= end) {
    const dayOfWeek = current.getDay();
    
    // Check if it's a weekday (Monday=1 to Friday=5)
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    
    // Check if it's a holiday
    const isHoliday = holidayDates.some(holiday => 
      holiday.getDate() === current.getDate() &&
      holiday.getMonth() === current.getMonth() &&
      holiday.getFullYear() === current.getFullYear()
    );
    
    if (isWeekday && !isHoliday) {
      workingDays++;
    }
    
    // Move to next day
    current.setDate(current.getDate() + 1);
  }
  
  return workingDays;
}

// Usage
const startDate = new Date(2024, 0, 1); // Jan 1, 2024
const endDate = new Date(2024, 0, 31); // Jan 31, 2024
const holidays = [
  '2024-01-01', // New Year's Day
  '2024-01-15'  // MLK Day
];

const workingDays = getWorkingDays(startDate, endDate, holidays);
console.log(\`Working days in Jan 2024: \${workingDays}\`);

// Calculate due date excluding weekends
function calculateDueDate(startDate, workingDaysNeeded) {
  let dueDate = new Date(startDate);
  let daysAdded = 0;
  
  while (daysAdded < workingDaysNeeded) {
    dueDate.setDate(dueDate.getDate() + 1);
    const dayOfWeek = dueDate.getDay();
    
    // Skip weekends
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysAdded++;
    }
  }
  
  return dueDate;
}

const projectStart = new Date(2024, 0, 1);
const projectDue = calculateDueDate(projectStart, 15);
console.log(\`Project due date: \${projectDue.toDateString()}\`);</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 Date Method Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Returns</th>
              <th>Time Zone</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>getDate()</code></td>
              <td>Day of month (1-31)</td>
              <td>Local</td>
              <td><code>25</code></td>
            </tr>
            <tr>
              <td><code>getUTCDate()</code></td>
              <td>UTC day of month</td>
              <td>UTC</td>
              <td><code>25</code></td>
            </tr>
            <tr>
              <td><code>getDay()</code></td>
              <td>Weekday (0-6)</td>
              <td>Local</td>
              <td><code>3</code> (Wednesday)</td>
            </tr>
            <tr>
              <td><code>getMonth()</code></td>
              <td>Month (0-11)</td>
              <td>Local</td>
              <td><code>11</code> (December)</td>
            </tr>
            <tr>
              <td><code>getFullYear()</code></td>
              <td>4-digit year</td>
              <td>Local</td>
              <td><code>2024</code></td>
            </tr>
            <tr>
              <td><code>getTime()</code></td>
              <td>Timestamp (ms)</td>
              <td>UTC</td>
              <td><code>1703462400000</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Dates & Time Best Practices</h4>
          <ul>
            <li>Always use <code>new Date()</code> constructor, not <code>Date()</code> as function</li>
            <li>Remember months are 0-indexed (January = 0)</li>
            <li>Use <code>toISOString()</code> for API communication and storage</li>
            <li>Store dates as UTC and convert to local time for display</li>
            <li>Use <code>Intl.DateTimeFormat</code> for advanced localization</li>
            <li>Clear intervals/timeouts when no longer needed to prevent memory leaks</li>
            <li>Consider using libraries like date-fns or moment.js for complex date operations</li>
            <li>Use <code>requestAnimationFrame</code> for smooth animations instead of <code>setInterval</code></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Dates & Time Examples',
      code: `// ========== Date Creation & Basics ==========
console.log("=== Date Creation & Basics ===");

// Different ways to create dates
console.log("\\n1. Creating Date Objects:");

// Current date and time
const now = new Date();
console.log("Now:", now);
console.log("Now as string:", now.toString());
console.log("Now as ISO:", now.toISOString());

// Specific date
const specificDate = new Date(2024, 11, 25); // Dec 25, 2024
console.log("\\nChristmas 2024:", specificDate.toString());

// From string
const fromString = new Date("2024-12-25T10:30:00");
console.log("From ISO string:", fromString.toString());

// From timestamp
const timestamp = Date.now();
const fromTimestamp = new Date(timestamp);
console.log("\\nFrom timestamp:", fromTimestamp.toString());

// Invalid date
const invalid = new Date("invalid-date-string");
console.log("Invalid date:", invalid);
console.log("Is invalid?", isNaN(invalid.getTime()));

// ========== Date Methods ==========
console.log("\\n\\n=== Date Methods ===");

const date = new Date(2024, 11, 25, 10, 30, 45, 123);
console.log("Test date:", date.toString());

// Get methods
console.log("\\n1. Get Methods:");
console.log("getFullYear():", date.getFullYear());
console.log("getMonth():", date.getMonth()); // 11 (December)
console.log("getDate():", date.getDate()); // 25
console.log("getDay():", date.getDay()); // 3 (Wednesday)
console.log("getHours():", date.getHours());
console.log("getMinutes():", date.getMinutes());
console.log("getSeconds():", date.getSeconds());
console.log("getMilliseconds():", date.getMilliseconds());
console.log("getTime():", date.getTime()); // Timestamp
console.log("getTimezoneOffset():", date.getTimezoneOffset(), "minutes");

// UTC get methods
console.log("\\n2. UTC Get Methods:");
console.log("getUTCFullYear():", date.getUTCFullYear());
console.log("getUTCMonth():", date.getUTCMonth());
console.log("getUTCDate():", date.getUTCDate());
console.log("getUTCDay():", date.getUTCDay());
console.log("getUTCHours():", date.getUTCHours());
console.log("getUTCMinutes():", date.getUTCMinutes());

// Set methods
console.log("\\n3. Set Methods:");
const mutableDate = new Date(date);
mutableDate.setFullYear(2025);
console.log("After setFullYear(2025):", mutableDate.toString());

mutableDate.setMonth(0); // January
console.log("After setMonth(0):", mutableDate.toString());

mutableDate.setDate(15);
console.log("After setDate(15):", mutableDate.toString());

mutableDate.setHours(14, 30, 0, 0);
console.log("After setHours(14,30,0,0):", mutableDate.toString());

// ========== Date Formatting ==========
console.log("\\n\\n=== Date Formatting ===");

console.log("\\n1. Built-in Formatting Methods:");
console.log("toString():", date.toString());
console.log("toDateString():", date.toDateString());
console.log("toTimeString():", date.toTimeString());
console.log("toUTCString():", date.toUTCString());
console.log("toISOString():", date.toISOString());
console.log("toJSON():", date.toJSON());
console.log("toLocaleString():", date.toLocaleString());
console.log("toLocaleDateString():", date.toLocaleDateString());
console.log("toLocaleTimeString():", date.toLocaleTimeString());

console.log("\\n2. International Formatting:");
console.log("US English:", date.toLocaleString('en-US'));
console.log("UK English:", date.toLocaleString('en-GB'));
console.log("German:", date.toLocaleString('de-DE'));
console.log("Japanese:", date.toLocaleString('ja-JP'));
console.log("Arabic:", date.toLocaleString('ar-EG'));

console.log("\\n3. Custom Formatting with Options:");
const formatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
};

console.log("Formatted US:", date.toLocaleString('en-US', formatOptions));
console.log("Formatted DE:", date.toLocaleString('de-DE', formatOptions));

// Custom format function
function formatDateCustom(date, format = 'YYYY-MM-DD HH:mm:ss') {
  const pad = (num) => num.toString().padStart(2, '0');
  
  const replacements = {
    'YYYY': date.getFullYear(),
    'YY': date.getFullYear().toString().slice(-2),
    'MM': pad(date.getMonth() + 1),
    'M': date.getMonth() + 1,
    'DD': pad(date.getDate()),
    'D': date.getDate(),
    'HH': pad(date.getHours()),
    'H': date.getHours(),
    'mm': pad(date.getMinutes()),
    'm': date.getMinutes(),
    'ss': pad(date.getSeconds()),
    's': date.getSeconds(),
    'SSS': date.getMilliseconds().toString().padStart(3, '0')
  };
  
  return format.replace(
    /YYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s|SSS/g,
    match => replacements[match]
  );
}

console.log("\\n4. Custom Format Function:");
console.log("ISO:", formatDateCustom(date));
console.log("US:", formatDateCustom(date, 'MM/DD/YYYY HH:mm'));
console.log("EU:", formatDateCustom(date, 'DD.MM.YYYY'));
console.log("Time only:", formatDateCustom(date, 'HH:mm:ss'));

// ========== Date Arithmetic ==========
console.log("\\n\\n=== Date Arithmetic ===");

// Adding/subtracting time
console.log("\\n1. Date Arithmetic Operations:");

const today = new Date();
console.log("Today:", today.toDateString());

// Add days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Add months (handles year rollover)
function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

// Add years
function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

console.log("\\n2. Adding Time:");
console.log("Tomorrow:", addDays(today, 1).toDateString());
console.log("Next week:", addDays(today, 7).toDateString());
console.log("Next month:", addMonths(today, 1).toDateString());
console.log("Next year:", addYears(today, 1).toDateString());

console.log("\\n3. Subtracting Time:");
console.log("Yesterday:", addDays(today, -1).toDateString());
console.log("Last week:", addDays(today, -7).toDateString());
console.log("Last month:", addMonths(today, -1).toDateString());

// Date difference
console.log("\\n4. Date Difference:");
function getDateDiff(date1, date2) {
  const diff = Math.abs(date2 - date1);
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  return {
    milliseconds: diff,
    seconds,
    minutes,
    hours,
    days,
    weeks: Math.floor(days / 7),
    months: Math.floor(days / 30.44),
    years: Math.floor(days / 365.25)
  };
}

const futureDate = addDays(today, 100);
const diff = getDateDiff(today, futureDate);
console.log("Difference between today and 100 days from now:");
console.log(diff);

// Age calculation
console.log("\\n5. Age Calculation:");
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

const birthDate = new Date(1990, 5, 15);
console.log("Age for birth date 1990-06-15:", calculateAge(birthDate));

// ========== Time Zones ==========
console.log("\\n\\n=== Time Zones ===");

console.log("\\n1. Time Zone Information:");
const nowLocal = new Date();
console.log("Local time:", nowLocal.toString());
console.log("UTC time:", nowLocal.toUTCString());
console.log("ISO time:", nowLocal.toISOString());
console.log("Timezone offset:", nowLocal.getTimezoneOffset(), "minutes");

console.log("\\n2. Displaying in Different Time Zones:");
const timeZones = [
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Pacific/Honolulu'
];

timeZones.forEach(tz => {
  const options = {
    timeZone: tz,
    timeZoneName: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  console.log(\`\${tz}: \${nowLocal.toLocaleString('en-US', options)}\`);
});

console.log("\\n3. Converting Between Time Zones:");
function convertTimezone(date, fromTZ, toTZ) {
  const fromOptions = {
    timeZone: fromTZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const toOptions = {
    timeZone: toTZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const fromStr = date.toLocaleString('en-US', fromOptions);
  const toStr = date.toLocaleString('en-US', toOptions);
  
  return {
    from: \`\${fromStr} (\${fromTZ})\`,
    to: \`\${toStr} (\${toTZ})\`
  };
}

const conversion = convertTimezone(
  new Date(),
  'America/New_York',
  'Asia/Tokyo'
);
console.log("New York → Tokyo:");
console.log("From:", conversion.from);
console.log("To:", conversion.to);

// ========== Timers & Intervals ==========
console.log("\\n\\n=== Timers & Intervals ===");

// setTimeout
console.log("\\n1. setTimeout Examples:");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// With parameters
function delayedGreeting(name, greeting) {
  console.log(\`\${greeting}, \${name}!\`);
}
setTimeout(delayedGreeting, 1500, "Alice", "Hello");

// Clear timeout
const timeoutId = setTimeout(() => {
  console.log("This won't execute");
}, 2000);
clearTimeout(timeoutId);

// setInterval
console.log("\\n2. setInterval Examples:");

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(\`Interval count: \${count}\`);
  
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 500);

// Debounce and throttle
console.log("\\n3. Debounce & Throttle:");

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const debouncedLog = debounce((msg) => console.log(\`Debounced: \${msg}\`), 300);
const throttledLog = throttle((msg) => console.log(\`Throttled: \${msg}\`), 1000);

// Simulate rapid calls
for (let i = 0; i < 5; i++) {
  debouncedLog(\`Call \${i + 1}\`);
  throttledLog(\`Call \${i + 1}\`);
}

// requestAnimationFrame for animations
console.log("\\n4. Animation Frame:");
function animate() {
  let start = null;
  
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    
    // Calculate animation progress (0 to 1)
    const progressPercent = Math.min(progress / 2000, 1);
    
    console.log(\`Animation progress: \${(progressPercent * 100).toFixed(1)}%\`);
    
    if (progress < 2000) {
      requestAnimationFrame(step);
    } else {
      console.log("Animation complete!");
    }
  }
  
  requestAnimationFrame(step);
}

// Start animation
// animate(); // Uncomment to see animation

// ========== Practical Applications ==========
console.log("\\n\\n=== Practical Applications ===");

// 1. Countdown timer
console.log("\\n1. Countdown Timer:");

class CountdownTimer {
  constructor(targetDate, onTick, onComplete) {
    this.targetDate = new Date(targetDate);
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.intervalId = null;
  }
  
  start() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }
  
  stop() {
    clearInterval(this.intervalId);
  }
  
  update() {
    const now = new Date();
    const diff = this.targetDate - now;
    
    if (diff <= 0) {
      this.stop();
      this.onComplete();
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    this.onTick({ days, hours, minutes, seconds, total: diff });
  }
  
  getFormattedTime() {
    const now = new Date();
    const diff = this.targetDate - now;
    
    if (diff <= 0) return "00:00:00:00";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return \`\${days.toString().padStart(2, '0')}:\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
  }
}

// Usage
const timer = new CountdownTimer(
  Date.now() + 10000, // 10 seconds from now
  (time) => {
    console.log(\`Time remaining: \${timer.getFormattedTime()}\`);
  },
  () => {
    console.log("🎉 Timer complete!");
  }
);

// timer.start(); // Uncomment to start timer

// 2. Working days calculator
console.log("\\n2. Working Days Calculator:");

function getWorkingDays(startDate, endDate, holidays = []) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let workingDays = 0;
  
  // Convert holiday strings to dates
  const holidayDates = holidays.map(date => new Date(date));
  
  // Iterate through each day
  const current = new Date(start);
  while (current <= end) {
    const dayOfWeek = current.getDay();
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    
    // Check if it's a holiday
    const isHoliday = holidayDates.some(holiday => 
      holiday.getDate() === current.getDate() &&
      holiday.getMonth() === current.getMonth() &&
      holiday.getFullYear() === current.getFullYear()
    );
    
    if (isWeekday && !isHoliday) {
      workingDays++;
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  return workingDays;
}

// Example
const projectStart = new Date(2024, 0, 1);
const projectEnd = new Date(2024, 0, 31);
const januaryHolidays = ['2024-01-01', '2024-01-15'];

console.log(\`Working days in Jan 2024: \${getWorkingDays(projectStart, projectEnd, januaryHolidays)}\`);

// 3. Age validation
console.log("\\n3. Age Validation:");

function validateAge(birthDate, minAge) {
  const today = new Date();
  const birth = new Date(birthDate);
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return {
    age,
    isValid: age >= minAge,
    message: age >= minAge 
      ? \`Valid: \${age} years old\`
      : \`Invalid: Must be at least \${minAge} years old\`
  };
}

console.log(validateAge('2000-01-01', 18));
console.log(validateAge('2010-01-01', 18));

// 4. Event scheduler
console.log("\\n4. Event Scheduler:");

class EventScheduler {
  constructor() {
    this.events = [];
    this.timers = new Map();
  }
  
  schedule(eventName, dateTime, callback) {
    const eventDate = new Date(dateTime);
    const now = new Date();
    const timeUntilEvent = eventDate - now;
    
    if (timeUntilEvent <= 0) {
      console.log(\`Event "\${eventName}" is in the past\`);
      return null;
    }
    
    const timerId = setTimeout(() => {
      console.log(\`🎯 Event triggered: \${eventName}\`);
      callback();
      this.timers.delete(eventName);
    }, timeUntilEvent);
    
    this.events.push({ name: eventName, date: eventDate });
    this.timers.set(eventName, timerId);
    
    console.log(\`Event "\${eventName}" scheduled for \${eventDate.toLocaleString()}\`);
    return timerId;
  }
  
  cancel(eventName) {
    const timerId = this.timers.get(eventName);
    if (timerId) {
      clearTimeout(timerId);
      this.timers.delete(eventName);
      console.log(\`Event "\${eventName}" cancelled\`);
      return true;
    }
    return false;
  }
  
  listEvents() {
    return this.events.map(event => ({
      name: event.name,
      date: event.date.toLocaleString(),
      timeUntil: event.date - new Date()
    }));
  }
}

// Usage
const scheduler = new EventScheduler();
scheduler.schedule(
  "Meeting",
  Date.now() + 5000, // 5 seconds from now
  () => console.log("Meeting starting now!")
);

scheduler.schedule(
  "Break",
  Date.now() + 10000, // 10 seconds from now
  () => console.log("Time for a break!")
);

console.log("Scheduled events:", scheduler.listEvents());`,
      explanation: 'These comprehensive examples demonstrate JavaScript date manipulation, time zones, timers, and practical applications.',
      preview: '<div class="preview-demo"><h3 style="color: #8b5cf6">Dates & Time Preview</h3><p>Experiment with date operations and timers!</p><div id="dateOutput" class="result-box">Date operations will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Date', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date' },
    { title: 'JavaScript.info: Date and time', url: 'https://javascript.info/date' },
    { title: 'Internationalization API', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl' },
    { title: 'Date-fns Library', url: 'https://date-fns.org/' }
  ],
  prerequisites: ['js-numbers-math'],
  nextTopics: ['js-dom']
  },
{
  id: 'js-dom',
  title: 'DOM Manipulation',
  icon: <Layout />,
  difficulty: 'beginner',
  estimatedTime: 20,
  category: 'javascript',
  order: 13,
  sections: [
    'What is the DOM?',
    'DOM Tree Structure',
    'Selecting Elements',
    'Traversing the DOM',
    'Creating & Modifying Elements',
    'Working with Attributes',
    'Styles & Classes',
    'Event Handling'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">🌳</div>
        <h1>DOM Manipulation</h1>
        <p class="concept-tagline">Master the Document Object Model for Dynamic Web Pages</p>
      </div>
      
      <div class="dom-3d-visual">
        <div class="dom-tree">
          <div class="tree-node document">document</div>
          <div class="tree-branch">↓</div>
          <div class="tree-level">
            <div class="tree-node html">html</div>
          </div>
          <div class="tree-branch">↓</div>
          <div class="tree-level">
            <div class="tree-node head">head</div>
            <div class="tree-node body">body</div>
          </div>
          <div class="tree-branch">↓</div>
          <div class="tree-level">
            <div class="tree-node title">title</div>
            <div class="tree-node h1">h1</div>
            <div class="tree-node div">div</div>
          </div>
        </div>
      </div>
      
      <h2>🌳 What is the DOM?</h2>
      <div class="dom-explanation">
        <div class="dom-concepts">
          <div class="concept-card">
            <div class="concept-icon">📄</div>
            <h3>HTML Document</h3>
            <p>Static markup structure</p>
            <code>&lt;h1&gt;Hello&lt;/h1&gt;</code>
          </div>
          <div class="arrow">→</div>
          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>Browser Parses</h3>
            <p>Creates DOM tree</p>
            <code>DOM Parser</code>
          </div>
          <div class="arrow">→</div>
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>JavaScript DOM</h3>
            <p>Live object representation</p>
            <code>document.querySelector()</code>
          </div>
        </div>
      </div>
      
      <p>The <strong>Document Object Model (DOM)</strong> is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.</p>
      
      <div class="dom-diagram">
        <h3>DOM Tree Structure:</h3>
        <pre class="code-block">
┌───────────────────────────────┐
│         Document              │
└───────────────┬───────────────┘
                │
        ┌───────▼───────┐
        │     html      │
        └───────┬───────┘
                │
    ┌───────────┴───────────┐
    │                       │
┌───▼───┐             ┌─────▼────┐
│ head  │             │   body   │
└───┬───┘             └────┬─────┘
    │                      │
┌───▼───┐        ┌─────────▼─────────┐
│ title │        │         div        │
└───────┘        └─────────┬─────────┘
                    ┌──────┴──────┐
                    │             │
                ┌───▼───┐     ┌───▼───┐
                │  h1   │     │  p    │
                └───────┘     └───────┘</pre>
      </div>
      
      <h2>🔍 Selecting DOM Elements</h2>
      <div class="selection-methods-3d">
        <div class="methods-grid">
          <div class="method-card">
            <h3>getElementById()</h3>
            <p>Select by ID attribute</p>
            <pre><code>const elem = document
  .getElementById('myId');</code></pre>
            <div class="method-tip">Fastest method</div>
          </div>
          
          <div class="method-card">
            <h3>querySelector()</h3>
            <p>CSS selector (first match)</p>
            <pre><code>const elem = document
  .querySelector('.myClass');</code></pre>
            <div class="method-tip">Most versatile</div>
          </div>
          
          <div class="method-card">
            <h3>querySelectorAll()</h3>
            <p>CSS selector (all matches)</p>
            <pre><code>const elems = document
  .querySelectorAll('div');</code></pre>
            <div class="method-tip">Returns NodeList</div>
          </div>
          
          <div class="method-card">
            <h3>getElementsBy*()</h3>
            <p>Select by class/tag/name</p>
            <pre><code>// By class
document.getElementsByClassName();

// By tag
document.getElementsByTagName();</code></pre>
            <div class="method-tip">Live collections</div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Selection Examples:</h3>
        <pre><code>// HTML structure for examples
&lt;!-- 
&lt;div id="container"&gt;
  &lt;h1 class="title"&gt;Hello&lt;/h1&gt;
  &lt;p class="content"&gt;World&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
--&gt;

// 1. getElementById - Fastest, unique ID
const container = document.getElementById('container');

// 2. getElementsByClassName - Live HTMLCollection
const titles = document.getElementsByClassName('title');

// 3. getElementsByTagName - Live HTMLCollection
const paragraphs = document.getElementsByTagName('p');

// 4. querySelector - First matching element
const firstLi = document.querySelector('li');

// 5. querySelectorAll - Static NodeList
const allLis = document.querySelectorAll('li');

// 6. Complex CSS selectors
const firstListItem = document.querySelector('ul li:first-child');
const lastListItem = document.querySelector('ul li:last-child');
const evenItems = document.querySelectorAll('li:nth-child(even)');

console.log("Container:", container);
console.log("Titles:", titles);
console.log("Paragraphs:", paragraphs);
console.log("First LI:", firstLi);
console.log("All LIs:", allLis);</code></pre>
      </div>
      
      <h2>📍 DOM Traversal</h2>
      <div class="traversal-3d">
        <div class="traversal-tree">
          <div class="node parent">Parent</div>
          <div class="connector">│</div>
          <div class="node current">Current</div>
          <div class="connector">├─┬─</div>
          <div class="child-nodes">
            <div class="node child">First Child</div>
            <div class="node child">Second Child</div>
            <div class="node sibling">Next Sibling</div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Traversal Methods:</h3>
        <pre><code>// Starting from an element
const element = document.querySelector('.content');

// 1. Parent traversal
const parent = element.parentElement;
const parentNode = element.parentNode;

// 2. Child traversal
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const children = element.children; // HTMLCollection
const childNodes = element.childNodes; // NodeList

// 3. Sibling traversal
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// 4. Closest ancestor matching selector
const closestDiv = element.closest('div');

// 5. Check contains
const containsChild = element.contains(childElement);

// Practical traversal example
function highlightParents(element) {
  let current = element;
  while (current) {
    current.style.border = '2px solid red';
    current = current.parentElement;
  }
}

function getAllSiblings(element) {
  const siblings = [];
  let sibling = element.parentElement.firstChild;
  
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  
  return siblings;
}</code></pre>
      </div>
      
      <h2>🛠️ Creating & Modifying Elements</h2>
      <div class="creation-3d">
        <div class="creation-process">
          <div class="step">
            <div class="step-icon">📝</div>
            <div class="step-text">Create Element</div>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">✨</div>
            <div class="step-text">Add Content</div>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🎯</div>
            <div class="step-text">Insert in DOM</div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Element Creation & Manipulation:</h3>
        <pre><code>// 1. Creating elements
const div = document.createElement('div');
const span = document.createElement('span');
const ul = document.createElement('ul');

// 2. Setting content
div.textContent = 'Hello World'; // Text only
div.innerHTML = '&lt;strong&gt;Bold&lt;/strong&gt; text'; // HTML

// 3. Adding/removing elements
const container = document.getElementById('container');

// Append to end
container.appendChild(div);

// Insert before another element
container.insertBefore(span, container.firstChild);

// Insert at specific position
container.insertAdjacentElement('beforeend', ul);
container.insertAdjacentHTML('beforeend', '&lt;li&gt;Item&lt;/li&gt;');

// Remove elements
container.removeChild(div);
div.remove(); // Modern method

// Replace elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Replaced';
container.replaceChild(newDiv, span);

// Clone elements
const cloned = div.cloneNode(true); // Deep clone
const shallowClone = div.cloneNode(false); // Shallow clone

// 4. Working with fragments (performance)
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = \`Item \${i}\`;
  fragment.appendChild(li);
}

// Single DOM operation
document.getElementById('list').appendChild(fragment);</code></pre>
      </div>
      
      <h2>🎯 Working with Attributes</h2>
      <div class="attributes-3d">
        <div class="attribute-types">
          <div class="attr-card">
            <h3>Standard Attributes</h3>
            <div class="attr-examples">
              <code>id, class, src, href</code>
            </div>
          </div>
          <div class="attr-card">
            <h3>Custom Data Attributes</h3>
            <div class="attr-examples">
              <code>data-*, data-user-id</code>
            </div>
          </div>
          <div class="attr-card">
            <h3>Boolean Attributes</h3>
            <div class="attr-examples">
              <code>disabled, checked, hidden</code>
            </div>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Attribute Methods:</h3>
<pre><code>const element = document.querySelector('a');

// 1. Get attribute value
const href = element.getAttribute('href');
const id = element.id; // Direct property access

// 2. Set attribute
element.setAttribute('href', 'https://example.com');
element.id = 'newId'; // Direct property

// 3. Check attribute existence
const hasClass = element.hasAttribute('class');

// 4. Remove attribute
element.removeAttribute('href');

// 5. Toggle attribute
function toggleAttribute(element, attribute) {
  if (element.hasAttribute(attribute)) {
    element.removeAttribute(attribute);
  } else {
    element.setAttribute(attribute, '');
  }
}

// 6. Data attributes
element.dataset.userId = '123'; // data-user-id
element.dataset.role = 'admin'; // data-role

const userId = element.dataset.userId; // '123'

// 7. Boolean attributes
const input = document.querySelector('input');
input.disabled = true; // Adds disabled attribute
input.checked = true; // Adds checked attribute
input.hidden = true; // Adds hidden attribute

// 8. Custom attributes (non-data)
element.setAttribute('custom-attr', 'value');
const customValue = element.getAttribute('custom-attr');

// 9. Get all attributes
const attributes = element.attributes;
for (let attr of attributes) {
  console.log(\`\${attr.name} = "\${attr.value}"\`);
}

// 10. className vs classList
element.className = 'class1 class2'; // Replace all classes
element.classList.add('new-class'); // Add class
element.classList.remove('old-class'); // Remove class
element.classList.toggle('active'); // Toggle class
const hasClass = element.classList.contains('active'); // Check class</code></pre>
      </div>
      
      <h2>🎨 Styles & Classes</h2>
      <div class="styles-3d">
        <div class="style-methods">
          <div class="method-card">
            <h3>Inline Styles</h3>
            <pre><code>element.style.color = 'red';
element.style.fontSize = '16px';</code></pre>
          </div>
          <div class="method-card">
            <h3>CSS Classes</h3>
            <pre><code>element.classList.add('active');
element.classList.remove('inactive');</code></pre>
          </div>
          <div class="method-card">
            <h3>Computed Styles</h3>
            <pre><code>const styles = window
  .getComputedStyle(element);</code></pre>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Style Manipulation Examples:</h3>
        <pre><code>const element = document.querySelector('.box');

// 1. Inline styles (camelCase)
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '18px';
element.style.marginTop = '10px';
element.style.display = 'flex';

// 2. Multiple styles at once
element.style.cssText = '
  color: red;
  font-size: 20px;
  padding: 10px;
';

// 3. Using setProperty
element.style.setProperty('--custom-color', '#ff0000');
element.style.setProperty('background-color', 'blue', 'important');

// 4. Get inline styles
const color = element.style.color; // Only inline styles

// 5. Get computed styles (actual rendered styles)
const computed = window.getComputedStyle(element);
const actualColor = computed.color;
const actualFontSize = computed.fontSize;
const actualMargin = computed.margin;

// 6. CSS classes with classList
element.classList.add('active', 'highlight');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.classList.replace('old', 'new');

const isActive = element.classList.contains('active');

// 7. className (legacy, replaces all classes)
element.className = 'box active'; // Removes existing classes!

// 8. Working with CSS custom properties
document.documentElement.style.setProperty('--primary-color', '#007bff');
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// 9. Animations with JavaScript
element.style.transition = 'all 0.3s ease';
element.style.transform = 'translateX(100px)';

// 10. Responsive style changes
function updateStylesBasedOnWidth() {
  const width = window.innerWidth;
  
  if (width < 768) {
    element.style.fontSize = '14px';
    element.classList.add('mobile');
  } else {
    element.style.fontSize = '18px';
    element.classList.remove('mobile');
  }
}

// 11. Style utility functions
function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  let start = null;
  
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = Math.min(progress / duration, 1);
    
    element.style.opacity = opacity;
    
    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = null;
  
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const opacity = 1 - Math.min(progress / duration, 1);
    
    element.style.opacity = opacity;
    
    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  }
  
  requestAnimationFrame(animate);
}</code></pre>
      </div>
      
      <h2>🎮 Event Handling</h2>
      <div class="events-3d">
        <div class="event-flow">
          <div class="event-phase capture">Capture Phase</div>
          <div class="arrow">↓</div>
          <div class="event-phase target">Target Phase</div>
          <div class="arrow">↓</div>
          <div class="event-phase bubble">Bubble Phase</div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Event Handling Examples:</h3>
        <pre><code>const button = document.querySelector('button');
const form = document.querySelector('form');
const input = document.querySelector('input');

// 1. Inline event handlers (avoid)
// &lt;button onclick="handleClick()"&gt;Click&lt;/button&gt;

// 2. DOM property (one handler only)
button.onclick = function(event) {
  console.log('Clicked via onclick');
};

// 3. addEventListener (recommended)
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target:', event.target);
  console.log('Current target:', event.currentTarget);
});

// 4. Multiple event listeners
button.addEventListener('click', handleClick);
button.addEventListener('click', anotherHandler);

function handleClick(event) {
  console.log('First handler');
}

function anotherHandler(event) {
  console.log('Second handler');
}

// 5. Event object properties
button.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default action
  event.stopPropagation(); // Stop bubbling
  event.stopImmediatePropagation(); // Stop other handlers
  
  console.log('Mouse position:', event.clientX, event.clientY);
  console.log('Key pressed:', event.key);
  console.log('Shift key:', event.shiftKey);
});

// 6. Event delegation
document.addEventListener('click', function(event) {
  if (event.target.matches('.delete-btn')) {
    event.target.parentElement.remove();
  }
  
  if (event.target.closest('.card')) {
    event.target.closest('.card').classList.toggle('active');
  }
});

// 7. Form events
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log('Form submitted:', Object.fromEntries(formData));
});

input.addEventListener('input', function(event) {
  console.log('Input changed:', event.target.value);
});

input.addEventListener('focus', function() {
  console.log('Input focused');
});

input.addEventListener('blur', function() {
  console.log('Input blurred');
});

// 8. Keyboard events
document.addEventListener('keydown', function(event) {
  console.log('Key down:', event.key, 'Code:', event.code);
  
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    console.log('Save triggered');
  }
});

document.addEventListener('keyup', function(event) {
  console.log('Key up:', event.key);
});

// 9. Mouse events
const box = document.querySelector('.box');

box.addEventListener('mousedown', function(event) {
  console.log('Mouse down:', event.button);
});

box.addEventListener('mouseup', function(event) {
  console.log('Mouse up:', event.button);
});

box.addEventListener('mousemove', function(event) {
  console.log('Mouse move:', event.clientX, event.clientY);
});

box.addEventListener('mouseenter', function() {
  console.log('Mouse entered');
});

box.addEventListener('mouseleave', function() {
  console.log('Mouse left');
});

// 10. Touch events (mobile)
box.addEventListener('touchstart', function(event) {
  console.log('Touch started');
  event.preventDefault(); // Prevent scroll
});

box.addEventListener('touchmove', function(event) {
  console.log('Touch moving');
});

box.addEventListener('touchend', function(event) {
  console.log('Touch ended');
});

// 11. Custom events
const customEvent = new CustomEvent('myevent', {
  detail: { message: 'Hello from custom event!' },
  bubbles: true,
  cancelable: true
});

button.addEventListener('myevent', function(event) {
  console.log('Custom event received:', event.detail.message);
});

// Trigger custom event
button.dispatchEvent(customEvent);

// 12. Removing event listeners
const handler = function() {
  console.log('This will be removed');
};

button.addEventListener('click', handler);
button.removeEventListener('click', handler);

// 13. Once option (runs only once)
button.addEventListener('click', function() {
  console.log('This runs only once');
}, { once: true });

// 14. Passive option (improves scrolling performance)
window.addEventListener('scroll', function() {
  console.log('Scrolling');
}, { passive: true });

// 15. Capture phase
document.addEventListener('click', function() {
  console.log('Capture phase - document');
}, true); // Use capture phase

// 16. Event delegation pattern
class EventDelegator {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.handlers = new Map();
    this.container.addEventListener('click', this.handleEvent.bind(this));
  }
  
  handleEvent(event) {
    for (const [selector, handler] of this.handlers) {
      if (event.target.matches(selector)) {
        handler(event);
        break;
      }
    }
  }
  
  on(selector, handler) {
    this.handlers.set(selector, handler);
  }
  
  off(selector) {
    this.handlers.delete(selector);
  }
}

// Usage
const delegator = new EventDelegator('#container');
delegator.on('.btn', (event) => console.log('Button clicked'));
delegator.on('.link', (event) => console.log('Link clicked'));</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Dynamic List Manager</h3>
          <p>Create a dynamic list that allows adding, removing, and reordering items.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class DynamicList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.items = [];
    this.setupEvents();
  }
  
  setupEvents() {
    // Add item form
    this.container.querySelector('.add-form')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        const input = this.container.querySelector('.item-input');
        if (input.value.trim()) {
          this.addItem(input.value.trim());
          input.value = '';
        }
      });
    
    // Event delegation for item actions
    this.container.addEventListener('click', (e) => {
      const itemElement = e.target.closest('.list-item');
      if (!itemElement) return;
      
      const itemId = itemElement.dataset.id;
      
      if (e.target.matches('.delete-btn')) {
        this.removeItem(itemId);
      } else if (e.target.matches('.up-btn')) {
        this.moveItemUp(itemId);
      } else if (e.target.matches('.down-btn')) {
        this.moveItemDown(itemId);
      } else if (e.target.matches('.edit-btn')) {
        this.editItem(itemId);
      }
    });
    
    // Drag and drop
    this.setupDragAndDrop();
  }
  
  addItem(text) {
    const item = {
      id: Date.now().toString(),
      text: text,
      createdAt: new Date()
    };
    
    this.items.push(item);
    this.render();
  }
  
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.render();
  }
  
  moveItemUp(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index > 0) {
      [this.items[index], this.items[index - 1]] = 
      [this.items[index - 1], this.items[index]];
      this.render();
    }
  }
  
  moveItemDown(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index < this.items.length - 1) {
      [this.items[index], this.items[index + 1]] = 
      [this.items[index + 1], this.items[index]];
      this.render();
    }
  }
  
  editItem(id) {
    const item = this.items.find(item => item.id === id);
    const newText = prompt('Edit item:', item.text);
    if (newText !== null && newText.trim()) {
      item.text = newText.trim();
      this.render();
    }
  }
  
  setupDragAndDrop() {
    let draggedItem = null;
    
    this.container.addEventListener('dragstart', (e) => {
      if (e.target.classList.contains('list-item')) {
        draggedItem = e.target;
        e.target.style.opacity = '0.5';
      }
    });
    
    this.container.addEventListener('dragend', (e) => {
      if (draggedItem) {
        draggedItem.style.opacity = '1';
        draggedItem = null;
      }
    });
    
    this.container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    
    this.container.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedItem && e.target.classList.contains('list-item')) {
        const targetId = e.target.dataset.id;
        const draggedId = draggedItem.dataset.id;
        
        const draggedIndex = this.items.findIndex(item => item.id === draggedId);
        const targetIndex = this.items.findIndex(item => item.id === targetId);
        
        if (draggedIndex !== -1 && targetIndex !== -1) {
          const [removed] = this.items.splice(draggedIndex, 1);
          this.items.splice(targetIndex, 0, removed);
          this.render();
        }
      }
    });
  }
  
  render() {
    const listContainer = this.container.querySelector('.list-container');
    listContainer.innerHTML = '';
    
    this.items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'list-item';
      itemElement.dataset.id = item.id;
      itemElement.draggable = true;
      
      itemElement.innerHTML = \`
        <span class="item-text">\${item.text}</span>
        <div class="item-actions">
          <button class="btn up-btn">⬆</button>
          <button class="btn down-btn">⬇</button>
          <button class="btn edit-btn">✏️</button>
          <button class="btn delete-btn">🗑️</button>
        </div>
      \`;
      
      listContainer.appendChild(itemElement);
    });
    
    // Update stats
    this.container.querySelector('.stats').textContent = 
      \`Items: \${this.items.length}\`;
  }
}

// Usage
const myList = new DynamicList('list-container');</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Modal Dialog System</h3>
          <p>Create a reusable modal dialog component.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class Modal {
  constructor(options = {}) {
    this.options = {
      title: 'Modal Title',
      content: 'Modal content',
      showClose: true,
      closeOnEsc: true,
      closeOnOverlay: true,
      ...options
    };
    
    this.isOpen = false;
    this.modalElement = null;
    this.initialize();
  }
  
  initialize() {
    // Create modal structure
    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
    this.modalElement.setAttribute('role', 'dialog');
    this.modalElement.setAttribute('aria-modal', 'true');
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const dialog = document.createElement('div');
    dialog.className = 'modal-dialog';
    
    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';
    
    const title = document.createElement('h2');
    title.className = 'modal-title';
    title.textContent = this.options.title;
    
    if (this.options.showClose) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'modal-close';
      closeBtn.innerHTML = '×';
      closeBtn.setAttribute('aria-label', 'Close modal');
      closeBtn.addEventListener('click', () => this.close());
      header.appendChild(closeBtn);
    }
    
    header.appendChild(title);
    
    // Body
    const body = document.createElement('div');
    body.className = 'modal-body';
    
    if (typeof this.options.content === 'string') {
      body.innerHTML = this.options.content;
    } else if (this.options.content instanceof HTMLElement) {
      body.appendChild(this.options.content);
    } else if (typeof this.options.content === 'function') {
      body.appendChild(this.options.content());
    }
    
    // Footer (optional)
    let footer = null;
    if (this.options.buttons) {
      footer = document.createElement('div');
      footer.className = 'modal-footer';
      
      this.options.buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = \`btn \${button.className || ''}\`;
        btn.textContent = button.text;
        
        if (button.onClick) {
          btn.addEventListener('click', (e) => {
            button.onClick(e, this);
          });
        }
        
        if (button.closeOnClick !== false) {
          btn.addEventListener('click', () => this.close());
        }
        
        footer.appendChild(btn);
      });
    }
    
    // Assemble modal
    dialog.appendChild(header);
    dialog.appendChild(body);
    if (footer) dialog.appendChild(footer);
    
    this.modalElement.appendChild(overlay);
    this.modalElement.appendChild(dialog);
    
    // Overlay click
    if (this.options.closeOnOverlay) {
      overlay.addEventListener('click', () => this.close());
    }
    
    // Escape key
    if (this.options.closeOnEsc) {
      this.escapeHandler = (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      };
      document.addEventListener('keydown', this.escapeHandler);
    }
    
    // Prevent body scroll
    this.preventScrollHandler = () => {
      document.body.style.overflow = 'hidden';
    };
    
    this.restoreScrollHandler = () => {
      document.body.style.overflow = '';
    };
    
    // Append to body
    document.body.appendChild(this.modalElement);
  }
  
  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    this.modalElement.classList.add('active');
    
    // Focus trap
    this.setupFocusTrap();
    
    // Prevent body scroll
    this.preventScrollHandler();
    
    // Dispatch event
    this.modalElement.dispatchEvent(new CustomEvent('modal:open'));
    
    // Focus first focusable element
    const focusable = this.modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }
  
  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.modalElement.classList.remove('active');
    
    // Restore body scroll
    this.restoreScrollHandler();
    
    // Dispatch event
    this.modalElement.dispatchEvent(new CustomEvent('modal:close'));
  }
  
  setupFocusTrap() {
    const focusableElements = this.modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    this.modalElement.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });
  }
  
  updateContent(newContent) {
    const body = this.modalElement.querySelector('.modal-body');
    body.innerHTML = '';
    
    if (typeof newContent === 'string') {
      body.innerHTML = newContent;
    } else if (newContent instanceof HTMLElement) {
      body.appendChild(newContent);
    } else if (typeof newContent === 'function') {
      body.appendChild(newContent());
    }
  }
  
  updateTitle(newTitle) {
    const title = this.modalElement.querySelector('.modal-title');
    title.textContent = newTitle;
  }
  
  destroy() {
    this.close();
    
    if (this.escapeHandler) {
      document.removeEventListener('keydown', this.escapeHandler);
    }
    
    if (this.modalElement && this.modalElement.parentNode) {
      this.modalElement.parentNode.removeChild(this.modalElement);
    }
  }
  
  // Static methods for quick usage
  static alert(message, title = 'Alert') {
    const modal = new Modal({
      title,
      content: \`&lt;p&gt;\${message}&lt;/p&gt;\`,
      buttons: [
        { text: 'OK', className: 'btn-primary' }
      ]
    });
    
    modal.open();
    return modal;
  }
  
  static confirm(message, title = 'Confirm', onConfirm, onCancel) {
    const modal = new Modal({
      title,
      content: \`&lt;p&gt;\${message}&lt;/p&gt;\`,
      buttons: [
        {
          text: 'Cancel',
          className: 'btn-secondary',
          onClick: onCancel
        },
        {
          text: 'OK',
          className: 'btn-primary',
          onClick: onConfirm
        }
      ]
    });
    
    modal.open();
    return modal;
  }
  
  static prompt(message, title = 'Prompt', defaultValue = '') {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = defaultValue;
      input.className = 'prompt-input';
      
      const modal = new Modal({
        title,
        content: () => {
          const container = document.createElement('div');
          container.innerHTML = \`&lt;p&gt;\${message}&lt;/p&gt;\`;
          container.appendChild(input);
          return container;
        },
        buttons: [
          {
            text: 'Cancel',
            className: 'btn-secondary',
            onClick: () => resolve(null)
          },
          {
            text: 'OK',
            className: 'btn-primary',
            onClick: () => resolve(input.value),
            closeOnClick: false
          }
        ]
      });
      
      modal.open();
      
      // Focus input
      setTimeout(() => {
        input.focus();
        input.select();
      }, 100);
    });
  }
}

// Usage examples
const modal = new Modal({
  title: 'Welcome',
  content: '&lt;p&gt;This is a modal dialog.&lt;/p&gt;',
  buttons: [
    { text: 'Cancel', className: 'btn-secondary' },
    { text: 'Save', className: 'btn-primary' }
  ]
});

// Open modal
modal.open();

// Quick static methods
Modal.alert('Operation completed successfully!');
Modal.confirm('Are you sure?', () => console.log('Confirmed'));
Modal.prompt('Enter your name:', 'Name').then(name => {
  console.log('Name:', name);
});</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 DOM Method Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Returns</th>
              <th>Live/Static</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>getElementById()</code></td>
              <td>Single element</td>
              <td>N/A</td>
              <td>Fast unique element access</td>
            </tr>
            <tr>
              <td><code>querySelector()</code></td>
              <td>First match</td>
              <td>Static</td>
              <td>CSS selector single match</td>
            </tr>
            <tr>
              <td><code>querySelectorAll()</code></td>
              <td>NodeList</td>
              <td>Static</td>
              <td>CSS selector all matches</td>
            </tr>
            <tr>
              <td><code>getElementsByClassName()</code></td>
              <td>HTMLCollection</td>
              <td>Live</td>
              <td>Multiple elements by class</td>
            </tr>
            <tr>
              <td><code>getElementsByTagName()</code></td>
              <td>HTMLCollection</td>
              <td>Live</td>
              <td>Elements by tag name</td>
            </tr>
            <tr>
              <td><code>children</code></td>
              <td>HTMLCollection</td>
              <td>Live</td>
              <td>Element children only</td>
            </tr>
            <tr>
              <td><code>childNodes</code></td>
              <td>NodeList</td>
              <td>Live</td>
              <td>All child nodes</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>DOM Best Practices</h4>
          <ul>
            <li>Cache DOM references when reusing elements</li>
            <li>Use <code>querySelector</code> for complex selections</li>
            <li>Batch DOM operations to minimize reflows</li>
            <li>Use event delegation for dynamic content</li>
            <li>Prefer <code>textContent</code> over <code>innerHTML</code> for plain text</li>
            <li>Use <code>classList</code> instead of <code>className</code> for class manipulation</li>
            <li>Always clean up event listeners when removing elements</li>
            <li>Consider using <code>DocumentFragment</code> for multiple insertions</li>
            <li>Use <code>requestAnimationFrame</code> for animations</li>
            <li>Add proper ARIA attributes for accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete DOM Manipulation Examples',
      code: `// ========== DOM Selection Examples ==========
console.log("=== DOM Selection Examples ===");

// HTML Structure for examples:
/*
<div id="app">
  <header class="main-header">
    <h1 class="title">Welcome</h1>
    <nav class="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main class="content">
    <section class="hero">
      <h2>Hero Section</h2>
      <p>Welcome to our site!</p>
      <button class="cta-button">Click Me</button>
    </section>
    <section class="features">
      <article class="feature" data-category="web">
        <h3>Feature 1</h3>
        <p>Description 1</p>
      </article>
      <article class="feature" data-category="mobile">
        <h3>Feature 2</h3>
        <p>Description 2</p>
      </article>
    </section>
  </main>
  <footer class="main-footer">
    <p>&copy; 2024 Company</p>
  </footer>
</div>
*/

console.log("\\n1. Basic Selection Methods:");

// By ID (fastest)
const app = document.getElementById('app');
console.log("App element:", app);

// By class name (returns live HTMLCollection)
const headers = document.getElementsByClassName('main-header');
console.log("Headers:", headers);

// By tag name (returns live HTMLCollection)
const paragraphs = document.getElementsByTagName('p');
console.log("Paragraphs:", paragraphs);

// Query selector (first match)
const firstLink = document.querySelector('a');
console.log("First link:", firstLink);

// Query selector all (returns static NodeList)
const allLinks = document.querySelectorAll('a');
console.log("All links:", allLinks);

// Complex CSS selectors
const secondFeature = document.querySelector('.feature:nth-child(2)');
const webFeatures = document.querySelectorAll('[data-category="web"]');
const ctaButton = document.querySelector('.cta-button');

console.log("\\n2. More Complex Selections:");

// Child selectors
const navLinks = document.querySelectorAll('nav a');
const firstListItem = document.querySelector('ul li:first-child');
const lastListItem = document.querySelector('ul li:last-child');

// Attribute selectors
const externalLinks = document.querySelectorAll('a[href^="http"]');
const mailtoLinks = document.querySelectorAll('a[href^="mailto"]');

// Pseudo-class selectors
const oddFeatures = document.querySelectorAll('.feature:nth-child(odd)');
const evenFeatures = document.querySelectorAll('.feature:nth-child(even)');

// ========== DOM Traversal Examples ==========
console.log("\\n\\n=== DOM Traversal Examples ===");

const firstFeature = document.querySelector('.feature');

console.log("\\n1. Parent Traversal:");
const parentSection = firstFeature.parentElement;
const parentMain = firstFeature.closest('main');
console.log("Parent section:", parentSection);
console.log("Closest main:", parentMain);

console.log("\\n2. Child Traversal:");
const featuresSection = document.querySelector('.features');
const firstChild = featuresSection.firstElementChild;
const lastChild = featuresSection.lastElementChild;
const children = featuresSection.children;

console.log("First child:", firstChild);
console.log("Last child:", lastChild);
console.log("All children:", children);

console.log("\\n3. Sibling Traversal:");
const secondFeatureElement = document.querySelectorAll('.feature')[1];
const nextSibling = secondFeatureElement.nextElementSibling;
const previousSibling = secondFeatureElement.previousElementSibling;

console.log("Next sibling:", nextSibling);
console.log("Previous sibling:", previousSibling);

console.log("\\n4. Tree Walking Function:");
function getElementPath(element) {
  const path = [];
  let current = element;
  
  while (current && current !== document.body) {
    const tag = current.tagName.toLowerCase();
    const id = current.id ? \`#\${current.id}\` : '';
    const classes = current.className ? \`.\${current.className.replace(/\\s+/g, '.')}\` : '';
    path.unshift(\`\${tag}\${id}\${classes}\`);
    current = current.parentElement;
  }
  
  return path.join(' > ');
}

const featurePath = getElementPath(firstFeature);
console.log("Element path:", featurePath);

// ========== Element Creation & Manipulation ==========
console.log("\\n\\n=== Element Creation & Manipulation ===");

console.log("\\n1. Creating Elements:");

// Create new elements
const newSection = document.createElement('section');
newSection.className = 'testimonials';

const newHeading = document.createElement('h2');
newHeading.textContent = 'Testimonials';

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Read what our <strong>customers</strong> say!';

// Create list with items
const testimonialList = document.createElement('ul');

for (let i = 1; i <= 3; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = \`Testimonial \${i}\`;
  testimonialList.appendChild(listItem);
}

// Assemble section
newSection.appendChild(newHeading);
newSection.appendChild(newParagraph);
newSection.appendChild(testimonialList);

// Insert into DOM
const mainContent = document.querySelector('main');
mainContent.appendChild(newSection);

console.log("\\n2. Different Insertion Methods:");

// insertAdjacentElement - more control
const referenceElement = document.querySelector('.hero');
const newDiv = document.createElement('div');
newDiv.textContent = 'Inserted before hero';
referenceElement.insertAdjacentElement('beforebegin', newDiv);

// insertAdjacentHTML
referenceElement.insertAdjacentHTML('afterend', '<div class="after-hero">After hero</div>');

// replaceWith
const oldParagraph = document.querySelector('.hero p');
if (oldParagraph) {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Updated content!';
  oldParagraph.replaceWith(newParagraph);
}

console.log("\\n3. Document Fragment (Performance):");

// Create 100 list items efficiently
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = \`Item \${i}\`;
  li.dataset.index = i;
  fragment.appendChild(li);
}

// Single DOM operation
const ul = document.createElement('ul');
ul.appendChild(fragment);
document.body.appendChild(ul);

// ========== Attributes & Data ==========
console.log("\\n\\n=== Attributes & Data ===");

const ctaButtonElement = document.querySelector('.cta-button');

console.log("\\n1. Standard Attributes:");
// Get attributes
const buttonClass = ctaButtonElement.getAttribute('class');
const buttonId = ctaButtonElement.id;

// Set attributes
ctaButtonElement.setAttribute('title', 'Click this button');
ctaButtonElement.setAttribute('aria-label', 'Call to action button');

// Remove attribute
ctaButtonElement.removeAttribute('title');

// Check attribute
const hasClass = ctaButtonElement.hasAttribute('class');

console.log("\\n2. Data Attributes:");
// Set data attributes
ctaButtonElement.dataset.action = 'click';
ctaButtonElement.dataset.target = 'modal';
ctaButtonElement.dataset.userId = '12345';

// Get data attributes
const action = ctaButtonElement.dataset.action;
const userId = ctaButtonElement.dataset.userId;

console.log("\\n3. Boolean Attributes:");
// Toggle boolean attributes
ctaButtonElement.disabled = true; // Adds 'disabled' attribute
ctaButtonElement.hidden = false; // Removes 'hidden' attribute

// Check boolean state
const isDisabled = ctaButtonElement.disabled;

console.log("\\n4. Custom Attributes:");
// Non-data custom attributes
ctaButtonElement.setAttribute('custom-info', 'some value');
const customInfo = ctaButtonElement.getAttribute('custom-info');

// ========== Styles & Classes ==========
console.log("\\n\\n=== Styles & Classes ===");

const heroSection = document.querySelector('.hero');

console.log("\\n1. Inline Styles:");
// Set inline styles
heroSection.style.backgroundColor = '#f0f0f0';
heroSection.style.padding = '20px';
heroSection.style.borderRadius = '8px';
heroSection.style.transition = 'all 0.3s ease';

// Multiple styles at once
heroSection.style.cssText = \`
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transform: translateY(0);
\`;

// Get computed styles
const computedStyles = window.getComputedStyle(heroSection);
const actualBgColor = computedStyles.backgroundColor;
const actualMargin = computedStyles.margin;

console.log("\\n2. CSS Classes:");
// Add classes
heroSection.classList.add('highlighted', 'animated');

// Remove classes
heroSection.classList.remove('old-class');

// Toggle classes
heroSection.classList.toggle('active');

// Check class
const hasActiveClass = heroSection.classList.contains('active');

// Replace class
heroSection.classList.replace('highlighted', 'featured');

console.log("\\n3. CSS Variables:");
// Set CSS custom properties
document.documentElement.style.setProperty('--primary-color', '#007bff');
document.documentElement.style.setProperty('--spacing', '16px');

// Get CSS custom properties
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// ========== Event Handling Examples ==========
console.log("\\n\\n=== Event Handling Examples ===");

console.log("\\n1. Basic Event Listeners:");

const button = document.querySelector('.cta-button');

// Click event
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Event:', event);
  console.log('Target:', event.target);
  console.log('Current target:', event.currentTarget);
});

// Mouse events
button.addEventListener('mouseenter', () => {
  console.log('Mouse entered button');
  button.style.transform = 'scale(1.05)';
});

button.addEventListener('mouseleave', () => {
  console.log('Mouse left button');
  button.style.transform = 'scale(1)';
});

// Keyboard events
document.addEventListener('keydown', (event) => {
  console.log(\`Key pressed: \${event.key} (Code: \${event.code})\`);
  
  // Ctrl + S to save
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
    console.log('Save action triggered');
  }
});

console.log("\\n2. Event Delegation:");

// Add event listener to parent for dynamic content
const featuresContainer = document.querySelector('.features');

featuresContainer.addEventListener('click', (event) => {
  // Check if clicked element is a feature
  if (event.target.closest('.feature')) {
    const feature = event.target.closest('.feature');
    console.log('Feature clicked:', feature);
    feature.classList.toggle('expanded');
  }
  
  // Check if clicked element is a feature heading
  if (event.target.matches('.feature h3')) {
    console.log('Feature heading clicked');
  }
});

console.log("\\n3. Form Events:");

// Create a form dynamically
const form = document.createElement('form');
form.innerHTML = \`
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <button type="submit">Submit</button>
\`;

// Add form events
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');

// Input events
nameInput.addEventListener('input', (event) => {
  console.log(\`Name changed: \${event.target.value}\`);
});

// Focus events
emailInput.addEventListener('focus', () => {
  console.log('Email field focused');
});

emailInput.addEventListener('blur', () => {
  console.log('Email field blurred');
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
  
  const formData = new FormData(form);
  console.log('Form data:', Object.fromEntries(formData));
});

// Add form to page
document.body.appendChild(form);

console.log("\\n4. Custom Events:");

// Create custom event
const customEvent = new CustomEvent('featuretoggle', {
  detail: {
    featureId: '123',
    enabled: true,
    timestamp: new Date()
  },
  bubbles: true,
  cancelable: true
});

// Listen for custom event
document.addEventListener('featuretoggle', (event) => {
  console.log('Custom event received:', event.detail);
});

// Dispatch custom event
button.addEventListener('click', () => {
  button.dispatchEvent(customEvent);
});

console.log("\\n5. Event Options:");

// Once option (runs only once)
button.addEventListener('click', () => {
  console.log('This will only run once');
}, { once: true });

// Passive option (improves scroll performance)
window.addEventListener('scroll', () => {
  console.log('Scrolling');
}, { passive: true });

// Capture phase
document.addEventListener('click', () => {
  console.log('Capture phase - Document');
}, true);

// ========== Practical DOM Applications ==========
console.log("\\n\\n=== Practical DOM Applications ===");

console.log("\\n1. Tabs Component:");

class Tabs {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.tabs = this.container.querySelectorAll('[data-tab]');
    this.panels = this.container.querySelectorAll('[data-panel]');
    this.activeTab = null;
    
    this.init();
  }
  
  init() {
    // Add click handlers to tabs
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });
    
    // Activate first tab
    if (this.tabs.length > 0) {
      this.switchTab(this.tabs[0].dataset.tab);
    }
  }
  
  switchTab(tabId) {
    // Deactivate all tabs and panels
    this.tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    });
    
    this.panels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
    });
    
    // Activate selected tab and panel
    const activeTab = this.container.querySelector(\`[data-tab="\${tabId}"]\`);
    const activePanel = this.container.querySelector(\`[data-panel="\${tabId}"]\`);
    
    if (activeTab && activePanel) {
      activeTab.classList.add('active');
      activeTab.setAttribute('aria-selected', 'true');
      activePanel.classList.add('active');
      activePanel.setAttribute('aria-hidden', 'false');
      
      this.activeTab = tabId;
      
      // Dispatch custom event
      this.container.dispatchEvent(new CustomEvent('tabchange', {
        detail: { tabId }
      }));
    }
  }
  
  getActiveTab() {
    return this.activeTab;
  }
}

// Create tabs HTML
const tabsHTML = \`
<div class="tabs" id="example-tabs">
  <div role="tablist">
    <button type="button" role="tab" data-tab="tab1" aria-controls="panel1">Tab 1</button>
    <button type="button" role="tab" data-tab="tab2" aria-controls="panel2">Tab 2</button>
    <button type="button" role="tab" data-tab="tab3" aria-controls="panel3">Tab 3</button>
  </div>
  <div role="tabpanel" data-panel="tab1" id="panel1" aria-labelledby="tab1">
    <p>Content for tab 1</p>
  </div>
  <div role="tabpanel" data-panel="tab2" id="panel2" aria-labelledby="tab2">
    <p>Content for tab 2</p>
  </div>
  <div role="tabpanel" data-panel="tab3" id="panel3" aria-labelledby="tab3">
    <p>Content for tab 3</p>
  </div>
</div>
\`;

document.body.insertAdjacentHTML('beforeend', tabsHTML);
const tabs = new Tabs('#example-tabs');

console.log("\\n2. Infinite Scroll:");

class InfiniteScroll {
  constructor(containerSelector, options = {}) {
    this.container = document.querySelector(containerSelector);
    this.options = {
      threshold: 100,
      loadMore: () => [],
      ...options
    };
    
    this.isLoading = false;
    this.page = 1;
    
    this.init();
  }
  
  init() {
    // Create loader element
    this.loader = document.createElement('div');
    this.loader.className = 'infinite-scroll-loader';
    this.loader.textContent = 'Loading...';
    this.loader.style.display = 'none';
    
    this.container.appendChild(this.loader);
    
    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll.bind(this));
    
    // Initial load
    this.loadMore();
  }
  
  handleScroll() {
    if (this.isLoading) return;
    
    const containerBottom = this.container.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    
    if (containerBottom - viewportHeight < this.options.threshold) {
      this.loadMore();
    }
  }
  
  async loadMore() {
    this.isLoading = true;
    this.loader.style.display = 'block';
    
    try {
      const items = await this.options.loadMore(this.page);
      
      if (items && items.length > 0) {
        this.renderItems(items);
        this.page++;
      } else {
        // No more items
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        this.loader.textContent = 'No more items';
      }
    } catch (error) {
      console.error('Error loading more items:', error);
      this.loader.textContent = 'Error loading items';
    } finally {
      this.isLoading = false;
      this.loader.style.display = 'none';
    }
  }
  
  renderItems(items) {
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
      const element = document.createElement('div');
      element.className = 'item';
      element.textContent = item;
      fragment.appendChild(element);
    });
    
    this.container.insertBefore(fragment, this.loader);
  }
  
  destroy() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
}

// Example usage
const scrollContainer = document.createElement('div');
scrollContainer.id = 'infinite-scroll-container';
scrollContainer.style.height = '500px';
scrollContainer.style.overflow = 'auto';

document.body.appendChild(scrollContainer);

const infiniteScroll = new InfiniteScroll('#infinite-scroll-container', {
  loadMore: async (page) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(\`Item \${(page - 1) * 10 + i + 1}\`);
    }
    
    return items;
  }
});

console.log("\\n3. Drag and Drop:");

class DragAndDrop {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.draggedItem = null;
    
    this.init();
  }
  
  init() {
    // Make all draggable items
    const items = this.container.querySelectorAll('.draggable');
    items.forEach(item => {
      item.draggable = true;
      item.addEventListener('dragstart', this.handleDragStart.bind(this));
      item.addEventListener('dragover', this.handleDragOver.bind(this));
      item.addEventListener('drop', this.handleDrop.bind(this));
      item.addEventListener('dragend', this.handleDragEnd.bind(this));
    });
    
    // Add drop zones
    this.container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    
    this.container.addEventListener('drop', (e) => {
      e.preventDefault();
      if (this.draggedItem) {
        this.container.appendChild(this.draggedItem);
      }
    });
  }
  
  handleDragStart(e) {
    this.draggedItem = e.target;
    e.target.style.opacity = '0.5';
    
    // Set drag data
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
  }
  
  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Highlight drop target
    const target = e.target.closest('.draggable');
    if (target && target !== this.draggedItem) {
      target.style.border = '2px dashed #007bff';
    }
  }
  
  handleDrop(e) {
    e.preventDefault();
    
    const target = e.target.closest('.draggable');
    if (target && target !== this.draggedItem && this.draggedItem) {
      const targetRect = target.getBoundingClientRect();
      const targetCenter = targetRect.top + targetRect.height / 2;
      
      if (e.clientY < targetCenter) {
        // Insert before
        target.parentNode.insertBefore(this.draggedItem, target);
      } else {
        // Insert after
        target.parentNode.insertBefore(this.draggedItem, target.nextSibling);
      }
    }
    
    // Remove highlights
    this.removeHighlights();
  }
  
  handleDragEnd(e) {
    e.target.style.opacity = '1';
    this.draggedItem = null;
    this.removeHighlights();
  }
  
  removeHighlights() {
    const items = this.container.querySelectorAll('.draggable');
    items.forEach(item => {
      item.style.border = '';
    });
  }
}

// Create draggable items
const dragContainer = document.createElement('div');
dragContainer.className = 'drag-container';
dragContainer.innerHTML = \`
  <div class="draggable" id="item1">Item 1</div>
  <div class="draggable" id="item2">Item 2</div>
  <div class="draggable" id="item3">Item 3</div>
  <div class="draggable" id="item4">Item 4</div>
\`;

document.body.appendChild(dragContainer);
const dragAndDrop = new DragAndDrop('.drag-container');`,
      explanation: 'These comprehensive examples demonstrate DOM selection, manipulation, event handling, and practical applications like tabs, infinite scroll, and drag-and-drop functionality.',
      preview: '<div class="preview-demo"><h3 style="color: #10b981">DOM Manipulation Preview</h3><p>Try interacting with elements and see DOM changes in action!</p><div id="domOutput" class="result-box">DOM operations will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Document Object Model (DOM)', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
    { title: 'DOM Manipulation Guide', url: 'https://javascript.info/document' },
    { title: 'Events: Basics', url: 'https://javascript.info/events' },
    { title: 'Event Delegation', url: 'https://javascript.info/event-delegation' }
  ],
  prerequisites: ['js-dates'],
  nextTopics: ['js-events']
},{
  id: 'js-error-handling',
  title: 'Error Handling',
  icon: <AlertTriangle />,
  difficulty: 'intermediate',
  estimatedTime: 15,
  category: 'javascript',
  order: 14,
  sections: [
    'try...catch Statement',
    'throw Statement',
    'Error Types',
    'Custom Errors',
    'finally Block',
    'Error Propagation',
    'Best Practices'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">⚠️</div>
        <h1>Error Handling in JavaScript</h1>
        <p class="concept-tagline">Gracefully Handle Exceptions and Build Robust Applications</p>
      </div>
      
      <div class="error-3d-visual">
        <div class="error-flow">
          <div class="flow-step try">Try</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">
            <div class="flow-branch">
              <div class="branch-success">Success</div>
              <div class="branch-arrow">→</div>
              <div class="flow-step">Continue</div>
            </div>
            <div class="flow-branch">
              <div class="branch-error">Error</div>
              <div class="branch-arrow">→</div>
              <div class="flow-step catch">Catch</div>
            </div>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step finally">Finally</div>
        </div>
      </div>
      
      <h2>🛡️ try...catch Statement</h2>
      <p>The <code>try...catch</code> statement allows you to test a block of code for errors.</p>
      
      <div class="syntax-box">
        <h3>Syntax:</h3>
        <pre><code>try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that always runs
}</code></pre>
      </div>
      
      <div class="example-section">
        <h3>Basic Examples:</h3>
        <pre><code>// Basic try...catch
try {
  // This code will execute
  console.log("Starting execution...");
  
  // This will throw an error
  const result = someUndefinedVariable * 2;
  
  console.log("This line won't run");
} catch (error) {
  // This catches the error
  console.log("An error occurred:", error.message);
  console.log("Error name:", error.name);
  console.log("Error stack:", error.stack);
}

console.log("Execution continues after catch block");

// try...catch with JSON parsing
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("Parsed successfully:", data);
    return data;
  } catch (error) {
    console.log("Failed to parse JSON:", error.message);
    return null;
  }
}

parseJSON('{"name": "John", "age": 30}'); // Success
parseJSON('invalid json'); // Error caught

// Multiple operations in try block
function processUserInput(input) {
  try {
    // Validate input
    if (!input || input.trim() === '') {
      throw new Error("Input cannot be empty");
    }
    
    // Process input
    const processed = input.toUpperCase();
    
    // More operations...
    if (processed.length > 100) {
      throw new Error("Input too long");
    }
    
    return processed;
  } catch (error) {
    console.log("Processing failed:", error.message);
    return "Default Value";
  }
}</code></pre>
      </div>
      
      <h2>🎯 throw Statement</h2>
      <p>The <code>throw</code> statement allows you to create custom errors.</p>
      
      <div class="example-section">
        <h3>Throwing Errors:</h3>
        <pre><code>// Throwing different types of errors
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new TypeError("Age must be a number");
  }
  
  if (age < 0) {
    throw new RangeError("Age cannot be negative");
  }
  
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  
  return true;
}

// Using the validation function
try {
  validateAge(15); // Throws error
} catch (error) {
  console.log("Validation error:", error.message);
}

// Throwing custom objects
function divide(a, b) {
  if (b === 0) {
    throw {
      name: "DivisionError",
      message: "Cannot divide by zero",
      code: "DIV_BY_ZERO",
      timestamp: new Date().toISOString()
    };
  }
  
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.log("Custom error:", error);
}

// Rethrowing errors
function processData(data) {
  try {
    // Some processing that might fail
    if (!data) {
      throw new Error("No data provided");
    }
    
    // More processing...
  } catch (error) {
    // Add context and rethrow
    error.message = \`Data processing failed: \${error.message}\`;
    throw error; // Rethrow to let caller handle
  }
}</code></pre>
      </div>
      
      <h2>🔧 Error Types</h2>
      <div class="error-types-3d">
        <div class="types-grid">
          <div class="type-card">
            <div class="type-icon">🔤</div>
            <h3>Error</h3>
            <p>Generic error constructor</p>
            <code>new Error("message")</code>
          </div>
          <div class="type-card">
            <div class="type-icon">🔢</div>
            <h3>SyntaxError</h3>
            <p>Syntax parsing errors</p>
            <code>new SyntaxError()</code>
          </div>
          <div class="type-card">
            <div class="type-icon">📊</div>
            <h3>TypeError</h3>
            <p>Invalid type operations</p>
            <code>new TypeError()</code>
          </div>
          <div class="type-card">
            <div class="type-icon">🎯</div>
            <h3>RangeError</h3>
            <p>Value out of range</p>
            <code>new RangeError()</code>
          </div>
          <div class="type-card">
            <div class="type-icon">🔗</div>
            <h3>ReferenceError</h3>
            <p>Invalid reference</p>
            <code>new ReferenceError()</code>
          </div>
          <div class="type-card">
            <div class="type-icon">❓</div>
            <h3>URIError</h3>
            <p>URI handling errors</p>
            <code>new URIError()</code>
          </div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Using Different Error Types:</h3>
        <pre><code>// SyntaxError - Invalid JavaScript syntax
try {
  eval("console.log('hello'"); // Missing closing parenthesis
} catch (error) {
  console.log("SyntaxError:", error.name);
}

// TypeError - Wrong type of value
try {
  const obj = null;
  obj.someProperty; // Cannot read property of null
} catch (error) {
  console.log("TypeError:", error.name);
}

// RangeError - Value out of range
try {
  const arr = new Array(-1); // Invalid array length
} catch (error) {
  console.log("RangeError:", error.name);
}

// ReferenceError - Undefined variable
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.name);
}

// URIError - Invalid URI
try {
  decodeURIComponent("%"); // Invalid URI
} catch (error) {
  console.log("URIError:", error.name);
}

// Creating and using different error types
function validateInput(value, type) {
  switch(type) {
    case 'number':
      if (typeof value !== 'number') {
        throw new TypeError("Value must be a number");
      }
      if (value < 0 || value > 100) {
        throw new RangeError("Value must be between 0 and 100");
      }
      break;
      
    case 'string':
      if (typeof value !== 'string') {
        throw new TypeError("Value must be a string");
      }
      if (value.length > 255) {
        throw new RangeError("String too long");
      }
      break;
      
    default:
      throw new Error("Invalid validation type");
  }
}

try {
  validateInput("test", 'number'); // Throws TypeError
} catch (error) {
  console.log(\`\${error.name}: \${error.message}\`);
}</code></pre>
      </div>
      
      <h2>🏗️ Custom Error Classes</h2>
      <p>Create custom error classes for better error handling in your applications.</p>
      
      <div class="example-section">
        <h3>Creating Custom Errors:</h3>
        <pre><code>// Basic custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.timestamp = new Date().toISOString();
    this.code = "VALIDATION_ERROR";
  }
  
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      field: this.field,
      timestamp: this.timestamp,
      code: this.code,
      stack: this.stack
    };
  }
}

// Usage
try {
  throw new ValidationError("Invalid email format", "email");
} catch (error) {
  console.log("Custom error:", error.toJSON());
}

// More sophisticated custom error
class APIError extends Error {
  constructor(message, statusCode, url, details = {}) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
    this.url = url;
    this.details = details;
    this.isOperational = true; // Distinguish operational errors
  }
  
  get formattedMessage() {
    return \`\${this.name}: \${this.message} (Status: \${this.statusCode}, URL: \${this.url})\`;
  }
  
  static fromResponse(response, url) {
    const message = response.message || "API request failed";
    const statusCode = response.status || 500;
    const details = response.details || {};
    
    return new APIError(message, statusCode, url, details);
  }
}

// Network error class
class NetworkError extends Error {
  constructor(message, originalError) {
    super(message);
    this.name = "NetworkError";
    this.originalError = originalError;
    this.code = originalError?.code;
    this.isRetryable = true;
  }
  
  static isNetworkError(error) {
    return error instanceof NetworkError || 
           error?.code === 'ENOTFOUND' ||
           error?.code === 'ECONNREFUSED';
  }
}

// Authentication error
class AuthenticationError extends Error {
  constructor(message, reason = "invalid_credentials") {
    super(message);
    this.name = "AuthenticationError";
    this.reason = reason;
    this.code = "AUTH_ERROR";
    this.httpStatusCode = 401;
  }
  
  shouldLogout() {
    return this.reason === "invalid_token" || 
           this.reason === "session_expired";
  }
}

// Using custom errors in an application
class UserService {
  async getUser(userId) {
    try {
      // Simulate API call
      if (!userId) {
        throw new ValidationError("User ID is required", "userId");
      }
      
      if (userId === "invalid") {
        throw new AuthenticationError("Invalid authentication token", "invalid_token");
      }
      
      // Simulate network error
      if (Math.random() < 0.1) {
        throw new NetworkError("Connection timeout", { code: "ETIMEDOUT" });
      }
      
      return { id: userId, name: "John Doe" };
    } catch (error) {
      // Enhance error with context
      if (error instanceof ValidationError) {
        error.context = { service: "UserService", method: "getUser" };
      }
      
      throw error;
    }
  }
}

// Error handler utility
class ErrorHandler {
  static handle(error, context = {}) {
    console.error("\\n=== ERROR HANDLED ===");
    console.error("Error:", error.name);
    console.error("Message:", error.message);
    console.error("Context:", context);
    
    if (error.stack) {
      console.error("Stack:", error.stack.split("\\n").slice(0, 5).join("\\n"));
    }
    
    // Different handling based on error type
    if (error instanceof ValidationError) {
      return {
        success: false,
        error: {
          type: "validation",
          field: error.field,
          message: error.message
        },
        statusCode: 400
      };
    } else if (error instanceof AuthenticationError) {
      return {
        success: false,
        error: {
          type: "authentication",
          reason: error.reason,
          message: error.message
        },
        statusCode: error.httpStatusCode
      };
    } else if (error instanceof NetworkError) {
      return {
        success: false,
        error: {
          type: "network",
          retryable: error.isRetryable,
          message: error.message
        },
        statusCode: 503
      };
    } else {
      // Generic error
      return {
        success: false,
        error: {
          type: "internal",
          message: "Internal server error"
        },
        statusCode: 500
      };
    }
  }
  
  static async withErrorHandling(operation, context = {}) {
    try {
      const result = await operation();
      return { success: true, data: result };
    } catch (error) {
      return this.handle(error, context);
    }
  }
}</code></pre>
      </div>
      
      <h2>🔁 finally Block</h2>
      <p>The <code>finally</code> block always executes, regardless of whether an error occurred.</p>
      
      <div class="example-section">
        <h3>Using finally:</h3>
        <pre><code>// Basic finally usage
function processFile(filename) {
  let fileHandle = null;
  
  try {
    console.log("Opening file:", filename);
    // Simulate file opening
    fileHandle = { name: filename, isOpen: true };
    
    // Process file (might throw error)
    if (filename.includes("error")) {
      throw new Error("File processing error");
    }
    
    console.log("File processed successfully");
    return "File content";
  } catch (error) {
    console.log("Error processing file:", error.message);
    throw error; // Re-throw after logging
  } finally {
    // This always runs
    if (fileHandle && fileHandle.isOpen) {
      console.log("Closing file handle:", fileHandle.name);
      fileHandle.isOpen = false;
    }
    console.log("Cleanup complete");
  }
}

// Test with success and error
try {
  processFile("document.txt");
} catch (error) {
  console.log("Caught in outer catch:", error.message);
}

try {
  processFile("error.txt");
} catch (error) {
  console.log("Caught in outer catch:", error.message);
}

// finally with return statements
function testFinally() {
  try {
    console.log("In try block");
    return "Return from try";
  } catch (error) {
    console.log("In catch block");
    return "Return from catch";
  } finally {
    console.log("In finally block - always executes");
    // Can't return from finally (overwrites previous returns)
  }
}

console.log("Result:", testFinally());
// Output:
// In try block
// In finally block - always executes
// Result: Return from try

// Database transaction example
class Database {
  constructor() {
    this.connection = { isOpen: false, transactionActive: false };
  }
  
  async transaction(callback) {
    this.openConnection();
    this.beginTransaction();
    
    try {
      const result = await callback();
      await this.commitTransaction();
      return result;
    } catch (error) {
      await this.rollbackTransaction();
      throw error;
    } finally {
      this.closeConnection();
    }
  }
  
  openConnection() {
    this.connection.isOpen = true;
    console.log("Connection opened");
  }
  
  beginTransaction() {
    this.connection.transactionActive = true;
    console.log("Transaction begun");
  }
  
  async commitTransaction() {
    console.log("Transaction committed");
    this.connection.transactionActive = false;
  }
  
  async rollbackTransaction() {
    console.log("Transaction rolled back");
    this.connection.transactionActive = false;
  }
  
  closeConnection() {
    this.connection.isOpen = false;
    console.log("Connection closed");
  }
}

// Usage
const db = new Database();
db.transaction(async () => {
  console.log("Executing database operations...");
  // Simulate operations
  if (Math.random() > 0.5) {
    throw new Error("Operation failed");
  }
  return "Operation successful";
}).then(console.log).catch(console.error);</code></pre>
      </div>
      
      <h2>📤 Error Propagation</h2>
      <div class="error-propagation-3d">
        <div class="propagation-flow">
          <div class="level">Function A</div>
          <div class="arrow">↓ throws</div>
          <div class="level">Function B</div>
          <div class="arrow">↓ propagates</div>
          <div class="level">Function C</div>
          <div class="arrow">↓ catches</div>
          <div class="level catch">Error Handler</div>
        </div>
      </div>
      
      <div class="example-section">
        <h3>Error Propagation Examples:</h3>
        <pre><code>// Error propagation through call stack
function level1() {
  console.log("Level 1: Starting");
  level2();
  console.log("Level 1: This won't run if error propagates");
}

function level2() {
  console.log("Level 2: Starting");
  level3();
  console.log("Level 2: This won't run");
}

function level3() {
  console.log("Level 3: Throwing error");
  throw new Error("Error from level 3");
}

// Uncaught error propagation
try {
  level1();
} catch (error) {
  console.log("Caught at top level:", error.message);
  console.log("Stack trace:", error.stack);
}

// Async error propagation
async function asyncLevel1() {
  console.log("Async Level 1: Starting");
  await asyncLevel2();
  console.log("Async Level 1: Continues after error handling");
}

async function asyncLevel2() {
  console.log("Async Level 2: Starting");
  await asyncLevel3();
  console.log("Async Level 2: Won't run");
}

async function asyncLevel3() {
  console.log("Async Level 3: Throwing async error");
  throw new Error("Async error from level 3");
}

// Handle async errors
asyncLevel1().catch(error => {
  console.log("Async error caught:", error.message);
});

// Promise chain error propagation
function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Processing");
    resolve("Step 1 result");
  });
}

function step2(input) {
  return new Promise((resolve, reject) => {
    console.log("Step 2: Processing", input);
    reject(new Error("Step 2 failed"));
  });
}

function step3(input) {
  return new Promise((resolve) => {
    console.log("Step 3: Processing", input);
    resolve("Final result");
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Promise chain error:", error.message));

// Error propagation in event handlers
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  
  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(handler);
  }
  
  emit(event, data) {
    const handlers = this.listeners.get(event) || [];
    
    for (const handler of handlers) {
      try {
        handler(data);
      } catch (error) {
        console.error(\`Error in event handler for \${event}:\`, error);
        // Don't rethrow - continue with other handlers
      }
    }
  }
}

const emitter = new EventEmitter();

emitter.on("data", (data) => {
  console.log("Handler 1:", data);
});

emitter.on("data", (data) => {
  throw new Error("Handler 2 failed");
});

emitter.on("data", (data) => {
  console.log("Handler 3:", data);
});

console.log("\\nEmitting event with error in handler:");
emitter.emit("data", "test data");</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Robust Calculator with Error Handling</h3>
          <p>Create a calculator that handles all possible errors gracefully.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class Calculator {
  constructor() {
    this.history = [];
  }
  
  add(a, b) {
    try {
      this.validateNumbers(a, b);
      const result = a + b;
      this.recordOperation('add', a, b, result);
      return result;
    } catch (error) {
      this.recordError('add', error);
      throw error;
    }
  }
  
  subtract(a, b) {
    try {
      this.validateNumbers(a, b);
      const result = a - b;
      this.recordOperation('subtract', a, b, result);
      return result;
    } catch (error) {
      this.recordError('subtract', error);
      throw error;
    }
  }
  
  multiply(a, b) {
    try {
      this.validateNumbers(a, b);
      
      // Check for overflow
      if (this.willOverflow(a, b, 'multiply')) {
        throw new RangeError("Multiplication result would overflow");
      }
      
      const result = a * b;
      this.recordOperation('multiply', a, b, result);
      return result;
    } catch (error) {
      this.recordError('multiply', error);
      throw error;
    }
  }
  
  divide(a, b) {
    try {
      this.validateNumbers(a, b);
      
      if (b === 0) {
        throw new Error("Division by zero");
      }
      
      // Check for precision issues
      if (Math.abs(b) < 1e-10) {
        throw new Error("Division by very small number may cause precision issues");
      }
      
      const result = a / b;
      
      // Check for valid result
      if (!isFinite(result)) {
        throw new RangeError("Division resulted in infinite value");
      }
      
      this.recordOperation('divide', a, b, result);
      return result;
    } catch (error) {
      this.recordError('divide', error);
      throw error;
    }
  }
  
  power(base, exponent) {
    try {
      this.validateNumbers(base, exponent);
      
      // Special cases
      if (base === 0 && exponent < 0) {
        throw new Error("0 cannot be raised to a negative power");
      }
      
      const result = Math.pow(base, exponent);
      
      // Check for invalid results
      if (isNaN(result)) {
        throw new Error("Invalid power operation");
      }
      
      this.recordOperation('power', base, exponent, result);
      return result;
    } catch (error) {
      this.recordError('power', error);
      throw error;
    }
  }
  
  validateNumbers(...numbers) {
    for (const num of numbers) {
      if (typeof num !== 'number') {
        throw new TypeError(\`Value must be a number, got \${typeof num}\`);
      }
      
      if (isNaN(num)) {
        throw new Error("Cannot operate on NaN");
      }
      
      if (!isFinite(num)) {
        throw new RangeError("Cannot operate on infinite values");
      }
    }
  }
  
  willOverflow(a, b, operation) {
    const MAX_SAFE = Number.MAX_SAFE_INTEGER;
    const MIN_SAFE = Number.MIN_SAFE_INTEGER;
    
    switch(operation) {
      case 'multiply':
        if (a > MAX_SAFE / b || a < MIN_SAFE / b) {
          return true;
        }
        break;
      case 'add':
        if (a > MAX_SAFE - b || a < MIN_SAFE - b) {
          return true;
        }
        break;
    }
    
    return false;
  }
  
  recordOperation(operation, a, b, result) {
    this.history.push({
      type: 'operation',
      operation,
      operands: [a, b],
      result,
      timestamp: new Date().toISOString()
    });
  }
  
  recordError(operation, error) {
    this.history.push({
      type: 'error',
      operation,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      timestamp: new Date().toISOString()
    });
  }
  
  getHistory() {
    return [...this.history];
  }
  
  clearHistory() {
    this.history = [];
  }
  
  calculate(expression) {
    try {
      // Simple expression parsing (for demonstration)
      const match = expression.match(/^(\\d+)\\s*([+\\-*/^])\\s*(\\d+)$/);
      
      if (!match) {
        throw new SyntaxError("Invalid expression format. Use: number operator number");
      }
      
      const a = parseFloat(match[1]);
      const operator = match[2];
      const b = parseFloat(match[3]);
      
      switch(operator) {
        case '+': return this.add(a, b);
        case '-': return this.subtract(a, b);
        case '*': return this.multiply(a, b);
        case '/': return this.divide(a, b);
        case '^': return this.power(a, b);
        default:
          throw new SyntaxError(\`Unknown operator: \${operator}\`);
      }
    } catch (error) {
      this.recordError('calculate', error);
      throw error;
    }
  }
}

// Usage
const calc = new Calculator();

try {
  console.log("10 + 20 =", calc.add(10, 20));
  console.log("10 / 0 =", calc.divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}

try {
  console.log("Calculating expression:", calc.calculate("10 * 20"));
  console.log("Calculating invalid:", calc.calculate("10 & 20"));
} catch (error) {
  console.log("Expression error:", error.message);
}

console.log("Calculator history:", calc.getHistory());</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Retry Logic with Exponential Backoff</h3>
          <p>Implement a robust retry mechanism for unreliable operations.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class RetryableError extends Error {
  constructor(message, retryable = true) {
    super(message);
    this.name = "RetryableError";
    this.retryable = retryable;
    this.retryCount = 0;
  }
}

class NonRetryableError extends Error {
  constructor(message) {
    super(message);
    this.name = "NonRetryableError";
    this.retryable = false;
  }
}

class RetryManager {
  constructor(options = {}) {
    this.maxRetries = options.maxRetries || 3;
    this.initialDelay = options.initialDelay || 1000; // ms
    this.maxDelay = options.maxDelay || 30000; // ms
    this.backoffFactor = options.backoffFactor || 2;
    this.retryableErrors = options.retryableErrors || [
      'NetworkError',
      'TimeoutError',
      'RetryableError'
    ];
  }
  
  async execute(operation, context = {}) {
    let lastError;
    let attempt = 0;
    
    while (attempt <= this.maxRetries) {
      try {
        console.log(\`Attempt \${attempt + 1}/\${this.maxRetries + 1}\`);
        const result = await operation();
        console.log("Operation successful");
        return result;
      } catch (error) {
        lastError = error;
        attempt++;
        
        // Check if we should retry
        const shouldRetry = this.shouldRetry(error, attempt);
        
        if (!shouldRetry) {
          console.log("Non-retryable error, stopping");
          throw this.enhanceError(error, attempt);
        }
        
        if (attempt <= this.maxRetries) {
          const delay = this.calculateDelay(attempt);
          console.log(\`Retryable error: \${error.message}. Retrying in \${delay}ms...\`);
          await this.delay(delay);
        }
      }
    }
    
    // Max retries exceeded
    throw this.enhanceError(lastError, attempt, true);
  }
  
  shouldRetry(error, attempt) {
    if (attempt > this.maxRetries) {
      return false;
    }
    
    // Check error type
    if (error.retryable === false) {
      return false;
    }
    
    // Check if error is in retryable list
    if (this.retryableErrors.includes(error.name)) {
      return true;
    }
    
    // Default retry for network-like errors
    const networkLikeErrors = [
      'ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND',
      'ECONNREFUSED', 'EAI_AGAIN'
    ];
    
    if (error.code && networkLikeErrors.includes(error.code)) {
      return true;
    }
    
    // Retry on 5xx status codes for HTTP errors
    if (error.statusCode && error.statusCode >= 500 && error.statusCode < 600) {
      return true;
    }
    
    return false;
  }
  
  calculateDelay(attempt) {
    // Exponential backoff with jitter
    const exponentialDelay = this.initialDelay * Math.pow(this.backoffFactor, attempt - 1);
    const withJitter = exponentialDelay * (0.5 + Math.random() * 0.5); // 50-150% of delay
    return Math.min(withJitter, this.maxDelay);
  }
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  enhanceError(error, attempt, maxRetriesExceeded = false) {
    error.attempt = attempt;
    error.retryInfo = {
      maxRetries: this.maxRetries,
      maxRetriesExceeded
    };
    
    if (maxRetriesExceeded) {
      error.message = \`\${error.message} (Max retries exceeded: \${this.maxRetries})\`;
    }
    
    return error;
  }
}

// Example usage
async function unreliableAPICall() {
  // Simulate unreliable API
  const random = Math.random();
  
  if (random < 0.7) {
    // Simulate network error
    const error = new Error("Network timeout");
    error.name = "NetworkError";
    error.code = "ETIMEDOUT";
    throw error;
  } else if (random < 0.9) {
    // Simulate server error
    const error = new Error("Internal server error");
    error.statusCode = 503;
    throw error;
  } else {
    // Success
    return { data: "API call successful", timestamp: new Date().toISOString() };
  }
}

async function main() {
  const retryManager = new RetryManager({
    maxRetries: 3,
    initialDelay: 1000,
    maxDelay: 10000
  });
  
  try {
    const result = await retryManager.execute(unreliableAPICall);
    console.log("Final result:", result);
  } catch (error) {
    console.error("Failed after all retries:", error.message);
    console.error("Attempts:", error.attempt);
    console.error("Retry info:", error.retryInfo);
  }
}

// Run example
main();</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 Error Handling Patterns</h3>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Use Case</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>try...catch</code></td>
              <td>Synchronous error handling</td>
              <td>Simple, clear flow</td>
              <td>Doesn't work for async</td>
            </tr>
            <tr>
              <td><code>.catch()</code> on Promises</td>
              <td>Promise-based async</td>
              <td>Clean promise chains</td>
              <td>Can be verbose</td>
            </tr>
            <tr>
              <td><code>async/await</code> with try...catch</td>
              <td>Modern async handling</td>
              <td>Clean, synchronous-like syntax</td>
              <td>Requires async functions</td>
            </tr>
            <tr>
              <td>Error Boundaries (React)</td>
              <td>UI component errors</td>
              <td>Prevents app crashes</td>
              <td>React-specific</td>
            </tr>
            <tr>
              <td>Global Error Handlers</td>
              <td>Uncaught exceptions</td>
              <td>Catch-all safety net</td>
              <td>Should be last resort</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Error Handling Best Practices</h4>
          <ul>
            <li>Always use specific error types rather than generic <code>Error</code></li>
            <li>Don't catch errors you can't handle - let them propagate</li>
            <li>Include context in error messages but avoid sensitive data</li>
            <li>Use custom error classes for domain-specific errors</li>
            <li>Clean up resources in <code>finally</code> blocks</li>
            <li>Log errors with sufficient context for debugging</li>
            <li>Consider implementing error monitoring and alerting</li>
            <li>Test error scenarios as thoroughly as success scenarios</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Error Handling Examples',
      code: `// ========== Basic Error Handling ==========
console.log("=== Basic Error Handling ===");

// 1. Basic try...catch
console.log("\\n1. Basic try...catch:");
try {
  console.log("Starting try block");
  const undefinedVar = someUndefinedVariable; // This will throw
  console.log("This won't execute");
} catch (error) {
  console.log("Caught error:", error.message);
  console.log("Error name:", error.name);
  console.log("Error stack (first line):", error.stack.split("\\n")[0]);
} finally {
  console.log("Finally block always executes");
}

// 2. Throwing custom errors
console.log("\\n2. Throwing Errors:");
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (error) {
  console.log("Division error:", error.message);
}

// 3. Different error types
console.log("\\n3. Error Types:");
try {
  // TypeError
  const obj = null;
  obj.property;
} catch (error) {
  console.log("TypeError:", error.name);
}

try {
  // RangeError
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.name);
}

try {
  // ReferenceError
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.name);
}

// ========== Advanced Error Handling ==========
console.log("\\n\\n=== Advanced Error Handling ===");

// 1. Custom error classes
console.log("\\n1. Custom Error Classes:");
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.code = "VALIDATION_ERROR";
  }
}

class DatabaseError extends Error {
  constructor(message, query, originalError) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

// Usage
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required", "name");
  }
  
  if (user.age < 0) {
    throw new ValidationError("Age cannot be negative", "age");
  }
  
  return true;
}

try {
  validateUser({ age: -5 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(\`Validation failed for \${error.field}: \${error.message}\`);
  }
}

// 2. Error handling in async functions
console.log("\\n2. Async Error Handling:");
async function fetchData(url) {
  try {
    // Simulate async operation
    if (url.includes("error")) {
      throw new Error("Failed to fetch data");
    }
    
    return { data: "Sample data" };
  } catch (error) {
    console.log("Fetch error:", error.message);
    throw error; // Re-throw for caller
  }
}

async function processAsync() {
  try {
    const data = await fetchData("https://api.example.com/error");
    console.log("Data received:", data);
  } catch (error) {
    console.log("Process error:", error.message);
  }
}

processAsync();

// 3. Promise error handling
console.log("\\n3. Promise Error Handling:");
function asyncOperation(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Operation failed"));
      } else {
        resolve("Operation succeeded");
      }
    }, 1000);
  });
}

// Multiple ways to handle promise errors
asyncOperation(true)
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Promise catch:", error.message));

// Or with async/await
(async () => {
  try {
    const result = await asyncOperation(true);
    console.log("Async/await success:", result);
  } catch (error) {
    console.log("Async/await error:", error.message);
  }
})();

// ========== Practical Error Handling Patterns ==========
console.log("\\n\\n=== Practical Error Handling Patterns ===");

// 1. Error handler utility
console.log("\\n1. Error Handler Utility:");
class ErrorHandler {
  static handle(error, context = {}) {
    const errorInfo = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    };
    
    // Log error
    console.error("ERROR:", errorInfo);
    
    // Different handling based on environment
    if (process.env.NODE_ENV === 'production') {
      // Send to error monitoring service
      this.reportToMonitoring(errorInfo);
    }
    
    // Return user-friendly message
    return {
      success: false,
      error: this.getUserMessage(error),
      errorId: this.generateErrorId()
    };
  }
  
  static reportToMonitoring(errorInfo) {
    // In a real app, send to Sentry, LogRocket, etc.
    console.log("Reporting to monitoring service:", errorInfo);
  }
  
  static getUserMessage(error) {
    // Map technical errors to user-friendly messages
    if (error.name === 'ValidationError') {
      return "Please check your input and try again.";
    } else if (error.name === 'NetworkError') {
      return "Network error. Please check your connection.";
    } else {
      return "An unexpected error occurred. Please try again.";
    }
  }
  
  static generateErrorId() {
    return Math.random().toString(36).substr(2, 9);
  }
}

// 2. Retry logic with exponential backoff
console.log("\\n2. Retry Logic:");
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(\`Attempt \${attempt} of \${maxRetries}\`);
      return await operation();
    } catch (error) {
      lastError = error;
      console.log(\`Attempt \${attempt} failed: \${error.message}\`);
      
      if (attempt < maxRetries) {
        const waitTime = delay * Math.pow(2, attempt - 1); // Exponential backoff
        console.log(\`Waiting \${waitTime}ms before retry...\`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw lastError;
}

// Test retry logic
async function unreliableOperation() {
  if (Math.random() < 0.7) {
    throw new Error("Operation failed randomly");
  }
  return "Success";
}

retryOperation(unreliableOperation, 3, 1000)
  .then(result => console.log("Final result:", result))
  .catch(error => console.log("All retries failed:", error.message));

// 3. Error boundaries (concept)
console.log("\\n3. Error Boundary Pattern:");
class ErrorBoundary {
  constructor(operation) {
    this.operation = operation;
  }
  
  execute() {
    try {
      return this.operation();
    } catch (error) {
      // Log the error
      console.error("Error boundary caught:", error.message);
      
      // Provide fallback
      return this.getFallback();
      
      // Or re-throw a safer error
      // throw new Error("Operation failed safely");
    }
  }
  
  getFallback() {
    return {
      success: false,
      message: "Operation failed, using fallback",
      timestamp: new Date().toISOString()
    };
  }
}

// Usage
const boundary = new ErrorBoundary(() => {
  throw new Error("Critical operation failed");
});

const result = boundary.execute();
console.log("Error boundary result:", result);

// ========== Real-World Error Handling ==========
console.log("\\n\\n=== Real-World Error Handling ===");

// 1. API client with error handling
console.log("\\n1. API Client with Error Handling:");
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const startTime = Date.now();
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      
      const responseTime = Date.now() - startTime;
      
      if (!response.ok) {
        throw this.createAPIError(response, responseTime);
      }
      
      const data = await response.json();
      
      return {
        success: true,
        data,
        status: response.status,
        responseTime
      };
    } catch (error) {
      // Enhance error with context
      error.context = {
        endpoint,
        url,
        method: options.method || 'GET',
        timestamp: new Date().toISOString()
      };
      
      // Handle different error types
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error("Network error. Please check your connection.");
      }
      
      throw error;
    }
  }
  
  createAPIError(response, responseTime) {
    let message;
    
    switch(response.status) {
      case 400:
        message = "Bad request";
        break;
      case 401:
        message = "Unauthorized";
        break;
      case 403:
        message = "Forbidden";
        break;
      case 404:
        message = "Resource not found";
        break;
      case 429:
        message = "Too many requests";
        break;
      case 500:
        message = "Internal server error";
        break;
      case 503:
        message = "Service unavailable";
        break;
      default:
        message = \`HTTP error \${response.status}\`;
    }
    
    const error = new Error(message);
    error.name = "APIError";
    error.statusCode = response.status;
    error.responseTime = responseTime;
    
    return error;
  }
  
  async getUsers() {
    return this.request('/users');
  }
  
  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
}

// 2. Database transaction with error handling
console.log("\\n2. Database Transaction Handling:");
class Database {
  constructor() {
    this.connection = null;
  }
  
  async transaction(callback) {
    await this.connect();
    
    try {
      await this.beginTransaction();
      const result = await callback();
      await this.commit();
      return result;
    } catch (error) {
      await this.rollback();
      throw this.wrapDatabaseError(error);
    } finally {
      await this.disconnect();
    }
  }
  
  async connect() {
    // Simulate connection
    this.connection = { connected: true };
    console.log("Connected to database");
  }
  
  async disconnect() {
    if (this.connection) {
      this.connection.connected = false;
      console.log("Disconnected from database");
    }
  }
  
  async beginTransaction() {
    console.log("Beginning transaction");
  }
  
  async commit() {
    console.log("Committing transaction");
  }
  
  async rollback() {
    console.log("Rolling back transaction");
  }
  
  wrapDatabaseError(error) {
    const dbError = new Error(\`Database error: \${error.message}\`);
    dbError.name = "DatabaseError";
    dbError.originalError = error;
    dbError.code = error.code;
    return dbError;
  }
}

// Usage
const db = new Database();

db.transaction(async () => {
  console.log("Performing database operations...");
  throw new Error("Something went wrong in transaction");
}).catch(error => {
  console.log("Transaction failed:", error.message);
});

// 3. File processing with cleanup
console.log("\\n3. File Processing with Cleanup:");
class FileProcessor {
  constructor() {
    this.openFiles = new Set();
  }
  
  async processFile(filePath) {
    let fileHandle = null;
    
    try {
      // Open file
      fileHandle = await this.openFile(filePath);
      this.openFiles.add(fileHandle);
      
      // Process file
      const content = await this.readFile(fileHandle);
      const processed = await this.processContent(content);
      
      return processed;
    } catch (error) {
      console.error("File processing error:", error.message);
      throw error;
    } finally {
      // Always clean up
      if (fileHandle) {
        await this.closeFile(fileHandle);
        this.openFiles.delete(fileHandle);
      }
    }
  }
  
  async openFile(path) {
    // Simulate file opening
    console.log(\`Opening file: \${path}\`);
    return { path, isOpen: true };
  }
  
  async readFile(handle) {
    // Simulate reading
    if (handle.path.includes("error")) {
      throw new Error("Read error");
    }
    return "File content";
  }
  
  async processContent(content) {
    // Simulate processing
    return content.toUpperCase();
  }
  
  async closeFile(handle) {
    if (handle.isOpen) {
      console.log(\`Closing file: \${handle.path}\`);
      handle.isOpen = false;
    }
  }
  
  async cleanup() {
    // Close all open files
    for (const file of this.openFiles) {
      await this.closeFile(file);
    }
    this.openFiles.clear();
  }
}

// Test file processor
const processor = new FileProcessor();

processor.processFile("document.txt")
  .then(result => console.log("Processed:", result))
  .catch(error => console.log("Failed:", error.message))
  .finally(() => processor.cleanup());

processor.processFile("error.txt")
  .then(result => console.log("Processed:", result))
  .catch(error => console.log("Failed:", error.message))
  .finally(() => processor.cleanup());`,
      explanation: 'These comprehensive examples demonstrate various error handling techniques, patterns, and best practices in JavaScript.',
      preview: '<div class="preview-demo"><h3 style="color: #f59e0b">Error Handling Preview</h3><p>Experiment with different error scenarios and handling techniques!</p><div id="errorOutput" class="result-box">Error handling results will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Error', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error' },
    { title: 'MDN: try...catch', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch' },
    { title: 'JavaScript.info: Error Handling', url: 'https://javascript.info/error-handling' },
    { title: 'Custom Error Types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types' }
  ],
  prerequisites: ['js-dates'],
  nextTopics: ['js-es6-features']
} , {
  id: 'js-storage',
  title: 'Browser Storage',
  icon: <Database />,
  difficulty: 'intermediate',
  estimatedTime: 15,
  category: 'javascript',
  order: 15,
  sections: [
    'Local Storage',
    'Session Storage',
    'Cookies',
    'IndexedDB',
    'Cache API',
    'Storage Best Practices'
  ],
  content: `
    <div class="concept-box js-concept">
      <div class="concept-header">
        <div class="concept-icon">💾</div>
        <h1>Browser Storage</h1>
        <p class="concept-tagline">Master Client-Side Data Persistence Techniques</p>
      </div>
      
      <div class="storage-3d-visual">
        <div class="storage-types">
          <div class="storage-card local">
            <div class="storage-icon">🏠</div>
            <h3>Local Storage</h3>
            <p>Persistent, 5-10MB</p>
          </div>
          <div class="storage-card session">
            <div class="storage-icon">🏢</div>
            <h3>Session Storage</h3>
            <p>Tab-specific, 5-10MB</p>
          </div>
          <div class="storage-card cookies">
            <div class="storage-icon">🍪</div>
            <h3>Cookies</h3>
            <p>4KB, Server/client</p>
          </div>
          <div class="storage-card indexed">
            <div class="storage-icon">🗃️</div>
            <h3>IndexedDB</h3>
            <p>Large, Structured</p>
          </div>
        </div>
      </div>
      
      <h2>🏠 Local Storage</h2>
      <p>Persistent storage that survives browser restarts and has ~5-10MB capacity.</p>
      
      <div class="example-section">
        <h3>Local Storage Examples:</h3>
        <pre><code>console.log("=== Local Storage ===");

// 1. Basic operations
console.log("\\n1. Basic Operations:");

// Set item
localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');
localStorage.setItem('preferences', JSON.stringify({ language: 'en', notifications: true }));

// Get item
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');
console.log("Username:", username);
console.log("Theme:", theme);

// Check if item exists
console.log("Has 'username'?", localStorage.getItem('username') !== null);

// Remove item
localStorage.removeItem('theme');
console.log("Theme after removal:", localStorage.getItem('theme'));

// Clear all
// localStorage.clear();

// 2. Working with objects
console.log("\\n2. Working with Objects:");

const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  settings: {
    darkMode: true,
    language: 'en'
  }
};

// Store object (must be stringified)
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log("Stored user:", storedUser);

// 3. Storage events
console.log("\\n3. Storage Events:");

// Listen for storage changes (from other tabs/windows)
window.addEventListener('storage', (event) => {
  console.log("Storage changed in another tab:");
  console.log("Key:", event.key);
  console.log("Old value:", event.oldValue);
  console.log("New value:", event.newValue);
  console.log("URL:", event.url);
  console.log("Storage area:", event.storageArea);
});

// 4. Error handling
console.log("\\n4. Error Handling:");

try {
  // Try to store large data
  const largeData = 'x'.repeat(10 * 1024 * 1024); // 10MB string
  localStorage.setItem('large', largeData);
} catch (error) {
  console.error("Storage error:", error.name, error.message);
  if (error.name === 'QuotaExceededError') {
    console.error("Storage quota exceeded!");
  }
}

// 5. Utility functions
console.log("\\n5. Utility Functions:");

const StorageHelper = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  },
  
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Storage get error:', error);
      return defaultValue;
    }
  },
  
  remove(key) {
    localStorage.removeItem(key);
  },
  
  clear() {
    localStorage.clear();
  },
  
  has(key) {
    return localStorage.getItem(key) !== null;
  },
  
  // Get all keys
  keys() {
    return Object.keys(localStorage);
  },
  
  // Get all items
  getAll() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        items[key] = JSON.parse(localStorage.getItem(key));
      } catch {
        items[key] = localStorage.getItem(key);
      }
    }
    return items;
  },
  
  // Get storage size (approximate)
  getSize() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      total += key.length + value.length;
    }
    return total;
  }
};

// Usage
StorageHelper.set('test', { message: 'Hello' });
console.log("Test value:", StorageHelper.get('test'));
console.log("All keys:", StorageHelper.keys());
console.log("Storage size:", StorageHelper.getSize(), 'bytes');</code></pre>
      </div>
      
      <h2>🏢 Session Storage</h2>
      <p>Temporary storage that lasts only for the browser session (tab/window).</p>
      
      <div class="example-section">
        <h3>Session Storage Examples:</h3>
        <pre><code>console.log("\\n\\n=== Session Storage ===");

// 1. Basic session storage operations
console.log("\\n1. Basic Operations:");

// Set session data
sessionStorage.setItem('sessionId', 'abc123');
sessionStorage.setItem('cartItems', JSON.stringify(['item1', 'item2']));

// Get session data
console.log("Session ID:", sessionStorage.getItem('sessionId'));
console.log("Cart items:", JSON.parse(sessionStorage.getItem('cartItems')));

// 2. Session-specific use cases
console.log("\\n2. Session-Specific Use Cases:");

// Shopping cart (cleared when tab closes)
class SessionCart {
  constructor() {
    this.loadCart();
  }
  
  loadCart() {
    const stored = sessionStorage.getItem('cart');
    this.items = stored ? JSON.parse(stored) : [];
  }
  
  saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
  
  addItem(item) {
    this.items.push(item);
    this.saveCart();
  }
  
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.saveCart();
  }
  
  clear() {
    this.items = [];
    sessionStorage.removeItem('cart');
  }
  
  getItems() {
    return this.items;
  }
}

// 3. Form data persistence
console.log("\\n3. Form Data Persistence:");

function setupFormPersistence(formId) {
  const form = document.getElementById(formId);
  const fields = form.querySelectorAll('input, textarea, select');
  
  // Load saved data
  fields.forEach(field => {
    const saved = sessionStorage.getItem(\`form_\${formId}_\${field.name}\`);
    if (saved && field.type !== 'password') {
      field.value = saved;
    }
  });
  
  // Save on input
  fields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.type !== 'password') {
        sessionStorage.setItem(\`form_\${formId}_\${field.name}\`, field.value);
      }
    });
  });
  
  // Clear on submit
  form.addEventListener('submit', () => {
    fields.forEach(field => {
      sessionStorage.removeItem(\`form_\${formId}_\${field.name}\`);
    });
  });
}

// 4. Multi-step wizard state
console.log("\\n4. Multi-Step Wizard:");

class MultiStepWizard {
  constructor(steps) {
    this.steps = steps;
    this.currentStep = parseInt(sessionStorage.getItem('wizardStep') || '0');
    this.data = JSON.parse(sessionStorage.getItem('wizardData') || '{}');
  }
  
  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.saveState();
    }
  }
  
  previous() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.saveState();
    }
  }
  
  saveData(key, value) {
    this.data[key] = value;
    this.saveState();
  }
  
  saveState() {
    sessionStorage.setItem('wizardStep', this.currentStep.toString());
    sessionStorage.setItem('wizardData', JSON.stringify(this.data));
  }
  
  getCurrentStep() {
    return this.steps[this.currentStep];
  }
  
  clear() {
    sessionStorage.removeItem('wizardStep');
    sessionStorage.removeItem('wizardData');
  }
}</code></pre>
      </div>
      
      <h2>🍪 Cookies</h2>
      <p>Small pieces of data (up to 4KB) sent between client and server with each request.</p>
      
      <div class="example-section">
        <h3>Cookie Examples:</h3>
<pre><code>console.log("\\n\\n=== Cookies ===");

// 1. Basic cookie operations
console.log("\\n1. Cookie Operations:");

// Set cookie
document.cookie = "username=JohnDoe; path=/; max-age=3600";
document.cookie = "theme=dark; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";
document.cookie = "language=en; path=/; Secure; SameSite=Strict";

// Get all cookies
console.log("All cookies:", document.cookie);

// Parse cookies into object
function getCookies() {
  const cookies = {};
  document.cookie.split(';').forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    cookies[name] = decodeURIComponent(value);
  });
  return cookies;
}

console.log("Parsed cookies:", getCookies());

// 2. Cookie utility class
console.log("\\n2. Cookie Utility:");

class CookieManager {
  static set(name, value, options = {}) {
    const defaults = {
      path: '/',
      secure: true,
      sameSite: 'Strict'
    };
    
    const settings = { ...defaults, ...options };
    let cookie = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`;
    
    // Add options
    if (settings.days) {
      const date = new Date();
      date.setTime(date.getTime() + (settings.days * 24 * 60 * 60 * 1000));
      cookie += \`; expires=\${date.toUTCString()}\`;
    } else if (settings.expires) {
      cookie += \`; expires=\${settings.expires}\`;
    }
    
    if (settings.path) cookie += \`; path=\${settings.path}\`;
    if (settings.domain) cookie += \`; domain=\${settings.domain}\`;
    if (settings.secure) cookie += '; Secure';
    if (settings.sameSite) cookie += \`; SameSite=\${settings.sameSite}\`;
    if (settings.httpOnly) cookie += '; HttpOnly';
    
    document.cookie = cookie;
  }
  
  static get(name) {
    const cookies = this.getAll();
    return cookies[name];
  }
  
  static getAll() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
      const [key, value] = cookie.trim().split('=');
      if (key && value) {
        cookies[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
    return cookies;
  }
  
  static remove(name, options = {}) {
    this.set(name, '', { ...options, expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
  }
  
  static has(name) {
    return this.get(name) !== undefined;
  }
}

// Usage examples
CookieManager.set('user_id', '123', { days: 7, secure: true });
CookieManager.set('preferences', JSON.stringify({ theme: 'dark' }), { days: 30 });

console.log("User ID cookie:", CookieManager.get('user_id'));
console.log("All cookies:", CookieManager.getAll());

// 3. Authentication cookies
console.log("\\n3. Authentication Cookies:");

class AuthCookie {
  static setAuthToken(token, rememberMe = false) {
    const options = {
      secure: true,
      sameSite: 'Strict',
      httpOnly: false // Can't set httpOnly from JavaScript
    };
    
    if (rememberMe) {
      options.days = 30; // Remember for 30 days
    } else {
      // Session cookie (expires when browser closes)
      options.expires = 'Session';
    }
    
    CookieManager.set('auth_token', token, options);
  }
  
  static getAuthToken() {
    return CookieManager.get('auth_token');
  }
  
  static clearAuthToken() {
    CookieManager.remove('auth_token');
  }
  
  static isAuthenticated() {
    return !!this.getAuthToken();
  }
}

// 4. Cookie consent
console.log("\\n4. Cookie Consent:");

class CookieConsent {
  constructor() {
    this.consentGiven = CookieManager.get('cookie_consent') === 'true';
    if (!this.consentGiven) {
      this.showBanner();
    }
  }
  
  showBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = \`
      <div class="cookie-content">
        <p>We use cookies to enhance your experience. 
           By continuing to visit this site you agree to our use of cookies.</p>
        <div class="cookie-buttons">
          <button id="accept-cookies">Accept All</button>
          <button id="reject-cookies">Reject Non-Essential</button>
          <button id="customize-cookies">Customize</button>
        </div>
      </div>
    \`;
    
    document.body.appendChild(banner);
    
    // Event listeners
    document.getElementById('accept-cookies').addEventListener('click', () => {
      this.acceptAll();
      banner.remove();
    });
    
    document.getElementById('reject-cookies').addEventListener('click', () => {
      this.rejectNonEssential();
      banner.remove();
    });
  }
  
  acceptAll() {
    CookieManager.set('cookie_consent', 'true', { days: 365 });
    CookieManager.set('analytics', 'true', { days: 365 });
    CookieManager.set('marketing', 'true', { days: 365 });
  }
  
  rejectNonEssential() {
    CookieManager.set('cookie_consent', 'true', { days: 365 });
    CookieManager.set('analytics', 'false', { days: 365 });
    CookieManager.set('marketing', 'false', { days: 365 });
  }
}</code></pre>
      </div>
      
      <h2>🗃️ IndexedDB</h2>
      <p>Low-level API for storing significant amounts of structured data, including files/blobs.</p>
      
      <div class="example-section">
        <h3>IndexedDB Examples:</h3>
<pre><code>console.log("\\n\\n=== IndexedDB ===");

// 1. Basic IndexedDB setup
console.log("\\n1. IndexedDB Setup:");

class IndexedDBManager {
  constructor(dbName, version) {
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }
  
  async open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
      
      request.onsuccess = (event) => {
        this.db = event.target.result;
        console.log('Database opened successfully');
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        this.createStores(db);
      };
    });
  }
  
  createStores(db) {
    // Create object stores
    if (!db.objectStoreNames.contains('users')) {
      const usersStore = db.createObjectStore('users', { keyPath: 'id' });
      usersStore.createIndex('email', 'email', { unique: true });
      usersStore.createIndex('name', 'name', { unique: false });
    }
    
    if (!db.objectStoreNames.contains('products')) {
      const productsStore = db.createObjectStore('products', { keyPath: 'id' });
      productsStore.createIndex('category', 'category', { unique: false });
      productsStore.createIndex('price', 'price', { unique: false });
    }
    
    if (!db.objectStoreNames.contains('files')) {
      db.createObjectStore('files', { keyPath: 'id' });
    }
  }
  
  async add(storeName, item) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(item);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async get(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getAll(storeName) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async update(storeName, item) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(item);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async query(storeName, indexName, keyRange) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll(keyRange);
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async clear(storeName) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();
      
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
  
  async deleteDatabase() {
    await this.close();
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(this.dbName);
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
}

// Usage example
async function testIndexedDB() {
  const dbManager = new IndexedDBManager('MyDatabase', 1);
  
  try {
    // Open database
    await dbManager.open();
    
    // Add some users
    await dbManager.add('users', {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });
    
    await dbManager.add('users', {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 25
    });
    
    // Get all users
    const users = await dbManager.getAll('users');
    console.log('All users:', users);
    
    // Query by index
    const john = await dbManager.get('users', 1);
    console.log('User with ID 1:', john);
    
    // Update user
    john.age = 31;
    await dbManager.update('users', john);
    
    // Query by email index
    const userByEmail = await dbManager.query('users', 'email', 'john@example.com');
    console.log('User by email:', userByEmail);
    
    // Add products
    await dbManager.add('products', {
      id: 1,
      name: 'Laptop',
      category: 'electronics',
      price: 999
    });
    
    await dbManager.add('products', {
      id: 2,
      name: 'Mouse',
      category: 'electronics',
      price: 25
    });
    
    // Get electronics products
    const electronics = await dbManager.query('products', 'category', 'electronics');
    console.log('Electronics products:', electronics);
    
    // Delete a user
    await dbManager.delete('users', 2);
    
    const remainingUsers = await dbManager.getAll('users');
    console.log('Remaining users:', remainingUsers);
    
  } catch (error) {
    console.error('IndexedDB error:', error);
  } finally {
    await dbManager.close();
  }
}

// Run the test
testIndexedDB();

// 2. File storage in IndexedDB
console.log("\\n2. File Storage:");

class FileStorage {
  constructor() {
    this.dbName = 'FileStorageDB';
    this.version = 1;
  }
  
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('files')) {
          db.createObjectStore('files', { keyPath: 'id' });
        }
      };
      
      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };
      
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }
  
  async saveFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        const fileData = {
          id: Date.now(),
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          data: event.target.result,
          uploaded: new Date().toISOString()
        };
        
        const transaction = this.db.transaction(['files'], 'readwrite');
        const store = transaction.objectStore('files');
        const request = store.add(fileData);
        
        request.onsuccess = () => resolve(fileData.id);
        request.onerror = (event) => reject(event.target.error);
      };
      
      reader.onerror = (event) => reject(event.target.error);
      reader.readAsArrayBuffer(file);
    });
  }
  
  async getFile(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.get(id);
      
      request.onsuccess = (event) => {
        const fileData = event.target.result;
        if (fileData) {
          const blob = new Blob([fileData.data], { type: fileData.type });
          const file = new File([blob], fileData.name, {
            type: fileData.type,
            lastModified: fileData.lastModified
          });
          resolve({ file, metadata: fileData });
        } else {
          resolve(null);
        }
      };
      
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getAllFiles() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.getAll();
      
      request.onsuccess = (event) => {
        const files = event.target.result.map(fileData => ({
          id: fileData.id,
          name: fileData.name,
          type: fileData.type,
          size: fileData.size,
          uploaded: fileData.uploaded
        }));
        resolve(files);
      };
      
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async deleteFile(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const request = store.delete(id);
      
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getStorageUsage() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.getAll();
      
      request.onsuccess = (event) => {
        const totalSize = event.target.result.reduce((sum, file) => sum + file.size, 0);
        resolve({
          fileCount: event.target.result.length,
          totalSize: totalSize,
          totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2)
        });
      };
      
      request.onerror = (event) => reject(event.target.error);
    });
  }
}</code></pre>
      </div>
      
      <h2>⚡ Cache API</h2>
      <p>Storage for Request/Response object pairs, primarily used for service workers.</p>
      
      <div class="example-section">
        <h3>Cache API Examples:</h3>
<pre><code>console.log("\\n\\n=== Cache API ===");

// 1. Basic Cache API operations
console.log("\\n1. Cache API Basics:");

class CacheManager {
  constructor(cacheName = 'my-cache') {
    this.cacheName = cacheName;
  }
  
  async open() {
    return await caches.open(this.cacheName);
  }
  
  async add(request) {
    const cache = await this.open();
    return await cache.add(request);
  }
  
  async addAll(urls) {
    const cache = await this.open();
    return await cache.addAll(urls);
  }
  
  async match(request) {
    const cache = await this.open();
    return await cache.match(request);
  }
  
  async matchAll(request, options) {
    const cache = await this.open();
    return await cache.matchAll(request, options);
  }
  
  async put(request, response) {
    const cache = await this.open();
    return await cache.put(request, response);
  }
  
  async delete(request) {
    const cache = await this.open();
    return await cache.delete(request);
  }
  
  async keys() {
    const cache = await this.open();
    return await cache.keys();
  }
  
  async clear() {
    return await caches.delete(this.cacheName);
  }
  
  // Cache with network fallback
  async cacheFirst(request) {
    const cache = await this.open();
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('Serving from cache:', request.url);
      return cachedResponse;
    }
    
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      throw new Error('Network request failed');
    }
  }
  
  // Network first with cache fallback
  async networkFirst(request) {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await this.open();
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      const cache = await this.open();
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        console.log('Falling back to cache:', request.url);
        return cachedResponse;
      }
      throw error;
    }
  }
  
  // Stale-while-revalidate
  async staleWhileRevalidate(request) {
    const cache = await this.open();
    const cachedResponse = await cache.match(request);
    
    // Return cached response immediately
    const fetchPromise = fetch(request).then(async (networkResponse) => {
      if (networkResponse.ok) {
        await cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    });
    
    return cachedResponse || fetchPromise;
  }
}

// 2. Service Worker cache example
console.log("\\n2. Service Worker Cache:");

// Service worker registration
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
}

// Example service worker content (/sw.js):
/*
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== 'v1') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
*/

// 3. Cache strategies
console.log("\\n3. Cache Strategies:");

const cacheStrategies = {
  // Cache only (offline-first)
  cacheOnly: async (request) => {
    const cache = await caches.open('cache-only');
    const cached = await cache.match(request);
    if (!cached) {
      throw new Error('Not in cache');
    }
    return cached;
  },
  
  // Network only
  networkOnly: async (request) => {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    return response;
  },
  
  // Cache then network
  cacheThenNetwork: async (request) => {
    const cache = await caches.open('cache-then-network');
    const cached = await cache.match(request);
    
    // Return cached immediately
    const networkPromise = fetch(request).then(async (networkResponse) => {
      if (networkResponse.ok) {
        await cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    });
    
    return cached || networkPromise;
  }
};

// 4. Cache invalidation
console.log("\\n4. Cache Invalidation:");

class CacheInvalidator {
  constructor() {
    this.cacheVersion = 'v1';
    this.cacheName = \`app-cache-\${this.cacheVersion}\`;
  }
  
  async invalidateCache() {
    // Delete old caches
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(name => 
      name.startsWith('app-cache-') && name !== this.cacheName
    );
    
    await Promise.all(oldCaches.map(name => caches.delete(name)));
    
    // Update version
    this.cacheVersion = \`v\${Date.now()}\`;
    this.cacheName = \`app-cache-\${this.cacheVersion}\`;
    
    return this.cacheName;
  }
  
  async precacheAssets(assets) {
    const cache = await caches.open(this.cacheName);
    return await cache.addAll(assets);
  }
  
  async getCacheStatus() {
    const cacheNames = await caches.keys();
    const cacheSizes = {};
    
    for (const name of cacheNames) {
      const cache = await caches.open(name);
      const requests = await cache.keys();
      cacheSizes[name] = {
        count: requests.length,
        urls: requests.map(req => req.url)
      };
    }
    
    return cacheSizes;
  }
}

// 5. Cache-aware image loader
console.log("\\n5. Cache-Aware Image Loader:");

class CachedImageLoader {
  constructor() {
    this.cacheName = 'image-cache';
  }
  
  async loadImage(url) {
    // Try cache first
    const cache = await caches.open(this.cacheName);
    const cached = await cache.match(url);
    
    if (cached) {
      const blob = await cached.blob();
      return URL.createObjectURL(blob);
    }
    
    // If not in cache, fetch and cache
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response.clone());
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      }
    } catch (error) {
      console.error('Failed to load image:', error);
      return null;
    }
  }
  
  async preloadImages(urls) {
    const cache = await caches.open(this.cacheName);
    const promises = urls.map(url => 
      fetch(url).then(response => cache.put(url, response))
    );
    await Promise.all(promises);
  }
  
  async clearImageCache() {
    return await caches.delete(this.cacheName);
  }
}</code></pre>
      </div>
      
      <h2>🎮 Practice Problems</h2>
      <div class="practice-section">
        <div class="problem">
          <h3>Problem 1: Shopping Cart with Offline Support</h3>
          <p>Create a shopping cart that works offline using multiple storage methods.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class OfflineCart {
  constructor() {
    this.cartItems = [];
    this.cartKey = 'shopping_cart';
    this.syncQueueKey = 'sync_queue';
    this.isOnline = navigator.onLine;
    this.init();
  }
  
  async init() {
    // Load cart from localStorage
    this.loadFromStorage();
    
    // Setup online/offline detection
    window.addEventListener('online', () => this.handleOnline());
    window.addEventListener('offline', () => this.handleOffline());
    
    // Try to sync if online
    if (this.isOnline) {
      await this.syncWithServer();
    }
  }
  
  loadFromStorage() {
    const saved = localStorage.getItem(this.cartKey);
    this.cartItems = saved ? JSON.parse(saved) : [];
  }
  
  saveToStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
  }
  
  addItem(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      this.cartItems.push({
        ...product,
        quantity: product.quantity || 1,
        addedAt: new Date().toISOString(),
        synced: false
      });
    }
    
    this.saveToStorage();
    this.addToSyncQueue('add', product);
    
    return this.cartItems;
  }
  
  removeItem(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.saveToStorage();
    this.addToSyncQueue('remove', { id: productId });
    
    return this.cartItems;
  }
  
  updateQuantity(productId, quantity) {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
      this.addToSyncQueue('update', { id: productId, quantity });
    }
    
    return this.cartItems;
  }
  
  addToSyncQueue(action, data) {
    const queue = JSON.parse(localStorage.getItem(this.syncQueueKey) || '[]');
    queue.push({
      action,
      data,
      timestamp: new Date().toISOString(),
      retryCount: 0
    });
    
    localStorage.setItem(this.syncQueueKey, JSON.stringify(queue));
    
    // Try to sync immediately if online
    if (this.isOnline) {
      this.syncWithServer();
    }
  }
  
  async syncWithServer() {
    if (!this.isOnline) return;
    
    const queue = JSON.parse(localStorage.getItem(this.syncQueueKey) || '[]');
    const successful = [];
    
    for (const item of queue) {
      try {
        // Simulate API call
        await this.performSyncAction(item);
        successful.push(item);
        
        // Mark cart items as synced
        this.markAsSynced(item);
      } catch (error) {
        console.error('Sync failed:', error);
        item.retryCount++;
        
        // If retry count is too high, remove from queue
        if (item.retryCount >= 3) {
          console.warn('Removing failed sync item:', item);
          successful.push(item);
        }
      }
    }
    
    // Remove successful items from queue
    const newQueue = queue.filter(q => !successful.some(s => 
      s.timestamp === q.timestamp && s.action === q.action
    ));
    
    localStorage.setItem(this.syncQueueKey, JSON.stringify(newQueue));
    this.saveToStorage();
  }
  
  async performSyncAction(syncItem) {
    // Simulate API call with delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly fail to simulate network issues
        if (Math.random() < 0.2) {
          reject(new Error('Network error'));
        } else {
          resolve({ success: true });
        }
      }, 100);
    });
  }
  
  markAsSynced(syncItem) {
    switch (syncItem.action) {
      case 'add':
      case 'update':
        const item = this.cartItems.find(i => i.id === syncItem.data.id);
        if (item) item.synced = true;
        break;
    }
  }
  
  handleOnline() {
    this.isOnline = true;
    console.log('Device is online, syncing...');
    this.syncWithServer();
  }
  
  handleOffline() {
    this.isOnline = false;
    console.log('Device is offline, storing locally');
  }
  
  getCartSummary() {
    const totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.cartItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    const unsyncedCount = this.cartItems.filter(item => !item.synced).length;
    
    return {
      items: [...this.cartItems],
      totalItems,
      totalPrice: totalPrice.toFixed(2),
      unsyncedCount,
      isOnline: this.isOnline,
      syncQueueSize: JSON.parse(localStorage.getItem(this.syncQueueKey) || '[]').length
    };
  }
  
  clearCart() {
    this.cartItems = [];
    localStorage.removeItem(this.cartKey);
    localStorage.removeItem(this.syncQueueKey);
  }
}

// Usage example
const cart = new OfflineCart();

// Add items (will sync when online)
cart.addItem({
  id: 1,
  name: 'Laptop',
  price: 999,
  quantity: 1
});

cart.addItem({
  id: 2,
  name: 'Mouse',
  price: 25,
  quantity: 2
});

console.log('Cart summary:', cart.getCartSummary());</code></pre>
          </div>
        </div>
        
        <div class="problem">
          <h3>Problem 2: Settings Manager with Multiple Storage Backends</h3>
          <p>Create a settings manager that can use different storage backends.</p>
          <button class="show-solution">Show Solution</button>
          <div class="solution">
            <pre><code>class SettingsManager {
  constructor(storageType = 'auto') {
    this.storageType = storageType;
    this.settings = {};
    this.migrations = [];
    this.setupStorage();
    this.setupMigrations();
  }
  
  setupStorage() {
    // Test available storage options
    this.storageOptions = {
      localStorage: this.testLocalStorage(),
      indexedDB: this.testIndexedDB(),
      cookies: this.testCookies()
    };
    
    // Choose storage based on type or auto-detect
    if (this.storageType === 'auto') {
      this.storage = this.autoSelectStorage();
    } else {
      this.storage = this.createStorageAdapter(this.storageType);
    }
    
    console.log('Using storage:', this.storage.type);
  }
  
  testLocalStorage() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return { available: true, capacity: 5 * 1024 * 1024 }; // 5MB
    } catch {
      return { available: false };
    }
  }
  
  testIndexedDB() {
    return new Promise((resolve) => {
      if (!('indexedDB' in window)) {
        resolve({ available: false });
        return;
      }
      
      const request = indexedDB.open('test', 1);
      request.onerror = () => resolve({ available: false });
      request.onsuccess = () => {
        indexedDB.deleteDatabase('test');
        resolve({ available: true, capacity: 50 * 1024 * 1024 }); // 50MB
      };
    });
  }
  
  testCookies() {
    return { available: true, capacity: 4096 }; // 4KB
  }
  
  autoSelectStorage() {
    // Priority order
    if (this.storageOptions.indexedDB.available) {
      return this.createStorageAdapter('indexedDB');
    } else if (this.storageOptions.localStorage.available) {
      return this.createStorageAdapter('localStorage');
    } else {
      return this.createStorageAdapter('cookies');
    }
  }
  
  createStorageAdapter(type) {
    switch (type) {
      case 'localStorage':
        return new LocalStorageAdapter();
      case 'indexedDB':
        return new IndexedDBAdapter();
      case 'cookies':
        return new CookieAdapter();
      default:
        throw new Error(\`Unsupported storage type: \${type}\`);
    }
  }
  
  setupMigrations() {
    // Define migrations for schema changes
    this.migrations = [
      {
        version: 1,
        migrate: (settings) => {
          // Migrate from old format
          if (settings.theme) {
            settings.ui = { theme: settings.theme };
            delete settings.theme;
          }
          return settings;
        }
      },
      {
        version: 2,
        migrate: (settings) => {
          // Add new default values
          if (!settings.notifications) {
            settings.notifications = { email: true, push: false };
          }
          return settings;
        }
      }
    ];
  }
  
  async load() {
    try {
      // Load from storage
      const stored = await this.storage.get('settings');
      
      if (stored) {
        // Apply migrations
        this.settings = this.applyMigrations(stored);
      } else {
        // Load defaults
        this.settings = this.getDefaults();
      }
      
      // Merge with defaults for any missing properties
      this.settings = this.mergeWithDefaults(this.settings);
      
      return this.settings;
    } catch (error) {
      console.error('Failed to load settings:', error);
      return this.getDefaults();
    }
  }
  
  async save(settings = null) {
    if (settings) {
      this.settings = settings;
    }
    
    try {
      // Validate settings
      this.validateSettings(this.settings);
      
      // Save to storage
      await this.storage.set('settings', this.settings);
      
      // Also save version for migrations
      await this.storage.set('settings_version', this.getCurrentVersion());
      
      return true;
    } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
    }
  }
  
  async set(key, value) {
    // Support dot notation for nested keys
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = this.settings;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
    } else {
      this.settings[key] = value;
    }
    
    return await this.save();
  }
  
  async get(key = null, defaultValue = null) {
    await this.load();
    
    if (key === null) {
      return this.settings;
    }
    
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = this.settings;
      
      for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          return defaultValue;
        }
      }
      
      return current;
    }
    
    return this.settings[key] !== undefined ? this.settings[key] : defaultValue;
  }
  
  async delete(key) {
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = this.settings;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
          return false;
        }
        current = current[keys[i]];
      }
      
      delete current[keys[keys.length - 1]];
    } else {
      delete this.settings[key];
    }
    
    return await this.save();
  }
  
  async reset() {
    this.settings = this.getDefaults();
    return await this.save();
  }
  
  async clear() {
    this.settings = {};
    await this.storage.remove('settings');
    await this.storage.remove('settings_version');
  }
  
  getDefaults() {
    return {
      version: this.getCurrentVersion(),
      ui: {
        theme: 'light',
        language: 'en',
        fontSize: 'medium',
        density: 'comfortable'
      },
      notifications: {
        email: true,
        push: false,
        sound: true,
        desktop: false
      },
      privacy: {
        analytics: false,
        telemetry: false,
        cookies: 'essential'
      },
      performance: {
        cache: true,
        prefetch: false,
        compression: true
      }
    };
  }
  
  mergeWithDefaults(settings) {
    const defaults = this.getDefaults();
    return this.deepMerge(defaults, settings);
  }
  
  deepMerge(target, source) {
    const output = { ...target };
    
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            output[key] = source[key];
          } else {
            output[key] = this.deepMerge(target[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
    
    return output;
  }
  
  isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  
  applyMigrations(settings) {
    const currentVersion = this.getCurrentVersion();
    const storedVersion = settings.version || 0;
    
    if (storedVersion >= currentVersion) {
      return settings;
    }
    
    let migrated = { ...settings };
    
    // Apply each migration in order
    this.migrations
      .filter(m => m.version > storedVersion && m.version <= currentVersion)
      .sort((a, b) => a.version - b.version)
      .forEach(migration => {
        migrated = migration.migrate(migrated);
        migrated.version = migration.version;
      });
    
    migrated.version = currentVersion;
    return migrated;
  }
  
  getCurrentVersion() {
    return this.migrations.length;
  }
  
  validateSettings(settings) {
    // Basic validation
    if (!settings || typeof settings !== 'object') {
      throw new Error('Settings must be an object');
    }
    
    // Validate theme
    const validThemes = ['light', 'dark', 'auto'];
    if (settings.ui && settings.ui.theme && !validThemes.includes(settings.ui.theme)) {
      throw new Error(\`Invalid theme: \${settings.ui.theme}\`);
    }
    
    // Validate language
    const validLanguages = ['en', 'es', 'fr', 'de', 'ja'];
    if (settings.ui && settings.ui.language && !validLanguages.includes(settings.ui.language)) {
      throw new Error(\`Invalid language: \${settings.ui.language}\`);
    }
    
    return true;
  }
  
  async export() {
    await this.load();
    const data = {
      version: this.getCurrentVersion(),
      exported: new Date().toISOString(),
      settings: this.settings
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    return URL.createObjectURL(blob);
  }
  
  async import(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      
      // Basic validation
      if (!data.settings || typeof data.settings !== 'object') {
        throw new Error('Invalid import data');
      }
      
      // Apply migrations if needed
      const migrated = this.applyMigrations(data.settings);
      
      // Save imported settings
      this.settings = migrated;
      await this.save();
      
      return true;
    } catch (error) {
      console.error('Import failed:', error);
      return false;
    }
  }
  
  async getStorageInfo() {
    const info = {
      type: this.storage.type,
      available: this.storageOptions[this.storage.type].available,
      capacity: this.storageOptions[this.storage.type].capacity,
      used: await this.storage.getSize(),
      settingsCount: Object.keys(this.settings).length
    };
    
    info.percentUsed = (info.used / info.capacity * 100).toFixed(1);
    return info;
  }
}

// Storage Adapters
class LocalStorageAdapter {
  constructor() {
    this.type = 'localStorage';
  }
  
  async get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  
  async set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  async remove(key) {
    localStorage.removeItem(key);
  }
  
  async getSize() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      total += key.length + value.length;
    }
    return total;
  }
}

class IndexedDBAdapter {
  constructor() {
    this.type = 'indexedDB';
    this.dbName = 'settings_db';
    this.storeName = 'settings';
  }
  
  async getDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };
      
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async get(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(key);
      
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async set(key, value) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(value, key);
      
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async remove(key) {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(key);
      
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getSize() {
    // IndexedDB doesn't provide size info easily
    // This is a rough approximation
    const db = await this.getDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();
      
      request.onsuccess = (event) => {
        const data = JSON.stringify(event.target.result);
        resolve(data.length);
      };
      
      request.onerror = () => resolve(0);
    });
  }
}

class CookieAdapter {
  constructor() {
    this.type = 'cookies';
  }
  
  async get(key) {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=');
      try {
        acc[name] = JSON.parse(decodeURIComponent(value));
      } catch {
        acc[name] = decodeURIComponent(value);
      }
      return acc;
    }, {});
    
    return cookies[key] || null;
  }
  
  async set(key, value, options = {}) {
    const defaults = {
      path: '/',
      secure: true,
      sameSite: 'Strict',
      days: 365
    };
    
    const settings = { ...defaults, ...options };
    let cookie = \`\${encodeURIComponent(key)}=\${encodeURIComponent(JSON.stringify(value))}\`;
    
    if (settings.days) {
      const date = new Date();
      date.setTime(date.getTime() + (settings.days * 24 * 60 * 60 * 1000));
      cookie += \`; expires=\${date.toUTCString()}\`;
    }
    
    if (settings.path) cookie += \`; path=\${settings.path}\`;
    if (settings.secure) cookie += '; Secure';
    if (settings.sameSite) cookie += \`; SameSite=\${settings.sameSite}\`;
    
    document.cookie = cookie;
  }
  
  async remove(key) {
    document.cookie = \`\${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/\`;
  }
  
  async getSize() {
    return document.cookie.length;
  }
}</code></pre>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <h3>📊 Browser Storage Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Storage Type</th>
              <th>Capacity</th>
              <th>Persistence</th>
              <th>Use Case</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Local Storage</td>
              <td>5-10 MB</td>
              <td>Persistent</td>
              <td>User preferences, app state</td>
              <td>Synchronous</td>
            </tr>
            <tr>
              <td>Session Storage</td>
              <td>5-10 MB</td>
              <td>Session only</td>
              <td>Tab-specific data</td>
              <td>Synchronous</td>
            </tr>
            <tr>
              <td>Cookies</td>
              <td>4 KB</td>
              <td>Configurable</td>
              <td>Authentication, tracking</td>
              <td>Synchronous</td>
            </tr>
            <tr>
              <td>IndexedDB</td>
              <td>~50% of disk</td>
              <td>Persistent</td>
              <td>Large datasets, files</td>
              <td>Asynchronous</td>
            </tr>
            <tr>
              <td>Cache API</td>
              <td>Varies</td>
              <td>Until cleared</td>
              <td>Network resources</td>
              <td>Asynchronous</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="student-tip">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <h4>Storage Best Practices</h4>
          <ul>
            <li>Always use try-catch with storage operations</li>
            <li>Serialize objects with JSON.stringify()</li>
            <li>Implement storage quota management</li>
            <li>Use IndexedDB for large datasets</li>
            <li>Implement data migration strategies</li>
            <li>Clear sensitive data on logout</li>
            <li>Implement offline-first strategies</li>
            <li>Test storage availability before use</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  examples: [
    {
      title: 'Complete Storage Examples',
      code: `// ========== Local Storage Examples ==========
console.log("=== Local Storage Examples ===");

// 1. User preferences manager
class UserPreferences {
  constructor() {
    this.prefs = this.load();
  }
  
  load() {
    const saved = localStorage.getItem('user_preferences');
    return saved ? JSON.parse(saved) : this.getDefaults();
  }
  
  save() {
    localStorage.setItem('user_preferences', JSON.stringify(this.prefs));
  }
  
  getDefaults() {
    return {
      theme: 'light',
      language: 'en',
      fontSize: 'medium',
      notifications: true,
      autosave: true,
      offlineMode: false
    };
  }
  
  set(key, value) {
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = this.prefs;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    } else {
      this.prefs[key] = value;
    }
    this.save();
  }
  
  get(key) {
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = this.prefs;
      for (const k of keys) {
        if (current && typeof current === 'object') {
          current = current[k];
        } else {
          return null;
        }
      }
      return current;
    }
    return this.prefs[key];
  }
  
  reset() {
    this.prefs = this.getDefaults();
    this.save();
  }
  
  export() {
    const data = JSON.stringify(this.prefs, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    return URL.createObjectURL(blob);
  }
  
  import(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      this.prefs = { ...this.getDefaults(), ...data };
      this.save();
      return true;
    } catch {
      return false;
    }
  }
}

// 2. Shopping cart with localStorage
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.listeners = [];
  }
  
  loadCart() {
    const saved = localStorage.getItem('shopping_cart');
    return saved ? JSON.parse(saved) : [];
  }
  
  saveCart() {
    localStorage.setItem('shopping_cart', JSON.stringify(this.items));
    this.notifyListeners();
  }
  
  addItem(product, quantity = 1) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity,
        added: new Date().toISOString()
      });
    }
    this.saveCart();
  }
  
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }
  
  clear() {
    this.items = [];
    localStorage.removeItem('shopping_cart');
    this.notifyListeners();
  }
  
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
  
  addListener(callback) {
    this.listeners.push(callback);
  }
  
  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.items));
  }
}

// ========== IndexedDB Examples ==========
console.log("\\n\\n=== IndexedDB Examples ===");

// 1. Task manager with IndexedDB
class TaskManager {
  constructor() {
    this.dbName = 'TaskManagerDB';
    this.version = 1;
    this.db = null;
    this.init();
  }
  
  async init() {
    this.db = await this.openDatabase();
  }
  
  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        if (!db.objectStoreNames.contains('tasks')) {
          const store = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
          store.createIndex('status', 'status', { unique: false });
          store.createIndex('priority', 'priority', { unique: false });
          store.createIndex('dueDate', 'dueDate', { unique: false });
          store.createIndex('category', 'category', { unique: false });
        }
      };
      
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async addTask(task) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readwrite');
      const store = transaction.objectStore('tasks');
      const request = store.add({
        ...task,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending'
      });
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async updateTask(id, updates) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readwrite');
      const store = transaction.objectStore('tasks');
      const getRequest = store.get(id);
      
      getRequest.onsuccess = (event) => {
        const task = event.target.result;
        if (task) {
          const updatedTask = { 
            ...task, 
            ...updates, 
            updatedAt: new Date().toISOString() 
          };
          const putRequest = store.put(updatedTask);
          putRequest.onsuccess = () => resolve(updatedTask);
          putRequest.onerror = (event) => reject(event.target.error);
        } else {
          reject(new Error('Task not found'));
        }
      };
      
      getRequest.onerror = (event) => reject(event.target.error);
    });
  }
  
  async deleteTask(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readwrite');
      const store = transaction.objectStore('tasks');
      const request = store.delete(id);
      
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getTasks(filters = {}) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readonly');
      const store = transaction.objectStore('tasks');
      const request = store.getAll();
      
      request.onsuccess = (event) => {
        let tasks = event.target.result;
        
        // Apply filters
        if (filters.status) {
          tasks = tasks.filter(task => task.status === filters.status);
        }
        
        if (filters.category) {
          tasks = tasks.filter(task => task.category === filters.category);
        }
        
        if (filters.priority) {
          tasks = tasks.filter(task => task.priority === filters.priority);
        }
        
        // Sort by due date
        tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        
        resolve(tasks);
      };
      
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async getTaskCount() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readonly');
      const store = transaction.objectStore('tasks');
      const countRequest = store.count();
      
      countRequest.onsuccess = () => resolve(countRequest.result);
      countRequest.onerror = (event) => reject(event.target.error);
    });
  }
  
  async clearCompleted() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['tasks'], 'readwrite');
      const store = transaction.objectStore('tasks');
      const index = store.index('status');
      const range = IDBKeyRange.only('completed');
      const request = index.openCursor(range);
      
      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
      
      request.onerror = (event) => reject(event.target.error);
    });
  }
}

// ========== Cache API Examples ==========
console.log("\\n\\n=== Cache API Examples ===");

// 1. Progressive Web App caching
class PWACache {
  constructor() {
    this.cacheName = 'pwa-cache-v1';
    this.assetsToCache = [
      '/',
      '/index.html',
      '/styles.css',
      '/app.js',
      '/manifest.json',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
    ];
  }
  
  async install() {
    const cache = await caches.open(this.cacheName);
    console.log('Caching app shell');
    return await cache.addAll(this.assetsToCache);
  }
  
  async activate() {
    // Clean up old caches
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter(name => name !== this.cacheName)
        .map(name => caches.delete(name))
    );
  }
  
  async fetch(request) {
    try {
      // Try network first
      const networkResponse = await fetch(request);
      
      // If successful, cache and return
      if (networkResponse.ok) {
        const cache = await caches.open(this.cacheName);
        cache.put(request, networkResponse.clone());
      }
      
      return networkResponse;
    } catch (error) {
      // Network failed, try cache
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // If not in cache, return offline page
      return caches.match('/offline.html');
    }
  }
  
  async cacheDynamicData(url, data) {
    const cache = await caches.open(this.cacheName);
    const response = new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put(url, response);
  }
  
  async getCacheStats() {
    const cache = await caches.open(this.cacheName);
    const requests = await cache.keys();
    
    return {
      name: this.cacheName,
      size: requests.length,
      urls: requests.map(req => req.url)
    };
  }
}

// ========== Advanced Storage Patterns ==========
console.log("\\n\\n=== Advanced Storage Patterns ===");

// 1. Storage manager with fallback
class StorageManager {
  constructor() {
    this.storage = this.detectBestStorage();
    console.log('Using storage:', this.storage.constructor.name);
  }
  
  detectBestStorage() {
    // Try IndexedDB first
    if ('indexedDB' in window) {
      return new IndexedDBStorage();
    }
    
    // Then localStorage
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return new LocalStorage();
    } catch {
      // Fallback to cookies
      return new CookieStorage();
    }
  }
  
  async set(key, value) {
    return await this.storage.set(key, value);
  }
  
  async get(key) {
    return await this.storage.get(key);
  }
  
  async remove(key) {
    return await this.storage.remove(key);
  }
  
  async clear() {
    return await this.storage.clear();
  }
}

// Storage interface implementations
class IndexedDBStorage {
  constructor() {
    this.dbName = 'UniversalStorage';
    this.storeName = 'data';
    this.init();
  }
  
  async init() {
    this.db = await this.openDB();
  }
  
  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };
      
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  
  async set(key, value) {
    const transaction = this.db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    await store.put(value, key);
  }
  
  async get(key) {
    const transaction = this.db.transaction([this.storeName], 'readonly');
    const store = transaction.objectStore(this.storeName);
    return await store.get(key);
  }
  
  async remove(key) {
    const transaction = this.db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    await store.delete(key);
  }
  
  async clear() {
    const transaction = this.db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    await store.clear();
  }
}

class LocalStorage {
  async set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  async get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  
  async remove(key) {
    localStorage.removeItem(key);
  }
  
  async clear() {
    localStorage.clear();
  }
}

class CookieStorage {
  async set(key, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = \`\${key}=\${encodeURIComponent(JSON.stringify(value))}; \${expires}; path=/\`;
  }
  
  async get(key) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.trim().split('=');
      if (cookieKey === key) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
    }
    return null;
  }
  
  async remove(key) {
    document.cookie = \`\${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/\`;
  }
  
  async clear() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const key = cookie.trim().split('=')[0];
      this.remove(key);
    }
  }
}

// 2. Data synchronization manager
class SyncManager {
  constructor() {
    this.queue = [];
    this.isSyncing = false;
    this.loadQueue();
    this.setupOnlineDetection();
  }
  
  loadQueue() {
    const saved = localStorage.getItem('sync_queue');
    this.queue = saved ? JSON.parse(saved) : [];
  }
  
  saveQueue() {
    localStorage.setItem('sync_queue', JSON.stringify(this.queue));
  }
  
  addToQueue(operation) {
    this.queue.push({
      ...operation,
      id: Date.now(),
      attempts: 0,
      createdAt: new Date().toISOString()
    });
    this.saveQueue();
    
    // Try to sync if online
    if (navigator.onLine) {
      this.sync();
    }
  }
  
  async sync() {
    if (this.isSyncing || this.queue.length === 0) return;
    
    this.isSyncing = true;
    
    while (this.queue.length > 0) {
      const operation = this.queue[0];
      
      try {
        // Simulate API call
        await this.performOperation(operation);
        
        // Remove from queue on success
        this.queue.shift();
        this.saveQueue();
        
      } catch (error) {
        console.error('Sync failed:', error);
        operation.attempts++;
        
        if (operation.attempts >= 3) {
          // Give up after 3 attempts
          console.warn('Operation failed after 3 attempts:', operation);
          this.queue.shift();
          this.saveQueue();
        } else {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      }
    }
    
    this.isSyncing = false;
  }
  
  async performOperation(operation) {
    // Simulate API call with 80% success rate
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve({ success: true });
        } else {
          reject(new Error('Network error'));
        }
      }, 100);
    });
  }
  
  setupOnlineDetection() {
    window.addEventListener('online', () => {
      console.log('Device online, starting sync...');
      this.sync();
    });
    
    window.addEventListener('offline', () => {
      console.log('Device offline, queueing operations...');
    });
  }
  
  getQueueStats() {
    return {
      pending: this.queue.length,
      isSyncing: this.isSyncing,
      operations: this.queue.map(op => ({
        id: op.id,
        type: op.type,
        attempts: op.attempts,
        createdAt: op.createdAt
      }))
    };
  }
}

// Usage examples
const syncManager = new SyncManager();

// Add operations to sync queue
syncManager.addToQueue({
  type: 'CREATE_TASK',
  data: { title: 'Buy groceries', completed: false }
});

syncManager.addToQueue({
  type: 'UPDATE_USER',
  data: { name: 'John Doe', email: 'john@example.com' }
});

console.log('Sync queue stats:', syncManager.getQueueStats());

// ========== Practical Application ==========
console.log("\\n\\n=== Practical Application: Offline Notes App ===");

class OfflineNotesApp {
  constructor() {
    this.notes = [];
    this.categories = [];
    this.syncManager = new SyncManager();
    this.init();
  }
  
  async init() {
    await this.loadNotes();
    await this.loadCategories();
    this.setupEventListeners();
    this.render();
  }
  
  async loadNotes() {
    try {
      const saved = localStorage.getItem('notes');
      this.notes = saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to load notes:', error);
      this.notes = [];
    }
  }
  
  async loadCategories() {
    try {
      const saved = localStorage.getItem('categories');
      this.categories = saved ? JSON.parse(saved) : ['Personal', 'Work', 'Ideas'];
    } catch (error) {
      console.error('Failed to load categories:', error);
      this.categories = ['Personal', 'Work', 'Ideas'];
    }
  }
  
  async saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
    
    // Queue for sync
    this.syncManager.addToQueue({
      type: 'SYNC_NOTES',
      data: this.notes
    });
  }
  
  async saveCategories() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }
  
  async addNote(title, content, category = 'Personal') {
    const note = {
      id: Date.now(),
      title,
      content,
      category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      synced: false
    };
    
    this.notes.push(note);
    await this.saveNotes();
    this.render();
    
    return note;
  }
  
  async updateNote(id, updates) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
      this.notes[noteIndex] = {
        ...this.notes[noteIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
        synced: false
      };
      await this.saveNotes();
      this.render();
      return this.notes[noteIndex];
    }
    return null;
  }
  
  async deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    await this.saveNotes();
    this.render();
  }
  
  async addCategory(name) {
    if (!this.categories.includes(name)) {
      this.categories.push(name);
      await this.saveCategories();
      this.render();
    }
  }
  
  getNotesByCategory(category) {
    return this.notes.filter(note => note.category === category);
  }
  
  searchNotes(query) {
    const lowerQuery = query.toLowerCase();
    return this.notes.filter(note => 
      note.title.toLowerCase().includes(lowerQuery) ||
      note.content.toLowerCase().includes(lowerQuery)
    );
  }
  
  exportNotes() {
    const data = {
      notes: this.notes,
      categories: this.categories,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    return URL.createObjectURL(blob);
  }
  
  async importNotes(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      
      if (data.notes && Array.isArray(data.notes)) {
        this.notes = data.notes;
        await this.saveNotes();
      }
      
      if (data.categories && Array.isArray(data.categories)) {
        this.categories = data.categories;
        await this.saveCategories();
      }
      
      this.render();
      return true;
    } catch (error) {
      console.error('Import failed:', error);
      return false;
    }
  }
  
  setupEventListeners() {
    // Handle online/offline events
    window.addEventListener('online', () => {
      document.body.classList.remove('offline');
      console.log('App is online');
    });
    
    window.addEventListener('offline', () => {
      document.body.classList.add('offline');
      console.log('App is offline');
    });
    
    // Periodic sync
    setInterval(() => {
      if (navigator.onLine) {
        this.syncManager.sync();
      }
    }, 30000); // Every 30 seconds
  }
  
  render() {
    // This would update the DOM
    console.log('Rendering notes app');
    console.log('Total notes:', this.notes.length);
    console.log('Categories:', this.categories);
    
    // Update UI elements here
    const stats = {
      totalNotes: this.notes.length,
      byCategory: {},
      unsynced: this.notes.filter(note => !note.synced).length
    };
    
    this.categories.forEach(category => {
      stats.byCategory[category] = this.getNotesByCategory(category).length;
    });
    
    console.log('Stats:', stats);
  }
  
  getStats() {
    return {
      totalNotes: this.notes.length,
      totalCategories: this.categories.length,
      lastUpdated: this.notes.length > 0 
        ? new Date(Math.max(...this.notes.map(n => new Date(n.updatedAt))))
        : null,
      storageUsed: this.getStorageUsage(),
      syncStatus: this.syncManager.getQueueStats()
    };
  }
  
  getStorageUsage() {
    const notesSize = JSON.stringify(this.notes).length;
    const categoriesSize = JSON.stringify(this.categories).length;
    const totalSize = notesSize + categoriesSize;
    
    return {
      notesKB: (notesSize / 1024).toFixed(2),
      categoriesKB: (categoriesSize / 1024).toFixed(2),
      totalKB: (totalSize / 1024).toFixed(2)
    };
  }
}

// Initialize the app
const notesApp = new OfflineNotesApp();

// Example usage
notesApp.addNote('Shopping List', 'Milk, Eggs, Bread', 'Personal');
notesApp.addNote('Project Ideas', 'Build a notes app', 'Work');
notesApp.addNote('Book Recommendations', 'Deep Work, Atomic Habits', 'Ideas');

console.log('Notes app stats:', notesApp.getStats());

// Export notes
const exportUrl = notesApp.exportNotes();
console.log('Export URL:', exportUrl);

// Simulate search
const searchResults = notesApp.searchNotes('work');
console.log('Search results for "work":', searchResults);`,
      explanation: 'These comprehensive examples demonstrate various browser storage techniques, from simple local storage to complex IndexedDB implementations and offline synchronization patterns.',
      preview: '<div class="preview-demo"><h3 style="color: #10b981">Browser Storage Preview</h3><p>Try different storage methods and see how data persists across browser sessions!</p><div id="storageOutput" class="result-box">Storage operations will appear here</div></div>'
    }
  ],
  resources: [
    { title: 'MDN: Web Storage API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API' },
    { title: 'MDN: IndexedDB', url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API' },
    { title: 'MDN: Cache API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cache' },
    { title: 'JavaScript.info: Storage', url: 'https://javascript.info/data-storage' }
  ],
  prerequisites: ['js-dom'],
  nextTopics: ['js-apis']
} , 



];



// Additional helper data
export const jsTopics = jsNotesData.map(note => ({
  id: note.id,
  title: note.title,
  icon: note.icon,
  sections: note.sections || []
}));

export const jsStats = {
  totalTopics: 26,
  completedTopics: 1,
  estimatedTime: 350,
  difficulty: 'beginner to advanced'
};

// Helper functions
export const getJSTopicById = (id) => {
  return jsNotesData.find(topic => topic.id === id);
};

export const getNextJSTopic = (currentId) => {
  const currentIndex = jsNotesData.findIndex(topic => topic.id === currentId);
  return jsNotesData[currentIndex + 1] || null;
};

export const getPrevJSTopic = (currentId) => {
  const currentIndex = jsNotesData.findIndex(topic => topic.id === currentId);
  return jsNotesData[currentIndex - 1] || null;
}; 