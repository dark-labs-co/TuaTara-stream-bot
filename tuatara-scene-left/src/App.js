import React, { lazy, Suspense } from 'react'
import Segments from './components/segments/segments'
import DataLink from './segment0.json'
console.log(DataLink.segment)

export default function App() {
  return (
    <Segments />
  )
}
