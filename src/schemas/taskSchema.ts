import { object, string } from 'yup';


export const GetSchema = object().shape({
    status: string().
    required().
    test('isValid', (status) => {
        if (status === 'in_progress' || status === "completed") {
            return true;
        } else {
            return false;
        }
    })
});

export const GetByIdSchema = object().shape({
    id_task: string().required().uuid(),
});

export const AddSchema = object().shape({
    descricao: string().required(),
    data: string().required(),
    status: string().required().test('addIsValid', (status) => {
        if (status === 'in_progress' || status === 'completed') {
            return true;
        } else {
            false;
        }
    })
});

export const UpdateSchema = object().shape({
    id: string().required(),
    descricao: string(),
    data: string().required(),
    status: string().required().test('addIsValid', (status) => {
        if (status === 'in_progress' || status === 'completed') {
            return true;
        } else {
            false;
        }
    })
}); 

export const UpdateSchemaParams = string().required();


export const DeleteSchema = object().shape({
    id_task: string().required(),
});