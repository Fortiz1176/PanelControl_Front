import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useUsersDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.list);

  const user = users.find((user) => user.login.uuid === id);

  if(!user){
    return <p>Usuario no encontrado</p>;
  }

  return {
    state: {
        users, user, navigate
    }
  }
}

export default useUsersDetails
