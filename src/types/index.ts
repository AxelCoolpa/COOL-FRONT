export interface EnumData {
	id: string
	title: string
	description: string
	gallery: Array<string>
	individualPrice: string
	groupPrice?: string
	categories: Array<string>
	location: string
	extras: EnumExtras
	rating: Array<number>
	reviews: Array<string>
}

export interface EnumExtras {
	activities?: string
	starterPack?: string
	startTime?: string
	endTime?: string
}
