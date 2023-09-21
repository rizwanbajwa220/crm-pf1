export const navbarItems = [
  {
    title: "User Managment",
    icon: "mdi-account-group",
      attrs: {
        to: "/user-managment",
        "active-class": "primary--text list-item-active",
      },
    userPermissions: [
      "can-access-all-users",
      "can-view-members",
      "can-create-members",
      "can-view-specific-member",
      "can-update-member",
      "can-delete-member",
    ],
  },
  {
    title: "Task Managment",
    icon: "mdi-format-list-bulleted",
    attrs: {
      to: "/task-managment",
      "active-class": "primary--text list-item-active",
    },
    userPermissions: [
      "can-create-task",
      "can-view-task",
      "can-delete-task",
      "can-update-task",
      "can-reassign-task",
    ],
  },
  {
    title: "Department Managment",
    icon: "mdi-office-building",
    attrs: {
      to: "/department-managment",
      "active-class": "primary--text list-item-active",
    },
    userPermissions: [
      "can-add-department",
      "can-update-department",
      "can-delete-department",
      "can-view-department",
    ],
  },
  {
    title: "Teams Managment",
    icon: "mdi-account-multiple",
    // attrs: {
    //   to: "/teams-managment",
    //   "active-class": "primary--text list-item-active",
    // },
    userPermissions: [
      "can-view-team",
      "can-create-team",
      "can-update-team",
      "can-view-specific-team",
      "can-delete-team",
    ],
  },
];
