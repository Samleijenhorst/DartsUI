'use strict';

const express = require('express');

class App {

	static get instance() {
		if (!this._instance) {
			this._instance = express();
		}

		return this._instance;
	}

	static initialize() {
		this.instance.use(express.json());
		// Initialize the app routes
		this.instance.get("/501/:current", async(req, res, next) => {
			try {
				let { current } = req.params
				if(current > 501){
					let error = new Error("Starting value is over 501");
					error.status = 404
					throw(error)
				}else if(!current){
					let error = new Error("Starting value is initial");
					error.status = 500
					throw(error)
				}else if(!(1*current)){
					let error = new Error("Invalid starting value");
					error.status = 500
					throw(error)
				}
				let arr = []
				while (current){
					if (!(current % 3) && current >= 60){
						arr.push({value: "T20"})
						current -= 60
					}else if(!(current %3)){
						arr.push({value: "T" + ( current / 3 )})
						current = 0
					}else if(!(current % 2)  && current <= 40){
						arr.push({value: "D" + ( current / 2 )})
						current = 0
					}else if(!((current % 60) % 2) && ((current % 60) <= 40)) {
						arr.push({value: "D" + ((current % 60) / 2)})
						current -= (current % 60)
					}else if (!(current % 2) && current >= 40){
						arr.push({value: "D" + "20"})
						current -=40
					}else if(current > 20){
						arr.push({value: (current % 3) + 18})
						current -= ((current % 3) + 18)
					}else{
						arr.push({value: current})
						current = 0
					}
				}
				return res.json(arr)
			} catch (e) {
				console.log(e)
				return next(e);
			}
		})
	}
}

module.exports = App