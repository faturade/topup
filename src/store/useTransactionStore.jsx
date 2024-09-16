import { create } from 'zustand';

export const useTransactionStore = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set(() => ({ selectedProduct: product })),
  clearTransaction: () => set(() => ({ selectedProduct: null })),
}));
