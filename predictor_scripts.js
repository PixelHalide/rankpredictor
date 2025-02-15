document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    if (document.getElementById('myChart')) {
        const chartTitle = document.querySelector('title').textContent;
        const ctx = document.getElementById('myChart').getContext('2d');

        if (chartTitle.includes('MET 2025')) {
            createMETChart2025(ctx);
        } else if (chartTitle.includes('MET 2024')) {
            createMETChart2024(ctx);
        } else if (chartTitle.includes('KCET')) {
            createKCETChart(ctx);
        }
    }
}

function createChart(ctx, labels, data, label, title) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'white',
                pointBorderColor: 'white'
            }]
        },
        options: {
            animation: {
                duration: 3000
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: '#555555'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: '#555555'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    },
                    title: {
                        display: title !== undefined,
                        text: title,
                        color: 'white'
                    }
                }
            }
        }
    });
}

function createMETChart2025(ctx) {
    const xData = [31.25, 31.66666667, 33.95833333, 35.83333333, 37.5, 39.375, 39.375, 40.0, 42.08333333, 45.41666667, 46.04166667, 47.70833333, 47.91666667, 48.54166667, 48.95833333, 49.79166667, 51.04166667, 51.66666667, 52.08333333, 52.70833333, 53.125, 53.75, 55.41666667, 56.66666667, 57.08333333, 57.5, 57.5, 57.70833333, 58.95833333, 59.375, 59.58333333, 60.8333, 61.04166667, 61.25, 61.875, 62.08333333, 62.91666667, 63.95833333, 64.3, 64.79166667, 65.20833333, 66.04166667, 66.667, 66.875, 67.08333333, 67.29166667, 67.5, 67.91666667, 68.125, 68.33333333, 68.54166667, 69.16666667, 69.375, 69.58333333, 70.0, 70.20833333, 71.04166667, 71.25, 71.45833333, 71.875, 72.08333333, 72.29166667, 72.70833333, 72.91666667, 73.125, 73.54166667, 73.75, 73.95833333, 74.16666667, 74.375, 74.58333333, 75.0, 75.20833333, 75.625, 75.83333333, 76.04166667, 76.25, 76.45833333, 76.66666667, 76.875, 77.08333333, 77.29166667, 78.125, 78.33333333, 78.95833333, 79.16666667, 79.58333333, 80.20833333, 81.25, 81.45833333, 81.66666667, 82.08333333, 82.70833333, 84.375, 84.375, 85.0, 85.41666667, 85.83333333, 88.54166667, 91.25];
    const yData = [32043, 31803, 30599, 29500, 28300, 27555, 27503, 27100, 25719, 23458, 22810, 21765, 21285, 20894, 20490, 19859, 18716, 18216, 17960, 17364, 16900, 16000, 14983, 14000, 13652, 13286, 13171, 13101, 11994, 11612, 11570, 10500, 10380, 10127, 9642, 9472, 8817, 8000, 7750, 7454, 7169, 6610, 6217, 6051, 5941, 5859, 5675, 5434, 5349, 5193, 5071, 4675, 4653, 4483, 4267, 4170, 3776, 3553, 3551, 3383, 3285, 3144, 2970, 2896, 2801, 2665, 2583, 2493, 2436, 2370, 2271, 2100, 2066, 1936, 1827, 1800, 1680, 1648, 1590, 1549, 1469, 1399, 1223, 1200, 1053, 1000, 941, 831, 625, 605, 585, 533, 450, 305, 298, 238, 216, 187, 83, 74];
    createChart(ctx, xData, yData, 'Rank vs Band Score', 'MET 2025 Ranks vs Band Scores');
}

function createMETChart2024(ctx) {
    const xData = [34, 42.6, 50.7, 52.025, 53.475, 56.125, 63.75, 64.125, 64.65, 68.75, 70.45, 76, 77.875, 78.4, 83.425, 85.975];
    const yData = [31500, 21000, 18132, 17044, 15762, 11012, 6700, 4700, 4493, 3016, 2234, 950, 672, 604, 228, 108];
    createChart(ctx, xData, yData, 'Rank vs Band Score', 'MET 2024 Ranks vs Band Scores');
}


