export interface EnumActivity {
	_id?: string
	title: string
	description: string
	galleryImage: []
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

export interface Room {
	id: string
	name: string
	description: string
	roomsCount: number
	bedsCount: number
	maxOccupancy: number
	bathroomsCount: number
	amenities: string[]
	location: string
	category: 'Beach' | 'Forest' | 'Mountain' | 'Island' | 'Village' | 'Modern' | 'Cruice'
	zone: string
	images: string[]
	startDate: string
	endDate: string
	price: number
}
