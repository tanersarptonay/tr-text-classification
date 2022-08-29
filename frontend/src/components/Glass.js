import React from "react";

import './Glass.css'
import { useState } from 'react'
import axios from 'axios'


const Glass = (props) => {
		const url = "http://localhost:8080"

		const [data, setData] = useState('');

		const handleSubmit = (e) => {
			e.preventDefault()
			axios
				.post(url + 'prediction', {data, auth: {username: 'xxxx', password: 'xxxxxxxxxxx'}})
				.then((res) => {
					const data = res.data.data

					let probs_arr = data.probabilities.replace("[", "").replace("]", "").split(",");
					probs_arr = probs_arr.map(str => {return Number(str);});

					props.setProb(prevState => {
						const newState = prevState.map(obj => {
							return {
								...obj,
								datasets: [{
									...obj.datasets[0],
									data: probs_arr
								}]
							}
						})
						return newState;
					});

					props.glassRef.current.scrollIntoView({behavior: "smooth"});

				})
				.catch((err) => {console.log(err);})
		}

		return (
					<div className="glass">
						<form onSubmit={(e) => handleSubmit(e)} className="glass__form">
							<h4>Text Input</h4>
							<div className="glass__form__group">
								<textarea
									id="data"
									name = "data"
									className="glass__form__input"
									placeholder=""
									required
									autoFocus
									title="Text must be a string"
									type="string"
									value={data}
									onChange={(e) => setData(e.target.value)}
								/>
							</div>
							
		
							<div className="glass__form__group">
								<button type="submit" className="glass__form__btn">
									Submit
								</button>
							</div>
						</form>
					</div>
			)
}

export default Glass;