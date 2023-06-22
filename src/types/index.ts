export interface EnumData {
	_id?: string
	title: string
	description: string
	gallery: Array<string>
	individualPrice: string
	groupPrice: string
	categories: Array<string>
	location: string

	activities?: Array<string>
	starterPack?: Array<string>
	startTime?: Array<string>
	endTime?: Array<string>

	rating: Array<number>
	reviews: Array<string>
}
