import React, { useEffect } from "react";

const Schedule = ({ scores, lastUpdated }: any) => {
  useEffect(() => {
    console.log("Hello to the console. If you are the first person seeing this, then you deserve a bonus point. Email your CA! xD");
  }, []);

  return (
    <>
    <p>Last updated: {lastUpdated}.</p>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold  px-6 py-4 text-left"
                  >
                    Projected Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((student: any) => (
                  <tr
                    key={student.name}
                    className="border-b transition duration-300 ease-in-out table-row-custom"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      <a href={student.link}>{student.name}</a>
                    </td>
                    <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      {student.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
