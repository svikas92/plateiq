import React from "react"
import "./InvoiceHistoryItemComponent.css"

function InvoiceHistoryItemComponent() {
    return (
        <div className="invoice-details-history__list_item">
            <div className="invoice-details-history__list_item_timestamp">
                <h5>Today</h5>
                <p>9:25 AM</p>
            </div>
            <div className="invoice-details-history__list_item_flag">
                <i className="material-icons">stop_circle</i>
            </div>
            <div className="invoice-details-history__list_item_info">
                <h5>Flagged by John Doe</h5>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default InvoiceHistoryItemComponent