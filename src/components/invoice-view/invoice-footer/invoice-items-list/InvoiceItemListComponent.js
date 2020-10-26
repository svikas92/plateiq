import React from "react"
import "./InvoiceItemListComponent.css"
import InvoiceItemComponent from "./invoice-item/InvoiceItemComponent"

function InvoiceItemListComponent() {
    return (
        <div className="invoice-details-item-table">
            <div className="invoice-details-item-table__header">
                <span className="invoice-details-item-table__header_title">Name</span>
                <span className="invoice-details-item-table__header_title">Quanity</span>
                <span className="invoice-details-item-table__header_title">Unit Price</span>
                <span className="invoice-details-item-table__header_title">Total</span>
            </div>
            <div className="invoice-details-item-table__content">
                <InvoiceItemComponent />
            </div>
        </div>
    )
}

export default InvoiceItemListComponent