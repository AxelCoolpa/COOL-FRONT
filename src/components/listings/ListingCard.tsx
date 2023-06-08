import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import HeartButton from '../HeartButton'

interface EnumData {
	id: string
	name: string
	description: string
	imageSrc: Array<string>
	categories: Array<string>
	locationValue: string
	usserId: string
	activities: Array<string>
	starterPack: string
	startTime: string
	endTime: string
	rate: string
	price: string
}

interface ListingCardProps {
	data: EnumData
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
	return (
		<div
			onClick={() => console.log(`/listings/${data.id}`)}
			className='bg-[#f7f8f9] col-span-1 cursor-pointer group rounded-xl pb-4'
		>
			<div className='relative'>
				<img
					src={data.imageSrc[0]}
					className='object-cover w-full h-[200px] rounded-t-xl'
				/>
				<div className='absolute top-3 right-3'>
					<HeartButton size={25} />
				</div>
			</div>
			<div className='flex items-center justify-between px-3 pt-4'>
				<h4 className='text-base font-semibold'>{data.name}</h4>
				<div className='flex items-center gap-1'>
					<AiFillStar size={18} color='#faaf00' />
					<span className='text-sm font-medium'>{data.rate}</span>
				</div>
			</div>
			<ul className='flex flex-col justify-center px-3 py-4 text-xs gap-1 text-[#00000080]'>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data.activities}
					</div>
				</li>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data.starterPack}
					</div>
				</li>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data.startTime} to {data.endTime}
					</div>
				</li>
			</ul>
			<div className='flex justify-center text-white font-bold text-lg py-2'>
				<button className='bg-[#109460] w-full mx-4 rounded-lg'>{data.price}$</button>
			</div>
		</div>
	)
}

export default ListingCard
