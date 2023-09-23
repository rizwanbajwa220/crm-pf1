export const SideBarItems = {
  items: [
    {
      title: "User Managment",
      icon: "mdi-account-settings",
      attrs: {
        to: "/user-management",
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
        title: "Department",
        icon: "mdi-office-building",
        attrs: {
          to: "/department",
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
      title: "Tasks",
      icon: "mdi-format-list-bulleted",
      attrs: {
        to: "/task",
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
      title: "Teams",
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
  ],
};
