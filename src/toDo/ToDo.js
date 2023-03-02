import React, { useState } from 'react'
import './reset.css'
import './index.css'
import ToDoItem from './ToDoItem'


const ToDo = () => {
	const [name, setName] = useState('') // смена имени
	const [todos, setTodos] = useState([ // по умолчанию тудушка
		{
			_id: 0,
			name: 'Buy MacBook',
			isChecked: true,
		},
	])
	const addToDoHandler = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			setTodos(prev => [...prev, { _id: todos.length, name, isChecked: false }])
			setName('')
		}
	}

	const toogleCheckedToDo = idx => {
		const newArray = [].concat(todos)
		newArray[idx].isChecked = !newArray[idx].isChecked;
		setTodos(newArray);
	}
	return (
		<React.Fragment>
			<div className='todo'>
				<h1>ToDo Приложение</h1>
				{todos &&
					todos.map((item, idx) => (
						<ToDoItem
							key={`_todo_${item._id}`}
							idx={idx}
							name={item.name}
							isChecked={item.isChecked}
							toogleCheckedToDo={toogleCheckedToDo}
						/>
					))}
				<input
					className='input'
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					onKeyPress={addToDoHandler}
					placeholder='Enter to new task'
				/>
			</div>
		</React.Fragment>
	)
}

export default ToDo
