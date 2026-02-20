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

export const MET_2025_X_VALUES = [
  31.25, 33.958333333333336, 42, 43.33333333333333, 44.16666666666667,
  44.583333333333336, 46.25, 46.875, 47.291666666666664, 48.75, 50, 50,
  50.41666666666667, 50.833333333333336, 52.08333333333333, 53.95833333333333,
  54.791666666666664, 55.20833333333333, 55.20833333333333, 55.41666666666667,
  55.833333333333336, 56.04166666666667, 56.25, 56.66666666666667, 56.875,
  57.08333333333333, 57.708333333333336, 58.125, 58.54166666666667, 58.75,
  58.95833333333333, 59.375, 59.58333333333333, 60.41666666666667,
  61.04166666666667, 61.45833333333333, 61.45833333333333, 61.66666666666667,
  61.875, 62.08333333333333, 62.70833333333333, 63.125, 63.54166666666667,
  64.375, 64.79166666666667, 65, 65.41666666666666, 66.66666666666667, 66.875,
  66.875, 67.08333333333333, 67.08333333333333, 67.5, 67.5, 67.5,
  67.70833333333333, 67.70833333333333, 67.70833333333334, 68.125, 68.125,
  68.54166666666667, 68.54166666666667, 69.16666666666667, 69.16666666666667,
  69.375, 69.375, 69.79166666666667, 70, 70.20833333333333, 70.20833333333333,
  70.41666666666666, 70.625, 70.625, 70.83333333333334, 70.83333333333334,
  71.04166666666667, 71.04166666666667, 71.04166666666667, 71.04166666666667,
  71.25, 71.25, 71.66666666666666, 71.875, 72.29166666666666, 72.29166666666666,
  72.5, 72.5, 72.5, 72.5, 72.70833333333334, 72.70833333333334,
  72.91666666666666, 72.91666666666666, 72.91666666666666, 73.125, 73.125,
  73.125, 73.125, 73.33333333333333, 73.54166666666666, 73.75,
  74.16666666666667, 74.375, 74.58333333333333, 74.79166666666667, 75, 75, 75,
  75, 75.41666666666666, 75.625, 75.625, 75.83333333333334, 75.83333333333334,
  75.83333333333334, 75.83333333333334, 75.83333333333334, 75.83333333333334,
  76.04166666666667, 76.04166666666667, 76.04166666666667, 76.04166666666667,
  76.25, 76.25, 76.45833333333333, 76.45833333333333, 76.45833333333333,
  76.66666666666666, 76.66666666666667, 76.875, 77.08333333333334,
  77.08333333333334, 77.29166666666666, 77.29166666666666, 77.29166666666667,
  77.5, 77.5, 77.70833333333334, 77.70833333333334, 77.70833333333334,
  77.70833333333334, 77.91666666666666, 78.125, 78.33333333333333,
  78.33333333333333, 78.75, 79.375, 79.58333333333333, 79.58333333333334,
  79.58333333333334, 79.79166666666666, 79.79166666666667, 80.20833333333333,
  80.20833333333334, 80.20833333333334, 80.41666666666666, 80.625, 81.25, 81.25,
  81.25, 81.66666666666666, 81.66666666666666, 82.08333333333334,
  82.08333333333334, 82.29166666666666, 82.5, 82.5, 82.70833333333334, 83.125,
  83.125, 83.33333333333333, 83.33333333333333, 83.33333333333333,
  83.33333333333334, 83.54166666666666, 83.75, 83.75, 84.16666666666666, 84.375,
  84.58333333333333, 85, 85, 85.20833333333334, 85.20833333333334, 86.875,
  87.08333333333334, 87.5, 87.70833333333334, 89.375, 90.20833333333334,
  91.04166666666666, 91.25,
];

export const MET_2025_Y_VALUES = [
  36672, 35319, 29996, 29500, 28378, 27785, 26039, 26172, 25681, 23820, 22880,
  23485, 23001, 22600, 21664, 19912, 19207, 18708, 18700, 18555, 18246, 18185,
  17874, 17700, 17357, 17185, 16647, 15905, 15855, 14961, 15557, 15043, 14035,
  14125, 13588, 12475, 13176, 13034, 12887, 12725, 12134, 11672, 11404, 10555,
  10332, 10113, 9806, 8802, 8597, 8532, 8405, 8423, 8074, 8077, 8112, 7986,
  8036, 7297, 7681, 7877, 7395, 7400, 6879, 6983, 6184, 6693, 6422, 5939, 6224,
  6212, 6074, 5908, 5961, 5871, 5824, 5710, 5718, 5670, 5403, 5534, 5575, 5264,
  5131, 4459, 4989, 4767, 4792, 4822, 4817, 4656, 4715, 4647, 4104, 4629, 4418,
  4529, 4470, 4421, 4324, 4218, 4168, 3844, 3356, 3875, 3589, 3488, 3498, 3228,
  3451, 3316, 3213, 3205, 3099, 3065, 3109, 3132, 3117, 3055, 3397, 3008, 2980,
  3051, 2902, 2941, 2803, 2855, 2857, 2740, 2409, 2636, 2225, 2535, 2432, 2590,
  3268, 2625, 2097, 2316, 2338, 1968, 1941, 2201, 2107, 2073, 1962, 1925, 1770,
  1673, 1677, 1706, 1614, 1690, 1514, 1503, 1489, 1188, 1148, 1249, 1213, 1242,
  1181, 1110, 838, 991, 776, 717, 943, 905, 802, 782, 765, 749, 743, 759, 726,
  668, 540, 619, 642, 544, 573, 495, 469, 454, 283, 265, 223, 214, 113, 83, 54,
  45,
];

