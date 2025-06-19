import React from "react";
import { Users, Target, Award, MapPin } from "lucide-react";

const AboutSection = () => {
	return (
		<section id="about" className="py-16 md:py-24 bg-slate-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl  lg:text-4xl font-bold text-slate-900 mb-5">
						About Judiscribe
					</h2>
					<p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
						We're revolutionizing Nigerian judicial recordkeeping with cutting-edge AI technology, 
						deep local expertise, and unwavering commitment to justice.
					</p>
				</div>

				{/* Mission & Vision */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
					<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
						<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
							<Target className="w-6 h-6 text-blue-600" />
						</div>
						<h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
						<p className="text-slate-600 leading-relaxed">
							To transform Nigeria's judicial system by providing AI-powered transcription and recordkeeping 
							solutions that ensure accuracy, security, and accessibility while supporting local languages 
							and legal practices.
						</p>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
						<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
							<Award className="w-6 h-6 text-green-600" />
						</div>
						<h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
						<p className="text-slate-600 leading-relaxed">
							A Nigerian judicial system where technology accelerates justice delivery, eliminates delays, 
							and ensures every court proceeding is accurately recorded and securely preserved for 
							future generations.
						</p>
					</div>
				</div>

				{/* Market Opportunity */}
				<div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 mb-16 text-white">
					<div className="text-center mb-12">
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							Addressing a Critical Market Need
						</h3>
						<p className="text-blue-100 text-lg max-w-2xl mx-auto">
							Nigeria's judicial system faces unprecedented challenges that technology can solve
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">1,400+</div>
							<div className="text-blue-100 text-sm md:text-base">Courts Nationwide</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">6 Years</div>
							<div className="text-blue-100 text-sm md:text-base">Average Case Duration</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">$50M</div>
							<div className="text-blue-100 text-sm md:text-base">Market Opportunity</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
							<div className="text-blue-100 text-sm md:text-base">AI Accuracy Rate</div>
						</div>
					</div>
				</div>

				{/* Competitive Advantages */}
				<div className="mb-12">
					<h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
						Why Choose Judiscribe?
					</h3>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<MapPin className="w-8 h-8 text-purple-600" />
							</div>
							<h4 className="text-xl font-bold text-slate-900 mb-4">Local Expertise</h4>
							<p className="text-slate-600 leading-relaxed">
								Deep understanding of Nigerian legal system and cultural nuances, with support for 
								multiple local languages.
							</p>
						</div>

						<div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
							<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Award className="w-8 h-8 text-orange-600" />
							</div>
							<h4 className="text-xl font-bold text-slate-900 mb-4">Superior Technology</h4>
							<p className="text-slate-600 leading-relaxed">
								99% accuracy vs 85% competitors, with blockchain security and 30% more 
								affordable pricing through local talent.
							</p>
						</div>

						<div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
							<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
								<Users className="w-8 h-8 text-teal-600" />
							</div>
							<h4 className="text-xl font-bold text-slate-900 mb-4">Strategic Partnerships</h4>
							<p className="text-slate-600 leading-relaxed">
								Collaborations with legal firms and government agencies to ensure seamless 
								integration and widespread adoption.
							</p>
						</div>
					</div>
				</div>

				{/* Team Preview */}
				{/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
					<h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
						Meet Our Expert Team
					</h3>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">RS</span>
							</div>
							<h4 className="font-bold text-slate-900 mb-1">Romlah Shitta</h4>
							<p className="text-slate-600 text-sm">Chief Executive Officer</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">MA</span>
							</div>
							<h4 className="font-bold text-slate-900 mb-1">Moyomade Adegbite</h4>
							<p className="text-slate-600 text-sm">Chief Technology Officer</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">KA</span>
							</div>
							<h4 className="font-bold text-slate-900 mb-1">Kamaldeen</h4>
							<p className="text-slate-600 text-sm">Chief Operations Officer</p>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default AboutSection;