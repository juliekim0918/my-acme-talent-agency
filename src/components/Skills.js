import React from "react";
import SkillRows from "./SkillRows";
import SkillSlideover from "./SkillSlideover";

const Skills = () => {
  return (
    <div className="flex flex-col my-10 gap-10">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Skill
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
              >
                Artist Count
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <SkillRows />
        </table>
      </div>
      <SkillSlideover />
    </div>
  );
};

export default Skills;
