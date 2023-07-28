import { create } from 'zustand'

interface PackModalStore {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const usePackModal = create<PackModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))

export default usePackModal
