"use client";

import {
	about_p,
	background_h,
	background_p,
	bio_p,
	languages_h,
	languages_p,
	tools_h,
	tools_p,
} from "../lib/info";
import { TextParagraph, TextTitleSub } from "./Text";
import { links } from "../lib/info";
import { email } from "../lib/info";
import React from "react";
import clsx from "clsx";
import { FaRedditAlien } from "react-icons/fa";
import { Mastodon, Twitch, Twitter, Github, Reddit } from 'react-bootstrap-icons';

export function AboutBody() {
	return (
		<div className="flex-row text-left justify-start mr-0 /*border-l border-neutral-800*/">
			<div className="flex flex-wrap m-0 flex-col pr-0 pb-[30px] text-left gap-y-3">
				<TextParagraph>{about_p}</TextParagraph>
				<TextParagraph>{bio_p}</TextParagraph>
				<TextTitleSub>{background_h}</TextTitleSub>
				<TextParagraph>{background_p}</TextParagraph>
				<TextTitleSub>{languages_h}</TextTitleSub>
				<TextParagraph>{languages_p}</TextParagraph>
				<TextTitleSub>{tools_h}</TextTitleSub>
				<TextParagraph>{tools_p}</TextParagraph>
			</div>
		</div>
	);
}

export function AboutLinks({ mobilePos }: { mobilePos: string }) {
	return (
		<div
			className={clsx(
				"flex flex-col w-full items-center justify-center mb-[30px] gap-y-[20px] lg:gap-y-[40px]",
				mobilePos
			)}
		>
			<div className="inline-flex flex-row flex-wrap justify-center m-0 gap-3">
				{links.map((link, i) =>
					React.Children.toArray(
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={link.url}
							className="flex min-w-[36px] min-h-[36px] text-center items-center justify-center text-white mt-[1px] bg-neutral-900/80 hover:bg-neutral-800/90 rounded-md gap-2 px-[10px] border border-neutral-700/70 hover:border-neutral-700/80"
						>
							{(() => {
								switch (link.key) {
									case "github":   return <Github size={18}/>;
                                    case "reddit":   return <FaRedditAlien size={21}/>;
                                    case "twitter":  return <Twitter size={18}/>;
                                    case "mastadon": return <Mastodon size={18}/>;
									default:         return <Twitch size={18}/>;
								}
							})()}
                            <span className="text-white text-xs no-underline mr-auto font-inter-semibold whitespace-nowrap capitalize">
                                {link.key}
                            </span>
						</a>
					)
				)}
			</div>
			<div className="inline-flex flex-row gap-3">
				<a className="text-neutral-400 text-sm no-underline mr-auto font-inter-medium whitespace-nowrap">
					{email.key}:
				</a>
				<a
					className="text-white text-sm m-0 font-inter-semibold transition-all duration-100 hover:underline"
					rel="noopener noreferrer"
					target="_blank"
					href={email.url}
				>
					{email.value}
				</a>
			</div>
		</div>
	);
}
