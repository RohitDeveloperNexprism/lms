export function generateStudentDetailsPage(id) {
    return `/student-details/${id}`;
}
export function generateEditStudentDetailsPage(id) {
    return `/edit-student-details/${id}`;
}
export function generateHostelStudentDetailsPage(id) {
    return `/room/${id}`;
}
export function getVisitorRoutePage() {
    return `/visitors/`;
}
export function getVisitorAddRoutePage() {
    return `/visitors-add/`;
}