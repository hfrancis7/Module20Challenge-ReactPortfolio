import React, {useState} from "react";

// Header (contains navbar)
// Body (contains the different parts of the portfolio to go through)
// Footer (contains the linkedIn, github, etc. logos)
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer";

import './styles/reset.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');
  return (
    //fragment
  <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <Body/>
    <Footer />
  </>
  );
}

export default App;
