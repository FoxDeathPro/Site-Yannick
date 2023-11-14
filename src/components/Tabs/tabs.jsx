import { React, useState } from "react";

const Tabs = ({ tabsData }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    // console.log(tabsData)
    console.log(selectedTab);
    return (
        <div className="background-tabs">
            <div className="tabs">
                <div className="tabs-name">
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className="tabs-onglet"
                        >
                            {tab.buttonContent}
                        </button>
                    ))}
                </div>
                <div className="tabs-content">
                    <p className="tabs-title">
                        {tabsData[selectedTab].tabHeading}
                    </p>
                    <iframe
                        className="tabs-map"
                        src={tabsData[selectedTab].map}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
