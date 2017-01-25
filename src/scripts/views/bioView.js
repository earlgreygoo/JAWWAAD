import React from 'react'
import Header from './header'
import Nav from './nav'





const BioView = React.createClass({


	
	render: function() {
		return (
			<div>
				<Header />
				<Nav />
				<Bio />
			</div>
			)
	}
})


const Bio = React.createClass({
	render: function() {
		return (
			<div className = "bio"> 
				<p> JAWWAAD is a homegrown Houstonian who recently returned after soaking up the good vibes of New York City. He has performed with jazz, free jazz and improvisers as well as hip-hop artists from all walks of life. The list includes The Roots, Kid Jordan, The Pharcyde, William Parker, Joe McFee, Wadaleosmith and Al Foster. He studied and participated in workshops with Pauline Oliveros, and was a member of the Deep Listening Houston Youth ensemble. </p>
				<p> The 2008 release of the group Shape of Broad Mind’s critically acclaimed “Craft of the Lost Ark“ brought JAWWAAD international attention for his writing and rapping skills when he appeared on the track, “Let’s Go”, with MF DOOM. That release was followed by a remix of the single, “Oper8tr" with Khujo Goodie of Goodie Mob. In a recent article in Free Press Houston, David Garrick described JAWWAAD’s writing as “…incredible rhymes that drop so naturally that it makes you question everything you’ve heard before and after.”  
JAWWAAD’s undeniable skills have placed him in good company and allowed him to tour throughout the world. He appeared on the marquee with Jay-Z at the Hove Festival in Norway and performed at Meltdown Festival in London as well as the Sonar Festival in Spain just to name a few. He also collaborated with Grammy-nominated trumpet player Christian Scott as well as Grammy-nominated opera singer Lisa Harris. He recently performed at the Bonnaroo Music and Arts Festival and is a member of Red Bull’s Bass Camp. JAWWAAD has also been tapped by Red Bull to use his skills as a writer and artistic thinker to provide input on various Red Bull local marketing campaigns.
JAWWAAD’s appetite for all things music is apparent. He also brings his eclectic sound to the band, The Young Mothers. The Young Mothers are a brilliant band that merges modern jazz, free improvisation, indie rock, hip hop and a caterwauling Afro-groove. The European leg of this group’s next tour jumps off in Oslo, Norway in March. </p>
				<p> His first solo project, “The Bully Love Set”, was recently released on Everything Records, an arts collective whose members also include world-renowned artists and musicians like Robert Hodge, Phillip Pyle II, Lovie Olivia, Rabea-Ballin, Gregory Michael Carter, Anthony Suber and other groundbreaking artists. The artwork for “The Bully Love Set” was created by Robert Pruitt, whose pieces have appeared in places such as the Whitney Museum of American Art and the Houston Museum of Fine Arts.</p>
				<p>JAWWAAD will be featured in an upcoming documentary on how and why young artist do what they do by Folklore Films.
HIs newest collaboration with drummer Jamire Williams, entitled “Black Fetish”, pushes the limits of hip hop. This project was released in late 2015.
			</p>
			</div>
			)
	}
})


export default BioView