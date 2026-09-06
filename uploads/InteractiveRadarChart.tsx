import { useState } from "react";
import svgPaths from "../imports/svg-fvwixy7hi3";
import { motion } from "motion/react";

type TabType = "team" | "participants" | "company";

interface DataPoint {
  x: number;
  y: number;
  value: number;
  label: string;
}

// Sample data for different tabs
const chartData = {
  team: {
    series1: {
      path: svgPaths.p2b3c1100,
      fillPath: svgPaths.pa615680,
      color: "#A48AFB",
      name: "میانگین خود ارزیابی تیم",
    },
    series2: {
      path: svgPaths.p1c85e400,
      fillPath: svgPaths.p1ecbbc00,
      color: "#EE46BC",
      name: "میانگین نمره نهایی تیم",
    },
  },
  participants: {
    series1: {
      path: svgPaths.p2b3c1100,
      fillPath: svgPaths.pa615680,
      color: "#10B981",
      name: "گروه A",
    },
    series2: {
      path: svgPaths.p1c85e400,
      fillPath: svgPaths.p1ecbbc00,
      color: "#F59E0B",
      name: "گروه B",
    },
  },
  company: {
    series1: {
      path: svgPaths.p2b3c1100,
      fillPath: svgPaths.pa615680,
      color: "#3B82F6",
      name: "شرکت شما",
    },
    series2: {
      path: svgPaths.p1c85e400,
      fillPath: svgPaths.p1ecbbc00,
      color: "#EF4444",
      name: "میانگین صنعت",
    },
  },
};

