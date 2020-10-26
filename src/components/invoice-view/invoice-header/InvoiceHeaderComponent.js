import React from "react"
import "./InvoiceHeaderComponent.css"

function InvoiceHeaderComponent() {
    return (
        <div className="invoice-header">
            <div className="invoice-header__title">
                <i className="material-icons">email</i>
                <span>DIRECT</span>
            </div>
            <div className="invoice-actions-container">
                <div className="invoice-actions">
                    <span>More</span>
                    <i className="material-icons">arrow_drop_down</i>
                    <div className="invoice-actions__list">
                        <div className="invoice-action-option">
                            <span>Export</span>
                        </div>
                        <div className="invoice-action-option">
                            <span>Mark as exported</span>
                        </div>
                        <div className="invoice-action-option invoice-special-option">
                            <span>Setup Vendor</span>
                        </div>
                        <div className="invoice-action-option">
                            <span>Flag Invoice</span>
                            <i className="material-icons">flag</i>
                        </div>
                        <div className="invoice-action-option">
                            <span>Archive Invoice</span>
                            <i className="material-icons">archive</i>
                        </div>
                        <div className="invoice-action-option invoice-delete-option">
                            <span>Delete Invoice</span>
                            <i className="material-icons">delete</i>
                        </div>
                    </div>
                </div>
                <button className="primary-button">Approve</button>
            </div>
        </div>
    )
}

export default InvoiceHeaderComponent