import Layout from '../Components/myLayout'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'

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
    marginTop: -995,
    marginLeft: 50
  }
  
  const linkStyle = {
    marginRight: 40,
    fontSize: 30,
    color: "rgb(40, 93, 207)",
    marginBottom: 200,
    marginTop: -220
  }
  
  const p = {
    fontSize: 22,
    color: "rgb(19, 39, 83)",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    marginTop: 210,
    marginLeft: 20,
    textAlign: "center",
  }

  const img = {
      marginTop: 300,
      width: 400,
  }

export default () => {
   return <Layout> 
      <div className="content-wrapper" style={contentWrapper}>
      <img src="/static/image/desk.jpg" style={wrapperImg}/>
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
      <img src="/static/image/aboutme.gif" style={img}/>
      <p style={p}>Hi my name is Tazneem Davids, and I'm currently 23 years old and although I have successfully completed 
            my Full Stack Web Development bootcamp, I am still learning my way around coding. Coding was not initially what I wanted to persue,
            because of the fact that I love art and design so much. After I matriculated, I decided to study Visual 
            Communication Design at the Cape Peninsula University of Technology for a year, which I successfully completed, 
            but I was not able to continue my studies due to financial reasons. It was then that I interned at Highbury 
            Media for a couple of months in the HR department, as well as reception. It wasn't long before I found myself 
            once again looking for a job, and this is how I came to learn about HyperionDev and decided to take a web 
            development bootcamp. I'm in my early twenties and finding a good job is now more crutial than ever 
            for me. I would love to start a career while I'm still young so that I can gain more and more experience as 
            the years go by, and most importantly to finally have some stability in my life were jobs are concerned. 
        </p>
      </div>
    </div>
    </Layout>
}
