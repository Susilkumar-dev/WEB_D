// frontend/src/data/htmlNotes.jsx - ULTRA SIMPLE WORKING VERSION

import { 
  // Only import basic icons that are 100% guaranteed to exist
  BookOpen, 
  FileText, 
  Hash, 
  Code, 
  Link as LinkIcon,
  Image, 
  List, 
  Table, 
  FormInput, 
  Layout,
  Globe, 
  Type, 
  Film, 
  Eye, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const htmlNotesData = [
  {
    id: 'html-introduction',
    title: 'Introduction to HTML',
    icon: <BookOpen />,
    difficulty: 'beginner',
    estimatedTime: 10,
    category: 'html',
    order: 1,
    sections: [
      'What is HTML?',
      'History of HTML',
      'Why HTML is used?',
      'HTML vs CSS vs JavaScript',
      'HTML Versions'
    ],
    content: `
      <h1>Introduction to HTML</h1>
      <p>HTML (HyperText Markup Language) is the foundation of all web pages. It's not a programming language, but a markup language that defines the structure of your content.</p>
      
      <h2>What is HTML?</h2>
      <p>HTML consists of a series of elements that you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way.</p>
      
      <div class="code-example">
        <h3>Example:</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <h2>Key Features of HTML:</h2>
      <ul>
        <li><strong>HyperText:</strong> Text with links to other text</li>
        <li><strong>Markup:</strong> Uses tags to define elements</li>
        <li><strong>Language:</strong> Has syntax and rules</li>
        <li><strong>Platform Independent:</strong> Works on any device</li>
        <li><strong>Easy to Learn:</strong> Simple syntax and structure</li>
      </ul>
      
      <h2>HTML vs CSS vs JavaScript</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Technology</th>
            <th>Purpose</th>
            <th>Analogy</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HTML</strong></td>
            <td>Structure & Content</td>
            <td>Skeleton</td>
            <td>&lt;h1&gt;Title&lt;/h1&gt;</td>
          </tr>
          <tr>
            <td><strong>CSS</strong></td>
            <td>Styling & Layout</td>
            <td>Skin & Clothes</td>
            <td>color: blue;</td>
          </tr>
          <tr>
            <td><strong>JavaScript</strong></td>
            <td>Behavior & Interactivity</td>
            <td>Muscles</td>
            <td>alert('Hello');</td>
          </tr>
        </tbody>
      </table>
      
      <h2>HTML Versions Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="year">1991</div>
          <div class="content">
            <h4>HTML 1.0</h4>
            <p>Created by Tim Berners-Lee</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1995</div>
          <div class="content">
            <h4>HTML 2.0</h4>
            <p>First standardized version</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1997</div>
          <div class="content">
            <h4>HTML 3.2</h4>
            <p>Added tables, applets, text flow</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">1999</div>
          <div class="content">
            <h4>HTML 4.01</h4>
            <p>Strict, transitional, frameset</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">2014</div>
          <div class="content">
            <h4>HTML5</h4>
            <p>Modern features, semantic elements</p>
          </div>
        </div>
      </div>
      
      <div class="note-box">
        <strong>💡 Tip:</strong> HTML is often described as the "skeleton" of a webpage, while CSS is the "skin" and JavaScript is the "muscles".
      </div>
    `,
    examples: [
      {
        title: 'Basic HTML Structure',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #0066cc;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph of text.</p>
    <p>HTML structures content on the web.</p>
    
    <h2>Features:</h2>
    <ul>
        <li>Easy to learn</li>
        <li>Platform independent</li>
        <li>Works in all browsers</li>
    </ul>
</body>
</html>`,
        explanation: 'This is the basic structure of every HTML document with some styling.'
      }
    ],
    resources: [
      { title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { title: 'HTML Living Standard', url: 'https://html.spec.whatwg.org/' }
    ],
    prerequisites: [],
    nextTopics: ['html-basics']
  },
  {
    id: 'html-basics',
    title: 'HTML Basics',
    icon: <FileText />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'html',
    order: 2,
    sections: [
      'HTML Document Structure',
      '<!DOCTYPE html>',
      '<html>, <head>, <body>',
      'HTML Comments',
      'HTML Case Sensitivity'
    ],
    content: `
      <h1>HTML Basics</h1>
      <p>Understanding the basic building blocks of HTML is essential for creating web pages.</p>
      
      <h2>HTML Document Structure</h2>
      <div class="structure-diagram">
        <div class="structure-level">┌─ DOCTYPE Declaration</div>
        <div class="structure-level">├─ &lt;html&gt; (Root Element)
          <div class="structure-level">│  ├─ &lt;head&gt; (Document Metadata)
            <div class="structure-level">│  │  ├─ &lt;title&gt; (Page Title)</div>
            <div class="structure-level">│  │  ├─ &lt;meta&gt; (Metadata)</div>
            <div class="structure-level">│  │  └─ &lt;link&gt; (External Resources)</div>
          </div>
          <div class="structure-level">│  └─ &lt;body&gt; (Visible Content)
            <div class="structure-level">│     ├─ Headings</div>
            <div class="structure-level">│     ├─ Paragraphs</div>
            <div class="structure-level">│     ├─ Images</div>
            <div class="structure-level">│     └─ Links</div>
          </div>
        </div>
      </div>
      
      <h2>1. &lt;!DOCTYPE html&gt;</h2>
      <p>This declaration tells the browser that this is an HTML5 document. It must be the very first thing in your HTML document.</p>
      <pre><code>&lt;!DOCTYPE html&gt;</code></pre>
      
      <h2>2. &lt;html&gt; Element</h2>
      <p>The root element that contains all other HTML elements. The <code>lang</code> attribute specifies the language of the document.</p>
      <pre><code>&lt;html lang="en"&gt;
  &lt;!-- All content goes here --&gt;
&lt;/html&gt;</code></pre>
      
      <h2>3. &lt;head&gt; Section</h2>
      <p>Contains meta-information about the document that is not displayed on the page:</p>
      <ul>
        <li><strong>&lt;title&gt;</strong> - Page title (shown in browser tab)</li>
        <li><strong>&lt;meta&gt;</strong> - Metadata (charset, viewport, description)</li>
        <li><strong>&lt;link&gt;</strong> - Links to external resources (CSS files)</li>
        <li><strong>&lt;style&gt;</strong> - Internal CSS styles</li>
        <li><strong>&lt;script&gt;</strong> - JavaScript code</li>
      </ul>
      
      <h2>4. &lt;body&gt; Section</h2>
      <p>Contains all the visible content of the webpage - text, images, links, forms, etc.</p>
      
      <h2>HTML Comments</h2>
      <p>Comments are not displayed in the browser, but they can help document your code:</p>
      <pre><code>&lt;!-- This is an HTML comment --&gt;
&lt;!-- 
  This is a multi-line
  HTML comment
--&gt;</code></pre>
      
      <h2>HTML Case Sensitivity</h2>
      <p>HTML tags are NOT case-sensitive, but lowercase is the standard convention:</p>
      <pre><code>&lt;H1&gt;Title&lt;/H1&gt;  &lt;!-- Works but not recommended --&gt;
&lt;h1&gt;Title&lt;/h1&gt;  &lt;!-- Recommended --&gt;</code></pre>
      
      <div class="note-box">
        <strong>🎯 Best Practice:</strong> Always use lowercase for HTML tags and attributes for consistency and better readability.
      </div>
      
      <h2>Complete Example</h2>
      <div class="code-example">
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Learn HTML basics"&gt;
    &lt;title&gt;HTML Basics Tutorial&lt;/title&gt;
    &lt;style&gt;
        body { font-family: Arial; padding: 20px; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Main content starts here --&gt;
    &lt;h1&gt;Welcome to HTML Basics&lt;/h1&gt;
    &lt;p&gt;Learn the fundamental structure of HTML documents.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    `,
    examples: [
      {
        title: 'Complete HTML Document',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page description for SEO -->
    <meta name="description" content="A sample HTML page demonstrating basic structure">
    
    <!-- Keywords for SEO -->
    <meta name="keywords" content="HTML, tutorial, basics, web development">
    
    <!-- Author information -->
    <meta name="author" content="DevRoadmap Team">
    
    <!-- Page title (shown in browser tab) -->
    <title>HTML Basics - Complete Example</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- External CSS file -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Internal CSS styles -->
    <style>
        /* Reset some default styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>🚀 HTML Basics Complete Guide</h1>
        <p>Master the foundation of web development</p>
    </header>
    
    <!-- Main Content -->
    <main>
        <div class="container">
            <section class="card">
                <h2>Document Structure</h2>
                <p>Every HTML document has a specific structure that browsers expect to render properly.</p>
                <ul>
                    <li><strong>DOCTYPE:</strong> Defines HTML version</li>
                    <li><strong>html:</strong> Root element</li>
                    <li><strong>head:</strong> Contains metadata</li>
                    <li><strong>body:</strong> Contains visible content</li>
                </ul>
            </section>
            
            <section class="card">
                <h2>Metadata Elements</h2>
                <p>Meta tags provide important information about the document:</p>
                <ul>
                    <li><strong>charset:</strong> Character encoding</li>
                    <li><strong>viewport:</strong> Responsive design</li>
                    <li><strong>description:</strong> SEO description</li>
                    <li><strong>keywords:</strong> SEO keywords</li>
                </ul>
            </section>
        </div>
        
        <section class="card">
            <h2>HTML Comments</h2>
            <p>Comments are essential for documenting your code and making it more maintainable:</p>
            <pre><code>&lt;!-- This is a single-line comment --&gt;

&lt;!-- 
    This is a multi-line comment.
    Use comments to explain complex code sections.
--&gt;

&lt;!-- TODO: Add form validation here --&gt;
&lt;!-- FIXME: This needs optimization --&gt;</code></pre>
        </section>
    </main>
    
    <!-- Footer -->
    <footer>
        <p>© 2024 DevRoadmap. All rights reserved.</p>
        <p>Created with ❤️ for web development learners</p>
    </footer>
    
    <!-- JavaScript -->
    <script>
        // Simple JavaScript to demonstrate script tag
        console.log('Page loaded successfully!');
        
        // Display welcome message
        window.onload = function() {
            console.log('Welcome to HTML Basics!');
        };
    </script>
</body>
</html>`,
        explanation: 'Complete HTML document with all essential elements including DOCTYPE, metadata, structure, comments, and scripts.'
      }
    ],
    resources: [
      { title: 'HTML Document Structure', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started' },
      { title: 'HTML Best Practices', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure' }
    ],
    prerequisites: ['html-introduction'],
    nextTopics: ['html-elements']
  },
  {
    id: 'html-elements',
    title: 'HTML Elements',
    icon: <Hash />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'html',
    order: 3,
    sections: [
      'What is an HTML Element?',
      'Opening & Closing Tags',
      'Empty / Void Elements',
      'Nested Elements',
      'Block vs Inline Elements'
    ],
    content: `
      <h1>HTML Elements</h1>
      <p>HTML elements are the building blocks of web pages. Understanding element types is crucial for creating structured content.</p>
      
      <h2>Anatomy of an HTML Element</h2>
      <div class="element-anatomy">
        <div class="element-part opening-tag">&lt;tagname attribute="value"&gt;</div>
        <div class="element-part content">Content goes here</div>
        <div class="element-part closing-tag">&lt;/tagname&gt;</div>
      </div>
      
      <h2>Types of HTML Elements</h2>
      
      <h3>1. Container Elements (with opening and closing tags)</h3>
      <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;div&gt;This is a division.&lt;/div&gt;
&lt;span&gt;Inline content&lt;/span&gt;</code></pre>
      
      <h3>2. Void Elements (self-closing)</h3>
      <pre><code>&lt;br&gt;          &lt;!-- Line break --&gt;
&lt;img src="image.jpg" alt="Image"&gt;
&lt;input type="text"&gt;
&lt;meta charset="UTF-8"&gt;
&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
      
      <h2>Nested Elements</h2>
      <p>Elements can contain other elements. Always maintain proper nesting order:</p>
      
      <div class="code-example">
        <h3>Correct Nesting:</h3>
        <pre><code>&lt;div&gt;
  &lt;p&gt;This is &lt;strong&gt;important&lt;/strong&gt; text.&lt;/p&gt;
&lt;/div&gt;</code></pre>
      </div>
      
      <div class="code-example error">
        <h3>Incorrect Nesting (Avoid This):</h3>
        <pre><code>&lt;div&gt;
  &lt;p&gt;This is &lt;strong&gt;important text.
&lt;/div&gt;
&lt;/p&gt;&lt;/strong&gt;</code></pre>
        <p class="error-message">❌ Tags are not properly closed in the correct order</p>
      </div>
      
      <h2>Block vs Inline Elements</h2>
      
      <div class="comparison">
        <div class="comparison-column">
          <h3>Block Elements</h3>
          <ul>
            <li>Start on a new line</li>
            <li>Take full width available</li>
            <li>Can contain other block/inline elements</li>
            <li>Examples: &lt;div&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;</li>
          </ul>
        </div>
        <div class="comparison-column">
          <h3>Inline Elements</h3>
          <ul>
            <li>Stay in the same line</li>
            <li>Take only necessary width</li>
            <li>Cannot contain block elements</li>
            <li>Examples: &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;img&gt;</li>
          </ul>
        </div>
      </div>
      
      <h2>Practical Examples</h2>
      
      <div class="code-example">
        <h3>Block Elements Example:</h3>
        <pre><code>&lt;div style="border: 2px solid blue; padding: 10px; margin: 10px;"&gt;
  This is a block element (div)
&lt;/div&gt;
&lt;p style="border: 2px solid red; padding: 10px;"&gt;
  This paragraph is also a block element
&lt;/p&gt;</code></pre>
      </div>
      
      <div class="code-example">
        <h3>Inline Elements Example:</h3>
        <pre><code>&lt;p&gt;
  This paragraph contains &lt;strong&gt;bold text&lt;/strong&gt;, 
  &lt;em&gt;italic text&lt;/em&gt;, and a &lt;a href="#"&gt;link&lt;/a&gt;.
  They all stay &lt;span style="color: red;"&gt;in the same line&lt;/span&gt;.
&lt;/p&gt;</code></pre>
      </div>
      
      <h2>Common HTML Elements</h2>
      <table class="elements-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Type</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;h1&gt;-&lt;h6&gt;</code></td>
            <td>Block</td>
            <td>Headings (h1 is most important)</td>
            <td><code>&lt;h1&gt;Title&lt;/h1&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;p&gt;</code></td>
            <td>Block</td>
            <td>Paragraph</td>
            <td><code>&lt;p&gt;Text&lt;/p&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;div&gt;</code></td>
            <td>Block</td>
            <td>Division/container</td>
            <td><code>&lt;div&gt;Content&lt;/div&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;span&gt;</code></td>
            <td>Inline</td>
            <td>Inline container</td>
            <td><code>&lt;span&gt;inline&lt;/span&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;a&gt;</code></td>
            <td>Inline</td>
            <td>Anchor (link)</td>
            <td><code>&lt;a href="#"&gt;Link&lt;/a&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;img&gt;</code></td>
            <td>Inline</td>
            <td>Image</td>
            <td><code>&lt;img src="img.jpg"&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;br&gt;</code></td>
            <td>Inline</td>
            <td>Line break</td>
            <td><code>Line 1&lt;br&gt;Line 2</code></td>
          </tr>
        </tbody>
      </table>
      
      <div class="note-box">
        <strong>💡 Tip:</strong> A good rule of thumb: Use block elements for layout sections and inline elements for styling text within those sections.
      </div>
    `,
    examples: [
      {
        title: 'Complete Element Examples',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            background-color: #f5f7fa;
        }
        
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .section {
            margin-bottom: 30px;
            padding: 20px;
            border-left: 4px solid #3498db;
            background: #f8fafc;
            border-radius: 0 8px 8px 0;
        }
        
        .block-demo {
            border: 2px solid #3498db;
            padding: 15px;
            margin: 10px 0;
            background: #e3f2fd;
        }
        
        .inline-demo {
            background: #e8f5e9;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 0 5px;
        }
        
        .void-element {
            background: #fff3e0;
            padding: 10px;
            border-radius: 4px;
            margin: 10px 0;
        }
        
        h1, h2, h3 {
            color: #2c3e50;
            margin-bottom: 15px;
        }
        
        h1 { border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #2980b9; }
        h3 { color: #16a085; }
        
        code {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        
        .example-output {
            background: #f8f9fa;
            padding: 15px;
            border: 1px solid #dee2e6;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 HTML Elements Complete Guide</h1>
        
        <!-- Block Elements Section -->
        <div class="section">
            <h2>Block-Level Elements</h2>
            <p>Block elements start on a new line and take the full width available.</p>
            
            <div class="example-output">
                <h3>Example Output:</h3>
                <div class="block-demo">
                    <h4>This is an H4 Heading (Block)</h4>
                    <p>This is a paragraph inside a div. Notice how each block element starts on a new line and takes full width.</p>
                </div>
                
                <ul>
                    <li>First list item (Block list)</li>
                    <li>Second list item</li>
                    <li>Third list item</li>
                </ul>
            </div>
            
            <pre><code>&lt;!-- Block Elements Code --&gt;
&lt;div&gt;
    &lt;h4&gt;This is an H4 Heading&lt;/h4&gt;
    &lt;p&gt;This is a paragraph inside a div.&lt;/p&gt;
&lt;/div&gt;

&lt;ul&gt;
    &lt;li&gt;First list item&lt;/li&gt;
    &lt;li&gt;Second list item&lt;/li&gt;
    &lt;li&gt;Third list item&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
        
        <!-- Inline Elements Section -->
        <div class="section">
            <h2>Inline Elements</h2>
            <p>Inline elements stay in the same line and only take necessary width.</p>
            
            <div class="example-output">
                <h3>Example Output:</h3>
                <p>
                    This paragraph contains multiple inline elements: 
                    <span class="inline-demo">span element</span>, 
                    <strong>strong text</strong>, 
                    <em>emphasized text</em>, 
                    <a href="#" style="color: #3498db;">a link</a>, and 
                    <code>code snippet</code>.
                </p>
            </div>
            
            <pre><code>&lt;!-- Inline Elements Code --&gt;
&lt;p&gt;
    This paragraph contains multiple inline elements:
    &lt;span&gt;span element&lt;/span&gt;,
    &lt;strong&gt;strong text&lt;/strong&gt;,
    &lt;em&gt;emphasized text&lt;/em&gt;,
    &lt;a href="#"&gt;a link&lt;/a&gt;, and
    &lt;code&gt;code snippet&lt;/code&gt;.
&lt;/p&gt;</code></pre>
        </div>
        
        <!-- Void Elements Section -->
        <div class="section">
            <h2>Void (Empty) Elements</h2>
            <p>Void elements don't have closing tags and don't contain content.</p>
            
            <div class="example-output">
                <h3>Example Output:</h3>
                <div class="void-element">
                    First line<br>
                    Second line after line break
                    <hr>
                    Image: <img src="https://via.placeholder.com/100x50" alt="Placeholder" style="vertical-align: middle;">
                </div>
            </div>
            
            <pre><code>&lt;!-- Void Elements Code --&gt;
First line&lt;br&gt;
Second line after line break
&lt;hr&gt;
Image: &lt;img src="image.jpg" alt="Description"&gt;</code></pre>
        </div>
        
        <!-- Nested Elements Section -->
        <div class="section">
            <h2>Nested Elements</h2>
            <p>Elements can be nested inside other elements.</p>
            
            <div class="example-output">
                <h3>Example Output:</h3>
                <article>
                    <header>
                        <h3>Article Title</h3>
                        <p>By <strong>Author Name</strong> | Published: <em>Today</em></p>
                    </header>
                    <section>
                        <p>This article discusses <mark>HTML elements</mark> and their proper usage.</p>
                        <blockquote>
                            <p>"Proper nesting is crucial for valid HTML."</p>
                            <cite>- Web Developer</cite>
                        </blockquote>
                    </section>
                </article>
            </div>
            
            <pre><code>&lt;!-- Nested Elements Code --&gt;
&lt;article&gt;
    &lt;header&gt;
        &lt;h3&gt;Article Title&lt;/h3&gt;
        &lt;p&gt;By &lt;strong&gt;Author Name&lt;/strong&gt; | Published: &lt;em&gt;Today&lt;/em&gt;&lt;/p&gt;
    &lt;/header&gt;
    &lt;section&gt;
        &lt;p&gt;This article discusses &lt;mark&gt;HTML elements&lt;/mark&gt;.&lt;/p&gt;
        &lt;blockquote&gt;
            &lt;p&gt;"Proper nesting is crucial."&lt;/p&gt;
            &lt;cite&gt;- Web Developer&lt;/cite&gt;
        &lt;/blockquote&gt;
    &lt;/section&gt;
&lt;/article&gt;</code></pre>
        </div>
        
        <!-- Block vs Inline Demo -->
        <div class="section">
            <h2>Block vs Inline Comparison</h2>
            
            <div class="example-output">
                <h3>Visual Comparison:</h3>
                
                <div style="background: #e3f2fd; padding: 15px; margin: 10px 0;">
                    <h4>Block Element (Div)</h4>
                    <p>Takes full width and starts new line.</p>
                </div>
                
                <p>
                    <span style="background: #e8f5e9; padding: 5px;">Inline Span 1</span>
                    <span style="background: #fce4ec; padding: 5px;">Inline Span 2</span>
                    <span style="background: #fff3e0; padding: 5px;">Inline Span 3</span>
                    All inline elements stay in same line.
                </p>
            </div>
            
            <div class="note-box">
                <strong>🎯 Key Difference:</strong> Block elements create "blocks" of content, while inline elements flow within text.
            </div>
        </div>
    </div>
    
    <script>
        // Add interactivity to demonstrate element manipulation
        document.addEventListener('DOMContentLoaded', function() {
            // Add click effect to block demo
            const blockDemo = document.querySelector('.block-demo');
            blockDemo.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
            
            // Add hover effect to inline elements
            const inlineElements = document.querySelectorAll('.inline-demo');
            inlineElements.forEach(el => {
                el.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                });
                
                el.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
        });
    </script>
</body>
</html>`,
        explanation: 'Comprehensive demonstration of HTML elements including block vs inline, void elements, nested elements, and practical examples.'
      }
    ],
    resources: [
      { title: 'HTML Elements Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element' },
      { title: 'Block vs Inline', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements' }
    ],
    prerequisites: ['html-basics'],
    nextTopics: ['html-attributes']
  },
  {
    id: 'html-attributes',
    title: 'HTML Attributes',
    icon: <Code />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'html',
    order: 4,
    sections: [
      'What are Attributes?',
      'Global Attributes',
      'id Attribute',
      'class Attribute',
      'style Attribute',
      'title Attribute',
      'data-* Attributes'
    ],
    content: `
      <h1>HTML Attributes</h1>
      <p>Attributes provide additional information about HTML elements and modify their behavior or appearance.</p>
      
      <h2>What are Attributes?</h2>
      <p>Attributes are always specified in the opening tag and usually come in name/value pairs:</p>
      
      <div class="attribute-anatomy">
        <span class="tag">&lt;element</span>
        <span class="attribute"> attribute</span>
        <span class="equals">=</span>
        <span class="value">"value"</span>
        <span class="tag">&gt;</span>
        <span class="content">Content</span>
        <span class="tag">&lt;/element&gt;</span>
      </div>
      
      <h2>Global Attributes</h2>
      <p>These attributes can be used on ANY HTML element:</p>
      
      <table class="attribute-table">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>id</code></td>
            <td>Unique identifier for an element</td>
            <td><code>id="main-header"</code></td>
          </tr>
          <tr>
            <td><code>class</code></td>
            <td>Space-separated list of class names</td>
            <td><code>class="btn primary large"</code></td>
          </tr>
          <tr>
            <td><code>style</code></td>
            <td>Inline CSS styles</td>
            <td><code>style="color: red;"</code></td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>Extra information (tooltip)</td>
            <td><code>title="Click to learn more"</code></td>
          </tr>
          <tr>
            <td><code>data-*</code></td>
            <td>Custom data attributes</td>
            <td><code>data-user-id="123"</code></td>
          </tr>
          <tr>
            <td><code>hidden</code></td>
            <td>Hides the element</td>
            <td><code>hidden</code></td>
          </tr>
          <tr>
            <td><code>contenteditable</code></td>
            <td>Makes element editable</td>
            <td><code>contenteditable="true"</code></td>
          </tr>
          <tr>
            <td><code>draggable</code></td>
            <td>Specifies if element is draggable</td>
            <td><code>draggable="true"</code></td>
          </tr>
        </tbody>
      </table>
      
      <h2>Important Attributes in Detail</h2>
      
      <h3>1. id Attribute</h3>
      <p>Must be unique within the page. Used for:</p>
      <ul>
        <li>CSS styling: <code>#main-title { color: blue; }</code></li>
        <li>JavaScript: <code>document.getElementById('main-title')</code></li>
        <li>Anchor links: <code>&lt;a href="#navigation"&gt;Go to nav&lt;/a&gt;</code></li>
      </ul>
      
      <h3>2. class Attribute</h3>
      <p>Can be used on multiple elements. Multiple classes separated by spaces:</p>
      <pre><code>&lt;p class="text-primary large"&gt;Styled text&lt;/p&gt;
&lt;button class="btn btn-primary"&gt;Click me&lt;/button&gt;</code></pre>
      
      <h3>3. style Attribute</h3>
      <p>Inline CSS styling (use sparingly):</p>
      <pre><code>&lt;p style="color: blue; font-size: 18px;"&gt;
  Blue text with custom styling
&lt;/p&gt;</code></pre>
      
      <h3>4. title Attribute</h3>
      <p>Shows tooltip on hover:</p>
      <pre><code>&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
&lt;a href="#" title="Visit help page"&gt;Help&lt;/a&gt;</code></pre>
      
      <h3>5. data-* Attributes</h3>
      <p>Store extra information that doesn't have visual representation:</p>
      <pre><code>&lt;div data-user-id="12345" data-role="admin"&gt;
  User Information
&lt;/div&gt;</code></pre>
      
      <h2>Boolean Attributes</h2>
      <p>Some attributes don't need a value (they're either present or not):</p>
      <pre><code>&lt;input type="checkbox" checked&gt;
&lt;button disabled&gt;Can't click&lt;/button&gt;
&lt;video controls autoplay&gt;&lt;/video&gt;</code></pre>
      
      <div class="note-box">
        <strong>⚠️ Important:</strong> 
        <ul>
          <li>Use <code>id</code> for unique elements only</li>
          <li>Use <code>class</code> for groups of elements</li>
          <li>Avoid inline styles when possible</li>
          <li>Always include <code>alt</code> attribute for images</li>
        </ul>
      </div>
    `,
    examples: [
      {
        title: 'Attributes in Action',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        #main-header { color: darkblue; }
        .highlight { background-color: yellow; }
        .btn { padding: 10px 20px; border-radius: 5px; }
        .primary { background: blue; color: white; }
        [data-category] { border-left: 4px solid green; padding-left: 10px; }
    </style>
</head>
<body>
    <h1 id="main-header">Welcome</h1>
    
    <p class="highlight" title="Important note">
        This text is highlighted and has a tooltip.
    </p>
    
    <button class="btn primary" disabled>
        Disabled Button
    </button>
    
    <div data-category="tutorial" data-level="beginner">
        This div has custom data attributes.
    </div>
</body>
</html>`,
        explanation: 'Demonstrates various HTML attributes in use.'
      }
    ],
    resources: [
      { title: 'HTML Attributes Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes' },
      { title: 'Global Attributes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes' }
    ],
    prerequisites: ['html-elements'],
    nextTopics: ['html-text']
  },
  {
    id: 'html-text',
    title: 'HTML Text Formatting',
    icon: <Type />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'html',
    order: 5,
    sections: [
      'Headings (<h1> to <h6>)',
      'Paragraph (<p>)',
      'Line Break (<br>)',
      'Horizontal Rule (<hr>)',
      'Bold (<b>, <strong>)',
      'Italic (<i>, <em>)',
      'Underline (<u>)',
      'Superscript & Subscript',
      '<pre>, <code>'
    ],
    content: `
      <h1>HTML Text Formatting</h1>
      <p>HTML provides various elements to format and structure text content on web pages.</p>
      
      <h2>Headings: &lt;h1&gt; to &lt;h6&gt;</h2>
      <p>Headings define the structure and hierarchy of your content:</p>
      
      <div class="headings-demo">
        <h1>Main Heading (h1)</h1>
        <h2>Subheading (h2)</h2>
        <h3>Sub-subheading (h3)</h3>
        <h4>Heading 4 (h4)</h4>
        <h5>Heading 5 (h5)</h5>
        <h6>Heading 6 (h6)</h6>
      </div>
      
      <h2>Paragraphs: &lt;p&gt;</h2>
      <p>Used for blocks of text:</p>
      <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;p&gt;This is another paragraph.&lt;/p&gt;</code></pre>
      
      <h2>Line Breaks: &lt;br&gt;</h2>
      <p>Creates a line break without starting a new paragraph:</p>
      <pre><code>Line 1&lt;br&gt;
Line 2&lt;br&gt;
Line 3</code></pre>
      
      <h2>Horizontal Rule: &lt;hr&gt;</h2>
      <p>Creates a thematic break between sections:</p>
      <pre><code>&lt;h2&gt;Section 1&lt;/h2&gt;
&lt;p&gt;Content of section 1&lt;/p&gt;
&lt;hr&gt;
&lt;h2&gt;Section 2&lt;/h2&gt;
&lt;p&gt;Content of section 2&lt;/p&gt;</code></pre>
      
      <h2>Text Formatting Elements</h2>
      <table class="formatting-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Purpose</th>
            <th>Example</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;b&gt;</code></td>
            <td>Bold text (without importance)</td>
            <td><code>&lt;b&gt;Bold&lt;/b&gt;</code></td>
            <td><b>Bold</b></td>
          </tr>
          <tr>
            <td><code>&lt;strong&gt;</code></td>
            <td>Strong importance</td>
            <td><code>&lt;strong&gt;Important&lt;/strong&gt;</code></td>
            <td><strong>Important</strong></td>
          </tr>
          <tr>
            <td><code>&lt;i&gt;</code></td>
            <td>Italic text</td>
            <td><code>&lt;i&gt;Italic&lt;/i&gt;</code></td>
            <td><i>Italic</i></td>
          </tr>
          <tr>
            <td><code>&lt;em&gt;</code></td>
            <td>Emphasized text</td>
            <td><code>&lt;em&gt;Emphasis&lt;/em&gt;</code></td>
            <td><em>Emphasis</em></td>
          </tr>
          <tr>
            <td><code>&lt;u&gt;</code></td>
            <td>Underlined text</td>
            <td><code>&lt;u&gt;Underline&lt;/u&gt;</code></td>
            <td><u>Underline</u></td>
          </tr>
          <tr>
            <td><code>&lt;mark&gt;</code></td>
            <td>Highlighted text</td>
            <td><code>&lt;mark&gt;Highlight&lt;/mark&gt;</code></td>
            <td><mark>Highlight</mark></td>
          </tr>
          <tr>
            <td><code>&lt;small&gt;</code></td>
            <td>Smaller text</td>
            <td><code>&lt;small&gt;Small&lt;/small&gt;</code></td>
            <td><small>Small</small></td>
          </tr>
          <tr>
            <td><code>&lt;sup&gt;</code></td>
            <td>Superscript</td>
            <td><code>X&lt;sup&gt;2&lt;/sup&gt;</code></td>
            <td>X<sup>2</sup></td>
          </tr>
          <tr>
            <td><code>&lt;sub&gt;</code></td>
            <td>Subscript</td>
            <td><code>H&lt;sub&gt;2&lt;/sub&gt;O</code></td>
            <td>H<sub>2</sub>O</td>
          </tr>
          <tr>
            <td><code>&lt;code&gt;</code></td>
            <td>Inline code</td>
            <td><code>&lt;code&gt;console.log()&lt;/code&gt;</code></td>
            <td><code>console.log()</code></td>
          </tr>
          <tr>
            <td><code>&lt;pre&gt;</code></td>
            <td>Preformatted text</td>
            <td><code>&lt;pre&gt;Text&lt;/pre&gt;</code></td>
            <td><pre>Text</pre></td>
          </tr>
        </tbody>
      </table>
    `,
    examples: [
      {
        title: 'Complete Text Formatting Example',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        .demo { border: 1px solid #ddd; padding: 20px; margin: 20px 0; }
        h1, h2, h3 { color: #333; }
    </style>
</head>
<body>
    <h1>Text Formatting Examples</h1>
    
    <div class="demo">
        <h2>Headings Hierarchy</h2>
        <h1>Main Title (h1)</h1>
        <h2>Section Title (h2)</h2>
        <h3>Subsection (h3)</h3>
    </div>
    
    <div class="demo">
        <h2>Basic Text Formatting</h2>
        <p>This is a <b>bold</b> word and this is a <strong>strong</strong> word.</p>
        <p>This is <i>italic</i> text and this is <em>emphasized</em> text.</p>
        <p>This text is <u>underlined</u> and this is <mark>highlighted</mark>.</p>
        <p>Chemical formula: H<sub>2</sub>O</p>
        <p>Mathematical: X<sup>2</sup> + Y<sup>2</sup> = Z<sup>2</sup></p>
    </div>
    
    <div class="demo">
        <h2>Code Examples</h2>
        <p>Use <code>&lt;code&gt;</code> for inline code.</p>
        <pre>
function hello() {
    console.log("Hello World!");
    return true;
}</pre>
    </div>
</body>
</html>`,
        explanation: 'Shows various text formatting elements in HTML.'
      }
    ],
    resources: [
      { title: 'HTML Text Formatting', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals' },
      { title: 'HTML Text Elements', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content' }
    ],
    prerequisites: ['html-attributes'],
    nextTopics: ['html-lists']
  },
  {
    id: 'html-lists',
    title: 'HTML Lists',
    icon: <List />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'html',
    order: 6,
    sections: [
      'Ordered List (<ol>)',
      'Unordered List (<ul>)',
      'List Item (<li>)',
      'Description List (<dl>)',
      'Nested Lists'
    ],
    content: `
      <h1>HTML Lists</h1>
      <p>HTML provides three types of lists for organizing content.</p>
      
      <h2>1. Unordered List (&lt;ul&gt;)</h2>
      <p>Creates a bulleted list:</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      
      <h2>2. Ordered List (&lt;ol&gt;)</h2>
      <p>Creates a numbered list:</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      
      <h2>3. Description List (&lt;dl&gt;)</h2>
      <p>Creates a list of terms with descriptions:</p>
      <pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
      
      <h2>List Attributes</h2>
      <table class="list-attributes">
        <tr><th>Attribute</th><th>Description</th><th>Example</th></tr>
        <tr>
          <td><code>type</code></td>
          <td>Bullet/number style</td>
          <td><code>&lt;ul type="circle"&gt;</code></td>
        </tr>
        <tr>
          <td><code>start</code></td>
          <td>Starting number</td>
          <td><code>&lt;ol start="5"&gt;</code></td>
        </tr>
        <tr>
          <td><code>reversed</code></td>
          <td>Reverse numbering</td>
          <td><code>&lt;ol reversed&gt;</code></td>
        </tr>
      </table>
    `,
    examples: [
      {
        title: 'List Examples',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        .list-demo { margin: 20px 0; padding: 15px; border: 1px solid #ddd; }
    </style>
</head>
<body>
    <h1>HTML Lists Examples</h1>
    
    <div class="list-demo">
        <h3>Unordered List</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </div>
    
    <div class="list-demo">
        <h3>Ordered List</h3>
        <ol>
            <li>Learn HTML</li>
            <li>Learn CSS</li>
            <li>Learn JavaScript</li>
        </ol>
    </div>
    
    <div class="list-demo">
        <h3>Description List</h3>
        <dl>
            <dt>Frontend</dt>
            <dd>What users see and interact with</dd>
            <dt>Backend</dt>
            <dd>Server-side processing</dd>
        </dl>
    </div>
</body>
</html>`,
        explanation: 'Demonstrates all three types of HTML lists.'
      }
    ],
    resources: [
      { title: 'HTML Lists Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists' },
      { title: 'List Elements Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element#lists' }
    ],
    prerequisites: ['html-text'],
    nextTopics: ['html-links']
  },
  {
    id: 'html-links',
    title: 'HTML Links',
    icon: <LinkIcon />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'html',
    order: 7,
    sections: [
      'Anchor Tag (<a>)',
      'href Attribute',
      'Target Attribute',
      'Bookmark Links',
      'Email Links',
      'Phone Links'
    ],
    content: `
      <h1>HTML Links</h1>
      <p>Links are the fundamental building blocks of the web, connecting documents together.</p>
      
      <h2>Basic Link: &lt;a&gt;</h2>
      <pre><code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;</code></pre>
      
      <h2>Link Targets</h2>
      <pre><code>&lt;a href="https://example.com" target="_blank"&gt;Open in New Tab&lt;/a&gt;
&lt;a href="#section2"&gt;Jump to Section 2&lt;/a&gt;
&lt;a href="mailto:email@example.com"&gt;Send Email&lt;/a&gt;
&lt;a href="tel:+1234567890"&gt;Call Us&lt;/a&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Link Examples',
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>HTML Links Examples</h1>
    
    <p><a href="https://google.com">External Link</a></p>
    <p><a href="#bottom" id="top">Internal Link (to bottom)</a></p>
    <p><a href="mailto:test@example.com">Email Link</a></p>
    
    <div style="height: 800px;"></div>
    
    <p id="bottom">Bottom of page</p>
    <p><a href="#top">Back to top</a></p>
</body>
</html>`,
        explanation: 'Shows different types of HTML links.'
      }
    ],
    resources: [
      { title: 'HTML Links Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks' },
      { title: 'Anchor Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' }
    ],
    prerequisites: ['html-lists'],
    nextTopics: ['html-images']
  },
  {
    id: 'html-images',
    title: 'HTML Images',
    icon: <Image />,
    difficulty: 'beginner',
    estimatedTime: 15,
    category: 'html',
    order: 8,
    sections: [
      '<img> Tag',
      'src Attribute',
      'alt Attribute',
      'Width & Height',
      'Responsive Images'
    ],
    content: `
      <h1>HTML Images</h1>
      <p>The &lt;img&gt; tag is used to embed images in web pages.</p>
      
      <h2>Basic Image</h2>
      <pre><code>&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
      
      <h2>Image Attributes</h2>
      <pre><code>&lt;img src="image.jpg" 
     alt="Description" 
     width="300" 
     height="200" 
     title="Hover text"&gt;</code></pre>
      
      <div class="note-box">
        <strong>⚠️ Important:</strong> Always include the <code>alt</code> attribute for accessibility and SEO.
      </div>
    `,
    examples: [
      {
        title: 'Image Examples',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        img { max-width: 100%; height: auto; }
        .image-container { margin: 20px 0; }
    </style>
</head>
<body>
    <h1>HTML Images Examples</h1>
    
    <div class="image-container">
        <img src="https://via.placeholder.com/300x200" 
             alt="Placeholder Image"
             width="300"
             height="200"
             title="This is a placeholder image">
    </div>
    
    <div class="image-container">
        <img src="https://via.placeholder.com/600x400" 
             alt="Large Placeholder"
             style="border: 2px solid #ccc; border-radius: 10px;">
    </div>
</body>
</html>`,
        explanation: 'Shows how to use images in HTML with various attributes.'
      }
    ],
    resources: [
      { title: 'HTML Images Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML' },
      { title: 'Image Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img' }
    ],
    prerequisites: ['html-links'],
    nextTopics: ['html-tables']
  },
  {
    id: 'html-tables',
    title: 'HTML Tables',
    icon: <Table />,
    difficulty: 'beginner',
    estimatedTime: 20,
    category: 'html',
    order: 9,
    sections: [
      '<table> Structure',
      '<tr>, <td>, <th>',
      'Table Headers',
      'Table Caption',
      'Table Styling'
    ],
    content: `
      <h1>HTML Tables</h1>
      <p>Tables are used to display data in rows and columns.</p>
      
      <h2>Basic Table Structure</h2>
      <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Header 1&lt;/th&gt;
    &lt;th&gt;Header 2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Data 1&lt;/td&gt;
    &lt;td&gt;Data 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      
      <h2>Complex Table Example</h2>
      <pre><code>&lt;table&gt;
  &lt;caption&gt;Monthly Sales&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Month&lt;/th&gt;
      &lt;th&gt;Sales&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;January&lt;/td&gt;
      &lt;td&gt;$1000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Total&lt;/td&gt;
      &lt;td&gt;$5000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Table Example',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        caption { font-weight: bold; margin: 10px 0; }
    </style>
</head>
<body>
    <h1>HTML Tables Example</h1>
    
    <table>
        <caption>Employee Information</caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Engineering</td>
                <td>$80,000</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>Marketing</td>
                <td>$65,000</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
        explanation: 'Shows a complete HTML table with styling.'
      }
    ],
    resources: [
      { title: 'HTML Tables Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables' },
      { title: 'Table Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' }
    ],
    prerequisites: ['html-images'],
    nextTopics: ['html-forms']
  },
  {
    id: 'html-forms',
    title: 'HTML Forms',
    icon: <FormInput />,
    difficulty: 'intermediate',
    estimatedTime: 25,
    category: 'html',
    order: 10,
    sections: [
      '<form> Element',
      'Input Types',
      'Textarea',
      'Select & Option',
      'Buttons',
      'Form Validation'
    ],
    content: `
      <h1>HTML Forms</h1>
      <p>Forms allow users to input data that can be sent to a server for processing.</p>
      
      <h2>Basic Form Structure</h2>
      <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      
      <h2>Common Input Types</h2>
      <pre><code>&lt;input type="text"&gt;      &lt;!-- Single line text --&gt;
&lt;input type="email"&gt;     &lt;!-- Email address --&gt;
&lt;input type="password"&gt;  &lt;!-- Password field --&gt;
&lt;input type="number"&gt;    &lt;!-- Numbers only --&gt;
&lt;input type="date"&gt;      &lt;!-- Date picker --&gt;
&lt;input type="checkbox"&gt;  &lt;!-- Checkbox --&gt;
&lt;input type="radio"&gt;     &lt;!-- Radio button --&gt;
&lt;input type="file"&gt;      &lt;!-- File upload --&gt;
&lt;input type="range"&gt;     &lt;!-- Slider --&gt;
&lt;textarea&gt;&lt;/textarea&gt;   &lt;!-- Multi-line text --&gt;
&lt;select&gt;&lt;option&gt;&lt;/option&gt;&lt;/select&gt; &lt;!-- Dropdown --&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Complete Form Example',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        form { max-width: 600px; margin: 0 auto; }
        .form-group { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; }
        input, textarea, select { width: 100%; padding: 8px; }
        button { background: #4CAF50; color: white; padding: 10px 20px; border: none; }
    </style>
</head>
<body>
    <h1>Contact Form</h1>
    
    <form action="#" method="POST">
        <div class="form-group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
        </div>
        
        <div class="form-group">
            <label>Subscribe to newsletter</label>
            <input type="checkbox" id="subscribe" name="subscribe">
        </div>
        
        <button type="submit">Send Message</button>
    </form>
</body>
</html>`,
        explanation: 'Complete contact form with various input types.'
      }
    ],
    resources: [
      { title: 'HTML Forms Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms' },
      { title: 'Form Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form' }
    ],
    prerequisites: ['html-tables'],
    nextTopics: ['html-semantic']
  },
  {
    id: 'html-semantic',
    title: 'HTML Semantic Elements',
    icon: <Layout />,
    difficulty: 'intermediate',
    estimatedTime: 20,
    category: 'html',
    order: 11,
    sections: [
      'What are Semantic Elements?',
      '<header>',
      '<nav>',
      '<main>',
      '<article>',
      '<section>',
      '<aside>',
      '<footer>'
    ],
    content: `
      <h1>HTML Semantic Elements</h1>
      <p>Semantic elements clearly describe their meaning to both the browser and developer.</p>
      
      <h2>Why Use Semantic Elements?</h2>
      <ul>
        <li>Better accessibility</li>
        <li>Improved SEO</li>
        <li>Easier to read and maintain</li>
        <li>Better structure</li>
      </ul>
      
      <h2>Common Semantic Elements</h2>
      <pre><code>&lt;header&gt;    &lt;!-- Page or section header --&gt;
&lt;nav&gt;       &lt;!-- Navigation links --&gt;
&lt;main&gt;      &lt;!-- Main content --&gt;
&lt;article&gt;   &lt;!-- Independent content --&gt;
&lt;section&gt;   &lt;!-- Thematic grouping --&gt;
&lt;aside&gt;     &lt;!-- Side content --&gt;
&lt;footer&gt;    &lt;!-- Page or section footer --&gt;
&lt;figure&gt;    &lt;!-- Self-contained content --&gt;
&lt;figcaption&gt;&lt;!-- Figure caption --&gt;
&lt;time&gt;      &lt;!-- Date/time --&gt;
&lt;mark&gt;      &lt;!-- Highlighted text --&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Semantic Layout Example',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        * { box-sizing: border-box; }
        body { font-family: Arial; margin: 0; }
        header, nav, main, article, aside, footer { padding: 20px; }
        header { background: #333; color: white; }
        nav { background: #444; }
        nav a { color: white; margin-right: 15px; }
        main { display: flex; }
        article { flex: 3; background: #f4f4f4; }
        aside { flex: 1; background: #e4e4e4; }
        footer { background: #333; color: white; text-align: center; }
    </style>
</head>
<body>
    <header>
        <h1>Website Header</h1>
    </header>
    
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    
    <main>
        <article>
            <h2>Main Article</h2>
            <p>This is the main content area.</p>
        </article>
        
        <aside>
            <h3>Sidebar</h3>
            <p>Additional information.</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Website Footer</p>
    </footer>
</body>
</html>`,
        explanation: 'Complete webpage using semantic HTML5 elements.'
      }
    ],
    resources: [
      { title: 'HTML Semantic Elements', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics' },
      { title: 'HTML5 Semantic Elements Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals' }
    ],
    prerequisites: ['html-forms'],
    nextTopics: ['html-media']
  },
  {
    id: 'html-media',
    title: 'HTML Media',
    icon: <Film />,
    difficulty: 'intermediate',
    estimatedTime: 20,
    category: 'html',
    order: 12,
    sections: [
      'Audio (<audio>)',
      'Video (<video>)',
      'Embedding Media',
      'Responsive Media'
    ],
    content: `
      <h1>HTML Media</h1>
      <p>HTML5 provides native support for audio and video without plugins.</p>
      
      <h2>Audio Element</h2>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  Your browser does not support audio.
&lt;/audio&gt;</code></pre>
      
      <h2>Video Element</h2>
      <pre><code>&lt;video width="320" height="240" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  Your browser does not support video.
&lt;/video&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Media Examples',
        code: `<!DOCTYPE html>
<html>
<head>
    <style>
        .media-container { margin: 20px 0; }
        video, audio { max-width: 100%; }
    </style>
</head>
<body>
    <h1>HTML Media Examples</h1>
    
    <div class="media-container">
        <h3>Audio Player</h3>
        <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
            Your browser does not support audio.
        </audio>
    </div>
    
    <div class="media-container">
        <h3>Video Player</h3>
        <video width="400" controls>
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
            Your browser does not support video.
        </video>
    </div>
</body>
</html>`,
        explanation: 'Demonstrates HTML5 audio and video elements.'
      }
    ],
    resources: [
      { title: 'HTML Media Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding' },
      { title: 'Video Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video' }
    ],
    prerequisites: ['html-semantic'],
    nextTopics: ['html-entities']
  },
  {
    id: 'html-entities',
    title: 'HTML Entities',
    icon: <Globe />,
    difficulty: 'beginner',
    estimatedTime: 10,
    category: 'html',
    order: 13,
    sections: [
      'What are HTML Entities?',
      'Common Entities',
      'Special Characters',
      'Emoji Support'
    ],
    content: `
      <h1>HTML Entities</h1>
      <p>Entities are used to display reserved characters in HTML.</p>
      
      <h2>Common HTML Entities</h2>
      <table>
        <tr><td>&lt;</td><td><code>&amp;lt;</code></td><td>Less than</td></tr>
        <tr><td>&gt;</td><td><code>&amp;gt;</code></td><td>Greater than</td></tr>
        <tr><td>&amp;</td><td><code>&amp;amp;</code></td><td>Ampersand</td></tr>
        <tr><td>&copy;</td><td><code>&amp;copy;</code></td><td>Copyright</td></tr>
        <tr><td>&reg;</td><td><code>&amp;reg;</code></td><td>Registered trademark</td></tr>
        <tr><td>&nbsp;</td><td><code>&amp;nbsp;</code></td><td>Non-breaking space</td></tr>
      </table>
    `,
    examples: [
      {
        title: 'Entities Example',
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>HTML Entities Examples</h1>
    
    <p>Copyright symbol: &copy; 2024</p>
    <p>Less than: &lt; Greater than: &gt;</p>
    <p>Ampersand: &amp;</p>
    <p>Registered: &reg; Trademark: &trade;</p>
    <p>Non-breaking space: Hello&nbsp;World</p>
    <p>Currency: &euro; &pound; &yen;</p>
</body>
</html>`,
        explanation: 'Shows various HTML entities and special characters.'
      }
    ],
    resources: [
      { title: 'HTML Entities Reference', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Entity' },
      { title: 'Complete Entity List', url: 'https://html.spec.whatwg.org/multipage/named-characters.html' }
    ],
    prerequisites: ['html-media'],
    nextTopics: ['html-accessibility']
  },
  {
    id: 'html-accessibility',
    title: 'HTML Accessibility',
    icon: <Eye />,
    difficulty: 'intermediate',
    estimatedTime: 20,
    category: 'html',
    order: 14,
    sections: [
      'What is Accessibility?',
      'ARIA Attributes',
      'Alt Text',
      'Semantic HTML',
      'Keyboard Navigation'
    ],
    content: `
      <h1>HTML Accessibility</h1>
      <p>Making web content accessible to people with disabilities.</p>
      
      <h2>Key Accessibility Practices</h2>
      <ul>
        <li>Use semantic HTML</li>
        <li>Add alt text to images</li>
        <li>Ensure keyboard navigation</li>
        <li>Use proper color contrast</li>
        <li>Add ARIA attributes when needed</li>
      </ul>
      
      <h2>ARIA Attributes</h2>
      <pre><code>&lt;button aria-label="Close menu"&gt;X&lt;/button&gt;
&lt;div role="navigation" aria-label="Main navigation"&gt;
  &lt;!-- navigation content --&gt;
&lt;/div&gt;</code></pre>
    `,
    examples: [
      {
        title: 'Accessible Form Example',
        code: `<!DOCTYPE html>
<html>
<body>
    <h1>Accessible Form</h1>
    
    <form aria-labelledby="form-title">
        <h2 id="form-title">Contact Information</h2>
        
        <div>
            <label for="name">Full Name:</label>
            <input type="text" id="name" aria-required="true">
            <span aria-live="polite" id="name-error"></span>
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" aria-describedby="email-help">
            <p id="email-help" class="help-text">We'll never share your email</p>
        </div>
        
        <button type="submit" aria-label="Submit contact form">
            Submit
        </button>
    </form>
</body>
</html>`,
        explanation: 'Shows accessibility features in an HTML form.'
      }
    ],
    resources: [
      { title: 'Web Accessibility Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility' },
      { title: 'ARIA Documentation', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA' }
    ],
    prerequisites: ['html-entities'],
    nextTopics: ['html-best-practices']
  },
  {
    id: 'html-best-practices',
    title: 'HTML Best Practices',
    icon: <CheckCircle />,
    difficulty: 'intermediate',
    estimatedTime: 15,
    category: 'html',
    order: 15,
    sections: [
      'Clean Code',
      'Performance',
      'SEO',
      'Validation',
      'Maintainability'
    ],
    content: `
      <h1>HTML Best Practices</h1>
      <p>Follow these guidelines to write better HTML code.</p>
      
      <h2>1. Use Semantic HTML</h2>
      <pre><code>&lt;!-- Good --&gt;
&lt;nav&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
&lt;/nav&gt;

&lt;!-- Bad --&gt;
&lt;div class="nav"&gt;
  &lt;a href="#"&gt;Home&lt;/a&gt;
&lt;/div&gt;</code></pre>
      
      <h2>2. Always Include Alt Text</h2>
      <pre><code>&lt;img src="logo.png" alt="Company Logo"&gt;</code></pre>
      
      <h2>3. Validate Your HTML</h2>
      <p>Use the W3C Validator: https://validator.w3.org/</p>
      
      <h2>4. Optimize Performance</h2>
      <ul>
        <li>Minify HTML</li>
        <li>Use responsive images</li>
        <li>Load scripts asynchronously</li>
      </ul>
    `,
    examples: [
      {
        title: 'Good vs Bad HTML',
        code: `<!DOCTYPE html>
<html>
<body>
    <!-- GOOD PRACTICES -->
    
    <!-- Semantic elements -->
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Proper image with alt text -->
    <img src="image.jpg" 
         alt="Description of image" 
         width="300" 
         height="200">
    
    <!-- Descriptive links -->
    <a href="/about" aria-label="Learn more about us">
        Learn More
    </a>
    
    <!-- Proper form labels -->
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </form>
</body>
</html>`,
        explanation: 'Shows examples of good HTML coding practices.'
      }
    ],
    resources: [
      { title: 'HTML Style Guide', url: 'https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML' },
      { title: 'Web Development Best Practices', url: 'https://web.dev/learn/html/' }
    ],
    prerequisites: ['html-accessibility'],
    nextTopics: ['html-interview']
  },
  {
    id: 'html-interview',
    title: 'HTML Interview Questions',
    icon: <HelpCircle />,
    difficulty: 'advanced',
    estimatedTime: 25,
    category: 'html',
    order: 16,
    sections: [
      'Common Questions',
      'Advanced Concepts',
      'Practical Scenarios',
      'Problem Solving'
    ],
    content: `
      <h1>HTML Interview Questions</h1>
      <p>Prepare for HTML interviews with these common questions.</p>
      
      <h2>Basic Questions</h2>
      
      <div class="interview-question">
        <h3>1. What is the purpose of DOCTYPE?</h3>
        <p><strong>Answer:</strong> DOCTYPE tells the browser which version of HTML the document is using. It helps the browser render the page correctly.</p>
      </div>
      
      <div class="interview-question">
        <h3>2. What's the difference between &lt;div&gt; and &lt;span&gt;?</h3>
        <p><strong>Answer:</strong> &lt;div&gt; is a block-level element used for grouping content, while &lt;span&gt; is an inline element used for styling text within content.</p>
      </div>
      
      <h2>Advanced Questions</h2>
      
      <div class="interview-question">
        <h3>3. Explain HTML5 semantic elements.</h3>
        <p><strong>Answer:</strong> Semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, and &lt;footer&gt; clearly describe their meaning, improving accessibility and SEO.</p>
      </div>
      
      <div class="interview-question">
        <h3>4. What are data-* attributes?</h3>
        <p><strong>Answer:</strong> Custom data attributes that store extra information without affecting presentation or behavior. They can be accessed via JavaScript using the dataset property.</p>
      </div>
    `,
    examples: [
      {
        title: 'Practical Interview Task',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Create a Responsive Card</title>
    <style>
        .card {
            max-width: 300px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin: 16px;
        }
        .card img {
            width: 100%;
            border-radius: 4px;
        }
        @media (max-width: 600px) {
            .card {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Product Image">
        <h3>Product Name</h3>
        <p>Product description goes here.</p>
        <button>Add to Cart</button>
    </div>
</body>
</html>`,
        explanation: 'Example of creating a responsive card component - a common interview task.'
      }
    ],
    resources: [
      { title: 'HTML Interview Questions', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
      { title: 'Web Developer Interview Guide', url: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions' }
    ],
    prerequisites: ['html-best-practices'],
    nextTopics: []
  }
];

// Additional helper data
export const htmlTopics = htmlNotesData.map(note => ({
  id: note.id,
  title: note.title,
  icon: note.icon,
  sections: note.sections || []
}));

export const htmlStats = {
  totalTopics: htmlNotesData.length,
  completedTopics: 1,
  estimatedTime: 300,
  difficulty: 'beginner to advanced'
};

// Helper functions
export const getHTMLTopicById = (id) => {
  return htmlNotesData.find(topic => topic.id === id);
};

export const getNextHTMLTopic = (currentId) => {
  const currentIndex = htmlNotesData.findIndex(topic => topic.id === currentId);
  return htmlNotesData[currentIndex + 1] || null;
};

export const getPrevHTMLTopic = (currentId) => {
  const currentIndex = htmlNotesData.findIndex(topic => topic.id === currentId);
  return htmlNotesData[currentIndex - 1] || null;
};