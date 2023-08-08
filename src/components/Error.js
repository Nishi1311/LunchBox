import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <div>
        <h1>Ooops , Something weng Wrong !!</h1>
        <h3>Status: {err.status} page {err.statusText}</h3>
        <h3>Page {err.statusText}</h3>
    </div>
  )
}

export default Error