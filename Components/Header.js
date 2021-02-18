import Link from 'next/link'

const linkStyle = {
    marginRight: 15,
    fontSize: 20
  }  

const Header = () => {
 return <div>
    <Link href='/'>
    <a style={linkStyle}>home</a>
    </Link>
    <Link href='/about'>
    <a style={linkStyle}>about</a>
    </Link>
    <Link href='/contact'>
    <a style={linkStyle}>contact</a>
    </Link>
    <Link href='/projects'>
    <a style={linkStyle}>projects</a>
    </Link>
</div>
}

export default Header;