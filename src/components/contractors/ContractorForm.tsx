import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Contractor from "../../models/Contractor";
import Tenant from "../../models/Tenant";
import { getAllTenatns } from "../../api/tenantsAPI";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  "& > *": {
    margin: "0.5rem !important", // !important is a temprory fix 
  },
  animation: "fadeIn 0.5s ease-in",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});


interface ContractorFormProps {
  initialValues: Contractor;
  onSubmit: (data: Contractor) => void;
}

function ContractorForm({ initialValues, onSubmit }: ContractorFormProps) {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<Contractor>({
    defaultValues: initialValues,
  });

  const [tenants, setTenants] = useState<Tenant[]>();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const tenantsData = await getAllTenatns();
      setTenants(tenantsData);
    };
    fetchData();
  }, []);

  const SubmitButton = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  });

  const handleSelectChange = (
    e:
      | React.ChangeEvent<{ name?: string; value: unknown }>
      | SelectChangeEvent<number>
  ) => {
    const { name, value } = e.target;
    if (name) {
      setValue(name as keyof Contractor, value as number);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name", { required: "Name is required" })}
        name="name"
        label="Name"
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />
      <FormControl
        fullWidth
        variant="outlined"
        required
        error={!!errors.tenant_id}
      >
        <InputLabel htmlFor="tenant_id">Tenant</InputLabel>
        <Controller
          render={({ field }) => (
            <Select
              label="Tenant"
              {...field}
              onChange={(e) => handleSelectChange(e)}
              inputProps={{
                name: "tenant_id",
                id: "tenant_id",
              }}
            >
              {tenants?.map((tenant) => (
                <MenuItem key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </MenuItem>
              ))}
            </Select>
          )}
          control={control}
          name="tenant_id"
          rules={{ required: "Tenant is required" }}
        />
        <FormHelperText error={!!errors.tenant_id}>
          {errors.tenant_id?.message}
        </FormHelperText>
      </FormControl>
      <SubmitButton fullWidth type="submit">
        Submit
      </SubmitButton>
    </FormContainer>
  );
}
export default ContractorForm;

