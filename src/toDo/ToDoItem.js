const ToDoItem = ({ idx, name, isChecked, toogleCheckedToDo }) => {
	return (
		<>
			<div className='todo-wrapper'>
				<div className='todo-item' onClick={() => toogleCheckedToDo(idx)}>
					<input
						className='checkbox'
						type='checkbox'
						checked={isChecked}
						readOnly
					/>
					<span>{name}</span>
				</div>
			</div>
		</>
	)
}

export default ToDoItem
