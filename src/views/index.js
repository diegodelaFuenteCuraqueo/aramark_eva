import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./login"
import Home from "./home"
import Course from "./course"
import VideoPlayer from "./videoplayer"
import Quiz from "./quiz"
import Certificate from "./certificate"
import NavigationBar from "../components/NavegationBar"

export default function Views() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </Router>
  )
}