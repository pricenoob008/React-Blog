import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats]=useState([])
  const [users,setUsers]=useState([]);
  const {user}=useContext(Context);
  console.log(user)

  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
    const getUsers=async()=>{
      const res=await axios.get("/users/all/user")
      setUsers(res.data);
      console.log(users)
    }
    getUsers();
  },[])
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>AUTHORS</span>
            <ul className='sidebarList'>
            {users.map((u)=>(
              <Link className='link' to={`/?user=${u.username}`}><li className='sidebarListItem'>{u.username}</li></Link>
            ))}
               
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
            {cats.map((p)=>(
              <Link className='link' to={`/?cat=${p.name}`}><li className='sidebarListItem'>{p.name} </li></Link>
            ))}
               
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                FOLLOW US
            </span>
            <div className='sidebarSocial'>
                <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
                <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
                <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
