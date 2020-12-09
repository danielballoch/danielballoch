import React from "react"
import TransitionLink from 'gatsby-plugin-transition-link'
import styled from '@emotion/styled';

//Nav
const NavOverlay = styled.div`
position: fixed;
display: flex;
left: 0;
top: 0;
transform: rotate(90deg);
opacity: .4;
margin-top: calc(100px + 7%);
div{
    transform: rotate(180deg);
    margin: 0 10px;
  
    text-decoration: none;
    
}
a{
    transform: rotate(180deg);
    margin: 0 10px;
    transition: .3s;
    text-decoration: none;
}
@media (max-width:1100px){
    transform: rotate(-180deg);
    margin-top: 10px;
    z-index: 1000;
}
`
const NavLink = styled(TransitionLink)`
color: black;
border-bottom: white 2px solid;
:hover{
        border-bottom: black 2px solid;
        cursor: pointer;
    }
`

export default function Nav(){
    return (
    <NavOverlay>
                <NavLink to="/" 
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Home
                </NavLink>
                -
                <NavLink to="/"
                exit={{length: .5, state: {pass: true}}}
                entry={{length: .3, delay: .5, state: {pass: false}}}
                >
                    Contact
                </NavLink>
    </NavOverlay>
    )
}