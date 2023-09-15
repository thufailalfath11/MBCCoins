import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsLine } from "react-icons/bs"
import { AiFillAlert, AiFillGithub, AiFillInstagram } from "react-icons/ai"
import useAuth from "@/hooks/useAuth"
const Footer = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      
      setLogoutMessage('Selamat Berjumpa Kembali!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='MBC' caption='Coins' className='logobg' />
              <br />
              <span>
              Pertanyaan? Hubungi kami <br />  Senin – Jumat mulai jam 9 pagi hingga 6 sore
              </span>
              <br />
              <br />
              <h3>Line @sok8073r</h3>
              <br />
            </div>
            <ul>
              <h3>Perusahaan   </h3>
              <li>
                <Link href='/beranda'>Beranda</Link>
              </li>
              <li>
                <Link href='/tentang'>Tentang</Link>
              </li>
              <li>
                <Link href='/tim'>Tim</Link>
              </li>
              <li>
                <Link href='/analisis'>Analisis</Link>
              </li>
              <li>
                <Link href='/kontak'>Kontak</Link>
              </li>
              <li>
                <Link onClick={handleLogout} href="#">Keluar   </Link>
              </li>
            </ul>
            <ul>
              <h3>Hubungi Kami  </h3>
              <div className='connect'>
                <li>
                  <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=sok8073r'>
                    <BsLine size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://github.com/thufailalfath11/MBCcoins_Website.git'>
                    <AiFillGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/mbclab/?hl=id'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillAlert size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 MBCcoins. SELURUH HAK CIPTA.</span>
            </div>
            <div className='connect'>
              <span>PERUSAHAAN MBCcoins</span>
              <span> &nbsp; | &nbsp; </span>
              <span>SYARAT & KETENTUAN</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
