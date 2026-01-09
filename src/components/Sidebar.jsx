// frontend/src/components/Sidebar.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  Circle, 
  TrendingUp, 
  Target, 
  Clock,
  Award,
  Zap
} from 'lucide-react';

const Sidebar = ({ topics, activeTopic, onTopicClick, progress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const outerContentRef = useRef(null);
  const topicsContentRef = useRef(null);
  
  const completedTopics = topics.filter(topic => progress[topic.id]).length;
  const progressPercentage = topics.length > 0 ? (completedTopics / topics.length) * 100 : 0;

  // Calculate stats
  const totalDuration = topics.reduce((sum, topic) => sum + (topic.duration || 15), 0);
  const completedDuration = topics
    .filter(topic => progress[topic.id])
    .reduce((sum, topic) => sum + (topic.duration || 15), 0);
  
  const remainingDuration = totalDuration - completedDuration;
  const avgDifficulty = topics.reduce((sum, topic) => {
    const difficultyMap = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
    return sum + (difficultyMap[topic.difficulty] || 1);
  }, 0) / topics.length;

  useEffect(() => {
    const handleOuterScroll = () => {
      if (outerContentRef.current) {
        setIsScrolled(outerContentRef.current.scrollTop > 0);
      }
    };

    const outerElement = outerContentRef.current;
    if (outerElement) {
      outerElement.addEventListener('scroll', handleOuterScroll);
    }

    return () => {
      if (outerElement) {
        outerElement.removeEventListener('scroll', handleOuterScroll);
      }
    };
  }, []);

  return (
    <div className="sidebar-double-scroll">
      <div className="sidebar-outer-card">
        {/* Fixed Header */}
        <div className={`sidebar-header-fixed ${isScrolled ? 'shadow-sm' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mr-3">
                <ChevronRight className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Learning Path
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Master Full Stack Development
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
            </div>
          </div>
        </div>

        {/* Outer Scrollable Area (Entire Sidebar) */}
        <div className="sidebar-outer-scroll">
          <div 
            ref={outerContentRef}
            className="sidebar-outer-content"
          >
            <div className="px-6 pb-6">
              {/* Progress Overview */}
              <div className="progress-container">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                    Progress Overview
                  </h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {completedTopics}/{topics.length} topics
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {completedDuration}m
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Completed
                    </div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="flex items-center justify-center mb-2">
                      <Target className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {remainingDuration}m
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Remaining
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics Section with Inner Scroll */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-orange-500" />
                    Course Topics
                  </h4>
                  <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300">
                    Scroll to explore →
                  </span>
                </div>
                
                {/* Inner Scroll Container for Topics */}
                <div className="topics-scroll-container">
                  <div 
                    ref={topicsContentRef}
                    className="topics-scroll-content"
                  >
                    <div className="space-y-3">
                      {topics.map((topic, index) => (
                        <div
                          key={topic.id}
                          className={`topic-item-double ${activeTopic === topic.id ? 'active' : ''} ${progress[topic.id] ? 'completed' : ''}`}
                          onClick={() => onTopicClick(topic.id)}
                        >
                          <div className="flex items-start">
                            {/* Number/Status Badge */}
                            <div className={`
                              w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0
                              ${activeTopic === topic.id 
                                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg' 
                                : progress[topic.id]
                                  ? 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400'
                                  : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-400'
                              }
                            `}>
                              {progress[topic.id] ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                index + 1
                              )}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className={`
                                  font-semibold text-base
                                  ${activeTopic === topic.id 
                                    ? 'text-blue-700 dark:text-blue-300' 
                                    : progress[topic.id]
                                      ? 'text-gray-700 dark:text-gray-300'
                                      : 'text-gray-900 dark:text-white'
                                  }
                                `}>
                                  {topic.title}
                                </h5>
                                {progress[topic.id] ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                ) : activeTopic === topic.id ? (
                                  <div className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin flex-shrink-0" />
                                ) : (
                                  <Circle className="h-5 w-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <span className={`
                                  text-sm inline-flex items-center
                                  ${activeTopic === topic.id 
                                    ? 'text-blue-600 dark:text-blue-400' 
                                    : 'text-gray-500 dark:text-gray-400'
                                  }
                                `}>
                                  <Clock className="h-3 w-3 mr-1" />
                                  {topic.duration || '15'}m
                                </span>
                                
                                <span className={`
                                  text-sm px-3 py-1 rounded-full font-medium
                                  ${topic.difficulty === 'Beginner' 
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : topic.difficulty === 'Intermediate'
                                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    : topic.difficulty === 'Advanced'
                                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                  }
                                `}>
                                  {topic.difficulty || 'Beginner'}
                                </span>
                              </div>
                              
                              {topic.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                                  {topic.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Section */}
              {progressPercentage === 100 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <Award className="h-10 w-10 text-green-600 dark:text-green-400 mr-3" />
                    <div>
                      <h4 className="font-bold text-green-900 dark:text-green-300">
                        🎉 Course Completed!
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        You've mastered all {topics.length} topics. Great work!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="sidebar-footer-fixed">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30">
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Total Topics: <span className="font-bold">{topics.length}</span>
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Completed: <span className="font-bold">{completedTopics}</span>
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Scroll anywhere in the sidebar to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;