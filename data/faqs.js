const SOURCES = [
  'https://mf.nipponindiaim.com/',
  'https://mf.nipponindiaim.com/our-products/by-asset-class/',
  'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-large-cap-fund',
  'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-flexi-cap-fund',
  'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-elss-tax-saver-fund',
  'https://mf.nipponindiaim.com/FundsAndPerformance/Pages/NipponIndia-Small-Cap-Fund.aspx',
  'https://mf.nipponindiaim.com/investor-services/nav-and-dividends',
  'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum',
  'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document',
  'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/addenda-and-notices',
  'https://mf.nipponindiaim.com/knowledge-center/tools/risk-analyzer',
  'https://www.amfiindia.com/investor-corner',
  'https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss',
  'https://www.amfiindia.com/investor-corner/knowledge-center/risk-o-meter',
  'https://www.amfiindia.com/investor-corner/knowledge-center/kyc',
  'https://investor.sebi.gov.in/investor_education.html',
  'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=3',
  'https://new.camsonline.com/Investors/Statements/Consolidated-Account-Statement',
  'https://mfs.kfintech.com/investor/General/Download-Statements'
];

const SCHEME_ALIASES = {
  'nippon india large cap fund': ['large cap', 'large-cap', 'bluechip'],
  'nippon india flexi cap fund': ['flexi cap', 'flexible cap', 'multicap'],
  'nippon india elss tax saver fund': ['elss', 'tax saver'],
  'nippon india small cap fund': ['small cap', 'small-cap']
};

