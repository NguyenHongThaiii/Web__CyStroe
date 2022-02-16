const todoList = [
  {
    name: "thai",
    age: 18,
  },
  {
    name: "dung",
    age: 108,
  },
];

const newTodoList = [...todoList];
const a = newTodoList[1];
const newTodo = {
  ...a,
  b: 1,
};
console.log(newTodo);
console.log(newTodoList);
