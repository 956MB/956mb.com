"use client";

import { IEntryGroup } from "lib/interfaces";
import React from "react";
import { PortalWithState } from "react-portal";
import Image from "next/image";
import clsx from "clsx";
import Gallery, { CategoryIcon } from "./Gallery";
import Tooltip from "./Tooltip";

const ITEM_DEF_HEIGHT = 383;

export function DesignHeader({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col sm:sticky sm:top-[75px] items-start justify-start w-full pt-5 sm:pt-4 m-0 gap-5 sm:gap-4 sm:z-50 bg-black/90 backdrop-blur">
			<div className="flex flex-col items-start justify-center gap-3 sm:gap-2">
				<span className="text-white font-inter-semibold text-[21px] leading-[18px]">
					{entry.title}
				</span>
				<span className="font-ibmplex-sans-medium text-sm leading-4 text-neutral-500">
					{entry.description}
				</span>
			</div>
			<div className="flex flex-row items-center justify-center w-full">
				<hr className="h-px w-full bg-neutral-800 my-auto" />
			</div>
		</div>
	);
}

export default function DesignRow({ entry }: { entry: IEntryGroup }) {
	return (
		<div className="flex flex-col flex-wrap w-full relative justify-center items-center max-w-screen-3xl">
			<DesignHeader entry={entry} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-start gap-5 lg:gap-4 gap-y-0 lg:gap-y-4 w-full pt-5 sm:pt-4">
				{React.Children.toArray(
					entry.items.map((item, i) => (
						<PortalWithState closeOnOutsideClick closeOnEsc>
							{({ openPortal, closePortal, portal }) => (
								<React.Fragment>
									<div
										className={clsx(
											"relative z-0 flex flex-col justify-start group box-content"
										)}
										onClick={
											item.linkBlog
												? undefined
												: openPortal
										}
									>
										<a
											className="flex flex-col relative justify-end group overflow-hidden"
											href={
												item.linkBlog
													? item.linkBlog
													: undefined
											}
										>
											<Image
												alt={item.id}
												className="block object-cover w-full h-full aspect-[4/3] cursor-pointer ease-in-out transition-transform duration-75 hover:scale-105"
												src={item.images[0].path}
												width={item.images[0].width}
												height={item.images[0].height}
												loading="eager"
											/>
										</a>
										<div
											className={clsx(
												"z-10 flex flex-col text-start justify-center w-full pb-[16px] pt-[16px] gap-y-2",
												item.summary &&
													item.summary.length <= 0 &&
													"h-[53px] min-h-[53px] max-h-[53px]"
											)}
										>
											<div className="flex flex-row gap-x-2 items-center justify-start">
												<Tooltip
													content={item.category}
													position={"top"}
												>
													<CategoryIcon
														category={item.category}
													/>
												</Tooltip>

												<span className="text-white font-inter-semibold text-md truncate">
													{item.title}
												</span>

												{item.date && (
													<span className="text-neutral-300 font-inter-semibold text-[12px] py-[2px] px-[6px] bg-neutral-900 rounded-[4px] border border-neutral-800 box-content whitespace-nowrap ml-auto">
														{item.date}
													</span>
												)}
											</div>
										</div>
									</div>
									{portal(
										<Gallery
											item={item}
											closeAction={closePortal}
										/>
									)}
								</React.Fragment>
							)}
						</PortalWithState>
					))
				)}
			</div>
		</div>
	);
}
