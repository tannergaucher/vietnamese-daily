export interface ConversationSituationResponse {
  type:
    | "at the street food vendor stall"
    | "at the cafe"
    | "at the restaurant"
    | "at the market"
    | "asking a local for directions"
    | "at the hotel"
    | "shopping at a store"
    | "a health related situation"
    | "an emergency situation";
  text: string;
}

export const streetExample: ConversationSituationResponse = {
  type: "at the restaurant",
  text: "Ordering phở chiên phồng from a street vendor in Hanoi.",
};

export const restaurantExample: ConversationSituationResponse = {
  type: "at the cafe",
  text: "Ordering a cà phê sữa đá from a café in Saigon.",
};

export const marketExample: ConversationSituationResponse = {
  type: "at the market",
  text: "Shopping for fresh produce at a local market in Hanoi.",
};

export const transportationExample: ConversationSituationResponse = {
  type: "asking a local for directions",
  text: "Asking for directions to the nearest bus stop in Saigon.",
};

export const hotelExample: ConversationSituationResponse = {
  type: "at the hotel",
  text: "Checking into a hotel in Hanoi.",
};

export const shoppingExample: ConversationSituationResponse = {
  type: "shopping at a store",
  text: "Shopping for local souvenirs in a small shop in Hoi An.",
};

export const healthExample: ConversationSituationResponse = {
  type: "a health related situation",
  text: "Visiting a pharmacy in Saigon for a cold remedy.",
};

export const emergencyExample: ConversationSituationResponse = {
  type: "an emergency situation",
  text: "Reporting a lost passport to the local police in Hanoi.",
};
