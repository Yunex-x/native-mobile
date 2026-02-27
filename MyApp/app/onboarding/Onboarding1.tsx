import React from "react";
import OnboardingPage from "./OnboardingPage";

export default function Onboarding1() {
  return (
    <OnboardingPage
      image={require("../../assets/images/Onboarding1.png")}
      title={"Voice-Powered CRM\nUpdates"}
      subtitle={
        "Transform your spoken commands into structured CRM entries instantly. Add or update client data without typing."
      }
    />
  );
}