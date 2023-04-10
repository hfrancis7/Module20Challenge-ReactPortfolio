import React from 'react'
import "../../styles/Portfolio.css"

export default function Portfolio() {
  return (
    <>
    <h1>Portfolio</h1>

    <div class="portfolio-flex-wrap">

        <figure class="container">
          <img src="./images/recibeet.jpg" alt="ReciBEET" class="image"></img>
          <div class="middle">
            <div class="text">
              <a class="text" href="https://recibeet-2.herokuapp.com/" target="_blank" rel="noreferrer">ReciBEET</a>
              <a href="https://github.com/torresorona/ReciBEET" target="_blank" rel="noreferrer">
                <img src="./images/github-mark-white.png" alt="github logo" class="github-icon"></img>
              </a>
              </div> 
          </div>
        </figure>

        <figure class="container">
          <img src="./images/BeatsEats.png" alt="Beats And Eats" class="image"></img>
          <div class="middle">
            <div class="text">
              <a class="text" href="https://shobannah.github.io/BeatsAndEats/" target="_blank" rel="noreferrer">Beats & Eats</a>
              <a href="https://github.com/shobannah/BeatsAndEats" target="_blank" rel="noreferrer">
                <img src="./images/github-mark-white.png" alt="github logo" class="github-icon"></img>
              </a>
              </div> 
          </div>
        </figure>

        <figure class="container">
          <img src="./images/TechBlog.jpg" alt="Tech Blog" class="image"></img>
          <div class="middle">
            <div class="text">
              <a class="text" href="https://haileyf-techblog-app.herokuapp.com/" target="_blank" rel="noreferrer">Tech Blog</a>
              <a href="https://github.com/hfrancis7/Module14Challenge-TechBlog" target="_blank" rel="noreferrer">
                <img src="./images/github-mark-white.png" alt="github logo" class="github-icon"></img>
              </a>
              </div> 
          </div>
        </figure>

        <figure class="container">
          <img src="./images/WeatherDashboard.jpg" alt="Weather Dashboard" class="image"></img>
          <div class="middle">
            <div class="text">
              <a class="text" href="https://hfrancis7.github.io/Module6-WeatherDashboard/" target="_blank" rel="noreferrer">Weather Dashboard</a>
              <a href="https://github.com/hfrancis7/Module6-WeatherDashboard" target="_blank" rel="noreferrer">
                <img src="./images/github-mark-white.png" alt="github logo" class="github-icon"></img>
              </a>
              </div> 
          </div>
        </figure>

        <figure class="container">
          <img src="./images/CodingQuiz.jpg" alt="Coding Quiz" class="image"></img>
          <div class="middle">
            <div class="text">
              <a class="text" href="https://hfrancis7.github.io/Module4Challenge-CodingQuiz/" target="_blank" rel="noreferrer">Coding Quiz</a>
              <a href="https://github.com/hfrancis7/Module4Challenge-CodingQuiz" target="_blank" rel="noreferrer">
                <img src="./images/github-mark-white.png" alt="github logo" class="github-icon"></img>
              </a>
              </div> 
          </div>
        </figure>

    </div>

    </>
  )
}
