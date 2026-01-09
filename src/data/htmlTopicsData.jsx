// export const htmlTopicsData = [
//   {
//     id: 'html-introduction',
//     title: 'Introduction to HTML',
//     difficulty: 'beginner',
//     estimatedTime: 15,
//     description: 'Learn what HTML is, its history, and its role in web development',
//     sections: [
//       'What is HTML?',
//       'History of HTML',
//       'HTML vs HTML5',
//       'HTML Document Structure',
//       'Basic HTML Tags'
//     ],
//     content: `
//       <div class="topic-content">
//         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Introduction to HTML</h1>
        
//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">What is HTML?</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             <strong class="text-gray-900 dark:text-white">HTML (HyperText Markup Language)</strong> is the standard markup language for creating web pages. 
//             It describes the structure of web pages using markup.
//           </p>
//           <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
//             <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Key Points:</h3>
//             <ul class="list-disc pl-5 text-blue-700 dark:text-blue-300 space-y-2">
//               <li>HTML is <strong>NOT</strong> a programming language</li>
//               <li>It's a markup language for creating web page structure</li>
//               <li>HTML elements are the building blocks of HTML pages</li>
//               <li>HTML tags label pieces of content</li>
//             </ul>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">HTML Versions Timeline</h2>
//           <div class="overflow-x-auto">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Year</th>
//                   <th class="px-4 py-2 text-left font-bold">Version</th>
//                   <th class="px-4 py-2 text-left font-bold">Features</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">1991</td>
//                   <td class="px-4 py-2">HTML 1.0</td>
//                   <td class="px-4 py-2">Basic text formatting, links</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">1995</td>
//                   <td class="px-4 py-2">HTML 2.0</td>
//                   <td class="px-4 py-2">Tables, forms</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">1997</td>
//                   <td class="px-4 py-2">HTML 3.2</td>
//                   <td class="px-4 py-2">CSS support, JavaScript</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">1999</td>
//                   <td class="px-4 py-2">HTML 4.01</td>
//                   <td class="px-4 py-2">Strict, Transitional, Frameset</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">2014</td>
//                   <td class="px-4 py-2">HTML5</td>
//                   <td class="px-4 py-2">Semantic elements, multimedia</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Basic HTML Document Structure</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Every HTML document has a specific structure that browsers understand:
//           </p>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;!DOCTYPE html&gt;
// &lt;html lang="en"&gt;
// &lt;head&gt;
//     &lt;meta charset="UTF-8"&gt;
//     &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
//     &lt;title&gt;Document Title&lt;/title&gt;
// &lt;/head&gt;
// &lt;body&gt;
//     &lt;!-- Content goes here --&gt;
// &lt;/body&gt;
// &lt;/html&gt;</code></pre>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">HTML Tags vs Elements</h2>
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">HTML Tags</h3>
//               <p class="text-green-700 dark:text-green-300">
//                 Tags are the keywords surrounded by angle brackets <code class="bg-gray-200 dark:bg-gray-700 px-1">&lt;&gt;</code>
//               </p>
//               <pre class="text-sm mt-2"><code>&lt;tagname&gt;Content&lt;/tagname&gt;</code></pre>
//             </div>
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2">HTML Elements</h3>
//               <p class="text-purple-700 dark:text-purple-300">
//                 An element consists of opening tag, content, and closing tag
//               </p>
//               <pre class="text-sm mt-2"><code>&lt;p&gt;This is a paragraph&lt;/p&gt;</code></pre>
//             </div>
//           </div>
//         </div>

//         <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8">
//           <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">💡 Important Note:</h3>
//           <p class="text-yellow-700 dark:text-yellow-300">
//             HTML is the skeleton of a webpage. CSS provides the styling, and JavaScript adds interactivity.
//             Together they form the core technologies of the World Wide Web.
//           </p>
//         </div>
//       </div>
//     `,
//     examples: [
//       {
//         title: 'Your First HTML Page',
//         code: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My First Web Page</title>
// </head>
// <body>
//     <h1>Welcome to HTML!</h1>
//     <p>This is my first HTML page.</p>
//     <p>HTML is easy to learn!</p>
// </body>
// </html>`,
//         explanation: 'This is the basic structure of every HTML document. Copy this code into a .html file and open it in your browser.'
//       }
//     ],
//     practiceQuestions: [
//       {
//         question: 'What does HTML stand for?',
//         options: [
//           'Hyper Text Markup Language',
//           'High Tech Modern Language',
//           'Hyper Transfer Markup Language',
//           'Home Tool Markup Language'
//         ],
//         answer: 'Hyper Text Markup Language'
//       },
//       {
//         question: 'Which HTML tag is used for the largest heading?',
//         options: ['<h6>', '<heading>', '<h1>', '<head>'],
//         answer: '<h1>'
//       }
//     ]
//   },
//   {
//     id: 'html-basic-tags',
//     title: 'Basic HTML Tags',
//     difficulty: 'beginner',
//     estimatedTime: 20,
//     description: 'Learn essential HTML tags for text formatting and content structure',
//     sections: [
//       'Headings (h1-h6)',
//       'Paragraphs (p)',
//       'Line Breaks (br)',
//       'Horizontal Rule (hr)',
//       'Text Formatting'
//     ],
//     content: `
//       <div class="topic-content">
//         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Basic HTML Tags</h1>
        
