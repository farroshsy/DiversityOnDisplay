/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export default function ExplorePage() {
  const router = useRouter();

  const onIDClick = useCallback(() => {
    // Please sync "Explore Page" to the project
  }, []);

  const onWAClick = useCallback(() => {
    // Please sync "Explore Page" to the project
  }, []);

  const onNYClick = useCallback(() => {
    router.push("/explore/madiun");
  }, [router]);

	return (
	<div className="relative  w-full h-[1328px] text-left text-5xl text-studio-darkmode-allwhite-ffffff font-body-indo-p2">
      <div className="absolute top-[271px] left-[64px] w-[1294px] h-[729px]">
        <div className="absolute top-[39px] left-[18px] w-[1276px] h-[690px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-[13.86%] w-[8.29%] top-[0.66%] right-[5.76%] bottom-[85.48%] left-[85.94%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nb.svg"
            />
            <img
              className="absolute h-[17.69%] w-[7.79%] top-[0%] right-[0%] bottom-[82.31%] left-[92.21%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ns.svg"
            />
            <img
              className="absolute h-[2.65%] w-[3.63%] top-[3.37%] right-[3.41%] bottom-[93.98%] left-[92.96%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/pe.svg"
            />
            <img
              className="absolute h-[5.62%] w-[5.82%] top-[24.31%] right-[11.83%] bottom-[70.07%] left-[82.35%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ma.svg"
            />
            <img
              className="absolute h-[22.78%] w-[11.23%] top-[8.93%] right-[44.21%] bottom-[68.29%] left-[44.56%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/mn.svg"
            />
            <img
              className="absolute h-[20.17%] w-[17.67%] top-[4.76%] right-[65.32%] bottom-[75.07%] left-[17.01%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/mt.svg"
            />
            <img
              className="absolute h-[12.76%] w-[11.4%] top-[9.49%] right-[54.5%] bottom-[77.74%] left-[34.1%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nd.svg"
            />
            <img
              className="absolute h-[29.73%] w-[10.37%] top-[4.2%] right-[77.02%] bottom-[66.07%] left-[12.61%] max-w-full overflow-hidden max-h-full cursor-pointer hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/id.svg"
              onClick={onIDClick}
            />
            <img
              className="absolute h-[15.24%] w-[11.59%] top-[0.36%] right-[83.9%] bottom-[84.39%] left-[4.51%] max-w-full overflow-hidden max-h-full cursor-pointer hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/wa.svg"
              onClick={onWAClick}
            />
            <img
              className="absolute h-[24.31%] w-[11.9%] top-[51.22%] right-[76.27%] bottom-[24.47%] left-[11.83%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/az.svg"
            />
            <img
              className="absolute h-[41.96%] w-[13.89%] top-[25.07%] right-[86.11%] bottom-[32.97%] left-[0%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ca.svg"
            />
            <img
              className="absolute h-[17.49%] w-[12.67%] top-[38.62%] right-[63.6%] bottom-[43.88%] left-[23.73%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/co.svg"
            />
            <img
              className="absolute h-[29.93%] w-[11.1%] top-[28.47%] right-[82.67%] bottom-[41.6%] left-[6.23%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nv.svg"
            />
            <img
              className="absolute h-[22.06%] w-[12.22%] top-[53.87%] right-[65.82%] bottom-[24.07%] left-[21.95%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nm.svg"
            />
            <img
              className="absolute h-[20.77%] w-[14.04%] top-[9.79%] right-[84.73%] bottom-[69.44%] left-[1.24%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/or.svg"
            />
            <img
              className="absolute h-[21.49%] w-[9.81%] top-[32.37%] right-[75.01%] bottom-[46.13%] left-[15.18%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ut.svg"
            />
            <img
              className="absolute h-[17.79%] w-[12.17%] top-[22.52%] right-[66.11%] bottom-[59.69%] left-[21.73%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/wy.svg"
            />
            <img
              className="absolute h-[13.99%] w-[8.76%] top-[58.07%] right-[42.49%] bottom-[27.94%] left-[48.76%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ar.svg"
            />
            <img
              className="absolute h-[12.04%] w-[10.5%] top-[31.35%] right-[44.17%] bottom-[56.61%] left-[45.33%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ia.svg"
            />
            <img
              className="absolute h-[12.14%] w-[12.91%] top-[44.61%] right-[51.24%] bottom-[43.25%] left-[35.84%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ks.svg"
            />
            <img
              className="absolute h-[17.56%] w-[11.57%] top-[42.53%] right-[41.7%] bottom-[39.91%] left-[46.73%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/mo.svg"
            />
            <img
              className="absolute h-[12.53%] w-[14.36%] top-[32.64%] right-[52.52%] bottom-[54.83%] left-[33.13%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ne.svg"
            />
            <img
              className="absolute h-[13.69%] w-[15.01%] top-[55.92%] right-[50.89%] bottom-[30.39%] left-[34.1%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ok.svg"
            />
            <img
              className="absolute h-[14.19%] w-[12.13%] top-[21.3%] right-[54.35%] bottom-[64.52%] left-[33.52%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/sd.svg"
            />
            <img
              className="absolute h-[15.05%] w-[9.84%] top-[71.69%] right-[40.22%] bottom-[13.26%] left-[49.93%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/la.svg"
            />
            <img
              className="absolute h-[42.16%] w-[24.44%] top-[57.84%] right-[48.98%] bottom-[0%] left-[26.58%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/tx.svg"
            />
            <img
              className="absolute h-[5.13%] w-[2.98%] top-[28.27%] right-[14.62%] bottom-[66.6%] left-[82.41%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ct.svg"
            />
            <img
              className="absolute h-[10.58%] w-[2.86%] top-[15.51%] right-[13.87%] bottom-[73.91%] left-[83.27%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nh.svg"
            />
            <img
              className="absolute h-[2.98%] w-[1.35%] top-[27.94%] right-[13.59%] bottom-[69.08%] left-[85.06%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ri.svg"
            />
            <img
              className="absolute h-[9.72%] w-[2.92%] top-[16.9%] right-[16.06%] bottom-[73.38%] left-[81.02%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/vt.svg"
            />
            <img
              className="absolute h-[18.98%] w-[6.72%] top-[62.63%] right-[33%] bottom-[18.39%] left-[60.28%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/al.svg"
            />
            <img
              className="absolute h-[21.56%] w-[15.93%] top-[76.98%] right-[21.95%] bottom-[1.46%] left-[62.12%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/fl.svg"
            />
            <img
              className="absolute h-[17.29%] w-[9.51%] top-[61.54%] right-[25.6%] bottom-[21.16%] left-[64.89%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ga.svg"
            />
            <img
              className="absolute h-[18.88%] w-[6.23%] top-[63.39%] right-[39.25%] bottom-[17.72%] left-[54.52%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ms.svg"
            />
            <img
              className="absolute h-[11.81%] w-[8.82%] top-[59.99%] right-[22.23%] bottom-[28.21%] left-[68.95%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/sc.svg"
            />
            <img
              className="absolute h-[21.46%] w-[6.94%] top-[34.56%] right-[39.27%] bottom-[43.98%] left-[53.79%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/il.svg"
            />
            <img
              className="absolute h-[16.17%] w-[5.32%] top-[36.44%] right-[34.72%] bottom-[47.39%] left-[59.97%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/in.svg"
            />
            <img
              className="absolute h-[11.54%] w-[12.61%] top-[46.4%] right-[29.53%] bottom-[42.06%] left-[57.85%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ky.svg"
            />
            <img
              className="absolute h-[11.77%] w-[14.8%] top-[51.62%] right-[18.06%] bottom-[36.61%] left-[67.13%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nc.svg"
            />
            <img
              className="absolute h-[14.48%] w-[7.3%] top-[33.8%] right-[28.21%] bottom-[51.72%] left-[64.5%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/oh.svg"
            />
            <img
              className="absolute h-[9.13%] w-[14.79%] top-[54.73%] right-[28.69%] bottom-[36.14%] left-[56.52%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/tn.svg"
            />
            <img
              className="absolute h-[13.49%] w-[13.55%] top-[42.2%] right-[18.6%] bottom-[44.31%] left-[67.85%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/va.svg"
            />
            <img
              className="absolute h-[17.16%] w-[9%] top-[17.92%] right-[39.88%] bottom-[64.91%] left-[51.11%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/wi.svg"
            />
            <img
              className="absolute h-[13.59%] w-[7.77%] top-[38.86%] right-[23.11%] bottom-[47.55%] left-[69.12%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/wv.svg"
            />
            <img
              className="absolute h-[5.22%] w-[1.83%] top-[39.09%] right-[18.27%] bottom-[55.69%] left-[79.9%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1]"
              alt=""
              src="map/de.svg"
            />
            <img
              className="absolute h-[0.73%] w-[0.37%] top-[43.15%] right-[21.56%] bottom-[56.12%] left-[78.06%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="map/dc.svg"
            />
            <img
              className="absolute h-[6.55%] w-[7.82%] top-[39.65%] right-[18.32%] bottom-[53.8%] left-[73.85%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/md.svg"
            />
            <img
              className="absolute h-[9.23%] w-[2.23%] top-[32.8%] right-[17.44%] bottom-[57.97%] left-[80.33%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/nj.svg"
            />
            <img
              className="absolute h-[17.2%] w-[13.03%] top-[18.22%] right-[14.58%] bottom-[64.58%] left-[72.39%] max-w-full overflow-hidden max-h-full cursor-pointer hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/ny.svg"
              onClick={onNYClick}
            />
            <img
              className="absolute h-[11.54%] w-[10.09%] top-[30.82%] right-[18.62%] bottom-[57.64%] left-[71.29%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/pa.svg"
            />
            <img
              className="absolute h-[17.82%] w-[6.38%] top-[5.69%] right-[9.4%] bottom-[76.49%] left-[84.22%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/me.svg"
            />
            <img
              className="absolute h-[24.31%] w-[13.14%] top-[12.8%] right-[32.08%] bottom-[62.9%] left-[54.78%] max-w-full overflow-hidden max-h-full hover:animate-[10s_ease_0s_infinite_normal_both_pulsate] hover:opacity-[1] active:animate-[10s_ease-out_0s_infinite_reverse_both_bounce-top] active:opacity-[1]"
              alt=""
              src="map/mi.svg"
            />
          </div>
        </div>
        <div className="absolute top-[585px] left-[0px] rounded-3xl bg-backgrounds-cards w-[300px] overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-3xl bg-backgrounds-card-sections flex flex-col p-6 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[120%]">Tips! #2</b>
              <div className="self-stretch relative text-base leading-[150%] font-medium text-primary-white-2">
                Is it what you want? Click it!
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[772px] rounded-3xl bg-backgrounds-cards w-[300px] overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-3xl bg-backgrounds-card-sections flex flex-col p-6 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[120%]">Tips! #1</b>
              <div className="self-stretch relative text-base leading-[150%] font-medium text-primary-white-2">
                Hover on your desired location!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



		// <div className="bg-gray-900 w-full flex flex-col items-center gap-7 text-gray-200 font-inter">
		// 	<div className="flex flex-col items-center gap-7 text-center text-3xl">
		// 		<div className="flex flex-row items-center">
		// 			<b>Where</b>
		// 			<b className="text-5xl text-gray-300">LOCATION</b>
		// 			<b>Are You Now?</b>
		// 		</div>
		// 		<div className="relative w-[1418.25px] h-[770.25px] text-xl">
		// 			<div className="absolute top-[238.55px] left-[411.83px] w-[515.08px] h-[395.21px] cursor-pointer" onClick={() => router.push("/explore/malang")}>
		// 				<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/malang@2x.png" />
		// 			</div>
		// 			<div className="absolute top-[150.73px] left-[0px] w-[492.53px] h-[456.93px]">
		// 				<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/madiun@2x.png" onClick={() => router.push("/explore/madiun")} />
		// 			</div>
		// 			<div className="absolute top-[0px] left-[268.22px] w-[522.2px] h-[327.56px] cursor-pointer" onClick={() => router.push("/explore/surabaya")}>
		// 				<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/surabaya@2x.png" />
		// 			</div>
		// 			<div className="absolute top-[280.09px] left-[738.2px] w-[680.05px] h-[490.16px] cursor-pointer" onClick={() => router.push("/explore/banyuwangi")}>
		// 				<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/banyuwangi@2x.png" />
		// 			</div>
		// 			<div className="absolute top-[7.12px] left-[694.29px] w-[723.96px] h-[231.43px] cursor-pointer" onClick={() => router.push("/explore/madura")}>
		// 				<img className="h-full w-full object-cover hover:scale-110 hover:transition-transform hover:duration-200 hover:shadow-lg" alt="" src="map/madura@2x.png" />
		// 			</div>
		// 			<div className="absolute top-[128.18px] left-[1000.49px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
		// 				<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
		// 					<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
		// 						<b className="self-stretch relative leading-[120%] inline-block">Tips! #1</b>
		// 						<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Hover on your desired location!</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="absolute top-[521.01px] left-[75.96px] rounded-[24px] bg-gray-700 w-[356.05px] h-[115.35px] overflow-hidden flex flex-col items-center justify-end">
		// 				<div className="self-stretch rounded-[24px] bg-gray-500 flex flex-col p-[24px] box-border items-start justify-start">
		// 					<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
		// 						<b className="self-stretch relative leading-[120%] inline-block">Tips! #2</b>
		// 						<div className="self-stretch relative text-base leading-[150%] font-medium text-gray-1500 inline-block">Is it what you want? Click it!</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
