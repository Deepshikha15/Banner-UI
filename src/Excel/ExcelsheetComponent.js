import React, { useState } from "react";  
import { read, utils, writeFile } from 'xlsx';
import Pagination from "../Pagination";
import { useMemo } from "react";


let PageSize = 10;

const ExcelsheetComponent = () => {
    const [lists, setLists] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setLists(rows)
                }
            }
            reader.readAsArrayBuffer(file);



            var formData = new FormData()
            formData.append('file', files[0]);
            fetch('http://localhost:4000/api/createList', {
                method: 'POST',
                body: formData
            }).then(res => res.json())
            .then(data => {
                alert("CSV uploaded successfully");
                window.location.reload();
            })
            .catch((e)=>console.log(e))
        }
    }

    const handleExport = () => {
        const headings = [[
          'Index',
          'Height',
          'Weight',
        ]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, lists, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        
        writeFile(wb, 'List.xlsx');
    }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return lists.slice(firstPageIndex, lastPageIndex);
    }, [lists,currentPage]);
    // currentPage

    return (
        <>
            <div className="row mb-2 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <form enctype="multipart/form-data" >
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                 <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                 </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button onClick={handleExport} className="btn btn-primary float-right">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Height (Inches)</th>
                                <th scope="col">Weight (Pounds)</th>
                                {/* <th scope="col">Director</th>
                                <th scope="col">Rating</th> */}
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    lists.length
                                    ?
                                    currentTableData.map((list, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ list.Index }</th>
                                            {/* <td>{ list.Index }</td> */}
                                            <td>{ list.Height }</td>
                                            <td>{ list.Weight }</td>
                                            {/* <td><span className="badge bg-warning text-dark">{ movie.Rating }</span></td> */}
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No Record Found.</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                   
                   
                </div>
                
            </div>
            <div style={{textAlign:'center'}}>
                <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={lists.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                        />
                        </div>
           
            
        </>

    );
};

export default ExcelsheetComponent;

