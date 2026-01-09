// frontend/src/components/TopicItem.jsx
import { CheckCircle, Circle, Clock } from 'lucide-react'

const TopicItem = ({ topic, index, isActive, isCompleted, onClick }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div
      className={`
        topic-item-double p-4 rounded-xl cursor-pointer transition-all duration-250
        ${isActive ? 'active' : ''}
        ${isCompleted ? 'completed' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex items-start">
        {/* Status Badge */}
        <div className={`
          w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0
          ${isActive 
            ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg' 
            : isCompleted 
              ? 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400'
              : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-400'
          }
        `}>
          {isCompleted ? <CheckCircle className="h-5 w-5" /> : index}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h5 className={`
              font-semibold text-base
              ${isActive 
                ? 'text-blue-700 dark:text-blue-300' 
                : isCompleted 
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white'
              }
            `}>
              {topic.title}
            </h5>
            {isCompleted ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : isActive ? (
              <div className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
            ) : (
              <Circle className="h-5 w-5 text-gray-300 dark:text-gray-600" />
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {topic.duration || '15'}m
            </span>
            
            <span className={`text-sm px-3 py-1 rounded-full font-medium ${getDifficultyColor(topic.difficulty)}`}>
              {topic.difficulty || 'Beginner'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicItem