import { VscBug, VscGlobe } from "react-icons/vsc";

const Posts = () => {
  return (
    <>
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json().then((data) => console.log(data)))
            .catch((error) => console.error(error));
        }}
      >
        <VscBug />
        Get Data
        <VscGlobe />
      </button>
    </>
  );
};

export default Posts;
