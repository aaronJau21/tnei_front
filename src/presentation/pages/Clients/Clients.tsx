import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import TitleComponent from "../../shared/components/TitleComponent";
import { useQuery } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { OthersService } from "../../../use-case/services/others/others.service";

const Clients = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | number>(
    0
  );

  // Configuración de react-hook-form
  const { control, handleSubmit } = useForm();

  // Obtiene todos los productos
  const { data: productsData } = useQuery(
    "products",
    OthersService.getAllProducts
  );

  // Obtiene el pack según el id del producto seleccionado
  const { data: packData } = useQuery(
    ["packById", selectedProductId],
    () => OthersService.getPackByIdProduct(selectedProductId),
    {
      enabled: !!selectedProductId,
    }
  );

  const { data: clAccountData } = useQuery({
    queryKey: ["cl_accounts"],
    queryFn: OthersService.getClAccounts,
  });

  // Maneja el envío del formulario
  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
  };

  return (
    <>
      <TitleComponent title="New User - TNEI" className="bg-blue-500" />

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <FormControl fullWidth>
              <InputLabel>Producto:</InputLabel>
              <Controller
                name="productId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    value={selectedProductId || ""}
                    onChange={(event) => {
                      setSelectedProductId(event.target.value);
                      field.onChange(event);
                    }}
                  >
                    {productsData?.products.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel>Package:</InputLabel>
              <Controller
                name="packageId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field}>
                    {packData?.pack.map((pack) => (
                      <MenuItem key={pack.id} value={pack.id}>
                        {pack.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel>Cl Account</InputLabel>
              <Select>
                {clAccountData?.cl_accounts.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Otros campos de formulario */}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-5"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Clients;
