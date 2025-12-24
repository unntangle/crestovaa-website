"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: 1,
			title: "Consultation & Analysis",
			desc: "We begin by understanding your specific goals, whether it's finding the right talent or building a custom digital solution.",
		},
		{
			id: 2,
			title: "Strategic Execution",
			desc: "Our team implements a data-driven strategy to deliver high-quality results, from recruitment to technical deployment.",
		},
		{
			id: 3,
			title: "Continuous Support",
			desc: "We provide ongoing partnership and review to ensure your long-term success and satisfaction with our services.",
		},
	];
	return (
		<section className="tj-working-process section-top-gap pb-70 mb-150 section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Working Process
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title wow fadeInUp" data-wow-delay=".4s">
										Proven Process, <span>Exceptional Outcomes.</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									A systematic, transparent approach designed to bridge the gap between talent and opportunity.
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
									<ProcessCard
										key={idx}
										processSingle={processSingle}
										idx={idx}
									/>
								))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Process;
