import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import React from "react"
import useAuth from "@/hooks/useAuth"
import UserProfile from "./UserProfile"
const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const { logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/beranda'>
              <TitleLogo title='MBC' caption='Coins' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/beranda' className={activeLink == "/beranda" ? "activeLink" : "none"}>
              Beranda
            </Link>
            <Link href='/tentang' className={activeLink == "/tentang" ? "activeLink" : "none"}>
              Tentang
            </Link> 
            <Link href='/tim' className={activeLink == "/tim" ? "activeLink" : "none"}>
              Tim
            </Link>
            <Link href='/analisis' className={activeLink == "/analisis" ? "activeLink" : "none"}>
              Analisis
            </Link>
            <Link href='/kontak' className={activeLink == "/kontak" ? "activeLink" : "none"}>
              Kontak
            </Link>

         
            
           
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
          <UserProfile/>
        </div>
      </header>
    </>
  )
}

export default Header
