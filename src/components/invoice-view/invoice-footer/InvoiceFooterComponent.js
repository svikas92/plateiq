import React, { useState } from "react"
import "./InvoiceFooterComponent.css"
import InvoiceItemListComponent from "./invoice-items-list/InvoiceItemListComponent"
import InvoiceHistoryComponent from "./invoice-history/InvoiceHistoryComponent"

function InvoiceFooterComponent() {
    const [activeTab, setActiveTab] = useState("line_items")

    const renderActiveTab = (tabId) => {
        switch (tabId) {
            case "history":
                return (<InvoiceHistoryComponent />)
            case "line_items":
                return (<InvoiceItemListComponent />)
            default:
                return (<InvoiceItemListComponent />)
        }
    }

    return (
        <div className="invoice-details-footer">
            <div className="invoice-details-footer__tabs">
                <button
                    onClick={() => setActiveTab("line_items")}
                    className={activeTab === "line_items" ? "footer-tab-link active" : "footer-tab-link"}
                >
                    Line Items
                        </button>
                <button
                    onClick={() => setActiveTab("history")}
                    className={activeTab === "history" ? "footer-tab-link active" : "footer-tab-link"}
                >
                    History
                        </button>
            </div>

            {renderActiveTab(activeTab)}
        </div>
    )
}

export default InvoiceFooterComponent