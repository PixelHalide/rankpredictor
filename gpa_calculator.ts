//import subDat from "./src/subjects.json";

const subjectData = {"1-CS-PHY":{
    "Computational Mathematics - 1": 4,
    "Applied Physics for Engineers": 3,
    "Fundamentals of Electronics": 3,
    "Programming for Problem Solving": 3,
    "Basic Mechanical Engineering Science": 3,
    "Communication Skills in English": 2,
    "Universal Human Values and Professional Ethics (MLC)": 1,
    "Human Rights and Constitution (MLC)": 1,
    "Workshop Practice": 1,
    "Programming for Problem Solving Lab": 1
 },
 "2-CS-PHY":{
    "Computational Mathematics - 2": 4,
    "Applied Chemistry for Engineers": 3,
    "Fundamentals of Electrical Engineering": 3,
    "Engineering Mechanics and Smart Buildings": 3,
    "Introduction to Object Oriented Programming": 3,
    "Environmental Studies": 2,
    "Data Visualization": 2,
    "Introduction to Object Oriented Programming Lab": 1,
    "Computer Aided Engineering Graphics": 1
},
"1-CS-CHM": {
    "Computational Mathematics - 1": 4,
    "Applied Chemistry for Engineers": 3,
    "Fundamentals of Electrical Engineering": 3,
    "Programming for Problem Solving": 3,
    "Environmental Studies": 2,
    "Engineering Mechanics and Smart Buildings": 3,
    "Universal Human Values and Professional Ethics": 1,
    "Human Rights and Constitution": 1,
    "Programming for Problem Solving Lab": 1,
    "Computer Aided Engineering Graphics": 1
},
"2-CS-CHM": {
    "Computational Mathematics - 2": 4,
    "Applied Physics for Engineers": 3,
    "Fundamentals of Electronics": 3,
    "Basic Mechanical Engineering Science": 3,
    "Data Visualisation": 2,
    "Introduction to Object Oriented Programming": 3,
    "Communication Skills in English": 2,
    "Workshop Practice": 1,
    "Introduction to Object Oriented Programming Lab": 1
},
"3-CS": {
    "Discrete Mathematical Structures": 3,
    "Data Structures": 4,
    "Data Communication and Computer Networks": 4,
    "Data Analytics": 4,
    "Digital Systems and Computer Organization": 4,
    "Data Structures Lab": 1,
    "Digital Systems Lab": 1,
    "Discrete Mathematical Structures (Repeated)": 3
},
"4-CS": {
    "Probability and Optimization": 3,
    "Database Systems": 4,
    "Design & Analysis of Algorithms": 4,
    "Introduction to Artificial Intelligence": 3,
    "Operating Systems": 3,
    "Operating Systems Lab": 1,
    "Database Lab": 2,
    "Object-Oriented Software Development Lab": 2
},
"5-CS": {
    "Essentials of Management": 3,
    "Finite Automata and Compiler Design": 4,
    "Software Engineering": 4,
    "Principles of Cryptography": 4,
    "Cloud Computing and DevOps": 4,
    "Open Elective - 1 Creativity, Problem Solving and Innovation": 3
},
"6-CS": {
    "Engineering Economics and Financial Management": 3,
    "Machine Learning": 4,
    "Parallel Computer Architecture and Programming": 4,
    "Program Elective - 1 (Minor Specialization)": 3,
    "Program Elective - 2 (Minor Specialization)": 3,
    "Open Elective 2": 3
},
"7-CS": {
    "Program Elective - 3 (Minor Specialization)": 3,
    "Program Elective - 4 (Minor Specialization)": 3,
    "Program Elective - 5": 3,
    "Program Elective - 6": 3,
    "Program Elective - 7": 3,
    "Open Elective-3": 3,
    "Mini Project (Minor Specialization)": 8
},
"8-CS": {
    "Industrial Training": 1,
    "Project Work / Practice School": 12,
    "Project Work (B. Tech Honors)": 20,
    "B Tech Honors (Theory 1) (5 Semester)": 4,
    "B Tech Honors (Theory 2) (6 Semester)": 4,
    "B Tech Honors (Theory 3) (7 Semester)": 4
},

"1-NONCS-PHY": {
    "Engineering Mathematics - 1": 4,
    "Engineering Physics": 3,
    "Mechanics of Solids": 3,
    "Basic Electronics": 3,
    "Basic Mechanical Engineering": 3,
    "Communication Skills in English": 2,
    "Universal Human Values and Professional Ethics (MLC)": 1,
    "Engineering Physics Lab": 1,
    "Workshop Practice": 1,
    "Engineering Graphics - 1": 1
},
"2-NONCS-PHY": {
    "Engineering Mathematics - 2": 4,
    "Engineering Chemistry": 3,
    "Biology for Engineers": 3,
    "Basic Electrical Technology": 3,
    "Problem Solving Using Computers": 3,
    "Environmental Studies": 2,
    "Human Rights and Constitution (MLC)": 1,
    "Engineering Chemistry Lab": 1,
    "Problem Solving Using Computers Lab": 1,
    "Engineering Graphics - 2": 1
},
"1-NONCS-CHM": {
    "Engineering Mathematics - 1": 4,
    "Engineering Chemistry": 3,
    "Biology for Engineers": 3,
    "Basic Electrical Technology": 3,
    "Problem Solving Using Computers": 3,
    "Environmental Studies": 2,
    "Human Rights and Constitution (MLC)": 1,
    "Engineering Chemistry Lab": 1,
    "Problem Solving Using Computers Lab": 1,
    "Engineering Graphics - 1": 1
},
"2-NONCS-CHM": {
    "Engineering Mathematics - 2": 4,
    "Engineering Physics": 3,
    "Mechanics of Solids": 3,
    "Basic Electronics": 3,
    "Basic Mechanical Engineering": 3,
    "Communication Skills in English": 2,
    "Universal Human Values and Professional Ethics (MLC)": 1,
    "Engineering Physics Lab": 1,
    "Workshop Practice": 1,
    "Engineering Graphics - 2": 1
}
};
document.addEventListener('DOMContentLoaded', function() {

    let semester_isOpen: boolean = false;
    let cycle_isOpen: boolean = false;
    let stream_isOpen: boolean = false;
    let table_isOpen: boolean = false;

    const dropdownButton = document.getElementById("dropdown-button")!;
    const dropdownArrow = document.getElementById("dropdown-arrow")!;
    const semesterDiv = document.getElementById("semester")!;
    const sub_table = document.getElementById("table")!;
    const sub_table_nested = document.getElementById("nested_table")!;
    const submit_button = document.getElementById("submit_button")!;

    var selectedSemester: number | null;
    dropdownButton.onclick = function(){
        if (!semester_isOpen){
            dropdownArrow.classList.add("rotate-180");
            semesterDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
            semesterDiv.classList.add("max-h-96", "opacity-100", "mt-2", "mb-5");
            semester_isOpen = true;
        } else {
            dropdownArrow.classList.remove("rotate-180");
            semesterDiv.classList.remove("max-h-96", "opacity-100", "mt-2", "mb-5");
            semesterDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
            semester_isOpen = false;
            if (cycle_isOpen){
                var cycleDiv = document.getElementById("first_year")!;
                cycleDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycleDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
                cycle_isOpen = false;
            }
            if (stream_isOpen){
                var streamDiv = document.getElementById("stream")!;
                streamDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
                streamDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
            }
            if (table_isOpen){
                sub_table.classList.remove("opacity-100", "py-5");
                sub_table.classList.add("opacity-0", "py-0");
                sub_table_nested.classList.remove("opacity-100");
                sub_table_nested.classList.add("opacity-0");
                document.getElementById("subject_table")!.innerHTML = "";
                submit_button.classList.remove("opacity-100");
                submit_button.classList.add("opacity-0");
            }
        }
    }
    function get_semester(semester: number) {
        selectedSemester = semester;

        console.log(selectedSemester);
        switch(selectedSemester){
            case 1:
                var cycleDiv = document.getElementById("first_year")!;
                cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
                cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycle_isOpen = true;
                break;
            case 2:
                var cycleDiv = document.getElementById("first_year")!;
                cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
                cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycle_isOpen = true;
                break;
        }
    }
    (window as any).get_semester = get_semester;
    // 0 - Physics Cycle, 1 - Chem Cycle
    function cycle(cycle: number){
        var streamDiv = document.getElementById("stream")!;
        stream_isOpen = true;
        streamDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
        streamDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");

        var selectedCycle = cycle;
        console.log(`Selected cycle: ${selectedCycle === 0 ? 'Physics' : 'Chemistry'}`);

        document.getElementById("cs")!.onclick = function() {
            selectStream("CS", selectedCycle);
        };

        document.getElementById("noncs")!.onclick = function() {
            selectStream("Non-CS", selectedCycle);
        };
    }
    (window as any).cycle = cycle;

    function selectStream(stream: string, cycleType: number) {
        console.log(`Selected: ${cycleType === 0 ? 'Physics' : 'Chemistry'} Cycle, ${stream} Stream`);

        if (selectedSemester === 1 || selectedSemester === 2) {
            const streamPrefix = stream === "CS" ? "CS" : "NONCS";
            const cyclePrefix = cycleType === 0 ? "PHY" : "CHM";

            const subjectGroup = `${selectedSemester}-${streamPrefix}-${cyclePrefix}`;
            loadSubjects(subjectGroup);
        }

        else if (selectedSemester && selectedSemester >= 3 && selectedSemester <= 8) {

        }
    }

    function loadSubjects(subjectGroup: string) {
        console.log(`Loading subject group: ${subjectGroup}`);

        // @ts-ignore
        let subjects = subjectData[subjectGroup];
        let returnHTML : string = "";
        let i : number = 0;
        let alternate : string = "bg-zinc-900";
        for (const [subjectName, creditValue] of Object.entries(subjects)) {
            if (i%2 === 0) alternate = "";
            returnHTML += `
            <tr class="${alternate}">
                    <td>${subjectName}</td>
                    <td>${creditValue}</td>
                    <td>
                        <input type="text"
                            placeholder="Grade"
                            class="w-16 p-1 text-center bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
                            maxlength="2"
                    </td>
                </tr>`;
            i++;
            if (alternate === "") alternate = "bg-zinc-900";
        }
        table_isOpen = true;
        document.getElementById("subject_table")!.innerHTML = returnHTML;
        let sub_table = document.getElementById("table")!;
        let sub_table_nested = document.getElementById("nested_table")!;
        let submit_button = document.getElementById("submit_button")!;
        sub_table.classList.remove("opacity-0", "py-0");
        sub_table.classList.add("opacity-100", "py-5");
        sub_table_nested.classList.remove("opacity-0");
        sub_table_nested.classList.add("opacity-100");
        submit_button.classList.remove("opacity-0");
        submit_button.classList.add("opacity-100");
    }
    (window as any).selectStream = selectStream;
});

