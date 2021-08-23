import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField {...field} required={required} label={label} />}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
