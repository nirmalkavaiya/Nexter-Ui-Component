import React, { useState, useCallback } from 'react';

function Tabs({
  variant = 'pill',
  tabs = [],
  activeTab,
  onTabChange,
  defaultTab,
  className = '',
}) {
  const isControlled = activeTab !== undefined;
  const [internal, setInternal] = useState(defaultTab || (tabs[0] && tabs[0].id));
  const current = isControlled ? activeTab : internal;

  const [activeSubTab, setActiveSubTab] = useState({});

  const handleTab = useCallback(
    (id) => {
      if (isControlled) {
        onTabChange && onTabChange(id);
      } else {
        setInternal(id);
        onTabChange && onTabChange(id);
      }
    },
    [isControlled, onTabChange]
  );

  const variantClass = variant !== 'pill' ? ` nxp-tabs--${variant}` : '';
  const isVertical = variant === 'vertical';

  const activeTabObj = tabs.find((t) => t.id === current);

  return (
    <div className={`nxp-tabs${variantClass} ${className}`} role="tablist">
      <div className="nxp-tabs__list">
        {tabs.map((tab) => (
          <React.Fragment key={tab.id}>
            <button
              className={`nxp-tabs__tab${current === tab.id ? ' is-active' : ''}`}
              role="tab"
              aria-selected={current === tab.id}
              onClick={() => handleTab(tab.id)}
            >
              {tab.label}
            </button>
            {isVertical && tab.subTabs && current === tab.id && (
              <div className="nxp-tabs__sub-list">
                {tab.subTabs.map((sub) => (
                  <button
                    key={sub.id}
                    className={`nxp-tabs__sub${activeSubTab[tab.id] === sub.id ? ' is-active' : ''}`}
                    onClick={() => setActiveSubTab((prev) => ({ ...prev, [tab.id]: sub.id }))}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {activeTabObj && activeTabObj.content && (
        <div className={`nxp-tabs__panel${isVertical ? ' nxp-tabs__content' : ''}`} role="tabpanel">
          {activeTabObj.content}
        </div>
      )}
    </div>
  );
}

export { Tabs };
export default Tabs;
