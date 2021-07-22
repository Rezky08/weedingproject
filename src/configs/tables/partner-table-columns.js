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
    label: "type",
    dataIndex: "type",
  },
  {
    label: "ref",
    dataIndex: "ref",
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
