import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';
export default function Home() {
  const [post,setPosts]=useState([]);
  const {search}=useLocation();

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts"+search)
      console.log(res)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
      <>
    <Header/>
    <div className='home'>
        <Posts posts={post}/>
        <Sidebar/>      
    </div>
    </>
  )
}
