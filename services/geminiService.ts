export const getIntakeRecommendation = async (userProfile: string) => {
  const response = await fetch("/api/intake-recommendation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userProfile }),
  });

  if (!response.ok) {
    throw new Error("Intake recommendation failed");
  }

  const data = await response.json();
  return data.text;
};