//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Headings (h1 to h6)</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             HTML headings are defined with the <code class="bg-gray-200 dark:bg-gray-700 px-1">&lt;h1&gt;</code> to <code class="bg-gray-200 dark:bg-gray-700 px-1">&lt;h6&gt;</code> tags.
//           </p>
//           <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
//             <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Heading Hierarchy:</h3>
//             <div class="space-y-2">
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h1&gt;</code>
//                 <span class="text-lg font-bold">Main Title (Most Important)</span>
//               </div>
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h2&gt;</code>
//                 <span class="text-md font-semibold">Section Headings</span>
//               </div>
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h3&gt;</code>
//                 <span class="text-md font-medium">Sub-sections</span>
//               </div>
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h4&gt;</code>
//                 <span class="text-sm">Further subdivisions</span>
//               </div>
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h5&gt;</code>
//                 <span class="text-sm">Minor headings</span>
//               </div>
//               <div class="flex items-center">
//                 <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mr-2">&lt;h6&gt;</code>
//                 <span class="text-xs">Least important headings</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Paragraphs & Line Breaks</h2>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">&lt;p&gt; Tag</h3>
//               <p class="text-green-700 dark:text-green-300 mb-2">
//                 Used for paragraphs of text:
//               </p>
//               <pre class="text-sm"><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
// &lt;p&gt;This is another paragraph.&lt;/p&gt;</code></pre>
//             </div>
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2">&lt;br&gt; Tag</h3>
//               <p class="text-purple-700 dark:text-purple-300 mb-2">
//                 Creates a line break (self-closing):
//               </p>
//               <pre class="text-sm"><code>First line&lt;br&gt;
// Second line&lt;br&gt;
// Third line</code></pre>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Text Formatting Tags</h2>
          
//           <div class="overflow-x-auto">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Tag</th>
//                   <th class="px-4 py-2 text-left font-bold">Description</th>
//                   <th class="px-4 py-2 text-left font-bold">Example</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;b&gt;</code></td>
//                   <td class="px-4 py-2">Bold text</td>
//                   <td class="px-4 py-2"><code>&lt;b&gt;Bold&lt;/b&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;strong&gt;</code></td>
//                   <td class="px-4 py-2">Important text (semantic)</td>
//                   <td class="px-4 py-2"><code>&lt;strong&gt;Important&lt;/strong&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;i&gt;</code></td>
//                   <td class="px-4 py-2">Italic text</td>
//                   <td class="px-4 py-2"><code>&lt;i&gt;Italic&lt;/i&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;em&gt;</code></td>
//                   <td class="px-4 py-2">Emphasized text (semantic)</td>
//                   <td class="px-4 py-2"><code>&lt;em&gt;Emphasized&lt;/em&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;u&gt;</code></td>
//                   <td class="px-4 py-2">Underlined text</td>
//                   <td class="px-4 py-2"><code>&lt;u&gt;Underlined&lt;/u&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;mark&gt;</code></td>
//                   <td class="px-4 py-2">Marked/highlighted text</td>
//                   <td class="px-4 py-2"><code>&lt;mark&gt;Highlighted&lt;/mark&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;small&gt;</code></td>
//                   <td class="px-4 py-2">Smaller text</td>
//                   <td class="px-4 py-2"><code>&lt;small&gt;Small&lt;/small&gt;</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;sub&gt;</code></td>
//                   <td class="px-4 py-2">Subscript text</td>
//                   <td class="px-4 py-2"><code>H&lt;sub&gt;2&lt;/sub&gt;O</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>&lt;sup&gt;</code></td>
//                   <td class="px-4 py-2">Superscript text</td>
//                   <td class="px-4 py-2"><code>10&lt;sup&gt;2&lt;/sup&gt;</code></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Horizontal Rule</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             The <code class="bg-gray-200 dark:bg-gray-700 px-1">&lt;hr&gt;</code> tag creates a thematic break or horizontal line:
//           </p>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;p&gt;First section&lt;/p&gt;
// &lt;hr&gt;
// &lt;p&gt;Second section&lt;/p&gt;</code></pre>
//           </div>
//         </div>

//         <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8">
//           <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">🎯 Best Practice:</h3>
//           <p class="text-yellow-700 dark:text-yellow-300">
//             Use semantic tags (<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>) instead of presentation tags 
//             (<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>) when possible. Semantic tags provide meaning to 
//             both browsers and screen readers.
//           </p>
//         </div>
//       </div>
//     `,
//     examples: [
//       {
//         title: 'Complete Text Formatting Example',
//         code: `<!DOCTYPE html>
// <html>
// <body>
//     <h1>Main Heading</h1>
//     <h2>Sub Heading</h2>
    
//     <p>This is a <strong>paragraph</strong> with <em>formatted</em> text.</p>
    
//     <p>Here's some math: 10<sup>2</sup> = 100 and H<sub>2</sub>O is water.</p>
    
//     <hr>
    
//     <p>This text contains <mark>highlighted content</mark> and <small>small text</small>.</p>
    
