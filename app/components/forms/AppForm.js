import React from 'react';
import { Formik } from 'formik';


function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit} >
            {() => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

export default AppForm;