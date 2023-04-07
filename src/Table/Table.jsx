import React from "react";
import { useState } from "react";
import { EditableProTable, ProFormRadio } from "@ant-design/pro-components";
const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const defaultData = [
  {
    id: 624748504,
    title: "Task 1",
    description: "description 1",
    state: "open",
    timestamp: "1590486176000",
    update_at: "1590486176000",
  },
  {
    id: 624691229,
    title: "Task 2",
    description: "description 2",
    state: "closed",
    created_at: "1590481162000",
    due_date: "08/04/23",
  },
];
const Table = () => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [position, setPosition] = useState("bottom");
  const timestamp = Date.now();
  const id = React.key;
  const columns = [
    {
      title: "Tasks",
      dataIndex: "title",
      tooltip: "task to be completed",
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 1
              ? [{ required: true, message: "This is required" }]
              : [],
        };
      },
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: "15%",
    },
    {
      title: "status",
      key: "state",
      dataIndex: "state",
      valueType: "select",
      valueEnum: {
        all: { text: "all", status: "open" },
        open: {
          text: "incomplete",
          status: "Error",
        },
        closed: {
          text: "completed",
          status: "Success",
        },
      },
    },
    {
      title: "description",
      dataIndex: "description",
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || "", "title"]) === "不好玩") {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: "due_date",
      dataIndex: "due_date",
      valueType: "date",
    },
    {
      title: "created_at",
      dataIndex: "timestamp",
      valueType: { timestamp },
    },
    {
      title: "option",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          href="#"
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          edit
        </a>,
        <a
          href="#"
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          delete
        </a>,
      ],
    },
  ];

  return (
    <div>
      <EditableProTable
        headerTitle="to do List"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== "hidden"
            ? {
                position: "top",
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "hide",
                value: "hidden",
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: "multiple",
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
    </div>
  );
};

export default Table;
