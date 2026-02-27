import React from "react";
import OnboardingPage from "./OnboardingPage";
export default function Onboarding3() {
  return (
    <OnboardingPage
      image={require("../../assets/images/Onboarding3.png")}
      title={"Seamless Logs &\nMemos"}
      subtitle={
        "Keep track of every update and command automatically. Review history with filters and search anytime."
      }
    />
  );
}