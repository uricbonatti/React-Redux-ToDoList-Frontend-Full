import React from "react";

export default (props) => {
	return (
		<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					<i className="fa fa-calendar-check-o"></i>ToDoApp
				</a>
			</div>

			<div id="navbar" className="navbar-collapse collapse">
				<ul className="navbar-nav nav">
					<li className="nav-item">
						<a className="nav-link" href="#/todos">
							Tarefas
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#/about">
							Sobre
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
