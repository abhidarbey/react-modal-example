import React from 'react'

export const SamplePage = (props) => {

    const revenueListNetwork = props.revenueListNetwork
    const revenueMVPD = props.data
    const networkList = []

    const selectItems = [
        { value: '--Select Resolution--', id: 0 },
        { value: 'Paid Complete', id: 1 },
        { value: 'Paid Partial', id: 2 },
        { value: 'Ignore', id: 3 },
      ];

    let selectElement;

    revenueListNetwork.map(i => {
        if (i.mvpd === revenueMVPD.mvpd && i.audit_period === revenueMVPD.audit_period) {
            networkList.push(i.network)
        }
    })

    const selectOption = selectItems.map(item => (
            <option key={item.id}>{item.value}</option>
        ));

    if (revenueMVPD.attribute === "DIGITAL ECONOMY VAR $") {
        selectElement = (
            <div className="row">
                <div className="col-md-8">
                    <h6>{revenueMVPD.attribute}</h6>
                    <p>{revenueMVPD.value}</p>
                </div>
                <div className="col-md-8">
                    <h6>Select Resolution</h6>
                    <select className="form-control">
                        {selectOption}
                    </select>
                </div>
            </div>
          );
      } else if (revenueMVPD.attribute === "BULK EBU VAR $") {
        selectElement = (
            <div className="row">
                <div className="col-md-8">
                    <h6>{revenueMVPD.attribute}</h6>
                    <p>{revenueMVPD.value}</p>
                </div>
                <div className="col-md-8">
                    <h6>Select Resolution</h6>
                    <select className="form-control">
                        {selectOption}
                    </select>
                </div>
            </div>
          );
      } else if (revenueMVPD.attribute === "RATE VAR $") {
        selectElement = (
            <div className="row">
                <div className="col-md-8">
                    <h6>{revenueMVPD.attribute}</h6>
                    <p>{revenueMVPD.value}</p>
                </div>
                <div className="col-md-8">
                    <h6>Select Resolution</h6>
                    <select className="form-control">
                        {selectOption}
                    </select>
                </div>
            </div>
          );
      }

    return (
        <div className="card border-primary mb-3">
            <div className="card-header">The ID is {props.data.id}</div>
            <div className="card-body">
                <div className="row">
                    <div className="col col-md-3">
                        <h5>MVDP</h5>
                        <p>{props.data.mvpd}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Audit Period</h5>
                        <p>{props.data.audit_period}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Total Variance $</h5>
                        <p>{props.data.combined_variance}</p>
                    </div>
                    <div className="col col-md-3">
                        <h5>Network</h5>
                        {networkList.map(item => (
                                <p>{item}</p>
                            ))}
                    </div> 
                </div>

                <div className="row">
                    {selectElement}
                </div>

            </div>
        </div>
    )
}
