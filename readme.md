# How I Regression Tested Nepal’s Biggest Fintech App Using Passmark + Playwright

AI-powered regression testing of Nepal’s leading digital wallet platform using **Passmark** and **Playwright** — with plain English test steps, no selectors, and no page objects.

## 🚀 Project Overview

This project was built for the **Breaking Apps Hackathon** by Hashnode + Bug0.

The goal was to test a real-world fintech platform using modern AI-native testing tools instead of traditional brittle automation.

### Tech Stack

- **Passmark** – AI testing framework
- **Playwright** – Browser automation
- **TypeScript**
- **OpenRouter API**

---

## 🎯 What Was Tested

This suite focuses on public-facing flows and regression scenarios.

### Test Coverage

- Homepage loads successfully
- Navigation links work
- Login page accessibility
- UI element visibility
- Input field presence
- Basic responsive behavior
- Public page consistency
- Regression checks across pages

---

## 📂 Project Structure

```bash

├── tests/
│   ├── esewa-landing.spec.ts
│   ├── esewa-navigation.spec.ts
│   ├── esewa-login.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```
