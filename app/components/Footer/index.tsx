"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaChevronRight,
  FaRegNewspaper,
  FaBuilding,
  FaHandsHelping,
  FaUsers
} from "react-icons/fa";

interface LinkItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

interface ProductType {
  id: number;
  section: string;
  links: LinkItem[];
}

const products: ProductType[] = [
  {
    id: 2,
    section: "Quick Links",
    links: [
      { label: "Join Our Programs", href: "/#join", icon: <FaChevronRight /> },
      { label: "Upcoming Events", href: "/events", icon: <FaChevronRight /> },
      { label: "Enquiry", href: "/#enquiry", icon: <FaChevronRight /> },
    ],
  },
  {
    id: 3,
    section: "Reports",
    links: [
      { label: "Newsletter", href: "/reports", icon: <FaChevronRight /> },
      { label: "Annual Report", href: "/reports", icon: <FaChevronRight /> },
      { label: "Program Report", href: "/reports", icon: <FaChevronRight /> },
    ],
  },
  {
    id: 4,
    section: "Partner With Us",
    links: [
      { label: "Corporates", href: "/partners/corporate", icon: <FaChevronRight /> },
      { label: "NGOs", href: "/partners/ngo", icon: <FaChevronRight /> },
      { label: "Alumni", href: "/partners/alumni", icon: <FaChevronRight /> },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-lightgrey border-t border-gray-300 text-lightblack">

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-black">
              Sona CSRI
            </h3>
            {/* <div className="flex gap-5">
              <Link href="https://facebook.com" className="hover:text-black transition-transform">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-black transition-transform">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-black transition-transform">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div> */}


            <div className="flex items-center gap-2">
              <div className="social-button">

                <a
                  href="https://www.youtube.com/@SONACSRI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <button className="relative w-8 h-8 rounded-full group">

                    <div
                      className="floater w-full h-full absolute top-0 left-0 
           rounded-full duration-300 
           bg-gray-400 
           group-hover:bg-gradient-to-tr 
           group-hover:from-[#F58529] 
           group-hover:via-[#DD2A7B] 
           group-hover:to-[#8134AF] 
           group-hover:-top-8 
           group-hover:shadow-2xl"
                    ></div>


                    <div
                      className="icon relative z-10 w-full h-full flex items-center justify-center 
           rounded-full border-2 
           border-gray-400 
           text-black
           group-hover:border-[#DD2A7B] 
           bg-gray-300 
           group-hover:bg-transparent 
           duration-300"
                    >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          className="group-hover:fill-[#DD2A7B] fill-gray-700 duration-300"
                          d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                        ></path>
                        <path
                          className="group-hover:fill-[#DD2A7B] fill-gray-700 duration-300"
                          d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>

              <div className="social-button">

                <button className="relative w-8 h-8 rounded-full group">

                  {/* Floating background */}
                  <div
                    className="floater w-full h-full absolute top-0 left-0
      rounded-full duration-300
      bg-gray-300
      group-hover:bg-[#0A66C2]
      group-hover:-top-8 
      group-hover:shadow-2xl"
                  ></div>

                  {/* Icon wrapper */}
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center
      rounded-full border-2
      border-gray-400
      bg-gray-200
      group-hover:border-[#0A66C2]
      group-hover:bg-transparent
      duration-300"
                  >

                    {/* SVG */}
                    <svg
                      height="18"
                      width="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-gray-700 group-hover:fill-[#0A66C2] duration-300"
                        d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 
          h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z 
          M19,19h-2.5v-4.9c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0
          C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                      ></path>
                    </svg>

                  </div>
                </button>

              </div>



              <div className="social-button">
                <a
                  href="https://www.youtube.com/@SONACSRI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <button className="relative w-8 h-8 rounded-full group">

                    {/* Floating Background */}
                    <div
                      className="floater w-full h-full absolute top-0 left-0
      rounded-full duration-300
      bg-gray-300
      group-hover:bg-[#FF0000]
      group-hover:-top-8
      group-hover:shadow-2xl"
                    ></div>

                    {/* Icon Wrapper */}
                    <div
                      className="icon relative z-10 w-full h-full flex items-center justify-center
      rounded-full border-2
      border-gray-400
      bg-gray-200
      group-hover:border-[#FF0000]
      group-hover:bg-transparent
      duration-300"
                    >

                      {/* SVG Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          className="fill-gray-700 group-hover:fill-[#FF0000] duration-300"
                          d="M23.5 6.5s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.6 3 12 3 12 3h-.1s-4.6 0-8.1.1c-.5 0-1.5.1-2.4 1C.7 4.8.5 6.5.5 6.5S.3 8.5.3 10.6v2.8c0 2.1.2 4.1.2 4.1s.2 1.7.9 2.4c.9.9 2.1.9 2.7 1 2 .2 8 .1 8 .1s4.6 0 8.1-.1c.5 0 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-2 .2-4.1v-2.8c0-2.1-.2-4.1-.2-4.1zM10 14.7V8.8l5.6 2.95L10 14.7z"
                        />
                      </svg>

                    </div>
                  </button>
                </a>
              </div>



              {/* <div className="social-button">
                <button className="relative  w-8 h-8 rounded-full group">
                  <div
                    className="floater w-full h-full absolute top-0 left-0 bg-[#1DA1F2] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#1DA1F2] rounded-full"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        className="fill-gray-50 group-hover:fill-[#171543] duration-300"
                        d="M23 4.5c-.8.4-1.7.7-2.6.8a4.6 4.6 0 0 0 2-2.5 9.5 9.5 0 0 1-3 1.2A4.7 4.7 0 0 0 16.4 3c-2.6 0-4.7 2.2-4.7 4.8 0 .4 0 .8.1 1.1a13.4 13.4 0 0 1-9.8-5s-2.6 4.6 2.9 6.8c-.8.6-2 .6-3 .1 0 2.3 1.6 4.3 3.8 4.8-.7.2-1.6.3-2.3.1.6 1.9 2.3 3.3 4.4 3.4A9.5 9.5 0 0 1 1 19.4C3.3 20.9 6 21.9 9 21.9c9.6 0 14.9-8.2 14.9-15.3v-.7a10.9 10.9 0 0 0 2.3-2.4z"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              <div className="social-button">
                <button className="relative  w-8 h-8 rounded-full group">
                  <div
                    className="floater w-full h-full absolute top-0 left-0 bg-[#1877F2] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#1877F2] rounded-full"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        className="fill-gray-50 group-hover:fill-[#171543] duration-300"
                        d="M22.6 0H1.4C.6 0 0 .6 0 1.4v21.2C0 23.4.6 24 1.4 24H12v-9h-3v-3h3V9.8A4.8 4.8 0 0 1 17.4 5H21v3h-3c-.7 0-1 .3-1 1V12h4l-1 3h-3v9h5.6c.8 0 1.4-.6 1.4-1.4V1.4c0-.8-.6-1.4-1.4-1.4z"
                      />
                    </svg>
                  </div>
                </button>
              </div> */}



            </div>

          </div>

          {/* Dynamic Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id}>
                <p className="text-lg font-bold mb-6 text-black">{product.section}</p>
                <ul className="space-y-4">
                  {product.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                      >
                        <span className="text-sm">{link.icon}</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-gray-200 ">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p className="hover:text-black transition-colors">
            © 2025 Sona-CSRI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