function createKCETChart(ctx) {
    const xData = [57.222, 58.278, 61.278, 62.889, 64.333, 66.444, 66.778, 67.389, 67.444, 67.667, 67.667, 67.833, 68.056, 68.944, 69.111, 69.556, 69.833, 70.833, 71.722, 71.778, 73.278, 73.389, 74.722, 75.444, 76.278, 76.833, 77.444, 79.944, 80.167, 80.222, 80.944, 81.278, 82.056, 82.611, 83.0, 83.0, 83.0, 83.0, 83.722, 84.333, 84.722, 85.944, 87.944, 88.833];
    const yData = [115885, 93040, 61134, 49806, 40702, 29961, 28396, 26062, 25682, 24884, 24846, 24172, 23258, 20224, 19679, 18400, 17514, 15103, 13146, 12948, 11186, 10084, 8013, 7007, 6037, 5446, 4872, 2942, 2830, 2792, 2411, 2264, 1873, 1653, 1496, 1490, 1487, 1484, 1249, 1089, 980, 745, 409, 322];
    createChart(ctx, xData, yData, 'Rank vs Avg Score', 'KCET Ranks vs Average Scores');
}

// Toggle content script for all HTML files
function toggleContent() {
    var hiddenContent = document.getElementById("hiddenContent");
    var toggleButton = document.querySelector(".underline");

    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        toggleButton.textContent = "How does the code work? V";
    } else {
        hiddenContent.style.display = "none";
        toggleButton.textContent = "How does the code work? >";
    }
}

// Linear Interpolation Function
function interpolateRank(score, xData, yData) {
    if(score <= xData[0]) return yData[0];
    if(score >= xData[xData.length - 1]) return yData[yData.length - 1];

    let i = 0;
    while(i < xData.length - 1 && score > xData[i+1]) {
        i++;
    }

    const x0 = xData[i];
    const x1 = xData[i+1];
    const y0 = yData[i];
    const y1 = yData[i+1];

    return y0 + ((y1 - y0) / (x1 - x0)) * (score - x0);
}

// Rank Threshold Application
function applyRankThreshold(predictedRank) {
    if (predictedRank > 15000) return predictedRank - 2000;
    if (predictedRank > 10000) return predictedRank - 1000;
    if (predictedRank > 7500) return predictedRank - 750;
    if (predictedRank > 5000) return predictedRank - 500;
    if (predictedRank > 2500) return predictedRank - 250;
    return predictedRank;
}

// Common function to handle rank prediction and branch display for MET
function predictMETRankAndBranches(boardPercentage, metMarks, cutoffs, xValues, yValues) {
    const resultEl = document.getElementById("result");
    const branchesEl = document.getElementById("attainableBranches");

    if (!resultEl || !branchesEl) {
        console.error("Required elements are missing for MET prediction.");
        return;
    }

    // Calculate the average score (assuming MET exam out of 240)
    const avgScore = (((metMarks / 240) * 100) + boardPercentage) / 2;

    // Interpolate and apply threshold to predict rank
    let predictedRank = Math.round(interpolateRank(avgScore, xValues, yValues));
    const effectiveRank = applyRankThreshold(predictedRank);

    resultEl.innerHTML = `Your rank is predicted to be: ${effectiveRank}`;

    // Generate attainable branches HTML with campus buttons
    let branchesHTML = "";
    Object.keys(cutoffs).forEach(college => {
        const campusName = college;
        branchesHTML += `
            <button class="campus-btn cursor-pointer w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-500 transition-colors mb-4">
                ${campusName}
            </button>
            <div class="campus-content">
                <ul class="list-disc list-inside">`;
        Object.entries(cutoffs[college])
            .filter(([_, cutoff]) => effectiveRank <= cutoff)
            .forEach(([branch, cutoff]) => {
                branchesHTML += `<li>${branch} - ${cutoff}</li>`;
            });
        branchesHTML += `</ul>
            </div>`;
    });
    branchesEl.innerHTML = branchesHTML;

    // Set up collapsible functionality for campus buttons
    const campusButtons = document.getElementsByClassName("campus-btn");
    Array.from(campusButtons).forEach(btn => {
        btn.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("hidden");
        });
    });
}

