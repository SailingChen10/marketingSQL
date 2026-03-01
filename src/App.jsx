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
const GUMROAD_PRODUCT_ID = 'marketingSQLPro';

const QUESTIONS = [
  {
    id: 1,
    section: 1,
    sectionTitle: "Ad Channel Performance",
    questionNumber: "1.1",
    title: "3-Day Rolling Average Signups by Channel",
    difficulty: "Medium",
    description: "Calculate the 3-day rolling average of daily signups for each channel.",
    tables: {
      ads_daily_signups: [
        { channel: 'Facebook', date: '2024-01-01', signups: 100 },
        { channel: 'Facebook', date: '2024-01-02', signups: 120 },
      ]
    },
    expectedColumns: ['channel', 'date', 'signups', 'rolling_3day_avg'],
    hint: "Use AVG() OVER with ROWS BETWEEN",
    concept: "Window functions",
    sampleAnswer: "SELECT channel, date, AVG(signups) OVER (PARTITION BY channel ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as rolling_3day_avg FROM ads_daily_signups"
  },
  {
    id: 2,
    section: 2,
    sectionTitle: "Multi-Touch Attribution",
    questionNumber: "2.1",
    title: "Revenue Attribution - Last Touch",
    difficulty: "Hard",
    description: "Calculate revenue by last-touch attribution.",
    tables: {
      campaign_touch: [
        { subscription_id: 'S1', channel: 'Facebook', trial_start: '2025-01-01' },
      ]
    },
    expectedColumns: ['channel', 'revenue'],
    hint: "Use ROW_NUMBER() to find last touch",
    concept: "Last-touch attribution",
    sampleAnswer: "WITH last_touch AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY subscription_id ORDER BY trial_start DESC) as rn FROM campaign_touch) SELECT channel, SUM(revenue) FROM last_touch WHERE rn = 1 GROUP BY channel"
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

  const validateLicenseKey = () => {
    localStorage.setItem('marketingsql_premium', 'true');
    setIsPremium(true);
    setShowLicenseModal(false);
    alert('🎉 License activated!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-blue-400" />
            <h1 className="text-xl font-bold">MarketingSQL Pro</h1>
          </div>
          {!isPremium && (
            
              href="https://sailincheng.gumroad.com/l/marketingSQLPro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Upgrade - $49
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{question.title}</h2>
        <p className="text-gray-300 mb-4">{question.description}</p>

        <div className="mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-blue-400"
          >
            {showHint ? 'Hide' : 'Show'} Hint
          </button>
          {showHint && <p className="mt-2 text-yellow-200">{question.hint}</p>}
        </div>

        <textarea
          value={sqlCode}
          onChange={(e) => setSqlCode(e.target.value)}
          disabled={isLocked}
          placeholder="Write your SQL here..."
          className="w-full h-64 p-4 bg-gray-800 text-white rounded-lg mb-4"
        />

        <button
          onClick={runQuery}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Run Query
        </button>

        {queryResult && (
          <div className={`mt-4 p-4 rounded ${queryResult.success ? 'bg-green-900' : 'bg-red-900'}`}>
            {queryResult.success ? '✅ Correct!' : '❌ Not quite right'}
          </div>
        )}
      </div>

      {showLicenseModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md">
            <h3 className="text-xl font-bold mb-4">Enter License Key</h3>
            <input
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 rounded mb-4"
              placeholder="Enter your license key"
            />
            <button
              onClick={validateLicenseKey}
              className="w-full bg-blue-600 py-2 rounded"
            >
              Activate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
