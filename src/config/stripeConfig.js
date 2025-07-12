import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51Rb60gRsVHHscldJhsnR3rWTTRxVow2PcX3Rg7Vi6yEqnPMKWEstHj46u0tfCLe4QK8ypZfPQInGOR6ksMCHppz500dFGyX9nU'
);

export default stripePromise;