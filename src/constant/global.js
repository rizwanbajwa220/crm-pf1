export const navbarItems = [
    {
      title: "User Managment",
      icon: "mdi-account-group",
      attrs: {
        to: "/user-managment",
        "active-class": "primary--text list-item-active",
      },
    },
    {
        title: "Task Managment",
        icon: "mdi-format-list-bulleted",
        attrs: {
          to: "/task-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Department Managment",
        icon: "mdi-office-building",
        attrs: {
          to: "/department-managment",
          "active-class": "primary--text list-item-active",
        },
      },
      {
        title: "Teams Managment",
        icon: "mdi-account-multiple",
        attrs: {
          to: "/teams-managment",
          "active-class": "primary--text list-item-active",
        },
      },    
];