//     <p>Line 1<br>Line 2<br>Line 3</p>
// </body>
// </html>`,
//         explanation: 'This example demonstrates all basic text formatting tags in HTML.'
//       }
//     ],
//     practiceQuestions: [
//       {
//         question: 'Which tag creates the most important heading?',
//         options: ['<h6>', '<heading>', '<h1>', '<title>'],
//         answer: '<h1>'
//       },
//       {
//         question: 'What is the difference between <b> and <strong> tags?',
//         options: [
//           '<b> is for bold, <strong> is semantic importance',
//           'No difference',
//           '<strong> is deprecated',
//           '<b> is semantic'
//         ],
//         answer: '<b> is for bold, <strong> is semantic importance'
//       }
//     ]
//   },
//   {
//     id: 'html-lists',
//     title: 'HTML Lists',
//     difficulty: 'beginner',
//     estimatedTime: 15,
//     description: 'Learn ordered, unordered, and description lists in HTML',
//     sections: [
//       'Unordered Lists (ul)',
//       'Ordered Lists (ol)',
//       'List Items (li)',
//       'Description Lists (dl)',
//       'Nested Lists'
//     ],
//     content: `
//       <div class="topic-content">
//         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">HTML Lists</h1>
        
//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Types of HTML Lists</h2>
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">Unordered List</h3>
//               <p class="text-green-700 dark:text-green-300">
//                 Bulleted list using <code>&lt;ul&gt;</code> tag
//               </p>
//             </div>
//             <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Ordered List</h3>
//               <p class="text-blue-700 dark:text-blue-300">
//                 Numbered list using <code>&lt;ol&gt;</code> tag
//               </p>
//             </div>
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Description List</h3>
//               <p class="text-purple-700 dark:text-purple-300">
//                 Term-description pairs using <code>&lt;dl&gt;</code> tag
//               </p>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">1. Unordered Lists (ul)</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Creates a bulleted list. Each item must be wrapped in <code>&lt;li&gt;</code> tags.
//           </p>
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//               <h3 class="font-bold mb-2">HTML Code:</h3>
//               <pre class="text-sm"><code>&lt;ul&gt;
//   &lt;li&gt;Coffee&lt;/li&gt;
//   &lt;li&gt;Tea&lt;/li&gt;
//   &lt;li&gt;Milk&lt;/li&gt;
// &lt;/ul&gt;</code></pre>
//             </div>
//             <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 class="font-bold mb-2">Output:</h3>
//               <ul class="list-disc pl-5">
//                 <li>Coffee</li>
//                 <li>Tea</li>
//                 <li>Milk</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">2. Ordered Lists (ol)</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Creates a numbered list. Supports different numbering types.
//           </p>
//           <div class="overflow-x-auto mb-4">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Type</th>
//                   <th class="px-4 py-2 text-left font-bold">Description</th>
//                   <th class="px-4 py-2 text-left font-bold">Example</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>type="1"</code></td>
//                   <td class="px-4 py-2">Numbers (default)</td>
//                   <td class="px-4 py-2">1, 2, 3...</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>type="A"</code></td>
//                   <td class="px-4 py-2">Uppercase letters</td>
//                   <td class="px-4 py-2">A, B, C...</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>type="a"</code></td>
//                   <td class="px-4 py-2">Lowercase letters</td>
//                   <td class="px-4 py-2">a, b, c...</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>type="I"</code></td>
//                   <td class="px-4 py-2">Roman numerals (uppercase)</td>
//                   <td class="px-4 py-2">I, II, III...</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>type="i"</code></td>
//                   <td class="px-4 py-2">Roman numerals (lowercase)</td>
//                   <td class="px-4 py-2">i, ii, iii...</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
          
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;ol type="A"&gt;
//   &lt;li&gt;First item&lt;/li&gt;
//   &lt;li&gt;Second item&lt;/li&gt;
//   &lt;li&gt;Third item&lt;/li&gt;
// &lt;/ol&gt;</code></pre>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">3. Description Lists (dl)</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Used for terms and their descriptions. Consists of:
//           </p>
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2"><code>&lt;dl&gt;</code></h3>
//               <p class="text-green-700 dark:text-green-300">Description list container</p>
//             </div>
//             <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2"><code>&lt;dt&gt;</code></h3>
//               <p class="text-blue-700 dark:text-blue-300">Term/name being described</p>
//             </div>
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2"><code>&lt;dd&gt;</code></h3>
//               <p class="text-purple-700 dark:text-purple-300">Description of the term</p>
//             </div>
//           </div>
          
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;dl&gt;
//   &lt;dt&gt;Coffee&lt;/dt&gt;
//   &lt;dd&gt;- Black hot drink&lt;/dd&gt;
  
//   &lt;dt&gt;Milk&lt;/dt&gt;
//   &lt;dd&gt;- White cold drink&lt;/dd&gt;
// &lt;/dl&gt;</code></pre>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">4. Nested Lists</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             You can nest lists inside other lists:
//           </p>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;ul&gt;
//   &lt;li&gt;Programming Languages
//     &lt;ul&gt;
//       &lt;li&gt;JavaScript&lt;/li&gt;
//       &lt;li&gt;Python&lt;/li&gt;
//       &lt;li&gt;Java&lt;/li&gt;
//     &lt;/ul&gt;
//   &lt;/li&gt;
//   &lt;li&gt;Frameworks
//     &lt;ol&gt;
//       &lt;li&gt;React&lt;/li&gt;
//       &lt;li&gt;Vue&lt;/li&gt;
//       &lt;li&gt;Angular&lt;/li&gt;
//     &lt;/ol&gt;
//   &lt;/li&gt;
// &lt;/ul&gt;</code></pre>
//           </div>
//         </div>

