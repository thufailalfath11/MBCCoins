import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='MBC' caption='Coins' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
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
            
            <button className='button-primary'>Keluar</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
