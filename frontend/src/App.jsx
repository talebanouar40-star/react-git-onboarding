import { useState } from 'react'
import './App.css'
import CategorySelector from './components/CategorySelector'
import { categories } from './data/categories'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <main>
      <h1>Kategorie auswählen</h1>

      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <p>Ausgewählte Kategorie:</p>
      <strong>{selectedCategory}</strong>
    </main>
  )
}

export default App