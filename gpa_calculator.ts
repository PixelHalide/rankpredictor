import subDat from "./src/subjects.json";

const subjectData = subDat;

document.addEventListener('DOMContentLoaded', function() {

    let semester_isOpen: boolean = false;
    let cycle_isOpen: boolean = false;
    let stream_isOpen: boolean = false;
    let table_isOpen: boolean = false;
    let course_isOpen: boolean = false;

    const dropdownButton = document.getElementById("dropdown-button")!;
    const dropdownArrow = document.getElementById("dropdown-arrow")!;
    const semesterDiv = document.getElementById("semester")!;
    const sub_table = document.getElementById("table")!;
    const sub_table_nested = document.getElementById("nested_table")!;
    const submit_button = document.getElementById("submit_button")!;

    var selectedSemester: number | null;
    var subjectCount: number | null;

    function closeCycle() {
        if (cycle_isOpen) {
            let cycleDiv = document.getElementById("first_year")!;
            cycleDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
            cycleDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            cycle_isOpen = false;
        }
    }

    function closeStream() {
        if (stream_isOpen) {
            let streamDiv = document.getElementById("stream")!;
            streamDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
            streamDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            stream_isOpen = false;
        }
    }

    function closeCourse() {
        if (course_isOpen) {
            let courseDiv = document.getElementById("course")!;
            courseDiv.classList.remove("max-h-80", "opacity-100", "mt-2");
            courseDiv.classList.add("max-h-0", "opacity-0", "mt-0", "pointer-events-none");
            course_isOpen = false;
        }
    }

    function closeTable() {
        if (table_isOpen) {
            sub_table.classList.remove("opacity-100", "mb-5");
            sub_table.classList.add("opacity-0", "pointer-events-none");
            sub_table_nested.classList.remove("opacity-100");
            sub_table_nested.classList.add("opacity-0", "pointer-events-none");
            document.getElementById("subject_table")!.innerHTML = "";
            submit_button.classList.remove("opacity-100");
            submit_button.classList.add("opacity-0", "pointer-events-none");
            document.getElementById("result_display")!.classList.add("hidden");
            table_isOpen = false;
        }
    }
    function closeAllSections() {
        closeCycle();
        closeStream();
        closeCourse();
        closeTable();
    }

    dropdownButton.onclick = function() {
        if (!semester_isOpen) {
            dropdownArrow.classList.add("rotate-180");
            semesterDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            semesterDiv.classList.add("max-h-96", "opacity-100", "mt-2", "mb-5");
            semester_isOpen = true;
        } else {
            dropdownArrow.classList.remove("rotate-180");
            semesterDiv.classList.remove("max-h-96", "opacity-100", "mt-2", "mb-5");
            semesterDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            semester_isOpen = false;

            // Close all other sections
            closeAllSections();
        }
    }
    function get_semester(semester: number) {
        selectedSemester = semester;

        if (selectedSemester === 1 || selectedSemester === 2){
            closeCourse();
            closeTable();
            var cycleDiv = document.getElementById("first_year")!;
            cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
            cycle_isOpen = true;
        }
        else{
            closeCycle();
            closeStream();
            closeTable();
            var courseDiv = document.getElementById("course")!;
            courseDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "pointer-events-none");
            courseDiv.classList.add("max-h-80", "opacity-100", "mt-2");
            course_isOpen = true;
        }
    }
    (window as any).get_semester = get_semester;

    // 0 - Physics Cycle, 1 - Chem Cycle
    function cycle(cycle: number){
        var streamDiv = document.getElementById("stream")!;
        stream_isOpen = true;
        streamDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
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
    }

    function loadCourses(course: string){

        let subjectGroup = `${selectedSemester}-${course}`;
        loadSubjects(subjectGroup);
    }
    (window as any).loadCourses = loadCourses;


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
                    <td id="credits-${i}">${creditValue}</td>
                    <td>
                        <input type="text"
                            placeholder="Grade"
                            class="w-16 p-1 text-center bg-gray-600 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white"
                            maxlength="2"
                            id="grade-${i}"
                    </td>
                </tr>`;
            i++;
            if (alternate === "") alternate = "bg-zinc-900";
        }
        subjectCount = i;

        table_isOpen = true;
        document.getElementById("subject_table")!.innerHTML = returnHTML;
        let sub_table = document.getElementById("table")!;
        let sub_table_nested = document.getElementById("nested_table")!;
        let submit_button = document.getElementById("submit_button")!;
        sub_table.classList.remove("opacity-0", "pointer-events-none");
        sub_table.classList.add("opacity-100","mb-5");
        sub_table_nested.classList.remove("opacity-0", "pointer-events-none");
        sub_table_nested.classList.add("opacity-100");
        submit_button.classList.remove("opacity-0", "pointer-events-none");
        submit_button.classList.add("opacity-100");
    }
    (window as any).selectStream = selectStream;

    const VALID_GRADES: string[] = ["A+","A","B","C","D","E","F","S","NS"];
    const GRADE_WEIGHT = {"A+":10,"A":9,"B":8,"C":7,"D":6,"E":5,"F":0,"S":10,"NS":0};

    function calculateGPA(){
        let inputted_grades : string[] = [];
        let credits : number[] = [];
        let obtained_creds: number = 0;
        let total_creds: number = 0;
        for (let grade:number = 0; grade < subjectCount!; grade++){
            let input: any = (document.getElementById(`grade-${grade}`) as HTMLInputElement).value;
            if (validChecker(input.toUpperCase())) {
                inputted_grades.push(input);
                let creditText = (document.getElementById(`credits-${grade}`) as HTMLElement).textContent || "0";
                credits.push(parseInt(creditText));
                total_creds += parseInt(creditText);
            }
            else {
                alert("Please enter a valid grade");
                return;
            }

            }
            for (let i = 0; i < inputted_grades.length; i++){
                let grade = inputted_grades[i].toUpperCase() as keyof typeof GRADE_WEIGHT;
                obtained_creds +=  GRADE_WEIGHT[grade] * credits[i];
            }
            let gpa:number = obtained_creds/total_creds;
            document.getElementById("gpa_display")!.textContent = `Your GPA is Calculated to be: ${gpa.toFixed(2)}`;
            document.getElementById("credit_display")!.textContent += `Credits obtained: ${(obtained_creds/10).toFixed(2)}`;
            document.getElementById("result_display")!.classList.remove("hidden");
    }
    (window as any).calculateGPA = calculateGPA;

    function validChecker(grade: string): boolean {
        return VALID_GRADES.includes(grade);
    }
});

