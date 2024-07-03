"use Client";
import React from "react";
import { ItemDisplay, SmartCustomer, TopNav } from "../../components";

export function Home() {
    return (
        <>
            <TopNav />
            <SmartCustomer />
            <ItemDisplay
                headText={"Ditch the Script,Get Smart Support"}
                description={
                    "Enif AI is more than a chatbot. It understands your business, products, and policies to deliver personalized solutions for each customer. (Highlights personalization and unique value proposition)"
                }
                buttonText={"Learn more"}
                image={"assets/images/Frame 1000006767.png"}
            />
            <ItemDisplay
                headText={"Limited Chatbots, Limitless Enif"}
                description={
                    "Traditional chatbots struggle with complex questions. Enif uses AI to analyze each situation and find the best solution, drawing from your knowledge base, customer data, and more."
                }
                buttonText={"Learn more"}
                image={"assets/images/Frame 1000006807.png"}
            />
            <ItemDisplay
                headText={"Smooth Handoff to Human Support"}
                description={
                    "If Enif ever needs help, it seamlessly connects your customer to a live agent. You're always in control."
                }
                buttonText={"Learn more"}
                image={"assets/images/Frame 1000006809.png"}
            />
        </>
    );
}
