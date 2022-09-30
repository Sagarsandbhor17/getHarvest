import React, { useState } from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
} from './NavbarElements';
import "../styles/Navbar.css"
import {Text,Image,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {NavModal } from './NavModal';

export const logoStyle={display: "inline-block",width:"40px",margin:"auto",marginRight:"0"}

export const navData=[{to:"/Why-Harvest",title:"Why Harvest?"},{to:"/Features",title:"Features"},
{to:"/Customers",title:"Customers"},{to:"/Integrations",title:"Integrations"},
{to:"/Pricing",title:"Pricing"}]
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
const [show,setShow]=useState(false)
return (
	<>
	<Nav className={colorChange ? 'colorChange' : 'navbar'}>
		<Bars onClick={()=>setShow(!show)}/>
    {show&&<NavModal show={show} setShow={setShow}/>}
		<NavMenu>
      <Link to="/">
        <div style={{display:"flex"}}>
        <Image style={logoStyle} src="https://logosandtypes.com/wp-content/uploads/2022/03/harvest.svg" alt="harvest-logo"/>
        <Text color="orangered" fontWeight="bold" fontSize="3xl">  
        harvest
          </Text></div>
        </Link>
      <div className='vl'></div>
	{navData.map((n,i)=><NavLink key={i} to={n.to} >
   <Text fontWeight="medium">{n.title}</Text>
    </NavLink>)}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavLink to='/signin' >
      <Text fontWeight="medium">Sign in</Text>
      </NavLink>
		</NavBtn>
    <NavBtn>
  <Button background='#FA5D00' colorScheme="none" width="100%">
    <Link to="/signup"><Text fontWeight="bold">Try Harvest Free</Text></Link>
  </Button>
  </NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
