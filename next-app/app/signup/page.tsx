"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/router"
export default function signup() {
    const router=useRouter()
    const [user, setuser] = React.useState({
        username: "",
        email: "",
        password: ""
    })
    async function onsignup(){
            try{

                router.push("/login")
            }catch(error:any){
                toast.error(error.message)
            }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setuser({ ...user, username: e.target.value })} />
                <hr />
            <label htmlFor="email">email</label>
            <input 
            type="text"
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
            id="email"
            value={user.email}
            onChange={(e)=>setuser({...user,email:e.target.value})}
            />
              <label htmlFor="password">password</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                id='password'
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })} />
            <button
                onClick={onsignup}
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none'>signup</button>
                <Link className='p-1 border border-gray-300 rounded-lg mb-4 focus:outine-none' href="/login">Visit Login Page</Link>
        </div>
    )
}
