import React, { useState } from "react";

const Tasks = () => {
  const images = [
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  ];
  const [index, setIndex] = useState(0);
  const next = () => {
    images.length - 1 > index && setIndex(index + 1);
  };
  const prev = () => {
    0 < index && setIndex(index - 1);
  };
  return (
    <div>
      <button onClick={() => next()}>Next</button>
      <button onClick={() => prev()}>Prev</button>
      <img src={images[index]} alt="image_" />
    </div>
  );
};

export default Tasks;
