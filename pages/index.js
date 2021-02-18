import Link from 'next/link'
import Layout from '../Components/myLayout'

const contentWrapper = {
  width: "107%",
  marginLeft: -40,
  marginTop: -50
}

const wrapperImg = {
  width: "100%",
  height: "40%",
  opacity: "85%",
}

const textWrapper = {
  position: "relative",
  color: "rgb(120, 128, 241)",
  marginTop: -950,
  marginLeft: 50
}

const linkStyle = {
  marginRight: 40,
  fontSize: 30,
  color: "rgb(235, 128, 199)",
  marginTop: -500
}

const heading = {
  fontSize: 70,
  color: "rgb(213, 128, 235)",
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  marginTop: 150,
  width: 600,
  marginLeft: 460
}

export default () => {
 return <Layout>
    <div className="content-wrapper" style={contentWrapper}>
      <img src="/static/image/portfolio.jpg" style={wrapperImg}/>
      <div className="text-wrapper" style={textWrapper}>
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
      <h1 style={heading}>Welcome To My Online Portfolio</h1>
      </div>
    </div>
  </Layout>
}
