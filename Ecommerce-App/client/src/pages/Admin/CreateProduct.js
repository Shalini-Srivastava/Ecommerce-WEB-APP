import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../Context/Auth'
import Layout from '../../components/Layout/Layout';


const CreateProduct = () => {
    const [auth]= useAuth();
    return (
      <Layout title={"Dashboard : Create Product"}>
        <div className='container-fluid m-3 p-3'>
      <div className='row'>
      <div className='col-md-3'>
      <AdminMenu/>
      </div>
      <div className='col-md-9'>
        <div className='card w-75 p-3'>
        <h3>CreateProduct</h3>
        </div>
      </div>
      </div>
        </div>
      </Layout>
  )
}

export default CreateProduct