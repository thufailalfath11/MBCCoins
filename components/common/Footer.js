import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsLine } from "react-icons/bs"
import { AiFillAlert, AiFillGithub, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
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
              <button className='button-primary'>Permintaan Untuk Kutipan </button>
            </div>
            <ul>
              <h3>Perusahaan   </h3>
              <li>
                <Link href='/'>Beranda</Link>
              </li>
              <li>
                <Link href='/about'>Tentang</Link>
              </li>
              <li>
                <Link href='/team'>Tim</Link>
              </li>
              <li>
                <Link href='/analysis'>Analisis</Link>
              </li>
              <li>
                <Link href='/contact'>Kontak</Link>
              </li>
              <li>
                <Link href='/'>Keluar   </Link>
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
