
# Student Management System using Salesforce CRM

---

# 📌 Project Overview

The **Student Management System** is a Salesforce-based CRM application developed to manage academic operations such as:

* Student Records
* Subject Management
* Faculty & Department Details
* Student Enrollments
* Marks Management
* Automatic Grade Calculation
* Dashboard Analytics

This project combines **Salesforce declarative tools** and **programmatic development** using Apex, Visualforce, and Lightning Web Components (LWC).

---

# 🚀 Features

## Core Modules

✅ Student Management
✅ Subject Management
✅ Faculty Management
✅ Department Management
✅ Enrollment Tracking
✅ Marks Entry System

## Automation

✅ Automatic Grade Calculation
✅ Enrollment Status Update
✅ Validation Rules
✅ Formula Fields
✅ Roll-Up Summaries

## UI Development

✅ Visualforce Pages
✅ Lightning Web Components
✅ Premium Dashboard
✅ Search Functionality
✅ Navigation Buttons

---

# 🛠 Technologies Used

| Technology     | Usage                   |
| -------------- | ----------------------- |
| Salesforce CRM | Platform                |
| Apex           | Backend Logic           |
| SOQL           | Data Queries            |
| Triggers       | Automation              |
| Visualforce    | Classic UI Pages        |
| LWC            | Modern UI Components    |
| VS Code        | Development Environment |
| Salesforce CLI | Deployment              |

---

# 📂 Project Structure

```text id="u3k8qa"
force-app/
 └── main/default/
      ├── classes/
      ├── triggers/
      ├── lwc/
      │    └── studentList/
      ├── pages/
      ├── objects/
      └── layouts/
```

---

# 📌 Custom Objects

| Object Name   | Purpose                       |
| ------------- | ----------------------------- |
| Student__c    | Student details               |
| Subject__c    | Subject records               |
| Enrollment__c | Student subject registrations |
| Marks__c      | Internal & External marks     |
| Faculty__c    | Faculty details               |
| Department__c | Department records            |

---

# 🔗 Relationships

* Student → Department (Lookup)
* Subject → Department (Lookup)
* Subject → Faculty (Lookup)
* Enrollment → Student (Lookup)
* Enrollment → Subject (Lookup)
* Marks → Enrollment (Master-Detail)

---

# ⚙️ VS Code Setup Guide

# 1️⃣ Install Required Software

Download and install:

### VS Code

https://code.visualstudio.com/

### Node.js

https://nodejs.org/

### Salesforce CLI

https://developer.salesforce.com/tools/salesforcecli

---

# 2️⃣ Install Extensions in VS Code

Install these extensions:

* Salesforce Extension Pack
* Prettier
* ESLint

---

# 3️⃣ Create Salesforce Project

Open terminal:

```bash id="r5n2pk"
sf project generate --name student-app
cd student-app
```

---

# 4️⃣ Authorize Org

```bash id="k8m7tw"
sf org login web --alias myorg
```

---

# 5️⃣ Open Project in VS Code

```bash id="m4p9la"
code .
```

---

# 6️⃣ Retrieve Existing Org Metadata

```bash id="x2q6vd"
sf project retrieve start --target-org myorg
```

---

# 7️⃣ Deploy Changes

```bash id="j9n3tc"
sf project deploy start --target-org myorg
```

---

# 8️⃣ Open Org

```bash id="g7r8pk"
sf org open --target-org myorg
```

---

# 💻 Important Components Created

## Apex Classes

* DashboardController
* StudentService
* StudentVFController

## Apex Trigger

* Marks Trigger

## LWC Component

* studentList

## Visualforce Pages

* StudentStandardPage
* StudentCustomPage

---

# ⚡ Trigger Logic

When marks are inserted or updated:

* Total Marks calculated
* Grade calculated
* Enrollment status updated

Example:

```text id="c5v2ra"
80+ = A
60+ = B
40+ = C
Below 40 = F
```

---

# 📊 Dashboard Features

* Live Record Counts
* Search Students
* Premium UI
* Attendance Indicators
* Quick Navigation

---

# ▶️ How to Run Project

1. Open Salesforce Org
2. Open Student Management App
3. Use navigation tabs
4. Open Dashboard tab
5. Search student records
6. Test marks automation

---

# 🧪 Sample Test Scenario

1. Open Marks Record
2. Enter:

```text id="d8m1qa"
Internal = 30
External = 20
```

3. Save

Expected:

```text id="z3p7tw"
Total = 50
Grade = C
Status = Active
```

---

# 📌 Learning Outcomes

This project demonstrates:

* Salesforce Data Modeling
* Apex Development
* Trigger Automation
* LWC UI Development
* CRM App Design

---

# 📈 Current Status

| Module           | Status |
| ---------------- | ------ |
| Objects          | ✅      |
| Relationships    | ✅      |
| Validation Rules | ✅      |
| Apex             | ✅      |
| Triggers         | ✅      |
| Visualforce      | ✅      |
| LWC Dashboard    | ✅      |
| VS Code Setup    | ✅      |

---

# 👨‍💻 Author

Developed by: **Mannaswini P A**

---

# 📌 Future Enhancements

* Reports & Charts
* Email Notifications
* Attendance Automation
* Mobile Responsive UI

---

# ⭐ Final Note

This project is a complete Student Management CRM solution built using Salesforce declarative + programmatic tools.

---
