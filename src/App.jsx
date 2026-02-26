import React, { useState, useEffect } from 'react';

// Inline SVG Icons (since we can't use lucide-react in CDN build)
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

// ==================== FREE TRIAL CONFIGURATION ====================
const FREE_QUESTION_IDS = [1, 2]; // Questions 1 and 2 are free
const GUMROAD_PRODUCT_ID = 'marketingSQLPro';
// ==================================================================

// SQL Questions Database - Reordered and Updated
const QUESTIONS = [
  // SECTION 1: AD CHANNEL PERFORMANCE
  {
    id: 1,
    section: 1,
    sectionTitle: "Ad Channel Performance",
    questionNumber: "1.1",
    title: "3-Day Rolling Average Signups by Channel",
    difficulty: "Medium",
    description: "Calculate the 3-day rolling average of daily signups for each channel. Only include rows where we have complete 3-day data.",
    backgroundContext: `**What is Rolling Average?**

Rolling averages (also called moving averages) help smooth out daily volatility and identify trends by averaging values over a sliding time window.

**Why Marketing Teams Use Rolling Averages:**
- **Reduce noise**: Daily metrics can be volatile (weekends, holidays, random events)
- **Spot trends**: Easier to see if performance is improving or declining
- **Better decisions**: Make budget allocation based on trends, not single-day spikes
- **Early warnings**: Detect problems before monthly reports

**Example:**
If Facebook has signups: 100, 120, 90, 150, 130...
- Day 1: Only 1 day of data → Can't calculate 3-day average yet
- Day 2: Only 2 days of data → Still can't calculate 3-day average
- Day 3: (100 + 120 + 90) / 3 = **103.33** ✅ First valid 3-day average
- Day 4: (120 + 90 + 150) / 3 = **120.00** ✅
- Day 5: (90 + 150 + 130) / 3 = **123.33** ✅

**Important:** Only include rows where we have complete 3-day data (i.e., exclude the first 2 days for each channel).`,
    tables: {
      ads_daily_signups: [
        { channel: 'Facebook', date: '2024-01-01', signups: 100 },
        { channel: 'Facebook', date: '2024-01-02', signups: 120 },
        { channel: 'Facebook', date: '2024-01-03', signups: 90 },
        { channel: 'Facebook', date: '2024-01-04', signups: 150 },
        { channel: 'Facebook', date: '2024-01-05', signups: 130 },
        { channel: 'Facebook', date: '2024-01-06', signups: 110 },
        { channel: 'Google', date: '2024-01-01', signups: 80 },
        { channel: 'Google', date: '2024-01-02', signups: 95 },
        { channel: 'Google', date: '2024-01-03', signups: 110 },
        { channel: 'Google', date: '2024-01-04', signups: 85 },
        { channel: 'Google', date: '2024-01-05', signups: 105 },
        { channel: 'TikTok', date: '2024-01-01', signups: 50 },
        { channel: 'TikTok', date: '2024-01-02', signups: 60 },
        { channel: 'TikTok', date: '2024-01-03', signups: 55 },
        { channel: 'TikTok', date: '2024-01-04', signups: 70 }
      ]
    },
    expectedColumns: ['channel', 'date', 'signups', 'rolling_3day_avg'],
    hint: "Use AVG() OVER (PARTITION BY channel ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) to calculate the rolling average. Then filter to only include rows where we have complete 3-day data. You can use ROW_NUMBER() or COUNT() in the window to identify which rows have complete data.",
    concept: "Window functions, Rolling average, ROWS BETWEEN, PARTITION BY, Filtering window results",
    preQuestionPrompt: {
      question: "Before coding: Why can't we include the first 2 days for each channel in our results?",
      answer: `**The Problem with First 2 Days:**

Day 1 (e.g., Facebook 2024-01-01):
- Only has 1 day of data (itself)
- 3-day average would be: 100 / 1 = 100
- This is NOT a true 3-day average!

Day 2 (e.g., Facebook 2024-01-02):
- Only has 2 days of data (Day 1 + Day 2)
- 3-day average would be: (100 + 120) / 2 = 110
- Still NOT a true 3-day average!

Day 3 (e.g., Facebook 2024-01-03):
- Has 3 days of data (Day 1 + Day 2 + Day 3)
- 3-day average: (100 + 120 + 90) / 3 = 103.33
- ✅ This IS a true 3-day average!

**Key Insight:** We need to filter out rows where the window doesn't have complete 3-day data.`
    },
    sampleAnswer: `-- Method 1: Using ROW_NUMBER to filter
WITH ranked AS (
  SELECT
    channel,
    date,
    signups,
    ROW_NUMBER() OVER (PARTITION BY channel ORDER BY date) AS rn,
    ROUND(
      AVG(signups) OVER (
        PARTITION BY channel 
        ORDER BY date 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
      ),
      2
    ) AS rolling_3day_avg
  FROM ads_daily_signups
)
SELECT
  channel,
  date,
  signups,
  rolling_3day_avg
FROM ranked
WHERE rn >= 3  -- Only rows with complete 3-day data
ORDER BY channel, date;

-- Method 2: Using COUNT to check window size
WITH rolling_calc AS (
  SELECT
    channel,
    date,
    signups,
    AVG(signups) OVER (
      PARTITION BY channel 
      ORDER BY date 
      ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS rolling_3day_avg,
    COUNT(*) OVER (
      PARTITION BY channel 
      ORDER BY date 
      ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS window_size
  FROM ads_daily_signups
)
SELECT
  channel,
  date,
  signups,
  ROUND(rolling_3day_avg, 2) AS rolling_3day_avg
FROM rolling_calc
WHERE window_size = 3  -- Only rows with exactly 3 days in window
ORDER BY channel, date;`
  },

  // SECTION 2: MULTI-TOUCH ATTRIBUTION
  {
    id: 2,
    section: 2,
    sectionTitle: "Multi-Touch Attribution",
    questionNumber: "2.1",
    title: "Revenue Attribution - Last Touch",
    difficulty: "Hard",
    description: "You're a growth analyst at a B2C subscription app company. The user signup journey is: landed on marketing campaign page > created an account > signed up for trial. In this case, all subscriptions are attributed to last touch.",
    backgroundContext: `**Attribution Models:**

There are three common attribution models:

1. **First-Touch Attribution**: All credit goes to the first channel that brought the user
   - Example: User sees Facebook ad (first touch) → clicks Google ad → subscribes
   - Facebook gets 100% credit

2. **Linear Attribution**: Credit is split equally among all touchpoints
   - Same example: Facebook gets 50%, Google gets 50%

3. **Last-Touch Attribution**: All credit goes to the last channel before conversion
   - Same example: Google gets 100% credit
   - **Most commonly used in actual work** because it shows what finally drove the conversion

**In this exercise, we'll use last-touch attribution.**`,
    tables: {
      campaign_touch: [
        { subscription_id: 'S1', campaign_id: 'C1', channel: 'Facebook', trial_start: '2025-01-01' },
        { subscription_id: 'S1', campaign_id: 'C2', channel: 'Google', trial_start: '2025-01-05' },
        { subscription_id: 'S2', campaign_id: 'C1', channel: 'Facebook', trial_start: '2025-01-03' },
        { subscription_id: 'S2', campaign_id: 'C3', channel: 'LinkedIn', trial_start: '2025-01-06' },
        { subscription_id: 'S3', campaign_id: 'C2', channel: 'Google', trial_start: '2025-01-02' },
        { subscription_id: 'S4', campaign_id: 'C3', channel: 'LinkedIn', trial_start: '2025-01-04' }
      ],
      campaigns: [
        { id: 'C1', channel: 'Facebook' },
        { id: 'C2', channel: 'Google' },
        { id: 'C3', channel: 'LinkedIn' }
      ],
      subscription_data: [
        { subscription_id: 'S1', invoice_pricing: 500 },
        { subscription_id: 'S2', invoice_pricing: 300 },
        { subscription_id: 'S3', invoice_pricing: 200 },
        { subscription_id: 'S4', invoice_pricing: 400 }
      ],
      ad_spend: [
        { channel: 'Facebook', spend: 300 },
        { channel: 'Google', spend: 400 },
        { channel: 'LinkedIn', spend: 200 }
      ]
    },
    expectedColumns: ['channel', 'revenue', 'spend', 'roas'],
    hint: "Use window function RANK() or ROW_NUMBER() OVER (PARTITION BY subscription_id ORDER BY trial_start DESC) to identify the last touch. Then aggregate revenue by channel and calculate ROAS = revenue / spend.",
    concept: "Last-touch attribution, Window functions, ROAS calculation",
    sampleAnswer: `WITH last_touch AS (
  SELECT
    subscription_id,
    channel,
    ROW_NUMBER() OVER (PARTITION BY subscription_id ORDER BY trial_start DESC) AS rn
  FROM campaign_touch
),
revenue_by_channel AS (
  SELECT
    lt.channel,
    SUM(sd.invoice_pricing) AS revenue
  FROM last_touch lt
  JOIN subscription_data sd ON sd.subscription_id = lt.subscription_id
  WHERE lt.rn = 1
  GROUP BY lt.channel
)

SELECT
  r.channel,
  r.revenue,
  s.spend,
  ROUND(r.revenue / NULLIF(s.spend, 0), 2) AS roas
FROM revenue_by_channel r
JOIN ad_spend s ON s.channel = r.channel
ORDER BY roas DESC;`
  },

  {
    id: 3,
    section: 2,
    sectionTitle: "Multi-Touch Attribution",
    questionNumber: "2.2",
    title: "Revenue Attribution with User Tracking",
    difficulty: "Hard",
    description: "Similar to 2.1, but now track revenue by user_id to understand user-level economics.",
    tables: {
      campaign_touch: [
        { user_id: 'U1', subscription_id: 'S1', campaign_id: 'C1', channel: 'Facebook', trial_start: '2025-01-01' },
        { user_id: 'U1', subscription_id: 'S1', campaign_id: 'C2', channel: 'Google', trial_start: '2025-01-05' },
        { user_id: 'U2', subscription_id: 'S2', campaign_id: 'C1', channel: 'Facebook', trial_start: '2025-01-03' },
        { user_id: 'U2', subscription_id: 'S2', campaign_id: 'C3', channel: 'LinkedIn', trial_start: '2025-01-06' },
        { user_id: 'U3', subscription_id: 'S3', campaign_id: 'C2', channel: 'Google', trial_start: '2025-01-02' },
        { user_id: 'U4', subscription_id: 'S4', campaign_id: 'C3', channel: 'LinkedIn', trial_start: '2025-01-04' }
      ],
      subscription_data: [
        { user_id: 'U1', subscription_id: 'S1', invoice_pricing: 500 },
        { user_id: 'U2', subscription_id: 'S2', invoice_pricing: 300 },
        { user_id: 'U3', subscription_id: 'S3', invoice_pricing: 200 },
        { user_id: 'U4', subscription_id: 'S4', invoice_pricing: 400 }
      ]
    },
    expectedColumns: ['user_id', 'channel', 'revenue'],
    hint: "Identify last touch per user, then join with subscription data to get revenue attributed to each channel per user.",
    concept: "User-level attribution, Window functions",
    sampleAnswer: `WITH last_touch AS (
  SELECT
    user_id,
    subscription_id,
    channel,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY trial_start DESC) AS rn
  FROM campaign_touch
)

SELECT
  lt.user_id,
  lt.channel,
  sd.invoice_pricing AS revenue
FROM last_touch lt
JOIN subscription_data sd ON sd.user_id = lt.user_id
WHERE lt.rn = 1
ORDER BY lt.user_id;`
  },

  // SECTION 3: COHORT RETENTION
  {
    id: 4,
    section: 3,
    sectionTitle: "Cohort Retention Analysis",
    questionNumber: "3.1",
    title: "Monthly Cohort Retention (M1, M2, M3)",
    difficulty: "Hard",
    description: "You're a growth analyst at a B2C subscription app company. Calculate cohort retention rates for users grouped by their signup month.",
    backgroundContext: `**What is Cohort Analysis?**

Cohort analysis is a powerful technique for understanding user behavior over time by grouping users based on a shared characteristic or experience.

**What is a Cohort?**
A cohort is a group of users who share a common characteristic during a specific time period. In subscription businesses, the most common cohort definition is users who signed up in the same month.

**Why Cohort Analysis Matters:**
- **Track retention**: See how many users stay active over time
- **Compare cohorts**: Are newer users more/less engaged than older users?
- **Identify trends**: Is retention improving or declining?
- **Calculate LTV**: Retention rates help predict customer lifetime value

**Example: How to Read a Cohort Table**

Below is a real-world cohort retention table. Each row represents users who signed up in the same month (cohort), and columns show their activity in subsequent months.

Cohort Month | Cohort Size | Month 00 | Month 01 | Month 02 | Month 03 | Month 04 | Month 05 | Month 06
-------------|-------------|----------|----------|----------|----------|----------|----------|----------
Oct 2016     | 3,543       | 6.26%    | 31.07%   | 37.73%   | 38.10%   | 39.07%   | 40.04%   | 100%
Jan 2017     | 3,257       | 8.30%    | 31.13%   | 40.42%   | 38.34%   | 40.00%   | 100%     | -
Jun 2017     | 3,018       | 11.40%   | 32.05%   | 64.08%   | -        | -        | -        | -
Jul 2017     | 3,237       | 16.64%   | 73.01%   | 87.30%   | -        | -        | -        | -
Oct 2017     | 3,318       | 22.42%   | 81.08%   | 89.75%   | -        | -        | -        | -
May 2018     | 3,886       | 32.23%   | 88.83%   | -        | -        | -        | -        | -

**Key Insights from This Table:**

1. **Month 00** = Signup month baseline (6.26% for Oct 2016 cohort were active immediately)

2. **Retention Growth**: Notice how Month 01 retention improves dramatically over time:
   - Oct 2016 cohort: 31.07% retained in M1
   - May 2018 cohort: 88.83% retained in M1
   - This suggests product improvements or better onboarding!

3. **Data Completeness**: 
   - Dark blue (100%) = Complete data available
   - Light blue = Partial data (cohort hasn't reached that month yet)
   - Dash (-) = No data yet

4. **Long-term Retention**: Oct 2016 cohort shows 100% retention at M6, meaning users who stayed that long are very sticky

**In this exercise:**
- **Cohort** = Users who signed up in the same month
- **M0** = Signup month (baseline)
- **M1 retention** = % of cohort users who had at least one order 1 month after signup
- **M2 retention** = % of cohort users who had at least one order 2 months after signup
- **"Active"** = User had at least one order in that month`,
    tables: {
      users: [
        { user_id: 'U1', signup_date: '2024-01-05' },
        { user_id: 'U2', signup_date: '2024-01-15' },
        { user_id: 'U3', signup_date: '2024-01-20' },
        { user_id: 'U4', signup_date: '2024-02-10' },
        { user_id: 'U5', signup_date: '2024-02-15' },
        { user_id: 'U6', signup_date: '2024-03-05' }
      ],
      orders: [
        { order_id: 'O1', user_id: 'U1', order_date: '2024-01-06', revenue: 100 },
        { order_id: 'O2', user_id: 'U1', order_date: '2024-02-12', revenue: 150 },
        { order_id: 'O3', user_id: 'U1', order_date: '2024-03-18', revenue: 120 },
        { order_id: 'O4', user_id: 'U2', order_date: '2024-01-16', revenue: 200 },
        { order_id: 'O5', user_id: 'U2', order_date: '2024-02-20', revenue: 180 },
        { order_id: 'O6', user_id: 'U3', order_date: '2024-01-22', revenue: 90 },
        { order_id: 'O7', user_id: 'U3', order_date: '2024-03-10', revenue: 110 },
        { order_id: 'O8', user_id: 'U4', order_date: '2024-02-11', revenue: 250 },
        { order_id: 'O9', user_id: 'U4', order_date: '2024-03-15', revenue: 200 },
        { order_id: 'O10', user_id: 'U5', order_date: '2024-02-16', revenue: 150 },
        { order_id: 'O11', user_id: 'U6', order_date: '2024-03-06', revenue: 300 }
      ]
    },
    expectedColumns: ['cohort_month', 'users_m0', 'users_m1', 'users_m2', 'users_m3', 'r_m1', 'r_m2', 'r_m3'],
    hint: "Create a CTE to identify each user's cohort (signup month). Calculate the month difference between each order and the user's signup month using DATEDIFF(month, ...). Use COUNT DISTINCT with CASE WHEN to count users active in each month number (0, 1, 2, 3). Retention rate = users in month N / users in month 0.",
    concept: "Cohort analysis, DATE_TRUNC, DATEDIFF, Month arithmetic",
    sampleAnswer: `WITH cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', signup_date) AS cohort_month
  FROM users
),
user_activity AS (
  SELECT
    u.user_id,
    c.cohort_month,
    DATE_TRUNC('month', o.order_date) AS activity_month,
    DATEDIFF(
      month, 
      c.cohort_month, 
      DATE_TRUNC('month', o.order_date)
    ) AS month_number
  FROM users u
  JOIN cohorts c ON c.user_id = u.user_id
  LEFT JOIN orders o ON o.user_id = u.user_id
)

SELECT
  cohort_month,
  COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END) AS users_m0,
  COUNT(DISTINCT CASE WHEN month_number = 1 THEN user_id END) AS users_m1,
  COUNT(DISTINCT CASE WHEN month_number = 2 THEN user_id END) AS users_m2,
  COUNT(DISTINCT CASE WHEN month_number = 3 THEN user_id END) AS users_m3,
  ROUND(
    COUNT(DISTINCT CASE WHEN month_number = 1 THEN user_id END) * 1.0 / 
    NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0),
    4
  ) AS r_m1,
  ROUND(
    COUNT(DISTINCT CASE WHEN month_number = 2 THEN user_id END) * 1.0 / 
    NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0),
    4
  ) AS r_m2,
  ROUND(
    COUNT(DISTINCT CASE WHEN month_number = 3 THEN user_id END) * 1.0 / 
    NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0),
    4
  ) AS r_m3
FROM user_activity
GROUP BY cohort_month
ORDER BY cohort_month;`
  },

  // SECTION 4: WIN RATE ANALYSIS

  // SECTION 4: MQL TO SQL ANALYSIS
  {
    id: 5,
    section: 11,
    sectionTitle: "B2B SaaS Sales Pipeline Analysis",
    questionNumber: "11.1",
    title: "MQL to SQL Conversion Rate by Channel",
    difficulty: "Medium",
    description: "Calculate Q2 2024 MQL→SQL conversion rate for each channel separately.",
    backgroundContext: `**Sales Funnel Concepts:**

In B2B companies, understanding the sales pipeline is critical for measuring marketing effectiveness and forecasting revenue.

**What is MQL (Marketing Qualified Lead)?**
In the real world, MQL status is typically determined by a scoring system. Marketing and Product teams jointly define criteria (specific to each company), such as:
- Visited pricing page
- Downloaded whitepaper
- Attended webinar
- Company size > 50 employees
- Job title = Manager or above
- Email engagement > 3 times

Once a lead reaches a certain score threshold → Marketing team marks them as MQL

**What is SQL (Sales Qualified Lead)?**
SQL means the lead has been vetted by sales and is ready for direct engagement. Typically after:
- Initial discovery call with sales rep
- Budget confirmed
- Decision-maker identified
- Timeline discussed`,
    exerciseDefinitions: [
      "In this exercise: A lead becomes MQL when they have 'demo_requested' activity",
      "A lead becomes SQL when they have 'discovery_call' activity"
    ],
    tables: {
      marketing_signups: [
        { id: 'L1', channel: 'Organic', created_at: '2024-04-10' },
        { id: 'L2', channel: 'Paid Search', created_at: '2024-05-01' },
        { id: 'L3', channel: 'Organic', created_at: '2024-04-20' },
        { id: 'L4', channel: 'Paid Search', created_at: '2024-05-05' },
        { id: 'L5', channel: 'Social', created_at: '2024-06-01' },
        { id: 'L6', channel: 'Social', created_at: '2024-06-15' },
        { id: 'L7', channel: 'Organic', created_at: '2024-05-18' },
        { id: 'L8', channel: 'Paid Search', created_at: '2024-06-08' }
      ],
      marketing_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'webinar_attended', activity_at: '2024-04-12' },
        { id: 2, lead_id: 'L1', activity_type: 'demo_requested', activity_at: '2024-04-15' },
        { id: 3, lead_id: 'L2', activity_type: 'whitepaper_download', activity_at: '2024-05-02' },
        { id: 4, lead_id: 'L2', activity_type: 'demo_requested', activity_at: '2024-05-03' },
        { id: 5, lead_id: 'L3', activity_type: 'email_opened', activity_at: '2024-04-22' },
        { id: 6, lead_id: 'L4', activity_type: 'demo_requested', activity_at: '2024-05-08' },
        { id: 7, lead_id: 'L7', activity_type: 'demo_requested', activity_at: '2024-05-20' },
        { id: 8, lead_id: 'L8', activity_type: 'demo_requested', activity_at: '2024-06-10' }
      ],
      sales_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'discovery_call', activity_at: '2024-04-20' },
        { id: 2, lead_id: 'L2', activity_type: 'discovery_call', activity_at: '2024-05-10' },
        { id: 3, lead_id: 'L4', activity_type: 'discovery_call', activity_at: '2024-05-15' },
        { id: 4, lead_id: 'L7', activity_type: 'discovery_call', activity_at: '2024-05-25' },
        { id: 5, lead_id: 'L8', activity_type: 'discovery_call', activity_at: '2024-06-12' }
      ]
    },
    expectedColumns: ['channel', 'mql_cnt', 'sql_cnt', 'mql_to_sql_rate'],
    hint: "Create two CTEs: (1) mql_leads with demo_requested, (2) sql_leads with discovery_call. Then LEFT JOIN both back to marketing_signups, filter WHERE mql_leads IS NOT NULL, group by channel, and calculate the conversion rate using COUNT(DISTINCT ...) * 1.0 / NULLIF().",
    concept: "CTEs, LEFT JOIN, COUNT DISTINCT, Conversion rate calculation",
    sampleAnswer: `WITH mql_leads AS (
  SELECT DISTINCT lead_id
  FROM marketing_activities
  WHERE activity_type = 'demo_requested'
),
sql_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'discovery_call'
)

SELECT
  ms.channel,
  COUNT(DISTINCT m.lead_id) AS mql_cnt,
  COUNT(DISTINCT s.lead_id) AS sql_cnt,
  ROUND(
    COUNT(DISTINCT s.lead_id) * 1.0 / NULLIF(COUNT(DISTINCT m.lead_id), 0),
    4
  ) AS mql_to_sql_rate
FROM marketing_signups ms
LEFT JOIN mql_leads m ON ms.id = m.lead_id
LEFT JOIN sql_leads s ON ms.id = s.lead_id
WHERE m.lead_id IS NOT NULL
GROUP BY ms.channel
ORDER BY mql_to_sql_rate DESC;`
  },

  {
    id: 7,
    section: 11,
    sectionTitle: "B2B SaaS Sales Pipeline Analysis",
    questionNumber: "11.2",
    title: "By Channel + Overall Total",
    difficulty: "Medium",
    description: "Calculate Q2 2024 MQL→SQL conversion rate for each channel AND add a 'Total' row showing overall conversion rate. There are multiple ways to solve this!",
    exerciseDefinitions: [
      "A lead becomes MQL when they have 'demo_requested' activity",
      "A lead becomes SQL when they have 'discovery_call' activity"
    ],
    hasMultipleSolutions: true,
    alternativeSolutions: [
      {
        method: "Method 1: UNION ALL",
        description: "Calculate channel-level results, then add a summary row using UNION ALL",
        code: `WITH mql_leads AS (
  SELECT DISTINCT lead_id
  FROM marketing_activities
  WHERE activity_type = 'demo_requested'
),
sql_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'discovery_call'
),
by_channel AS (
  SELECT
    ms.channel,
    COUNT(DISTINCT m.lead_id) AS mql_cnt,
    COUNT(DISTINCT s.lead_id) AS sql_cnt,
    ROUND(
      COUNT(DISTINCT s.lead_id) * 1.0 / 
      NULLIF(COUNT(DISTINCT m.lead_id), 0),
      4
    ) AS mql_to_sql_rate
  FROM marketing_signups ms
  LEFT JOIN mql_leads m ON ms.id = m.lead_id
  LEFT JOIN sql_leads s ON ms.id = s.lead_id
  WHERE m.lead_id IS NOT NULL
  GROUP BY ms.channel
)

SELECT * FROM by_channel

UNION ALL

SELECT
  'Total' AS channel,
  SUM(mql_cnt) AS mql_cnt,
  SUM(sql_cnt) AS sql_cnt,
  ROUND(SUM(sql_cnt) * 1.0 / NULLIF(SUM(mql_cnt), 0), 4) AS mql_to_sql_rate
FROM by_channel;`
      },
      {
        method: "Method 2: Window Functions",
        description: "Use window functions to add total columns alongside each channel row",
        code: `WITH mql_leads AS (
  SELECT DISTINCT lead_id
  FROM marketing_activities
  WHERE activity_type = 'demo_requested'
),
sql_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'discovery_call'
)

SELECT
  ms.channel,
  COUNT(DISTINCT m.lead_id) AS mql_cnt,
  COUNT(DISTINCT s.lead_id) AS sql_cnt,
  ROUND(
    COUNT(DISTINCT s.lead_id) * 1.0 / 
    NULLIF(COUNT(DISTINCT m.lead_id), 0),
    4
  ) AS mql_to_sql_rate,
  
  -- Total using window functions
  SUM(COUNT(DISTINCT m.lead_id)) OVER () AS total_mql_cnt,
  SUM(COUNT(DISTINCT s.lead_id)) OVER () AS total_sql_cnt,
  ROUND(
    SUM(COUNT(DISTINCT s.lead_id)) OVER () * 1.0 / 
    NULLIF(SUM(COUNT(DISTINCT m.lead_id)) OVER (), 0),
    4
  ) AS total_rate
FROM marketing_signups ms
LEFT JOIN mql_leads m ON ms.id = m.lead_id
LEFT JOIN sql_leads s ON ms.id = s.lead_id
WHERE m.lead_id IS NOT NULL
GROUP BY ms.channel;`
      }
    ],
    tables: {
      marketing_signups: [
        { id: 'L1', channel: 'Organic', created_at: '2024-04-10' },
        { id: 'L2', channel: 'Paid Search', created_at: '2024-05-01' },
        { id: 'L3', channel: 'Organic', created_at: '2024-04-20' },
        { id: 'L4', channel: 'Paid Search', created_at: '2024-05-05' },
        { id: 'L5', channel: 'Social', created_at: '2024-06-01' },
        { id: 'L6', channel: 'Social', created_at: '2024-06-15' },
        { id: 'L7', channel: 'Organic', created_at: '2024-05-18' },
        { id: 'L8', channel: 'Paid Search', created_at: '2024-06-08' }
      ],
      marketing_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'webinar_attended', activity_at: '2024-04-12' },
        { id: 2, lead_id: 'L1', activity_type: 'demo_requested', activity_at: '2024-04-15' },
        { id: 3, lead_id: 'L2', activity_type: 'whitepaper_download', activity_at: '2024-05-02' },
        { id: 4, lead_id: 'L2', activity_type: 'demo_requested', activity_at: '2024-05-03' },
        { id: 5, lead_id: 'L3', activity_type: 'email_opened', activity_at: '2024-04-22' },
        { id: 6, lead_id: 'L4', activity_type: 'demo_requested', activity_at: '2024-05-08' },
        { id: 7, lead_id: 'L7', activity_type: 'demo_requested', activity_at: '2024-05-20' },
        { id: 8, lead_id: 'L8', activity_type: 'demo_requested', activity_at: '2024-06-10' }
      ],
      sales_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'discovery_call', activity_at: '2024-04-20' },
        { id: 2, lead_id: 'L2', activity_type: 'discovery_call', activity_at: '2024-05-10' },
        { id: 3, lead_id: 'L4', activity_type: 'discovery_call', activity_at: '2024-05-15' },
        { id: 4, lead_id: 'L7', activity_type: 'discovery_call', activity_at: '2024-05-25' },
        { id: 5, lead_id: 'L8', activity_type: 'discovery_call', activity_at: '2024-06-12' }
      ]
    },
    expectedColumns: ['channel', 'mql_cnt', 'sql_cnt', 'mql_to_sql_rate'],
    hint: "Use UNION ALL to combine channel-level results with an aggregated 'Total' row, or use window functions like SUM() OVER () to show totals alongside each row.",
    concept: "UNION ALL, Window functions, Aggregation",
    sampleAnswer: `-- See alternative solutions for both methods`
  },

  {
    id: 8,
    section: 11,
    sectionTitle: "B2B SaaS Sales Pipeline Analysis",
    questionNumber: "11.3",
    title: "Custom MQL Definition",
    difficulty: "Medium",
    description: "Define your own MQL criteria based on marketing activities and calculate MQL rate by channel.",
    backgroundContext: `In real-world scenarios, companies define their own MQL criteria based on user behavior. 

For this exercise, let's define a lead as MQL if they meet ANY of the following:
- Downloaded whitepaper (1+ times)
- Attended webinar (1+ times)  
- Email engagement (3+ times)

Calculate what percentage of leads in each channel become MQLs under this definition.`,
    tables: {
      marketing_signups: [
        { id: 'L1', channel: 'Organic', created_at: '2024-04-10' },
        { id: 'L2', channel: 'Paid Search', created_at: '2024-05-01' },
        { id: 'L3', channel: 'Organic', created_at: '2024-04-20' },
        { id: 'L4', channel: 'Paid Search', created_at: '2024-05-05' },
        { id: 'L5', channel: 'Social', created_at: '2024-06-01' },
        { id: 'L6', channel: 'Social', created_at: '2024-06-15' },
        { id: 'L7', channel: 'Organic', created_at: '2024-05-18' },
        { id: 'L8', channel: 'Paid Search', created_at: '2024-06-08' }
      ],
      marketing_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'webinar_attended', activity_at: '2024-04-12' },
        { id: 2, lead_id: 'L1', activity_type: 'email_opened', activity_at: '2024-04-13' },
        { id: 3, lead_id: 'L1', activity_type: 'email_opened', activity_at: '2024-04-14' },
        { id: 4, lead_id: 'L1', activity_type: 'email_opened', activity_at: '2024-04-15' },
        { id: 5, lead_id: 'L2', activity_type: 'whitepaper_download', activity_at: '2024-05-02' },
        { id: 6, lead_id: 'L3', activity_type: 'email_opened', activity_at: '2024-04-22' },
        { id: 7, lead_id: 'L4', activity_type: 'webinar_attended', activity_at: '2024-05-08' },
        { id: 8, lead_id: 'L5', activity_type: 'email_opened', activity_at: '2024-06-02' },
        { id: 9, lead_id: 'L5', activity_type: 'email_opened', activity_at: '2024-06-03' },
        { id: 10, lead_id: 'L6', activity_type: 'whitepaper_download', activity_at: '2024-06-16' },
        { id: 11, lead_id: 'L7', activity_type: 'email_opened', activity_at: '2024-05-19' },
        { id: 12, lead_id: 'L7', activity_type: 'email_opened', activity_at: '2024-05-20' },
        { id: 13, lead_id: 'L7', activity_type: 'email_opened', activity_at: '2024-05-21' },
        { id: 14, lead_id: 'L8', activity_type: 'webinar_attended', activity_at: '2024-06-10' }
      ]
    },
    expectedColumns: ['channel', 'total_leads', 'mql_cnt', 'mql_rate'],
    hint: "Create a CTE that identifies MQLs based on the criteria: COUNT activities by type per lead, then check if whitepaper >= 1 OR webinar >= 1 OR email >= 3. Use CASE WHEN with SUM() to count by activity type.",
    concept: "Complex conditional logic, Activity aggregation, Custom scoring",
    sampleAnswer: `WITH lead_activities AS (
  SELECT
    lead_id,
    SUM(CASE WHEN activity_type = 'whitepaper_download' THEN 1 ELSE 0 END) AS whitepaper_cnt,
    SUM(CASE WHEN activity_type = 'webinar_attended' THEN 1 ELSE 0 END) AS webinar_cnt,
    SUM(CASE WHEN activity_type = 'email_opened' THEN 1 ELSE 0 END) AS email_cnt
  FROM marketing_activities
  GROUP BY lead_id
),
mqls AS (
  SELECT lead_id
  FROM lead_activities
  WHERE whitepaper_cnt >= 1 
     OR webinar_cnt >= 1 
     OR email_cnt >= 3
)

SELECT
  ms.channel,
  COUNT(DISTINCT ms.id) AS total_leads,
  COUNT(DISTINCT m.lead_id) AS mql_cnt,
  ROUND(
    COUNT(DISTINCT m.lead_id) * 1.0 / NULLIF(COUNT(DISTINCT ms.id), 0),
    4
  ) AS mql_rate
FROM marketing_signups ms
LEFT JOIN mqls m ON ms.id = m.lead_id
GROUP BY ms.channel
ORDER BY mql_rate DESC;`
  },

  {
    id: 9,
    section: 11,
    sectionTitle: "B2B SaaS Sales Pipeline Analysis",
    questionNumber: "11.4",
    title: "Opportunity & Win Rate with Performance Analysis",
    difficulty: "Hard",
    description: "Calculate opportunity rate and win rate by channel, then analyze which channels are outperforming using statistical methods.",
    backgroundContext: `**What is an Opportunity?**
An opportunity represents a qualified lead that has entered the formal sales pipeline with a concrete deal. This typically happens when:
- Sales team has sent a proposal/quote
- Deal has a specific dollar amount
- Entered into CRM system for tracking
- Active negotiation has begun

In this exercise: A lead becomes an Opportunity when they have 'proposal_sent' activity

**What is Win Rate?**
Win rate is the percentage of opportunities that result in closed-won deals (contract signed).
Formula: Win Rate = Closed-Won / Total Opportunities

**Why it matters:** Win rate measures sales team's closing effectiveness and deal quality. Higher win rates indicate better lead qualification and sales execution.`,
    preQuestionPrompt: {
      question: "Before writing SQL: How would you determine if a channel is performing significantly better or worse than average?",
      answer: `**Statistical Approach: Standard Deviation Analysis**

To determine if a channel's performance is significantly different from average:

**Step 1: Calculate metrics**
- Each channel's win rate
- Average win rate across all channels
- Standard deviation of win rates

**Step 2: Apply the rule**
A channel is considered:
- **Outperformer**: Win rate > (Average + 1 Standard Deviation)
- **Underperformer**: Win rate < (Average - 1 Standard Deviation)
- **Average**: Within 1 standard deviation of mean

**Mathematical Formula:**
\`\`\`
Standard Deviation = SQRT(Σ(x - μ)² / n)
where:
- x = each channel's win rate
- μ = mean win rate
- n = number of channels
\`\`\`

**Example:**
- Social: 78% win rate
- Average: 27% win rate  
- Std Dev: 25%

Social is (78 - 27) / 25 = **2.04 standard deviations** above average
→ **Statistically significant outperformer!**

This approach helps you avoid being fooled by small sample sizes or random variation.`
    },
    postQuestionPrompt: {
      question: "Based on your query results, which channel is the best performer and why?",
      answer: `**Analysis Framework:**

Look at multiple metrics together:

1. **Win Rate** - Quality of conversions
2. **Volume** - Sample size matters
3. **Statistical Significance** - Is it real or luck?

**Example Interpretation:**
If your results show:
- Channel A: 80% win rate (5 opportunities)
- Channel B: 45% win rate (100 opportunities)

Channel A has higher win rate BUT:
- Small sample size (n=5) = high variance
- May not be statistically significant
- Could be luck

Channel B:
- Large sample (n=100) = more reliable
- Closer to sustainable performance

**Best Practice:**
Consider channels "proven performers" only when:
- Win rate > average + 1 std dev
- Sample size > 20-30 opportunities
- Consistent over time (multiple quarters)`
    },
    tables: {
      marketing_signups: [
        { id: 'L1', channel: 'Organic', created_at: '2024-04-10' },
        { id: 'L2', channel: 'Paid Search', created_at: '2024-05-01' },
        { id: 'L3', channel: 'Organic', created_at: '2024-04-20' },
        { id: 'L4', channel: 'Paid Search', created_at: '2024-05-05' },
        { id: 'L5', channel: 'Social', created_at: '2024-06-01' },
        { id: 'L6', channel: 'Social', created_at: '2024-06-15' },
        { id: 'L7', channel: 'Organic', created_at: '2024-05-18' },
        { id: 'L8', channel: 'Paid Search', created_at: '2024-06-08' },
        { id: 'L9', channel: 'Social', created_at: '2024-04-25' }
      ],
      marketing_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'demo_requested', activity_at: '2024-04-15' },
        { id: 2, lead_id: 'L2', activity_type: 'demo_requested', activity_at: '2024-05-03' },
        { id: 3, lead_id: 'L4', activity_type: 'demo_requested', activity_at: '2024-05-08' },
        { id: 4, lead_id: 'L5', activity_type: 'demo_requested', activity_at: '2024-06-02' },
        { id: 5, lead_id: 'L7', activity_type: 'demo_requested', activity_at: '2024-05-20' },
        { id: 6, lead_id: 'L8', activity_type: 'demo_requested', activity_at: '2024-06-10' },
        { id: 7, lead_id: 'L9', activity_type: 'demo_requested', activity_at: '2024-04-26' }
      ],
      sales_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'discovery_call', activity_at: '2024-04-20' },
        { id: 2, lead_id: 'L1', activity_type: 'proposal_sent', activity_at: '2024-04-25' },
        { id: 3, lead_id: 'L1', activity_type: 'contract_signed', activity_at: '2024-05-01' },
        { id: 4, lead_id: 'L2', activity_type: 'discovery_call', activity_at: '2024-05-10' },
        { id: 5, lead_id: 'L2', activity_type: 'proposal_sent', activity_at: '2024-05-15' },
        { id: 6, lead_id: 'L4', activity_type: 'discovery_call', activity_at: '2024-05-15' },
        { id: 7, lead_id: 'L4', activity_type: 'proposal_sent', activity_at: '2024-05-20' },
        { id: 8, lead_id: 'L4', activity_type: 'contract_signed', activity_at: '2024-05-28' },
        { id: 9, lead_id: 'L5', activity_type: 'discovery_call', activity_at: '2024-06-05' },
        { id: 10, lead_id: 'L7', activity_type: 'discovery_call', activity_at: '2024-05-25' },
        { id: 11, lead_id: 'L7', activity_type: 'proposal_sent', activity_at: '2024-06-01' },
        { id: 12, lead_id: 'L9', activity_type: 'discovery_call', activity_at: '2024-04-28' },
        { id: 13, lead_id: 'L9', activity_type: 'proposal_sent', activity_at: '2024-05-05' },
        { id: 14, lead_id: 'L9', activity_type: 'contract_signed', activity_at: '2024-05-12' }
      ]
    },
    expectedColumns: ['channel', 'mql_cnt', 'sql_cnt', 'opp_cnt', 'won_cnt', 'sql_to_opp_rate', 'win_rate'],
    hint: "Create CTEs for each stage: MQLs (demo_requested), SQLs (discovery_call), Opportunities (proposal_sent), and Wins (contract_signed). Then calculate rates at each stage. The statistical analysis part is conceptual - focus on calculating the rates correctly.",
    concept: "Multi-stage funnel analysis, Statistical thinking, Performance evaluation",
    sampleAnswer: `WITH mql_leads AS (
  SELECT DISTINCT lead_id
  FROM marketing_activities
  WHERE activity_type = 'demo_requested'
),
sql_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'discovery_call'
),
opp_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'proposal_sent'
),
won_leads AS (
  SELECT DISTINCT lead_id
  FROM sales_activities
  WHERE activity_type = 'contract_signed'
)

SELECT
  ms.channel,
  COUNT(DISTINCT m.lead_id) AS mql_cnt,
  COUNT(DISTINCT s.lead_id) AS sql_cnt,
  COUNT(DISTINCT o.lead_id) AS opp_cnt,
  COUNT(DISTINCT w.lead_id) AS won_cnt,
  ROUND(
    COUNT(DISTINCT o.lead_id) * 1.0 / NULLIF(COUNT(DISTINCT s.lead_id), 0),
    4
  ) AS sql_to_opp_rate,
  ROUND(
    COUNT(DISTINCT w.lead_id) * 1.0 / NULLIF(COUNT(DISTINCT o.lead_id), 0),
    4
  ) AS win_rate
FROM marketing_signups ms
LEFT JOIN mql_leads m ON ms.id = m.lead_id
LEFT JOIN sql_leads s ON ms.id = s.lead_id
LEFT JOIN opp_leads o ON ms.id = o.lead_id
LEFT JOIN won_leads w ON ms.id = w.lead_id
WHERE m.lead_id IS NOT NULL
GROUP BY ms.channel
ORDER BY win_rate DESC;`
  },

  // SECTION 5: PIPELINE VELOCITY
  {
    id: 9,
    section: 10,
    sectionTitle: "Pipeline Analysis",
    questionNumber: "10.1",
    title: "Pipeline Velocity by Month",
    difficulty: "Medium",
    description: "Compute monthly pipeline velocity = (#Opp × AvgDeal × WinRate) ÷ Avg Sales Cycle Days.",
    backgroundContext: `**What is Pipeline Velocity?**

Pipeline velocity measures how quickly opportunities move through your sales pipeline and convert to revenue. It's a key metric for forecasting and identifying bottlenecks.

**Formula:**
Pipeline Velocity = (Number of Opportunities × Average Deal Size × Win Rate) / Average Sales Cycle Length

**Why it matters:**
- Higher velocity = faster revenue generation
- Helps identify which factors to optimize (more opps? bigger deals? faster close?)
- Critical for sales forecasting`,
    tables: {
      opportunities: [
        { id: 1, created_at: '2024-01-15', amount: 5000, is_won: true, closed_at: '2024-02-15' },
        { id: 2, created_at: '2024-01-20', amount: 3000, is_won: false, closed_at: '2024-02-25' },
        { id: 3, created_at: '2024-02-10', amount: 7000, is_won: true, closed_at: '2024-03-20' },
        { id: 4, created_at: '2024-02-15', amount: 4500, is_won: true, closed_at: '2024-03-10' },
        { id: 5, created_at: '2024-03-05', amount: 6000, is_won: false, closed_at: null }
      ]
    },
    expectedColumns: ['mth', 'opp_cnt', 'avg_deal', 'win_rate', 'cycle_days', 'pipeline_velocity'],
    hint: "Calculate monthly metrics: COUNT opps, AVG amount, win rate (won/total), avg cycle days using DATEDIFF. Then apply the velocity formula. Use COALESCE for null closed_at dates.",
    concept: "CTEs, DATE_TRUNC, DATEDIFF, Complex calculations, COALESCE",
    sampleAnswer: `SELECT
  DATE_TRUNC('month', created_at) AS mth,
  COUNT(*) AS opp_cnt,
  ROUND(AVG(amount), 2) AS avg_deal,
  ROUND(
    SUM(CASE WHEN is_won THEN 1 ELSE 0 END) * 1.0 / NULLIF(COUNT(*), 0),
    4
  ) AS win_rate,
  ROUND(
    AVG(DATEDIFF(day, created_at, COALESCE(closed_at, CURRENT_DATE))),
    2
  ) AS cycle_days,
  ROUND(
    (COUNT(*) * AVG(amount) * 
     (SUM(CASE WHEN is_won THEN 1 ELSE 0 END) * 1.0 / NULLIF(COUNT(*), 0))) /
    NULLIF(AVG(DATEDIFF(day, created_at, COALESCE(closed_at, CURRENT_DATE))), 0),
    2
  ) AS pipeline_velocity
FROM opportunities
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY mth;`
  },

  // SECTION 6: RFM SEGMENTATION
  {
    id: 10,
    section: 4,
    sectionTitle: "Customer Segmentation",
    questionNumber: "4.1",
    title: "RFM Segmentation",
    difficulty: "Medium",
    description: "Assign Recency, Frequency, and Monetary scores (1-5) using NTILE and output RFM segments.",
    backgroundContext: `**What is RFM Analysis?**

RFM is a customer segmentation technique that groups customers based on three dimensions:

**R - Recency**: How recently did the customer purchase?
- Score 5 = Most recent (purchased yesterday)
- Score 1 = Least recent (purchased 6 months ago)
- Better predictor than Frequency or Monetary alone

**F - Frequency**: How often do they purchase?
- Score 5 = Very frequent (10+ orders)
- Score 1 = One-time buyer

**M - Monetary**: How much do they spend?
- Score 5 = High spender ($5000+)
- Score 1 = Low spender ($100)

**RFM Segments:**
- "555" = Champions (recent, frequent, high-value)
- "511" = Recent big spenders (might become loyal)
- "155" = Churning high-value (need win-back campaign)
- "111" = Lost customers

**Why RFM matters:**
- Personalize marketing campaigns
- Identify at-risk customers
- Prioritize retention efforts`,
    tables: {
      orders: [
        { user_id: 'U1', order_time: '2025-01-15', revenue: 500 },
        { user_id: 'U1', order_time: '2025-01-20', revenue: 300 },
        { user_id: 'U2', order_time: '2024-12-01', revenue: 1000 },
        { user_id: 'U3', order_time: '2025-02-05', revenue: 150 },
        { user_id: 'U3', order_time: '2025-02-06', revenue: 200 },
        { user_id: 'U3', order_time: '2025-02-07', revenue: 250 },
        { user_id: 'U4', order_time: '2024-10-15', revenue: 2000 },
        { user_id: 'U5', order_time: '2025-02-01', revenue: 800 }
      ]
    },
    expectedColumns: ['rfm_segment', 'users'],
    hint: "Calculate per user: MAX(order_time) for recency, COUNT(*) for frequency, SUM(revenue) for monetary. Use NTILE(5) to score each dimension (remember: for recency, more recent = higher score, so use DESC). Concatenate scores to create segment.",
    concept: "Window functions (NTILE), CONCAT, Date arithmetic, RFM methodology",
    sampleAnswer: `WITH user_metrics AS (
  SELECT
    user_id,
    DATEDIFF(day, MAX(order_time), CURRENT_DATE) AS days_since_last_order,
    COUNT(*) AS order_count,
    SUM(revenue) AS total_revenue
  FROM orders
  GROUP BY user_id
),
rfm_scores AS (
  SELECT
    user_id,
    -- Recency: Lower days = higher score (so use DESC)
    NTILE(5) OVER (ORDER BY days_since_last_order DESC) AS r_score,
    NTILE(5) OVER (ORDER BY order_count) AS f_score,
    NTILE(5) OVER (ORDER BY total_revenue) AS m_score
  FROM user_metrics
)

SELECT
  CONCAT(r_score, f_score, m_score) AS rfm_segment,
  COUNT(*) AS users
FROM rfm_scores
GROUP BY CONCAT(r_score, f_score, m_score)
ORDER BY users DESC;`
  },

  // SECTION 7: LANDING PAGE ANALYSIS
  {
    id: 11,
    section: 5,
    sectionTitle: "Web Analytics",
    questionNumber: "5.1",
    title: "Top Landing Pages by Conversion Rate",
    difficulty: "Medium",
    description: "Find top 20 landing pages (last 30 days) and their purchase conversion rate.",
    backgroundContext: `**Landing Page Analysis**

Landing pages are where users first enter your site. Understanding which pages convert best helps you:
- Optimize marketing spend (invest in high-converting pages)
- Identify poor performers (fix or stop promoting)
- A/B test improvements

**Key Metrics:**
- Sessions: Number of unique user visits starting on this page
- Conversions: Users who made a purchase after landing here
- Conversion Rate: % of sessions that converted`,
    tables: {
      web_events: [
        { user_id: 'U001', event_time: '2025-02-01 09:00:00', page: '/home', event_name: 'page_view' },
        { user_id: 'U001', event_time: '2025-02-01 09:05:00', page: '/checkout', event_name: 'purchase' },
        { user_id: 'U002', event_time: '2025-02-02 14:10:00', page: '/landing/summer', event_name: 'page_view' },
        { user_id: 'U002', event_time: '2025-02-02 14:20:00', page: '/checkout', event_name: 'purchase' },
        { user_id: 'U003', event_time: '2025-02-03 11:30:00', page: '/landing/winter', event_name: 'page_view' },
        { user_id: 'U004', event_time: '2025-02-04 10:00:00', page: '/home', event_name: 'page_view' },
        { user_id: 'U004', event_time: '2025-02-04 10:10:00', page: '/checkout', event_name: 'purchase' },
        { user_id: 'U005', event_time: '2025-02-05 15:45:00', page: '/landing/summer', event_name: 'page_view' },
        { user_id: 'U006', event_time: '2025-02-06 16:00:00', page: '/landing/winter', event_name: 'page_view' },
        { user_id: 'U006', event_time: '2025-02-06 16:08:00', page: '/checkout', event_name: 'purchase' }
      ]
    },
    expectedColumns: ['first_page', 'sessions_cnt', 'conv_cnt', 'conv_rate'],
    hint: "Identify each user's first page_view as their landing page. Then check if that user made a purchase. Count total sessions per landing page and conversions.",
    concept: "Session analysis, MIN/FIRST_VALUE, Conversion funnel, Self-join",
    sampleAnswer: `WITH landing_pages AS (
  SELECT
    user_id,
    page AS first_page
  FROM (
    SELECT
      user_id,
      page,
      ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time) AS rn
    FROM web_events
    WHERE event_name = 'page_view'
  ) ranked
  WHERE rn = 1
),
conversions AS (
  SELECT DISTINCT user_id
  FROM web_events
  WHERE event_name = 'purchase'
)

SELECT
  lp.first_page,
  COUNT(DISTINCT lp.user_id) AS sessions_cnt,
  COUNT(DISTINCT c.user_id) AS conv_cnt,
  ROUND(
    COUNT(DISTINCT c.user_id) * 1.0 / NULLIF(COUNT(DISTINCT lp.user_id), 0),
    4
  ) AS conv_rate
FROM landing_pages lp
LEFT JOIN conversions c ON c.user_id = lp.user_id
GROUP BY lp.first_page
ORDER BY conv_rate DESC
LIMIT 20;`
  },

  // SECTION 8: OPPORTUNITY STAGE ANALYSIS
  {
    id: 12,
    section: 6,
    sectionTitle: "Sales Process Analysis",
    questionNumber: "6.1",
    title: "Average Conversion Window",
    difficulty: "Easy",
    description: "You are a B2C company analyst. It's important to know the duration from the day users landed on the landing page to the day they started the subscription.",
    backgroundContext: `**What is Conversion Window?**

The conversion window measures how long it takes for users to convert from their first touchpoint (landing page signup) to becoming a paying customer (starting subscription).

**Why This Matters:**
- **Optimize marketing**: If conversion takes 7 days on average, you know when to send follow-up emails
- **Forecast revenue**: Understand the lag between marketing spend and revenue
- **Identify friction**: Long conversion windows may indicate onboarding issues
- **Set expectations**: Help sales team know typical deal timelines

**Example:**
- User signs up on landing page: Jan 1
- User starts subscription: Jan 8
- Conversion window: 7 days

**Typical Conversion Windows:**
- SaaS trial → subscription: 7-14 days
- E-commerce first visit → purchase: 3-7 days
- B2B demo → contract: 30-90 days`,
    tables: {
      user_data: [
        { user_id: 'U1', landing_page_signup_date: '2024-01-01', subscription_date: '2024-01-08' },
        { user_id: 'U2', landing_page_signup_date: '2024-01-05', subscription_date: '2024-01-12' },
        { user_id: 'U3', landing_page_signup_date: '2024-01-10', subscription_date: '2024-01-25' },
        { user_id: 'U4', landing_page_signup_date: '2024-01-15', subscription_date: '2024-02-01' },
        { user_id: 'U5', landing_page_signup_date: '2024-01-20', subscription_date: null },
        { user_id: 'U6', landing_page_signup_date: '2024-01-25', subscription_date: '2024-02-10' }
      ]
    },
    expectedColumns: ['user_id', 'conversion_days'],
    hint: "Calculate date difference using DATEDIFF(day, landing_page_signup_date, subscription_date). For users who haven't subscribed yet, you can either exclude them or use CURRENT_DATE to show days since signup.",
    concept: "Date arithmetic, DATEDIFF, Conversion analysis, COALESCE",
    sampleAnswer: `-- Option 1: Only include users who subscribed
SELECT
  user_id,
  DATEDIFF(day, landing_page_signup_date, subscription_date) AS conversion_days
FROM user_data
WHERE subscription_date IS NOT NULL
ORDER BY conversion_days;

-- Option 2: Include all users (non-subscribers show days since signup)
SELECT
  user_id,
  DATEDIFF(
    day, 
    landing_page_signup_date, 
    COALESCE(subscription_date, CURRENT_DATE)
  ) AS conversion_days
FROM user_data
ORDER BY conversion_days;

-- Option 3: Calculate average conversion window
SELECT
  COUNT(*) AS total_conversions,
  ROUND(AVG(DATEDIFF(day, landing_page_signup_date, subscription_date)), 2) AS avg_conversion_days,
  MIN(DATEDIFF(day, landing_page_signup_date, subscription_date)) AS min_days,
  MAX(DATEDIFF(day, landing_page_signup_date, subscription_date)) AS max_days
FROM user_data
WHERE subscription_date IS NOT NULL;`
  },

  // SECTION 9: DATA QUALITY
  {
    id: 13,
    section: 7,
    sectionTitle: "Data Quality & Deduplication",
    questionNumber: "7.1",
    title: "Latest Activity per Lead (Deduplication)",
    difficulty: "Easy",
    description: "Return the most recent record per (lead_id, activity_type) combination.",
    backgroundContext: `**Why Deduplication Matters**

In real-world data, you often have:
- Multiple emails sent to same lead
- Multiple calls logged
- Duplicate records from system integrations

Deduplication ensures:
- Accurate counts (don't double-count activities)
- Latest information (use most recent record)
- Clean reporting

**Common Deduplication Scenarios:**
1. Latest activity per lead (this exercise)
2. Latest user profile update
3. Most recent order status
4. Newest address on file`,
    tables: {
      sales_activities: [
        { id: 1, lead_id: 'L1', activity_type: 'email', activity_at: '2024-01-10' },
        { id: 2, lead_id: 'L1', activity_type: 'email', activity_at: '2024-01-15' },
        { id: 3, lead_id: 'L1', activity_type: 'call', activity_at: '2024-01-12' },
        { id: 4, lead_id: 'L2', activity_type: 'email', activity_at: '2024-01-11' },
        { id: 5, lead_id: 'L2', activity_type: 'call', activity_at: '2024-01-14' },
        { id: 6, lead_id: 'L2', activity_type: 'call', activity_at: '2024-01-18' }
      ]
    },
    expectedColumns: ['id', 'lead_id', 'activity_type', 'activity_at', 'rn'],
    hint: "Use ROW_NUMBER() OVER (PARTITION BY lead_id, activity_type ORDER BY activity_at DESC). Filter WHERE rn = 1 to get only the most recent record for each combination.",
    concept: "Window functions (ROW_NUMBER), PARTITION BY multiple columns, Deduplication",
    sampleAnswer: `SELECT
  id,
  lead_id,
  activity_type,
  activity_at,
  ROW_NUMBER() OVER (
    PARTITION BY lead_id, activity_type 
    ORDER BY activity_at DESC
  ) AS rn
FROM sales_activities
QUALIFY rn = 1;

-- Alternative without QUALIFY:
WITH ranked AS (
  SELECT
    id,
    lead_id,
    activity_type,
    activity_at,
    ROW_NUMBER() OVER (
      PARTITION BY lead_id, activity_type 
      ORDER BY activity_at DESC
    ) AS rn
  FROM sales_activities
)
SELECT *
FROM ranked
WHERE rn = 1;`
  },

  // SECTION 10: GROWTH METRICS
  {
    id: 14,
    section: 8,
    sectionTitle: "Growth Analysis",
    questionNumber: "8.1",
    title: "Week-over-Week Leads Growth",
    difficulty: "Medium",
    description: "Compute weekly leads count and week-over-week growth (absolute and percentage).",
    backgroundContext: `**Week-over-Week (WoW) Growth**

WoW growth helps you:
- Track momentum (are we growing faster or slower?)
- Identify trends early (spot problems before month-end)
- Measure campaign impact (did that launch work?)

**Formulas:**
- Absolute growth = This week - Last week
- Percentage growth = (This week - Last week) / Last week × 100

**Example:**
- Week 1: 100 leads
- Week 2: 120 leads
- Absolute: +20 leads
- Percentage: +20%`,
    tables: {
      leads: [
        { id: 'L1', created_at: '2024-01-08' },
        { id: 'L2', created_at: '2024-01-10' },
        { id: 'L3', created_at: '2024-01-12' },
        { id: 'L4', created_at: '2024-01-15' },
        { id: 'L5', created_at: '2024-01-16' },
        { id: 'L6', created_at: '2024-01-17' },
        { id: 'L7', created_at: '2024-01-18' },
        { id: 'L8', created_at: '2024-01-22' },
        { id: 'L9', created_at: '2024-01-24' }
      ]
    },
    expectedColumns: ['wk', 'leads_cnt', 'wow_abs', 'wow_pct'],
    hint: "Use DATE_TRUNC('week', created_at) to group by week. Use LAG() window function to get previous week's count. Calculate differences for absolute and percentage growth.",
    concept: "DATE_TRUNC, Window functions (LAG), Week-over-week analysis, Percentage calculation",
    sampleAnswer: `WITH weekly_counts AS (
  SELECT
    DATE_TRUNC('week', created_at) AS wk,
    COUNT(*) AS leads_cnt
  FROM leads
  GROUP BY DATE_TRUNC('week', created_at)
)

SELECT
  wk,
  leads_cnt,
  leads_cnt - LAG(leads_cnt) OVER (ORDER BY wk) AS wow_abs,
  ROUND(
    (leads_cnt - LAG(leads_cnt) OVER (ORDER BY wk)) * 1.0 / 
    NULLIF(LAG(leads_cnt) OVER (ORDER BY wk), 0),
    4
  ) AS wow_pct
FROM weekly_counts
ORDER BY wk;`
  },

  // SECTION 11: TIKTOK LAUNCH IMPACT ANALYSIS
  {
    id: 15,
    section: 9,
    sectionTitle: "TikTok Launch Impact Analysis",
    questionNumber: "9.0",
    title: "Analysis Framework - How Would You Approach This?",
    difficulty: "Medium",
    description: "Growth team launched TikTok channel on January 1st. Now you need to measure TikTok's impact on overall performance, including cost efficiency and conversion. You have data on ad spend, impressions, clicks, and signups. How would you approach this analysis?",
    backgroundContext: `**The Challenge:**

When a new marketing channel launches, you can't just compare total metrics before/after because:
- Total budget changed (was $10K, now $15K with TikTok)
- Total signups increased - but is that just because we spent more?
- Need to isolate TikTok's actual contribution

**Key Questions:**
1. How does TikTok perform vs other channels?
2. Did TikTok improve overall efficiency or drag it down?
3. What's TikTok's incremental value?`,
    hint: "Think about normalization - how do you compare performance when spending levels are different? Consider both channel-level and portfolio-level metrics.",
    concept: "Marketing analysis framework, Normalization methods, Incremental analysis",
    sampleAnswer: `ANALYSIS FRAMEWORK:

I would analyze from three levels:

1. CHANNEL-LEVEL ANALYSIS (TikTok's own performance)
   - Calculate TikTok's CPM, CPC, CPA, CVR
   - Compare with other channels
   - Question: Is TikTok competitive on its own?

2. PORTFOLIO-LEVEL EFFICIENCY (Overall impact with normalization)
   - Problem: Total budget changed, can't directly compare total signups
   - Solution: Normalize by spend
   - Calculate "Signups per $1000 spend" for Before vs After
   - Formula: (Total Signups / Total Spend) × 1000
   - If After > Before → TikTok improved overall efficiency
   - If After < Before → TikTok dragged down efficiency

3. INCREMENTAL ANALYSIS (TikTok's marginal contribution)
   - Isolate TikTok's contribution
   - Compare: Existing channels in Jan vs TikTok in Jan
   - Question: Is TikTok's incremental CPA acceptable?
   - Check: Did existing channels' performance change after TikTok launch?

KEY METRICS TO CALCULATE:
- CPM (Cost per 1000 impressions)
- CPC (Cost per click)
- CPA (Cost per acquisition/signup)
- CVR (Conversion rate: signups/clicks)
- Normalized efficiency (signups per $1K spend)
- Incremental CPA (TikTok only vs portfolio average)`
  },

  {
    id: 16,
    section: 9,
    sectionTitle: "TikTok Launch Impact Analysis",
    questionNumber: "9.1",
    title: "Channel-Level Performance Comparison",
    difficulty: "Easy",
    description: "Calculate key performance metrics (CPM, CPC, CPA, CVR) for each channel in January 2024, including the newly launched TikTok.",
    backgroundContext: `First, we need to understand how TikTok performs compared to existing channels on basic efficiency metrics.`,
    tables: {
      ads_data_jan: [
        { channel: 'Facebook', date: '2024-01-15', spend: 5000, impressions: 500000, clicks: 2500, signups: 125 },
        { channel: 'Facebook', date: '2024-01-20', spend: 5000, impressions: 520000, clicks: 2600, signups: 130 },
        { channel: 'Google', date: '2024-01-15', spend: 3000, impressions: 300000, clicks: 3000, signups: 150 },
        { channel: 'Google', date: '2024-01-20', spend: 3000, impressions: 310000, clicks: 3100, signups: 155 },
        { channel: 'TikTok', date: '2024-01-15', spend: 2000, impressions: 800000, clicks: 4000, signups: 80 },
        { channel: 'TikTok', date: '2024-01-20', spend: 2000, impressions: 850000, clicks: 4250, signups: 85 }
      ]
    },
    expectedColumns: ['channel', 'spend', 'impressions', 'clicks', 'signups', 'cpm', 'cpc', 'cpa', 'cvr'],
    hint: "Aggregate by channel. CPM = (spend/impressions) × 1000, CPC = spend/clicks, CPA = spend/signups, CVR = signups/clicks.",
    concept: "Aggregation, Marketing metrics, Channel comparison",
    sampleAnswer: `SELECT
  channel,
  SUM(spend) AS spend,
  SUM(impressions) AS impressions,
  SUM(clicks) AS clicks,
  SUM(signups) AS signups,
  ROUND((SUM(spend) / NULLIF(SUM(impressions), 0)) * 1000, 2) AS cpm,
  ROUND(SUM(spend) / NULLIF(SUM(clicks), 0), 2) AS cpc,
  ROUND(SUM(spend) / NULLIF(SUM(signups), 0), 2) AS cpa,
  ROUND(SUM(signups) * 1.0 / NULLIF(SUM(clicks), 0), 4) AS cvr
FROM ads_data_jan
GROUP BY channel
ORDER BY cpa ASC;`
  },

  {
    id: 17,
    section: 9,
    sectionTitle: "TikTok Launch Impact Analysis",
    questionNumber: "9.2",
    title: "Portfolio-Level Efficiency with Normalization",
    difficulty: "Medium",
    description: "Compare December (before TikTok) vs January (after TikTok) using normalized efficiency: signups per $1000 spend.",
    backgroundContext: `Because total budget changed (Dec: $13K → Jan: $18K), we need to normalize by spend to see if TikTok improved overall efficiency.

**The Key Insight:**
- If "signups per $1K spend" increased → TikTok made the portfolio more efficient
- If it decreased → TikTok dragged down efficiency despite adding volume`,
    tables: {
      ads_data_dec: [
        { channel: 'Facebook', date: '2024-12-15', spend: 5000, signups: 250 },
        { channel: 'Facebook', date: '2024-12-20', spend: 3000, signups: 150 },
        { channel: 'Google', date: '2024-12-15', spend: 3000, signups: 200 },
        { channel: 'Google', date: '2024-12-20', spend: 2000, signups: 133 }
      ],
      ads_data_jan: [
        { channel: 'Facebook', date: '2024-01-15', spend: 5000, signups: 125 },
        { channel: 'Facebook', date: '2024-01-20', spend: 5000, signups: 130 },
        { channel: 'Google', date: '2024-01-15', spend: 3000, signups: 150 },
        { channel: 'Google', date: '2024-01-20', spend: 3000, signups: 155 },
        { channel: 'TikTok', date: '2024-01-15', spend: 2000, signups: 80 },
        { channel: 'TikTok', date: '2024-01-20', spend: 2000, signups: 85 }
      ]
    },
    expectedColumns: ['period', 'total_spend', 'total_signups', 'signups_per_1k_spend', 'cpa'],
    hint: "Calculate total spend and signups for each period. Then: (total_signups / total_spend) × 1000. Use UNION ALL to combine December and January results.",
    concept: "Normalization, Pre/post analysis, UNION ALL, Portfolio metrics",
    sampleAnswer: `WITH dec_metrics AS (
  SELECT
    'December (Before TikTok)' AS period,
    SUM(spend) AS total_spend,
    SUM(signups) AS total_signups,
    ROUND((SUM(signups) * 1000.0) / NULLIF(SUM(spend), 0), 2) AS signups_per_1k_spend,
    ROUND(SUM(spend) / NULLIF(SUM(signups), 0), 2) AS cpa
  FROM ads_data_dec
),
jan_metrics AS (
  SELECT
    'January (After TikTok)' AS period,
    SUM(spend) AS total_spend,
    SUM(signups) AS total_signups,
    ROUND((SUM(signups) * 1000.0) / NULLIF(SUM(spend), 0), 2) AS signups_per_1k_spend,
    ROUND(SUM(spend) / NULLIF(SUM(signups), 0), 2) AS cpa
  FROM ads_data_jan
)

SELECT * FROM dec_metrics
UNION ALL
SELECT * FROM jan_metrics;

-- Compare the signups_per_1k_spend values:
-- If Jan > Dec → TikTok improved efficiency
-- If Jan < Dec → TikTok reduced efficiency`
  },

  {
    id: 18,
    section: 9,
    sectionTitle: "TikTok Launch Impact Analysis",
    questionNumber: "9.3",
    title: "Incremental Analysis - TikTok's Contribution",
    difficulty: "Medium",
    description: "Isolate TikTok's incremental contribution by comparing: (1) Existing channels in January vs (2) TikTok in January.",
    backgroundContext: `**Incremental Analysis answers:**
- What did TikTok specifically contribute?
- Is TikTok's CPA better or worse than existing channels?
- Did existing channels' performance change after TikTok launch?

This helps determine if TikTok's incremental cost is justified by its incremental signups.`,
    tables: {
      ads_data_jan: [
        { channel: 'Facebook', date: '2024-01-15', spend: 5000, signups: 125 },
        { channel: 'Facebook', date: '2024-01-20', spend: 5000, signups: 130 },
        { channel: 'Google', date: '2024-01-15', spend: 3000, signups: 150 },
        { channel: 'Google', date: '2024-01-20', spend: 3000, signups: 155 },
        { channel: 'TikTok', date: '2024-01-15', spend: 2000, signups: 80 },
        { channel: 'TikTok', date: '2024-01-20', spend: 2000, signups: 85 }
      ]
    },
    expectedColumns: ['channel_group', 'total_spend', 'total_signups', 'cpa', 'pct_of_total_signups'],
    hint: "Use CASE WHEN to group channels into 'Existing Channels' vs 'TikTok'. Calculate totals for each group. Compare their CPAs and contribution percentages.",
    concept: "Incremental analysis, CASE WHEN grouping, Contribution analysis",
    sampleAnswer: `WITH channel_groups AS (
  SELECT
    CASE 
      WHEN channel = 'TikTok' THEN 'TikTok (New)'
      ELSE 'Existing Channels'
    END AS channel_group,
    spend,
    signups
  FROM ads_data_jan
),
totals AS (
  SELECT SUM(signups) AS grand_total_signups
  FROM ads_data_jan
)

SELECT
  cg.channel_group,
  SUM(cg.spend) AS total_spend,
  SUM(cg.signups) AS total_signups,
  ROUND(SUM(cg.spend) / NULLIF(SUM(cg.signups), 0), 2) AS cpa,
  ROUND((SUM(cg.signups) * 100.0) / t.grand_total_signups, 2) AS pct_of_total_signups
FROM channel_groups cg
CROSS JOIN totals t
GROUP BY cg.channel_group, t.grand_total_signups
ORDER BY cg.channel_group;

-- Analysis:
-- If TikTok CPA < Existing Channels CPA → Great incremental efficiency
-- If TikTok CPA > Existing Channels CPA → Expensive but may be worth it for volume/diversification`
  }
];

