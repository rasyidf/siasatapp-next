import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactEventHandler } from 'react'
import { NormalHeader } from '../components/organisms'
import {MainLayout} from '../components/templates'
const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
        
      <NormalHeader HeaderText="Home"/> 
      
    </>
  )
}

Home.getLayout = function getLayout(page:any, isOpen:boolean, onToggle:ReactEventHandler) {
  return (
    <MainLayout isOpen={isOpen} onToggle={onToggle}> 
      {page}
    </MainLayout>
  )
}

export default Home
