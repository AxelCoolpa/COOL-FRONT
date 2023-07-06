export interface EnumData {
	_id?: string
	title: string
	description: string
	galleryImage: string
	individualPrice: string
	groupPrice: string
	categories: Array<string>
	location: string

	videoLink?: string
	starterPack?: string
	startTime?: string
	endTime?: string

	rating?: Array<number>
	reviews?: Array<string>
}
