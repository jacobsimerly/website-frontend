import { useId, useMemo, useState } from "react";

export default function ContactMethodTabs({
  tabs,
  defaultTabId,
  value,
  onChange,
  borderless = false,
  tabListWrapperClassName = "",
  tabListClassName = "grid grid-cols-3 gap-2 mb-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-4",
  tabButtonBaseClassName = "w-full sm:w-auto px-2 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900/30",
  panelBaseClassName = "mb-8 sm:mb-10",
}) {
  const uid = useId();

  const firstTabId = useMemo(() => tabs?.[0]?.id, [tabs]);
  const initialId = defaultTabId ?? firstTabId;

  const [uncontrolled, setUncontrolled] = useState(initialId);
  const isControlled = value !== undefined;
  const activeId = isControlled ? value : uncontrolled;

  if (!tabs?.length) return null;

  const setActive = (id) => {
    if (!isControlled) setUncontrolled(id);
    onChange?.(id);
  };

  return (
    <>
      <div className={tabListWrapperClassName}>
        <div className={tabListClassName} role="tablist">
          {tabs.map((tab) => {
            const selected = activeId === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${uid}-panel-${tab.id}`}
                id={`${uid}-tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={
                  `${
                    borderless
                      ? tabButtonBaseClassName
                          .replaceAll(" border ", " ")
                          .replaceAll(" border", " ")
                      : tabButtonBaseClassName
                  } ` +
                  (selected
                    ? borderless
                      ? "bg-brand-900 text-white scale-105"
                      : "bg-brand-900 text-white border-brand-900 shadow-lg scale-105"
                    : borderless
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50")
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${uid}-panel-${tab.id}`}
          aria-labelledby={`${uid}-tab-${tab.id}`}
          hidden={activeId !== tab.id}
          className={`${panelBaseClassName} ${tab.panelWrapperClassName ?? ""}`}
        >
          {typeof tab.content === "function" ? tab.content() : tab.content}
        </div>
      ))}
    </>
  );
}
