import React, { useEffect } from "react";
import { Card } from "../../shared";
import { useFormik } from "formik";
import { initialValues, schema } from "./schema";
import { Button, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FormControlStyled } from "./styles";
import api from "../../../services/api";
import { CURRENCY_EURO_URL } from "../../../utils/constants";
import EuroIcon from "@mui/icons-material/Euro";

const AllAccorSimulator = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    try {
      api
        .get(CURRENCY_EURO_URL)
        .then((result) => {
          const currencyResult = result.data.EURBRL;
          formik.setFieldValue(
            "euroPrice",
            currencyResult ? Number(result.data.EURBRL.ask).toFixed(2) : 0
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <FormControlStyled variant="outlined">
              <TextField
                id="accomodationPrice"
                name="accomodationPrice"
                error={
                  formik.touched.accomodationPrice &&
                  formik.errors.accomodationPrice !== undefined
                }
                label="Valor Hospedagem"
                helperText={formik.errors.accomodationPrice}
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.accomodationPrice}
              />
            </FormControlStyled>
          </Grid>

          <Grid xs={12} md={6}>
            <FormControlStyled variant="outlined">
              <TextField
                id="pointsProgram"
                name="pointsProgram"
                error={
                  formik.touched.pointsProgram &&
                  formik.errors.pointsProgram !== undefined
                }
                label="Programa de Pontos"
                helperText={formik.errors.pointsProgram}
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pointsProgram}
              />
            </FormControlStyled>
          </Grid>

          <Grid xs={12} md={6}>
            <FormControlStyled variant="outlined">
              <TextField
                id="batchInEuro"
                name="batchInEuro"
                error={
                  formik.touched.batchInEuro &&
                  formik.errors.batchInEuro !== undefined
                }
                label="Valor Euro - Lote"
                helperText={formik.errors.batchInEuro}
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.batchInEuro}
                disabled
              />
            </FormControlStyled>
          </Grid>

          <Grid xs={12} md={6}>
            <FormControlStyled variant="outlined">
              <TextField
                id="minAllAccorPoints"
                name="minAllAccorPoints"
                error={
                  formik.touched.minAllAccorPoints &&
                  formik.errors.minAllAccorPoints !== undefined
                }
                label="Mínimo de pontos All Accor"
                helperText={formik.errors.minAllAccorPoints}
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.minAllAccorPoints}
                disabled
              />
            </FormControlStyled>
          </Grid>

          <Grid xs={12} md={6}>
            <FormControlStyled variant="outlined">
              <TextField
                id="euroPrice"
                name="euroPrice"
                error={
                  formik.touched.euroPrice &&
                  formik.errors.euroPrice !== undefined
                }
                label="Valor do euro"
                helperText={formik.errors.euroPrice}
                variant="outlined"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.euroPrice}
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      sx={{ color: (theme) => theme.palette.text.disabled }}
                      position="start"
                    >
                      <EuroIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControlStyled>
          </Grid>
          <Grid xs={12} md={6}>
            <Button
              type="submit"
              variant="contained"
              disabled={!formik.isValid}
            >
              Aplicar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default AllAccorSimulator;
