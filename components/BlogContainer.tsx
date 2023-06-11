"use client";

import { allBlogs } from "contentlayer/generated";
import { sortBlogs, toFormattedDate } from "lib/util";
import { useState } from "react";
import BlogRow from "./BlogRow";
import { Mdx } from "./Mdx";
import { motion } from "framer-motion";
import React from "react";
import clsx from "clsx";

export default function BlogContainer() {
	const [selectedPage, setSelectedPage] =
		useState<string>("is-this-anything");

	return (
		<div className="flex flex-row flex-1 justify-center w-full max-w-[1920px] relative items-start mx-auto">
			<div className="hidden lg:flex flex-col w-full min-w-[370px] max-w-[370px] sticky top-[55px] overflow-auto shrink-0 border-l border-neutral-800">
				<motion.div
					className="flex flex-col w-full py-[55px] gap-0 overflow-auto shrink-0 /*border-b border-neutral-800/*"
					variants={{
						show: {
							transition: {
								staggerChildren: 0.055,
							},
						},
					}}
					initial="hidden"
					animate="show"
				>
					{React.Children.toArray(
						sortBlogs(allBlogs).map((post, i) => (
							<button onClick={() => setSelectedPage(post.slug)}>
								<BlogRow
									row_title={post.title}
									row_date={post.publishedAt}
									row_selected={post.slug === selectedPage}
									row_tag={post.tag ? post.tag : ""}
								/>
							</button>
						))
					)}
				</motion.div>
			</div>

			<motion.div
				className="flex flex-col w-full flex-1 lg:max-w-[55%] pt-[30px] lg:pt-[55px] px-[30px] pb-[55px] lg:border-l border-neutral-800 gap-[55px]"
				initial={{ opacity: 0, scale: 1.07, y: 1.1 }}
				animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
				exit={{ opacity: 0, scale: 1.07, y: 1.1 }}
				transition={{
					type: "slide",
					damping: 15,
					duration: 0.25,
					stiffness: 250,
					delay: 0,
				}}
			>
				{React.Children.toArray(
					sortBlogs(allBlogs).map((post, i) => (
						<section
							className={clsx(
								"block",
								post.slug !== selectedPage ? "lg:hidden" : null
							)}
						>
							<script type="application/ld+json">
								{JSON.stringify(post.structuredData)}
							</script>
							<div className="flex flex-row items-center justify-center w-full p-0 mb-[30px]">
								<span className="font-ibmplex-sans-light text-[51px] leading-[45px] mb-[10px] text-neutral-500 whitespace-nowrap text-center noselect">
									/
								</span>
								<div className="flex flex-col items-start justify-center content-center w-full m-0 pl-3 gap-1">
									<span className="font-inter-bold text-2xl max-w-max leading-6 mr-auto text-white whitespace-nowrap">
										{post.title}
									</span>
									{/* <hr className="hidden sm:block h-px w-full bg-neutral-800 mx-[20px] my-auto" /> */}
									<span className="font-ibmplex-sans-medium text-sm text-neutral-400 whitespace-nowrap">
										{toFormattedDate(post.publishedAt)}
									</span>
								</div>
							</div>
							<Mdx code={post.body.code} />
						</section>
					))
				)}
			</motion.div>
		</div>
	);
}
