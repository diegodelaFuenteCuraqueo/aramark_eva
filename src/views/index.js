import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./login"
import Home from "./home"
import Course from "./course"
import Class from "./class"
import Quiz from "./quiz"
import Certificate from "./certificate"
import NavigationBar from "../components/NavegationBar"
import Assistant from "../components/Assistant/AssistantComponent"
import ScrollToTop from "../components/ScrollToTop"
import Register from "./register"

export default function Views() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/class" element={<Class />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Assistant />
    </Router>
  )
}