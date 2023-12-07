import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  name: yup.string().required("Bu xana tələb olunur."),
    amount: yup
    .number()
    .typeError("Rəqəm olmalıdır.")
    .moreThan(0, "Müsbət ədəd olmalıdır.")
    .required("Bu xana tələb olunur."),
    price: yup
    .number()
    .typeError("Rəqəm olmalıdır.")
    .moreThan(0, "Müsbət ədəd olmalıdır.")
    .required("Bu xana tələb olunur."),
    date: yup
    .date("Tarix formatı doğru deyil.") // Add a date validation rule
    .required("Bu xana tələb olunur."),
});
