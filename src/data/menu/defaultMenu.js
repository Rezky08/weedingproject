const menu = [
  {
    key: "customer",
    to: {
      name: "customer",
    },
    children: [],
  },
  {
    key: "partner",
    children: [],
  },
  {
    key: "invitation",
    children: [],
  },
  {
    key: "order",
    children: [
      {
        key: "payment",
        children: [],
      },
      {
        key: "list",
        children: [],
      },
    ],
  },
];
export default menu;
