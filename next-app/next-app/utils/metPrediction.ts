// MET prediction utilities

export interface CutoffData {
  [college: string]: {
    [branch: string]: number;
  };
}

export interface PredictionResult {
  predictedRank: number;
  effectiveRank: number;
  avgScore: number;
  attainableBranches: {
    college: string;
    branches: { name: string; cutoff: number }[];
  }[];
}

// MET 2025 Data
export const MET_2025_X_VALUES = [
  31.25, 31.66666667, 33.95833333, 35.83333333, 37.5, 39.375, 39.375, 40.0, 42.08333333, 45.41666667,
  46.04166667, 47.70833333, 47.91666667, 48.54166667, 48.95833333, 49.79166667, 51.04166667, 51.66666667,
  52.08333333, 52.70833333, 53.125, 53.75, 55.41666667, 56.66666667, 57.08333333, 57.5, 57.5, 57.70833333,
  58.95833333, 59.375, 59.58333333, 60.8333, 61.04166667, 61.25, 61.875, 62.08333333, 62.91666667,
  63.95833333, 64.3, 64.79166667, 65.20833333, 66.04166667, 66.667, 66.875, 67.08333333, 67.29166667,
  67.5, 67.91666667, 68.125, 68.33333333, 68.54166667, 69.16666667, 69.375, 69.58333333, 70.0, 70.20833333,
  71.04166667, 71.25, 71.45833333, 71.875, 72.08333333, 72.29166667, 72.70833333, 72.91666667, 73.125,
  73.54166667, 73.75, 73.95833333, 74.16666667, 74.375, 74.58333333, 75.0, 75.20833333, 75.625, 75.83333333,
  76.04166667, 76.25, 76.45833333, 76.66666667, 76.875, 77.08333333, 77.29166667, 78.125, 78.33333333,
  78.95833333, 79.16666667, 79.58333333, 80.20833333, 81.25, 81.45833333, 81.66666667, 82.08333333,
  82.70833333, 84.375, 84.375, 85.0, 85.41666667, 85.83333333, 88.54166667, 91.25
];

export const MET_2025_Y_VALUES = [
  32043, 31803, 30599, 29500, 28300, 27555, 27503, 27100, 25719, 23458, 22810, 21765, 21285, 20894, 20490,
  19859, 18716, 18216, 17960, 17364, 16900, 16000, 14983, 14000, 13652, 13286, 13171, 13101, 11994, 11612,
  11570, 10500, 10380, 10127, 9642, 9472, 8817, 8000, 7750, 7454, 7169, 6610, 6217, 6051, 5941, 5859, 5675,
  5434, 5349, 5193, 5071, 4675, 4653, 4483, 4267, 4170, 3776, 3553, 3551, 3383, 3285, 3144, 2970, 2896,
  2801, 2665, 2583, 2493, 2436, 2370, 2271, 2100, 2066, 1936, 1827, 1800, 1680, 1648, 1590, 1549, 1469,
  1399, 1223, 1200, 1053, 1000, 941, 831, 625, 605, 585, 533, 450, 305, 298, 238, 216, 187, 83, 74
];

export const MET_2025_CUTOFFS: CutoffData = {
  "Manipal": {
    "Computer Science & Engg": 1602,
    "Computer Science & Engg (AIML)": 2382,
    "Computer Science and Financial Technology": 3737,
    "Information Technology": 4765,
    "Data Science": 5794,
    "Computer & Communication Engg": 6360,
    "Mathematics and Computing": 6771,
    "Electronics & Communication Engg": 8820,
    "Electronics Engg & VLSI": 13725,
    "Electrical & Electronics Engg": 20997,
    "Cyber Physical Systems": 23818,
    "Aeronautical Engg": 28850,
    "Biotechnology": 30017,
    "Electronics & Instrumentation Engg": 34087,
    "Mechatronics": 38247,
    "Industrial Engg": 45140,
    "Automobile Engg": 46461,
    "Biomedical Engg": 47120,
    "Mechanical Engg": 47184,
    "Civil Engg": 47893,
    "Chemical Engg": 48465,
  },
  "Jaipur": {
    "Computer Science & Engg": 17794,
    "Computer Science & Engg (Artificial Intelligence & Machine Learning)": 24500,
    "Electronics Engg & VLSI": 27258,
    "Computer Science & Bioscience": 31591,
    "Electrical & Computer Engg": 34935,
    "Mechatronics": 41998,
    "Chemical Engg": 42594,
    "Computer Science and Bioscience": 43634,
    "Electrical & Electronics Engg": 45001,
    "Biotechnology": 46006,
    "Mechanical Engg": 46177,
    "Computer Science and Engg (IOT and Intelligent Systems)": 46707,
    "Computer & Communication Engg": 46694,
    "Information Technology": 47833,
    "Civil Engg": 48178,
    "Computer Science & Engg (Data Science)": 48250,
    "Electronics & Communication Engg": 48266,
    "Automobile Engg": 48334,
  },
  "Bengaluru": {
    "Computer Science & Engg": 8888,
    "Computer Science & Engg (Artificial Intelligence)": 11738,
    "Computer Science & Engg (Cyber Security)": 17427,
    "Computer Science & Engg (Data Science)": 17587,
    "Information Technology": 20167,
    "Electronics & Communication Engg": 26764,
    "Electronics & Computer Engg": 29025
  }
};

