import DashboardBox from '@/Components/DashboardBox';
import { useGetKpisQuery } from '@/states/Api';
import {
ResponsiveContainer,
AreaChart,
CartesianGrid,
XAxis,
YAxis,
Tooltip,
Area

} from 'recharts';
import{ useMemo } from 'react';
import {useTheme} from '@mui/material';



const Row1 = () => {
    const{ palette } = useTheme();
    const {data} = useGetKpisQuery()
    console.log('data', data )
    
    const revenueExpenses = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({month, revenue, expenses})=>{
                return {
                    name: month.substring(0,3),
                    revenue:revenue,
                    expenses:expenses



                }
            })
        )
    }, [data])


    return (

       <>
           <DashboardBox  gridArea='a'>
             <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart
                width={500}
                height={400}
                data={revenueExpenses}
                margin={
                    {
                        top:15,
                        right:25,
                        left:-10,
                        bottom:60,
                    }
                }
                >
                    <CartesianGrid strokeDasharray={"3 3"}/>
                    <XAxis dataKey={"name"}
                    tickLine={false}
                    style={{
                        fontSize: "10px"
                    }}

                    />
                    <YAxis
                    tickLine={false}
                    axisLine={
                        {
                            strokeWidth: "0"
                        }
                    }
                    style={{
                        fontSize: "10px"
                    }} 
                    domain={[
                        8000,
                        23000

                    ]}
                    />
                        <defs>
                        <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                        >
                            <stop 
                            offset="5%"
                            stopColor={palette.primary[300]}
                            stopOpacity={0.5}
                            />
                              <stop 
                            offset="95%"
                            stopColor={palette.primary[300]}
                            stopOpacity={0}
                            />

                        </linearGradient>

                      </defs>
                    <Tooltip/>
                    <Area type={"monotone"}
                     dataKey={"revenue"} 
                     dot={true}
                     stroke={palette.primary.main} 
                     fillOpacity={1}
                     fill='url(#colorRevenue)'/>
                      <Area type={"monotone"}
                     dataKey={"expenses"} 
                     dot={true}
                     stroke={palette.primary.main} 
                     fillOpacity={1}
                     fill='url(#colorExpenses)'/>
                </AreaChart>  
             </ResponsiveContainer>
           </DashboardBox>
           <DashboardBox gridArea='b'></DashboardBox>
           <DashboardBox gridArea='c'></DashboardBox>
          
       
       </>

    )

}

export default Row1;