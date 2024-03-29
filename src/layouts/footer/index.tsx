import React from 'react'

import Button from '../../components/ui/Buttons'
import DemoButton from '../../components/ui/DemoButton'
import Heading from '../../components/ui/headings'
import { useDemoButton } from '../../DemoButtonContext'
import LogoImage from '../Header/Logo'
import FooterNav from './FooterNav'
import Footercontact from './FooterNav/FooterContact'
import SocialLinks from './SocialLinks'

import logo from '/public/svg/footer-logo.svg'

const Company = [
  { text: 'Home', href: '/' },
  { text: 'Solutions', href: 'solutions' },
  { text: 'About Us', href: 'about' },
  { text: 'Contact Us', href: 'contact' },
  { text: 'Privacy Policy', href: 'privacy-policy' },
  { text: 'Term of Use', href: 'terms-of-use' },
]

const Solutions = [
  { text: 'Mobile Time Tracking', href: 'solutions#mobile-time-tracking' },
  { text: 'Wage Determination', href: 'solutions#wage-determination-rates' },
  // { text: 'Customized Reporting', href: 'solutions#customized_reporting' },
  { text: 'Fringe Benefit Statement', href: 'solutions#fringe-benefit-statement' },
  {
    text: 'Automatic Predetermined Increases',
    href: 'solutions#automatic-predetermined-increases',
  },
  // { text: 'Certified Payroll', href: 'solutions#certified-payroll' },
]

const ContactDetails = {
  phone: '(619) 323-2886',
  email: 'info@mycontractorsedge.com',
  location: '<div>350 Tenth Avenue Suite 1400<br /> San Diego, CA 92101</div>',
}
export default function Footer({ sidebarData }: any) {
  // sidebarData = {
  //   spanText: '',
  //   formHeading: '',
  //   formFields: [
  //     /* Define your form fields here */
  //   ],
  // }
  const formattedLocation = `350 Tenth Avenue Suite 1400 San Diego, CA 92101`
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-footer-texture bg-no-repeat bg-right-bottom lg:bg-auto md:bg-[length:34.25%] bg-[length:300px]">
      <div className="bg-black py-24 border-b border-footer-border px-5">
        <div className="container">
          <div className="grid grid-cols-12 items-center">
            <div className="md:col-span-9 col-span-12 md:text-left text-center">
              <div className="grid grid-cols-10">
                <div className="md:col-span-8 col-span-12">
                  <Heading level={3} spanText="SIMPLIFY" className="font-900 uppercase mb-0">
                    YOUR PREVAILING
                  </Heading>
                </div>
                <div className="md:col-span-8 col-span-12 md:col-start-2 col-start-1">
                  <Heading level={3} className="uppercase font-900">
                    WAGE COMPLIANCE
                  </Heading>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12 md:text-right text-center md:mt-0 mt-4">
              {/* <Button variant="primary" href="#" className="md:w-auto w-full md:mt-0 mt-12">
                Book A demo
              </Button> */}
              <DemoButton sidebarData={sidebarData} />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="px-5">
        <div className="container">
          <div className="md:pt-24 pt-20 pb-20 md:text-left">
            <div className="grid lg:grid-flow-col lg:auto-cols-max lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row justify-between lg:gap-0 gap-10">
              {/* <!-- Tailwind Elements section --> */}
              <div className="">
                <h6 className="mb-4 flex items-center justify-start font-semibold uppercase md:justify-start">
                  <LogoImage logosrc={logo} />
                </h6>
                <SocialLinks />
                <div className="pt-5 pb-5 text-left text-sm">
                  <span className="pb-5">
                    © {currentYear} Contractor Edge.
                    <br /> All Rights Reserved.
                    <br /> Patent pending.
                  </span>
                </div>
                <div className="pb-5 text-left text-sm">
                  <span>
                    Designed/developed by
                    <br />
                    <a
                      href="https://odysseyinc.com/"
                      target="_blank"
                      className="hover:text-strong-orange"
                    >
                      Odyssey Computing, Inc.
                    </a>
                  </span>
                </div>
              </div>
              {/* <!-- Products section --> */}
              <div className="">
                <Heading
                  level={6}
                  spanText="Products"
                  className="font-900 uppercase mb-4"
                ></Heading>
                <nav className={`nav`}>
                  <div className={`nav__menu-list flex flex-col`}>
                    {Company.map((company, idx) => (
                      <div className={`leading-[48px]`} key={company.text}>
                        <FooterNav {...company} />
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
              {/* <!-- Useful links section --> */}
              <div className="">
                <Heading
                  level={6}
                  spanText="Solutions"
                  className="font-900 uppercase mb-4"
                ></Heading>

                <nav className={`nav`}>
                  <div className={`nav__menu-list flex flex-col`}>
                    {Solutions.map((solution, idx) => (
                      <div className={`leading-[48px]`} key={solution.text}>
                        <FooterNav {...solution} />
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <Footercontact
                  phone="(619) 323-2886"
                  email="info@mycontractorsedge.com"
                  location={formattedLocation}
                />
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
        </div>
      </div>
    </div>
  )
}
