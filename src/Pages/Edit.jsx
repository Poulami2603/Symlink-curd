import { useFormik } from 'formik'
import React from 'react'

const Edit = () => {

    const initial = {
        name: "",
        location: "",
        status: "",
        img: ""
    }

    const {values, handleChange, handleSubmit, handleBlur, setFieldValue} = useFormik({
        initialValues: initial,
        onSubmit: (value) =>{

        }
    })

    
    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-5">
                <h4> Edit User </h4>
                <div>
                    <label> Name </label>
                    <input type="text" className="form-control" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div>
                    <select className="form-control form-control-lg " name='location' value={values.location} onChange={handleChange} onBlur={handleBlur}>
                        <option >Location</option>
                        <option name='location' value="Ramchandrapur">Ramchandrapur</option>
                        <option name='location' value="Jyangra">Jyangra</option>
                        <option name='location' value="Narendrapur">Narendrapur</option>
                    </select>
                </div>
                <div>
                    <select className="form-control form-control-lg " name='status' value={values.status} onChange={handleChange} onBlur={handleBlur}>
                        <option>Status</option>
                        <option name='status' value="1">1</option>
                        <option name='status' value="2">2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" name='img' onChange={(e) => setFieldValue("img", e.target.files[0])} onBlur={handleBlur} />
                </div>
                <div>
                    <button type="submit" className="btn btn-success px-4 py-2" > Edit User </button>
                </div>
            </form>
        </>
    )
}

export default Edit