import Navbar from "./Navbar.js"

import '../../styles/Header.css';
import { useState } from "react";

export default function Header(currentPage, setCurrentPage) {
  [currentPage, setCurrentPage] = useState('')
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <header class="header-container">
            <h1 class="hailey-title">Hailey D. Francis</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    </>
  )
}
