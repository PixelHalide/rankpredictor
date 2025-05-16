// @ts-ignore
import subjectData from "./src/subjects.js";
document.addEventListener('DOMContentLoaded', function () {
    let semester_isOpen = false;
    let cycle_isOpen = false;
    let stream_isOpen = false;
    let table_isOpen = false;
    let course_isOpen = false;
    var honors = false;
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownArrow = document.getElementById("dropdown-arrow");
    const semesterDiv = document.getElementById("semester");
    const sub_table = document.getElementById("table");
    const sub_table_nested = document.getElementById("nested_table");
    const submit_button = document.getElementById("submit_button");
    var selectedSemester;
    var subjectCount;
    document.getElementById("default-checkbox").onclick = function () {
        if (honors) {
            honors = false;
            closeTable();
        }
        else {
            honors = true;
            closeTable();
        }
    };
    function closeHonors() {
        let honorsDiv = document.getElementById("honors");
        honorsDiv.classList.remove("opacity-100", "mb-2");
        honorsDiv.classList.add("opacity-0", "pointer-events-none");
    }
    function closeCycle() {
        if (cycle_isOpen) {
            let cycleDiv = document.getElementById("first_year");
            cycleDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
            cycleDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            cycle_isOpen = false;
        }
    }
    function closeStream() {
        if (stream_isOpen) {
            let streamDiv = document.getElementById("stream");
            streamDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
            streamDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            stream_isOpen = false;
        }
    }
    function closeCourse() {
        if (course_isOpen) {
            let courseDiv = document.getElementById("course");
            courseDiv.classList.remove("max-h-80", "opacity-100", "mt-2");
            courseDiv.classList.add("max-h-0", "opacity-0", "mt-0", "pointer-events-none");
            course_isOpen = false;
            closeHonors();
        }
    }
    function closeTable() {
        if (table_isOpen) {
            sub_table.classList.remove("opacity-100", "mb-5");
            sub_table.classList.add("opacity-0", "pointer-events-none");
            sub_table_nested.classList.remove("opacity-100");
            sub_table_nested.classList.add("opacity-0", "pointer-events-none");
            document.getElementById("subject_table").innerHTML = "";
            submit_button.classList.remove("opacity-100");
            submit_button.classList.add("opacity-0", "pointer-events-none");
            document.getElementById("result_display").classList.add("hidden");
            table_isOpen = false;
        }
    }
    function closeAllSections() {
        closeCycle();
        closeStream();
        closeCourse();
        closeTable();
    }
    dropdownButton.onclick = function () {
        if (!semester_isOpen) {
            dropdownArrow.classList.add("rotate-180");
            semesterDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            semesterDiv.classList.add("max-h-96", "opacity-100", "mt-2", "mb-5");
            semester_isOpen = true;
        }
        else {
            dropdownArrow.classList.remove("rotate-180");
            semesterDiv.classList.remove("max-h-96", "opacity-100", "mt-2", "mb-5");
            semesterDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            semester_isOpen = false;
            // Close all other sections
            closeAllSections();
        }
    };
    function get_semester(semester) {
        selectedSemester = semester;
        if (selectedSemester === 1 || selectedSemester === 2) {
            closeCourse();
            closeTable();
            let cycleDiv = document.getElementById("first_year");
            cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
            cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
            cycle_isOpen = true;
        }
        else if (selectedSemester === 8) {
            closeCycle();
            closeStream();
            closeTable();
            let honorsDiv = document.getElementById("honors");
            honorsDiv.classList.remove("opacity-0", "pointer-events-none");
            honorsDiv.classList.add("opacity-100", "mb-2");
            let courseDiv = document.getElementById("course");
            courseDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "pointer-events-none");
            courseDiv.classList.add("max-h-80", "opacity-100", "mt-2");
            course_isOpen = true;
        }
        else {
            closeCycle();
            closeStream();
            closeTable();
            closeHonors();
            let courseDiv = document.getElementById("course");
            courseDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "pointer-events-none");
            courseDiv.classList.add("max-h-80", "opacity-100", "mt-2");
            course_isOpen = true;
        }
    }
    window.get_semester = get_semester;
    // 0 - Physics Cycle, 1 - Chem Cycle
    function cycle(cycle) {
        var streamDiv = document.getElementById("stream");
        stream_isOpen = true;
        streamDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0", "pointer-events-none");
        streamDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
        var selectedCycle = cycle;
        console.log(`Selected cycle: ${selectedCycle === 0 ? 'Physics' : 'Chemistry'}`);
        document.getElementById("cs").onclick = function () {
            selectStream("CS", selectedCycle);
        };
        document.getElementById("noncs").onclick = function () {
            selectStream("Non-CS", selectedCycle);
        };
        if (table_isOpen) {
            closeTable();
        }
    }
    window.cycle = cycle;
    function selectStream(stream, cycleType) {
        console.log(`Selected: ${cycleType === 0 ? 'Physics' : 'Chemistry'} Cycle, ${stream} Stream`);
        if (selectedSemester === 1 || selectedSemester === 2) {
            const streamPrefix = stream === "CS" ? "CS" : "NONCS";
            const cyclePrefix = cycleType === 0 ? "PHY" : "CHM";
            const subjectGroup = `${selectedSemester}-${streamPrefix}-${cyclePrefix}`;
            loadSubjects(subjectGroup);
        }
    }
    function loadCourses(course) {
        let subjectGroup = `${selectedSemester}-${course}`;
        loadSubjects(subjectGroup);
    }
    window.loadCourses = loadCourses;
    function loadSubjects(subjectGroup) {
        console.log(`Loading subject group: ${subjectGroup}`);
        // @ts-ignore
        let subjects = subjectData[subjectGroup];
        let returnHTML = "";
        let i = 0;
        let alternate = "bg-zinc-900";
        for (const [subjectName, creditValue] of Object.entries(subjects)) {
            if (i % 2 === 0)
                alternate = "";
            if (!honors && subjectName.includes("Honors"))
                continue;
            returnHTML += `
            <tr class="${alternate}">
                    <td>${subjectName}</td>
                    <td id="credits-${i}">${creditValue}</td>
                    <td>
                        <select name="Grades" id="Grades-${i}">
                            <option value=0 disabled selected>Grade</option>
                            <option value=10>A+</option>
                            <option value=9>A</option>
                            <option value=8>B</option>
                            <option value=7>C</option>
                            <option value=6>D</option>
                            <option value=5>E</option>
                            <option value=0>F</option>
                        </select>
                    </td>
                </tr>`;
            i++;
            if (alternate === "")
                alternate = "bg-zinc-900";
        }
        subjectCount = i;
        table_isOpen = true;
        document.getElementById("subject_table").innerHTML = returnHTML;
        let sub_table = document.getElementById("table");
        let sub_table_nested = document.getElementById("nested_table");
        let submit_button = document.getElementById("submit_button");
        sub_table.classList.remove("opacity-0", "pointer-events-none");
        sub_table.classList.add("opacity-100", "mb-5");
        sub_table_nested.classList.remove("opacity-0", "pointer-events-none");
        sub_table_nested.classList.add("opacity-100");
        submit_button.classList.remove("opacity-0", "pointer-events-none");
        submit_button.classList.add("opacity-100");
    }
    window.selectStream = selectStream;
    function calculateGPA() {
        let obtained_creds = 0;
        let total_creds = 0;
        for (let grade = 0; grade < subjectCount; grade++) {
            let sub_creds = parseInt(document.getElementById(`credits-${grade}`).textContent);
            let obtained_grade = parseInt(document.getElementById(`Grades-${grade}`).value);
            total_creds += sub_creds;
            obtained_creds += (sub_creds * obtained_grade);
        }
        let gpa = obtained_creds / total_creds;
        document.getElementById("gpa_display").textContent = `Your GPA is Calculated to be: ${gpa.toFixed(2)}`;
        document.getElementById("result_display").classList.remove("hidden");
    }
    window.calculateGPA = calculateGPA;
});
