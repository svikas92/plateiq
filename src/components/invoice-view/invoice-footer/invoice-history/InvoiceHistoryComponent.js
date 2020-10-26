import React from "react"
import "./InvoiceHistoryComponent.css"
import InvoiceHistoryItemComponent from "./invoice-history-item/InvoiceHistoryItemComponent"

function InvoiceHistoryComponent() {
    return (
        <div className="invoice-details-history">
            <h3>Recent Activity</h3>
            <div className="invoice-details-history__list">
                {new Array(3).fill(0).map(() => { return (<InvoiceHistoryItemComponent />) })}
            </div>
        </div>
    )
}

export default InvoiceHistoryComponent