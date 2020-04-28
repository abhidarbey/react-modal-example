import React, { useState } from 'react';
import Modal from 'react-modal';
import revenueListMVPD from './reveneListMVPD';
import revenueListNetwork from './revenueListNetwork';
import { SamplePage } from './SamplePage';

Modal.setAppElement('#root')

export const Resolution = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    const clickOpen = (element) => {
        setModalIsOpen(true)
        setModalData(element)
    }

    const clickClose = () => {
        setModalIsOpen(false)
    }

    const revenueMVPD = revenueListMVPD.map(element => (
      <tr key={element["ID"]}>
        <td>{element["ID"]}</td>
        <td>{element["MVPD"]}</td>
        <td>{element["AUDITPERIOD"]}</td>
        <td>{element["DUE"]}</td>
        <td>{element["PAID"]}</td>
        <td>{element["COMBINEDVARIANCE"]}</td>
        <td>{element["RESOLVED"]}</td>
        <td>{element["RESOLUTION"]}</td>
        <td>
          <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <button className="btn btn-primary" onClick={() => clickOpen(element)}>
                        Add Resolution
                    </button>
                    <button className="btn btn-primary">
                        Resolution Details
                    </button>
                </div>
         </div>
        </td>
      </tr>
    ));

    return (
        <div className="container">
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">MVPD</th>
                        <th scope="col">Audit Period</th>
                        <th scope="col">$ Due</th>
                        <th scope="col">$ Paid</th>
                        <th scope="col">$ Comb. Var.</th>
                        <th scope="col">$ Resolved</th>
                        <th scope="col">$ Resolution</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {revenueMVPD}
                </tbody>
            </table>
            
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <SamplePage revenueMVPD={modalData} revenueListNetwork={revenueListNetwork} />
                  <button className="btn btn-primary" onClick={clickClose}>
                        Close
                  </button>
            </Modal>
            
        </div>
    )
}
