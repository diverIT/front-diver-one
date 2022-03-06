import React, { useEffect } from 'react'
import Aside from '../../components/asidePrincipal/Aside'
import Services from '../../services/Services'

export default function userLogged(){
  let body = {
      password: "1234567"
  }

  useEffect(() => {
    async function getData(){
      const res = await Services.logoutAll()
      console.log(res)
    }
    getData()
  
  }, [])
  

  return (
    <>
      <Aside />
    </>
  )

}

