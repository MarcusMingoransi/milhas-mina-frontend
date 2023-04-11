import * as Yup from "yup";
import {
  FORM_MIN_POSITIVE_VALUE,
  FORM_REQUIRED_FIELD,
} from "../../../utils/constants";

export const initialValues = {
  accomodationPrice: 0,
  pointsProgram: "",
  batchInEuro: 40,
  minAllAccorPoints: 2000,
  euroPrice: 0.0,
};

export const schema = Yup.object().shape({
  accomodationPrice: Yup.number()
    .required(FORM_REQUIRED_FIELD)
    .min(0, FORM_MIN_POSITIVE_VALUE),
  pointsProgram: Yup.string().required(FORM_REQUIRED_FIELD),
  batchInEuro: Yup.number()
    .required(FORM_REQUIRED_FIELD)
    .min(0, FORM_MIN_POSITIVE_VALUE),
  minAllAccorPoints: Yup.number()
    .required(FORM_REQUIRED_FIELD)
    .min(0, FORM_MIN_POSITIVE_VALUE),
  euroPrice: Yup.number()
    .required(FORM_REQUIRED_FIELD)
    .min(0, FORM_MIN_POSITIVE_VALUE),
});