// Main Component
export default function MarketingAnalyticsSQL() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sqlCode, setSqlCode] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [showConcept, setShowConcept] = useState(true);
  const [errorCount, setErrorCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showPreQuestion, setShowPreQuestion] = useState(false);
  const [showPostQuestion, setShowPostQuestion] = useState(false);
  const [showAlternativeSolutions, setShowAlternativeSolutions] = useState(false);
  const [showSampleAnswer, setShowSampleAnswer] = useState(false); // For Check Answer button
  
  // ==================== PREMIUM UNLOCK STATES ====================
  const [isPremium, setIsPremium] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [licenseError, setLicenseError] = useState('');
  // ===============================================================

  useEffect(() => {
    loadProgress();
    checkPremiumStatus();
    
    // Load Gumroad script
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Listen for Gumroad purchase event
    const handleGumroadPurchase = () => {
      localStorage.setItem('marketingsql_premium', 'true');
      setIsPremium(true);
      alert('🎉 Success! All 18 questions are now unlocked!');
    };

    window.addEventListener('gumroad-purchase', handleGumroadPurchase);
    
    return () => {
      window.removeEventListener('gumroad-purchase', handleGumroadPurchase);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const checkPremiumStatus = () => {
    const savedPremium = localStorage.getItem('marketingsql_premium');
    if (savedPremium === 'true') {
      setIsPremium(true);
    }
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

  const loadProgress = async () => {
    try {
      const result = await window.storage.get('sql_practice_progress');
      if (result) {
        const progress = JSON.parse(result.value);
        setCompletedQuestions(new Set(progress.completed || []));
      }
    } catch (error) {
      console.log('No saved progress found');
    }
  };

  const saveProgress = async (completed) => {
    try {
      await window.storage.set('sql_practice_progress', JSON.stringify({
        completed: Array.from(completed),
        lastUpdated: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const question = QUESTIONS[currentQuestion];
  const isLocked = !isPremium && !FREE_QUESTION_IDS.includes(question.id);

  const runQuery = () => {
    // Check if question is locked
    if (isLocked) {
      setShowLicenseModal(true);
      return;
    }
    
    // Simple validation - check if SQL contains expected columns
    const isCorrect = question.expectedColumns.every(col => 
      sqlCode.toLowerCase().includes(col.toLowerCase())
    );

    if (isCorrect) {
      setQueryResult({ success: true });
      const newCompleted = new Set(completedQuestions);
      newCompleted.add(question.id);
      setCompletedQuestions(newCompleted);
      saveProgress(newCompleted);
      setErrorCount(0);
    } else {
      setQueryResult({ success: false });
      setErrorCount(prev => prev + 1);
    }
  };

  const resetQuestion = () => {
    setSqlCode('');
    setQueryResult(null);
    setShowHint(false);
    setShowConcept(true);
    setErrorCount(0);
    setShowAnswer(false);
    setShowPreQuestion(false);
    setShowPostQuestion(false);
    setShowSampleAnswer(false); // Reset sample answer
  };

  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      resetQuestion();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      resetQuestion();
    }
  };

  const completionRate = (completedQuestions.size / QUESTIONS.length * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 sticky top-0 z-40">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">MarketingSQL Pro</h1>
                <p className="text-sm text-gray-400">Master Marketing Analytics SQL</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Feedback Button */}
              <a 
                href=""
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
                onClick={(e) => e.preventDefault()}
              >
                💬 Feedback
              </a>

              {/* Question Navigator */}
              <div className="flex gap-1.5 flex-wrap max-w-md">
                {QUESTIONS.map((q, idx) => {
                  const isFree = FREE_QUESTION_IDS.includes(q.id);
                  const isCurrentlyLocked = !isPremium && !isFree;
                  const isCurrent = currentQuestion === idx;
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        if (isCurrentlyLocked) {
                          setShowLicenseModal(true);
                        } else {
                          setCurrentQuestion(idx);
                          resetQuestion();
                        }
                      }}
                      className={`relative w-9 h-9 rounded text-xs font-semibold transition-all ${
                        isCurrent
                          ? 'bg-blue-500 text-white ring-2 ring-blue-400'
                          : isCurrentlyLocked
                          ? 'bg-gray-700/50 text-gray-500 cursor-pointer hover:bg-gray-700'
                          : completedQuestions.has(q.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      title={`${q.questionNumber}: ${q.title}${isCurrentlyLocked ? ' (Locked)' : ''}`}
                    >
                      <span>{q.questionNumber.split('.')[1]}</span>
                      {isCurrentlyLocked && (
                        <Lock className="w-2.5 h-2.5 absolute bottom-0.5 right-0.5" />
                      )}
                      {isFree && !isPremium && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-gray-900"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Progress */}
              <div className="flex items-center gap-2 text-lg font-bold text-blue-400">
                <Trophy className="w-5 h-5" />
                {completedQuestions.size}/{QUESTIONS.length}
              </div>

              {/* Upgrade Button or Premium Badge */}
              {!isPremium ? (
                <>
                  <a
                    href="https://sailincheng.gumroad.com/l/marketingSQLPro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg flex items-center gap-2 no-underline"
                  >
                    <Trophy className="w-4 h-4" />
                    Upgrade - $49
                  </a>
                  <button
                    onClick={() => setShowLicenseModal(true)}
                    className="text-xs text-gray-400 hover:text-white underline"
                  >
                    Already purchased?
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold px-4 py-2 bg-green-900/30 rounded-lg border border-green-700/50">
                  <CheckCircle className="w-4 h-4" />
                  Premium
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
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

            {/* Background Knowledge (collapsible) */}
            {question.backgroundContext && (
              <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-purple-300">📚 Background Knowledge</h3>
                  <button
                    onClick={() => setShowConcept(!showConcept)}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {showConcept ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {showConcept && (
                  <div className="mt-3 pt-3 border-t border-purple-700">
                    {question.backgroundContext.split('\n\n').map((paragraph, idx) => {
                      // Check if paragraph is a header (starts with **)
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        const headerText = paragraph.trim().replace(/\*\*/g, '');
                        return (
                          <h4 key={idx} className="text-base font-bold text-purple-200 mt-3 mb-2">
                            {headerText}
                          </h4>
                        );
                      }
                      
                      // Check if it's a list
                      if (paragraph.includes('\n- ')) {
                        const lines = paragraph.split('\n');
                        const beforeList = lines.filter(l => !l.trim().startsWith('- '));
                        const listItems = lines.filter(l => l.trim().startsWith('- '));
                        
                        return (
                          <div key={idx} className="mb-3">
                            {beforeList.map((line, i) => (
                              <p key={i} className="text-sm text-purple-200 mb-2">
                                {line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('<strong>').map((part, j) => {
                                  if (j % 2 === 0) return part;
                                  const [bold, rest] = part.split('</strong>');
                                  return <span key={j}><strong className="font-semibold">{bold}</strong>{rest}</span>;
                                })}
                              </p>
                            ))}
                            {listItems.length > 0 && (
                              <ul className="list-disc list-inside space-y-1 ml-2">
                                {listItems.map((item, i) => (
                                  <li key={i} className="text-sm text-purple-200">
                                    {item.replace('- ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      }
                      
                      // Regular paragraph
                      return (
                        <p key={idx} className="text-sm text-purple-200 mb-2 leading-relaxed">
                          {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Question */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-green-400">📋 Question</h3>
              <h2 className="text-2xl font-bold text-white">{question.title}</h2>
              <p className="text-gray-300 text-base leading-relaxed">{question.description}</p>
              
              {/* Exercise Definitions */}
              {question.exerciseDefinitions && (
                <div className="mt-3 p-4 bg-green-900/20 border border-green-800 rounded space-y-2">
                  <p className="text-green-300 text-sm font-semibold">📝 In this exercise:</p>
                  {question.exerciseDefinitions.map((def, idx) => (
                    <p key={idx} className="text-green-200 text-sm ml-4">• {def}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Pre-Question Prompt */}
            {question.preQuestionPrompt && (
              <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-orange-300 font-semibold text-sm">
                    💭 {question.preQuestionPrompt.question}
                  </p>
                  <button
                    onClick={() => setShowPreQuestion(!showPreQuestion)}
                    className="text-orange-400 hover:text-orange-300"
                  >
                    {showPreQuestion ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {showPreQuestion && (
                  <div className="mt-3 pt-3 border-t border-orange-700 text-sm text-orange-200">
                    {question.preQuestionPrompt.answer.split('\n\n').map((paragraph, idx) => {
                      // Header
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        const headerText = paragraph.trim().replace(/\*\*/g, '');
                        return (
                          <h4 key={idx} className="text-base font-bold text-orange-200 mt-3 mb-2">
                            {headerText}
                          </h4>
                        );
                      }
                      
                      // List
                      if (paragraph.includes('\n- ')) {
                        const lines = paragraph.split('\n');
                        const beforeList = lines.filter(l => !l.trim().startsWith('- '));
                        const listItems = lines.filter(l => l.trim().startsWith('- '));
                        
                        return (
                          <div key={idx} className="mb-3">
                            {beforeList.map((line, i) => (
                              <p key={i} className="text-sm text-orange-200 mb-2">
                                {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
                                  }
                                  return part;
                                })}
                              </p>
                            ))}
                            {listItems.length > 0 && (
                              <ul className="list-disc list-inside space-y-1 ml-2">
                                {listItems.map((item, i) => (
                                  <li key={i} className="text-sm text-orange-200">
                                    {item.replace('- ', '')}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      }
                      
                      // Regular paragraph
                      return (
                        <p key={idx} className="text-sm text-orange-200 mb-2 leading-relaxed">
                          {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Hint */}
            <div>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                {showHint ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showHint ? 'Hide' : 'Show'} Hint
              </button>

              {showHint && (
                <div className="mt-3 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                  <div className="text-sm text-yellow-200">{question.hint}</div>
                  {question.concept && (
                    <div className="mt-2 text-xs text-yellow-300">
                      <strong>Concepts:</strong> {question.concept}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sample Data */}
            <div className={`space-y-4 ${isLocked ? 'relative' : ''}`}>
              <h3 className="font-semibold text-white text-lg">📊 Sample Data:</h3>
              
              {/* Sample Data Tables */}
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
                    <p className="text-gray-400 mb-6">Unlock to view sample data and practice SQL</p>
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

        {/* Right Panel - SQL Editor & Results */}
        <div className="w-1/2 flex flex-col bg-gray-900">
          {/* SQL Editor */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Your Snowflake SQL Query</h3>
              <button
                onClick={resetQuestion}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
            
            <div className="relative">
              {/* Line numbers */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-850 border-r border-gray-700 pt-4 pb-4">
                {sqlCode.split('\n').map((_, idx) => (
                  <div key={idx} className="h-6 px-2 text-right text-xs text-gray-600 font-mono">
                    {idx + 1}
                  </div>
                ))}
              </div>
              
              <textarea
                value={sqlCode}
                onChange={(e) => setSqlCode(e.target.value)}
                disabled={isLocked}
                placeholder={isLocked ? "🔒 Upgrade to write SQL..." : `-- Write your Snowflake SQL query here...
SELECT 
  column1,
  column2
FROM table_name
WHERE condition
GROUP BY column1;`}
                className={`w-full h-64 pl-14 pr-4 py-4 font-mono text-sm border border-gray-700 rounded-lg placeholder-gray-600 ${
                  isLocked 
                    ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed opacity-60'
                    : 'bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                spellCheck="false"
                style={{ lineHeight: '1.5rem' }}
              />
            </div>
            
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
                Run Query
              </button>
              
              <button
                onClick={() => isLocked ? setShowLicenseModal(true) : setShowSampleAnswer(!showSampleAnswer)}
                disabled={isLocked}
                className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isLocked
                    ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed opacity-60'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {isLocked ? <Lock className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                {showSampleAnswer && !isLocked ? 'Hide Answer' : 'Check Answer'}
              </button>
            </div>

            {/* Sample Answer Display */}
            {showSampleAnswer && !isLocked && question.sampleAnswer && (
              <div className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                <h4 className="font-semibold text-green-300 mb-2">✅ Sample Answer:</h4>
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto text-xs">
                  <code className="text-green-300 font-mono">{question.sampleAnswer}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Query Result */}
          <div className="flex-1 overflow-y-auto p-6">
            {queryResult && (
              <div>
                {queryResult.success ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-green-300">Correct!</div>
                        <div className="text-sm text-green-400">Great job! Your query looks good.</div>
                      </div>
                    </div>

                    {/* Post-Question Prompt */}
                    {question.postQuestionPrompt && (
                      <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-purple-300 font-semibold text-sm">
                            🤔 {question.postQuestionPrompt.question}
                          </p>
                          <button
                            onClick={() => setShowPostQuestion(!showPostQuestion)}
                            className="text-purple-400 hover:text-purple-300"
                          >
                            {showPostQuestion ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                        {showPostQuestion && (
                          <div className="mt-3 pt-3 border-t border-purple-700 text-sm text-purple-200">
                            {question.postQuestionPrompt.answer.split('\n\n').map((paragraph, idx) => {
                              // Header
                              if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                                const headerText = paragraph.trim().replace(/\*\*/g, '');
                                return (
                                  <h4 key={idx} className="text-base font-bold text-purple-200 mt-3 mb-2">
                                    {headerText}
                                  </h4>
                                );
                              }
                              
                              // List
                              if (paragraph.includes('\n- ')) {
                                const lines = paragraph.split('\n');
                                const beforeList = lines.filter(l => !l.trim().startsWith('- '));
                                const listItems = lines.filter(l => l.trim().startsWith('- '));
                                
                                return (
                                  <div key={idx} className="mb-3">
                                    {beforeList.map((line, i) => (
                                      <p key={i} className="text-sm text-purple-200 mb-2">
                                        {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                                          if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
                                          }
                                          return part;
                                        })}
                                      </p>
                                    ))}
                                    {listItems.length > 0 && (
                                      <ul className="list-disc list-inside space-y-1 ml-2">
                                        {listItems.map((item, i) => (
                                          <li key={i} className="text-sm text-purple-200">
                                            {item.replace('- ', '')}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                );
                              }
                              
                              // Regular paragraph
                              return (
                                <p key={idx} className="text-sm text-purple-200 mb-2 leading-relaxed">
                                  {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                  })}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Alternative Solutions Hint */}
                    {question.hasMultipleSolutions && question.alternativeSolutions && (
                      <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-4">
                        <p className="text-orange-200 text-sm">
                          💡 Could you think of another way to do it?{' '}
                          <button
                            onClick={() => setShowAlternativeSolutions(!showAlternativeSolutions)}
                            className="text-orange-400 hover:text-orange-300 underline font-semibold"
                          >
                            Click here
                          </button>
                          {' '}to check alternative solutions.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-300">Not quite right</div>
                        <div className="text-sm text-red-400">
                          Check if your query includes all expected columns: {question.expectedColumns.join(', ')}
                        </div>
                      </div>
                    </div>

                    {/* Show answer after 2 errors */}
                    {errorCount >= 2 && (
                      <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-4">
                        <p className="text-orange-300 text-sm mb-2">
                          Having trouble? Would you like to see the{' '}
                          <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="text-orange-400 hover:text-orange-300 underline font-semibold"
                          >
                            answer
                          </button>
                          ?
                        </p>
                        {showAnswer && question.sampleAnswer && (
                          <pre className="mt-3 p-4 bg-gray-900 rounded overflow-x-auto text-xs">
                            <code className="text-green-300 font-mono">{question.sampleAnswer}</code>
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Alternative Solutions Modal */}
      {showAlternativeSolutions && question.alternativeSolutions && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6" 
          onClick={() => setShowAlternativeSolutions(false)}
        >
          <div 
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Alternative Solutions</h3>
                <button
                  onClick={() => setShowAlternativeSolutions(false)}
                  className="text-gray-400 hover:text-gray-300 text-3xl leading-none"
                >
                  ×
                </button>
              </div>

              {question.alternativeSolutions.map((solution, idx) => (
                <div key={idx} className="bg-gray-750 rounded-lg p-5 space-y-3">
                  <h4 className="text-xl font-bold text-blue-400">{solution.method}</h4>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                  <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                    <code className="text-green-300 text-sm font-mono">{solution.code}</code>
                  </pre>
                </div>
              ))}

              <button
                onClick={() => setShowAlternativeSolutions(false)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
              <p className="text-gray-500 text-sm mb-2">Don't have a license key?</p>
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
export default MarketingAnalyticsSQL;
export { MarketingAnalyticsSQL as App };