//         <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8">
//           <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">💡 Pro Tip:</h3>
//           <p class="text-yellow-700 dark:text-yellow-300">
//             Always properly nest lists. Each <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> 
//             must contain only <code>&lt;li&gt;</code> elements. The <code>&lt;li&gt;</code> 
//             elements can contain other lists for nesting.
//           </p>
//         </div>
//       </div>
//     `,
//     examples: [
//       {
//         title: 'Complete List Examples',
//         code: `<!DOCTYPE html>
// <html>
// <body>
//     <h2>Unordered List (Shopping List)</h2>
//     <ul>
//         <li>Milk</li>
//         <li>Bread</li>
//         <li>Eggs</li>
//         <li>Cheese</li>
//     </ul>

//     <h2>Ordered List (Steps to Make Coffee)</h2>
//     <ol type="1">
//         <li>Boil water</li>
//         <li>Add coffee powder</li>
//         <li>Add sugar</li>
//         <li>Add milk</li>
//         <li>Mix well</li>
//     </ol>

//     <h2>Description List (Web Technologies)</h2>
//     <dl>
//         <dt>HTML</dt>
//         <dd>Structure of web pages</dd>
        
//         <dt>CSS</dt>
//         <dd>Styling of web pages</dd>
        
//         <dt>JavaScript</dt>
//         <dd>Behavior of web pages</dd>
//     </dl>

//     <h2>Nested List (Course Curriculum)</h2>
//     <ul>
//         <li>Web Development
//             <ul>
//                 <li>Frontend
//                     <ol>
//                         <li>HTML</li>
//                         <li>CSS</li>
//                         <li>JavaScript</li>
//                     </ol>
//                 </li>
//                 <li>Backend
//                     <ol type="a">
//                         <li>Node.js</li>
//                         <li>Express.js</li>
//                         <li>MongoDB</li>
//                     </ol>
//                 </li>
//             </ul>
//         </li>
//         <li>Mobile Development
//             <ul>
//                 <li>React Native</li>
//                 <li>Flutter</li>
//             </ul>
//         </li>
//     </ul>
// </body>
// </html>`,
//         explanation: 'This example demonstrates all types of HTML lists and their combinations.'
//       }
//     ],
//     practiceQuestions: [
//       {
//         question: 'Which tag creates a bulleted list?',
//         options: ['<ol>', '<ul>', '<li>', '<list>'],
//         answer: '<ul>'
//       },
//       {
//         question: 'How do you create a description list with terms and definitions?',
//         options: [
//           'Use <dl> with <dt> for terms and <dd> for definitions',
//           'Use <ul> with <li>',
//           'Use <ol> with <li>',
//           'Use <list> with <item>'
//         ],
//         answer: 'Use <dl> with <dt> for terms and <dd> for definitions'
//       }
//     ]
//   },
//   {
//     id: 'html-links',
//     title: 'HTML Links & Anchors',
//     difficulty: 'beginner',
//     estimatedTime: 20,
//     description: 'Learn how to create hyperlinks and navigate between pages',
//     sections: [
//       'Anchor Tag (a)',
//       'href Attribute',
//       'Target Attribute',
//       'Link Types',
//       'Bookmarks',
//       'Email Links'
//     ],
//     content: `
//       <div class="topic-content">
//         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">HTML Links & Anchors</h1>
        
