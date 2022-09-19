import React, { useState } from "react";


const List = () => {

	const [tarea, setTarea] = useState({ name: "", isDone: false })

	const [lisTarea, setlisTarea] = useState([]);

	const agregarTarea = (item) => {
		if (item.key === "Enter") {
			setlisTarea([...lisTarea, tarea])
			setTarea({ tarea: "", isDone: false })
		}
	}

	const manejarInput = (item) => {
		setTarea({ ...tarea, [item.target.name]: item.target.value })
	}

	const borrarTarea = (id) => {
		let newList = lisTarea.filter((item, index) => {
			return (id !== index)

		})

		setlisTarea(newList)
	}

	return (
		<div className="container-principal d-flex justify-content-center py-5">
			<div className="row">
				<div className="contenedor-titulo text-center">
					<h1>TodoList</h1>
				</div >

				<ul className="card">
					<div className="contenedor-input text-center">
						<input className="input w-100" type="text" placeholder="Agrega tu tarea" onChange={manejarInput} onKeyDown={agregarTarea} name="name" value={tarea.name} />
					</div>

					{lisTarea.map((element, index) => {
						return (
							<div className="col-12 fancy inputText d-flex justify-content-between my-4" key={index}>
								{element.name}
								<button className=" fancy btn" type="button" onClick={() => borrarTarea(index)}><i className="fas fa-times"></i></button>
							</div>
						)
					})}
					<p className="botton">{lisTarea.length}  Tareas</p>
				</ul>
			</div>
		</div>
	);
};

export default List;