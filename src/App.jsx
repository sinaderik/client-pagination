import React, { useEffect, useState } from 'react'
import { usePaginatedFetch } from './hooks/usePaginatedFetch'
import Card from './components/Card/Card'

const url = "https://react-mini-projects-api.classbon.com/Programmer/programmers"
export default function App() {

  const [data, loading] = usePaginatedFetch(url, 3)
  const [currentPage, setCurrentPage] = useState(1)
  const [programmers, setProgrammers] = useState([])

  useEffect(() => {
    if (loading) return
    setProgrammers(data[currentPage - 1])
  }, [loading])



  return (
    <div className='container pt-5'>
      {loading && (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border text-info'></div>
        </div>
      )}

      {!loading && (
        <div className='row d-flex justify-content-center'>
          {programmers.map(({id,...programmer})=>{
            return(
              <div className='col-3' key={id}>
                <Card {...programmer}/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
