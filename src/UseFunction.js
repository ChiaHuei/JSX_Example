import React from "react";

const user = {
  firstName: "Harper",
  lastName: "Perez",
  testName: "123"
};

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

// const formatName = (user) => user.firstName + " " + user.testName
// const formatName = function (user) {return user.testName + " " + user.lastName}

const UseFunction = () => {
  const element = <p className="text">Hello, {formatName(user)}!</p>;
  return element;
};

export default UseFunction;
