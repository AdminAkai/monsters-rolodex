import { useState, useEffect } from 'react'

export function useFetchData(fetchURL) {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(fetchURL)
    .then(response => response.json())
    .then(users => setData(users))
    .catch(err => setError(err.message))
  }, [fetchURL])


  return { data, error }
}