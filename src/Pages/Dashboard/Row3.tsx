import BoxHeader from '@/Components/BoxHeader';
import DashboardBox from '@/Components/DashboardBox';
import FlexBetween from '@/Components/FlexBetween.';
import {
 useGetKpisQuery, 
 useGetProductsQuery, 
 useGetTransactionsQuery } from '@/states/Api';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Cell, Pie, PieChart } from 'recharts';


const Row3 = ( ) => {
    const { palette } =  useTheme();
    const{ data: kpiData}= useGetKpisQuery(); 
    const { data: productData} = useGetProductsQuery();
    const { data : transactionData } = useGetTransactionsQuery();
    console.log('transaction:',transactionData)

    const pieData = [

      { name: "Group A" , value:500},
      { name: 'Group B ' , value:400},

  ]
  const pieSupplies = [

    { name: "Group A" , value:500},
    { name: 'Group B ' , value:200},

]
const pieService = [

  { name: "Group A" , value:500},
  { name: 'Group B ' , value:100},

]


  const pieColors =  [palette.primary[800], palette.primary[300]]
    


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
             <DashboardBox gridArea='i'>

             <BoxHeader
             title="Expense Brakdonw By Category "
             sidText="+14%"
            subtitle='Kpis   "Expense Brakdonw By Category     '
              />
           <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
            <Box>
           <PieChart width={110} height={100} 
              margin={{
                top:0,
                right:-10,
                left:10,
                bottom:0,
              }}
             >
        <Pie
          data={ pieData}
          innerRadius={18}
          outerRadius={30}
          fill='#8884d8'
          paddingAngle={5}
          dataKey="value"
        >
            {pieData.map(( entry, index)=> (

                <Cell
                key={`cell -${index}`}
                fill={pieColors[index % pieColors.length]}
                
                />

            ))}
    
        </Pie>
        <Pie
          data={pieSupplies}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         
        </Pie>
      
      </PieChart>   
      <Typography>
        Salaries
      </Typography>
      </Box> 
      <Box>
      <PieChart width={110} height={100} 
              margin={{
                top:0,
                right:-10,
                left:10,
                bottom:0,
              }}
             >
        <Pie
          data={ pieSupplies}
          innerRadius={18}
          outerRadius={30}
          fill='#8884d8'
          paddingAngle={5}
          dataKey="value"
        >
            {pieSupplies.map(( entry, index)=> (

                <Cell
                key={`cell -${index}`}
                fill={pieColors[index % pieColors.length]}
                
                />

            ))}
    
        </Pie>
        <Pie
          data={pieSupplies}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         
        </Pie>
      
      </PieChart>   
     
      <Typography >
          supplies
        </Typography> 
      </Box>
      <Box>
      <PieChart width={110} height={100} 
              margin={{
                top:0,
                right:-10,
                left:10,
                bottom:0,
              }}
             >
        <Pie
          data={ pieService}
          innerRadius={18}
          outerRadius={30}
          fill='#8884d8'
          paddingAngle={5}
          dataKey="value"
        >
            {pieService.map(( entry, index)=> (

                <Cell
                key={`cell -${index}`}
                fill={pieColors[index % pieColors.length]}
                
                />

            ))}
    
        </Pie>
        <Pie
          data={pieService}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         
        </Pie>
      
      </PieChart>   
     
      <Typography >
         service
        </Typography> 
      </Box>

      
        </FlexBetween>
              
             </DashboardBox>
             <DashboardBox gridArea= 'j'>

             <BoxHeader
             title="Expense Brakdonw By Category "
             sidText="+14%"
            subtitle='Kpis   "Expense Brakdonw By Category     '
              />

        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
      
             </DashboardBox>
               
        </>
    )

}

export default Row3