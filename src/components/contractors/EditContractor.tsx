import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { getContractor, updateContractor } from "../../api/contractorAPI";
import ContractorForm from "./ContractorForm";
import Loader from "../common/Loader";
import Contractor from "../../models/Contractor";
import Header from "../common/Header";

const Container = styled("div")({
  padding: "32px",
});

function EditContractor() {
  const { contractorId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState<Contractor>({
    id: 0,
    name: "",
    created_at: new Date(),
    tenant_id: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContractor(parseInt(contractorId!));
      if (data !== null) {
        setInitialValues(data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [contractorId]);

  const handleSubmit = async (data: Contractor) => {
    await updateContractor(parseInt(contractorId!), data);
    navigate(`/contractors?changedContractorId=${contractorId}`);
  };

  return (
    <Container className="container">
      <Header title="Edit contractor" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContractorForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </Container>
  );
}

export default EditContractor;
