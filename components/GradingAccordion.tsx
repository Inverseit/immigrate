import React, { useState } from "react";
import { deadlines } from "../public/configuration";

type AccordionProps = { title: string; deadline: string; content: JSX.Element };

const Accordion = ({ title, content, deadline }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item rounded-lg  border border-gray-200">
      <div
        className="accordion-title accordion-button relative flex items-center w-full py-4 px-5 text-base text-left border-0 rounded-none transition focus:outline-none collapsed"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <span>
            <strong>{title}</strong> (by {deadline})
          </span>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content py-4 px-5">{content}</div>}
    </div>
  );
};

type Props = {};

const accordionData: AccordionProps[] = [
  {
    title: "Stage 0",
    deadline: deadlines["0"],
    content: (
      <>
        <p>
          <strong>DEADLINE:</strong> {deadlines["0"]} (Saturday) at 11:59PM.
        </p>
        <ul>
          <li>
            <strong>First Page</strong> (1 point): Upload your first webpage.
            This can be something as simple as a &quot;hello world&quot;, or you
            can migrate a page you already have/own, or use one of the templates
            as the base for your future page. Check{" "}
            <a href="/resources/useful/">this page</a> for useful links.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Stage 1",
    deadline: deadlines["1"],
    content: (
      <>
        <p>
          <strong>DEADLINE:</strong> {deadlines["1"]} (Saturday) at 11:59PM.
        </p>
        <ul>
          <li>
            <p>
              <strong>GitHub</strong> (1 point): Create a{" "}
              <a target="_blank" rel="noreferrer" href="https://github.com/">
                GitHub
              </a>{" "}
              account and attach your account&#x27;s link to your website.
            </p>
          </li>
          <li>
            <p>
              <strong>Leetcode</strong> (1 point): Create an account on{" "}
              <a target="_blank" rel="noreferrer" href="https://leetcode.com/">
                LeetCode
              </a>{" "}
              and attach your account&#x27;s link to your website.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Stage 2",
    deadline: deadlines["2"],
    content: (
      <>
        <p>
          <strong>DEADLINE:</strong> {deadlines["2"]} (Saturday) at 11:59PM.
        </p>
        <ul>
          <li>
            <p>
              <strong>Google Calendar</strong> (1 point): Create an online
              calendar on Google calendar that contains your lectures/locations
              and timing, along with the due date for every assignment and exam
              for all your courses. You can either post/share this online, or
              share it with the CA on his gmail account.
            </p>
          </li>
          <li>
            <p>
              <strong>Resume</strong> (1 point): Upload your one page Resume on
              your website. Visiting the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://scotty.qatar.cmu.edu/career-development-office/"
              >
                Office of Professional Development
              </a>{" "}
              for help on how to build a resume gives you 1{" "}
              <strong>extra</strong> point.
              To make an appointment, use {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cmu.joinhandshake.com/appointments"
              >
                Appointments | Handshake (joinhandshake.com)
              </a>.
              <br />
              You are strongly recommended to use one of the{" "}
              <a href="/resources/templates">templates</a> page.
            </p>
          </li>
          <li>
            <p>
              <strong>LinkedIn</strong> (1 point): Create a{" "}
              <a href="https://linkedin.com">LinkedIn</a> account and attach
              your account&#x27;s link to your website.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Stage 3",
    deadline: deadlines["3"],
    content: (
      <>
        <p>
          <strong>DEADLINE:</strong> {deadlines["3"]} (Saturday) at 11:59PM.
        </p>
        <ul>
          <li>
            <p>
              <strong>Coding Challenges</strong> (2 points): Complete 2 coding
              challenges given in this <a href="/resources/coding">page</a>,
              along with any third one (outside this list) of your choice, and
              upload all their respective codes to your GitHub account (make it
              public).
            </p>
          </li>
          <li>
            <p>
              <strong>Course Plan</strong> (1 point): Make a course plan using
              this <a href="/cs_plan_2022.ppt">template</a>. This plan will keep
              changing during your time at CMU, but you need to start with a
              tentative one. Upload a screenshot of your course plan on the
              website.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Research Updates (6 points)",
    deadline: "Every Tuesday",
    content: (
      <>
        <p>
          <strong>DEADLINE:</strong> Every Tuesday at 11:59PM.
        </p>
        <p>
          You will need to lightly research the CS topic/area that is being
          presented that week by a faculty member. You should upload your short
          research update on your webpage in a different directory with only a
          link to all your summaries on your main page. Your research updates
          must be of the following format:
        </p>
        <ul>
          <li>
            Answer all the questions that will be made available to you with
            references. Be careful not to plagiarize (copy and paste!) anything
            you find. You need to write your answers in your own words. Any
            plagiarism that is caught will be punished with at least a loss of
            two points with a high possibility of more serious consequences.
          </li>
          <li>
            At least <strong>3</strong> links to websites, online articles or
            tutorials that one could go to for more information on the topic you
            researched.
          </li>
        </ul>
      </>
    ),
  },
];

const GradingAccordion = (props: Props) => {
  return (
    <div className="accordion rounded-lg">
      {accordionData.map(({ title, content, deadline }) => (
        <Accordion
          key={title}
          title={title}
          content={content}
          deadline={deadline}
        />
      ))}
    </div>
  );
};

export default GradingAccordion;
