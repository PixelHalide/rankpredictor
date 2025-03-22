import subDat from "./src/subjects.json";
const subjectData = subDat;
document.addEventListener('DOMContentLoaded', function () {
    let semester_isOpen = false;
    let cycle_isOpen = false;
    let stream_isOpen = false;
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownArrow = document.getElementById("dropdown-arrow");
    const semesterDiv = document.getElementById("semester");
    var selectedSemester;
    dropdownButton.onclick = function () {
        if (!semester_isOpen) {
            dropdownArrow.classList.add("rotate-180");
            semesterDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
            semesterDiv.classList.add("max-h-96", "opacity-100", "mt-2", "mb-5");
            semester_isOpen = true;
        }
        else {
            dropdownArrow.classList.remove("rotate-180");
            semesterDiv.classList.remove("max-h-96", "opacity-100", "mt-2", "mb-5");
            semesterDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
            semester_isOpen = false;
            if (cycle_isOpen) {
                var cycleDiv = document.getElementById("first_year");
                cycleDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycleDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
            }
            if (cycle_isOpen) {
                var streamDiv = document.getElementById("stream");
                streamDiv.classList.remove("max-h-15", "opacity-100", "mt-2", "mb-5");
                streamDiv.classList.add("max-h-0", "opacity-0", "mt-0", "mb-0");
            }
        }
    };
    function get_semester(semester) {
        selectedSemester = semester;
        console.log(selectedSemester);
        switch (selectedSemester) {
            case 1:
                var cycleDiv = document.getElementById("first_year");
                cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
                cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycle_isOpen = true;
                break;
            case 2:
                var cycleDiv = document.getElementById("first_year");
                cycleDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
                cycleDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
                cycle_isOpen = true;
                break;
        }
    }
    window.get_semester = get_semester;
    // 0 - Physics Cycle, 1 - Chem Cycle
    function cycle(cycle) {
        var streamDiv = document.getElementById("stream");
        streamDiv.classList.remove("max-h-0", "opacity-0", "mt-0", "mb-0");
        streamDiv.classList.add("max-h-15", "opacity-100", "mt-2", "mb-5");
        stream_isOpen = true;
        var selectedCycle = cycle;
        console.log(`Selected cycle: ${selectedCycle === 0 ? 'Physics' : 'Chemistry'}`);
        document.getElementById("cs").onclick = function () {
            selectStream("CS", selectedCycle);
        };
        document.getElementById("noncs").onclick = function () {
            selectStream("Non-CS", selectedCycle);
        };
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
        else if (selectedSemester && selectedSemester >= 3 && selectedSemester <= 8) {
        }
    }
    function loadSubjects(subjectGroup) {
        console.log(`Loading subject group: ${subjectGroup}`);
    }
    window.selectStream = selectStream;
});
