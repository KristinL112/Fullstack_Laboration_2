import axios from 'axios'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import * as React from 'react'
import { useEffect, useState } from 'react'
import './Newsletter.css'

interface Values {
  news_id: string
  news_email: string
}
function Newsletter() {
  const [news_id, setNews_id] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`/newsletter`)
      setNews_id(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="column">
        <div className="col-md-8 mx-auto mt-5">
          <div className="form-group">
            <h3>Nyhetsbrev</h3>
            <p>
              Prenumerera för trädgårdsinspiration, nyheter och erbjudanden.
            </p>
            <Formik
              initialValues={{ news_id: '', news_email: '' }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                axios
                  .post('/newsletter', values)
                  .then(response => {
                    console.log(response.data)
                    alert('Prenumerationen lyckades!')
                  })
                  .catch(error => {
                    console.error(error)
                    alert('Något gick fel, vänligen försök igen senare.')
                  })
                  .finally(() => setSubmitting(false))
              }}
            >
              <Form>
                <Field
                  id="name"
                  name="news_id"
                  placeholder="John Doe"
                  className="form-control custom-field"
                />
                <label htmlFor="email">E-post</label>
                <Field
                  id="email"
                  name="news_email"
                  placeholder="john@acme.com"
                  type="email"
                  className="form-control custom-field"
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Prenumerera
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
