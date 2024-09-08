'use client'

import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/navigation'

const AuthRoute = ({ children }) => {
  const router = useRouter()
  const { auth, loading } = useAuth()

  // Avoid redirect inside render, use useEffect
  useEffect(() => {
    if (!loading && !auth) {
      // Redirect to login if not authenticated
      router.push('/login')
    }
  }, [auth, loading, router])

  // Show loader while authentication status is being determined
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-[60vh]'>
        <p>Loading...</p>
      </div>
    )
  }

  // If authenticated, render the children (protected component)
  if (auth) {
    return <>{children}</>
  }

  // Optionally render null if redirect is in process (to avoid flashing the content)
  return null
}

export default AuthRoute
