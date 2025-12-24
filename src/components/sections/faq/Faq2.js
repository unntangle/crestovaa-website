import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "How does Crestovaa assist in job placement?",
			desc: "We provide comprehensive job consultancy, including resume building, interview preparation, and direct connections to top employers in IT, Non-IT, and BPO sectors.",
			initActive: true,
		},
		{
			title: "What recruitment sectors do you specialize in?",
			desc: "Our expertise spans multiple industries including IT & Software, Banking & Finance, Customer Support (BPO), and Government contracts.",
			initActive: false,
		},
		{
			title: "Does Crestovaa provide web and software development?",
			desc: "Yes, we offer full-stack development services, creating scalable web applications and custom software solutions tailored to your business needs.",
		},
		{
			title: "How do I get started as a candidate?",
			desc: "Simply register your profile through our careers portal or contact our consultants for a one-on-one session to discuss your career goals.",
			initActive: false,
		},
		{
			title: "What makes Crestovaa different from other firms?",
			desc: "Our unique combination of industry expertise, personalized candidate counseling, and a vast network of corporate partnerships sets us apart.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-bottom-gap  ${type === 3 || type === 4 ? "" : "tj-arrange-container-2"
				}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${type === 3 ? "" : "tj-arrange-item-2"
									}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/about/about-3.webp"
										alt="Crestovaa Help Desk"
										width={585}
										height={629}
									/>
									<h2 className={`title wow fadeInUp`} data-wow-delay=".4s">
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Have more questions? </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:918015570623">
											<span>+91 80155 70623</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${type === 2 || type === 4 ? "style-2" : ""
									} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
										<FaqItem key={idx} item={item} idx={idx} />
									))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
