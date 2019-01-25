import Mock from "mockjs";
import List from "./list";

Mock.mock('/api/posts', (req, res) => {
  return {
    data: ['a','b']
  }
})