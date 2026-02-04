export const getIntakeRecommendation = async (userProfile: string) => {
  try {
    const res = await fetch("/api/intake-recommendation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userProfile }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API error:", data);
      return "Onze excuses, er is een fout opgetreden bij het verwerken van uw aanvraag. Neem direct contact met ons op via info@sinasportlab.nl voor een persoonlijk adviesgesprek.";
    }

    return data.text || "Geen advies ontvangen. Probeer het opnieuw.";
  } catch (error) {
    console.error("Error calling API:", error);
    return "Onze excuses, er is een fout opgetreden bij het verwerken van uw aanvraag. Neem direct contact met ons op via info@sinasportlab.nl voor een persoonlijk adviesgesprek.";
  }
};