//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Introduction to Links</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Links are the essence of the web - they connect web pages together. The 
//             <code>&lt;a&gt;</code> tag (anchor tag) defines a hyperlink.
//           </p>
//           <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//             <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Basic Link Syntax:</h3>
//             <pre class="text-sm"><code>&lt;a href="url"&gt;link text&lt;/a&gt;</code></pre>
//             <p class="text-blue-700 dark:text-blue-300 mt-2">
//               The <code>href</code> attribute specifies the destination address.
//             </p>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">1. Basic Link Types</h2>
//           <div class="overflow-x-auto mb-4">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Link Type</th>
//                   <th class="px-4 py-2 text-left font-bold">Example</th>
//                   <th class="px-4 py-2 text-left font-bold">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">External Link</td>
//                   <td class="px-4 py-2"><code>&lt;a href="https://google.com"&gt;</code></td>
//                   <td class="px-4 py-2">Links to another website</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">Internal Link</td>
//                   <td class="px-4 py-2"><code>&lt;a href="about.html"&gt;</code></td>
//                   <td class="px-4 py-2">Links within same website</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">Same Page Link</td>
//                   <td class="px-4 py-2"><code>&lt;a href="#section1"&gt;</code></td>
//                   <td class="px-4 py-2">Links to section on same page</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">Email Link</td>
//                   <td class="px-4 py-2"><code>&lt;a href="mailto:email@example.com"&gt;</code></td>
//                   <td class="px-4 py-2">Opens email client</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">Phone Link</td>
//                   <td class="px-4 py-2"><code>&lt;a href="tel:+1234567890"&gt;</code></td>
//                   <td class="px-4 py-2">Calls phone number</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">2. Target Attribute</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             The <code>target</code> attribute specifies where to open the linked document:
//           </p>
//           <div class="overflow-x-auto">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Value</th>
//                   <th class="px-4 py-2 text-left font-bold">Description</th>
//                   <th class="px-4 py-2 text-left font-bold">Example</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>_self</code></td>
//                   <td class="px-4 py-2">Opens in same tab/window (default)</td>
//                   <td class="px-4 py-2"><code>target="_self"</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>_blank</code></td>
//                   <td class="px-4 py-2">Opens in new tab/window</td>
//                   <td class="px-4 py-2"><code>target="_blank"</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>_parent</code></td>
//                   <td class="px-4 py-2">Opens in parent frame</td>
//                   <td class="px-4 py-2"><code>target="_parent"</code></td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2"><code>_top</code></td>
//                   <td class="px-4 py-2">Opens in full body of window</td>
//                   <td class="px-4 py-2"><code>target="_top"</code></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">3. Creating Bookmarks</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             You can create links that jump to specific parts of a page:
//           </p>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">Step 1: Create Anchor</h3>
//               <p class="text-green-700 dark:text-green-300 mb-2">
//                 Add an <code>id</code> attribute to the element:
//               </p>
//               <pre class="text-sm"><code>&lt;h2 id="chapter1"&gt;Chapter 1&lt;/h2&gt;</code></pre>
//             </div>
//             <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Step 2: Create Link</h3>
//               <p class="text-blue-700 dark:text-blue-300 mb-2">
//                 Link to the anchor using <code>#id</code>:
//               </p>
//               <pre class="text-sm"><code>&lt;a href="#chapter1"&gt;Go to Chapter 1&lt;/a&gt;</code></pre>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">4. Special Link Types</h2>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Email Links</h3>
//               <p class="text-purple-700 dark:text-purple-300 mb-2">
//                 Opens default email client:
//               </p>
//               <pre class="text-sm"><code>&lt;a href="mailto:someone@example.com"&gt;
//   Send Email
// &lt;/a&gt;</code></pre>
//               <p class="text-sm text-purple-600 dark:text-purple-400 mt-2">
//                 You can add subject, body, cc, bcc:
//               </p>
//               <pre class="text-sm mt-1"><code>&lt;a href="mailto:email@example.com?
//   subject=Hello&amp;
//   body=Message here"&gt;
//   Email with subject
// &lt;/a&gt;</code></pre>
//             </div>
//             <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Phone Links</h3>
//               <p class="text-yellow-700 dark:text-yellow-300 mb-2">
//                 Opens phone dialer on mobile:
//               </p>
//               <pre class="text-sm"><code>&lt;a href="tel:+1234567890"&gt;
//   Call Us
// &lt;/a&gt;</code></pre>
//               <p class="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
//                 Use international format with country code.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">5. Link Best Practices</h2>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <ul class="list-disc pl-5 space-y-2">
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Use descriptive link text:</strong> Avoid "click here"
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Add title attribute:</strong> For accessibility
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Use rel="nofollow"</strong> for untrusted links
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>External links:</strong> Open in new tab (<code>target="_blank"</code>)
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Internal links:</strong> Keep in same tab
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8">
//           <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Security Tip:</h3>
//           <p class="text-yellow-700 dark:text-yellow-300">
//             When using <code>target="_blank"</code>, add <code>rel="noopener noreferrer"</code> 
//             to prevent security vulnerabilities:
//             <pre class="text-sm mt-2 bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded"><code>&lt;a href="https://example.com" 
//    target="_blank"
//    rel="noopener noreferrer"&gt;
//   Safe External Link
// &lt;/a&gt;</code></pre>
//           </p>
//         </div>
//       </div>
//     `,
//     examples: [
//       {
//         title: 'Complete Link Examples',
//         code: `<!DOCTYPE html>
// <html>
// <head>
//     <title>HTML Links Examples</title>
// </head>
// <body>
//     <h1>HTML Links Demonstration</h1>

//     <!-- Navigation Menu -->
//     <nav>
//         <h2>Navigation</h2>
//         <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>
//     </nav>

//     <!-- External Links -->
//     <section>
//         <h2>External Resources</h2>
//         <p>
//             <a href="https://developer.mozilla.org" 
//                target="_blank" 
//                rel="noopener noreferrer"
//                title="Visit MDN Web Docs">
//                 MDN Web Docs
//             </a>
//         </p>
//         <p>
//             <a href="https://www.w3schools.com" 
//                target="_blank" 
//                rel="noopener noreferrer">
//                 W3Schools Tutorials
//             </a>
//         </p>
//     </section>

//     <!-- Email and Phone Links -->
//     <section>
//         <h2>Contact Information</h2>
//         <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
//         <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        
//         <!-- Email with subject and body -->
//         <p>
//             <a href="mailto:info@example.com?
//                 subject=Website%20Inquiry&
//                 body=Hello%2C%20I%20have%20a%20question">
//                 Send us an email with pre-filled subject
//             </a>
//         </p>
//     </section>

//     <!-- Page Bookmarks -->
//     <section>
//         <h2>Table of Contents</h2>
//         <ul>
//             <li><a href="#chapter1">Go to Chapter 1</a></li>
//             <li><a href="#chapter2">Go to Chapter 2</a></li>
//             <li><a href="#chapter3">Go to Chapter 3</a></li>
//         </ul>
//     </section>

//     <!-- Bookmarked Sections -->
//     <section style="margin-top: 500px; padding: 20px;">
//         <h2 id="chapter1">Chapter 1: HTML Basics</h2>
//         <p>Content for chapter 1...</p>
//         <a href="#top">Back to Top</a>
//     </section>

//     <section style="margin-top: 500px; padding: 20px;">
//         <h2 id="chapter2">Chapter 2: CSS Styling</h2>
//         <p>Content for chapter 2...</p>
//         <a href="#top">Back to Top</a>
//     </section>

//     <section style="margin-top: 500px; padding: 20px;">
//         <h2 id="chapter3">Chapter 3: JavaScript</h2>
//         <p>Content for chapter 3...</p>
//         <a href="#top">Back to Top</a>
//     </section>

