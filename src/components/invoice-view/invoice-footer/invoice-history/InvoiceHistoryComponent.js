import React from "react"
import "./InvoiceHistoryComponent.css"
import InvoiceHistoryItemComponent from "./invoice-history-item/InvoiceHistoryItemComponent"

function InvoiceHistoryComponent() {
    return (
        <div className="invoice-details-history">
            <h2>Recent Activity</h2>
            <div className="invoice-details-history__list">
                <InvoiceHistoryItemComponent />
            </div>
        </div>
    )
}

export default InvoiceHistoryComponent