export const deadlines = {
  "0": "28th August",
  "1": "4th September",
  "2": "18th September",
  "3": "25th September",
};

export const startTime = "2:30";
export const startTimeLabel = "PM";
export const endTime = "3:45";
export const endTimeLabel = "PM";
export const room = "2152";

export const ca = {
  name: "Ulan Seitkaliyev",
  email: "useitkal@andrew.cmu.edu",
  number: "5553-4637",
  oh: "By Appointment",
};

export type Student = {
  name: string;
  link: string;
};

const studentsUnsorted: Student[] = [
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Abrar Tasneem Abir" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Maimoonah Al-Mashhadani" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Aya Al-Sabahi" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Maryam Aldosari" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Eman Ansar" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Boushra Bendou" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "M Tasnim Bin Akbar" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Tra Bui" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Matthew Correa" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Hajer Dahmani" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Sarim Faraz" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Abdelrahman Gadelmoula" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Andrey Genze" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Lolwa Ibrahim" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Adithya Jaganathan" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Daanish Khan" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Iman Ouzzani" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Md Azmai Adib Pahlowan" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Talhah Peerbhai" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Hanna Qasim" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Fatima Yousaf" },
  { link: "http://www.qatar.cmu.edu/~aabir/", name: "Sara Zewil" },
];

export const students: Student[] = studentsUnsorted.sort();
