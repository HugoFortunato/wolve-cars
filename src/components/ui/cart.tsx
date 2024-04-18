'use client';

import { useCartStore } from '../../store';
import CartDrawer from './cart-drawer';
export default function Cart() {
  const useStore = useCartStore();

  return <>{!useStore.isOpen && <CartDrawer />}</>;
}
