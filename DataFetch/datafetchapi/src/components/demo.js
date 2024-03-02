import * as React from "react";
import { DataGridPro, GridToolbar, GridPagination } from "@mui/x-data-grid-pro";
import { Grid } from "@mui/material";

export default function CustomHeaderFilterSingleDataGridPro() {
  const columns = [
    {
      field: "company_code",
      headerName: "Company Code",
      width: "150",
    },
    {
      field: "plant",
      headerName: "Plant",
      width: "150",
    },
    {
      field: "doc_date",
      headerName: "Document Date",
      width: "150",
    },
    {
      field: "posting_date",
      headerName: "Posting Date",
      width: "150",
    },
    {
      field: "vendor_code",
      headerName: "Vendor Code",
      width: "150",
    },
    {
      field: "vendor_name",
      headerName: "Vendor Name",
      width: "150",
    },
    {
      field: "doc_type",
      headerName: "Document Type",
      width: "150",
    },
    {
      field: "Description",
      headerName: "Description",
      width: "150",
    },
    {
      field: "invoice_doc",
      headerName: "Invoice Document",
      width: "150",
    },
    {
      field: "Year",
      headerName: "Year",
      width: "150",
    },
    {
      field: "fi_doc",
      headerName: "FI Document",
      width: "150",
    },
    {
      field: "fi_doc_year",
      headerName: "FI Document Year",
      width: "150",
    },
  ];

  const rows = [];

for (let i = 1; i <= 30; i++) {
  rows.push({
    id: i,
    company_code: `${i}`,
    plant: `${100 + i}`,
    doc_date: `01/${i < 10 ? '0' + i : i}/2001`,
    posting_date: `01/${i < 10 ? '0' + i : i}/0001`,
    vendor_code: `Vendor${i}`,
    vendor_name: `Vendor${i} Name`,
    doc_type: `Type${i}`,
    Description: `Description${i}`,
    invoice_doc: `Invoice${i}`,
    Year: 2022 + i,
    fi_doc: `Doc${i}`,
    fi_doc_year: 2022 + i,
  });
}

// Now the 'rows' array contains 30 entries with incremental values.
console.log(rows);


  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const CustomToolbar = () => (
    <GridToolbar>
      {/* Add any additional custom components or controls here */}
      <div style={{ marginLeft: "auto" }}>
        <GridPagination
          page={page}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </GridToolbar>
  );

  return (
    <Grid
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid height="99vh" width="100%" padding="3rem">
        <DataGridPro
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          page={page}
          pagination
          DataGridPro
          slots={{
            Toolbar: CustomToolbar,
            Pagination: GridPagination,
          }}
          onPageSizeChange={handlePageSizeChange}
          onPageChange={handlePageChange}
          unstable_headerFilters
        />
      </Grid>
    </Grid>
  );
}

// import * as React from "react";

// import { useDemoData } from "@mui/x-data-grid-generator";

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );
// }

//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid
//         {...data}
//         loading={loading}
//         slots={{
//           toolbar: CustomToolbar,
//         }}
//       />
//     </div>
//   );
// }
