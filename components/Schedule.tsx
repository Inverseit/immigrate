import React from "react";
import schedule from "../public/schedule.json";

const getTopic = ({
  topic,
  breakDay,
  presentation,
  first,
  second,
  mixed,
  links,
}: any) => {
  if (topic) {
    if (links && links.length > 0) {
      return (
        <>
          <p>{topic + " "}</p>
          {links.map((link: any) => {
            if (link.display) {
              return <a key={link.link} target="_blank" href={link.link}>[{link.title}]</a>;
            }
          })}
        </>
      );
    }
    return topic;
  }
  if (breakDay) return "Break, No lecture";
  if (mixed) {
    return (
      <>
        {first.topic}
        <br />
        <strong>Student presentation 1: </strong>
        <span>{second.topic}</span>
        {second.students.length > 0 && (<><br /><span className="text-xs">{second.students.join(", ")}</span><br /></>)}
      </>
    );
  }
  if (presentation) {
    return (
      <>
        <strong>Student presentation 1: </strong>
        <span>{first.topic}</span>
        <br />
        {first.students.length > 0 && (<><span className="text-xs">{first.students.join(", ")}</span><br /></>)}
        <strong>Student presentation 2: </strong>
        <span >{second.topic}</span>
        {second.students.length > 0 && (<><br /><span className="text-xs">{second.students.join(", ")}</span><br /></>)}
      </>
    );
  }
};

const Schedule = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-min max-w-xs sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-min max-w-xs">
              <thead className="border-b">
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="text-sm font-bold  px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold  px-6 py-4 text-left"
                  >
                    Day
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold  px-6 py-4 text-left"
                  >
                    Topic
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((event) => (
                  <tr
                    key={event.date}
                    className={
                      (event.breakDay
                        ? "schedule-bg-green-400"
                        : "table-row-custom") +
                      " border-b transition duration-300 ease-in-out"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {event.day}
                    </td>
                    <td className="text-sm break-normal  font-light px-6 py-4 whitespace-nowrap">
                      {getTopic(event)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
