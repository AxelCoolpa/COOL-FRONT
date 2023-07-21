export interface EnumActivity {
	_id?: string
	title: string
	description: string
	galleryImage: string | string[]
	individualPrice: string
	groupPrice: string
	category: Array<string>
	location: string

	videoLink?: string
	starterPack?: string
	startTime?: string
	endTime?: string

	rating?: Array<number>
	reviews?: Array<string>

	providerId?: string
	itDeleted?: boolean
}

export interface EnumDestination {
	_id?: string
	title: string
	description: string
	galleryImage: string
	category: Array<string>
	location: string

	itDeleted?: boolean
}

export interface EnumRoom {
	_id: string
	name: string
	description: string
	roomsCount: number
	bedsCount: number
	maxOccupancy: number
	bathRoomsCount: number
	amenities: string[]
	location: string
	zone: string[]
	images: string | string[]
	startDate: string
	endDate: string
	price: number
	category: string

	providerId?: string
	itDeleted?: boolean
}
