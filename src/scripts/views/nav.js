import React from 'react'






const Nav = React.createClass({


	
	render: function() {
		return (
			<ul className="nav">
				<li onClick={ () =>location.hash = "bio"}> Bio </li>
				<li onClick={ () =>location.hash = "works"}> Works </li>
				<li onClick={ () =>location.hash = "news"} > News </li>
				<li onClick={ () =>location.hash = "gallery"} > Gallery </li> 
				<li onClick={ () =>location.hash = "video"} > Video </li>
				<li onClick={ () =>location.hash = "listen"} > Listen </li>
				<li onClick={ () =>location.hash = "connect"} > Connect </li>

			</ul>
			)
	}
})


export default Nav