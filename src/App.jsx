import { useState, useEffect } from 'react';

// Inline SVG Icons
const Play = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const XCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Eye = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOff = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const RotateCcw = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Trophy = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const BookOpen = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ChevronDown = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const Lock = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const X = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FREE_QUESTION_IDS = [1, 2];

const QUESTIONS = [
  {
    id: 1,
    section: 1,
    sectionTitle: "Getting Started",
    questionNumber: "1.1",
    title: "Simple SELECT Query",
    difficulty: "Easy",
    description: "Write a query to select all columns from the users table.",
    tables: {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
      ]
    },
    expectedColumns: ['id', 'name', 'email'],
    hint: "Use SELECT * FROM users",
    sampleAnswer: "SELECT * FROM users;"
  },
  {
    id: 2,
    section: 1,
    sectionTitle: "Getting Started",
    questionNumber: "1.2",
    title: "WHERE Clause",
    difficulty: "Easy",
    description: "Select users where id is greater than 1.",
    tables: {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
      ]
    },
    expectedColumns: ['id', 'name'],
    hint: "Use WHERE id > 1",
    sampleAnswer: "SELECT id, name FROM users WHERE id > 1;"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sqlCode, setSqlCode] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [licenseError, setLicenseError] = useState('');

  useEffect(() => {
    const savedPremium = localStorage.getItem('marketingsql_premium');
    if (savedPremium === 'true') {
      setIsPremium(true);
    }
  }, []);

  const question = QUESTIONS[currentQuestion];
  const isLocked = !isPremium && !FREE_QUESTION_IDS.includes(question.id);

  const runQuery = () => {
    if (isLocked) {
      setShowLicenseModal(true);
      return;
    }
    
    const isCorrect = question.expectedColumns.every(col => 
      sqlCode.toLowerCase().includes(col.toLowerCase())
    );

    setQueryResult({ success: isCorrect });
    if (isCorrect) {
      const newCompleted = new Set(completedQuestions);
      newCompleted.add(question.id);
      setCompletedQuestions(newCompleted);
    }
  };

  const resetQuestion = () => {
    setSqlCode('');
    setQueryResult(null);
    setShowHint(false);
  };

  const validateLicenseKey = () => {
    const trimmedKey = licenseKey.trim().toUpperCase();
    
    if (trimmedKey.length < 10) {
      setLicenseError('Please enter a valid license key');
      return;
    }

    localStorage.setItem('marketingsql_premium', 'true');
    localStorage.setItem('marketingsql_license_key', trimmedKey);
    setIsPremium(true);
    setShowLicenseModal(false);
    setLicenseError('');
    setLicenseKey('');
    alert('🎉 License activated! All questions unlocked!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">MarketingSQL Pro</h1>
                <p className="text-sm text-gray-400">Master Marketing Analytics SQL</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Progress */}
              <div className="flex items-center gap-2 text-lg font-bold text-blue-400">
                <Trophy className="w-5 h-5" />
                <span>{completedQuestions.size}/{QUESTIONS.length}</span>
              </div>

              {/* Upgrade Button */}
              {!isPremium ? (
                <div className="flex items-center gap-2">
                  <a
                    href="https://sailincheng.gumroad.com/l/marketingSQLPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2 no-underline"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Upgrade - $49</span>
                  </a>
                  <button
                    onClick={() => setShowLicenseModal(true)}
                    className="text-xs text-gray-400 hover:text-white underline"
                  >
                    Already purchased?
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold px-4 py-2 bg-green-900/30 rounded-lg border border-green-700/50">
                  <CheckCircle className="w-4 h-4" />
                  <span>Premium</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Question */}
        <div className="w-1/2 border-r border-gray-700 overflow-y-auto bg-gray-850">
          <div className="p-6 space-y-6">
            {/* Question Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-blue-400">
                  Section {question.section}: {question.sectionTitle}
                </span>
                <span className="text-sm font-semibold text-gray-500">•</span>
                <span className="text-sm font-semibold text-gray-400">
                  Question {question.questionNumber}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  question.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                  question.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {question.difficulty}
                </span>
                {completedQuestions.has(question.id) && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
              </div>
            </div>

            {/* Question */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">{question.title}</h2>
              <p className="text-gray-300 text-base leading-relaxed">{question.description}</p>
            </div>

            {/* Hint */}
            <div>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                {showHint ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showHint ? 'Hide' : 'Show'} Hint</span>
              </button>

              {showHint && (
                <div className="mt-3 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="text-sm text-yellow-200">{question.hint}</div>
                </div>
              )}
            </div>

            {/* Sample Data */}
            <div className={`space-y-4 ${isLocked ? 'relative' : ''}`}>
              <h3 className="font-semibold text-white text-lg">📊 Sample Data:</h3>
              
              <div className={isLocked ? 'filter blur-sm opacity-30 pointer-events-none select-none' : ''}>
                {Object.entries(question.tables).map(([tableName, rows]) => (
                  <div key={tableName} className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
                    <div className="bg-gray-750 px-4 py-2 font-mono text-sm text-blue-300 font-semibold">
                      {tableName}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead className="bg-gray-750">
                          <tr>
                            {rows.length > 0 && Object.keys(rows[0]).map(col => (
                              <th key={col} className="px-3 py-2 text-left font-semibold text-gray-300 font-mono">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, idx) => (
                            <tr key={idx} className="border-t border-gray-700">
                              {Object.values(row).map((val, vidx) => (
                                <td key={vidx} className="px-3 py-2 text-gray-400 font-mono">
                                  {val === null ? <span className="text-gray-600">NULL</span> : String(val)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Locked Overlay */}
              {isLocked && (
                <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md rounded-lg flex items-center justify-center z-10">
                  <div className="text-center p-8 max-w-sm">
                    <Lock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Premium Content</h3>
                    <p className="text-gray-400 mb-6">Unlock all 18 questions</p>
                    <a
                      href="https://sailincheng.gumroad.com/l/marketingSQLPro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg w-full mb-3 no-underline"
                    >
                      Upgrade to Premium - $49
                    </a>
                    <button
                      onClick={() => setShowLicenseModal(true)}
                      className="text-sm text-gray-400 hover:text-white transition-colors underline"
                    >
                      Already purchased? Enter license key
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - SQL Editor */}
        <div className="w-1/2 flex flex-col bg-gray-900">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Your SQL Query</h3>
              <button
                onClick={resetQuestion}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>
            
            <textarea
              value={sqlCode}
              onChange={(e) => setSqlCode(e.target.value)}
              disabled={isLocked}
              placeholder={isLocked ? "🔒 Upgrade to write SQL..." : "-- Write your SQL query here...\nSELECT column1, column2\nFROM table_name\nWHERE condition;"}
              className={`w-full h-64 p-4 font-mono text-sm border border-gray-700 rounded-lg ${
                isLocked 
                  ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed opacity-60'
                  : 'bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              }`}
              spellCheck="false"
            />
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={runQuery}
                disabled={isLocked}
                className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isLocked
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed opacity-60'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                {isLocked ? <Lock className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>Run Query</span>
              </button>
            </div>
          </div>

          {/* Query Result */}
          <div className="flex-1 overflow-y-auto p-6">
            {queryResult && (
              <div>
                {queryResult.success ? (
                  <div className="flex items-start gap-2 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-300">Correct!</div>
                      <div className="text-sm text-green-400">Great job! Your query looks good.</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-300">Not quite right</div>
                      <div className="text-sm text-red-400">
                        Check if your query includes: {question.expectedColumns.join(', ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* License Key Modal */}
      {showLicenseModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-6 border border-gray-700 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Enter License Key</h3>
              <button
                onClick={() => {
                  setShowLicenseModal(false);
                  setLicenseError('');
                  setLicenseKey('');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Enter the license key from your purchase email
            </p>

            <input
              type="text"
              value={licenseKey}
              onChange={(e) => {
                setLicenseKey(e.target.value);
                setLicenseError('');
              }}
              placeholder="XXXX-XXXX-XXXX"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              onKeyPress={(e) => e.key === 'Enter' && validateLicenseKey()}
            />

            {licenseError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {licenseError}
              </div>
            )}

            <button
              onClick={validateLicenseKey}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-colors mb-3"
            >
              Activate License
            </button>

            <div className="text-center">
              <p className="text-gray-500 text-sm mb-2">Don not have a license key?</p>
              <a
                href="https://sailincheng.gumroad.com/l/marketingSQLPro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
                onClick={() => setShowLicenseModal(false)}
              >
                Purchase now for $49
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
