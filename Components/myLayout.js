import Link from 'next/link'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	fontFamily: "font-family: Georgia, 'Times New Roman', Times, serif",
	colour: "violet"
}

const Layout = (props) => {
return <div>
    <Head>
	{/*Global site tag (gtag.js) - Google Analytics*/}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-190187665-1"></script>
    <script dangerouslySetInnerHTML={
		{__html: `window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
	
		gtag('config', 'UA-190187665-1');`}
	}>
    </script>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
    <div style={layoutStyle}>
	<style global jsx>
		{`
		* {
			font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		}
        ul {
            list-style-type: none;
			font-size: 20px;
        }
		
		h3 {
			color: rgb(138, 80, 245);
			margin-top: 20px;
			font-size: 35px;
		}
		p {
			color: rgb(157, 109, 247);
			font-size: 20px;
			max-width: 1000px;
			margin-left: auto;
			margin-right: auto;
		}
		`}
	</style>
    	{props.children}
  	</div>
  </div>
}

export default Layout 
