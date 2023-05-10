import BoxHeader from '@/Components/BoxHeader';
import DashboardBox from '@/Components/DashboardBox';
import { useGetKpisQuery, useGetProductsQuery } from '@/states/Api';
import { useMemo } from "react";
import {
   ResponsiveContainer,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Line,
   LineChart,
   PieChart,
   Pie,
   Cell, 
   ScatterChart,
   ZAxis,
   Legend,
   Scatter

   } from 'recharts';
   
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/Components/FlexBetween.';
const Row2 = ( ) => {
    const { palette } = useTheme();
    const { data: operationalData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();

    const pieData = [

        { name: "Group A" , value:500},
        { name: 'Group B ' , value:400},

    ]

    const pieColors =  [palette.primary[800], palette.primary[300]]


    const operationalExpenses = useMemo(() => {
        return (
          operationalData &&
          operationalData[0].monthlyData.map(
            ({ month,  operationalExpenses,  nonOperationalExpenses }) => {
              return {
                name: month.substring(0, 3),
                 "Operational Expenses": operationalExpenses,
                 "Non Operational Expenses" : nonOperationalExpenses,
              };
            }
          )
        );
      }, [operationalData]);

    return (

    <>        
           
        <DashboardBox gridArea="d">
           <BoxHeader
             title="Operational vs Non-Operational Expenses"
             sidText="+200%"
            subtitle='Kpis Operational Expenses and Non-Operational Expenses '
              />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
        <DashboardBox  gridArea='e'>

        <BoxHeader
             title="Campaings and Target"
             sidText="+14%"
            subtitle='Kpis Operational Capaings and Target  '
              />
             <FlexBetween mt='0.25rem' gap='1.5rem'pr='1.5rem' 
             >
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
          data={pieData}
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
      <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              183.450
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
       
      </FlexBetween>

    
                  
         </DashboardBox>

         
        <DashboardBox gridArea='f'>
           <BoxHeader
             title="Operational vs Non-Operational Expenses"
             sidText="+200%"
            subtitle='Kpis Operational Expenses and Non-Operational Expenses '
              />
              <ResponsiveContainer
                  width={'100%'}
                  height={'100%'}
                     >
                 <ScatterChart
                  margin={{
                    top: 20,
                    right:20,
                    bottom:20,
                    left: 10,
                  }}
                  >
                    <CartesianGrid/>
                     <XAxis/>
                     <YAxis/>
                     <ZAxis/>
                     <Tooltip/>
                     <Legend/>
                     <Scatter/>
                     <Scatter/>
                 </ScatterChart>
              </ResponsiveContainer>
        </DashboardBox>
    </>

    )

}

export default Row2