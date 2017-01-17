import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeView'
import AdminView from './views/admin'
import BioView from './views/bioView.js'
import WorksView from './views/worksView'
import GalleryView from './views/galleryView'
import VideoView from './views/videoView'
import ListenView from './views/listenView'
import ConnectView from './views/connectView'



const app = function() {
  const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"admin": "handleAdmin",
			"bio": "handleBio",
			"works": "handleWorks",
			"gallery": "handleGallery",
			"video": "handleVideo",
			"listen": "handleListen",
			"connect": "handleConnect",
			"*default": "handleDefault"
		},

		handleHome: function() {
			ReactDOM.render(<HomeView/>, document.querySelector(".container"))
		},
		
		handleAdmin: function() {
			ReactDOM.render(<AdminView/>, document.querySelector(".container"))
		},
		handleBio: function() {
			ReactDOM.render(<BioView/>, document.querySelector(".container"))
		},
		handleWorks: function() {
			ReactDOM.render(<WorksView/>, document.querySelector(".container"))
		},
		handleGallery: function() {
			ReactDOM.render(<GalleryView/>, document.querySelector(".container"))
		},
		handleVideo: function() {
			ReactDOM.render(<VideoView/>, document.querySelector(".container"))
		},
		handleListen: function() {
			ReactDOM.render(<ListenView/>, document.querySelector(".container"))
		},
		handleConnect: function() {
			ReactDOM.render(<ConnectView/>, document.querySelector(".container"))
		},

		handleDefault: function() {
			location.hash = "home"
		},


		initialize: function() {
			Backbone.history.start()
		}

	})
  var router = new Router()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..