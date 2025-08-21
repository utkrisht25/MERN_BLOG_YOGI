// contexts/CategoryContext.jsx
import { createContext, useContext, useState } from 'react'

const CategoryContext = createContext()

export const useCategoryRefresh = () => {
  const context = useContext(CategoryContext)
  if (!context) {
    throw new Error('useCategoryRefresh must be used within CategoryProvider')
  }
  return context
}

export const CategoryProvider = ({ children }) => {
  const [refreshData, setRefreshData] = useState(false)

  const triggerRefresh = () => {
    setRefreshData(prev => !prev)
  }

  return (
    <CategoryContext.Provider value={{ refreshData, triggerRefresh }}>
      {children}
    </CategoryContext.Provider>
  )
}
