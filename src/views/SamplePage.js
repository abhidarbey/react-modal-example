import React from 'react'

export const SamplePage = (props) => {

    const revenueListNetwork = props.revenueListNetwork
    const revenueMVPD = props.revenueMVPD
    const networkList = []
    let attribute = revenueMVPD["ATTRIBUTE"]

    const selectItems = [
        { value: '--Select Resolution--', id: 0 },
        { value: 'Paid Complete', id: 1 },
        { value: 'Paid Partial', id: 2 },
        { value: 'Ignore', id: 3 },
      ];

    revenueListNetwork.map(i => {
        if (i.mvpd === revenueMVPD["MVPD"] && i.audit_period === revenueMVPD["AUDITPERIOD"]) {
            networkList.push(i.network)
        }
    })

    const selectOption = selectItems.map(item => (
            <option key={item.id}>{item.value}</option>
        ));

    const variable = attribute.map(i => (
        <div className="row" key={i["VARIABLE"]}>
            <div className="col-md-8">
                <h6>{i["VARIABLE"]}</h6>
                <p>{i["VALUE"]}</p>
            </div>
            <div className="col-md-8">
                <h6>Select Resolution</h6>
                <select className="form-control">
                    {selectOption}
                </select>
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
