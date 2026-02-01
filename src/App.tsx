import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from '../components/Dashboard'
import { PageLayout } from '../components/PageLayout'
import './App.css'

function App() {

  return (
    <Routes>
      {/*Shared Layout wrapper*/ }
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
