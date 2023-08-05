import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteApi, ListApi } from '../Redux/Slice'

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        console.log(state?.Curd?.listValue?.data?.docs);
        return state?.Curd?.listValue?.data?.docs
    })
    useEffect(() => {
        dispatch(ListApi())
    }, [])

    const deleteData = ((e)=>{
        dispatch(DeleteApi(e))
    })
    useEffect(()=>{
    }, [])

    return (
        <>
            <div className='container mt-5'>
                <Link to='/adduser' className='btn btn-success'>AddUser</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Location</th>
                            <th scope="col">Image</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody className='mt-3'>
                        {
                            data && data.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{ e.uuid}</th>
                                            <td>{e.name }</td>
                                            <td>{e.status }</td>
                                            <td>{e.location?.name}</td>
                                            <td> <img src={e.url} className='img-fluid' height={100} width={100} alt={e.url} srcset="" /> </td>
                                            <Link to={`/edit/${e.uuid}`} className='btn btn-info mx-4'>Edit</Link>
                                            <Link onClick={() => deleteData(e._id)}  className='btn btn-danger'>Delete</Link>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

        </>
    )
}

export default Home