const KNOWLEDGE_BASE = [
  {
    id: 'large-cap-expense',
    intents: ['expense ratio', 'ter', 'cost', 'charges'],
    schemes: ['nippon india large cap fund'],
    answer: 'Nippon India Large Cap Fund Direct Plan reports a total expense ratio of 0.99% (Regular Plan 1.66%) in the 30 Sep 2025 factsheet. [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-large-cap-fund'
  },
  {
    id: 'large-cap-exit-load',
    intents: ['exit load', 'redeem', 'redemption'],
    schemes: ['nippon india large cap fund'],
    answer: 'Redemptions from Nippon India Large Cap Fund attract a 1% exit load if units are withdrawn within 12 months; no load applies thereafter as per the Scheme Information Document. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document'
  },
  {
    id: 'large-cap-sip',
    intents: ['sip', 'minimum', 'installment'],
    schemes: ['nippon india large cap fund'],
    answer: 'Minimum SIP for Nippon India Large Cap Fund is ₹100 per month (₹1,000 for weekly/fortnightly) per the scheme KIM. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum'
  },
  {
    id: 'large-cap-benchmark',
    intents: ['benchmark', 'riskometer', 'index'],
    schemes: ['nippon india large cap fund'],
    answer: 'Benchmark: Nifty 100 Total Return Index. Riskometer: Very High as displayed on the fund page (Sep 2025). [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-large-cap-fund'
  },
  {
    id: 'flexi-expense',
    intents: ['expense ratio', 'ter', 'cost'],
    schemes: ['nippon india flexi cap fund'],
    answer: 'Nippon India Flexi Cap Fund Direct Plan TER is 0.83% (Regular Plan 1.62%) in the 30 Sep 2025 disclosure. [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-flexi-cap-fund'
  },
  {
    id: 'flexi-exit-load',
    intents: ['exit load', 'redeem'],
    schemes: ['nippon india flexi cap fund'],
    answer: 'Exit load: 1% if more than 10% of units are redeemed within 12 months; nil thereafter, as per the Scheme Information Document. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document'
  },
  {
    id: 'flexi-sip',
    intents: ['sip', 'minimum', 'installment'],
    schemes: ['nippon india flexi cap fund'],
    answer: 'Minimum SIP: ₹100 monthly (₹500 minimum lumpsum) according to the Key Information Memorandum. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum'
  },
  {
    id: 'flexi-risk',
    intents: ['riskometer', 'risk'],
    schemes: ['nippon india flexi cap fund'],
    answer: 'Riskometer for Nippon India Flexi Cap Fund is Very High, benchmarked to Nifty 500 Total Return Index. [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-flexi-cap-fund'
  },
  {
    id: 'elss-lock-in',
    intents: ['lock-in', 'lockin', 'elss'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'Being an ELSS, Nippon India ELSS Tax Saver Fund has a mandatory 3-year lock-in from each investment date, as per AMFI ELSS FAQs. [Source]',
    citation: 'https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss'
  },
  {
    id: 'elss-expense',
    intents: ['expense ratio', 'ter', 'cost'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'Direct Plan TER is 0.96% (Regular Plan 1.69%) in the 30 Sep 2025 Nippon India ELSS Tax Saver Fund factsheet. [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-elss-tax-saver-fund'
  },
  {
    id: 'elss-exit-load',
    intents: ['exit load', 'redeem'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'No exit load applies after the 3-year lock-in ends; early redemption is not permitted under Section 80C rules. [Source]',
    citation: 'https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss'
  },
  {
    id: 'elss-sip',
    intents: ['sip', 'minimum'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'Minimum SIP commitment is ₹500 per month as per the Key Information Memorandum for ELSS offerings. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum'
  },
  {
    id: 'elss-riskometer',
    intents: ['riskometer', 'risk', 'benchmark'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'Riskometer: Very High. Benchmark: Nifty 500 Total Return Index (ELSS category). [Source]',
    citation: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-elss-tax-saver-fund'
  },
  {
    id: 'smallcap-expense',
    intents: ['expense ratio', 'ter', 'cost'],
    schemes: ['nippon india small cap fund'],
    answer: 'Nippon India Small Cap Fund Direct Plan TER stands at 0.92% (Regular Plan 1.76%) based on the 30 Sep 2025 disclosure. [Source]',
    citation: 'https://mf.nipponindiaim.com/FundsAndPerformance/Pages/NipponIndia-Small-Cap-Fund.aspx'
  },
  {
    id: 'smallcap-exit',
    intents: ['exit load', 'redeem'],
    schemes: ['nippon india small cap fund'],
    answer: 'Exit load is 1% if more than 10% of units are redeemed within 12 months; nil beyond that window per the SID. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document'
  },
  {
    id: 'smallcap-sip',
    intents: ['sip', 'minimum'],
    schemes: ['nippon india small cap fund'],
    answer: 'Minimum SIP stands at ₹100 monthly and minimum lumpsum ₹5,000 per the scheme KIM. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum'
  },
  {
    id: 'smallcap-risk',
    intents: ['riskometer', 'risk', 'benchmark'],
    schemes: ['nippon india small cap fund'],
    answer: 'Riskometer: Very High. Benchmark: Nifty Smallcap 250 Total Return Index. [Source]',
    citation: 'https://mf.nipponindiaim.com/FundsAndPerformance/Pages/NipponIndia-Small-Cap-Fund.aspx'
  },
  {
    id: 'nav-updates',
    intents: ['nav', 'nav updates', 'latest nav'],
    schemes: ['all'],
    answer: 'Latest daily NAV and historical dividend data for all Nippon India schemes are published under Investor Services > NAV & Dividends. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/nav-and-dividends'
  },
  {
    id: 'risk-tool',
    intents: ['risk profile', 'risk analyzer', 'tool'],
    schemes: ['all'],
    answer: 'Use Nippon India\'s risk analyzer to check compatibility between your risk profile and scheme riskometers. [Source]',
    citation: 'https://mf.nipponindiaim.com/knowledge-center/tools/risk-analyzer'
  },
  {
    id: 'cams-statement',
    intents: ['capital gains statement', 'cams', 'portfolio statement', 'account statement'],
    schemes: ['all'],
    answer: 'Download a consolidated account or capital gains statement by registering your email and PAN on CAMS (RTA) and requesting the statement via email. [Source]',
    citation: 'https://new.camsonline.com/Investors/Statements/Consolidated-Account-Statement'
  },
  {
    id: 'kfin-statement',
    intents: ['kfin', 'transaction statement', 'download statement'],
    schemes: ['all'],
    answer: 'If your folio is serviced by KFintech, use the online statement request portal to generate transaction, capital gains or account statements. [Source]',
    citation: 'https://mfs.kfintech.com/investor/General/Download-Statements'
  },
  {
    id: 'amfi-riskometer',
    intents: ['riskometer meaning', 'riskometer levels', 'risk levels'],
    schemes: ['all'],
    answer: 'AMFI\'s Risk-o-Meter framework explains how Very High risk is interpreted for equity schemes and is updated monthly by AMCs. [Source]',
    citation: 'https://www.amfiindia.com/investor-corner/knowledge-center/risk-o-meter'
  },
  {
    id: 'amfi-elss',
    intents: ['elss rules', 'tax benefits', '80c'],
    schemes: ['nippon india elss tax saver fund'],
    answer: 'AMFI\'s ELSS FAQ covers tax eligibility, lock-in rules, and redemption process for ELSS schemes like Nippon India ELSS Tax Saver Fund. [Source]',
    citation: 'https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss'
  },
  {
    id: 'kyc-process',
    intents: ['kyc', 'update kyc'],
    schemes: ['all'],
    answer: 'Complete or update mutual fund KYC via AMFI-registered KRAs; AMFI\'s KYC resource explains online and offline steps. [Source]',
    citation: 'https://www.amfiindia.com/investor-corner/knowledge-center/kyc'
  },
  {
    id: 'investor-education',
    intents: ['learn', 'education', 'guides'],
    schemes: ['all'],
    answer: 'SEBI\'s investor education hub offers guides on mutual funds, statements, and complaint escalation. [Source]',
    citation: 'https://investor.sebi.gov.in/investor_education.html'
  },
  {
    id: 'complaints',
    intents: ['complaint', 'grievance', 'sebi'],
    schemes: ['all'],
    answer: 'To escalate unresolved grievances, refer to SEBI\'s SCORES process detailed in its investor services section. [Source]',
    citation: 'https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=3'
  },
  {
    id: 'addenda',
    intents: ['addendum', 'notice', 'changes'],
    schemes: ['all'],
    answer: 'All recent addenda and regulatory notices for Nippon India Mutual Fund schemes are posted under Investor Services > Addenda & Notices. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/addenda-and-notices'
  },
  {
    id: 'kim-overview',
    intents: ['kim', 'key information memorandum'],
    schemes: ['all'],
    answer: 'Key Information Memoranda provide snapshot details like minimum investment, load structure, and expense ratios for every scheme. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum'
  },
  {
    id: 'sid-overview',
    intents: ['sid', 'scheme document'],
    schemes: ['all'],
    answer: 'The Scheme Information Document outlines investment objectives, asset allocation, exit loads, and risk factors for each fund. [Source]',
    citation: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document'
  },
  {
    id: 'fund-categories',
    intents: ['fund categories', 'product range'],
    schemes: ['all'],
    answer: 'See the full Nippon India product line-up by asset class to compare equity, debt, hybrid, and solution-oriented schemes. [Source]',
    citation: 'https://mf.nipponindiaim.com/our-products/by-asset-class/'
  }
];

const ADVICE_KEYWORDS = ['should i', 'should we', 'invest', 'good time', 'recommend', 'suggest', 'buy', 'sell', 'switch', 'portfolio', 'allocate'];

const DEFAULT_REFUSAL = 'I\'m here for factual details only and can\'t offer opinions or advice. Please consult a SEBI-registered advisor for personalised guidance. You can review SEBI\'s investor education resources here.';

const REFUSAL_SOURCE = 'https://investor.sebi.gov.in/investor_education.html';