// MET 2024 Specific Prediction Function
window.predictRank = function() {
    const boardEl = document.getElementById("boardPercentage");
    const metEl = document.getElementById("metMarks");

    if (!boardEl || !metEl) {
        alert("Please enter valid numbers for both Board Percentage and MET Marks.");
        return;
    }

    const boardPercentage = parseFloat(boardEl.value);
    const metMarks = parseFloat(metEl.value);

    if (isNaN(boardPercentage) || isNaN(metMarks)) {
        alert("Please enter valid numbers for both Board Percentage and MET Marks.");
        return;
    }

    // MET 2024 Data and Cutoffs
    const met2024XValues = [34, 42.6, 50.7, 52.025, 53.475, 56.125, 63.75, 64.125, 64.65, 68.75, 70.45, 76, 77.875, 78.4, 83.425, 85.975];
    const met2024YValues = [31500, 21000, 18132, 17044, 15762, 11012, 6700, 4700, 4493, 3016, 2234, 950, 672, 604, 228, 108];
    const met2024Cutoffs = {
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

    predictMETRankAndBranches(boardPercentage, metMarks, met2024Cutoffs, met2024XValues, met2024YValues);
}

// MET 2025 Specific Prediction Function
window.predictRankMET2025 = function() { // It's better to have a more specific name if you have multiple predictRank functions
    const boardEl = document.getElementById("boardPercentage");
    const metEl = document.getElementById("metMarks");

    if (!boardEl || !metEl) {
        alert("Please enter valid numbers for both Board Percentage and MET Marks.");
        return;
    }

    const boardPercentage = parseFloat(boardEl.value);
    const metMarks = parseFloat(metEl.value);

    if (isNaN(boardPercentage) || isNaN(metMarks)) {
        alert("Please enter valid numbers for both Board Percentage and MET Marks.");
        return;
    }

    // MET 2025 Data and Cutoffs
    const met2025XValues = [31.25, 31.66666667, 33.95833333, 35.83333333, 37.5, 39.375, 39.375, 40.0, 42.08333333, 45.41666667, 46.04166667, 47.70833333, 47.91666667, 48.54166667, 48.95833333, 49.79166667, 51.04166667, 51.66666667, 52.08333333, 52.70833333, 53.125, 53.75, 55.41666667, 56.66666667, 57.08333333, 57.5, 57.5, 57.70833333, 58.95833333, 59.375, 59.58333333, 60.8333, 61.04166667, 61.25, 61.875, 62.08333333, 62.91666667, 63.95833333, 64.3, 64.79166667, 65.20833333, 66.04166667, 66.667, 66.875, 67.08333333, 67.29166667, 67.5, 67.91666667, 68.125, 68.33333333, 68.54166667, 69.16666667, 69.375, 69.58333333, 70.0, 70.20833333, 71.04166667, 71.25, 71.45833333, 71.875, 72.08333333, 72.29166667, 72.70833333, 72.91666667, 73.125, 73.54166667, 73.75, 73.95833333, 74.16666667, 74.375, 74.58333333, 75.0, 75.20833333, 75.625, 75.83333333, 76.04166667, 76.25, 76.45833333, 76.66666667, 76.875, 77.08333333, 77.29166667, 78.125, 78.33333333, 78.95833333, 79.16666667, 79.58333333, 80.20833333, 81.25, 81.45833333, 81.66666667, 82.08333333, 82.70833333, 84.375, 84.375, 85.0, 85.41666667, 85.83333333, 88.54166667, 91.25];
    const met2025YValues = [32043, 31803, 30599, 29500, 28300, 27555, 27503, 27100, 25719, 23458, 22810, 21765, 21285, 20894, 20490, 19859, 18716, 18216, 17960, 17364, 16900, 16000, 14983, 14000, 13652, 13286, 13171, 13101, 11994, 11612, 11570, 10500, 10380, 10127, 9642, 9472, 8817, 8000, 7750, 7454, 7169, 6610, 6217, 6051, 5941, 5859, 5675, 5434, 5349, 5193, 5071, 4675, 4653, 4483, 4267, 4170, 3776, 3553, 3551, 3383, 3285, 3144, 2970, 2896, 2801, 2665, 2583, 2493, 2436, 2370, 2271, 2100, 2066, 1936, 1827, 1800, 1680, 1648, 1590, 1549, 1469, 1399, 1223, 1200, 1053, 1000, 941, 831, 625, 605, 585, 533, 450, 305, 298, 238, 216, 187, 83, 74];
    const met2025Cutoffs = {
        "Manipal": {
            "Computer Science & Engg": 1633,
            "Computer Science & Engg (AIML)": 2255,
            "Computer Science and Financial Technology": 3189,
            "Information Technology": 5148,
            "Data Science": 5679,
            "Computer & Communication Engg": 5681,
            "Mathematics and Computing": 5910,
            "Electronics & Communication Engg": 7255,
            "Electronics Engg & VLSI": 8610,
            "Electrical & Electronics Engg": 14814,
            "Cyber Physical Systems": 19584,
            "Aeronautical Engg": 17546,
            "Biotechnology": 23458,
            "Electronics & Instrumentation Engg": 17416,
            "Mechatronics": 19948,
            "Industrial Engg": 38663,
            "Automobile Engg": 28284,
            "Biomedical Engg": 47120,
            "Mechanical Engg": 47184,
            "Civil Engg": 47893,
            "Chemical Engg": 48465,
        },
        "Jaipur": {
            "Computer Science & Engg": 19857,
            "Computer Science & Engg (Artificial Intelligence & Machine Learning)": 24524,
            "Electronics Engg & VLSI": 45815,
            "Computer Science & Bioscience": 47242,
            "Electrical & Computer Engg": 45507,
            "Mechatronics": 45815,
            "Chemical Engg": 41782,
            "Computer Science and Bioscience": 47242,
            "Electrical & Electronics Engg": 46937,
            "Biotechnology": 43734,
            "Mechanical Engg": 46720,
            "Computer Science and Engg (IOT and Intelligent Systems)": 47830,
            "Computer & Communication Engg": 46406,
            "Information Technology": 44343,
            "Civil Engg": 44343,
            "Computer Science & Engg (Data Science)": 30737,
            "Electronics & Communication Engg": 45835,
            "Automobile Engg": 43734,
        },
        "Bengaluru": {
            "Computer Science & Engg": 6256,
            "Computer Science & Engg (Artificial Intelligence)": 7760,
            "Computer Science & Engg (Cyber Security)": 12207,
            "Computer Science & Engg (Data Science)": 9861,
            "Information Technology": 13942,
            "Electronics & Communication Engg": 14354,
            "Electronics & Computer Engg": 16594,
            "Electronics Engineering & VLSI": 19358
        }
    };

    predictMETRankAndBranches(boardPercentage, metMarks, met2025Cutoffs, met2025XValues, met2025YValues);
}


// KCET Specific Prediction Function
window.predictRankKCET = function() {
    const boardEl = document.getElementById("boardPercentage");
    const kcetEl = document.getElementById("kcetMarks");
    const resultEl = document.getElementById("result");
    const branchesEl = document.getElementById("attainableBranches");

    if (!boardEl || !kcetEl || !resultEl || !branchesEl) {
        console.error("One or more required elements are missing.");
        return;
    }

    const boardPercentage = parseFloat(boardEl.value);
    const kcetMarks = parseFloat(kcetEl.value);

    if (isNaN(boardPercentage) || isNaN(kcetMarks)) {
        alert("Please enter valid numbers for both Board Percentage and KCET Marks.");
        return;
    }

    if (kcetMarks > 180) { // Corrected max marks to 180 based on formula in html
        alert("KCET Marks cannot exceed 180.");
        return;
    }

    // Calculate the average score
    const avgScore = (((kcetMarks / 180) * 100) + boardPercentage) / 2;

    // KCET Data points for interpolation
    const kcetXData = [57.222, 58.278, 61.278, 62.889, 64.333, 66.444, 66.778, 67.389, 67.444, 67.667, 67.667, 67.833, 68.056, 68.944, 69.111, 69.556, 69.833, 70.833, 71.722, 71.778, 73.278, 73.389, 74.722, 75.444, 76.278, 76.833, 77.444, 79.944, 80.167, 80.222, 80.944, 81.278, 82.056, 82.611, 83.0, 83.0, 83.0, 83.0, 83.722, 84.333, 84.722, 85.944, 87.944, 88.833];
    const kcetYData = [115885, 93040, 61134, 49806, 40702, 29961, 28396, 26062, 25682, 24884, 24846, 24172, 23258, 20224, 19679, 18400, 17514, 15103, 13146, 12948, 11186, 10084, 8013, 7007, 6037, 5446, 4872, 2942, 2830, 2792, 2411, 2264, 1873, 1653, 1496, 1490, 1487, 1484, 1249, 1089, 980, 745, 409, 322];

    // Calculate predicted rank
    let predictedRank = Math.round(interpolateRank(avgScore, kcetXData, kcetYData));
    const effectiveRank = applyRankThreshold(predictedRank);

    // Display rank
    resultEl.innerHTML = `Your rank is predicted to be: ${effectiveRank}`;

    // KCET Cutoffs - Example Data (replace with actual KCET cutoffs)
    const kcetCutoffs = {
        "RVCE": {
            "Computer Science & Engg": 360,
            "Information Science & Engg": 663,
            "Computer Science & Data Science": 899,
            "Artificial Intelligence & Machine Learning": 1143,
            "Computer Science & Cyber Security": 1339,
            "Electronics & Communication Engg": 1366,
            "Electronics & Telecommunication Engg": 4663,
            "Aerospace Engg": 4868,
            "Electrical & Electronics Engg": 6013,
            "Electronics & Instrumentation Engg": 6212,
            "Mechanical Engg": 11815,
            "Bio Technology": 13000,
            "Chemical Engg": 14949,
            "Civil Engg": 18609,
            "Industrial Engg & Management": 21189
        },
        "BMSCE": {
            "Computer Science & Engg": 360,
            "Information Science & Engg": 663,
            "Computer Science & Data Science": 899,
            "AIML": 1143,
            "Computer Science & Cyber Security": 1339,
            "Electronics & Communication Engg": 1366,
            "Electronics & Telecommunication Engg": 4663,
            "Aerospace Engg": 4868,
            "Electrical & Electronics Engg": 6013,
            "Electronics & Instrumentation Engg": 6212,
            "Mechanical Engg": 11815,
            "Bio Technology": 13000,
            "Chemical Engg": 14949,
            "Civil Engg": 18609,
            "Industrial Engg & Management": 21189
        },
        "MSRIT": {
            "Computer Science & Engg": 1859,
            "Information Science & Engg": 2634,
            "Computer Science & AIML": 3342,
            "AIML": 4178,
            "Artificial Intelligence & Data Science": 4594,
            "Computer Science & Cyber Security": 4810,
            "Electronics & Communication Engg": 5803,
            "Electronics & Telecommunication Engg": 9677,
            "Electrical & Electronics Engg": 13073,
            "Electronics & Instrumentation Engg": 15240,
            "Bio Technology": 21557,
            "Mechanical Engg": 37472,
            "Civil Engg": 44361,
            "Medical Electronics": 47014,
            "Chemical Engg": 55300,
            "Industrial Engg & Management": 64430
        },
        "PESU": {
            "Computer Science & Engg": 1643,
            "Computer Science & AIML": 2733,
            "Electronics & Communication Engg": 5898,
            "Electrical & Electronics Engg": 15006,
            "Biotechnology": 24273,
            "Mechanical Engg": 29905
        },
        "Dayanada Sagar": {
            "Computer Science & Engg": 4424,
            "AIML": 5840,
            "Information Science & Engg": 6665,
            "Computer Science & Data Science": 7360,
            "Computer Science & Cyber Security": 8195,
            "Computer Science & Business Systems": 9901,
            "Computer Science & IOT, Cybersecurity, Blockchain": 10560,
            "Electronics & Communication Engg": 11067,
            "Computer Science & Design": 11288,
            "Robotics & Artificial Intelligence": 15790,
            "Electronics & Telecommunication Engg": 27256,
            "Aeronautical Engg": 28059,
            "Electrical & Electronics Engg": 29591,
            "Electronics & Instrumentation Engg": 35307,
            "Bio Technology": 57443,
            "Mechanical Engg": 77609,
            "Medical Electronics": 83455,
            "Chemical Engg": 86010,
            "Civil Engg": 122287,
            "Automobile Engg": 124730
        },
        "NITTE": {
            "Computer Science & Engg": 8854,
            "AIML": 11384,
            "Information Science & Engg": 11525,
            "Artificial Intelligence & Data Science": 13937,
            "Computer Science & Business Systems": 14432,
            "Electronics & Communication Engg": 18544,
            "Electronics Engg  & VLSI": 36392,
            "Electrical & Electronics Engg": 39092,
            "Aeronautical Engg": 51750,
            "Mechanical Engg": 105127,
            "Civil Engg": 167408
        },
        "BMSIT": {
            "Computer Science & Engg": 6262,
            "Information Science & Engg": 9744,
            "AIML": 11163,
            "Computer Science & Business Systems": 12606,
            "Electronics & Communication Engg": 14907,
            "Electronics & Telecommunication Engg": 27903,
            "Electrical & Electronics Engg": 30609,
            "Mechanical Engg": 102233,
            "Civil Engg": 109639
        }
    };

    // Generate attainable branches HTML
    let branchesHTML = "";
    Object.keys(kcetCutoffs).forEach(college => {
        branchesHTML += `<button class="collapsible">${college}</button><div class="content"><ul>`;
        Object.entries(kcetCutoffs[college])
            .filter(([_, cutoff]) => effectiveRank <= cutoff)
            .forEach(([branch, cutoff]) => {
                branchesHTML += `<li>${branch} (${cutoff})</li>`;
            });
        branchesHTML += '</ul></div>';
    });

    // Display branches
    branchesEl.innerHTML = branchesHTML;

    // Set up collapsible functionality for collapsibles
    const collapsibles = document.getElementsByClassName("collapsible");
    Array.from(collapsibles).forEach(btn => {
        btn.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
};