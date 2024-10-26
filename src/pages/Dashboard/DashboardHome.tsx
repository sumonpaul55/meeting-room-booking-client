import StatisticsCard from "../../components/common/StaticticCard"


const DashboardHome = () => {
    return (
        <div className='p-4 md:p-6'>
            <StatisticsCard />
            <div className="mt-8 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gray-300 py-5"></div>
                    <div className="bg-gray-300 py-5"></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome