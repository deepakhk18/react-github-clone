import React, {useState} from 'react'
import useFetchJobs from './usefetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './jobsPagination';
import Searchform from './Searchform';

function App() {
  const [params,setParams] =useState({})
  const [page,setPage] =useState(2)
 const {jobs,loading,error} =useFetchJobs()

 function handelParamChange(e)
 {
   const param =e.target.name
   const value =e.target.value
   setPage(1)
   setParams(prevParams=>{
     return{...prevParams,[param]:value}
   })
 }

  return (
    <Container className="my-4">
      <h1 className="md-4">Github Jobs</h1>
      <Searchform params={params}onParamChange={handelParamChange}/>
      <JobsPagination page={page} setPage={setPage}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Eror..try Refershing</h1>}
      {jobs.map(job=>{
        return <Job key={job.id} job={job}/>
      })}
       <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
    </Container>

  )
}

export default App;