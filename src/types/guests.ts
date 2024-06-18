export type Guests = {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  plus_ones: PlusOnes[];
  email: string;
  event_id: string;
  message: string;
  status: "pending" | "attending" | "rejected" | "approved";
};

type PlusOnes = {
  name: string;
};
