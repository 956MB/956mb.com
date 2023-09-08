import { AboutBody, AboutLinks } from "components/AboutBody";
import Image from "next/image";
import { logo, whoami_h } from "../lib/info";

export default async function AboutPage() {
    return (
        <section className="flex w-full h-full pt-[75px] lg:pt-0">
            <div className="flex w-full h-full mx-auto flex-col items-center justify-center">
                <div className="relative h-full flex flex-col justify-start sm:justify-center mx-auto items-start overflow-auto px-[30px] max-w-[960px] gap-y-[10px] lg:gap-y-[20px]">
                    <div className="flex relative items-center justify-center w-full px-0 bg-bottom bg-cover bg-no-repeat mb-[20px] mt-[20px]">
                        <div className="flex flex-row text-center items-end gap-1 font-gyea-bold text-5xl sm:text-6xl text-white uppercase">
                            <span className="custom-font break-all">{whoami_h[Math.floor(Math.random() * whoami_h.length)]}</span>
                        </div>
                    </div>
                    <AboutBody />
                    <AboutLinks mobilePos="block" />
                </div>
            </div>
        </section>
    );
}
