import StatsItem from "./StatsItem"



const statData = [
    {
        endCountNum: 10,
        endCountText: "+",
        text: "Yrs. of Experience"
    },
    {
        endCountNum: 100,
        endCountText: "+",
        text: "Wesites Built"
    },
    {
        endCountNum: 95,
        endCountText: "%",
        text: "Clients Satisfied"
    },
]

const Stats = () => {
    return (
        <section className="flex justify-center xl:justify-normal xl:w-[380px] gap-4 xl:gap-0">
            {statData.map((item, index) => {
                return <StatsItem endCountNum={item.endCountNum} endCountText={item.endCountText} text={item.text} key={index} />
            })}
        </section>
    )
}

export default Stats