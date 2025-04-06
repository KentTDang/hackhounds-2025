import { Alert } from "react-native";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
import CheckoutButton from "./checkout-button";
import { Button } from "react-native";

async function fetchPaymentSheetParams(amount: number): Promise<{
  paymentIntent: string;
  ephemeralKey: string;
  customer: string;
}> {
  return fetch(`/api/payment-sheet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  }).then((res) => res.json());
}

export default function CheckoutForm({ amount }: { amount: number }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams(amount);

    // Use Mock payment data: https://docs.stripe.com/payments/accept-a-payment?platform=react-native&ui=payment-sheet#react-native-test
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Expo, Inc.",

      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
        email: "jenny.rosen@example.com",
        phone: "888-888-8888",
      },
      returnURL: Linking.createURL("stripe-redirect"),

      // Enable Apple Pay:
      // https://docs.stripe.com/payments/accept-a-payment?platform=react-native&ui=payment-sheet#add-apple-pay
      applePay: {
        merchantCountryCode: "US",
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      // Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <>
      <Button title="Initiate Payment" onPress={initializePaymentSheet} />
      <Button title="Open Payment Sheet" onPress={openPaymentSheet} />
    </>
  );
}
