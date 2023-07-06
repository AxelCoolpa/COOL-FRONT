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

export interface Room {
	id: string;
	name: string;
	description: string;
	roomsCount: number;
	bedsCount: number;
	maxOccupancy: number;
	bathroomsCount: number;
	amenities: string[];
	location: string;
	category: 'Beach' | 'Forest' | 'Mountain' | 'Island' | 'Village' | 'Modern' | 'Cruice';
	zone: string;
	images: string[];
	startDate: string;
	endDate: string;
	price: number;
  }
