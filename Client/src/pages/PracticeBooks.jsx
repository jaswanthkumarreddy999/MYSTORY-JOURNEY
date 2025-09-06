// pages/PracticeBooks.jsx
import React from "react";
import BookCards from "../components/BookCards";
import ProblemsPool from "../components/ProblemsPool";
const PracticeBooks = () => {
  return (
    <div className="px-8">
      <BookCards />
      <ProblemsPool />
    </div>
  );
};

export default PracticeBooks;
