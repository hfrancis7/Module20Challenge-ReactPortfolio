import React from 'react'
import "../../styles/Portfolio.css"

export default function Portfolio() {
  return (
    <>
    <h1>Portfolio</h1>
    <figure class="container">
      <img src="./images/recibeet.jpg" alt="ReciBEET" class="image"></img>
      <div class="middle">
        <a class="text" href="https://recibeet-2.herokuapp.com/">ReciBEET</a>
      </div>
    </figure>

    <figure class="container">
      <img src="./images/BeatsEats.png" alt="Beats And Eats" class="image"></img>
      <div class="middle">
        <a class="text" href="https://shobannah.github.io/BeatsAndEats/">Beats & Eats</a>
      </div>
    </figure>

    <figure class="container">
      <img src="./images/TechBlog.jpg" alt="Tech Blog" class="image"></img>
      <div class="middle">
        <a class="text" href="https://haileyf-techblog-app.herokuapp.com/">Tech Blog</a>
      </div>
    </figure>

    <figure class="container">
      <img src="./images/WeatherDashboard.jpg" alt="Weather Dashboard" class="image"></img>
      <div class="middle">
        <a class="text" href="https://hfrancis7.github.io/Module6-WeatherDashboard/">Weather Dashboard</a>
      </div>
    </figure>

    <figure class="container">
      <img src="./images/CodingQuiz.jpg" alt="Coding Quiz" class="image"></img>
      <div class="middle">
        <a class="text" href="https://hfrancis7.github.io/Module4Challenge-CodingQuiz/">Coding Quiz</a>
      </div>
    </figure>

    </>
  )
}
