import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
    // name: yup.string().required('Bu xana tələb olunur.'),
    // category:"",
    productCount: yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
    productUnitAmount: yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
    price:yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
    name: yup.string().required("Bu xana tələb olunur."),
  });
