// frontend/src/components/NoteContent.jsx - UPDATED
import { CheckCircle, Code, ExternalLink, Play, Copy } from 'lucide-react'
import { useNotes } from '../context/NotesContext.jsx'
import toast from 'react-hot-toast'
import { useState } from 'react'

const NoteContent = ({ note }) => {
  const { markAsComplete } = useNotes()
  const [activeExample, setActiveExample] = useState(0)

  const handleMarkComplete = () => {
    markAsComplete(note.id)
    toast.success('Topic marked as complete!')
  }

  if (!note) {
    return (
      <div className="glass-card p-8">
        <div className="text-center py-12">
          <Code className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Select a Topic</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Choose a topic from the roadmap to start learning
          </p>
        </div>
      </div>
    )
  }

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!')
  }

  return (
    <div className="html-notes-content">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{note.title}</h2>
          <div className="flex items-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              {note.difficulty}
            </span>
            <span className="text-gray-500">{note.estimatedTime} min read</span>
            <span className="text-gray-500">
              {note.sections?.length || 0} sections
            </span>
          </div>
        </div>
        <button
          onClick={handleMarkComplete}
          className="btn-primary flex items-center"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark Complete
        </button>
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: note.content }} 
      />

      {/* Code Examples */}
      {note.examples && note.examples.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="h-6 w-6 mr-2" />
            Code Examples
          </h3>
          
          <div className="space-y-6">
            {note.examples.map((example, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold">{example.title}</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCopyCode(example.code)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                      title="Copy code"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="code-example mb-4">
                  <div className="flex items-center justify-between bg-gray-900 text-gray-100 px-4 py-2">
                    <span className="text-sm">HTML</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          const iframe = document.createElement('iframe');
                          iframe.style.display = 'none';
                          document.body.appendChild(iframe);
                          iframe.contentDocument.open();
                          iframe.contentDocument.write(example.code);
                          iframe.contentDocument.close();
                          
                          const text = iframe.contentDocument.body.textContent || 
                                      iframe.contentDocument.body.innerText;
                          toast.success('Code executed! Check output in console.');
                          console.log('Output:', text);
                          document.body.removeChild(iframe);
                        }}
                        className="flex items-center text-sm hover:text-blue-400"
                      >
                        <Play className="h-3 w-3 mr-1" /> Run
                      </button>
                    </div>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="language-html">{example.code}</code>
                  </pre>
                </div>
                
                {example.explanation && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>Explanation:</strong> {example.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources */}
      {note.resources && note.resources.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <ExternalLink className="h-6 w-6 mr-2" />
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {note.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">{resource.title}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {resource.url}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Prerequisites & Next Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {note.prerequisites && note.prerequisites.length > 0 && (
          <div className="glass-card p-6">
            <h4 className="font-bold mb-3 text-gray-700 dark:text-gray-300">
              Prerequisites
            </h4>
            <ul className="space-y-2">
              {note.prerequisites.map((prereq, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {note.nextTopics && note.nextTopics.length > 0 && (
          <div className="glass-card p-6">
            <h4 className="font-bold mb-3 text-gray-700 dark:text-gray-300">
              Next Topics
            </h4>
            <ul className="space-y-2">
              {note.nextTopics.map((topic, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Progress Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <button className="btn-secondary mb-4 sm:mb-0">
          ← Previous Topic
        </button>
        
        <div className="text-center mb-4 sm:mb-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Complete this topic to continue
          </div>
        </div>
        
        <button className="btn-primary">
          Next Topic →
        </button>
      </div>
    </div>
  )
}

export default NoteContent