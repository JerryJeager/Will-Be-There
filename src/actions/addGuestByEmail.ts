"use server";

import axios from "axios";

export async function addGuestByEmail(formData) {
  const email = formData.get("email");
  const id = formData.get("event_id");
  const token = formData.get("token")
  try {
    const res = await axios.post(
      "https://will-be-there.onrender.com/api/v1/invitation/guest/pending", {
        email: email,
        event_id: id,
      },
      {
        headers: { Authorization: "Bearer " + token },
      },
    );
    return res.status;
  } catch {}
}
