import BoxHeader from '@/Components/BoxHeader';
import DashboardBox from '@/Components/DashboardBox';
import {
 useGetKpisQuery, 
 useGetProductsQuery, 
 useGetTransactionsQuery } from '@/states/Api';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from "@mui/x-data-grid";


const Row3 = ( ) => {
    const { palette } =  useTheme();
    const{ data: kpiData}= useGetKpisQuery(); 
    const { data: productData} = useGetProductsQuery();
    const { data : transactionData } = useGetTransactionsQuery();
    console.log('transaction:',transactionData)

 
    
    


    const productColumns = [
      {
        field: "_id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "expense",
        headerName: "Expense",
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 0.5,
        renderCell:(params: GridCellParams) => `$${params.value}`,
      },
    ];

 
    const transactionColumns = [
      {
        field: "_id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "buyer",
        headerName: "Buyer",
        flex: 0.67,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 0.35,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      {
        field: "productIds",
        headerName: "Count",
        flex: 0.1,
        renderCell: (params: GridCellParams) =>  (params.value as Array<string>),}
    ];

    return (
        <>
             <DashboardBox  gridArea='g'>

             <BoxHeader
             title='List OF Product'
             subtitle={' Kpis list of Products  '}
             sidText={`${productData?.length} prodcts `}
             
             />
               
              <Box
              mt='1rem'
              p='0 0.5rem'
              height='75%'
              sx={{
                "& .MuiDataGrid-root": {
                  color: palette.grey[300],
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: `1px solid ${palette.grey[800]} !important`,
                },
                "& .MuiDataGrid-columnHeaders": {
                  borderBottom: `1px solid ${palette.grey[800]} !important`,
                },
                "& .MuiDataGrid-columnSeparator": {
                  visibility: "hidden",
                },
              }}
                            
              >
               <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={ productData || []}
            columns={productColumns}
            getRowId={row => row._id}
            />
  
              </Box>

             </DashboardBox>
             <DashboardBox gridArea='h'>
             <BoxHeader
             title=' Recente Orders '
             subtitle={' Kpis Recente Orde  '}
             sidText={`$ ${ transactionData?.length}  latest transaction `}
             
             />
               
              <Box
              mt='0.5rem'
              p='0 0.5rem'
              height='80%'
              sx={{
                "& .MuiDataGrid-root": {
                  color: palette.grey[300],
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: `1px solid ${palette.grey[800]} !important`,
                },
                "& .MuiDataGrid-columnHeaders": {
                  borderBottom: `1px solid ${palette.grey[800]} !important`,
                },
                "& .MuiDataGrid-columnSeparator": {
                  visibility: "hidden",
                },
              }}
                    >        
              <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={ transactionData || []}
              columns={ transactionColumns}
              getRowId={row => row._id}
              />
         
              </Box>

             </DashboardBox>
             <DashboardBox gridArea='i'></DashboardBox>
             <DashboardBox gridArea= 'j'></DashboardBox>
               
        </>
    )

}

export default Row3