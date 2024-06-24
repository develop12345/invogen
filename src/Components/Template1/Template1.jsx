import React from "react";
import "./template1.css";
function Template1({ rowData }) {
  const tempData = rowData;
  if (!rowData) {
    return null;
  }
  
  const handlePrint = () => {
    window.print();
  };
//https://github.com/tuanpham-dev/react-invoice-generator/blob/master/src/components/DownloadPDF.tsx
  return (
    <>
    {tempData &&
      tempData.map((rowData, idx) => (
    <div className="invoice-1 invoice-content" id="template-content">
    
      <div className="invoice-1 invoice-content">
        <div className="container">
         
              <div className="row" key={idx}>
                <div className="col-lg-12">
                  <div className="invoice-inner clearfix">
                    <div className="invoice-info clearfix" id="invoice_wrapper">
                      <div className="invoice-headar">
                        <div className="row g-0">
                          <div className="col-sm-6">
                            <div className="invoice-logo">
                              <div className="logo">
                                <img
                                  src="assets/img/logos/logo.png"
                                  alt="logo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 invoice-id">
                            <div className="info">
                              <h1 className="color-white inv-header-1">
                                Invoice
                              </h1>
                              <p className="color-white mb-1">
                                Invoice Number <span>#45613</span>
                              </p>
                              <p className="color-white mb-0">
                                Invoice Date <span>21 Sep 2021</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-top">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="invoice-number mb-30">
                              <h4 className="inv-title-1">Invoice To</h4>
                              <h2 className="name mb-10">Jhon Smith</h2>
                              <p className="invo-addr-1">
                                Theme Vessel <br />
                                info@themevessel.com <br />
                                21-12 Green Street, Meherpur, Bangladesh <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="invoice-number mb-30">
                              <div className="invoice-number-inner">
                                <h4 className="inv-title-1">Invoice From</h4>
                                <h2 className="name mb-10">Animas Roky</h2>
                                <p className="invo-addr-1">
                                  Apexo Inc <br />
                                  billing@apexo.com <br />
                                  169 Teroghoria, Bangladesh <br />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-center">
                        <div className="table-responsive">
                          <table className="table mb-0 table-striped invoice-table">
                            <thead className="bg-active">
                              <tr className="tr">
                                <th>No.</th>
                                <th className="pl0 text-start">
                                  Item Description
                                </th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-end">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="tr">
                                <td>
                                  <div className="item-desc-1">
                                    <span>01</span>
                                  </div>
                                </td>
                                <td className="pl0">{rowData[0]}</td>
                                <td className="text-center">{rowData[1]}</td>
                                <td className="text-center">{rowData[2]}</td>
                                <td className="text-end">$600.00</td>
                              </tr>
                              <tr className="tr2">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="text-center">SubTotal</td>
                                <td className="text-end">$710.99</td>
                              </tr>
                              <tr className="tr2">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="text-center">Tax</td>
                                <td className="text-end">$85.99</td>
                              </tr>
                              <tr className="tr2">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="text-center f-w-600 active-color">
                                  Grand Total
                                </td>
                                <td className="f-w-600 text-end active-color">
                                  $795.99
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="invoice-bottom">
                        <div className="row">
                          <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="mb-30 dear-client">
                              <h3 className="inv-title-1">
                                Terms & Conditions
                              </h3>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                typesetting industry. Lorem Ipsum
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4 col-sm-5">
                            <div className="mb-30 payment-method">
                              <h3 className="inv-title-1">Payment Method</h3>
                              <ul className="payment-method-list-1 text-14">
                                <li>
                                  <strong>Account No:</strong> 00 123 647 840
                                </li>
                                <li>
                                  <strong>Account Name:</strong> Jhon Doe
                                </li>
                                <li>
                                  <strong>Branch Name:</strong> xyz
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-contact clearfix">
                        <div className="row g-0">
                          <div className="col-lg-9 col-md-11 col-sm-12">
                            <div className="contact-info">
                              <a href="tel:+55-4XX-634-7071">
                                <i className="fa fa-phone"></i> +00 123 647 840
                              </a>
                              <a href="tel:info@themevessel.com">
                                <i className="fa fa-envelope"></i>{" "}
                                info@themevessel.com
                              </a>
                              <a
                                href="tel:info@themevessel.com"
                                className="mr-0 d-none-580"
                              >
                                <i className="fa fa-map-marker"></i> 169
                                Teroghoria, Bangladesh
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-btn-section clearfix d-print-none">
                      <div
                        className="btn btn-lg btn-print"
                        onClick={handlePrint}
                      >
                        <i className="fa fa-print"></i> Print Invoice
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
    </div>
     ))}
     </>
  );
}

export default Template1;
