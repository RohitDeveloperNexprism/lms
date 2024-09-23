import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { getAddStaffRoutePage, getBankDetailsRoutePage, getDocumentInfoRoutePage, getPayrollDetailsRoutePage } from '../../../routes/routes';

export default function HrTab() {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <>
            <div className='staff_tab'>
                <div className={`staff_tab_wrapper`}>
                    <div className='staff_tab_btn_wrapper'>
                        <Link to={getAddStaffRoutePage()}>
                            <Button variant="primary" type="submit" className={`staff_tab_btn ${pathName === '/add-staff/' ? 'active' : ''}`}>
                                Basic Info
                            </Button>
                        </Link>
                        <Link to={getPayrollDetailsRoutePage()}>
                            <Button variant="primary" type="submit" className={`staff_tab_btn ${pathName === '/payroll-details/' ? 'active' : ''}`}>
                                Payroll Details
                            </Button>
                        </Link>
                        <Link to={getBankDetailsRoutePage()}>
                            <Button variant="primary" type="submit" className={`staff_tab_btn ${pathName === '/bank-details/' ? 'active' : ''}`}>
                                Bank Info Details
                            </Button>
                        </Link>
                        <Link to={getDocumentInfoRoutePage()}>
                            <Button variant="primary" type="submit" className={`staff_tab_btn ${pathName === '/documents-info/' ? 'active' : ''}`}>
                                Document Info
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Button variant="primary" type="submit" className="save_staff_btn">
                            Save Staff
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
