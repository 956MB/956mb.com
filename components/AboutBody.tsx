"use client";

import { about_email, about_p, bio_p, languages_p, tools_p } from "lib/info";
import Image from "next/image";
import React from "react";
import Socials from "./Socials";
import { TextParagraph, TextParagraphSub } from "./Text";

export function AboutBody() {
    return (
        <div className="mr-0 mt-6 flex-row items-center justify-center justify-items-center text-left sm:pl-2 lg:mt-4 lg:pl-5">
            <div className="m-0 mb-2 flex max-w-4xl flex-col flex-wrap items-start justify-center gap-y-6 overflow-hidden pr-0 text-left sm:mb-5">
                <div className="inline-flex flex-col items-start justify-center">
                    <TextParagraph>{about_p}</TextParagraph>
                    <TextParagraphSub>{about_email}</TextParagraphSub>
                </div>
                <Socials />
                <TextParagraph>{bio_p}</TextParagraph>
                <TextParagraph>{languages_p}</TextParagraph>
                <TextParagraph>{tools_p}</TextParagraph>
                <div className="my-1 flex w-full flex-row items-start justify-center sm:mt-4 sm:pr-6">
                    {/* <hr className="my-auto h-px w-full bg-neutral-800" /> */}
                    <Image
                        alt={"icons"}
                        className={"h-full w-full object-cover"}
                        src={"/icons-black.svg"}
                        width={1520}
                        height={384}
                        loading="eager"
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
}
