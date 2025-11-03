# My First Project
MF Facts Assistant (Prototype)
=================================

What this is
- Tiny, static FAQ assistant for mutual fund factual queries.
- Scoped to one AMC: `HDFC Mutual Fund` and 3–5 schemes.
- Public sources only. Shows one citation per answer. No investment advice.

Run locally
- Open `index.html` in a browser (double-click). No server needed.

Ask examples
- "Expense ratio of HDFC Top 100 direct plan?"
- "ELSS lock-in for HDFC ELSS Tax Saver?"
- "How to download capital-gains statement?"

Behavior/constraints
- Answers only factual queries within the scoped schemes/intents.
- For dynamic items (expense ratio, exit load, SIP min, riskometer, benchmark), it links to the official factsheet/KIM/SID instead of stating values.
- Refuses opinionated/portfolio questions and links to SEBI investor education.
- No PII: Do not enter PAN, Aadhaar, account numbers, OTPs, emails, or phone numbers.
- No performance/returns. If asked, it links to the official factsheet.
- Footer shows: "Last updated from sources:" sourced from `data/corpus.json`.

Corpus
- Edit `data/corpus.json` to update URLs/schemes and the `lastUpdated` date.

Notes
- This is a prototype; URLs are public official pages (AMC/AMFI/SEBI/CAMS/KFintech).
This is my first project!

