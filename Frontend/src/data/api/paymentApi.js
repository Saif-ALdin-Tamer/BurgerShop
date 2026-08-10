const API_BASE_URL =
  import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:5000`;

/**
 * Maps frontend cart items to the backend payment item format.
 */
function mapCartItems(cartItems) {
  return cartItems.map((item) => ({
    name: item.burger.name,
    price: item.burger.price,
    quantity: item.quantity,
    description: item.burger.description,
    image: item.burger.image,
  }));
}

/**
 * Creates a Stripe checkout session for the given cart items.
 *
 * @param {Array} cartItems - Cart items, each shaped as
 *   { burger: { id, name, price, image, description }, quantity, options }
 * @returns {Promise<{ success: boolean, data: { sessionId: string, url: string, orderId: string } }>}
 */
export async function createCheckoutSession(cartItems) {
  const items = mapCartItems(cartItems);

  const response = await fetch(
    `${API_BASE_URL}/api/payments/create-checkout-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items,
        customerEmail: undefined,
        successUrl: `${window.location.origin}/payment/success`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
        orderId: undefined,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      errorData.error?.message || errorData.message || `Checkout session request failed (${response.status})`;
    throw new Error(errorMessage);
  }

  return response.json();
}

/**
 * Fetches the payment status for a given payment / session ID.
 *
 * @param {string} id - The payment or session identifier.
 * @returns {Promise<Object>} Payment status data from the backend.
 */
export async function getPaymentStatus(id) {
  const response = await fetch(
    `${API_BASE_URL}/api/payments/status/${encodeURIComponent(id)}`
  );

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.message || `Payment status request failed (${response.status})`
    );
  }

  return response.json();
}
