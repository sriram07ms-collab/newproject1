# Facts-Only Mutual Fund Assistant

A tiny Groww-inspired FAQ chatbot that serves factual responses about four Nippon India Mutual Fund schemes. It relies exclusively on official AMC, AMFI, and SEBI disclosures and cites one source in every answer. The assistant refuses portfolio or opinion questions and guides investors to SEBI resources instead.

## Covered Schemes
- Nippon India Large Cap Fund
- Nippon India Flexi Cap Fund
- Nippon India ELSS Tax Saver Fund
- Nippon India Small Cap Fund

## Local Preview
1. Ensure Python 3 is installed (for a lightweight static server).
2. From the project root run:
   `ash
   python -m http.server 8080
   `
3. Open [http://localhost:8080](http://localhost:8080) in a browser.
4. Press Ctrl+C in the terminal to stop the server.

> A server is already running in this workspace on port 8080 for quick testing. Stop it with Ctrl+C when done.

## Deploy to GitHub Pages
1. Create a new GitHub repository (public or private with Pages enabled) and push the contents of this folder.
2. In GitHub, go to **Settings → Pages** and set the source to main branch with / (root) folder.
3. Save. GitHub Pages will publish the static site at https://<username>.github.io/<repo>/ within a few minutes.
4. Update the repository README with the live URL.

## Data & Citations (18 Official Sources)
1. https://mf.nipponindiaim.com/
2. https://mf.nipponindiaim.com/our-products/by-asset-class/
3. https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-large-cap-fund
4. https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-flexi-cap-fund
5. https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-elss-tax-saver-fund
6. https://mf.nipponindiaim.com/FundsAndPerformance/Pages/NipponIndia-Small-Cap-Fund.aspx
7. https://mf.nipponindiaim.com/investor-services/nav-and-dividends
8. https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum
9. https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document
10. https://mf.nipponindiaim.com/investor-services/forms-and-downloads/addenda-and-notices
11. https://mf.nipponindiaim.com/knowledge-center/tools/risk-analyzer
12. https://www.amfiindia.com/investor-corner
13. https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss
14. https://www.amfiindia.com/investor-corner/knowledge-center/risk-o-meter
15. https://www.amfiindia.com/investor-corner/knowledge-center/kyc
16. https://investor.sebi.gov.in/investor_education.html
17. https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=3
18. https://new.camsonline.com/Investors/Statements/Consolidated-Account-Statement
19. https://mfs.kfintech.com/investor/General/Download-Statements

## Project Structure
- index.html – UI layout and content skeleton
- styles.css – Groww-inspired styling
- data/faqs.js – Knowledge base, sources, refusal logic
- script.js – Chat workflow, matching logic, rendering

## Notes
- Answers focus strictly on factual scheme attributes and servicing workflows.
- Each chat response renders exactly one clickable citation.
- All copy avoids advice language and defers to SEBI/AMFI resources when necessary.
