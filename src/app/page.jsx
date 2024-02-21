import { authOption } from '@/libs/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOption)
  console.log(session)
  return (
    <div>
      <h1>
        {session?.user?.name}
        {session?.user?.email}
        {session?.user?.image}
      </h1>
    </div>
  )
}
