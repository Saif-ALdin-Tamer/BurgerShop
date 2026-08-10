import { apiClient } from './axiosClient';

function mapCartItems(cartItems) {
  return cartItems.map((item) => ({
    name: item.burger.name,
    price: item.burger.price,
    quantity: item.quantity,
    description: item.burger.description,
    image: item.burger.image,
  }));
}

export async function createCheckoutSession(cartItems) {
  const items = mapCartItems(cartItems);

  const response = await apiClient.post('/api/payments/create-checkout-session', {
    items,
    customerEmail: undefined,
    successUrl: `${window.location.origin}/payment/success`,
    cancelUrl: `${window.location.origin}/payment/cancel`,
    orderId: undefined,
  });

  return response.data;
}

export async function getPaymentStatus(id) {
  const response = await apiClient.get(`/api/payments/status/${encodeURIComponent(id)}`);
  return response.data;
}
