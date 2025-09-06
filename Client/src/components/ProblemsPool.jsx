import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  Filter, 
  CheckCircle2, 
  Circle, 
  Star, 
  ExternalLink, 
  Github, 
  X,
  BookOpen,
  Users
} from 'lucide-react';

// Dummy data
const dummyProblems = [
  {
    id: "problemId_201",
    status: false,
    title: "Find the Maximum Subarray Sum (Kadane's Algorithm)",
    myResource: "https://github.com/mystory/journey/arrays/kadane",
    resource: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    practiceLink: "https://leetcode.com/problems/maximum-subarray/",
    notes: "Important for DP, prefix sums, and interview prep. Kadane's algorithm is a classic dynamic programming approach that efficiently finds the maximum sum of a contiguous subarray in O(n) time.",
    usersAttempted: 10,
    revision: true,
    difficulty: "Medium"
  },
  {
    id: "problemId_202",
    status: true,
    title: "Two Sum Problem",
    myResource: "https://github.com/mystory/journey/arrays/twosum",
    resource: "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/",
    practiceLink: "https://leetcode.com/problems/two-sum/",
    notes: "Classic hash map problem. Use HashMap to store complement values for O(n) solution.",
    usersAttempted: 25,
    revision: false,
    difficulty: "Easy"
  },
  {
    id: "problemId_203",
    status: false,
    title: "Binary Tree Inorder Traversal",
    myResource: "https://github.com/mystory/journey/trees/inorder",
    resource: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
    practiceLink: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    notes: "Fundamental tree traversal technique. Can be implemented recursively or iteratively using stack.",
    usersAttempted: 18,
    revision: true,
    difficulty: "Easy"
  },
  {
    id: "problemId_204",
    status: true,
    title: "Longest Palindromic Substring",
    myResource: "https://github.com/mystory/journey/strings/palindrome",
    resource: "https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/",
    practiceLink: "https://leetcode.com/problems/longest-palindromic-substring/",
    notes: "Multiple approaches: brute force O(n³), expand around centers O(n²), Manacher's algorithm O(n).",
    usersAttempted: 8,
    revision: false,
    difficulty: "Medium"
  },
  {
    id: "problemId_205",
    status: false,
    title: "Merge Two Sorted Lists",
    myResource: "https://github.com/mystory/journey/linkedlist/merge",
    resource: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
    practiceLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
    notes: "Classic linked list problem. Important for understanding pointer manipulation and merge operations.",
    usersAttempted: 15,
    revision: true,
    difficulty: "Easy"
  },
  {
    id: "problemId_206",
    status: true,
    title: "Valid Parentheses",
    myResource: "https://github.com/mystory/journey/stack/parentheses",
    resource: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    practiceLink: "https://leetcode.com/problems/valid-parentheses/",
    notes: "Stack-based solution. Perfect example of LIFO data structure application.",
    usersAttempted: 22,
    revision: false,
    difficulty: "Easy"
  },
  {
    id: "problemId_207",
    status: false,
    title: "Course Schedule (Topological Sort)",
    myResource: "https://github.com/mystory/journey/graphs/topological",
    resource: "https://www.geeksforgeeks.org/topological-sorting/",
    practiceLink: "https://leetcode.com/problems/course-schedule/",
    notes: "Graph theory problem involving cycle detection and topological sorting using DFS or Kahn's algorithm.",
    usersAttempted: 5,
    revision: true,
    difficulty: "Hard"
  }
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'text-green-600 bg-green-50';
    case 'Medium': return 'text-yellow-600 bg-yellow-50';
    case 'Hard': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

const NotesModal = ({ problem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h2>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
                {problem.revision && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-yellow-600 font-medium">Revision</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Notes</h3>
            <p className="text-gray-700 leading-relaxed">{problem.notes}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={problem.practiceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Practice</span>
            </a>
            
            <a
              href={problem.myResource}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">My Solution</span>
            </a>
            
            <a
              href={problem.resource}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Resource</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProblemsPool = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModal, setSelectedModal] = useState(null);
  
  const solvedCount = dummyProblems.filter(p => p.status).length;
  const totalCount = dummyProblems.length;
  
  const filteredProblems = dummyProblems.filter(problem =>
    problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    problem.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            {/* Left Side */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">Problems Pool</h1>
              <p className="text-gray-600 mt-1">
                Practice coding problems and track your progress
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgb(229, 231, 235)"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={
                      2 * Math.PI * 28 -
                      (solvedCount / totalCount) * 2 * Math.PI * 28
                    }
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">
                    {Math.round((solvedCount / totalCount) * 100)}%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="font-semibold text-gray-900">
                  {solvedCount}/{totalCount} Solved
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <ArrowUpDown className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Sort</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="px-8 py-6">
        <div className="space-y-4 max-w-6xl mx-auto">
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* Status Icon with Tooltip */}
                  <div className="mt-1 relative group">
                    {problem.status ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 fill-green-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      {problem.status ? "Solved" : "Not Solved"}
                    </div>
                  </div>

                  {/* Problem Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative group">
                        <a
                          href={problem.practiceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {problem.title}
                        </a>
                        <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          Click to practice
                        </div>
                      </div>
                      {problem.revision && (
                        <div className="relative group">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-yellow-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                            Revision Required
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="relative group">
                        <span
                          className={`px-3 py-1 rounded-full font-medium ${getDifficultyColor(
                            problem.difficulty
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          Difficulty Level
                        </div>
                      </div>

                      <div className="flex items-center gap-1 relative group">
                        <Users className="w-4 h-4" />
                        <span>{problem.usersAttempted} attempted</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          Total users attempted this problem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <button
                      onClick={() => setSelectedModal(problem)}
                      className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      Notes
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      View notes & resources
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <a
                      href={problem.myResource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-700  rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      My Solution
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <a
                      href={problem.resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-700  rounded-lg transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      Reference Material
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <a
                      href={problem.practiceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-blue-600  rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      Practice Problem
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes Modal */}
      <NotesModal 
        problem={selectedModal} 
        isOpen={!!selectedModal} 
        onClose={() => setSelectedModal(null)} 
      />
    </div>
  );
};

export default ProblemsPool;