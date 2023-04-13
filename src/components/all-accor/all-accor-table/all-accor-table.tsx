import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import {
  DataGridWrapper,
  CellWrapper,
  CellWrapperText,
  Wrapper,
  Title,
  SubTitle,
} from "./styles";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const MileValue = (params: GridRenderCellParams) => {
  return (
    <CellWrapper>
      <CellWrapperText>R$ {params.value}</CellWrapperText>{" "}
      <EditOutlinedIcon color="disabled" fontSize="small" />
    </CellWrapper>
  );
};

const PointsPerBatch = (params: GridRenderCellParams) => {
  return (
    <CellWrapper>
      <CellWrapperText>{params.value}</CellWrapperText>{" "}
      <EditOutlinedIcon color="disabled" fontSize="small" />
    </CellWrapper>
  );
};

const columns: GridColDef[] = [
  { field: "companyName", headerName: "Companhia", width: 120, align: "left" },
  {
    field: "pointsPerBatch",
    headerName: "Pontos por Lote",
    type: "number",
    editable: true,
    align: "left",
    width: 120,
    renderCell: (params) => {
      return <PointsPerBatch {...params} />;
    },
  },
  {
    field: "requiredPoints",
    headerName: "Pontos Necessários",
    type: "number",
    align: "left",
  },
  {
    field: "mileValue",
    headerName: "Valor Milheiro",
    type: "number",
    editable: true,
    align: "left",
    width: 120,
    renderCell: (params) => {
      return <MileValue {...params} />;
    },
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    companyName: "Azul",
    pointsPerBatch: 11000,
    requiredPoints: 99000,
    mileValue: 13.0,
  },
  {
    id: 2,
    companyName: "Livelo",
    pointsPerBatch: 5000,
    requiredPoints: 45000,
    mileValue: 8.55,
  },
  {
    id: 3,
    companyName: "Smiles",
    pointsPerBatch: 12000,
    requiredPoints: 108000,
    mileValue: 25,
  },
  {
    id: 4,
    companyName: "Latam",
    pointsPerBatch: 12000,
    requiredPoints: 108000,
    mileValue: 25,
  },
];

const AllAccorTable = () => {
  return (
    <Wrapper>
      <Title>Tabela Referência</Title>
      <SubTitle>
        Valor transferência entre programas de fidelidade/cia aérea e All Accor
      </SubTitle>
      <DataGridWrapper>
        <DataGrid editMode="row" rows={rows} columns={columns} />
      </DataGridWrapper>
    </Wrapper>
  );
};

export default AllAccorTable;
