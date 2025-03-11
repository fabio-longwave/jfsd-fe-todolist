import useInput from "../../../hooks/useInput.js";
import Input from "../../Input/Input.jsx";
import Textarea from "../../Textarea/Textarea.jsx";
import {format} from "date-fns"

const AddEditActivity = ({onSubmit, activity = null}) => {
    const formattedDate = activity?.dueDate ? format(new Date(activity?.dueDate), 'yyyy-MM-dd') : ''
    const {value: dueDateValue, handleChange: handleDateChange} = useInput(formattedDate);
    const {value: nameValue, handleChange: handleTitleChange} = useInput(activity?.name || '');
    const {value: descriptionValue, handleChange: handleDescriptionChange} = useInput(activity?.description || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameValue,
            description: descriptionValue,
            dueDate: new Date(dueDateValue).getTime(),
        }
        onSubmit(payload);
    }

    return (
        <form id="add-edit-todo" onSubmit={handleSubmit}>
            <Input type="date" name="dueDate" id="dueDate" label="Data" value={dueDateValue} onChange={handleDateChange}/>
            <Input type="text" name="name" id="name" label="Titolo" value={nameValue} onChange={handleTitleChange}/>
            <Textarea rows={5} cols={10} name="description" label="Descrizione" id="description"
                      value={descriptionValue}
                      onChange={handleDescriptionChange}/>
        </form>
    )
}

export default AddEditActivity;