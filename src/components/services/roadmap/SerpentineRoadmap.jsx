import { useEffect, useMemo, useState } from "react";

import Xarrow, { Xwrapper } from "react-xarrows";

export default function SerpentineRoadmap({
  items,
  markerIdPrefix = "arrowhead-roadmap",
  titleClassName = "text-sm font-bold tracking-widest text-brand-800 uppercase",
  phaseBadgeClassName = "inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold",
  mobilePhaseRingClassName = "ring-4 ring-white",
  mobileCardClassName = "rounded-2xl border border-slate-200 bg-slate-50 p-6",
  desktopCardClassName = "relative z-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm",
  renderItemBody,
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const stroke = "rgb(226 232 240)";
  const arrowFill = "rgb(203 213 225)";

  const getNodeId = useMemo(() => {
    return (item, idx) => {
      const raw = item?.phase ?? idx;
      const safe = String(raw)
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9_-]/g, "");
      return `${markerIdPrefix}-node-${safe || idx}`;
    };
  }, [markerIdPrefix]);

  const [nodeWidths, setNodeWidths] = useState({});

  useEffect(() => {
    const nodeIds = items.map((item, idx) => getNodeId(item, idx));
    const elements = nodeIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((entry) => Boolean(entry.el));

    if (elements.length === 0) return;

    const updateAll = () => {
      setNodeWidths((prev) => {
        let changed = false;
        const next = { ...prev };
        for (const { id, el } of elements) {
          const width = el.getBoundingClientRect().width;
          if (next[id] !== width) {
            next[id] = width;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    };

    updateAll();

    let cleanup = () => {};
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => updateAll());
      for (const { el } of elements) ro.observe(el);
      cleanup = () => ro.disconnect();
    } else {
      window.addEventListener("resize", updateAll);
      cleanup = () => window.removeEventListener("resize", updateAll);
    }

    return cleanup;
  }, [items, getNodeId]);

  return (
    <div className="mt-8">
      {/* Mobile: vertical node-to-node connectors */}
      <div className="lg:hidden">
        {items.map((item, idx) => (
          <div
            key={`${markerIdPrefix}-${item.phase ?? idx}`}
            className="relative"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <span
                  className={`${phaseBadgeClassName} ${mobilePhaseRingClassName}`}
                >
                  {item.phase}
                </span>
              </div>
              <div className="w-full">
                <div className={mobileCardClassName}>
                  <p className={titleClassName}>{item.title}</p>
                  {renderItemBody ? (
                    <div className="mt-4">{renderItemBody(item)}</div>
                  ) : null}
                </div>
              </div>
            </div>

            {idx < items.length - 1 && (
              <div className="ml-4 h-10 relative">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 w-8 h-full"
                  viewBox="0 0 32 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M16 0 C 16 30, 16 70, 16 100"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: serpentine connectors that curve at edges */}
      <div className="hidden lg:block">
        <Xwrapper>
          <div className="relative overflow-visible px-10">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const nodeId = getNodeId(item, idx);

              return (
                <div key={nodeId} className="relative">
                  <div className="grid grid-cols-12 gap-6 items-start">
                    <div
                      className={
                        isLeft ? "col-span-8" : "col-span-8 col-start-5"
                      }
                    >
                      <div id={nodeId} className={desktopCardClassName}>
                        <div className="flex items-center gap-3">
                          <span className={phaseBadgeClassName}>
                            {item.phase}
                          </span>
                          <p className={titleClassName}>{item.title}</p>
                        </div>

                        {renderItemBody ? (
                          <div className="mt-4">{renderItemBody(item)}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {idx < items.length - 1 ? (
                    <div className="h-32 -my-10" aria-hidden="true" />
                  ) : null}
                </div>
              );
            })}

            {items.slice(0, -1).map((item, idx) => {
              const startId = getNodeId(item, idx);
              const endId = getNodeId(items[idx + 1], idx + 1);

              const startIsRightAligned = idx % 2 === 1;
              const endIsRightAligned = (idx + 1) % 2 === 1;

              const startSide = startIsRightAligned ? "left" : "right";
              const startOffsetOutX = startIsRightAligned ? -22 : 22;

              const endWidth = nodeWidths[endId] ?? 0;

              const endOffsetX = endWidth
                ? endIsRightAligned
                  ? endWidth / 4
                  : -endWidth / 4
                : 0;

              return (
                <Xarrow
                  key={`${startId}__${endId}`}
                  start={startId}
                  end={endId}
                  startAnchor={{
                    position: startSide,
                    offset: { x: startOffsetOutX },
                  }}
                  endAnchor={{
                    position: "top",
                    offset: { x: endOffsetX, y: -10 },
                  }}
                  path="smooth"
                  curveness={1}
                  color={stroke}
                  strokeWidth={3}
                  headSize={7}
                  zIndex={20}
                  headColor={arrowFill}
                />
              );
            })}
          </div>
        </Xwrapper>
      </div>
    </div>
  );
}
