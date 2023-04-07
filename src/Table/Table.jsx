import React from "react";
import { ProTable } from "@ant-design/pro-components";
const Table = () => {
  const columns = [
    {
      dataIndex: "index",
      valueType: "indexBorder",
      width: 48,
    },
    {
      title: "Title",
      dataIndex: "title",
      ellipsis: true,
      tip: "Title of the task to be done",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "enter title",
          },
        ],
      },
    },

    {
      title: "Description",
      dataIndex: "description",
      ellipsis: true,
      tip: " Description of the task to be done.",
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      valueType: "date",
      hideInTable: true,
      ellipsis: true,
      tip: "Expected due date to finish the task",
    },
    {
      title: "Timestamp",
      dataIndex: "created_at_time",
      valueType: "time",
      ellipsis: true,
    },
    {
      disable: true,
      title: "STATUS",
      dataIndex: "status",
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: "select",
      valueEnum: {
        open: {
          text: "Error",
          status: "Error",
        },
        closed: {
          text: "Success",
          status: "Success",
          disabled: true,
        },
        processing: {
          text: "DOING",
          status: "Processing",
        },
      },
    },
  ];

  const data = [
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
    {
      title: "Task 1",
      description: "complete the task",
      due_date: "08/04/23",
      tag: "red",
      status: "In Progress",
    },
  ];

  return (
    <div>
      <ProTable
        columns={columns}
        dataSource={data}
        cardBordered
        rowKey="key"
        search={{
          labelWidth: "auto",
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="Simple Table"
      />
    </div>
  );
};

export default Table;
