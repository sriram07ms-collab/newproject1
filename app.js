(function() {
  var state = { corpus: null };
  var defaultCorpus = {
    amc: { name: 'Nippon India Mutual Fund', website: 'https://mf.nipponindiaim.com/' },
    lastUpdated: '2025-11-04',
    schemes: [
      { displayName: 'Nippon India Large Cap Fund', shortName: 'Nippon Large Cap', category: 'Large Cap', sources: { factsheet: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-large-cap-fund', kim: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum', sid: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document' } },
      { displayName: 'Nippon India Flexi Cap Fund', shortName: 'Nippon Flexi Cap', category: 'Flexi Cap', sources: { factsheet: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-flexi-cap-fund', kim: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum', sid: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document' } },
      { displayName: 'Nippon India ELSS Tax Saver Fund', shortName: 'Nippon ELSS', category: 'ELSS', sources: { factsheet: 'https://mf.nipponindiaim.com/funds-and-plans/equity-funds/nippon-india-elss-tax-saver-fund', kim: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/key-information-memorandum', sid: 'https://mf.nipponindiaim.com/investor-services/forms-and-downloads/scheme-information-document' } }
    ],
    links: {
      education: {
        sebiInvestorCharter: 'https://investor.sebi.gov.in/investor_education.html',
        amfiInvestorCorner: 'https://www.amfiindia.com/investor-corner',
        amfiELSSFAQ: 'https://www.amfiindia.com/investor-corner/knowledge-center/faqs#elss',
        camsHowTo: 'https://new.camsonline.com/Investors/Statements/Consolidated-Account-Statement',
        kfinHowTo: 'https://mfs.kfintech.com/investor/General/Download-Statements'
      }
    }
  };

  function fireCorpusLoaded(dateStr) {
    var evt = new CustomEvent('corpusLoaded', { detail: { lastUpdated: dateStr }});
    document.dispatchEvent(evt);
  }

  function normalize(text) {
    return (text || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function classify(query) {
    var q = normalize(query);
    // Detect opinion/advice questions
    var advice = /(should i|buy|sell|hold|which fund is best|recommend|how much should i invest|switch to|compare|beat|outperform|target return|expected return)/i.test(q);

    // Scheme extraction (simple string contains among our scoped schemes)
    var scheme = null;
    if (!advice && state.corpus && state.corpus.schemes) {
      for (var i = 0; i < state.corpus.schemes.length; i++) {
        var s = state.corpus.schemes[i];
        if (q.indexOf(normalize(s.displayName)) !== -1 || q.indexOf(normalize(s.shortName)) !== -1) {
          scheme = s;
          break;
        }
      }
    }

    var intents = {
      expenseRatio: /(expense\s*ratio|er)\b/i.test(q),
      minSip: /(minimum\s*(sip|investment)|min\s*sip)/i.test(q),
      exitLoad: /(exit\s*load)/i.test(q),
      riskometer: /(riskometer|risk\s*level|risk level)/i.test(q),
      benchmark: /(benchmark)/i.test(q),
      elssLockin: /(elss).*?(lock-?in|lock in|lockin)/i.test(q),
      capitalGains: /(capital\s*gains?\s*statement|capital\s*gain\s*report)/i.test(q)
    };

    return { advice: advice, scheme: scheme, intents: intents };
  }

  function answer(query, cls) {
    var c = state.corpus;
    var nowStamp = c && c.lastUpdated ? c.lastUpdated : '';

    // Refuse advice
    if (cls.advice) {
      return {
        text: 'I can’t provide investment advice. Please see SEBI’s investor education resources.',
        citeUrl: c.links.education.sebiInvestorCharter,
        lastUpdated: nowStamp
      };
    }

    // ELSS lock-in (not scheme-specific)
    if (cls.intents.elssLockin) {
      return {
        text: 'ELSS funds have a statutory 3-year lock-in from the date of each investment.',
        citeUrl: c.links.education.amfiELSSFAQ,
        lastUpdated: nowStamp
      };
    }

    // Capital gains statement (how-to)
    if (cls.intents.capitalGains) {
      return {
        text: 'Download your capital-gains statement via the RTA portals (CAMS/KFintech) using PAN+email or folio. Do not share OTPs here.',
        citeUrl: c.links.education.camsHowTo,
        lastUpdated: nowStamp
      };
    }

    // Scheme-specific facts that change; defer to official factsheet/KIM/SID
    if (cls.scheme) {
      var s = cls.scheme;
      if (cls.intents.expenseRatio) {
        return {
          text: 'Refer to the latest scheme factsheet/KIM for current expense ratio.',
          citeUrl: s.sources.factsheet,
          lastUpdated: nowStamp
        };
      }
      if (cls.intents.minSip) {
        return {
          text: 'Refer to the scheme KIM/SID for minimum SIP/investment amounts and options.',
          citeUrl: s.sources.kim,
          lastUpdated: nowStamp
        };
      }
      if (cls.intents.exitLoad) {
        return {
          text: 'Refer to the scheme KIM/SID for applicable exit load and holding periods.',
          citeUrl: s.sources.sid,
          lastUpdated: nowStamp
        };
      }
      if (cls.intents.riskometer) {
        return {
          text: 'See the latest factsheet for the current riskometer disclosure.',
          citeUrl: s.sources.factsheet,
          lastUpdated: nowStamp
        };
      }
      if (cls.intents.benchmark) {
        return {
          text: 'See the latest factsheet for the current benchmark and notes.',
          citeUrl: s.sources.factsheet,
          lastUpdated: nowStamp
        };
      }
    }

    // Generic fallback within scope
    return {
      text: 'I can answer factual questions about the selected schemes only. Try asking about expense ratio, exit load, SIP minimum, riskometer, benchmark, or ELSS lock-in.',
      citeUrl: c.links.education.amfiInvestorCorner,
      lastUpdated: nowStamp
    };
  }

  function render(resp) {
    var el = document.getElementById('response');
    var text = resp && resp.text ? resp.text : '';
    var url = resp && resp.citeUrl ? resp.citeUrl : '';
    var last = resp && resp.lastUpdated ? resp.lastUpdated : '';
    var html = '';
    if (text) {
      html += '<p>' + escapeHtml(text) + '</p>';
    }
    if (url) {
      html += '<p class="citation">Source: <a href="' + encodeURI(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(url) + '</a></p>';
    }
    if (last) {
      // Last updated is also shown in footer, but repeat here for clarity
      html += '<p class="last">Last updated from sources: ' + escapeHtml(last) + '</p>';
    }
    el.innerHTML = html;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function(ch){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]);
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    var q = document.getElementById('question').value || '';
    var cls = classify(q);
    var resp = answer(q, cls);
    render(resp);
  }

  function init() {
    var form = document.getElementById('qa-form');
    form.addEventListener('submit', onSubmit);
    // Load corpus
    var bust = Date.now().toString();
    fetch('data/corpus.json?t=' + bust, { cache: 'no-store' })
      .then(function(r){ return r.json(); })
      .then(function(json){ state.corpus = json; fireCorpusLoaded(json.lastUpdated); })
      .catch(function(){ state.corpus = defaultCorpus; fireCorpusLoaded(defaultCorpus.lastUpdated); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


