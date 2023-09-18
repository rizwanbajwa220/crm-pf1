# default

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

### Project Req:
Requirements Gathering:

Register/Login as a User.

Let’s say User 1 is Junaid and has permission to view departments of an organisation and there is another user Nouman who has permissions to access Teams.
Note: User1, User2, User3, User4, User5 and User6 are just temporary names. 3
1. User1 is registered and after login he/she can do the following tasks 
“create the task, assign the task, can accept or reject the task, can update the task and can add the comments too”.
2. User2 is registered and after login he/she can do the following tasks 
“can access all users, can update the user’s data and role, can also delete the user’s data”.
3. User3 is registered and after login he/she can do the following tasks 
“can create the department and access the departments”.
4. User4 is registered and after login he/she can do the following tasks 
“can create, add the teams into the department and also update the team”.
5. User5 is registered and after login he/she can do the following tasks 
“can update the roles of other users”.
6. User6 is registered and after login he/she can do the following tasks 
“can add the new users along with their responsibilities”.

Permissions available:
1.     ‘Can access all users’
2.     ‘Can access departments’
3.     ‘Can create department’
4.     ‘Can update department’
5.     ‘Can add team’
6.     ‘Can update the team’
7.     ‘Can assign lead’
8.     ‘Can create task’
9.     ‘Can assign task’
10.  ‘Can accept or reject task’
11.    ‘Can update the task’
12. ‘Can add comments’
13.  ‘Can update all user’s data’
14. ‘Can update the roles of other’
15.  ‘Can delete the user’
16.   ‘Can add new users along with their responsibilities’

Time Estimation & Project Breakdown
Total Hours : 7 hours

Team Member
Task Name
Mehak Abdul Sattar
Teams
Mufeeza Aslam
Tasks
Nauman Mirza
Database Structure, Migrations,
Qursam Hina
Departments 
Junaid Hussnain
Authentication


—---------------------------------------------------------------------------------------------

Code Structure: SOLID PRINCIPLES
Controller:
·        User
·        Department
·        Team
·        Task

Routes:
·        User Registration
·        User Login
·        User logout
·        Delete User
·        Update User
·        Create Department
·        Delete Department
·        Create Team
·        Update Team
·        Delete Team
·        Add Team members
·        Update Team members
·        Delete Team members
·        Assign Team Lead
·        Update Team Lead
·        Assign Task to Team
·        Accept or Reject Tasks
·        Delete Tasks
·        Add Comments
 
Database Structure (Models):
·        User (ID, name, email, password)
·        Department (ID, name)
·        Team (ID, name, Department_ID, TeamLead_ID)
·        TeamMembers (Team_ID, User_ID)
·        Task (ID, Name, User_ID, Status, Comments)


