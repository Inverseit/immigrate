import React, { useEffect } from "react";

const Schedule = ({ scores, lastUpdated }: any) => {
  useEffect(() => {
    console.log(scores);
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
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    Projected Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((student: any) => (
                  <tr
                    key={student.name}
                    className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <a href={student.link}>{student.name}</a>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
