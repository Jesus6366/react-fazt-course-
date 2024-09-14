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
        Get Data
      </button>
    </>
  );
};

export default Posts;
