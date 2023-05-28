import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addHabit} from "../redux/features/habitSlice";
import {Link} from "react-router-dom";

const Navbar = ({name}) => {
	// call use dispatch hook a variable call dispatch
	const dispatch = useDispatch();

	// change state acording time
	const [hour, setHour] = useState(0);
	useEffect(() => {
		const date = new Date();
		setHour(date.getHours());
	}, []);

	// function for add habit
	const handleSave = () => {
		const habitName =
			document.getElementById(
				"habitName"
			).value;
		dispatch(addHabit(habitName));
		alert("Your habit added successfully");
		document.getElementById(
			"habitName"
		).value = "";
	};

	return (
		<>
			<div className="navbar">
				<div className="left-nav">
					{name != "" && (
						<div
							className="back d-flex justify-content-center align-items-center"
							style={{
								height: "100%",
								width: "20%",
								color: "white",
							}}>
							<Link to="/">
								<i className="fa-solid fa-arrow-left"></i>
							</Link>
						</div>
					)}
					<div className="title">
						Trackify@Habbit
					</div>
				</div>
				<div className="right-nav">
					<button
						className="addhabit-btn"
						data-bs-toggle="modal"
						data-bs-target="#staticBackdrop">
						<i className="fa-solid fa-plus"></i>{" "}
						Add Habits
					</button>
				</div>
			</div>

			{/* modal for add habit form */}
			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="staticBackdropLabel">
								New Habit
							</h5>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label
									htmlFor="exampleInputEmail1"
									className="form-label">
									NAME
								</label>
								<input
									type="text"
									className="form-control"
									id="habitName"
									placeholder="Enter habit name"
									autoComplete="off"
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={
									handleSave
								}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
