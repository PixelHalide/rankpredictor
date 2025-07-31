'use client';

import { useState } from 'react';
import SemButton from '../../components/gpaCalculator/SemButton';
import SemPicker from '../../components/gpaCalculator/SemPicker';
import CycleSelect from '../../components/gpaCalculator/CycleSelect';
import StreamSelect from '../../components/gpaCalculator/StreamSelect';
import CourseList from '../../components/gpaCalculator/CourseList';
import HonorsCheck from '../../components/gpaCalculator/HonorsCheck';
import GpaTable from '../../components/gpaCalculator/GpaTable';
import GradingInfoDropdown from '../../components/gpaCalculator/GradingInfoDropdown';

const GpaCalc = () => {

	const [semester, set_semester] = useState<number | null>();
	const [course, set_course] = useState<string | null>();
	const [cycle, set_cycle] = useState<number | null>();
	const [stream, set_stream] = useState<string | null>();
	const [honors, set_honors] = useState<boolean>(false);

	const [semester_dropdown_open, set_semester_dropdown_open] = useState(false);
	const [cycle_section_open, set_cycle_section_open] = useState(false);
	const [stream_section_open, set_stream_section_open] = useState(false);
	const [course_section_open, set_course_section_open] = useState(false);
	const [table_section_open, set_table_section_open] = useState(false);
	const [honors_section_open, set_honors_section_open] = useState(false);

	const semName = () => {
		let subjectGroup: string;
		if (semester === 1 || semester === 2) {
			const streamPrefix = stream === "CS" ? "CS" : "NONCS";
			const cyclePrefix = cycle === 0 ? "PHY" : "CHM";
			subjectGroup = `${semester}-${streamPrefix}-${cyclePrefix}`;
		} else {
			subjectGroup = `${semester}-${course}`;
		}
		return subjectGroup;
	}

	const semClick = () => {
		if (semester_dropdown_open) {
			set_semester_dropdown_open(false);
			set_cycle_section_open(false);
			set_course_section_open(false);
			set_stream_section_open(false);
			set_table_section_open(false);
			set_honors_section_open(false);
		} else {
			set_semester_dropdown_open(true);
		}
	}

	const sendSemester = (sem:number) => {
		const isFirstYear = sem === 1 || sem === 2;
		set_cycle_section_open(isFirstYear);
		if (isFirstYear && sem != semester) set_stream_section_open(false); // Reprompt user for stream if they change semester
		set_course_section_open(!isFirstYear);
		set_honors_section_open(sem === 8)
		set_table_section_open(false);
		set_semester(sem);
	};

	const sendCycle = (cycle:number) => {
		set_cycle(cycle);
		set_stream_section_open(true);
	}

	const sendCourse = (course:string) => {
		set_course(course);
		set_table_section_open(true);
	}
	const sendStream = (stream:string) => {
		set_stream(stream);
		set_table_section_open(true);
	}
    const handleHonorsChange = (checked: boolean) => {
        set_honors(checked);
        console.log('Honors selected:', checked);
    }

  return (
    <div className='flex flex-col items-center'>
      <GradingInfoDropdown />
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-xl w-full text-center">
		<label className="block mb-2">Select your Semester:</label>
		<SemButton isOpen={semester_dropdown_open} onClick={semClick} />
		<SemPicker isOpen={semester_dropdown_open}
		sendSemester={sendSemester}
		/>
		<CycleSelect isOpen={cycle_section_open}
		sendCycle={sendCycle}/>

		<StreamSelect isOpen={stream_section_open}
		sendStream={sendStream} />

		<CourseList isOpen={course_section_open}
		sendCourse={sendCourse}
		/>
        <HonorsCheck
            isOpen={honors_section_open}
            honors={honors}
            onHonorsChange={handleHonorsChange}
        />
		<GpaTable
			isOpen={table_section_open}
			honors={honors}
			subjectGroup={semName()}
		/>
      </div>
    </div>
  )
}
export default GpaCalc
