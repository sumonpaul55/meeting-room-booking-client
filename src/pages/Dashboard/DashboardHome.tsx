import { PieChart } from "react-minimal-pie-chart"
import StatisticsCard from "../../components/common/StaticticCard"
import { FaSquare } from "react-icons/fa"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const DashboardHome = () => {
    const cartData = [
        { title: '454', value: 50, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 25, color: '#6A2135' },
    ]
    const RechartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='p-4 md:p-6 overflow-hidden'>
            <StatisticsCard />
            <div className="mt-5 md:mt-10 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="p-5 border rounded">
                        <div className="flex justify-between">
                            <h3 className="font-semibold md:text-lg">Users Statistics</h3>
                            <div>
                                <span className="flex items-center gap-2">Total User:<FaSquare color='#E38627' /></span>
                                <span className="flex items-center gap-2">Admin:<FaSquare color='#C13C37' /></span>
                                <span className="flex items-center gap-2">User:<FaSquare color='#6A2135' /></span>

                            </div>
                        </div>
                        <PieChart
                            className="max-w-80 pb-10 mx-auto"
                            animate={true}
                            data={cartData}
                        />
                    </div>
                    <div className="border rounded py-5">
                        <div className="space-y-10">
                            <h3 className="font-semibold md:text-lg mx-4">Rooms and Booking statistics</h3>
                            <LineChart width={500} height={300} data={RechartData} className="max-h-[400px]">
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome