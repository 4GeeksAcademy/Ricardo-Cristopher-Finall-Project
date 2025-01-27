import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate, Navigate } from "react-router-dom";
import bgCarAdd from "../../img/bg-car-add.jpg"
import "../../styles/seller-add.css";
import NavbarSeller from "../component/navbarSeller.jsx";




const initialCar = {
    model_make_id: "",
    model_name: "",
    model_trim: "",
    model_year: "",
    model_body: "",
    make_country: "",
    model_amount: "",
    model_picture: ""
}
const AddCar = () => {

    const navigate = useNavigate()
    const [car, setCar] = useState(initialCar)
    const { store, actions } = useContext(Context)

    const handleChange = ({ target }) => {
        setCar({
            ...car,
            [target.name]: target.value
        })

    }

    const handleGetImage = async (event) => {
        console.log(event)
        try {
            setCar({
                ...car,
                model_picture: event.target.files[0]
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData()
            formData.append("model_make_id",car.model_make_id)
            formData.append("model_name", car.model_name)
            formData.append("model_trim",car.model_trim)
            formData.append("model_year", car.model_year)
            formData.append("model_body", car.model_body)
            formData.append("make_country",car.make_country)
            formData.append("model_amount",car.model_amount)
            formData.append("model_picture", car.model_picture)

            const response = await actions.addCar(formData)


            if (response == 200) {
                setCar(initialCar)
                alert("Car added")
            } else if (response == 400) {
                alert("Incomplete Data")
            } else {
                alert("Please try later")
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(store)
    return (
        <>
            {

                store.currentSeller ? (
                    <>
                        <NavbarSeller />
                        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-3">
                            <h1 className="text-center mb-4">
                                Welcome {store.currentSeller["name"]}
                                <p className="h6 text-muted">Add a new car</p>
                            </h1>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-8 col-sm-12">
                                        <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-sm">
                                            <div className="mb-3">
                                                <label className="form-label">Model Make</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Make"
                                                    name="model_make_id"
                                                    value={car.model_make_id}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Name"
                                                    name="model_name"
                                                    value={car.model_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Trim</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Trim"
                                                    name="model_trim"
                                                    value={car.model_trim}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Year</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Year"
                                                    name="model_year"
                                                    value={car.model_year}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Body</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Body"
                                                    name="model_body"
                                                    value={car.model_body}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Make Country</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Make Country"
                                                    name="make_country"
                                                    value={car.make_country}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Amount</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Model Amount"
                                                    name="model_amount"
                                                    value={car.model_amount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Model Picture</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="model_picture"
                                                    onChange={handleGetImage}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-warning w-100">Add Car</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                    : store.currentSeller == null ?
                        <h1>Cargando ruta privada</h1>
                        :
                        store.currentSeller == false &&
                        < Navigate to={"/login/sellers"} />

            }


        </>



    )

}


export default AddCar;