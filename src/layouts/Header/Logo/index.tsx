import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export interface LogoSrc {
  logosrc: string
}

export default function LogoImage({ logosrc }: LogoSrc) {
  return (
    <div>
      {logosrc && (
        <Link href="/">
          <Image src={logosrc} alt="contracters-edge-logo" />
        </Link>
      )}
    </div>
  )
}
