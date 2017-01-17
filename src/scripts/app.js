import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeView'
import AdminView from './views/admin'



const app = function() {
  const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"admin": "handleAdmin",
			"*default": "handleDefault"
		},

		handleHome: function() {
			ReactDOM.render(<HomeView/>, document.querySelector(".container"))
		},
		
		handleAdmin: function() {
			ReactDOM.render(<AdminView/>, document.querySelector(".container"))
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