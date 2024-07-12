import React from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../Context/Auth';

const Home = () => {
  const[auth,setAuth]=useAuth();
  return (
  <Layout title={"Best Offers"}>
  <h1>HomePage</h1>
  <pre>{JSON.stringify(auth,null,4)}</pre>
  </Layout>
  )
};

export default Home;