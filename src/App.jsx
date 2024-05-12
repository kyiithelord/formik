import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik initialValues={initialValue}>
        {() => (
          <>
            <Form>
              <Field type="email" name="email" id="email" />
              <Field type="password" name="password" id="password" />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;
