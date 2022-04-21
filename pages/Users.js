import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link"
import { FiDelete, FiEdit } from "react-icons/fi";
import Modal from "../Components/Modal";
export default function Users({ personList }) {
  const router = useRouter();
  const handleDelete = async (id) => {
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_DB_HOST}basic/web/index.php/users/${id}`
      )
      .then(() => {
        router.push("/Users");
      });
  };
  const [values, setValues] = useState({
    titles: "",
    firstname: "",
    surname: "",
    photo: "",
    privilege: "",
    pwd: "",
    birthdate: "",
    email: "",
    pseudo: "",
    remark: "",
    actif: "",
    access_token: "",
    reset_token: "",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
  })
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value })
  }


  /*editing */
  const handleGet = async (id) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}basic/web/index.php/users/${id}`)
    setValues(res.data)
  }
  const handleUpdate = (id) => {
    try {
      axios.put(
        `${process.env.NEXT_PUBLIC_DB_HOST}basic/web/index.php/users/${id}`,
        values
      )
    } catch (error) {
      console.log(error);
    }
  };


  /* editing  end*/
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">
              <Modal personList={personList} />
            </th>
          </tr>
        </thead>
        <tbody>
          {personList &&
            personList.map((person) => {
              const { id } = person;
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td><Link href={`/Detay/${id}`}><a className="nav-link">{person.firstname}</a></Link></td>
                  <td>{person.surname}</td>
                  <td>{person.email}</td>
                   <td><Link href="/Comment"><a className="nav-link me-2" >Add Comment</a></Link></td>
                   <td><Link href="/NormalComment"><a className="nav-link me-2" >Normal Comment</a></Link></td>
                  <td>
                    <FiDelete onClick={() => handleDelete(id)} />
                  </td>
                  <td>
                    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModalTwo">
                      <FiEdit onClick={() => handleGet(id)} />
                    </div>
                    <div className="modal fade" id="exampleModalTwo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editing</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <form onSubmit={() => handleUpdate(id)} className="d-flex">
                              <div className="container">
                                <div className="mb-1">
                                  <label htmlFor="recipient-name" className="col-form-label">Titles</label>
                                  <input value={values.titles ?? ""} onChange={handleChange("titles")} type="number" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Firstname</label>
                                  <input value={values.firstname ?? ""} onChange={handleChange("firstname")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Surname</label>
                                  <input value={values.surname ?? ""} onChange={handleChange("surname")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Photo</label>
                                  <input value={values.photo ?? ""} onChange={handleChange("photo")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Privilege</label>
                                  <input value={values.privilege ?? ""} onChange={handleChange("privilege")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Pwd</label>
                                  <input value={values.pwd ?? ""} onChange={handleChange("pwd")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">BirthDate</label>
                                  <input value={values.birthdate ?? ""} onChange={handleChange("birthdate")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Email</label>
                                  <input value={values.email ?? ""} onChange={handleChange("email")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Pseudo</label>
                                  <input value={values.pseudo ?? ""} onChange={handleChange("pseudo")} className="form-control" id="message-text" />
                                </div>
                              </div>
                              <div className="container">
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Remark</label>
                                  <input value={values.remark ?? ""} onChange={handleChange("remark")} className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Actif</label>
                                  <input value={values.actif ?? ""} onChange={handleChange("actif")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Access token</label>
                                  <input value={values.access_token ?? ""} onChange={handleChange("access_token")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Reset token</label>
                                  <input value={values.reset_token ?? ""} onChange={handleChange("reset_token")} type="text" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Created at</label>
                                  <input value={values.created_at ?? ""} onChange={handleChange("created_at")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Updated at</label>
                                  <input value={values.updated_at ?? ""} onChange={handleChange("updated_at")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Created by</label>
                                  <input value={values.created_by ?? ""} onChange={handleChange("created_by")} type="number" className="form-control" id="message-text" />
                                </div>
                                <div className="mb-1">
                                  <label htmlFor="message-text" className="col-form-label">Updated by</label>
                                  <input value={values.updated_by ?? ""} onChange={handleChange("updated_by")} type="number" className="form-control" id="message-text" />
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => handleUpdate(id)} type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export async function getStaticProps(context) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DB_HOST}basic/web/index.php/users`
  );
  const result = await response.data;
  return {
    props: {
      personList: result,
    },
  };
}