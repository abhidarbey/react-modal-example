import React, { useState } from 'react'

export const SamplePage = (props) => {

    const [enableInputField, setEnableInputField] = useState(false)
    const [inputValue, setInputValue] = useState()
    const [inputNotes, setInputNotes] = useState()
    const [selectedItem, setSelectedItem] = useState()

    const revenueListNetwork = props.revenueListNetwork
    const revenueMVPD = props.revenueMVPD
    const networkList = []
    let attribute = revenueMVPD["ATTRIBUTE"]
    let inputFields

    const selectItems = [
        { value: '--Select Resolution--', id: 0 },
        { value: 'Paid CompsetInputValuelete', id: 1 },
        { value: 'Paid Partial', id: 2 },
        { value: 'Ignore', id: 3 },
      ];

    const onInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const onInputNotes = (event) => {
        setInputNotes(event.target.value)
    }

    const onSelectOption = (event) => {
        if (event.target.value === "Paid Partial") {
            setSelectedItem(event.target.value)
            setEnableInputField(true)
        } else {
            setEnableInputField(false)
        }
    }

    const handleSubmit = () => {
        alert(`${inputValue} ${inputNotes} ${selectedItem}`)
    }

    revenueListNetwork.map(i => {
        if (i.mvpd === revenueMVPD["MVPD"] && i.audit_period === revenueMVPD["AUDITPERIOD"]) {
            networkList.push(i.network)
        }
    })

    const selectOption = selectItems.map(item => (
            <option key={item.id}>{item.value}</option>
        ));

    if (enableInputField) {
        inputFields = (
            <div>
                <h6>Enter Value</h6>
                <form onSubmit={handleSubmit}>
                    <input type="number" onChange={(value) => onInputValue(value)} />
                    <textarea type="text" onChange={(notes) => onInputNotes(notes)}></textarea>
                    <div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    const variable = attribute.map(i => (
        <div className="row" key={i["VARIABLE"]}>
            <div className="col">
                <h6>{i["VARIABLE"]}</h6>
                <p>{i["VALUE"]}</p>
            </div>
            <div className="col">
                <h6>Select Resolution</h6>
                <select className="form-control" onChange={(value) => onSelectOption(value)}>
                    {selectOption}
                </select>
            </div>
            <div className="col">
                {inputFields}
            </div>
        </div>
    ))

    return (
        <div className="card border-primary mb-3">
            <div className="card-header">The ID is {revenueMVPD["ID"]}</div>
            <div className="card-body">
                <div className="row">
                    <div className="col col-md-3">
                        <h5>MVDP</h5>
                        <p>{revenueMVPD["MVPD"]}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Audit Period</h5>
                        <p>{revenueMVPD["AUDITPERIOD"]}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Total Variance $</h5>
                        <p>{revenueMVPD["COMBINEDVARIANCE"]}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Network</h5>
                        {networkList.map(item => (
                                <ul>
                                    <li>{item}</li>
                                </ul>
                            ))}
                    </div> 
                </div>

                <div className="row">
                    {variable}
                </div>

            </div>
        </div>
    )
}
