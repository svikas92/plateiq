import React from "react"
import "./InvoiceDetailsSummaryComponent.css"

function InvoiceDetailsSummaryComponent() {
    return (
        <div className="invoice-details-summary">
            <div className="invoice-details-summary__col">
                <div className="invoice-details-summary__col_text">00003526</div>
            </div>
            <div className="invoice-details-summary__col">
                <div className="invoice-details-summary__col_text">July 09, 2017</div>
            </div>
            <div className="invoice-details-summary__col">
                <div className="invoice-details-summary__col_text">Monty's Cheese Shop</div>
            </div>
            <div className="invoice-details-summary__col">
                <div className="invoice-details-summary__col_subtext">Lorem ipsum dolor sit amet</div>
            </div>
            <div className="invoice-details-summary__col invoice-details-summary__col_total">
                <div className="invoice-details-summary__col_text">$10,000.00</div>
                <div className="invoice-details-summary__col_subtext">total</div>
            </div>
        </div>
    )
}

export default InvoiceDetailsSummaryComponent