//     <!-- Download Link -->
//     <section>
//         <h2>Downloads</h2>
//         <p>
//             <a href="/files/document.pdf" download>
//                 Download PDF Document
//             </a>
//         </p>
//     </section>

//     <!-- Image Link -->
//     <section>
//         <h2>Image as Link</h2>
//         <a href="https://example.com">
//             <img src="logo.png" alt="Company Logo" width="100">
//         </a>
//     </section>

//     <!-- Button Link -->
//     <section>
//         <h2>Button Style Link</h2>
//         <a href="https://example.com" 
//            style="display: inline-block; 
//                   padding: 10px 20px; 
//                   background: blue; 
//                   color: white; 
//                   text-decoration: none;
//                   border-radius: 5px;">
//             Click Me
//         </a>
//     </section>
// </body>
// </html>`,
//         explanation: 'This comprehensive example shows all types of HTML links with proper attributes and best practices.'
//       }
//     ],
//     practiceQuestions: [
//       {
//         question: 'Which attribute specifies the URL in a link?',
//         options: ['src', 'href', 'link', 'url'],
//         answer: 'href'
//       },
//       {
//         question: 'How do you make a link open in a new tab?',
//         options: [
//           'target="_blank"',
//           'target="_new"',
//           'newtab="true"',
//           'open="new"'
//         ],
//         answer: 'target="_blank"'
//       },
//       {
//         question: 'What is the correct way to create an email link?',
//         options: [
//           '<a href="mailto:email@example.com">',
//           '<a email="email@example.com">',
//           '<a href="email:email@example.com">',
//           '<a link="email@example.com">'
//         ],
//         answer: '<a href="mailto:email@example.com">'
//       }
//     ]
//   },
//   {
//     id: 'html-images',
//     title: 'HTML Images',
//     difficulty: 'beginner',
//     estimatedTime: 15,
//     description: 'Learn how to add and optimize images in HTML',
//     sections: [
//       'img Tag',
//       'src Attribute',
//       'alt Attribute',
//       'Width & Height',
//       'Image Formats',
//       'Responsive Images'
//     ],
//     content: `
//       <div class="topic-content">
//         <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">HTML Images</h1>
        
//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Introduction to Images in HTML</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Images make web pages visually appealing and engaging. The 
//             <code>&lt;img&gt;</code> tag is used to embed images in HTML pages.
//           </p>
//           <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//             <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Basic Image Syntax:</h3>
//             <pre class="text-sm"><code>&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
//             <p class="text-blue-700 dark:text-blue-300 mt-2">
//               The <code>&lt;img&gt;</code> tag is empty (has no closing tag) and contains attributes only.
//             </p>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">1. Essential Image Attributes</h2>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">src (Source)</h3>
//               <p class="text-green-700 dark:text-green-300 mb-2">
//                 Specifies the path to the image:
//               </p>
//               <pre class="text-sm"><code>src="images/photo.jpg"
// src="/assets/logo.png"
// src="https://example.com/image.jpg"</code></pre>
//               <p class="text-sm text-green-600 dark:text-green-400 mt-2">
//                 Can be relative, absolute, or full URL.
//               </p>
//             </div>
//             <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-red-800 dark:text-red-300 mb-2">alt (Alternative Text)</h3>
//               <p class="text-red-700 dark:text-red-300 mb-2">
//                 Required for accessibility and SEO:
//               </p>
//               <pre class="text-sm"><code>alt="A beautiful sunset over mountains"
// alt="Company logo"
// alt=""  <!-- For decorative images --></code></pre>
//               <p class="text-sm text-red-600 dark:text-red-400 mt-2">
//                 Screen readers read this text to visually impaired users.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">2. Image Dimensions</h2>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-purple-800 dark:text-purple-300 mb-2">width & height</h3>
//               <p class="text-purple-700 dark:text-purple-300 mb-2">
//                 Control image dimensions (in pixels):
//               </p>
//               <pre class="text-sm"><code>&lt;img src="photo.jpg" 
//      alt="Photo" 
//      width="300" 
//      height="200"&gt;</code></pre>
//               <div class="mt-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
//                 <p class="text-sm text-purple-800 dark:text-purple-300">
//                   <strong>Tip:</strong> Always specify both width and height to prevent layout shifts.
//                 </p>
//               </div>
//             </div>
//             <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">CSS Styling</h3>
//               <p class="text-yellow-700 dark:text-yellow-300 mb-2">
//                 Control dimensions with CSS:
//               </p>
//               <pre class="text-sm"><code>&lt;img src="photo.jpg" alt="Photo" 
//      style="width: 100%; max-width: 600px;"&gt;</code></pre>
//               <div class="mt-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
//                 <p class="text-sm text-yellow-800 dark:text-yellow-300">
//                   <strong>Tip:</strong> Use CSS for responsive images that adapt to screen size.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">3. Common Image Formats</h2>
          
