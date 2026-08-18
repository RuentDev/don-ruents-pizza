export interface CartUpdateDetail {
  id?: string
  totalQuantity?: number
  addedQuantity?: number
  checkoutUrl?: string
}

const CART_UPDATED_EVENT = 'cart:updated'

/**
 * Centralized helper to dispatch a cart update event across all components in real-time.
 */
export function notifyCartUpdate(detail?: CartUpdateDetail) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<CartUpdateDetail>(CART_UPDATED_EVENT, { detail }))
}

/**
 * Subscribe cleanly to real-time cart updates.
 */
export function onCartUpdate(handler: (detail?: CartUpdateDetail) => void) {
  if (typeof window === 'undefined') return () => {}

  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<CartUpdateDetail>
    handler(customEvent.detail)
  }

  window.addEventListener(CART_UPDATED_EVENT, listener)
  return () => {
    window.removeEventListener(CART_UPDATED_EVENT, listener)
  }
}
