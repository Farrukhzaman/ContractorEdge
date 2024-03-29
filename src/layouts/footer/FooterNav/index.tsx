import Link from 'next/link'
export interface NavProps {
  text: string
  href: string
}
const FooterNav = ({ text, href }: NavProps) => {
  return (
    <Link href={href} className={`nav__link text-1sm hover:text-strong-orange`}>
      {text}
    </Link>
  )
}

export default FooterNav
