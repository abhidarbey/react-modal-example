import React, { useState } from 'react';
import Modal from 'react-modal';
import revenueListMVPD from './reveneListMVPD';
import revenueListNetwork from './revenueListNetwork';
import { SamplePage } from './SamplePage';

export const Resolution = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const clickOpen = () => {
        setModalIsOpen(true)
    }

    const revenueMVPD = revenueListMVPD.map(element => (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.mvpd}</td>
        <td>{element.audit_period}</td>
        <td>{element.due}</td>
        <td>{element.paid}</td>
        <td>{element.combined_variance}</td>
        <td>{element.resolved}</td>
        <td>{element.value}</td>
        <td>{element.status}</td>
        <td>
            <button className="btn btn-primary" onClick={clickOpen}>Add Resolution</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <SamplePage data={element} revenueListNetwork={revenueListNetwork} />
            </Modal>
        </td>
        {/* <td>
          <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <button className="btn btn-primary" onClick={clickOpen}>Add Resolution</button>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <SamplePage data={element} name="Pune" />
                    </Modal>
                    <button className="btn btn-primary">Resolution Details</button>
                </div>
         </div>
        </td> */}
      </tr>
    ));

    return (
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">MVPD</th>
                        <th scope="col">Audit Period</th>
                        <th scope="col">$ Due</th>
                        <th scope="col">$ Paid</th>
                        <th scope="col">$ Total Vari.</th>
                        <th scope="col">$ Resolved</th>
                        <th scope="col">$ Collected</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {revenueMVPD}
                </tbody>
            </table>
        </div>
    )
}
