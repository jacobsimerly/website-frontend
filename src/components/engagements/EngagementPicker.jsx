import { useMemo, useState } from "react";

export default function EngagementPicker({
  engagements,
  initialEngagementId,
  onCtaClick,
}) {
  const initial = useMemo(() => {
    if (!engagements?.length) return null;
    if (!initialEngagementId) return engagements[0];
    return (
      engagements.find((e) => e.id === initialEngagementId) || engagements[0]
    );
  }, [engagements, initialEngagementId]);

  const [activeTab, setActiveTab] = useState(initial);

  if (!activeTab) return null;

  const shouldSpanLast = engagements.length % 2 === 1;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-8 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
        {engagements.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item)}
            className={`w-full sm:w-auto px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
              shouldSpanLast && idx === engagements.length - 1
                ? "col-span-2"
                : ""
            } ${
              activeTab.id === item.id
                ? "bg-brand-800 text-white border-brand-800 shadow-lg scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
            }`}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-200 shadow-sm sm:min-h-136">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {activeTab.headline}
            </h3>
            <p className="text-brand-800 font-medium mb-6">
              {activeTab.subhead}
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              {activeTab.description}
            </p>

            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-slate-200">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Best For
                </h4>
                <ul className="space-y-2">
                  {activeTab.bestFor.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Typical Timeline
                </h4>
                <p className="text-slate-900 font-bold">{activeTab.timeline}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onCtaClick?.(activeTab)}
              className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-900 hover:bg-brand-800"
            >
              {activeTab.cta}
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-sm lg:max-w-md">
              <div
                role="img"
                aria-label={activeTab.tabLabel}
                className={
                  "w-full h-auto drop-shadow-md transition-all duration-500 " +
                  (activeTab.iconColorClassName
                    ? activeTab.iconColorClassName
                    : "") +
                  " [&_svg]:h-full [&_svg]:w-full [&_svg]:block " +
                  (activeTab.recolorPurpleAccent
                    ? " **:[[fill='#6c63ff']]:fill-current **:[[fill='#6C63FF']]:fill-current"
                    : "")
                }
                dangerouslySetInnerHTML={{ __html: activeTab.illustration }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
