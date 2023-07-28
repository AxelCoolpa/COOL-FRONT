// import GridColumns from '../../components/sections/GridColumns'
// import MainCard from '../../components/listings/Card'
import { useCallback } from 'react'
import Button from '../../components/buttons/Button'
import PackagesModal from '../../components/modals/PackagesModal'
import usePackModal from '../../hooks/usePackModal'

const Packages = () => {
	const PackModal = usePackModal()

	const onPack = useCallback(() => {
		PackModal.onOpen()
	}, [PackModal])

	return (
		<>
			<div className=''>
				<div className='flex flex-col rounded-t bg-white mb-0 px-6 py-6'>
					<div className='relative text-center flex justify-between pt-5 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>Active Packages</h6>

						<div className='absolute right-0 -top-1 xl:-top-2'>
							<Button label='Create Package' onClick={onPack} small />
						</div>
					</div>

					<PackagesModal />

					{/* <div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{enabled.map((item) => (
								<MainCard key={item._id} data={item} />
							))}
						</GridColumns>
					</div> */}
				</div>

				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							Inactive Packages
						</h6>
					</div>

					{/* <div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{disabled.map((item) => (
								<MainCard key={item._id} data={item} />
							))}
						</GridColumns>
					</div> */}
				</div>
			</div>
		</>
	)
}

export default Packages
