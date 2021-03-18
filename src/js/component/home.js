import React, { useState } from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "bootstrap";

//create your first component
export function Home() {
	let [todos, setTodos] = useState([]);
	let [todo, setTodo] = useState("");

	const addTodo = todo => {
		if (todo === "") {
			window.alert("Add text to your To-Do");
		} else {
			setTodos([...todos, todo]);
		}
	};

	const add = todo => {
		setTodo(todo);
	};
	const reset = () => {
		document.querySelector("input").value = "";
		setTodo("");
	};
	const deleteTodo = todoIndex => {
		const newTodos = todos.filter((_, index) => index !== todoIndex);

		setTodos(newTodos);
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
						addTodo(todo);
						reset();
					}}
					placeholder="Enter to-do">
					Add
				</button>
			</div>

			<div>
				{todos.map((element, index) => (
					<div className="container-fluid" key={index}>
						<div className="alert alert-light row justify-content-center mw-100">
							<div className="col-lg">{element}</div>
							<div className="col-sm text-muted">
								<i
									className="fas fa-backspace"
									onClick={() => {
										deleteTodo(index);
									}}></i>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
