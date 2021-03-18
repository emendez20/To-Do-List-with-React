// import React, { useState } from "react";
// import PropTypes from "prop-types";

// export const Form = () => {
// 	const useInput = initialValue => {
// 		const [list, setList] = useState(initialValue);

// 		return {
// 			list,
// 			onChange: e => setList(e.target.value),
// 			resetValue: () => setList("")
// 		};
// 	};
// 	Form.PropTypes = {
// 		onSubmit: PropTypes.string
// 	};
// 	const myFunction = ({ onSubmit }) => {
// 		const { resetValue, ...text } = useInput("");

// 		return (
// 			<form
// 				onSubmit={e => {
// 					e.preventDefault();
// 					onSubmit(text.list);
// 					resetValue();
// 				}}>
// 				<input {...text} />
// 			</form>
// 		);
// 	};
// };
