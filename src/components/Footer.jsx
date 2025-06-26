function Footer() {
  return (
    <div className="pb-8 pt-15 px-10 xl:px-30 bg-[#1f2937] text-white text-center md:text-start">
      <div className="grid lg:grid-cols-5 gap-10 mb-12">
        <div>
          <div className="text-[28px] font-bold flex items-center justify-center md:justify-start space-x-2.5 mb-3.5">
            {/* <img src="Logo Icon.png" alt="" className="w-9 h-7" /> */}
            <a href="">JUXTA</a>
          </div>
          <p>JUXTA were you can find dope outfit for Gen-Z and Millennials</p>
        </div>

        <div className="text-base">
          <p className="font-bold text-lg mb-3.5">Help</p>
          <p className="mb-3.5">Customer Support</p>
          <p className="mb-3.5">Delivery Details</p>
          <p className="mb-3.5">Terms & Conditions</p>
        </div>

        <div className="text-base">
          <p className="font-bold text-lg mb-3.5">Services</p>
          <p className="mb-3.5">Free Delivery</p>
          <p className="mb-3.5">Packaging</p>
          <p className="mb-3.5">Store Package</p>
        </div>

        <div className="text-base">
          <p className="font-bold text-lg mb-3.5">Company</p>
          <p className="mb-3.5">About us</p>
          <p className="mb-3.5">Careers</p>
          <p className="mb-3.5">Media kit</p>
        </div>

        <div>
          <p className="font-bold text-2xl">Try It Today</p>
          <p className="my-6 text-base">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-teal-600 w-full text-center text-white mt-4 py-1.5 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* bottom Footer */}
      <div className="lg:border-t border-[#2E4E73] pt-6  flex flex-col lg:flex-row lg:justify-between  text-base">
        <div className="border-b lg:border-b-0 border-[#2E4E73] pb-5 lg:pb-0 ">
          Made With Love ❤ by Nile
        </div>

        <div className="pt-5 lg:pt-0 flex gap-x-8 justify-center md:justify-start">
          <div>
            {" "}
            <img src="Images/Icon_11_.png" alt="" />
          </div>
          <div>
            <img src="Images/Twitter.png" alt="" />
          </div>
          <div>
            {" "}
            <img src="Images/Linkedin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
