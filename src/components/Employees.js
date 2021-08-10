import React from 'react'
import employee from '../data/employees.json'

function Employees() {
    return (
        <section className="container m-auto mb-14 p-4 lg:p-0 lg:mb-28">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4 lg:mb-8">
                {employee && employee.map(({firstName, lastName, title, img, id}) => (
                    <li key={id} className="text-blue-extradark bg-white rounded-lg p-8 shadow-long border-b-4 border-blue-medium transform transition hover:-translate-y-2 flex items-center justify-center flex-col">
                        <div className="w-full h-64 mb-8 rounded overflow-hidden">
                            <img className="object-cover h-full w-full" alt={firstName} src={img} />
                        </div>
                        <h3 className="text-center text-xl font-bold">{firstName} {lastName}</h3>
                        <p className="text-blue-medium">{title}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Employees
