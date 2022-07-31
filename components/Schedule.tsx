import React from "react";
import schedule from "../public/schedule.json";

const getTopic = ({ topic, breakDay, presentation, first, second, mixed }: any) => {
  if (topic) return topic;
  if (breakDay) return "Break, No lecture";
  if (mixed){
    return <>
      {first}
      <br/>
      <strong>Student presentation 1: </strong><span className="text-xs">{second}</span>
    </>
  }
  if (presentation){
    return <>
      <strong>Student presentation 1: </strong><span className="text-xs">{first}</span>
      <br/>
      <strong>Student presentation 2: </strong><span className="text-xs">{second}</span>
    </>
  }
};

const Schedule = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
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
                  <tr key={event.date} className={(event.breakDay ? "schedule-bg-green-400" : "table-row-custom") + " border-b transition duration-300 ease-in-out"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      {event.day}
                    </td>
                    <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
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
