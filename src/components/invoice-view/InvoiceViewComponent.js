import React from "react"
import InvoiceHeaderComponent from "./invoice-header/InvoiceHeaderComponent"
import InvoiceDetailsComponent from "./invoice-details/InvoiceDetailsComponent"
import InvoiceFooterComponent from "./invoice-footer/InvoiceFooterComponent"

function InvoiceViewComponent() {
    return (
        <>
            <InvoiceHeaderComponent />
            <InvoiceDetailsComponent />
            <InvoiceFooterComponent />
        </>
    )
}

export default InvoiceViewComponent