import React from "react";
import NavigationBar from "./Navigation";
import "../styles/Navigation.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <NavigationBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
