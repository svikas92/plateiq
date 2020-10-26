import React, { useState } from "react"
import "./InvoiceDetailsComponent.css"
import InvoiceDetailsExpandedComponent from "./invoice-details-expanded/InvoiceDetailsExpandedComponent"
import InvoiceDetailsSummaryComponent from "./invoice-details-summary/InvoiceDetailsSummaryComponent"

function InvoiceDetailsComponent() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="invoice-details">
            <div className="invoice-details__header">
                {expanded ?
                    <div className="invoice-details__header__subtitle">Vendor</div>
                    : <></>
                }
                <div className="invoice-details__header__title">
                    <h2>Freguesia Cheese</h2>
                    {expanded ?
                        <i onClick={() => setExpanded(false)} className="material-icons">keyboard_arrow_up</i>
                        : <i onClick={() => setExpanded(true)} className="material-icons">keyboard_arrow_down</i>
                    }
                </div>
                {expanded ?
                    <div className="invoice-details__header__additional_info">
                        <i className="material-icons">check_circle_outline</i>
                        <span>This vendor is mapped</span>
                    </div> : <></>
                }
            </div>

            {expanded ?
                <InvoiceDetailsExpandedComponent />
                : <InvoiceDetailsSummaryComponent />
            }

            {expanded === true ?

                <div className="invoice-user-memo">
                    <i className="material-icons">chat_bubble_outline</i>
                    <input type="text" name="user_memo" placeholder="Click to enter Memo" />
                </div> : <></>}
        </div>
    )
}

export default InvoiceDetailsComponent