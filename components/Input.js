import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import StoreProvider from "../utils/store-provider";
import styles from "./Input.module.css";
import { Button, Checkbox, Input, Modal, Tabs } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const TodoStore = StoreProvider.getStore("TodoStore");

const InputTodos = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalInput, setModalInput] = useState(null);
  const [tabsKey, setTabsKey] = useState(2);

  const showModal = (title) => {
    setIsModalVisible(true);
    setModalTitle(title);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    TodoStore.editTodo(modalTitle, modalInput);
    setModalInput("");
  };

  const { TabPane } = Tabs;

  function callback(key) {
    setTabsKey(key);
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="TODOS" key="1"></TabPane>
        <TabPane tab="DONE" key="2"></TabPane>
        <TabPane tab="TO DO" key="3"></TabPane>
      </Tabs>
      <Modal
        title="Edit"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => {
          setIsModalVisible(false);

          setModalInput("");
        }}
      >
        <Input
          value={modalInput}
          onChange={(e) => setModalInput(e.target.value)}
        />
      </Modal>

      <div className={styles.input}>
        <Input
          placeholder="Add Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className={styles.input}
          onClick={() => {
            TodoStore.addTodo({ title: inputValue, isChecked: false });
            setInputValue("");
          }}
          disabled={!inputValue}
        >
          ADD
        </Button>
      </div>

      {tabsKey === "1"
        ? TodoStore.todos?.map((item, index) => {
            return (
              <div className={styles.row}>
                <Checkbox
                  checked={item.isChecked}
                  className={styles.checkbox}
                  onChange={(e) => TodoStore.checkTodo(item.title)}
                ></Checkbox>

                <div className={styles.list}> {item.title}</div>
                <Button
                  className={styles.buttonEdit}
                  onClick={() => showModal(item.title)}
                >
                  <EditOutlined />
                </Button>
                <Button
                  className={styles.buttonDelete}
                  onClick={() => TodoStore.removeAdd(item.title)}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            );
          })
        : tabsKey === "2"
        ? TodoStore.todos?.map((item, index) => {
            return (
              item.isChecked && (
                <div className={styles.row}>
                  <Checkbox
                    checked={item.isChecked}
                    className={styles.checkbox}
                    onChange={(e) => TodoStore.checkTodo(item.title)}
                  ></Checkbox>

                  <div className={styles.list}> {item.title}</div>
                  <Button
                    className={styles.buttonEdit}
                    onClick={() => showModal(item.title)}
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    className={styles.buttonDelete}
                    onClick={() => TodoStore.removeAdd(item.title)}
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              )
            );
          })
        : TodoStore.todos?.map((item, index) => {
            return (
              !item.isChecked && (
                <div className={styles.row}>
                  <Checkbox
                    checked={item.isChecked}
                    className={styles.checkbox}
                    onChange={(e) => TodoStore.checkTodo(item.title)}
                  ></Checkbox>

                  <div className={styles.list}> {item.title}</div>
                  <Button
                    className={styles.buttonEdit}
                    onClick={() => showModal(item.title)}
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    className={styles.buttonDelete}
                    onClick={() => TodoStore.removeAdd(item.title)}
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              )
            );
          })}
    </div>
  );
};

export default observer(InputTodos);
