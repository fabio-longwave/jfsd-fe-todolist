import styles from "./AddEditTodo.module.css";
import useInput from "../../../hooks/useInput.js";
import Input from "../../Input/Input.jsx";
import Textarea from "../../Textarea/Textarea.jsx";

const AddEditTodo = ({todo = null}) => {
    const {value: dateValue, handleChange: handleDateChange} = useInput(todo?.date || '');
    const {value: titleValue, handleChange: handleTitleChange} = useInput(todo?.title || '');
    const {value: descriptionValue, handleChange: handleDescriptionChange} = useInput(todo?.description || '');

    return (
        <form id="add-edit-todo">
            <Input type="date" name="date" id="date" label="Data" value={dateValue} onChange={handleDateChange}/>
            <Input type="text" name="title" id="title" label="Titolo" value={titleValue} onChange={handleTitleChange}/>
            <Textarea rows={5} cols={10} name="description" label="Descrizione" id="description"
                      value={descriptionValue}
                      onChange={handleDescriptionChange}/>
        </form>
    )
}

export default AddEditTodo;