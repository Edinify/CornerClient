import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
    // name: yup.string().required('Bu xana tələb olunur.'),
    // category:"",
    price: yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
    unitAmount: yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
  });
