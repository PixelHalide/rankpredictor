# Rank Predictor

![Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Formatter-Prettier-F7B93E?logo=prettier&logoColor=black)
![Recharts](https://img.shields.io/badge/Charts-Recharts-22B5BF)
![KaTeX](https://img.shields.io/badge/Math-KaTeX-008080)
![Vercel Analytics](https://img.shields.io/badge/Analytics-Vercel-black?logo=vercel)

A transparent, data-driven rank prediction platform for various entrance exams, created by [druwn](https://github.com/druwn) and [PixelHalide](https://github.com/PixelHalide).

## About

Rank Predictor was born out of frustration with existing rank prediction tools that:

- Harvest personal data like phone numbers and names
- Provide inaccurate or misleading predictions
- Lack transparency in their methodology

Our website offers free, no-nonsense rank predictions for various entrance exams.

## Currently Supported Exams

- MET 2026 (Manipal Entrance Test)
- MIT GPA Calculator

## Methodology

Each exam predictor uses:

- Verified historical data from past exam results
- Mathematical techniques like polynomial regression
- Transparent calculations and data sources

Every predictor includes a detailed "How does this work?" section that explains:

- The exact formulas used
- Data visualization for ranks against band-score parameter
- Complete [dataset](https://www.kaggle.com/datasets/pranavunni/met-2024-2025-rankings) for verification

## Features

- Complete transparency, We don't demand any signup-bullshit to access this
- Interactive branch cutoff displays
- Visual data representation through charts

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Recharts](https://img.shields.io/badge/Recharts-3-22B5BF?style=for-the-badge)
![KaTeX](https://img.shields.io/badge/KaTeX-0.16-008080?style=for-the-badge)
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-1-black?style=for-the-badge&logo=vercel)

## Contributing

This project is open-source under the GPL-3 license. You're welcome to:

- Submit bug reports
- Propose new features
- Contribute code improvements
- Add support for new exams

please first fork this repository then

```bash
git clone https://github.com/{your-user-name}/rankpredictor
cd rankpredictor
```

then install all necessary dependencies

```bash
bun install
```

this will pick up all necessary packages from bun.lock file

please run

```bash
bun prettier --write .
```

this will format all necessary code in accordance to prettier-dev-tool.

Please report any issues you find on the [issue tracker](https://github.com/PixelHalide/rankpredictor/issues).

## Contact

For queries or suggestions, reach out to us on Discord:

- @pixelhalide
- @druwn

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3).

## Website

Visit the live website at: [rankpredictor.in](https://rankpredictor.in)
