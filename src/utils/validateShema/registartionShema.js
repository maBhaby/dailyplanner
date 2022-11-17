import * as yup from 'yup';

export const registartionShema = yup.object().shape({
  email: yup.string().email('asdas'),
  password: yup.string(),
});
