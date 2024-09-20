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
import AddStaff from '../components/pages/hr/AddStaff';
import StaffAttendance from '../components/pages/hr/staff-attendance/StaffAttendance';
import PayrollDetails from '../components/pages/hr/payroll-details/PayrollDetails';
import BankDetails from '../components/pages/hr/bank-details/BankDetails';
import DocumentInfo from '../components/pages/hr/document-info/DocumentInfo';
import StaffFeedback from '../components/pages/hr/staff-feedback/StaffFeedback';
import PerformanceTracking from '../components/pages/hr/performance-tracking/PerformanceTracking';
import Appointments from '../components/pages/hr/appointments/Appointments';
import MangeInquiry from '../components/pages/hr/mange-inquiry/MangeInquiry';
import Events from '../components/pages/events/Events';
import AddVehicle from '../components/pages/transport/AddVehicle';
import AddRoute from '../components/pages/transport/add-route/AddRoute';
import AssignPassenger from '../components/pages/transport/assign-passenger/AssignPassenger';
import ItemCategory from '../components/pages/inventory/ItemCategory';
import ItemList from '../components/pages/inventory/item-list/ItemList';
import ItemStore from '../components/pages/inventory/item-store/ItemStore';
import Supplier from '../components/pages/inventory/supplier/Supplier';
import ItemPayment from '../components/pages/inventory/item-payment/ItemPayment';
import ItemPurchaseList from '../components/pages/inventory/item-purchase-list/ItemPurchaseList';
import ItemSell from '../components/pages/inventory/item-sell/ItemSell';
import AddBehavior from '../components/pages/behavior/AddBehavior';
import BehaviorList from '../components/pages/behavior/BehaviorList';
import StudentBehaviorReport from '../components/pages/behavior/StudentBehaviorReport';
import Students from '../components/pages/resports/Students';
import TeacherReports from '../components/pages/resports/Teacher';
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






    // devvrat routes
    { path: `${import.meta.env.BASE_URL}/room-list`, element: <RoomList /> },
    { path: `${import.meta.env.BASE_URL}/room/:id`, element: <HostelStudent /> },
    { path: `${import.meta.env.BASE_URL}/mess`, element: <Mess /> },
    { path: `${import.meta.env.BASE_URL}/visitors`, element: <Visitors /> },
    { path: `${import.meta.env.BASE_URL}/visitors-add`, element: <VisitorAdd /> },
    { path: `${import.meta.env.BASE_URL}/add-staff`, element: <AddStaff /> },
    { path: `${import.meta.env.BASE_URL}/staff-attendance`, element: <StaffAttendance /> },
    { path: `${import.meta.env.BASE_URL}/payroll-details`, element: <PayrollDetails /> },
    { path: `${import.meta.env.BASE_URL}/bank-details`, element: <BankDetails /> },
    { path: `${import.meta.env.BASE_URL}/documents-info`, element: <DocumentInfo /> },
    { path: `${import.meta.env.BASE_URL}/staff-feedback`, element: <StaffFeedback /> },
    { path: `${import.meta.env.BASE_URL}/performance-tracking`, element: <PerformanceTracking /> },
    { path: `${import.meta.env.BASE_URL}/appointments`, element: <Appointments /> },
    { path: `${import.meta.env.BASE_URL}/mange-inquiry`, element: <MangeInquiry /> },
    { path: `${import.meta.env.BASE_URL}/events`, element: <Events /> },
    { path: `${import.meta.env.BASE_URL}/add-vehicle`, element: <AddVehicle /> },
    { path: `${import.meta.env.BASE_URL}/add-route`, element: <AddRoute /> },
    { path: `${import.meta.env.BASE_URL}/assign-passenger`, element: <AssignPassenger /> },
    { path: `${import.meta.env.BASE_URL}/item-category`, element: <ItemCategory /> },
    { path: `${import.meta.env.BASE_URL}/item-list`, element: <ItemList /> },
    { path: `${import.meta.env.BASE_URL}/item-store`, element: <ItemStore /> },
    { path: `${import.meta.env.BASE_URL}/supplier`, element: <Supplier /> },
    { path: `${import.meta.env.BASE_URL}/item-payment`, element: <ItemPayment /> },
    { path: `${import.meta.env.BASE_URL}/item-purchase-list`, element: <ItemPurchaseList /> },
    { path: `${import.meta.env.BASE_URL}/item-sell`, element: <ItemSell /> },
    { path: `${import.meta.env.BASE_URL}/add-behavior`, element: <AddBehavior /> },
    { path: `${import.meta.env.BASE_URL}/behavior-list`, element: <BehaviorList /> },
    { path: `${import.meta.env.BASE_URL}/student-behavior-report`, element: <StudentBehaviorReport /> },
    { path: `${import.meta.env.BASE_URL}/student-report`, element: <Students /> },
    { path: `${import.meta.env.BASE_URL}/teacher-report`, element: <TeacherReports /> },

];