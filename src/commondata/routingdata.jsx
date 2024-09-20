import React, { Fragment, lazy } from 'react'
import Academics from '../components/pages/Academics/Academics';
import Section from '../components/pages/Academics/Section/Section';
import Subjects from '../components/pages/Academics/Subjects/Subjects';
import ClassTeacher from '../components/pages/Academics/ClassTeacher/ClassTeacher';
import StudentsList from '../components/pages/Students/StudentsList';
import StudentDetails from '../components/pages/Students/Student-details/StudentDetails';
import EditStudent from '../components/pages/Students/Student-details/edit-student/EditStudent';
import Teacher from '../components/teachers/Teacher';
import AddTeacher from '../components/teachers/add-teacher/AddTeacher';
import AssignTeacher from '../components/teachers/assign-teacher/AssignTeacher';
import Complaints from '../components/teachers/complaints/Complaints';
import TeacherProfile from '../components/teachers/TeacherProfile';
import AddStudent from '../components/pages/Students/Student-details/add-student/AddStudent';
import ReportCards from '../components/pages/Students/report-cards/ReportCards';
import StudentPromotion from '../components/pages/Students/Student-details/student-promotion/StudentPromotion';
import Attendance from '../components/pages/Students/Student-details/attendance/Attendance';
import Complaint from '../components/pages/Students/complaint/Complaint';
import AcademicSyllabus from '../components/syllabus-section/AcademicSyllabus';
import AcademicSchedule from '../components/syllabus-section/AcademicSchedule';
import CreateExam from '../components/exam/CreateExam';
import ExamSchedule from '../components/exam/ExamSchedule';
import PreviousExam from '../components/exam/PreviousExam';
import RoomList from '../components/pages/hostel/RoomList';
import HostelStudent from '../components/pages/hostel/student/HostelStudent';
import Mess from '../components/pages/hostel/mess/Mess';
import Visitors from '../components/pages/hostel/visitors/Visitors';
import VisitorAdd from '../components/pages/hostel/visitors/VisitorAdd';
import CollectedFees from '../components/finance/colected-fees/ColectedFees';
import PendingFees from '../components/finance/pending-fees/PendingFees';
import SchoolExpenses from '../components/finance/school-expenses/SchoolExpenses';
import PayRoll from '../components/finance/payroll/payRoll';
import StudentFees from '../components/finance/student-fees/StudentFees';
import Alumini from '../components/Alumni/Alumini';
import CreateRole from '../components/roles-access/create-role/CreateRole';
import CreateUser from '../components/roles-access/create-user/CreateUser';
import AssignRole from '../components/roles-access/assign-role/AssignRole';
import DownloadData from '../components/download-center/download-data/DownloadData';
import CreateClubs from '../components/clubs/create-clubs/CreateClubs';
import ManageClubs from '../components/clubs/create-clubs/manage-clubs/ManageClubs';
import DownloadReports from '../components/reports/download-reports/DownloadReports';
import CreateAnnouncement from '../components/announcement/create-announcement/CreateAnnouncement';
import ViewAnnouncement from '../components/announcement/view-announcement/ViewAnnouncement';
import BookList from '../components/library/book-list/BookList';
import CreateBook from '../components/library/create-book/CreateBook';
import AssignBook from '../components/library/assign-book/AssignBook';
import ManageMessage from '../components/message/ManageMessage';
import ManageGroup from '../components/discussion/ManageGroup';
import CreateGroup from '../components/discussion/CreateGroup';
import CreateTimeTable from '../components/time-table/CreateTimeTable';
import ViewTimeTable from '../components/time-table/ViewTimeTable';
import GeneralSetting from '../components/setting/GeneralSetting';
import ProfileSetting from '../components/setting/ProfileSetting';
import ManageLeave from '../components/leave-application/ManageLeave';
const Dashboard = lazy(() => import("../components/dashboard/dashboard"));

