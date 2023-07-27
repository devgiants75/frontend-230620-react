import React from 'react'
import UserForm from './views/UserForm'
import UserList from './views/UserList'

export default function index() {
  return (
    <div>
        <UserList />
        <UserForm />
    </div>
  )
}