export function convertBoardPercentageToBand(percentage: number): number {
  if (percentage >= 95) return 10;
  if (percentage >= 90) return 9;
  if (percentage >= 85) return 8;
  if (percentage >= 80) return 7;
  if (percentage >= 75) return 6;
  if (percentage >= 70) return 5;
  if (percentage >= 65) return 4;
  if (percentage >= 60) return 3;
  if (percentage >= 55) return 2;
  if (percentage >= 50) return 1;
  return 0;
}

export function applyRankThreshold(predictedRank: number): number {
  if (predictedRank > 15000) return Math.round(predictedRank * 1.05);
  if (predictedRank > 10000) return Math.round(predictedRank * 1.04);
  if (predictedRank > 7500) return Math.round(predictedRank * 1.03);
  if (predictedRank > 5000) return Math.round(predictedRank * 1.02);
  if (predictedRank > 2500) return Math.round(predictedRank * 1.01);
  return predictedRank;
}

// Matrix utility functions
function transpose(matrix: number[][]): number[][] {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function multiply(a: number[][], b: number[][]): number[][] {
  return a.map(row =>
    b[0].map((_, i) =>
      row.reduce((sum, val, j) => sum + val * b[j][i], 0)
    )
  );
}

function inverse(matrix: number[][]): number[][] {
  const n = matrix.length;
  const result = Array(n).fill(0).map(() => Array(n).fill(0));
  const temp = matrix.map(row => [...row]);

  // Create identity matrix
  for (let i = 0; i < n; i++) {
    result[i][i] = 1;
  }

  // Gaussian elimination
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(temp[k][i]) > Math.abs(temp[maxRow][i])) {
        maxRow = k;
      }
    }
    [temp[i], temp[maxRow]] = [temp[maxRow], temp[i]];
    [result[i], result[maxRow]] = [result[maxRow], result[i]];

    for (let k = i + 1; k < n; k++) {
      const factor = temp[k][i] / temp[i][i];
      for (let j = i; j < n; j++) {
        temp[k][j] -= factor * temp[i][j];
      }
      for (let j = 0; j < n; j++) {
        result[k][j] -= factor * result[i][j];
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let k = i - 1; k >= 0; k--) {
      const factor = temp[k][i] / temp[i][i];
      for (let j = 0; j < n; j++) {
        result[k][j] -= factor * result[i][j];
      }
    }
    for (let j = 0; j < n; j++) {
      result[i][j] /= temp[i][i];
    }
  }

  return result;
}

export function polynomialInterpolation(score: number, xData: number[], yData: number[], degree: number = 3): number {
  const logY = yData.map(y => Math.log(y));

  // Generate polynomial features
  const X = xData.map(x => {
    const row = [];
    for (let i = 0; i <= degree; i++) {
      row.push(Math.pow(x, i));
    }
    return row;
  });

  // Solve normal equation: (X^T * X)^(-1) * X^T * y
  const y = logY;
  const Xt = transpose(X);
  const XtX = multiply(Xt, X);
  const XtXInv = inverse(XtX);
  const XtY = multiply(Xt, y.map(yi => [yi]));
  const coefficients = multiply(XtXInv, XtY).map(c => c[0]);

  // Predict using polynomial
  let prediction = 0;
  for (let i = 0; i <= degree; i++) {
    prediction += coefficients[i] * Math.pow(score, i);
  }

  // Convert back from log scale
  return Math.round(Math.exp(prediction));
}

export function predictMETRank(boardPercentage: number, metMarks: number): PredictionResult {
  const boardBand = convertBoardPercentageToBand(boardPercentage);

  if (boardBand === 0) {
    throw new Error("Board percentage below 50. You are not qualified for MET.");
  }

  const avgScore = (((metMarks / 240) * 100) + (boardBand * 10)) / 2;

  // Interpolate and apply threshold to predict rank
  let predictedRank = polynomialInterpolation(avgScore, MET_2025_X_VALUES, MET_2025_Y_VALUES);
  let effectiveRank = applyRankThreshold(predictedRank);

  if (avgScore === 100) {
    predictedRank = 1;
    effectiveRank = 1;
  }

  // Calculate attainable branches
  const attainableBranches = Object.entries(MET_2025_CUTOFFS).map(([college, branches]) => ({
    college,
    branches: Object.entries(branches)
      .filter(([_, cutoff]) => effectiveRank <= cutoff)
      .map(([name, cutoff]) => ({ name, cutoff }))
      .sort((a, b) => a.cutoff - b.cutoff)
  }));

  return {
    predictedRank,
    effectiveRank,
    avgScore,
    attainableBranches
  };
}
