import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import "./index.scss";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const AddPage = () => {
  const cardSchema = Yup.object().shape({
    cardTitle: Yup.string()
      .min(2, "Too short!")
      .max(20, "Too Long!")
      .required("Required"),
    cardDesc: Yup.string()
      .min(6, "Too short")
      .max(20, "Too Long!")
      .required("Required"),
    cardImg: Yup.string()
      .min(10, "short link")
      .max(20, "Too Long!")
      .required("Required"),
  });

  return (
    <div style={{ marginTop: "70px" }}>
      <Helmet>
        <title>Add Cards</title>
      </Helmet>
      <div className="add">
        <div className="container">
          <div className="content">
            <div className="head">
              <h2>ADD PAGE</h2>
            </div>
            <div className="body">
              <button>
                <Link to="/">GO back</Link>
              </button>
              <Formik
                initialValues={{
                  cardTitle: "",
                  cardDesc: "",
                  cardImg: "",
                }}
                validationSchema={cardSchema}
                onSubmit={(values) => {
                  axios.post("http://localhost:3000/cards", values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field name="cardTitle" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="cardDesc" />
                    {errors.cardDesc && touched.cardDesc ? (
                      <div>{errors.cardDesc}</div>
                    ) : null}
                    <Field name="cardImg" />
                    {errors.cardImg && touched.cardImg ? (
                      <div>{errors.cardImg}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