// I get all my data from CollegePravesh

export const MET_2025_CUTOFFS: CutoffData = {
  Manipal: {
    "Computer Science and Engineering": 5606,
    "Computer Science and Financial Technology": 5892,
    "Mathematics and Computing": 6082,
    "Electronics and Communication Engineering": 7362,
    "Electronics Engineering with specialization in VLSI Design and Technology": 8835,
    "Electrical and Electronics Engineering": 14447,
    "Aeronautical Engineering": 16069,
    "Electronics and Instrumentation Engineering": 16776,
    "Cyber Physical Systems": 17399,
    Mechatronics: 17874,
    Biotechnology: 19462,
    "Mechanical Engineering": 19635,
    "Chemical Engineering": 22425,
    "Automobile Engineering": 22890,
    "Biomedical Engineering": 25490,
    "Industrial Engineering": 28076,
    "Civil Engineering": 30133,
    "Civil Engineering (Dual Degree with Macquarie University)": 47927,
    "Electrical and Electronics Engineering (Dual Degree with Macquarie University)": 27859,
    "Mechanical Engineering (Dual Degree with Deakin University)": 35417,
    "Mechatronics (Dual Degree with Deakin University)": 31754,
  },
  Bengaluru: {
    "Computer Science & Engineering": 13834,
    "Electronics & Communication Engineering": 14501,
    "Electronics & Computer Engineering": 16572,
    "Electronics Engg with specialization in VLSI Design and Technology": 19212,
    "Robotics and Artificial Intelligence": 18529,
  },

  // I don't understand why the fuck we have to even keep Jaipur's cutoffs but alright I updated
  Jaipur: {
    Biotechnology: 50589,
    "Chemical Engineering": 40759,
    "Civil Engineering": 42435,
    "Computer Science and Biosciences": 51264,
    "Computer Science and Engineering": 39307,
    "Electrical and Computer Engineering": 52311,
    "Electronics and Communication Engineering": 52717,
    "Electronics Engineering with specialization in VLSI Design and Technology": 49330,
    "Mechanical Engineering": 49945,
    Mechatronics: 46968,
    "Robotics and Artificial Intelligence": 42006,
    "Computer Science and Engineering (Dual Degree with Deakin University)": 52587,
  },
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

// THIS WILL NEVER NOT BE FUNNY LMFAO, MY MAN BE DOING MANUAL MATRIX MANIPULATIONS TO REACH THIS
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
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function multiply(a: number[][], b: number[][]): number[][] {
  return a.map((row) =>
    b[0].map((_, i) => row.reduce((sum, val, j) => sum + val * b[j][i], 0)),
  );
}

function inverse(matrix: number[][]): number[][] {
  const n = matrix.length;
  const result = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const temp = matrix.map((row) => [...row]);

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

export function polynomialInterpolation(
  score: number,
  xData: number[],
  yData: number[],
  degree: number = 3,
): number {
  const logY = yData.map((y) => Math.log(y));

  // Generate polynomial features
  const X = xData.map((x) => {
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
  const XtY = multiply(
    Xt,
    y.map((yi) => [yi]),
  );
  const coefficients = multiply(XtXInv, XtY).map((c) => c[0]);

  // Predict using polynomial
  let prediction = 0;
  for (let i = 0; i <= degree; i++) {
    prediction += coefficients[i] * Math.pow(score, i);
  }

  // Convert back from log scale
  return Math.round(Math.exp(prediction));
}

export function predictMETRank(
  boardPercentage: number,
  metMarks: number,
): PredictionResult {
  const boardBand = convertBoardPercentageToBand(boardPercentage);

  if (boardBand === 0) {
    throw new Error(
      "Board percentage below 50. You are not qualified for MET.",
    );
  }
  if (boardBand === 0 && metMarks === 0) {
    throw new Error(
      "😭😭😭😭son😭😭😭😭😭😭😭😭😭😭I'm crine😭😭😭😭😭😭",
    );
  }
  const avgScore = ((metMarks / 240) * 100 + boardBand * 10) / 2;

  // Interpolate and apply threshold to predict rank
  let predictedRank = polynomialInterpolation(
    avgScore,
    MET_2025_X_VALUES,
    MET_2025_Y_VALUES,
  );
  let effectiveRank = applyRankThreshold(predictedRank);

  if (avgScore === 100) {
    predictedRank = 1;
    effectiveRank = 1;
  }

  // Calculate attainable branches
  const attainableBranches = Object.entries(MET_2025_CUTOFFS).map(
    ([college, branches]) => ({
      college,
      branches: Object.entries(branches)
        .filter(([_, cutoff]) => effectiveRank <= cutoff)
        .map(([name, cutoff]) => ({ name, cutoff }))
        .sort((a, b) => a.cutoff - b.cutoff),
    }),
  );

  return {
    predictedRank,
    effectiveRank,
    avgScore,
    attainableBranches,
  };
}