function Frame211995() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-right w-full">
      <p
        className="font-['IRANYekanX:Bold',_sans-serif] leading-[30px] relative shrink-0 text-[#344054] text-[16px] w-full font-[IRANYekanX] font-bold"
        dir="auto"
      >
        نمای کلی شاخص‌های اصلی ارزیابی
      </p>
      <p
        className="font-['IRANYekanX:Regular',_sans-serif] leading-[26px] relative shrink-0 text-[#717680] text-[14px] w-full font-[IRANYekanX]"
        dir="auto"
      >
        در این بخش می‌توانید وضعیت خود را در هر یک از شاخص‌ها بر
        اساس گروه‌های ارزیابی‌کننده مقایسه کنید.
      </p>
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 transition-all duration-200 hover:bg-gray-100 ${
        isActive
          ? "bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]"
          : ""
      }`}
    >
      <div className="flex flex-col font-['IRANYekanX:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap">
        <p
          className={`leading-[26px] whitespace-pre transition-colors font-[IRANYekanX] ${isActive ? "text-[#344054]" : "text-[#667085]"}`}
          dir="auto"
        >
          {label}
        </p>
      </div>
    </button>
  );
}

function HorizontalTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center justify-end p-[4px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#f2f4f7] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <TabButton
        label="مقایسه با شرکت"
        isActive={activeTab === "company"}
        onClick={() => setActiveTab("company")}
      />
      <TabButton
        label="مقایسه گروه‌های شرکت‌کننده"
        isActive={activeTab === "participants"}
        onClick={() => setActiveTab("participants")}
      />
      <TabButton
        label="وضعیت تیم"
        isActive={activeTab === "team"}
        onClick={() => setActiveTab("team")}
      />
    </div>
  );
}

function Lines() {
  return (
    <div className="absolute bottom-[4.18%] left-1/2 top-[12.17%] translate-x-[-50%] w-[440px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 440 440"
      >
        <g id="Lines">
          <path
            d={svgPaths.p31e9ed00}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.pb93e780}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p239e3880}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p2808a200}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p373d0f0}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p16cec880}
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function ScaleBadge({
  value,
  top,
}: {
  value: string;
  top: string;
}) {
  return (
    <div
      className={`absolute bg-neutral-50 box-border content-stretch flex items-center left-1/2 px-[8px] py-[2px] rounded-[16px] translate-x-[-50%] translate-y-[-50%]`}
      style={{ top }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <p className="font-['IRANYekanX:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[12px] text-center text-nowrap whitespace-pre">
        {value}
      </p>
    </div>
  );
}

function Scale() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-106px)] translate-x-[-50%] translate-y-[-50%]">
      <ScaleBadge value="۵.۰" top="calc(50% - 194px)" />
      <ScaleBadge value="۴.۰" top="calc(50% - 150px)" />
      <ScaleBadge value="۳.۰" top="calc(50% - 106px)" />
      <ScaleBadge value="۲.۰" top="calc(50% - 62px)" />
      <ScaleBadge value="۱.۰" top="calc(50% - 18px)" />
    </div>
  );
}

function Categories() {
  return (
    <div className="absolute contents font-['IRANYekanX:Medium',_sans-serif] inset-[5.32%_13.17%_5.32%_13.9%] leading-[0] not-italic text-[#717680] text-[12px] text-center">
      <div className="absolute flex flex-col inset-[5.32%_42.56%_90.88%_42.56%] justify-center text-nowrap">
        <p
          className="leading-[20px] whitespace-pre font-[IRANYekanX]"
          dir="auto"
        >{` رهبری و مسئولیت‌پذیری`}</p>
      </div>
      <div className="absolute flex flex-col inset-[37.07%_77.32%_55.32%_13.9%] justify-center">
        <p
          className="leading-[20px] font-[IRANYekanX]"
          dir="auto"
        >{` رشد فردی و یادگیری`}</p>
      </div>
      <div className="absolute flex flex-col inset-[37.07%_13.17%_55.32%_77.32%] justify-center">
        <p
          className="leading-[20px] font-[IRANYekanX]"
          dir="auto"
        >
          تفکر تحلیلی و حل مسئله
        </p>
      </div>
      <div className="absolute flex flex-col inset-[90.88%_58.54%_5.32%_27.56%] justify-center text-nowrap">
        <p
          className="leading-[20px] whitespace-pre font-[IRANYekanX]"
          dir="auto"
        >
          نتیجه‌محوری و بهره‌وری
        </p>
      </div>
      <div className="absolute flex flex-col inset-[90.88%_28.54%_5.32%_61.71%] justify-center text-nowrap">
        <p
          className="leading-[20px] whitespace-pre font-[IRANYekanX]"
          dir="auto"
        >
          همکاری و تعامل
        </p>
      </div>
    </div>
  );
}

function AnimatedSeries({
  fillPath,
  linePath,
  color,
  isVisible,
  onHover,
}: {
  fillPath: string;
  linePath: string;
  color: string;
  isVisible: boolean;
  onHover: (hovering: boolean) => void;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="cursor-pointer"
    >
      <path d={fillPath} fill={color} opacity="0.1" />
      <motion.path
        d={linePath}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{ opacity: 1, strokeWidth: 2 }}
      />
    </motion.g>
  );
}

function RadarChart({ activeTab }: { activeTab: TabType }) {
  const [series1Visible, setSeries1Visible] = useState(true);
  const [series2Visible, setSeries2Visible] = useState(true);
  const [hoveredSeries, setHoveredSeries] = useState<
    number | null
  >(null);

  const data = chartData[activeTab];

  return (
    <div className="bg-white h-[526px] relative shrink-0 w-[820px] px-[20px] p-[0px] m-[0px] flex items-center justify-center">
      <Lines />
      <Scale />
      <Categories />

      <div className="absolute inset-[15.49%_29.51%_14.16%_25.18%]">
        <div className="absolute inset-[-0.14%_-0.13%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 378 372"
          >
            <AnimatedSeries
              fillPath={data.series1.fillPath}
              linePath={data.series1.path}
              color={data.series1.color}
              isVisible={series1Visible}
              onHover={(hovering) =>
                setHoveredSeries(hovering ? 1 : null)
              }
            />
          </svg>
        </div>
      </div>

      <div className="absolute inset-[16.82%_25.37%_16.16%_28.78%]">
        <div className="absolute inset-[-0.14%_-0.13%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 378 354"
          >
            <AnimatedSeries
              fillPath={data.series2.fillPath}
              linePath={data.series2.path}
              color={data.series2.color}
              isVisible={series2Visible}
              onHover={(hovering) =>
                setHoveredSeries(hovering ? 2 : null)
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LegendItem({
  color,
  label,
  isVisible,
  onClick,
}: {
  color: string;
  label: string;
  isVisible: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex gap-[8px] items-center justify-center relative shrink-0 transition-opacity hover:opacity-80 ${
        !isVisible ? "opacity-40" : ""
      }`}
    >
      <p
        className="font-['IRANYekanX:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[12px] text-center text-nowrap whitespace-pre font-[IRANYekanX]"
        dir="auto"
      >
        {label}
      </p>
      <div className="relative shrink-0 size-[8px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" fill={color} r="4" />
        </svg>
      </div>
    </button>
  );
}

function Legend({ activeTab }: { activeTab: TabType }) {
  const [series1Visible, setSeries1Visible] = useState(true);
  const [series2Visible, setSeries2Visible] = useState(true);
  const data = chartData[activeTab];

  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0">
      <LegendItem
        color={data.series2.color}
        label={data.series2.name}
        isVisible={series2Visible}
        onClick={() => setSeries2Visible(!series2Visible)}
      />
      <LegendItem
        color={data.series1.color}
        label={data.series1.name}
        isVisible={series1Visible}
        onClick={() => setSeries1Visible(!series1Visible)}
      />
    </div>
  );
}

export function InteractiveRadarChart() {
  const [activeTab, setActiveTab] = useState<TabType>("team");

  return (
    <div className="bg-white relative max-w-[1200px] w-full rounded-[16px] shadow-lg">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[20px] relative size-full">
          <Frame211995 />

          <div className="relative rounded-[12px] shrink-0 w-full">
            <div
              aria-hidden="true"
              className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[12px]"
            />
            <div className="flex flex-col items-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[24px] py-[20px] relative w-full">
                <HorizontalTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />

                <div className="flex items-center justify-center leading-[0] relative shrink-0 w-full">
                  <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[32px] items-center justify-center ml-0 mt-0 relative w-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 m-[0px]">
                      <RadarChart activeTab={activeTab} />
                      <Legend activeTab={activeTab} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}