//           <div class="overflow-x-auto">
//             <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
//               <thead class="bg-gray-100 dark:bg-gray-700">
//                 <tr>
//                   <th class="px-4 py-2 text-left font-bold">Format</th>
//                   <th class="px-4 py-2 text-left font-bold">Extension</th>
//                   <th class="px-4 py-2 text-left font-bold">Best For</th>
//                   <th class="px-4 py-2 text-left font-bold">Features</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">JPEG</td>
//                   <td class="px-4 py-2">.jpg, .jpeg</td>
//                   <td class="px-4 py-2">Photographs</td>
//                   <td class="px-4 py-2">Lossy compression, small file size</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">PNG</td>
//                   <td class="px-4 py-2">.png</td>
//                   <td class="px-4 py-2">Graphics, logos</td>
//                   <td class="px-4 py-2">Lossless, supports transparency</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">GIF</td>
//                   <td class="px-4 py-2">.gif</td>
//                   <td class="px-4 py-2">Simple animations</td>
//                   <td class="px-4 py-2">Animation support, 256 colors</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">SVG</td>
//                   <td class="px-4 py-2">.svg</td>
//                   <td class="px-4 py-2">Icons, logos</td>
//                   <td class="px-4 py-2">Vector, scalable, small file size</td>
//                 </tr>
//                 <tr class="border-t border-gray-300 dark:border-gray-700">
//                   <td class="px-4 py-2">WebP</td>
//                   <td class="px-4 py-2">.webp</td>
//                   <td class="px-4 py-2">Modern web</td>
//                   <td class="px-4 py-2">Excellent compression, supports transparency & animation</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">4. Responsive Images</h2>
          
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-green-800 dark:text-green-300 mb-2">srcset Attribute</h3>
//               <p class="text-green-700 dark:text-green-300 mb-2">
//                 Provides multiple image sources for different screen densities:
//               </p>
//               <pre class="text-sm"><code>&lt;img src="image-1x.jpg"
//      srcset="image-2x.jpg 2x,
//              image-3x.jpg 3x"
//      alt="Responsive image"&gt;</code></pre>
//             </div>
//             <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//               <h3 class="font-bold text-blue-800 dark:text-blue-300 mb-2">Picture Element</h3>
//               <p class="text-blue-700 dark:text-blue-300 mb-2">
//                 Provides art direction for different viewports:
//               </p>
//               <pre class="text-sm"><code>&lt;picture&gt;
//   &lt;source media="(min-width: 800px)" 
//           srcset="large.jpg"&gt;
//   &lt;source media="(min-width: 400px)" 
//           srcset="medium.jpg"&gt;
//   &lt;img src="small.jpg" alt="Description"&gt;
// &lt;/picture&gt;</code></pre>
//             </div>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">5. Image as Link</h2>
//           <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
//             Wrap an image in an anchor tag to make it clickable:
//           </p>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <pre class="text-sm"><code>&lt;a href="https://example.com"&gt;
//   &lt;img src="logo.png" 
//        alt="Company Logo"
//        width="200" 
//        height="100"&gt;
// &lt;/a&gt;</code></pre>
//           </div>
//         </div>

//         <div class="mb-8">
//           <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">6. Image Best Practices</h2>
//           <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//             <ul class="list-disc pl-5 space-y-2">
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Always include alt text</strong> for accessibility
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Optimize images</strong> for web (compress file size)
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Use appropriate formats</strong> (JPEG for photos, PNG for graphics)
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Specify width and height</strong> to prevent layout shifts
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Use responsive images</strong> for different screen sizes
//               </li>
//               <li class="text-gray-700 dark:text-gray-300">
//                 <strong>Lazy load images</strong> below the fold (<code>loading="lazy"</code>)
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8">
//           <h3 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">📊 Performance Tip:</h3>
//           <p class="text-yellow-700 dark:text-yellow-300">
//             Use the <code>loading="lazy"</code> attribute for images below the fold to improve 
//             page load performance:
//             <pre class="text-sm mt-2 bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded"><code>&lt;img src="image.jpg" 
//      alt="Description"
//      loading="lazy"
//      width="600" 
//      height="400"&gt;</code></pre>
//           </p>
//         </div>
//       </div>
//     `,
//     examples: [
//       {
//         title: 'Complete Image Examples',
//         code: `<!DOCTYPE html>
// <html>
// <head>
//     <title>HTML Images Examples</title>
//     <style>
//         .image-gallery {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//             gap: 20px;
//             margin: 20px 0;
//         }
//         .image-card {
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             padding: 10px;
//             text-align: center;
//         }
//         .image-card img {
//             max-width: 100%;
//             height: auto;
//             border-radius: 4px;
//         }
//     </style>
// </head>
// <body>
//     <h1>HTML Images Demonstration</h1>

//     <!-- Basic Image -->
//     <section>
//         <h2>1. Basic Image</h2>
//         <img src="https://picsum.photos/400/300" 
//              alt="Random placeholder image" 
//              width="400" 
//              height="300">
//     </section>

//     <!-- Image with CSS Styling -->
//     <section>
//         <h2>2. Styled Image</h2>
//         <img src="https://picsum.photos/300/200" 
//              alt="Styled image"
//              style="border: 5px solid #4CAF50;
//                     border-radius: 15px;
//                     box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
//     </section>

//     <!-- Responsive Image -->
//     <section>
//         <h2>3. Responsive Image</h2>
//         <img src="https://picsum.photos/800/400" 
//              alt="Responsive image"
//              style="width: 100%; 
//                     max-width: 800px; 
//                     height: auto;">
//     </section>

