const columns = [
  {
    label: "name",
    dataIndex: "name",
  },
  {
    label: "email",
    dataIndex: "email",
  },
  {
    label: "phone",
    dataIndex: "phone",
  },
  {
    label: "invitation",
    dataIndex: "invitation",
  },
  {
    label: "",
    colspan: 1,
    scopedSlots: {
      customRender: "action",
    },
  },
];
export default columns;
