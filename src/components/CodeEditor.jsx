// frontend/src/components/CodeEditor.jsx - NEW
import { useState } from 'react'
import { Play, Copy, RotateCcw, Maximize2 } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import toast from 'react-hot-toast'

const CodeEditor = ({ code: initialCode, language = 'javascript', editable = true }) => {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleRun = () => {
    try {
      // For HTML code, create a preview
      if (language === 'html') {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        document.body.appendChild(iframe)
        iframe.contentDocument.open()
        iframe.contentDocument.write(code)
        iframe.contentDocument.close()
        
        // Extract text content for display
        const text = iframe.contentDocument.body.textContent || iframe.contentDocument.body.innerText
        setOutput(text)
        document.body.removeChild(iframe)
      } else {
        // For JavaScript, use eval in safe context
        const result = eval(code)
        setOutput(String(result))
      }
      toast.success('Code executed successfully!')
    } catch (error) {
      setOutput(`Error: ${error.message}`)
      toast.error('Execution error!')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!')
  }

  const handleReset = () => {
    setCode(initialCode)
    setOutput('')
    toast.success('Code reset!')
  }

  return (
    <div className={`glass-card overflow-hidden ${isExpanded ? 'fixed inset-4 z-50' : ''}`}>
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="text-sm font-mono font-medium">editor.{language}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRun}
            className="p-2 glass-effect rounded-lg hover:shadow-lg transition-all cursor-pointer"
            title="Run Code"
          >
            <Play className="h-5 w-5" />
          </button>
          <button
            onClick={handleCopy}
            className="p-2 glass-effect rounded-lg hover:shadow-lg transition-all cursor-pointer"
            title="Copy Code"
          >
            <Copy className="h-5 w-5" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 glass-effect rounded-lg hover:shadow-lg transition-all cursor-pointer"
            title="Reset Code"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 glass-effect rounded-lg hover:shadow-lg transition-all cursor-pointer"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="grid md:grid-cols-2">
        {/* Code Editor */}
        <div className="border-r border-gray-200 dark:border-gray-700">
          {editable ? (
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none"
              spellCheck="false"
            />
          ) : (
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
                fontSize: '14px',
                minHeight: '384px',
                maxHeight: '384px',
                overflow: 'auto'
              }}
            >
              {code}
            </SyntaxHighlighter>
          )}
        </div>

        {/* Output */}
        <div>
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="font-bold">Output</h4>
          </div>
          <div className="p-4">
            {output ? (
              <div className="font-mono text-sm whitespace-pre-wrap">
                {output}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-16">
                Click "Run" to see the output
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor