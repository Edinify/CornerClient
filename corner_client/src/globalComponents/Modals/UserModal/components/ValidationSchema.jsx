import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
    accessCode: yup.string().required('Bu xana tələb olunur.'),
  });
