import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "bootstrap";

//create your first component
export function Home() {
	let [todosFetch, setTodosFetch] = useState([]);
	let [input, setInput] = useState("");

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/emendez", {
			method: "GET",
			//body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok);
				console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setTodosFetch(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const addInput = input => {
		if (input === "") {
			window.alert("Add text to your To-Do");
		} else {
			setTodosFetch([...todosFetch, { label: input, done: false }]);
		}
		//setTodosFetch(newArray);
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/emendez", {
			method: "PUT", // or 'POST'
			body: JSON.stringify(todosFetch), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	}, [todosFetch]);

	const add = input => {
		setInput(input);
	};
	const reset = () => {
		document.querySelector("input").value = "";
		setInput("");
	};
	const deleteInput = inputIndex => {
		const newTodos = todosFetch.filter((_, index) => index !== inputIndex);
		setTodosFetch(newTodos);
	};
	const deleteAllItems = todosFetch => {
		setTodosFetch([
			{ label: "", done: false },
			{ label: "", done: false }
		]);
	};
	return (
		<div className="d-flex justify-content-center text-center input-group mt-5 flex-column container-fluid w-50 alert alert-dark">
			<div className="d-flex justify-content-center mb-3">
				<input
					type="text"
					placeholder="Add ToDo"
					onChange={e => {
						add(e.target.value);
						e.preventDefault();
					}}
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
				/>
				<button
					className="btn btn-success"
					id="submit"
					onClick={() => {
						addInput(input);
						reset();
					}}
					placeholder="Enter to-do">
					Add
				</button>
				<button
					className="btn btn-warning"
					id="submit"
					onClick={() => {
						deleteAllItems();
					}}
					placeholder="Enter to-do">
					Delete All
				</button>
			</div>

			<div>
				{todosFetch.map((element, index) => (
					<div className="container-fluid" key={index}>
						<div className="alert alert-light row justify-content-center mw-100">
							<div key={index} className="col-lg">
								{element.label}
							</div>
							<div className="col-sm text-muted">
								<i
									className="fas fa-backspace"
									onClick={() => {
										deleteInput(index);
									}}></i>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