//     <!-- Image Gallery -->
//     <section>
//         <h2>4. Image Gallery</h2>
//         <div class="image-gallery">
//             <div class="image-card">
//                 <img src="https://picsum.photos/200/150?random=1" 
//                      alt="Gallery image 1"
//                      loading="lazy">
//                 <p>Image 1 Description</p>
//             </div>
//             <div class="image-card">
//                 <img src="https://picsum.photos/200/150?random=2" 
//                      alt="Gallery image 2"
//                      loading="lazy">
//                 <p>Image 2 Description</p>
//             </div>
//             <div class="image-card">
//                 <img src="https://picsum.photos/200/150?random=3" 
//                      alt="Gallery image 3"
//                      loading="lazy">
//                 <p>Image 3 Description</p>
//             </div>
//             <div class="image-card">
//                 <img src="https://picsum.photos/200/150?random=4" 
//                      alt="Gallery image 4"
//                      loading="lazy">
//                 <p>Image 4 Description</p>
//             </div>
//         </div>
//     </section>

//     <!-- Image as Link -->
//     <section>
//         <h2>5. Clickable Image</h2>
//         <a href="https://example.com" 
//            target="_blank" 
//            rel="noopener noreferrer">
//             <img src="https://picsum.photos/300/200" 
//                  alt="Click to visit example.com"
//                  style="border: 2px solid blue;
//                         cursor: pointer;">
//         </a>
//         <p>Click the image to visit example.com</p>
//     </section>

//     <!-- Picture Element for Art Direction -->
//     <section>
//         <h2>6. Art Direction with Picture Element</h2>
//         <picture>
//             <source media="(min-width: 1200px)" 
//                     srcset="https://picsum.photos/1200/600">
//             <source media="(min-width: 768px)" 
//                     srcset="https://picsum.photos/768/400">
//             <img src="https://picsum.photos/400/300" 
//                  alt="Responsive art directed image"
//                  style="width: 100%; height: auto;">
//         </picture>
//     </section>

//     <!-- Figure with Caption -->
//     <section>
//         <h2>7. Image with Caption</h2>
//         <figure>
//             <img src="https://picsum.photos/600/400" 
//                  alt="Beautiful landscape"
//                  style="width: 100%; max-width: 600px;">
//             <figcaption>
//                 <em>Figure 1:</em> A beautiful random landscape image from Lorem Picsum.
//             </figcaption>
//         </figure>
//     </section>

//     <!-- Image with srcset -->
//     <section>
//         <h2>8. High-DPI Images with srcset</h2>
//         <img src="https://picsum.photos/400/300" 
//              srcset="https://picsum.photos/800/600 2x,
//                      https://picsum.photos/1200/900 3x"
//              alt="High DPI responsive image"
//              style="width: 400px; height: auto;">
//         <p>This image will load higher resolution versions on retina displays.</p>
//     </section>

//     <!-- Background Image Example -->
//     <section>
//         <h2>9. CSS Background Image</h2>
//         <div style="background-image: url('https://picsum.photos/800/400');
//                     background-size: cover;
//                     background-position: center;
//                     height: 300px;
//                     border-radius: 10px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     color: white;
//                     text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//                     font-size: 2em;">
//             Text Over Background Image
//         </div>
//     </section>

//     <!-- Image Map -->
//     <section>
//         <h2>10. Image Map (Clickable Areas)</h2>
//         <img src="https://picsum.photos/400/300" 
//              alt="Image map example" 
//              usemap="#imagemap"
//              style="border: 1px solid #ccc;">
        
//         <map name="imagemap">
//             <area shape="rect" 
//                   coords="0,0,200,150" 
//                   href="https://example.com/left"
//                   alt="Left side"
//                   target="_blank">
//             <area shape="rect" 
//                   coords="200,0,400,150" 
//                   href="https://example.com/right"
//                   alt="Right side"
//                   target="_blank">
//         </map>
//         <p>Click on the left or right side of the image to go to different URLs.</p>
//     </section>

//     <!-- Lazy Loading -->
//     <section>
//         <h2>11. Lazy Loading Images</h2>
//         <div style="height: 1000px; background: #f0f0f0; margin: 20px 0;">
//             <p>Scroll down to see lazy loaded images...</p>
//         </div>
        
//         <img src="https://picsum.photos/400/300?random=10" 
//              alt="Lazy loaded image 1"
//              loading="lazy"
//              style="width: 100%; max-width: 400px;">
        
//         <div style="height: 500px;"></div>
        
//         <img src="https://picsum.photos/400/300?random=11" 
//              alt="Lazy loaded image 2"
//              loading="lazy"
//              style="width: 100%; max-width: 400px;">
//     </section>
// </body>
// </html>`,
//         explanation: 'This comprehensive example demonstrates all aspects of working with images in HTML including basic usage, responsive design, lazy loading, and best practices.'
//       }
//     ],
//     practiceQuestions: [
//       {
//         question: 'Which attribute is required for accessibility in images?',
//         options: ['src', 'alt', 'title', 'width'],
//         answer: 'alt'
//       },
//       {
//         question: 'What is the purpose of the srcset attribute?',
//         options: [
//           'To provide multiple image sources for different screen densities',
//           'To set the image source',
//           'To add alternative text',
//           'To create image maps'
//         ],
//         answer: 'To provide multiple image sources for different screen densities'
//       },
//       {
//         question: 'How do you make an image responsive?',
//         options: [
//           'Use CSS: width: 100%; max-width: [value]; height: auto;',
//           'Use only width attribute',
//           'Use only height attribute',
//           'It cannot be made responsive'
//         ],
//         answer: 'Use CSS: width: 100%; max-width: [value]; height: auto;'
//       }
//     ]
//   }
//   // Continue adding more HTML topics here...
//   // I'll provide 20 more topics in a similar format
// ]