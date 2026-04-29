import { LightningElement, wire } from 'lwc';

import getStudentCount from '@salesforce/apex/DashboardController.getStudentCount';
import getSubjectCount from '@salesforce/apex/DashboardController.getSubjectCount';
import getEnrollmentCount from '@salesforce/apex/DashboardController.getEnrollmentCount';
import getMarksCount from '@salesforce/apex/DashboardController.getMarksCount';
import searchStudents from '@salesforce/apex/DashboardController.searchStudents';

export default class StudentList extends LightningElement {

    studentCount;
    subjectCount;
    enrollmentCount;
    marksCount;
    students = [];

    @wire(getStudentCount)
    wiredStudents({data}) {
        if(data) this.studentCount = data;
    }

    @wire(getSubjectCount)
    wiredSubjects({data}) {
        if(data) this.subjectCount = data;
    }

    @wire(getEnrollmentCount)
    wiredEnrollments({data}) {
        if(data) this.enrollmentCount = data;
    }

    @wire(getMarksCount)
    wiredMarks({data}) {
        if(data) this.marksCount = data;
    }

    handleSearch(event) {

        let keyword = event.target.value;

        searchStudents({ keyword: keyword })
        .then(result => {
            this.students = result;
        });
    }
}