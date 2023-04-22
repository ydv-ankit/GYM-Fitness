import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from './../assets/images/Logo.png'
const Navbar = () => {
  const scroll = () =>{
    window.scrollTo({top:'1100'})
  }

  return (
    <Stack
      direction='row'
      justifyContent="space-around"
      sx={{gap:{sm: '122px', xs:'20px'}, mt:{sm: '32px', xs:'20px'}, justifyContent:'none'}}
      px='20px'
    >
      <Link>
      <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack
        direction='row'
        gap="30px"
        fontSize="18px"
        alignItems="flex-end"
      >
        <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <span style={{textDecoration:'none', color: '#3A1212'}} style={{cursor:'pointer'}} onClick={scroll}>Exercises</span>
      </Stack>
    </Stack>
  )
}

export default Navbar