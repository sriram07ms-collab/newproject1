# Facts-Only Mutual Fund Assistant

Groww-inspired FAQ chatbot that returns verified facts for four Nippon India Mutual Fund equity schemes. Every response cites an official AMC / AMFI / SEBI / RTA disclosure and the assistant politely refuses any opinionated or advisory prompts.

## Covered Schemes
- Nippon India Large Cap Fund
- Nippon India Flexi Cap Fund
- Nippon India ELSS Tax Saver Fund
- Nippon India Small Cap Fund

## Run Locally
1. Install Python 3 (for a lightweight static server).
2. From the project root execute:
   ```bash
   python -m http.server 8080
   ```
3. Visit [http://localhost:8080](http://localhost:8080) in your browser.
4. Stop the server with `Ctrl+C`.

## Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In **Settings → Pages**, choose `main` branch and `/ (root)` folder.
3. Save to publish at `https://<username>.github.io/<repo>/`.

## Knowledge Base Sources (19)
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

## File Map
- `index.html` – layout, welcome copy, sample prompts
- `styles.css` – Groww-inspired theming
- `data/faqs.js` – intent table, scheme aliases, refusal logic
- `script.js` – chat controller and rendering
- `.github/workflows/*.yml` – optional Pages deployment workflow

## Behaviour Highlights
- One clear citation per answer.
- Rejects portfolios/recommendations; points to SEBI education resources.
- Fallback directs users to Nippon India disclosure hub.
