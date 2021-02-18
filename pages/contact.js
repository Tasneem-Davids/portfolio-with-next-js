import Layout from '../Components/myLayout'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'

const contentWrapper = {
    width: "107%",
    marginLeft: -40,
    marginTop: -100
  }
  
  const wrapperImg = {
    width: "100%",
    height: "40%",
    opacity: "85%",
  }
  
  const textWrapper = {
    position: "relative",
    color: "rgb(120, 128, 241)",
    marginTop: -1000,
    marginLeft: 50
  }
  
  const linkStyle = {
    marginRight: 40,
    fontSize: 30,
    color: "rgb(40, 93, 207)",
    marginBottom: 200,
    marginTop: -220
  }
  
  const heading = {
    fontSize: 45,
    color: "rgb(19, 39, 83)",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  }

  const img = {
      marginTop: 290,
      width: 450,
      marginLeft: 235,
      height: 310,
      borderRadius: 35
  }

  const div = {
      textAlign: "center",
      width: 600,
      marginTop: -70
  }

  const h3 = {
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    color: "rgb(34, 79, 177)",
  }

  
  const a = {
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    color: "rgb(23, 51, 110)",
    fontSize: 20
  }

export default () => {
   return <Layout>
        <br/>
        <div className="content-wrapper" style={contentWrapper}>
      <img src="/static/image/contact.jpg" style={wrapperImg}/>
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
      <img src="/static/image/contactGif.gif" style={img}/>
      <div style={div}>
      <h1 style={heading}>Contact Me</h1>
        <br/>
        <h3 style={h3}>I would love to hear from you, so here is my contact info if you're interested:</h3>
        <br/>
        <p style={h3}><b>e-mail:</b> davidstasneem92@gmail.com </p>
        <p style={h3}><b>LinkedIn:</b> <Link href="https://www.linkedin.com/in/tazneem-davids-12b56b1b"><a style={a}>https://www.linkedin.com/in/tazneem-davids-12b56b1b</a></Link></p>
      </div>
      </div>
    </div>
    </Layout>
}