export const RouterData = [

    { path: `${import.meta.env.BASE_URL}/dashboard`, element: <Dashboard /> },
    { path: `${import.meta.env.BASE_URL}/academics`, element: <Academics /> },
    { path: `${import.meta.env.BASE_URL}/section`, element: <Section /> },
    { path: `${import.meta.env.BASE_URL}/subjects`, element: <Subjects /> },
    { path: `${import.meta.env.BASE_URL}/class-teacher`, element: <ClassTeacher /> },
    { path: `${import.meta.env.BASE_URL}/students-list`, element: <StudentsList /> },
    { path: `${import.meta.env.BASE_URL}/student-details/:id`, element: <StudentDetails /> },
    { path: `${import.meta.env.BASE_URL}/edit-student-details/:id`, element: <EditStudent /> },
    { path: `${import.meta.env.BASE_URL}/add-student`, element: <AddStudent /> },
    { path: `${import.meta.env.BASE_URL}/student-report-cards`, element: <ReportCards /> },
    { path: `${import.meta.env.BASE_URL}/student-promotion`, element: <StudentPromotion /> },
    { path: `${import.meta.env.BASE_URL}/student-attendance`, element: <Attendance /> },
    { path: `${import.meta.env.BASE_URL}/complaint`, element: <Complaint /> },
    { path: `${import.meta.env.BASE_URL}/teachers`, element: <Teacher /> },
    { path: `${import.meta.env.BASE_URL}/add-teacher`, element: <AddTeacher /> },
    { path: `${import.meta.env.BASE_URL}/assign-teacher`, element: <AssignTeacher /> },
    { path: `${import.meta.env.BASE_URL}/complaints`, element: <Complaints /> },
    { path: `${import.meta.env.BASE_URL}/teacher-profile`, element: <TeacherProfile /> },
    { path: `${import.meta.env.BASE_URL}/academic-syllabus`, element: <AcademicSyllabus /> },
    { path: `${import.meta.env.BASE_URL}/academic-schedule`, element: <AcademicSchedule /> },
    { path: `${import.meta.env.BASE_URL}/create-exam`, element: <CreateExam /> },
    { path: `${import.meta.env.BASE_URL}/exam-schedule`, element: <ExamSchedule /> },
    { path: `${import.meta.env.BASE_URL}/previous-exam`, element: <PreviousExam /> },
    { path: `${import.meta.env.BASE_URL}/collected-fees`, element: <CollectedFees /> },
    { path: `${import.meta.env.BASE_URL}/pending-fees`, element: <PendingFees /> },
    { path: `${import.meta.env.BASE_URL}/school-expenses`, element: <SchoolExpenses /> },
    { path: `${import.meta.env.BASE_URL}/payroll`, element: <PayRoll /> },
    { path: `${import.meta.env.BASE_URL}/fees-structure`, element: <StudentFees /> },
    { path: `${import.meta.env.BASE_URL}/alumini`, element: <Alumini /> },
    { path: `${import.meta.env.BASE_URL}/create-role`, element: <CreateRole /> },
    { path: `${import.meta.env.BASE_URL}/create-user`, element: <CreateUser /> },
    { path: `${import.meta.env.BASE_URL}/assign-user`, element: <AssignRole /> },
    { path: `${import.meta.env.BASE_URL}/download-date`, element: <DownloadData /> },
    { path: `${import.meta.env.BASE_URL}/create-clubs`, element: <CreateClubs /> },
    { path: `${import.meta.env.BASE_URL}/manage-clubs`, element: <ManageClubs /> },
    { path: `${import.meta.env.BASE_URL}/download-reports`, element: <DownloadReports /> },
    { path: `${import.meta.env.BASE_URL}/create-announcement`, element: <CreateAnnouncement /> },
    { path: `${import.meta.env.BASE_URL}/view-announcement`, element: <ViewAnnouncement /> },
    { path: `${import.meta.env.BASE_URL}/book-list`, element: <BookList /> },
    { path: `${import.meta.env.BASE_URL}/create-book`, element: <CreateBook /> },
    { path: `${import.meta.env.BASE_URL}/assign-book`, element: <AssignBook /> },
    { path: `${import.meta.env.BASE_URL}/message`, element: <ManageMessage /> },
    { path: `${import.meta.env.BASE_URL}/manage-group`, element: <ManageGroup /> },
    { path: `${import.meta.env.BASE_URL}/create-group`, element: <CreateGroup /> },
    { path: `${import.meta.env.BASE_URL}/create-time-table`, element: <CreateTimeTable /> },
    { path: `${import.meta.env.BASE_URL}/view-time-table`, element: <ViewTimeTable /> },
    { path: `${import.meta.env.BASE_URL}/general-setting`, element: <GeneralSetting /> },
    { path: `${import.meta.env.BASE_URL}/profile-setting`, element: <ProfileSetting /> },
    { path: `${import.meta.env.BASE_URL}/manage-application`, element: <ManageLeave /> },






    // devvrat routes
    { path: `${import.meta.env.BASE_URL}/room-list`, element: <RoomList /> },
    { path: `${import.meta.env.BASE_URL}/room/:id`, element: <HostelStudent /> },
    { path: `${import.meta.env.BASE_URL}/mess`, element: <Mess /> },
    { path: `${import.meta.env.BASE_URL}/visitors`, element: <Visitors /> },
    { path: `${import.meta.env.BASE_URL}/visitors-add`, element: <VisitorAdd /> },

];