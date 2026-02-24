"use client";

import { useState } from "react";
import SemButton from "../../components/gpaCalculator/SemButton";
import SemPicker from "../../components/gpaCalculator/SemPicker";
import CycleSelect from "../../components/gpaCalculator/CycleSelect";
import StreamSelect from "../../components/gpaCalculator/StreamSelect";
import CourseList from "../../components/gpaCalculator/CourseList";
import HonorsCheck from "../../components/gpaCalculator/HonorsCheck";
import GpaTable from "../../components/gpaCalculator/GpaTable";
import GradingInfoDropdown from "../../components/gpaCalculator/GradingInfoDropdown";

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
  };

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
  };

  const sendSemester = (sem: number) => {
    const isFirstYear = sem === 1 || sem === 2;
    set_cycle_section_open(isFirstYear);
    if (isFirstYear && sem !== semester) set_stream_section_open(false);
    set_course_section_open(!isFirstYear);
    set_honors_section_open(sem === 8);
    set_table_section_open(false);
    set_semester(sem);
  };

  const sendCycle = (cycle: number) => {
    set_cycle(cycle);
    set_stream_section_open(true);
  };

  const sendCourse = (course: string) => {
    set_course(course);
    set_table_section_open(true);
  };
  const sendStream = (stream: string) => {
    set_stream(stream);
    set_table_section_open(true);
  };
  const handleHonorsChange = (checked: boolean) => {
    set_honors(checked);
  };

  return (
    <div className="min-h-screen bg-slate-950/90 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="border-4 border-slate-600 bg-slate-950 p-6 sm:p-8 shadow-[8px_8px_0px_#64748b] mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-tighter sm:text-5xl">
            <span className="bg-emerald-400 text-slate-950 px-2 py-1">MIT</span>{" "}
            GPA Calculator
          </h1>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-slate-300">
            Select your semester, stream, and grades to calculate your GPA.
          </p>
        </div>

        <GradingInfoDropdown />

        <div className="border-4 border-emerald-500 bg-slate-950 p-6 md:p-10 shadow-[12px_12px_0px_#059669] w-full mb-12">
          <label className="block mb-4 font-bold uppercase tracking-widest text-lg md:text-xl text-white">
            Select your Semester:
          </label>
          <SemButton isOpen={semester_dropdown_open} onClick={semClick} />
          <SemPicker
            isOpen={semester_dropdown_open}
            sendSemester={sendSemester}
          />
          <CycleSelect isOpen={cycle_section_open} sendCycle={sendCycle} />
          <StreamSelect isOpen={stream_section_open} sendStream={sendStream} />
          <CourseList isOpen={course_section_open} sendCourse={sendCourse} />
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
    </div>
  );
};
export default GpaCalc;
