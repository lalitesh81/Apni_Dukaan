import React from "react";
import Layout from "./index";


const ContactUsComponent = (props) => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <span className="text-center text-2xl">
                <table className="table-auto border w-full my-2">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Phone No</th>
                            <th className="px-4 py-2 border">University Roll Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Lalitesh</td>
                            <td className="px-4 py-2 border">xxxxxxxx</td>
                            <td className="px-4 py-2 border">2013371</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Abhsihsk Mathur</td>
                            <td className="px-4 py-2 border">xxxxxxxx</td>
                            <td className="px-4 py-2 border">2013371</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Abhishek Singh</td>
                            <td className="px-4 py-2 border">xxxxxxxx</td>
                            <td className="px-4 py-2 border">2013371</td>
                        </tr>
                    </tbody>
                </table>
            </span>
        </div>
    );
};

const ContactUs = (props) => {
    return <Layout children={<ContactUsComponent />} />;
};

export default ContactUs;
