import vdo1 from '../../assets/video/montage footage CF.mp4'
import './style.css'
import { FaWhatsapp } from "react-icons/fa";

const openWhatsApp = () => {
  window.open(
    "https://wa.me/8801764308876",
    "_blank",
    "noopener,noreferrer"
  );
};

const Banner = () => {
  return (
    <div
      id="banner-page"
      className="relative h-screen overflow-hidden font-silverblack"
    >

      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={vdo1}
        autoPlay
        loop
        muted
        playsInline
      />

      <div>
        {/* LEFT TEXT + WHATSAPP */}
        <div
          id="banner-text"
          className="
    absolute uppercase font-font2
    flex flex-col-reverse md:flex-row
    items-center gap-5
    left-1/2 md:left-5/8
    bottom-50 md:bottom-30
    transform -translate-x-1/2 md:translate-x-0
    text-xl
  "
        >
          <div id='banner-whatapp-icon' className="relative">
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70"></div>

            <div
              onClick={openWhatsApp}
              className="
                relative bg-red-600 text-white cursor-pointer shadow-xl
                p-3 sm:p-4 text-2xl sm:text-3xl
                rounded-full hover:scale-110 transition-transform
              "
            >
              <FaWhatsapp />
            </div>
          </div>

          <div id='banner-text-effect' className='overflow-hidden'>
            <h1
              className="
                text-red-500 font-KronaOne
                text-lg sm:text-xl md:text-2xl lg:text-2xl
                leading-tight
              "
            >
              pixel and polygon <br />
              3d games <br />
              post production <br />
              studio
            </h1>
          </div>
        </div>

        {/* SHOWREEL BUTTON */}
        <div
          className="
            overflow-hidden absolute
            bottom-10 left-4
            sm:bottom-14 sm:left-10
            md:bottom-20 md:left-20
          "
        >
          <a
            id='showreels-btn'
            className="
              text-3xl sm:text-4xl md:text-5xl
              hover:underline underline-offset-1 cursor-pointer
              font-OdibeeSans text-red-500
            "
          >
            showreel
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
