export type listinAdventure = {
	id: string
	title: string
	description: string
	gallery: Array<string>
	individualPrice: number
	groupPrice?: number | Array<number> //? DEFINIR TYPE
	categories: Array<string>
	location: string

	extras?: [
		activities?: string | Array<string>, //? DEFINIR TYPE
		starterPack?: string | Array<string>, //? DEFINIR TYPE
		startTime?: string,
		endTime?: string
	]

	rating?: Array<number>
	reviews?: Array<string>

	//! relaciones
	providerId: string
}

//* Agregar propiedad para mostrar los más comprados de cada proveedor
