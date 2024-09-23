export const MENUITEMS = [
  // {
  //   menutitle: "MAIN",
  //   Items: [
  //     {
  //       path: `${import.meta.env.BASE_URL}dashboard`, icon: "fe fe-home", type: "link", active: false, title: "Dashboard",
  //     },
  //   ],
  // },
  // {
  //   // menutitle: "MAIN",
  //   Items: [
  //     {
  //       path: `${import.meta.env.BASE_URL}academics`, icon: "database", type: "link", active: false, title: "Academics",
  //     },
  //   ],
  // },
  {
    menutitle: "Academics",
    Items: [
      {
        title: "Academics",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}academics`, type: "link", title: "Class Management",
          },
          {
            path: `${import.meta.env.BASE_URL}section`, type: "link", title: "Section",
          },
          {
            path: `${import.meta.env.BASE_URL}subjects`, type: "link", title: "Subjects",
          },
          {
            path: `${import.meta.env.BASE_URL}class-teacher`, type: "link", title: "Classs Teacher",
          },

        ],
      },
    ],
  },
  {

    title: "Teachers",
    menutitle: "Elements",
    Items: [
      {
        title: "Teachers",
        icon: "icon icon-graduation",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}teachers`, type: "link", title: "Teachers List",
          },
          {
            path: `${import.meta.env.BASE_URL}add-teacher`, type: "link", title: "Add Teacher",
          },
          {
            path: `${import.meta.env.BASE_URL}assign-teacher`, type: "link", title: "Assign Teacher",
          },
          {
            path: `${import.meta.env.BASE_URL}complaints`, type: "link", title: "Complaints",
          },

        ],
      },
    ],
  },
  {
    menutitle: "Students",
    Items: [
      {
        title: "Students",
        icon: "fe fe-users",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          },
          {
            path: `${import.meta.env.BASE_URL}add-student`, type: "link", title: "Add Student",
          },
          {
            path: `${import.meta.env.BASE_URL}student-report-cards`, type: "link", title: "Report Cards",
          },
          {
            path: `${import.meta.env.BASE_URL}student-promotion`, type: "link", title: "Student Promotion",
          },
          {
            path: `${import.meta.env.BASE_URL}student-attendance`, type: "link", title: "Attendance",
          },
          {
            path: `${import.meta.env.BASE_URL}complaint`, type: "link", title: "Complaint",
          },
        ],
      },
    ],
  },
  // {
  //   title: "Teachers",
  //   menutitle: "Elements",
  //   Items: [
  //     {
  //       title: "Teachers",
  //       icon: "database",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}teachers`, type: "link", title: "Teachers List",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}add-teacher`, type: "link", title: "Add Teacher",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}assign-teacher`, type: "link", title: "Assign Teacher",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}complaints`, type: "link", title: "Complaints",
  //         },

  //       ],
  //     },
  //   ],
  // },
  {
    title: "Syllabus",
    menutitle: "Elements",
    Items: [
      {
        title: "Syllabus",
        icon: "icon icon-graduation",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}academic-syllabus`, type: "link", title: "Academic Syllabus",
          },
          {
            path: `${import.meta.env.BASE_URL}academic-schedule`, type: "link", title: "Create Syllabus",
          },
        ],
      },
    ],
  },
  {
    title: "Exams",
    Items: [
      {
        title: "Exams",
        icon: "icon icon-book-open",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-exam`, type: "link", title: "Create Exam",
          },
          {
            path: `${import.meta.env.BASE_URL}exam-schedule`, type: "link", title: "Exam Schedule",
          },
          {
            path: `${import.meta.env.BASE_URL}previous-exam`, type: "link", title: "Previous Exams",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Attendance",
    Items: [
      {
        title: "Attendance",
        icon: "fe fe-users",
        type: "sub",
        active: false,
        children: [
          // {
          //   path: `${import.meta.env.BASE_URL}students-list`, type: "link", title: "Students List",
          // },
        ],
      },
    ],
  },
  {
    menutitle: "Finance",
    Items: [
      {
        title: "Finance",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}collected-fees`, type: "link", title: "Collected Fees",
          },
          {
            path: `${import.meta.env.BASE_URL}pending-fees`, type: "link", title: "Pending Fees",
          },
          {
            path: `${import.meta.env.BASE_URL}school-expenses`, type: "link", title: "School Expenses",
          },
          {
            path: `${import.meta.env.BASE_URL}payroll`, type: "link", title: "Payroll",
          },
          {
            path: `${import.meta.env.BASE_URL}fees-structure`, type: "link", title: "Fees Structure",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Hostel",
    Items: [
      {
        title: "Hostel",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}room-list`, type: "link", title: "Room List",
          },
          {
            path: `${import.meta.env.BASE_URL}mess`, type: "link", title: "Mess",
          },
          {
            path: `${import.meta.env.BASE_URL}visitors`, type: "link", title: "Visitors",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Roles & Access",
    Items: [
      {
        title: "Roles & Access",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-role`, type: "link", title: "Create Role",
          },
          {
            path: `${import.meta.env.BASE_URL}create-user`, type: "link", title: "Create User",
          },
          {
            path: `${import.meta.env.BASE_URL}assign-user`, type: "link", title: "Assign User",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Download Center",
    Items: [
      {
        title: "Download Center",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}download-date`, type: "link", title: "Download Data",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Create Clubs",
    Items: [
      {
        title: "Create Clubs",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-clubs`, type: "link", title: "Create Clubs",
          },
          {
            path: `${import.meta.env.BASE_URL}manage-clubs`, type: "link", title: "Manage Clubs",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Reports",
    Items: [
      {
        title: "Reports",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}download-reports`, type: "link", title: "Download Reports",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Announcement",
    Items: [
      {
        title: "Announcement",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-announcement`, type: "link", title: "Create Announcement",
          },
          {
            path: `${import.meta.env.BASE_URL}view-announcement`, type: "link", title: "View Announcement",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Library",
    Items: [
      {
        title: "Library",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}book-list`, type: "link", title: "Book List",
          },
          {
            path: `${import.meta.env.BASE_URL}create-book`, type: "link", title: "Create Book",
          },
          {
            path: `${import.meta.env.BASE_URL}assign-book`, type: "link", title: "Assign Book",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Alumini",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}alumini`, icon: "fe fe-truck", type: "link", active: false, title: "Alumini",
      },
    ],
  },
  {
    menutitle: "Transport",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-truck", type: "link", active: false, title: "Transport",
      },
    ],
  },
  {
    menutitle: "Notice",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "icon icon-speech", type: "link", active: false, title: "Notice",
      },
    ],
  },
  {
    menutitle: "Calendar",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-calendar", type: "link", active: false, title: "Calendar",
      },
    ],
  },
  {
    menutitle: "Library",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}#`, icon: "fe fe-book-open", type: "link", active: false, title: "Library",
      },
    ],
  },
  {
    menutitle: "Message",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}message`, icon: "icon icon-speech", type: "link", active: false, title: "Message",
      },
    ],
  },
  {
    menutitle: "Discussion",
    Items: [
      {
        title: "Discussion",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}manage-group`, type: "link", title: "Manage Group",
          },
          {
            path: `${import.meta.env.BASE_URL}create-group`, type: "link", title: "Create Group",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Time Table",
    Items: [
      {
        title: "Time Table",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}create-time-table`, type: "link", title: "Create Time Table",
          },
          {
            path: `${import.meta.env.BASE_URL}view-time-table`, type: "link", title: "View Time Table",
          },
        ],
      },
    ],
  },
  {
    menutitle: "General Setting",
    Items: [
      {
        title: "General Setting",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}general-setting`, type: "link", title: "General Setting",
          },
          {
            path: `${import.meta.env.BASE_URL}profile-setting`, type: "link", title: "Profile Setting",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Manage Leaves",
    Items: [
      {
        title: "Manage Leaves",
        icon: "fe fe-dollar-sign",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}manage-application`, type: "link", title: "Manage Application",
          },
        ],
      },
    ],
  },
];
