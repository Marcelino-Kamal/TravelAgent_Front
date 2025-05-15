

const PackageCard = ({data})=>{

    return(
        <div className="flex m-[10px] bg-white w-full rounded-2xl max-w-m" >
            <img src={data.imgUrl}
                alt={data.name}
                className="w-[152px] h-[104px] rounded-2xl object-cover p-1"
                />
            {/* content section */}
            <div className="flex-col justify-between w-full font-[Faustina] font-bold">
                <p>{data.name}</p>
                <p>{data.price} $</p>
                <p>{data.description}</p>
                <p>{data.dateTime.split('T')[0]}</p>
            </div>
            {/* Buttons Wrapper */}
            <div className="flex w-[40%] mt-[4%] gap-1.5 font-[Faustina] mr-0.5 font-bold">
                <button className="bg-green-500 rounded-2xl flex-wrap h-1/2 w-full overflow-auto">View Details</button>
                <button className="bg-blue-500 rounded-2xl flex-wrap h-1/2 w-full overflow-auto">Add to basket</button>
            </div>
        </div>
    );



}
export default PackageCard;