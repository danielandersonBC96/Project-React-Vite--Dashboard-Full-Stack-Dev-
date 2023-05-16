import BoxHeader from '@/Components/BoxHeader';
import DashboardBox from '@/Components/DashboardBox';
import {
 useGetKpisQuery, 
 useGetProductsQuery, 
 useGetTransactionsQuery } from '@/states/Api';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridCellParams } from '@mui/x-data-grid';

const Row3 = ( ) => {
    const { palette } =  useTheme();
    const{ data: kpiData}= useGetKpisQuery(); 
    const { data: productData } = useGetProductsQuery();
    const { data: transactionData } = useGetTransactionsQuery();
    console.log( 'transactionData', transactionData);

    const productColumns = [
        {
            field : '_id',
            headerName: 'id',
            flex:1,
        },
        {
            field : 'expense',
            headerName: 'Expense',
            flex: 0.5,
            renderCell:( params:GridCellParams) => `$${params.value},`

        },
        {
            field: 'price',
            headerName: 'Price',
            flex:0.5,
            renderCell:( params: GridCellParams) => `$${params.value},`


        },

    ]

    return (
        <>
             <DashboardBox  gridArea='g'>

             <BoxHeader
             title='List OF Product'
             subtitle={' Kpis list of Products  '}
             sidText={`${productData?.length} prodcts `}
             
             />
               
              <Box
              mt='0.5rem'
              p='0 0.5rem'
              height='75%'
              sx={{
                "& . MuiDataGrid-root":{
                    color: palette.grey['300'],
                    border:'none',

                }
              }}             
                            
              >
                <DataGrid
                rows={productData || [ ]}
                columns={productColumns}
                />
              </Box>

             </DashboardBox>
             <DashboardBox gridArea='h'></DashboardBox>
             <DashboardBox gridArea='i'></DashboardBox>
             <DashboardBox gridArea= 'j'></DashboardBox>
               
        </>
    )

}

export default Row3