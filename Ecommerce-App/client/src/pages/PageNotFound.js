import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout title={"PageNotFound"}>
    <div className="pnf">
    <h1 className="pnf-title">404 </h1>
    <h2 className="pnf-heading">Oops! page not found </h2>
    <Link to="/" className="pnf-btn">GO Back</Link>
    </div>
    </Layout>
    
  )
}

export default PageNotFound