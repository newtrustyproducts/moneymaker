# MoneyMaker7867 — Trading Tool

## Version: v2.0 — Base Stable

### Files:
- `moneymaker.html` — Main tool (Login, Scanner, Calculator, Rules)
- `scanner_pc.py` — PC Scanner (Phase 1: PDC based, Phase 2: Dhan/yfinance)
- `vercel.json` — Vercel routing config
- `api/auth.js` — Auth proxy (CORS fix)
- `stocks.csv` — 480 NSE stocks list
- `results.json` — Live scan results (auto-updated by scanner)

### Features v2.0:
- 2-Phase scanner (Pre-open + Live)
- GitHub push → Vercel live
- Stock click → Calculator auto-fill
- Mobile login fix
- NSE holidays 2026

### Live URL:
https://money-ten-sigma.vercel.app/
