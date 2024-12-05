import TodoItem from "../TodoItem/TodoItem.jsx";

const TodoList = () => {
    const items = [
        {
            id: 1,
            date: new Date(2024, 1, 12).toUTCString(),
            title: "Appuntamento in banca",
            description: "Viale La Playa 15, Cagliari"
        },
        {
            id: 2,
            date: new Date(2024, 5, 31).toUTCString(),
            title: "Barbiere",
            description: "Solo spuntata"
        },
        {
            id: 3,
            date: new Date(2024, 3, 22).toUTCString(),
            title: "Vacanza",
            description: "Viaggio in Islanda"
        }
    ];

    return <>
        <div className="card">
            {items.map(item => (
                <TodoItem key={item.id} todo={item} onEdit={() => null} onDelete={()=> null} />
            ))}
        </div>
    </>
}

export default TodoList;