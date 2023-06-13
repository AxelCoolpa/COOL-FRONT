import {
	GiCastle,
	GiForestCamp,
	GiIsland,
	GiModernCity,
	GiVillage,
	GiCruiser,
} from 'react-icons/gi'
import { TbBeach, TbMountain } from 'react-icons/tb'

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'Este destino esta cerca de una playa!',
	},
	{
		label: 'Forest',
		icon: GiForestCamp,
		description: 'Destino en el cual se puede acampar!',
	},
	{
		label: 'Mountain',
		icon: TbMountain,
		description: 'Este destino esta cerca de una montaña!',
	},
	{
		label: 'Island',
		icon: GiIsland,
		description: 'Este destino este en una isla!',
	},
	{
		label: 'Village',
		icon: GiVillage,
		description: 'En este destino puede encontrar pueblos pintorescos!',
	},
	{
		label: 'Cruice',
		icon: GiCruiser,
		description: 'Destino para ir de crucero!',
	},
	{
		label: 'Historical',
		icon: GiCastle,
		description: 'Este destino puede estar cerca a un lugar historico!',
	},
	{
		label: 'Moderno',
		icon: GiModernCity,
		description: 'Destino de ciudade moderna!',
	},
]
