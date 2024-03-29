import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  children?: React.ReactNode
  className?: string
  color?: string
}

interface LinkProps {
  variant?: 'primary' | 'secondary'
  href: string
  children?: React.ReactNode
  className?: string
  color?: string
}

type ButtonOrLinkProps = ButtonProps | LinkProps

const Button: React.FC<ButtonOrLinkProps> = ({
  className,
  children,
  variant = 'primary',
  href,
  color,
  ...rest
}) => {
  const commonClasses =
    'px-10 py-5 rounded-4xl uppercase text-sm border border-strong-orange leading-none focus:outline-none focus:ring md:inline block'
  const variantClasses =
    variant === 'primary'
      ? 'bg-strong-orange text-white hover:bg-white hover:text-strong-orange'
      : `bg-transparent hover:bg-strong-orange hover:text-white ${color}`

  if (href) {
    return (
      <a
        className={classNames(`${commonClasses} ${variantClasses}`, className)}
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={classNames(`${commonClasses} ${variantClasses}`, className)} {...rest}>
        {children}
      </button>
    )
  }
}

export default Button
