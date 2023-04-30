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

} from 'recharts'


const Row1 = () => {

    const {data} = useGetKpisQuery()
    console.log('data', data )

    return (

       <>
           <DashboardBox  gridArea='a'>
             <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={
                    {
                        top:10,
                        right:30,
                        left:0,
                        bottom:0,
                    }
                }
                >
                    <CartesianGrid strokeDasharray={"3 3"}/>
                    <XAxis dataKey={"name"}/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type={"monotone"} dataKey={"uv"} stroke='#8884d8' fill='#8884d8'/>
                </AreaChart>  
             </ResponsiveContainer>
           </DashboardBox>
           <DashboardBox gridArea='b'></DashboardBox>
           <DashboardBox gridArea='c'></DashboardBox>
          
       
       </>

    )

}

export default Row1;