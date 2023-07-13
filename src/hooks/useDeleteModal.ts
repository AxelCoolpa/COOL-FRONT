import { create } from 'zustand'

interface useDeleteModalStore {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const useDeleteModal = create<useDeleteModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))

export default useDeleteModal
