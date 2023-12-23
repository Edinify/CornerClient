import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
    // productName: yup.string().required('Bu xana tələb olunur.'),
    totalAmount: yup.number().typeError('Rəqəm olmalıdır.').moreThan(0, 'Müsbət ədəd olmalıdır.').required("Bu xana tələb olunur."),
  });
