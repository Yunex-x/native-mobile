import React from "react";
import OnboardingPage from "./OnboardingPage";

export default function Onboarding2() {
  return (
    <OnboardingPage
      image={require("../../assets/images/Onboarding2.png")}
      title={"Smart Search & Instant\nInsights"}
      subtitle={
        "Fetch customer details or CRM records with just your voice. Find the right data in seconds."
      }
    />
  );
}