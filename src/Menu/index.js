import React, { useState } from "react";

export const Menu = ({ sections }) => {
  const [openPanel, handlePanel] = useState(false);

  const openFilterPanel = event => {
    event.stopPropagation();
    event.preventDefault();

    handlePanel(!openPanel);
  };

  const menuData = sections;
  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        {menuData &&
          menuData.map((menu, index) => {
            const submenuKey = Object.keys(menu);
            const getSubmenu = menu[submenuKey];
            console.log("pp", getSubmenu.length === 0);
            const isChildPresent = getSubmenu.length === 0 ? "hide-arrow" : "";
            return (
              <div key={`story-${index}`}>
                {submenuKey.map((menuFirst, index) => {
                  return (
                    <div className="headline-arrow">
                      <div
                        key={index}
                        className="menu"
                        onClick={openFilterPanel}
                      >
                        {menuFirst}
                      </div>

                      <span className={`${isChildPresent}`}>
                        <svg
                          width="12"
                          height="5"
                          viewBox="0 0 12 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.4073 4.87826C6.18216 5.04058 5.81843 5.04058 5.5927 4.87826L0.244292 1.02601C-0.0814308 0.791697 -0.0814308 0.410467 0.244292 0.175736C0.570015 -0.0585787 1.09866 -0.0585787 1.42438 0.175736L6.00029 3.47113L10.575 0.175736C10.9013 -0.0585787 11.43 -0.0585787 11.7557 0.175736C12.0814 0.410467 12.0814 0.791697 11.7557 1.02601L6.4073 4.87826Z"
                            fill="white"
                          />
                        </svg>
                      </span>

                      {openPanel && (
                        <ul
                          className={`sub-list ${
                            index === openPanel ? "open" : ""
                          }`}
                        >
                          {getSubmenu.map((submenuFirst, index) => (
                            <li className="submenu">{submenuFirst}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
