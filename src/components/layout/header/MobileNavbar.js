import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems.map((item, index) => {
								const hasSubmenu = item.submenu && item.submenu.length > 0;
								const isServices = item.name === "Services";

								// If it has a submenu, use MobileMenuItem
								if (hasSubmenu) {
									return (
										<MobileMenuItem
											key={index}
											text={item.name}
											url={item.path || "#"}
											submenuClass={isServices ? "mega-menu-service" : ""}
										>
											{item.submenu.map((subItem, subIdx) => {
												const hasNestedSubmenu = subItem.submenu && subItem.submenu.length > 0;

												if (hasNestedSubmenu) {
													return (
														<MobileMenuItem
															key={subIdx}
															text={subItem.name}
															url={subItem.path || "#"}
															submenuClass="sub-menu"
														>
															{subItem.submenu.map((nestedItem, nestedIdx) => (
																<li key={nestedIdx}>
																	<Link href={nestedItem.path || "#"}>
																		{nestedItem.name}
																	</Link>
																</li>
															))}
														</MobileMenuItem>
													);
												}

												return (
													<li key={subIdx}>
														<Link
															className={
																isServices ? "mega-menu-service-single" : ""
															}
															href={subItem.path || "/"}
														>
															{isServices && (
																<>
																	<span className="mega-menu-service-icon">
																		{subItem.svgIcon ? (
																			<img
																				src={subItem.svgIcon}
																				alt={subItem.name}
																				style={{ width: '24px', height: '24px' }}
																			/>
																		) : (
																			<i
																				className={
																					subItem.icon
																						? subItem.icon
																						: "tji-service-1"
																				}
																			></i>
																		)}
																	</span>
																	<span className="mega-menu-service-title">
																		{subItem.name}
																	</span>
																	<span className="mega-menu-service-nav">
																		<i className="tji-arrow-right-long"></i>
																		<i className="tji-arrow-right-long"></i>
																	</span>
																</>
															)}
															{!isServices && subItem.name}
														</Link>
													</li>
												);
											})}
										</MobileMenuItem>
									);
								}

								// If no submenu, render a simple link item
								// Note: The original generic links were wrapped in 'li.mean-last' if last, 
								// but logic for 'mean-last' seems specific to Contact link being last.
								// We can just render a generic li.
								return (
									<li key={index} className={index === navItems.length - 1 ? "mean-last" : ""}>
										<Link href={item.path || "#"}>{item.name}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
