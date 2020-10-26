import React from "react"
import "./InvoiceDetailsExpandedComponent.css"

function InvoiceDetailsExpandedComponent() {
    return (
        <div className="invoice-details-expanded">
            <div className="invoice-details-expanded__col">
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Invoice No
                          </div>
                    <div className="invoice-details-item__value">
                        00003526
                          </div>
                </div>
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Posting Date
                          </div>
                    <div className="invoice-details-item__value">
                        Jul 14, 2017
                          </div>
                </div>
            </div>
            <div className="invoice-details-expanded__col">
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Invoice Type
                          </div>
                    <div className="invoice-details-item__value">
                        Receipt
                          </div>
                </div>
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Invoice Date
                          </div>
                    <div className="invoice-details-item__value">
                        Jul 09, 2017
                          </div>
                </div>
            </div>

            <div className="invoice-details-expanded__col">
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Restaurant
                          </div>
                    <div className="invoice-details-item__value">
                        Monty's Cheese Shop
                          </div>
                </div>
                <div className="invoice-details-item">
                    <div className="invoice-details-item__title">
                        Due Date
                          </div>
                    <div className="invoice-details-item__value">
                        Sep 09, 2017
                          </div>
                </div>
            </div>
            <div className="invoice-details-expanded__col">
                <div className="invoice-details-item-list">
                    <div className="invoice-details-item">
                        <div className="invoice-details-item__title">subtotal</div>
                        <div className="invoice-details-item__value">$1300.00</div>
                    </div>
                    <div className="invoice-details-item">
                        <div className="invoice-details-item__title">tax</div>
                        <div className="invoice-details-item__value">$26.32</div>
                    </div>
                </div>
                <div className="invoice-details-item-list">
                    <div className="invoice-details-item">
                        <div className="invoice-details-item__title">total</div>
                        <div className="invoice-details-item__value bold-text">$10,000.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetailsExpandedComponent