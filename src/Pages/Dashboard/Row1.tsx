import DashboardBox from '@/Components/DashboardBox'
import { useGetKpisQuery } from '@/states/Api'

const Row1 = () => {

    const {data} = useGetKpisQuery()

    return (

       <>
           <DashboardBox  gridArea='a'>'</DashboardBox>
           <DashboardBox gridArea='b'></DashboardBox>
           <DashboardBox gridArea='c'></DashboardBox>
          
       
       </>

    )

}

export default Row1