import React from 'react'
import { Sidebar } from './Sidebar'

export const CompletedProjects = () => {
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'cproject'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects ps-md-0" >

                        <div className="row w-100 mx-auto h-100">
                            <div className="col-12 py-md-4 py-3 completed-projects h-100">
                                <div className="bg-light rounded-3 p-3">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
