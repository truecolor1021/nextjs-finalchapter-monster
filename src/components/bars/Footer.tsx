export default function Footer() {
  return (
    <div className="text-myFontsize md:h-800 h-620 w-full text-footerFontColor font-normal overflow-hidden">
      <div className="md:w-650 w-full absolute flex justify-around z-10 mt-15 leading-7">
        <div>
          <p>Comics</p>
          <p>Genres</p>
          <p>Authors</p>
          <p>Community</p>
        </div>
        <div>
          <p>About</p>
          <p>Contacts</p>
          <p>Help</p>
          <p>Advertise</p>
        </div>
        <div className="md:hidden block">
          <p>Discord</p>
          <p>X (Twitter)</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
        <div className="md:block hidden ">
          <p>Privacy Policy</p>
          <p>Terms and Service</p>
        </div>
      </div>
      <div className="absolute md:block hidden flex justify-end z-10 mt-15 pr-16 w-full font-normal leading-7">
        <div className="float-right ">
          <p>Discord</p>
          <p>X (Twitter)</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
      </div>
      <div className="md:hidden absolute block md:w-650 w-full flex justify-around z-10 mt-52 leading-7">
        <div>
          <p>Privacy Policy</p>
          <p>Terms and Service</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="bg-footerColor relative object-center w-auto flex align-middle md:h-800 h-620 justify-center">
        <img
          className="md:block hidden absolute w-auto h-fit top-1/2 -mt-5 z-10 -translate-y-1/2"
          src="./shape-26.png"
        ></img>
        <img
          className="md:hidden block absolute min-w-auto min-h-437 mt-20 top-1/2 z-10 -translate-y-1/2"
          src="./shape-26 (2).png"
        ></img>
        <img
          className="md:block hidden absolute top-1/2 -translate-y-1/2"
          src="./Vector.svg"
        ></img>
        <img
          className="md:hidden block absolute mt-20 top-1/2 -translate-y-1/2"
          src="./Vector.png"
        ></img>
        <div className="flex flex-col md:mx-14 mx-8 justify-end  my-5 py-2 border-b-2 w-full">
          <div className="md:flex-row flex-col  flex justify-between">
            <span>© 2024 Final Chapter. All Rights Reserved.</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
