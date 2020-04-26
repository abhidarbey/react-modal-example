import React, { useState } from 'react';
import Modal from 'react-modal';
import itemList from './itemList';

Modal.setAppElement('#root')

export const TestModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [items, setItems] = useState(itemList)

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: "Priyanka"
        }])
    }

    const clickOpen = () => {
        setModalIsOpen(true)
    }

    const clickClose = () => {
        setModalIsOpen(false)
    }

    const clickSave= () => {
        setModalIsOpen(false)
    }

    return (
        <div>
            {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button> */}
            <button className="btn btn-primary" onClick={clickOpen}>Open</button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div className="card border-primary mb-3">
                    <div className="card-header">Add Resolution</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-md-3">
                                <h5>MVDP</h5>
                                <p>MVDP Name</p>
                            </div>
                            <div className="col col-md-3">
                                <h5>Audit Period</h5>
                                <p>May 2017 - June 2018</p>
                            </div>
                            <div className="col col-md-3">
                                <h5>Total Variance $</h5>
                                <p>22,979</p>
                            </div>
                            <div className="col col-md-3">
                                <h5>Network</h5>
                                <p>Networks 1, Networks 2, Networks 3, Networks 4, Networks 5</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-md-8">

                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h4>Digital Economy Var</h4>
                                                <p>$234,245</p>
                                            </th>
                                            <td>
                                                <h6>Select Resolution</h6>
                                                <select className="form-control">
                                                    {items.map(item => (
                                                        <option key={item.id}>{item.value}</option>
                                                        ))}
                                                </select>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={addItem}>Add</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <h4>Bulk EBU Var</h4>
                                                <p>$234,245</p>
                                            </th>
                                            <td>
                                                <h6>Select Resolution</h6>
                                                <select className="form-control">
                                                    {items.map(item => (
                                                        <option key={item.id}>{item.value}</option>
                                                        ))}
                                                </select> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <h4>Rate Var</h4>
                                                <p>$234,245</p>
                                            </th>
                                            <td>
                                                <h6>Select Resolution</h6>
                                                <select className="form-control">
                                                    {items.map(item => (
                                                        <option key={item.id}>{item.value}</option>
                                                        ))}
                                                </select> 
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>
                        </div>
                    
                    </div>
                </div>
                <button className="btn btn-danger" onClick={clickClose}>Cancel</button>
                <button className="btn btn-primary" onClick={clickSave}>Save</button>
            </Modal>

        </div>
    )
}

export default TestModal
