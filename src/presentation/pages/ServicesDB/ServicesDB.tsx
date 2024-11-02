import { Button, TextField, Typography } from "@mui/material";
import TitleComponent from "../../shared/components/TitleComponent";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { IExampleRequest } from "../../../use-case/interfaces";
import { ServicesDBServices } from "../../../use-case/services/servicesDB/servicesDB.service";

import { toast } from "react-toastify";

const ServicesDB = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["examples"],
    queryFn: ServicesDBServices.findAll,
  });

  const { register, handleSubmit } = useForm<IExampleRequest>({
    defaultValues: {
      cl_Drywall_S: data?.cl_Drywall_S,
      cl_Drywall_S2: data?.cl_Drywall_S2,
      cl_Gardening_S: data?.cl_Gardening_S,
      cl_Gardening_S2: data?.cl_Gardening_S2,
      cl_Handyman_S: data?.cl_Handyman_S,
      cl_Handyman_S2: data?.cl_Handyman_S2,
      cl_Hauling_S: data?.cl_Hauling_S,
      cl_Hauling_S2: data?.cl_Hauling_S2,
      cl_house_Cleaning: data?.cl_house_Cleaning,
      cl_house_Cleaning2: data?.cl_house_Cleaning2,
      cl_Landscaping_S: data?.cl_Landscaping_S,
      cl_Landscaping_S2: data?.cl_Landscaping_S2,
      cl_Painting_S: data?.cl_Painting_S,
      cl_Painting_S2: data?.cl_Painting_S2,
      cl_Remodeling: data?.cl_Remodeling,
      cl_Remodeling2: data?.cl_Remodeling2,
      sb_Drywall_S: data?.sb_Drywall_S,
      sb_Drywall_S2: data?.sb_Drywall_S2,
      sb_Gardening_S: data?.sb_Gardening_S,
      sb_Gardening_S2: data?.sb_Gardening_S2,
      sb_Handyman_S: data?.sb_Handyman_S,
      sb_Handyman_S2: data?.sb_Handyman_S2,
      sb_Hauling_S: data?.sb_Hauling_S,
      sb_Hauling_S2: data?.sb_Hauling_S2,
      sb_house_Cleaning: data?.sb_house_Cleaning,
      sb_house_Cleaning2: data?.sb_house_Cleaning2,
      sb_Landscaping_S: data?.sb_Landscaping_S,
      sb_Landscaping_S2: data?.sb_Landscaping_S2,
      sb_Painting_S: data?.sb_Painting_S,
      sb_Painting_S2: data?.sb_Painting_S2,
      sb_Remodeling: data?.sb_Remodeling,
      sb_Remodeling2: data?.sb_Remodeling2,
      tm_Drywall_S: data?.tm_Drywall_S,
      tm_Drywall_S2: data?.tm_Drywall_S2,
      tm_Gardening_S: data?.tm_Gardening_S,
      tm_Gardening_S2: data?.tm_Gardening_S2,
      tm_Handyman_S: data?.tm_Handyman_S,
      tm_Handyman_S2: data?.tm_Handyman_S2,
      tm_Hauling_S: data?.tm_Hauling_S,
      tm_Hauling_S2: data?.tm_Hauling_S2,
      tm_house_Cleaning: data?.tm_house_Cleaning,
      tm_house_Cleaning2: data?.tm_house_Cleaning2,
      tm_Landscaping_S: data?.tm_Landscaping_S,
      tm_Landscaping_S2: data?.tm_Landscaping_S2,
      tm_Painting_S: data?.tm_Painting_S,
      tm_Painting_S2: data?.tm_Painting_S2,
      tm_Remodeling: data?.tm_Remodeling,
      tm_Remodeling2: data?.tm_Remodeling2,
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ServicesDBServices.update,
    onError: console.log,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["examples"] });
      toast.success("Se Actualizo correctamente");
    },
  });

  const handleUpdate = (data: IExampleRequest) => mutate(data);

  if (isLoading)
    return (
      <>
        <TitleComponent
          title="Examples Craigslist Ads - Trusmine Page - Serbiz Web"
          className=""
        />

        <p>Cargando...</p>
      </>
    );
  if (data)
    return (
      <>
        <TitleComponent
          title="Examples Craigslist Ads - Trusmine Page - Serbiz Web"
          className=""
        />
        <div>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  House Cleaning{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="House Cleaning"
                    variant="filled"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_house_Cleaning")}
                  />
                  <TextField
                    label="House Cleaning"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Gardening_S")}
                  />
                  <TextField
                    label="House Cleaning"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Landscaping_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  House Cleaning{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="House Cleaning"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Painting_S")}
                  />
                  <TextField
                    label="House Cleaning"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Remodeling")}
                  />
                  <TextField
                    label="House Cleaning"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Handyman_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Landscaping{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Hauling_S")}
                  />
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Drywall_S")}
                  />
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_house_Cleaning")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Landscaping{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Gardening_S")}
                  />
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Landscaping_S")}
                  />
                  <TextField
                    label="Landscaping"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Painting_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Gardening{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Remodeling")}
                  />
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Handyman_S")}
                  />
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Hauling_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Gardening{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Drywall_S")}
                  />
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_house_Cleaning")}
                  />
                  <TextField
                    label="Gardening"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Gardening_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Painting{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Landscaping_S")}
                  />
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Painting_S")}
                  />
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Remodeling")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Painting{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Handyman_S")}
                  />
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Hauling_S")}
                  />
                  <TextField
                    label="Painting"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Drywall_S")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Remodeling{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_house_Cleaning2")}
                  />
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Gardening_S2")}
                  />
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Landscaping_S2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Remodeling{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Painting_S2")}
                  />
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Remodeling2")}
                  />
                  <TextField
                    label="Remodeling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Handyman_S2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Concrete{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Concrete"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Hauling_S2")}
                  />
                  <TextField
                    label="Concrete"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("sb_Drywall_S2")}
                  />
                  <TextField
                    label="Concrete"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_house_Cleaning2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Flooring{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Flooring"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Gardening_S2")}
                  />
                  <TextField
                    label="Flooring"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Landscaping_S2")}
                  />
                  <TextField
                    label="Flooring"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Painting_S2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Tree{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Tree"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Remodeling2")}
                  />
                  <TextField
                    label="Tree"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Handyman_S2")}
                  />
                  <TextField
                    label="Tree"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Hauling_S2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Hauling{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Hauling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("tm_Drywall_S2")}
                  />
                  <TextField
                    label="Hauling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_house_Cleaning2")}
                  />
                  <TextField
                    label="Hauling"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Gardening_S2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  Handyman{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="Handyman"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Landscaping_S2")}
                  />
                  <TextField
                    label="Handyman"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Painting_S2")}
                  />
                  <TextField
                    label="Handyman"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Remodeling2")}
                  />
                </div>
              </div>

              <div className="mt-9">
                <Typography variant="h5" className="text-typography-primary">
                  {" "}
                  HVAC{" "}
                </Typography>
                <div className="flex flex-col gap-3 mt-3">
                  <TextField
                    label="HVAC"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Handyman_S2")}
                  />
                  <TextField
                    label="HVAC"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Hauling_S2")}
                  />
                  <TextField
                    label="HVAC"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    multiline
                    rows={6}
                    {...register("cl_Drywall_S2")}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end my-5">
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </>
    );
};

export default ServicesDB;
