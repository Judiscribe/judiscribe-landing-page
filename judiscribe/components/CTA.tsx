import Link from "next/link";
import React from "react";

const CTASection = () => {
	return (
		<section className="py-20 bg-blue-600">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
					Ready to Transform Nigerian Courts?
				</h2>
				<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
					Be among the first to experience AI-powered court transcription. Get
					in touch to learn more about our solution.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-block text-center cursor-pointer">
						<Link href="mailto:judiscribelegal@gmail.com?subject=Interest in Judiscribe - Court Transcription Solution&body=Hello Judiscribe Team,%0D%0A%0D%0AI'm interested in learning more about your AI-powered court transcription solution for Nigerian courts.%0D%0A%0D%0APlease get in touch with more information.%0D%0A%0D%0AThank you!">
							Contact Our Team
						</Link>
					</button>
					<button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-block cursor-pointer">
						<Link href="#about">Learn More</Link>
					</button>
				</div>
				<p className="text-blue-200 text-sm mt-6">
					Transforming 1400+ courts across Nigeria • Built for local languages
				</p>
			</div>
		</section>
	);
};

export default CTASection;
