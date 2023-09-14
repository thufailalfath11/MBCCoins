import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='KONTAK' /> <br />
            <br />
            <TitleLogo caption="Mari mulai bersama kami sekarang!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='Detail Kontak'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Hubungi Kami: Senin -  Jum'at 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Bandung Indonesia</h3>
                  <span>Telkom University, TULT, Lantai 13.04, MBC Laboratorium</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@dream-theme.com</h3>
                  <span>Hubungi kami kapan saja!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@dream-theme.com</h3>
                  <span>
                    Karier di MBCcoins</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Buat pertanyaan dalam versi online' />
              <p className='desc-p'>Ada pertanyaan? Ide ide? Isi formulir di bawah ini untuk mendapatkan proposal kami.</p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Nama</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Anggaran kamu</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>jangka waktu</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>BERITAHU KAMI SEDIKIT TENTANG PROYEK ANDA*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
