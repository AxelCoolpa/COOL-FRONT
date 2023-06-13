import AddAdventureForm from '../AddAdventureForm'
import ImageUpload from '../inputs/ImageUpload'
import ProviderCard from '../listings/ProviderCard'

const AddAdventure = () => {
	return (
		<div>
			<h2 className='text-[32px] font-medium'>Add adventure</h2>
			<div className='py-5'>
				<ImageUpload value='' />
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 py-16'>
				<AddAdventureForm />
				<div className='order-last xl:col-span-2'>
					<ProviderCard />
				</div>
			</div>
		</div>
	)
}

export default AddAdventure
