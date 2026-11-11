function CategorySelector({ categories, selectedCategory, onChange }) {
  return (
    <label>
      Kategorie:
      <select
        value={selectedCategory}
        onChange={(event) => onChange(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  )
}

export default CategorySelector