import Image from 'next/image'

const Footer = () => {
  return (
    <div className="
      mt-10">
      <h1 className="
        font-bold 
        text-[28px] 
        ">Contact Me</h1>

      <div>
        <p className="
          font-bold
          mt-6
          text-[18px]">Email</p>
        <div className="
          flex
          flex-row
          ">
          <Image src="/envelope.png" width="35" height="35" alt="Envelope" className="
            mt-6"/>
          <p className="
            mt-7
            ml-6
            font-bold">nadottipedro5@gmail.com</p>
        </div>
        <p className="
          font-bold
          mt-7
          text-[18px]">Whatsapp</p>
        <div className="
          flex
          flex-row
          ">

          <Image src="/whatsapp.png" width="35" height="35" alt="Whatsapp" className="
            mt-6
            w-10
            h-10"/>
          <a href="https://wa.me/5519998458900?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais!
            " className="
            mt-7
            ml-6
            font-bold
            bg-white
            text-black
            rounded-full
            pt-2
            pl-4
            pr-4
            w-auto
            h-10
            transition-shadow
            duration-400
            hover:shadow-[0_0_15px_white]">Message me!</a>
        </div>
        <div>
          <p className="
            font-bold
            mt-6
            text-[18px]">Socials</p>
          <div className="
            flex
            flex-row
            ">
            <Image src="/github.png" width="35" height="35" alt="Github" className="
              mt-6
              w-10
              h-10"/>
            <a href="https://github.com/Nadoutti" className="
              mt-7
              ml-6
              font-bold
              bg-white
              text-black
              rounded-full
              pt-2
              pl-4
              w-30
              h-10
              transition-shadow
              duration-400
              hover:shadow-[0_0_15px_white]">click me!</a>
          </div>
          <div className="
            flex
            flex-row
            ">
            <Image src="/linkedin.png" width="35" height="35" alt="Linkedin" className="
              mt-6
              w-10
              h-10"/>
            <a href="https://www.linkedin.com/in/pedro-nadotti/" className="
              mt-7
              ml-6
              font-bold
              bg-white
              text-black
              rounded-full
              pt-2
              pl-4
              w-30
              h-10
              transition-shadow
              duration-400
              hover:shadow-[0_0_15px_white]">click me!</a>
          </div>

        </div>

      </div>

    </div>
  )
}
export default Footer
