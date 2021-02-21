import Layout from '../Components/myLayout'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'

const contentWrapper = {
   width: "107%",
   marginLeft: -40,
   marginTop: -100,
   marginBottom: -42
 }
 
 const wrapperImg = {
   width: "100%",
   height: "40%",
   opacity: "85%",
 }
 
 const textWrapper = {
   position: "relative",
   color: "rgb(120, 128, 241)",
   marginTop: -1100,
   marginLeft: 50
 }
 
 const linkStyle = {
   marginRight: 40,
   fontSize: 30,
   color: "rgb(17, 93, 180)",
   marginBottom: 200,
   marginTop: -220
 }
 
 const heading = {
   fontSize: 55,
   color: "rgb(17, 93, 180)",
   fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
 }

 const img = {
     marginTop: 180,
     width: 340,
     height: 240,
     marginLeft: 400,
 }

 const text = {
    width: 600,
    marginTop: -130
 }

 const font = {
   fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
   color: "rgb(17, 93, 180)",
   fontSize: 22
 }

 const p = {
   fontSize: 22,
   color: "rgb(240, 112, 62)",
   fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
   width: 500,
   marginLeft: -50
 }

 const div = {
   width: 550,
   marginLeft: 900,
   textAlign: "center",
   marginTop: -230
 }
 
 const listItem = {
    width: 400,
    marginLeft: 100,
 }

export default () => {
   return <Layout>   
        <div className="content-wrapper" style={contentWrapper}>
      <img src="/static/image/projects.png" style={wrapperImg}/>
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
      <img src="/static/image/ongoing-projects.gif" style={img}/>
      <div style={text}>
      <h1 style={heading}>My Projects</h1>
        <br/>
        <p style={p}>
           If you are interested in checking out some of the work I've done thus far in my bootcamp, Github would be the place to visit. All code for important tasks 
           that I've done previously, can be seen in Github. Here are links to these repos: 
        </p>
        <ul style={font}>
               <li><Link href="https://github.com/Tasneem-Davids/Capstone-Project-1-L2"><a style={font}>My first capstone project of level 2</a></Link></li>
               <li><Link href="https://github.com/Tasneem-Davids/capstone-project-2-L2"><a style={font}>My second capstone project of level 2</a></Link></li>
               <li><Link href="https://github.com/Tasneem-Davids/final-capstone-project"><a style={font}>My final capstone project</a></Link></li>
        </ul>
        <br/>
        </div>
       <div style={div}>
       <p style={p}>   
          The links to your left are the codes of applications that I later deployed, and if you would like to see the deployed apps you can click on the links below
        </p> 
         <ul style={font}>
               <li><Link href="https://capstone-project-1-snake-game.herokuapp.com/"><a style={font}>My first capstone project of level 2 (A simple snake game made with React.js)</a></Link></li>
               <br/>
               <li style={listItem}><Link href="https://capstone-project-2-level-2.herokuapp.com/"><a style={font}>My second capstone project of level 2 (A full stack app for searching iTunes Store and Apple Book Store)</a></Link></li>
               <br/>
               <li><Link href="https://final-capstone-project-l3.herokuapp.com/"><a style={font}>My final capstone project (A MERN app for keeping track of appointments)</a></Link></li>
        </ul>
        <br/>
        <p style={p}>
           You can view any other additional task's code I've uploaded to Github <Link href="https://github.com/Tasneem-Davids?tab=repositories"><a style={font}>here</a></Link>
        </p>
       </div>
      </div>
    </div>
    </Layout>
}
