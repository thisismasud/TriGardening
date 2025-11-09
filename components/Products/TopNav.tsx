import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
    <nav>
        <ul>
            <li><Link  href="/">Home</Link></li>
            <li><Link  href="/">Plants</Link></li>
            <li><Link  href="/">Tools</Link></li>
            <li><Link  href="/">Home</Link></li>
            <li><Link  href="/">Home</Link></li>
        </ul>
    </nav>
  )
}

export default TopNav