export type listinAdventure = {
	id: string
	title: string
	description: string
	gallery: Array<string>
	individualPrice: number
	groupPrice?: number | Array<number>
	categories: string | Array<string>
	location: string

	extras?: [
		activities?: Array<string>,
		starterPack?: Array<string>,
		startTime?: string,
		endTime?: string
	]

	rating?: Array<string>
	reviewers?: Array<string>

	//! relaciones
	providerId: string
}

//* Agregar propiedad para mostrar los mas comprados de cada proveedor
