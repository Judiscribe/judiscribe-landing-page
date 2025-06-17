import BenefitsSection from "@/components/Benefits";
import CTASection from "@/components/CTA";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import React from "react";

const page = () => {
	return (
		<div style={{ fontFamily: "Satoshi, sans-serif" }}>
			<link
				href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
				rel="stylesheet"
			/>
			<Header />
			<HeroSection />
			<FeaturesSection />
			<BenefitsSection />
			<CTASection />
			<Footer />
		</div>
	);
};

export default page;
