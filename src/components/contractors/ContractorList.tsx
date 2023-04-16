import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { getAllContractors } from "../../api/contractorAPI";
import Contractor from "../../models/Contractor";
import Header from "../common/Header";
import { useTheme } from "@mui/material/styles";
import Loader from "../common/Loader";
import "../../sass/ContractorsList.scss";

const Container = styled("div")({
  padding: "32px",
});

function ContractorList() {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllContractors();
      setContractors(data);
      setIsLoading(false);
      const changedContractor = searchParams.get("changedContractorId");
      if (changedContractor) {
        const element = document.getElementById(
          `contractor-${changedContractor}`
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header title="Contractors" />
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Tenant</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {contractors.map((contractor) => (
                    <StyledTableRow
                      key={contractor.id}
                      id={`contractor-${contractor.id}`}
                      className={
                        searchParams.get("changedContractorId") ===
                        contractor.id.toString()
                          ? "changed-contractor"
                          : ""
                      }
                    >
                      <TableCell>{contractor.name}</TableCell>
                      <TableCell>{contractor.tenant_id}</TableCell>
                      <TableCell>
                        {new Date(contractor.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Link to={`/contractors/${contractor.id}`}>
                          <Button variant="outlined" color="primary">
                            Edit
                          </Button>
                        </Link>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default ContractorList;
