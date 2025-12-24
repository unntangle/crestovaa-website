import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems.map((item, index) => {
						const activeItem = makeActiveLink(item);
						const hasSubmenu = item.submenu && item.submenu.length > 0;
						const isServices = item.name === "Services";

						return (
							<li
								key={index}
								className={`${hasSubmenu ? "has-dropdown" : ""
									} ${activeItem.isActive ? "current-menu-ancestor" : ""}`}
							>
								<Link href={item.path}>{item.name}</Link>
								{hasSubmenu && (
									<ul
										className={`sub-menu ${isServices ? "mega-menu-service" : ""
											}`}
									>
										{item.submenu.map((subItem, subIndex) => (
											<li
												key={subIndex}
												className={`${subItem.submenu && subItem.submenu.length > 0
													? "has-dropdown"
													: ""
													}`}
											>
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
												{subItem.submenu && subItem.submenu.length > 0 && (
													<ul className="sub-menu">
														{subItem.submenu.map((nestedItem, nestedIdx) => (
															<li key={nestedIdx}>
																<Link href={nestedItem.path || "#"}>
																	{nestedItem.name}
																</Link>
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
